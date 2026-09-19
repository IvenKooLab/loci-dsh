# loci-dsh

> [!TIP]
> 🧠 Your [loci](https://github.com/IvenKooLab/loci) second brain, living in the [DeepSeek Harness (dsh)](https://github.com/deepseek-ai/deepseek-harness) web UI sidebar.
>
> 中文文档：[README.zh-CN.md](README.zh-CN.md)

[![CI](https://github.com/IvenKooLab/loci-dsh/actions/workflows/build.yml/badge.svg)](https://github.com/IvenKooLab/loci-dsh/actions/workflows/build.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node](https://img.shields.io/badge/node-%E2%89%A524-green.svg)](https://nodejs.org)

**loci-dsh** is a UI-layer plugin for [dsh](https://github.com/deepseek-ai/deepseek-harness) ("everything is a plugin"): it mounts a **🧠 loci memory** tab in the web sidebar where you can search, ask questions, jot down memories, and inspect your [loci](https://github.com/IvenKooLab/loci) knowledge base — without leaving the conversation.

| Search | Ask |
|---|---|
| ![search](docs/screenshots/search.png) | ![ask](docs/screenshots/ask.png) |
| **Memories** | **Status** |
| ![memories](docs/screenshots/memories.png) | ![status](docs/screenshots/status.png) |

## How it works

Pure UI layer — no Python embedded, no core fork. The plugin's **host half** (Node) mounts `/loci-dsh/api/*` routes on the dsh web server and proxies them to a local [`loci serve-http`](https://github.com/IvenKooLab/loci) instance (REST + Bearer auth). The **client half** (React) registers the sidebar tab via [dsh-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) and talks to the host half same-origin — so loci never needs CORS.

```
dsh Web UI (browser) ──same-origin──▶ loci-dsh host half (in dsh process, Node)
                                          ──HTTP + Bearer──▶ loci serve-http (127.0.0.1:8765)
```

- **Search** — hybrid retrieval with result count, memories-only (`tag=memory`) and path filters
- **Ask** — LLM answers from your knowledge base with citation chips, optional claim-by-claim verification
- **Memories** — keyword-driven memory retrieval grouped by day, plus quick capture (title / text / tags)
- **Status** — connection state, store summary, per-source chunk counts

loci's HTTP API answers in plain-text envelopes, so the host half re-derives structure (search blocks, stats, citations, memory timestamps from filenames). Parsers live in [`src/parse.ts`](src/parse.ts) and track loci's de-facto wire format.

## Requirements

1. **Node.js ≥ 24** (dsh's launcher uses `import.meta.main`; Node 20/22 exit silently)
2. dsh: `npm i -g @deepseek-ai/dsh`
3. The sidebar host: `dsh plugin --profile web add dsh-better-sidebar`
4. **loci ≥ v0.6.2** with its HTTP server running and a fixed token in loci's `config.toml`:

   ```toml
   [http]
   token = "<a random string>"
   ```

   ```sh
   loci serve-http   # defaults to 127.0.0.1:8765; --host/--port or the [http] section override
   ```

## Install

```sh
# from npm (once published)
dsh plugin --profile web add loci-dsh

# or straight from git (lib/ artifacts are committed — no local build needed)
dsh plugin --profile web add github:IvenKooLab/loci-dsh
```

Then point the plugin at your loci instance. Edit `~/.dsh/profiles/web/cordis.patch.yml` and add an **id-targeted override row** (no `insert` — the bundle is already mounted by `dsh plugin add`; a second `insert` of the same id fails the boot with a duplicate-entry error):

```yaml
- id: loci-dsh
  config:
    baseUrl: 'http://127.0.0.1:8765'
    token: '<same value as [http] token in loci config.toml>'
```

> dsh patch rows replace config wholesale (no deep merge) — restate every key you care about.

Alternatively use the `LOCI_URL` / `LOCI_TOKEN` environment variables before starting `dsh web`.

Launch `dsh web` — the 🧠 **loci memory** tab appears in the bottom workbench sidebar.

## Configuration

| Key | Default | Description |
|---|---|---|
| `baseUrl` | `http://127.0.0.1:8765` | loci serve-http address |
| `token` | *(empty)* | Bearer token, matching loci's `[http] token` |
| `timeoutMs` | `20000` | Short-request timeout (health/stats/search/remember) |
| `askTimeoutMs` | `180000` | `/ask` timeout — a full LLM round-trip (~21 s with glm-4.6) |

## Development

```sh
pnpm install
pnpm build        # tsc typecheck + tsdown dual-entry bundle → lib/
pnpm watch        # rebuild on change

# mount into a profile as a live link (rebuild + browser hard-refresh to apply)
cd ~/.dsh && dsh plugin --profile web add /absolute/path/to/loci-dsh
```

- `src/index.ts` — host half: route mounting, loci proxy, error mapping
- `src/loci-client.ts` — loci HTTP client (fetch + AbortSignal timeouts)
- `src/parse.ts` — plain-text → structured parsers (search blocks / stats / citations)
- `src/trust-fence.ts` — Host-header loopback fence (same semantics as dsh's `/api` gateway)
- `src/client/` — client half: tab registration, views, zh/en dictionaries

Structured after the [dsh-better-sidebar external-plugin guide](https://github.com/omdsh-dev/DSH-better-sidebar/blob/main/docs/external-plugin-guide.md) and [dsh-sentinel](https://github.com/fuhefei/dsh-sentinel)'s standalone build.

## Known limitations

- Memory timeline is keyword-driven only (loci has no list endpoint yet); full timeline and wiki browsing need new loci endpoints — see [docs/upstream-requirements.md](docs/upstream-requirements.md)
- Empty queries are rejected client-side; kept as a fallback for loci ≤ 0.5.x where they crashed the handler (fixed upstream in v0.6.2)

## Related

- [loci](https://github.com/IvenKooLab/loci) — local-first second brain CLI (`pip install loci-rag`)
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) — the harness this plugin extends
- [dsh-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) — the sidebar foundation hosting the tab

## License

[MIT](LICENSE)
