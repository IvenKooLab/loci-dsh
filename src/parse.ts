/**
 * Parsers for loci v0.5.0's plain-text response envelopes. The HTTP API
 * serializes structured data into display strings before responding, so the
 * plugin re-derives the structure on the host side. All formats below were
 * verified against a live `serve-http` instance (see docs/api-probe notes);
 * they are part of loci's de-facto wire format — extend, don't rename.
 */

export interface SearchHit {
  index: number
  /** Absolute source path, verbatim (loci uses platform separators). */
  source: string
  /** ` > `-joined heading chain after the path; empty when absent. */
  section: string
  /** Chunk text, verbatim (already truncated to 500 chars by loci). */
  text: string
  /** Present when the source is a memory file: its filename timestamp, ISO-like. */
  memoryTime?: string
}

export interface ParsedStats {
  storePath: string
  chunks: number
  embedModel: string
  llmModel: string
  retrieval: string
  sources: Array<{ path: string; chunks: number }>
  empty: boolean
}

export interface ParsedAsk {
  /** Answer text with the trailing [source: ...] lines removed. */
  body: string
  /** Parsed citation lines, e.g. "E:\\notes\\a.md > 章节". */
  sources: string[]
}

/** `[3] path > section > nested` header at line start begins a new hit block. */
const HIT_HEADER = /^\[(\d+)\] (.+)$/gm

/**
 * Memory filenames embed their creation time: `YYYYMMDD-HHMMSS-slug.md`.
 * Returns e.g. "2026-09-19 14:49" or undefined for non-memory sources.
 */
export function memoryTimeOf(source: string): string | undefined {
  const match = /(\d{4})(\d{2})(\d{2})-(\d{2})(\d{2})(\d{2})-/.exec(source)
  if (match === null) return undefined
  return `${match[1]}-${match[2]}-${match[3]} ${match[4]}:${match[5]}`
}

export function parseSearchText(result: string): SearchHit[] {
  if (result === '(no results)' || result.trim() === '') return []
  const hits: SearchHit[] = []
  const headers: Array<{ index: number; header: string; start: number; end: number }> = []
  HIT_HEADER.lastIndex = 0
  for (let match = HIT_HEADER.exec(result); match !== null; match = HIT_HEADER.exec(result)) {
    headers.push({ index: Number(match[1]), header: match[2], start: match.index + match[0].length, end: match.index })
  }
  for (let i = 0; i < headers.length; i += 1) {
    const block = headers[i]
    const text = result.slice(block.start, i + 1 < headers.length ? headers[i + 1].end : result.length).trim()
    // The header is `path > section > ...` — split only on the first " > "
    // (sections may themselves contain " > " as a nested heading chain).
    const separator = block.header.indexOf(' > ')
    const source = separator === -1 ? block.header : block.header.slice(0, separator)
    const section = separator === -1 ? '' : block.header.slice(separator + 3)
    hits.push({
      index: block.index,
      source,
      section,
      text,
      ...(memoryTimeOf(source) === undefined ? {} : { memoryTime: memoryTimeOf(source) }),
    })
  }
  return hits
}

export function parseStatsText(stats: string): ParsedStats {
  const parsed: ParsedStats = {
    storePath: '',
    chunks: 0,
    embedModel: '',
    llmModel: '',
    retrieval: '',
    sources: [],
    empty: false,
  }
  for (const rawLine of stats.split(/\r?\n/)) {
    const line = rawLine.trimEnd()
    const store = /^store\s*:\s*(.+?)\s+\((\d+) chunks\)$/.exec(line)
    if (store !== null) {
      parsed.storePath = store[1]
      parsed.chunks = Number(store[2])
      continue
    }
    const models = /^models\s*:\s*(.+?)\s+\(embed\)\s*\/\s*(.+?)\s+\(llm\)$/.exec(line)
    if (models !== null) {
      parsed.embedModel = models[1]
      parsed.llmModel = models[2]
      continue
    }
    const retrieval = /^retrieval\s*:\s*(.+)$/.exec(line)
    if (retrieval !== null) {
      parsed.retrieval = retrieval[1]
      continue
    }
    if (/^sources\s*:\s*\(index is empty/.test(line)) {
      parsed.empty = true
      continue
    }
    // source rows: two-space indent, `path  N chunks`
    const source = /^  (.+?)\s+(\d+) chunks$/.exec(rawLine)
    if (source !== null) {
      parsed.sources.push({ path: source[1], chunks: Number(source[2]) })
    }
  }
  return parsed
}

export function parseAskAnswer(result: string): ParsedAsk {
  // Citation lines are single `[source: path > section]` lines. With
  // verify=true loci appends a claim-check block AFTER the citations, so
  // collect them anywhere in the response instead of assuming a tail block.
  const sources: string[] = []
  const bodyLines = result.split(/\r?\n/).filter((line) => {
    const source = /^\[source:\s*(.+?)\s*\]$/.exec(line.trim())
    if (source !== null) {
      sources.push(source[1])
      return false
    }
    return true
  })
  return { body: bodyLines.join('\n').trimEnd(), sources }
}

/** One row of loci's `/harness` payload (both builds, same shape). */
export interface HarnessRow {
  name: string
  display: string
  type: string
  icon: string
  files: number
  chunks: number
  lastUpdated: string
  summaryStatus: string
  /** Roots that vanished: configured but not installed on this machine. */
  missingRoots: number
}

function asNumber(value: unknown): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : 0
}

function asString(value: unknown): string {
  return typeof value === 'string' ? value : ''
}

/** Normalise `/harness` rows; unknown fields must not break the panel. */
export function parseHarness(rows: unknown[]): HarnessRow[] {
  return rows
    .filter((row): row is Record<string, unknown> => typeof row === 'object' && row !== null)
    .map(row => {
      const summary = row.summary
      return {
        name: asString(row.name),
        display: asString(row.display) || asString(row.name),
        type: asString(row.type),
        icon: asString(row.icon),
        files: asNumber(row.files),
        chunks: asNumber(row.chunks),
        lastUpdated: asString(row.last_updated),
        summaryStatus: typeof summary === 'object' && summary !== null
          ? asString((summary as Record<string, unknown>).status)
          : '',
        missingRoots: asNumber(row.missing_roots),
      }
    })
    .sort((a, b) => a.display.localeCompare(b.display))
}

/** The wikilink graph served by `GET /graph` on both builds. */
export interface WikiNode {
  path: string
  /** Indexed chunk count; 0 for a link target that is not (yet) a real file. */
  chunks: number
  /** File stem, the label a note is known by in `[[wikilinks]]`. */
  name: string
}

export interface WikiLink {
  from: string
  /** Bare target as written in the note — resolved by the UI, not by loci. */
  to: string
}

export interface WikiGraph {
  nodes: WikiNode[]
  links: WikiLink[]
}

function stemOf(path: string): string {
  const base = path.split('/').pop() ?? path
  return base.replace(/\.md$/i, '')
}

/** Normalise `/graph`; a malformed row is dropped, never rendered as garbage. */
export function parseWikiGraph(data: unknown): WikiGraph {
  const record = (data ?? {}) as Record<string, unknown>
  const rawNodes = Array.isArray(record.nodes) ? record.nodes : []
  const rawLinks = Array.isArray(record.links) ? record.links : []
  const nodes: WikiNode[] = rawNodes
    .filter((n): n is Record<string, unknown> => typeof n === 'object' && n !== null)
    .map(n => ({
      path: asString(n.path),
      chunks: asNumber(n.chunks),
      name: stemOf(asString(n.path)),
    }))
    .filter(n => n.path !== '')
  const links: WikiLink[] = rawLinks
    .filter((l): l is unknown[] => Array.isArray(l) && l.length >= 2)
    .map(l => ({ from: asString(l[0]), to: asString(l[1]) }))
    .filter(l => l.from !== '' && l.to !== '')
  return { nodes, links }
}
