/**
 * Typed HTTP client for loci's `serve-http` REST API (loci-rag v0.5.0).
 *
 * All loci endpoints answer with single-string envelopes
 * (`{"result": "..."}` / `{"stats": "..."}`) — this client unwraps them and
 * maps transport failures onto LociError codes the UI can render directly.
 */
import type { Config } from './index.ts'

export interface SearchArgs {
  query: string
  k?: number
  tag?: string
  in?: string
}

export interface AskArgs {
  question: string
  verify?: boolean
}

export interface RememberArgs {
  text: string
  title?: string
  tags?: string[]
}

/** Error with a stable machine code: 'loci-unreachable' | 'loci-unauthorized' | 'loci-timeout' | 'loci-error'. */
export class LociError extends Error {
  constructor(
    readonly code: string,
    message: string,
  ) {
    super(message)
  }
}

export class LociClient {
  constructor(private readonly config: Config) {}

  get baseUrl(): string {
    return this.config.baseUrl
  }

  get tokenSet(): boolean {
    return this.config.token !== ''
  }

  /** False when neither config row nor env provided a token — loci would 401 every call. */
  get configured(): boolean {
    return this.tokenSet
  }

  private async request(path: string, init?: { body?: unknown; timeoutMs?: number }): Promise<unknown> {
    const timeoutMs = init?.timeoutMs ?? this.config.timeoutMs
    let response: Response
    try {
      response = await fetch(`${this.config.baseUrl}${path}`, {
        method: init?.body === undefined ? 'GET' : 'POST',
        headers: {
          authorization: `Bearer ${this.config.token}`,
          ...(init?.body === undefined ? {} : { 'content-type': 'application/json' }),
        },
        body: init?.body === undefined ? undefined : JSON.stringify(init.body),
        signal: AbortSignal.timeout(timeoutMs),
      })
    } catch (error) {
      const cause = error instanceof Error ? error : undefined
      if (cause?.name === 'TimeoutError' || cause?.name === 'AbortError') {
        throw new LociError('loci-timeout', `loci did not answer within ${Math.round(timeoutMs / 1000)}s (${path})`)
      }
      throw new LociError(
        'loci-unreachable',
        `cannot reach loci at ${this.config.baseUrl}${path} — is "loci serve-http" running? (${cause?.message ?? String(error)})`,
      )
    }
    if (response.status === 401) {
      throw new LociError(
        'loci-unauthorized',
        'loci rejected the bearer token — set [http] token in loci config.toml and the same value in this plugin\'s config (or LOCI_TOKEN)',
      )
    }
    if (!response.ok) {
      const snippet = (await response.text()).slice(0, 200)
      throw new LociError('loci-error', `loci ${path} returned HTTP ${response.status}: ${snippet}`)
    }
    try {
      return await response.json()
    } catch {
      throw new LociError('loci-error', `loci ${path} returned a non-JSON body`)
    }
  }

  private unwrapString(data: unknown, field: string, path: string): string {
    const value = (data as Record<string, unknown> | undefined)?.[field]
    if (typeof value !== 'string') {
      throw new LociError('loci-error', `loci ${path} returned no "${field}" string`)
    }
    return value
  }

  async health(): Promise<string> {
    const data = await this.request('/health', { timeoutMs: 3000 })
    const status = (data as Record<string, unknown> | undefined)?.status
    return typeof status === 'string' ? status : 'unknown'
  }

  async stats(): Promise<string> {
    const data = await this.request('/stats')
    return this.unwrapString(data, 'stats', '/stats')
  }

  async search(args: SearchArgs): Promise<string> {
    const data = await this.request('/search', {
      body: {
        query: args.query,
        ...(args.k === undefined ? {} : { k: args.k }),
        ...(args.tag === undefined ? {} : { tag: args.tag }),
        ...(args.in === undefined ? {} : { in: args.in }),
      },
    })
    return this.unwrapString(data, 'result', '/search')
  }

  async ask(args: AskArgs): Promise<string> {
    const data = await this.request('/ask', {
      body: {
        question: args.question,
        ...(args.verify === undefined ? {} : { verify: args.verify }),
      },
      // /ask runs a full LLM round-trip (glm-4.6 measured ~21s) — use the
      // dedicated long budget, not the short one.
      timeoutMs: this.config.askTimeoutMs,
    })
    return this.unwrapString(data, 'result', '/ask')
  }

  async remember(args: RememberArgs): Promise<string> {
    const data = await this.request('/remember', {
      body: {
        text: args.text,
        ...(args.title === undefined ? {} : { title: args.title }),
        ...(args.tags === undefined || args.tags.length === 0 ? {} : { tags: args.tags }),
      },
    })
    return this.unwrapString(data, 'result', '/remember')
  }
}

