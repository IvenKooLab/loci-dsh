/**
 * Reader for loci's memories directory (loci config `[memories] path`, default
 * `./memories`): plain frontmatter-markdown files named
 * `YYYYMMDD-HHMMSS-<slug>.md` — the filename IS the sort key, so a full
 * chronological timeline needs no loci endpoint. Read directly from disk with
 * an mtime cache (same rationale as graph.ts: these files are human-readable
 * artifacts by design).
 */
import { readdir, readFile, stat } from 'node:fs/promises'
import { join } from 'node:path'

export interface MemoryEntry {
  /** File name (the on-disk id). */
  path: string
  title: string
  /** `YYYY-MM-DD HH:MM` from frontmatter when present, else from the filename. */
  created: string
  /** Epoch seconds parsed from the filename (sort key). */
  ts: number
  tags: string[]
  /** Full body below the frontmatter, capped. */
  text: string
}

interface CachedListing {
  mtimeMs: number
  entries: MemoryEntry[]
}

const cache = new Map<string, CachedListing>()

const NAME_TS = /^(\d{4})(\d{2})(\d{2})-(\d{2})(\d{2})(\d{2})-/
const MAX_FILES = 200
const MAX_TEXT = 4096

function frontmatterOf(raw: string): { meta: Record<string, string>; body: string } {
  if (!raw.startsWith('---')) return { meta: {}, body: raw }
  const end = raw.indexOf('\n---', 3)
  if (end === -1) return { meta: {}, body: raw }
  const meta: Record<string, string> = {}
  for (const line of raw.slice(3, end).split(/\r?\n/)) {
    const kv = /^(\w[\w-]*):\s*(.*)$/.exec(line.trim())
    if (kv !== null) meta[kv[1]] = kv[2].trim()
  }
  return { meta, body: raw.slice(raw.indexOf('\n', end + 1) + 1) }
}

function tagsOf(value: string | undefined): string[] {
  if (value === undefined) return []
  const inner = value.replace(/^\[/, '').replace(/\]$/, '')
  return inner.split(',').map(tag => tag.trim().replace(/^['"]|['"]$/g, '')).filter(tag => tag !== '')
}

function parseEntry(fileName: string, raw: string): MemoryEntry {
  const { meta, body } = frontmatterOf(raw)
  const nameTs = NAME_TS.exec(fileName)
  const ts = nameTs === null
    ? 0
    : Date.UTC(Number(nameTs[1]), Number(nameTs[2]) - 1, Number(nameTs[3]), Number(nameTs[4]), Number(nameTs[5]), Number(nameTs[6])) / 1000
  const fallbackCreated = nameTs === null
    ? ''
    : `${nameTs[1]}-${nameTs[2]}-${nameTs[3]} ${nameTs[4]}:${nameTs[5]}`
  const title = (meta.title ?? '').replace(/^#/, '').trim() || fileName.replace(/\.md$/, '')
  const bodyText = body.replace(new RegExp(`^#\\s*${title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*\\n?`), '').trim()
  return {
    path: fileName,
    title,
    created: meta.created ?? fallbackCreated,
    ts,
    tags: tagsOf(meta.tags),
    text: bodyText.length > MAX_TEXT ? `${bodyText.slice(0, MAX_TEXT)}…` : bodyText,
  }
}

/** List the memories directory newest-first, or null when unset/absent. */
export async function listMemories(memoriesPath: string): Promise<MemoryEntry[] | null> {
  if (memoriesPath.trim() === '') return null
  let dirMtimeMs: number
  let fileNames: string[]
  try {
    dirMtimeMs = (await stat(memoriesPath)).mtimeMs
    fileNames = (await readdir(memoriesPath)).filter(name => name.endsWith('.md') && !name.startsWith('.')).sort().reverse()
  } catch {
    cache.delete(memoriesPath)
    return null
  }
  const hit = cache.get(memoriesPath)
  // Directory mtime only moves on add/remove; per-file edits are rare for
  // append-only memories, and the client can force-refresh by toggling the
  // view. Good enough for a timeline.
  if (hit !== undefined && hit.mtimeMs === dirMtimeMs) return hit.entries
  const entries: MemoryEntry[] = []
  for (const fileName of fileNames.slice(0, MAX_FILES)) {
    try {
      entries.push(parseEntry(fileName, await readFile(join(memoriesPath, fileName), 'utf-8')))
    } catch {
      continue
    }
  }
  cache.set(memoriesPath, { mtimeMs: dirMtimeMs, entries })
  return entries
}
