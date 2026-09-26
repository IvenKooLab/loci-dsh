/**
 * Reader for loci's knowledge-graph artifact (loci ≥ 0.6.0 `loci graph build`
 * output): `{version, processed: {file → hash}, entities: {name → {degree,
 * sources[]}}, edges: [{s, p, o, source, ts}]}`. Read directly from disk with
 * an mtime cache — the file only changes when the user rebuilds the graph.
 */
import { readFile, stat } from 'node:fs/promises'

export interface GraphEdge {
  s: string
  p: string
  o: string
  source: string
  ts?: number
}

export interface GraphEntity {
  name: string
  degree: number
  sources: string[]
}

export interface GraphData {
  version: number
  entities: GraphEntity[]
  edges: GraphEdge[]
  files: number
}

interface CachedGraph {
  mtimeMs: number
  data: GraphData
}

const cache = new Map<string, CachedGraph>()

function normalize(data: unknown): GraphData {
  const record = (data ?? {}) as Record<string, unknown>
  const rawEntities = (record.entities ?? {}) as Record<string, { degree?: unknown; sources?: unknown }>
  const entities: GraphEntity[] = Object.entries(rawEntities)
    .map(([name, meta]) => ({
      name,
      degree: typeof meta?.degree === 'number' ? meta.degree : 0,
      sources: Array.isArray(meta?.sources) ? meta.sources.filter((s): s is string => typeof s === 'string') : [],
    }))
    .sort((a, b) => b.degree - a.degree || a.name.localeCompare(b.name))
  const rawEdges = Array.isArray(record.edges) ? record.edges : []
  const edges: GraphEdge[] = rawEdges
    .filter((edge): edge is Record<string, unknown> => typeof edge === 'object' && edge !== null)
    .map((edge) => ({
      s: String(edge.s ?? ''),
      p: String(edge.p ?? ''),
      o: String(edge.o ?? ''),
      source: String(edge.source ?? ''),
      ...(typeof edge.ts === 'number' ? { ts: edge.ts } : {}),
    }))
    .filter((edge) => edge.s !== '' && edge.o !== '')
  return {
    version: typeof record.version === 'number' ? record.version : 1,
    entities,
    edges,
    files: Object.keys((record.processed ?? {}) as Record<string, unknown>).length,
  }
}

/**
 * Load the graph file, or null when graphPath is unset / the file is absent
 * (loci < 0.6.0, or `loci graph build` never ran — the view renders a hint).
 */
export async function loadGraph(graphPath: string): Promise<GraphData | null> {
  if (graphPath.trim() === '') return null
  let mtimeMs: number
  try {
    mtimeMs = (await stat(graphPath)).mtimeMs
  } catch {
    cache.delete(graphPath)
    return null
  }
  const hit = cache.get(graphPath)
  if (hit !== undefined && hit.mtimeMs === mtimeMs) return hit.data
  try {
    const data = normalize(JSON.parse(await readFile(graphPath, 'utf-8')))
    cache.set(graphPath, { mtimeMs, data })
    return data
  } catch {
    return null
  }
}
