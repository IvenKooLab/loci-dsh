/**
 * The loci tab UI. Four inner views share one header strip (connection dot +
 * store summary); every data call goes to the node half's /loci-dsh/api
 * routes same-origin.
 */
import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { currentLocale, format } from './locale.ts'
import styles from './styles.module.css'

export interface SearchHit {
  index: number
  source: string
  section: string
  text: string
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

interface ApiOk { ok: true }
type ApiEnvelope<T> = (ApiOk & T) | { ok: false; error: { code: string; message: string } }

async function callApi<T>(method: string, payload: Record<string, unknown> = {}): Promise<ApiEnvelope<T>> {
  try {
    const response = await fetch(`/loci-dsh/api/${method}`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
    })
    const data = await response.json() as ApiEnvelope<T>
    return data
  } catch {
    return { ok: false, error: { code: 'fallback', message: 'network error' } }
  }
}

function useApiError(): { error: { code: string; message: string } | null, setError: (e: { code: string; message: string } | null) => void, render: () => ReactNode } {
  const [error, setError] = useState<{ code: string; message: string } | null>(null)
  const t = currentLocale()
  const render = useCallback((): ReactNode => {
    if (error === null) return null
    const known = (t as Record<string, string>)[`error.${error.code}`]
    return (
      <div className={styles.errorBox} role="alert">
        <div>{known ?? t['error.fallback']}（{error.code}）</div>
        <div className={styles.errorDetail}>{error.message}</div>
      </div>
    )
  }, [error, t])
  return { error, setError, render }
}

function basename(path: string): string {
  const normalized = path.replaceAll('\\', '/')
  const slash = normalized.lastIndexOf('/')
  return slash === -1 ? normalized : normalized.slice(slash + 1)
}

const K_OPTIONS = [5, 10, 20, 50]

export function LociTab(props: { readonly visible: boolean }): ReactNode {
  const t = currentLocale()
  const [view, setView] = useState<'search' | 'ask' | 'memory' | 'status'>('search')
  const [ping, setPing] = useState<'checking' | 'up' | 'down' | 'no-token'>('checking')
  const [summary, setSummary] = useState<string>('')

  const refreshStatus = useCallback(async () => {
    setPing('checking')
    const result = await callApi<{ configured: boolean; baseUrl: string; tokenSet: boolean; health: string }>('ping')
    if (!result.ok) {
      setPing('down')
      return
    }
    setPing(result.tokenSet ? (result.health === 'ok' ? 'up' : 'down') : 'no-token')
    const stats = await callApi<{ stats: ParsedStats }>('stats')
    if (stats.ok) {
      setSummary(`${format(t['status.chunks'], { n: stats.stats.chunks })} · ${format(t['status.sources'], { n: stats.stats.sources.length })}`)
    }
  }, [t])

  useEffect(() => {
    if (props.visible) void refreshStatus()
  }, [props.visible, refreshStatus])

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <span
          className={`${styles.dot} ${ping === 'up' ? styles.dotUp : ping === 'checking' ? styles.dotChecking : styles.dotDown}`}
          aria-label={ping === 'up' ? t['conn.connected'] : t['conn.disconnected']}
        />
        <span className={styles.headerSummary}>
          {ping === 'up' ? summary || t['conn.connected'] : ping === 'no-token' ? t['conn.noToken'] : ping === 'checking' ? t['conn.checking'] : t['conn.disconnected']}
        </span>
        <button type="button" className={styles.headerButton} onClick={() => void refreshStatus()} title={t['status.refresh']}>⟳</button>
      </div>
      <div className={styles.tabs} role="tablist">
        {(['search', 'ask', 'memory', 'status'] as const).map(key => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={view === key}
            className={`${styles.tabButton} ${view === key ? styles.tabActive : ''}`}
            onClick={() => setView(key)}
          >
            {t[`view.${key}` as const]}
          </button>
        ))}
      </div>
      <div className={styles.body}>
        {view === 'search' && <SearchView />}
        {view === 'ask' && <AskView />}
        {view === 'memory' && <MemoryView onSaved={() => void refreshStatus()} />}
        {view === 'status' && <StatusView />}
      </div>
    </div>
  )
}

function SearchView(): ReactNode {
  const t = currentLocale()
  const [query, setQuery] = useState('')
  const [k, setK] = useState(10)
  const [memoriesOnly, setMemoriesOnly] = useState(false)
  const [filterIn, setFilterIn] = useState('')
  const [hits, setHits] = useState<SearchHit[] | null>(null)
  const [busy, setBusy] = useState(false)
  const err = useApiError()

  const run = useCallback(async () => {
    if (query.trim() === '') return
    setBusy(true)
    err.setError(null)
    const result = await callApi<{ hits: SearchHit[] }>('search', {
      query,
      k,
      ...(memoriesOnly ? { tag: 'memory' } : {}),
      ...(filterIn.trim() === '' ? {} : { in: filterIn.trim() }),
    })
    setBusy(false)
    if (result.ok) setHits(result.hits)
    else {
      err.setError(result.error)
      setHits(null)
    }
  }, [query, k, memoriesOnly, filterIn])

  return (
    <div className={styles.view}>
      <div className={styles.formRow}>
        <input
          className={styles.input}
          value={query}
          placeholder={t['search.placeholder']}
          onChange={event => setQuery(event.target.value)}
          onKeyDown={event => {
            if (event.key === 'Enter') void run()
          }}
        />
        <button type="button" className={styles.button} disabled={busy || query.trim() === ''} onClick={() => void run()}>
          {busy ? t['search.searching'] : t['search.button']}
        </button>
      </div>
      <div className={styles.formRow}>
        <label className={styles.inlineLabel}>
          <input type="checkbox" checked={memoriesOnly} onChange={event => setMemoriesOnly(event.target.checked)} />
          {t['search.memoriesOnly']}
        </label>
        <select className={styles.select} value={k} onChange={event => setK(Number(event.target.value))}>
          {K_OPTIONS.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
        <input
          className={`${styles.input} ${styles.inputGrow}`}
          value={filterIn}
          placeholder={t['search.filterIn.placeholder']}
          title={t['search.filterIn']}
          onChange={event => setFilterIn(event.target.value)}
        />
      </div>
      {err.render()}
      {hits !== null && (
        <div className={styles.meta}>{hits.length === 0 ? t['search.empty'] : format(t['search.results'], { n: hits.length })}</div>
      )}
      <div className={styles.hitList}>
        {hits?.map(hit => <HitCard key={`${hit.index}-${hit.source}`} hit={hit} />)}
      </div>
    </div>
  )
}

function HitCard({ hit }: { readonly hit: SearchHit }): ReactNode {
  const t = currentLocale()
  const [expanded, setExpanded] = useState(false)
  const long = hit.text.length > 320
  const text = expanded || !long ? hit.text : `${hit.text.slice(0, 320)}…`
  return (
    <div className={styles.hit}>
      <div className={styles.hitHead}>
        <span className={styles.hitIndex}>{hit.index}</span>
        <span className={styles.hitSource} title={hit.source}>{basename(hit.source)}</span>
        {hit.memoryTime !== undefined && (
          <span className={styles.badge} title={t['common.memoryBadge']}>🕯 {hit.memoryTime}</span>
        )}
      </div>
      {hit.section !== '' && <div className={styles.hitSection}>{hit.section}</div>}
      <pre className={styles.hitText}>{text}</pre>
      {long && (
        <button type="button" className={styles.linkButton} onClick={() => setExpanded(!expanded)}>
          {expanded ? t['common.collapse'] : t['common.expand']}
        </button>
      )}
    </div>
  )
}

function AskView(): ReactNode {
  const t = currentLocale()
  const [question, setQuestion] = useState('')
  const [verify, setVerify] = useState(false)
  const [answer, setAnswer] = useState<{ body: string; sources: string[] } | null>(null)
  const [busy, setBusy] = useState(false)
  const err = useApiError()

  const run = useCallback(async () => {
    if (question.trim() === '') return
    setBusy(true)
    err.setError(null)
    setAnswer(null)
    const result = await callApi<{ answer: { body: string; sources: string[] } }>('ask', { question, verify })
    setBusy(false)
    if (result.ok) setAnswer(result.answer)
    else err.setError(result.error)
  }, [question, verify])

  return (
    <div className={styles.view}>
      <textarea
        className={styles.textarea}
        rows={3}
        value={question}
        placeholder={t['ask.placeholder']}
        onChange={event => setQuestion(event.target.value)}
      />
      <div className={styles.formRow}>
        <label className={styles.inlineLabel}>
          <input type="checkbox" checked={verify} onChange={event => setVerify(event.target.checked)} />
          {t['ask.verify']}
        </label>
        <button type="button" className={styles.button} disabled={busy || question.trim() === ''} onClick={() => void run()}>
          {busy ? t['ask.asking'] : t['ask.button']}
        </button>
      </div>
      {err.render()}
      {answer !== null && (
        <div className={styles.answer}>
          <pre className={styles.answerBody}>{answer.body}</pre>
          {answer.sources.length > 0 && (
            <div className={styles.sources}>
              <div className={styles.sourcesTitle}>{t['ask.sources']}</div>
              {answer.sources.map(source => (
                <div key={source} className={styles.sourceChip} title={source}>{basename(source)}</div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function MemoryView(props: { readonly onSaved: () => void }): ReactNode {
  const t = currentLocale()
  const [query, setQuery] = useState('')
  const [hits, setHits] = useState<SearchHit[] | null>(null)
  const [busy, setBusy] = useState(false)
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [tags, setTags] = useState('')
  const [saveState, setSaveState] = useState<'idle' | 'busy' | 'saved'>('idle')
  const [savedPath, setSavedPath] = useState('')
  const err = useApiError()

  const run = useCallback(async () => {
    if (query.trim() === '') return
    setBusy(true)
    err.setError(null)
    const result = await callApi<{ hits: SearchHit[] }>('search', { query, k: 50, tag: 'memory' })
    setBusy(false)
    if (result.ok) setHits(result.hits)
    else {
      err.setError(result.error)
      setHits(null)
    }
  }, [query])

  const save = useCallback(async () => {
    if (text.trim() === '') return
    setSaveState('busy')
    err.setError(null)
    const result = await callApi<{ result: string }>('remember', {
      text,
      ...(title.trim() === '' ? {} : { title: title.trim() }),
      ...(tags.trim() === '' ? {} : { tags: tags.split(/[,，]/).map(tag => tag.trim()).filter(tag => tag !== '') }),
    })
    if (result.ok) {
      setSaveState('saved')
      setSavedPath(result.result)
      setText('')
      setTitle('')
      setTags('')
      props.onSaved()
    } else {
      setSaveState('idle')
      err.setError(result.error)
    }
  }, [text, title, tags, props])

  const grouped = useMemo(() => {
    if (hits === null) return []
    const byDay = new Map<string, SearchHit[]>()
    for (const hit of hits) {
      const day = hit.memoryTime?.slice(0, 10) ?? '—'
      const bucket = byDay.get(day)
      if (bucket === undefined) byDay.set(day, [hit])
      else bucket.push(hit)
    }
    return [...byDay.entries()].sort((a, b) => b[0].localeCompare(a[0]))
  }, [hits])

  return (
    <div className={styles.view}>
      <div className={styles.sectionTitle}>🔍 {t['view.memory']}</div>
      <div className={styles.formRow}>
        <input
          className={styles.input}
          value={query}
          placeholder={t['memory.placeholder']}
          onChange={event => setQuery(event.target.value)}
          onKeyDown={event => {
            if (event.key === 'Enter') void run()
          }}
        />
        <button type="button" className={styles.button} disabled={busy || query.trim() === ''} onClick={() => void run()}>
          {busy ? t['search.searching'] : t['search.button']}
        </button>
      </div>
      {err.render()}
      {hits !== null && hits.length === 0 && <div className={styles.meta}>{t['memory.empty']}</div>}
      {grouped.map(([day, dayHits]) => (
        <div key={day} className={styles.dayGroup}>
          <div className={styles.dayLabel}>{day}</div>
          {dayHits.map(hit => (
            <div key={`${hit.index}-${hit.source}`} className={styles.memoryCard}>
              <div className={styles.memoryTime}>{hit.memoryTime ?? ''}</div>
              <pre className={styles.hitText}>{hit.text}</pre>
            </div>
          ))}
        </div>
      ))}
      <div className={styles.hint}>{t['memory.hint']}</div>

      <div className={styles.sectionTitle}>✍️ {t['memory.submit']}</div>
      <input className={styles.input} value={title} placeholder={t['memory.title']} onChange={event => setTitle(event.target.value)} />
      <textarea
        className={styles.textarea}
        rows={3}
        value={text}
        placeholder={t['memory.text']}
        onChange={event => setText(event.target.value)}
      />
      <input className={styles.input} value={tags} placeholder={t['memory.tags']} onChange={event => setTags(event.target.value)} />
      <div className={styles.formRow}>
        <button type="button" className={styles.button} disabled={saveState === 'busy' || text.trim() === ''} onClick={() => void save()}>
          {saveState === 'busy' ? t['memory.saving'] : t['memory.submit']}
        </button>
        {saveState === 'saved' && (
          <span className={styles.saved} title={savedPath}>✓ {t['memory.saved']}</span>
        )}
      </div>
    </div>
  )
}

function StatusView(): ReactNode {
  const t = currentLocale()
  const [state, setState] = useState<{ ping: { baseUrl: string; tokenSet: boolean; health: string }; stats: ParsedStats } | null>(null)
  const err = useApiError()

  useEffect(() => {
    void (async () => {
      const ping = await callApi<{ baseUrl: string; tokenSet: boolean; health: string }>('ping')
      if (!ping.ok) {
        err.setError(ping.error)
        return
      }
      const stats = await callApi<{ stats: ParsedStats }>('stats')
      if (!stats.ok) {
        err.setError(stats.error)
        return
      }
      setState({ ping, stats: stats.stats })
    })()
  }, [])

  if (err.error !== null) return <div className={styles.view}>{err.render()}</div>
  if (state === null) return <div className={styles.view}><div className={styles.meta}>{t['conn.checking']}</div></div>
  const { ping, stats } = state
  return (
    <div className={styles.view}>
      <dl className={styles.statusList}>
        <div className={styles.statusRow}><dt>{t['status.baseUrl']}</dt><dd className={styles.mono}>{ping.baseUrl}</dd></div>
        <div className={styles.statusRow}><dt>{t['status.token']}</dt><dd>{ping.tokenSet ? t['status.tokenSet'] : t['status.tokenMissing']}</dd></div>
        <div className={styles.statusRow}><dt>{t['status.store']}</dt><dd className={styles.mono}>{stats.storePath} · {format(t['status.chunks'], { n: stats.chunks })}</dd></div>
        <div className={styles.statusRow}><dt>{t['status.models']}</dt><dd className={styles.mono}>{stats.embedModel} / {stats.llmModel}</dd></div>
        <div className={styles.statusRow}><dt>{t['status.retrieval']}</dt><dd className={styles.mono}>{stats.retrieval}</dd></div>
      </dl>
      <div className={styles.sectionTitle}>{format(t['status.sources'], { n: stats.sources.length })}</div>
      {stats.empty
        ? <div className={styles.hint}>{t['status.empty']}</div>
        : stats.sources.map(source => (
            <div key={source.path} className={styles.sourceRow} title={source.path}>
              <span className={styles.mono}>{basename(source.path)}</span>
              <span className={styles.sourceChunks}>{source.chunks}</span>
            </div>
          ))}
    </div>
  )
}
