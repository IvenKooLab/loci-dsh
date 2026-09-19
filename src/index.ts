/**
 * loci-dsh, node half.
 *
 * A thin HTTP proxy: mounts `/loci-dsh/api/*` on the dsh web server
 * and forwards JSON calls to a running `loci serve-http` instance
 * (search / ask / remember / stats / health, Bearer auth). The browser-side
 * half is same-origin with this server, so the proxy also sidesteps the fact
 * that loci's HTTP API ships no CORS headers — the browser never talks to
 * loci directly, only the host process does.
 *
 * Routes mount through dynamic `ctx.inject(['webServer'])` so headless
 * profiles without a web server still load the plugin harmlessly. Every
 * request passes the same Host-header loopback fence the dsh /api gateway
 * uses (DNS-rebinding defense, not authentication).
 */
import { LociClient, LociError } from './loci-client.ts'
import { parseAskAnswer, parseSearchText, parseStatsText } from './parse.ts'
import { isTrustedApiRequest } from './trust-fence.ts'

export const name = 'loci-dsh'
// webServer is deliberately absent: headless profiles have no web server, and
// the routes below mount through ctx.inject(['webServer']) instead.
export const inject: readonly string[] = []

/** Deployment-tunable knobs: every field can be set from the profile's
 * cordis.patch.yml plugin row (`config:`) or the LOCI_URL / LOCI_TOKEN env
 * vars, without touching code. */
export interface Config {
  /** Base URL of the loci serve-http instance. */
  baseUrl: string
  /** Bearer token from loci's config.toml `[http] token`. */
  token: string
  /** Timeout for short calls (health / stats / search / remember), ms. */
  timeoutMs: number
  /** Timeout for /ask — it runs a full LLM round-trip, tens of seconds. */
  askTimeoutMs: number
}

export const DEFAULT_CONFIG: Config = {
  baseUrl: 'http://127.0.0.1:8765',
  token: '',
  timeoutMs: 20_000,
  askTimeoutMs: 180_000,
}

export function resolveConfig(config?: Partial<Config>): Config {
  return {
    baseUrl: config?.baseUrl ?? process.env.LOCI_URL ?? DEFAULT_CONFIG.baseUrl,
    token: config?.token ?? process.env.LOCI_TOKEN ?? DEFAULT_CONFIG.token,
    timeoutMs: config?.timeoutMs ?? DEFAULT_CONFIG.timeoutMs,
    askTimeoutMs: config?.askTimeoutMs ?? DEFAULT_CONFIG.askTimeoutMs,
  }
}

/** Structural slice of the cordis Context the host half needs. */
interface ContextLike {
  effect(body: () => (() => void) | void, label?: string): void
  inject(deps: readonly string[], callback: (ctx: ContextLike) => void): () => void
  logger?: { warn(message: string): void }
  webServer?: {
    register(entry: {
      kind: 'prefix' | 'exact'
      path: string
      handler: (req: NodeIncomingMessage, res: NodeServerResponse) => void | Promise<void>
    }): () => void
  }
  webRuntime?: { trustedHosts: readonly string[] }
}

interface NodeIncomingMessage {
  method?: string
  url?: string
  headers: Record<string, string | string[] | undefined>
  on(event: 'data', listener: (chunk: Buffer) => void): void
  on(event: 'end', listener: () => void): void
  on(event: 'error', listener: (error: Error) => void): void
}

interface NodeServerResponse {
  writeHead(status: number, headers?: Record<string, string>): void
  end(body?: string | Buffer): void
}

/**
 * Route prefix: a plugin-owned namespace (like better-sidebar's /sidebar).
 * NOT /plugins/<pkg>/... — that path family belongs to the web runtime's own
 * module-serving routes, which answer 400 before plugin routes are consulted.
 */
const API_PREFIX = '/loci-dsh/api'

function writeJson(res: NodeServerResponse, status: number, body: unknown): void {
  const text = JSON.stringify(body)
  res.writeHead(status, { 'content-type': 'application/json; charset=utf-8' })
  res.end(text)
}

function writeError(res: NodeServerResponse, code: string, message: string, status = 400): void {
  writeJson(res, status, { ok: false, error: { code, message } })
}

function readJsonBody(req: NodeIncomingMessage, limitBytes = 1 << 20): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = []
    let size = 0
    req.on('data', (chunk: Buffer) => {
      size += chunk.length
      if (size > limitBytes) {
        reject(new Error('request body too large'))
        return
      }
      chunks.push(chunk)
    })
    req.on('end', () => {
      const raw = Buffer.concat(chunks).toString('utf-8')
      if (raw.trim() === '') {
        resolve({})
        return
      }
      try {
        resolve(JSON.parse(raw))
      } catch {
        reject(new Error('request body is not valid JSON'))
      }
    })
    req.on('error', (error: Error) => reject(error))
  })
}

function requireString(payload: unknown, field: string): string {
  const value = (payload as Record<string, unknown> | undefined)?.[field]
  if (typeof value !== 'string') throw new BadRequestError(`field "${field}" must be a string`)
  return value
}

class BadRequestError extends Error {}

export function apply(ctx: ContextLike, config?: Partial<Config>): void {
  const resolved = resolveConfig(config)
  const client = new LociClient(resolved)
  ctx.inject(['webServer', 'webRuntime'], (wctx) => {
    const trustedHosts = (): readonly string[] => wctx.webRuntime?.trustedHosts ?? []
    wctx.effect(() => wctx.webServer!.register({
      kind: 'prefix',
      path: API_PREFIX,
      handler: async (req, res) => {
        try {
          await handleApiRequest(client, trustedHosts(), req, res)
        } catch (error) {
          // The webServer's wrapper turns unhandled handler errors into an
          // empty 400; surface the real cause through the plugin logger
          // before rethrowing so failures stay diagnosable.
          ctx.logger?.warn(`[loci-dsh] handler error: ${error instanceof Error ? error.message : String(error)}`)
          throw error
        }
      },
    }), 'loci-dsh: /loci-dsh/api routes')
  })
}

async function handleApiRequest(
  client: LociClient,
  trustedHosts: readonly string[],
  req: NodeIncomingMessage,
  res: NodeServerResponse,
): Promise<void> {
  if (!isTrustedApiRequest(req, trustedHosts)) {
    writeError(res, 'forbidden', 'forbidden', 403)
    return
  }
  if (req.method !== 'POST') {
    writeError(res, 'method-error', 'method not allowed', 405)
    return
  }
  const pathname = new URL(req.url ?? '/', 'http://dsh.internal').pathname
  const method = pathname.startsWith(`${API_PREFIX}/`) ? pathname.slice(API_PREFIX.length + 1) : undefined
  if (method === undefined || method.includes('/')) {
    writeError(res, 'not-found', 'unknown loci-dsh API method', 404)
    return
  }
  try {
    const payload = await readJsonBody(req) as Record<string, unknown>
    const data = await dispatch(client, method, payload)
    writeJson(res, 200, { ok: true, ...data })
  } catch (error) {
    if (error instanceof BadRequestError) {
      writeError(res, 'bad-request', error.message)
    } else if (error instanceof LociError) {
      writeJson(res, 200, { ok: false, error: { code: error.code, message: error.message } })
    } else {
      writeError(res, 'internal', error instanceof Error ? error.message : String(error), 500)
    }
  }
}

async function dispatch(client: LociClient, method: string, payload: Record<string, unknown>): Promise<Record<string, unknown>> {
  if (method === 'ping') {
    const health = await client.health()
    return { configured: client.configured, baseUrl: client.baseUrl, tokenSet: client.tokenSet, health }
  }
  if (method === 'stats') {
    const stats = await client.stats()
    return { stats: parseStatsText(stats), raw: stats }
  }
  if (method === 'search') {
    const query = requireString(payload, 'query').trim()
    // loci ≤ 0.5.x: an empty query crashes the handler thread (drops the
    // connection). Fixed upstream in v0.6.2 (short-circuits with a hint) —
    // the guard stays as a fallback for older loci installs.
    if (query === '') throw new BadRequestError('query must not be empty')
    const k = typeof payload.k === 'number' ? payload.k : undefined
    const tag = typeof payload.tag === 'string' && payload.tag.trim() !== '' ? payload.tag.trim() : undefined
    const inPath = typeof payload.in === 'string' && payload.in.trim() !== '' ? payload.in.trim() : undefined
    const result = await client.search({ query, k, tag, in: inPath })
    return { hits: parseSearchText(result), raw: result }
  }
  if (method === 'ask') {
    const question = requireString(payload, 'question').trim()
    if (question === '') throw new BadRequestError('question must not be empty')
    const verify = payload.verify === true
    const result = await client.ask({ question, verify })
    return { answer: parseAskAnswer(result), raw: result }
  }
  if (method === 'remember') {
    const text = requireString(payload, 'text').trim()
    if (text === '') throw new BadRequestError('text must not be empty')
    const title = typeof payload.title === 'string' && payload.title.trim() !== '' ? payload.title.trim() : undefined
    const tags = Array.isArray(payload.tags) ? payload.tags.filter((tag): tag is string => typeof tag === 'string') : undefined
    const result = await client.remember({ text, title, tags })
    return { result }
  }
  throw new BadRequestError(`unknown loci-dsh API method "${method}"`)
}
