/**
 * Safe markdown rendering for loci content (search chunks, ask answers,
 * memory bodies). The source comes from the user's own knowledge base, but
 * ingested pages can carry arbitrary HTML — so raw HTML is escaped BEFORE
 * parsing (markdown syntax itself needs no literal < >), which makes the
 * output structurally free of injected tags. Images are stripped to their
 * alt text (local file paths would render as broken imgs).
 */
import { marked } from 'marked'

marked.setOptions({ gfm: true, breaks: true })

export function renderMd(raw: string): string {
  const noImages = raw.replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
  const escaped = noImages.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  const html = marked.parse(escaped) as string
  return html.replaceAll('<a href', '<a target="_blank" rel="noreferrer" href')
}
