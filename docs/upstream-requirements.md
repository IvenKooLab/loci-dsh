# loci 上游需求清单（loci-dsh 视角）

> 本文档是 loci-dsh 插件对 loci 核心的上游需求，供 loci 维护会话排期。
> loci-dsh 的原则：**不改 loci 核心、只走 HTTP**——以下每一项都是「loci 加了，插件才能做」。
> 均不影响既有接口的向后兼容。
>
> **状态（2026-09-19）**：P0 两项已在 **loci v0.6.2** 修复（serve-http/sync/bench 子命令
> 注册 + HTTP 加固：handler 异常回 500、坏 JSON 回 400、空查询短路返回提示；
> `--host/--port` 默认值读 `[http]` 段）。loci-dsh 侧要求 loci ≥ v0.6.2。
> P1/P2 仍开放：GET /memories、结构化 search hits、GET /wiki。

## P0（阻断性 bug）—— ✅ 均已在 v0.6.2 修复

### 1. `serve-http` 子命令未注册 ✅ v0.6.2

- **现象**：`loci serve-http` 直接报 `invalid choice`。`cli.py` 的 dispatch 里有
  `elif args.cmd == "serve-http":`（且重复出现两次，第二支是死代码），但 `main()` 的
  add_parser 列表里没有它；引用的 `args.host`/`args.port` 也不存在。
- **影响**：v0.5.0 用户无法用 CLI 启动 HTTP 服务，只能
  `python -c "from loci.http_api import run_server; from loci import config; run_server(config.load(), '127.0.0.1', 8765)"`。
- **期望**：补 `add_parser("serve-http", ...)`，支持 `--host`（默认 127.0.0.1）/ `--port`
  （默认 8765，读 `[http]` 段），删掉重复 dispatch 支。
- **另**：`config.py` 里 `[http] host/port` 默认值从未被 `run_server` 读取（死配置），
  建议 CLI 参数默认值从这里取，或在文档中说明。

### 2. 空查询击穿 handler ✅ v0.6.2（短路返回提示；坏 JSON 回 400）

- **现象**：`POST /search {}`（query 为空）导致连接直接中断（handler 线程异常，
  无 HTTP 响应）。疑似 embedder 对空串抛异常未捕获。
- **期望**：空 query 返回 `400 {"error": "empty query"}`（或空结果），绝不能无响应。

## P1（新端点，解锁核心 UI）

### 3. `GET /memories` —— 记忆列表/时间流

- **用途**：插件「记忆」视图目前只能关键词驱动检索；时间流需要全量列举。
- **数据已就绪**：memories 是 frontmatter Markdown 文件，文件名含
  `YYYYMMDD-HHMMSS-slug`，frontmatter 有 `tags/created/title`。
- **建议响应**：

  ```json
  {"memories": [
    {"path": "E:\\...\\20260919-144939-标题.md", "title": "标题",
     "created": "2026-09-19 14:30", "tags": ["memory", "decision"],
     "textHead": "正文前 200 字…"}
  ]}
  ```

- **参数**：`limit`（默认 50）、`offset`（或 `before` 时间戳游标）、`q`（标题/正文子串过滤）。

### 4. `POST /search` 返回结构化结果

- **现状**：`{"result": "[1] path > section\ntext…"}` 纯文本；分数、tags、chunk 号在
  HTTP 层全部丢失（底层 hit dict 有 `distance/chunk/tags/mtime`）。
- **建议**：新增 `"hits": [...]` 数组字段（保留 `result` 兼容旧客户端）：

  ```json
  {"hits": [{"index": 1, "source": "…", "section": "…", "text": "…",
             "tags": "memory,decision", "mtime": 1758271778.0,
             "distance": 0.2331, "score": 0.7669}]}
  ```

- **收益**：插件可展示相似度、按 tag/mtime 过滤排序，不再依赖文本解析。

### 5. `GET /wiki/{page}` + `GET /wiki`（页面浏览）

- **用途**：插件 MVP 的第三块「wiki 页面查看」当前完全无法实现（HTTP 无对应端点）。
- **建议**：`GET /wiki` 列页面（loci wiki 目录），`GET /wiki/{name}` 返回 Markdown 原文，
  插件端渲染。

## P2（体验增强）

### 6. `/ask` 请求支持 `path`/`k` 覆盖 + 流式

- 现状固定 `retriever.search(question)`；同步阻塞 ~20s（glm-4.6）。
- 最低期望：支持 `k`/`in` 透传；理想：SSE 流式返回。

### 7. `/remember` 响应带结构化回执

- `{"result": "remembered: path (N chunks)"}` → 加 `"path": "…", "chunks": N` 字段。

### 8. CORS（低优先——插件走 host 代理已绕开）

- 插件架构下浏览器不直连 loci，此项只为其他浏览器端工具受益：
  `Access-Control-Allow-Origin: http://127.0.0.1:3080`（或可配置）+ OPTIONS 处理。

---

## 实测记录摘要（2026-09-19，loci v0.5.0，Windows）

| 端点 | 实测 | 备注 |
|---|---|---|
| `GET /health` | `{"status":"ok"}`，无 token → 401 | 认证覆盖所有路径 |
| `GET /stats` | `{"stats":"<多行文本>"}` | store/models/retrieval/逐来源 chunks |
| `POST /search {query,k,tag,in}` | `{"result":"[N] path > section\ntext"}` | 块内文本含 `\n\n`，不能按空行分块；`tag` 整词匹配 |
| `POST /search {}` | 连接中断 | P0 bug #2 |
| `POST /ask {question}` | `{"result":"答案\n\n[source: path > section]…"}` | 21s（glm-4.6）；引用行在尾部 |
| `POST /remember {text,title,tags[]}` | `{"result":"remembered: path (N chunks…)"}` | 即时入索引；tags 是数组（CLI 是逗号串） |
| token 未配置时 | 每次启动随机生成且不回写，stdout 只打印前 8 位 | 必须在 config.toml 写死 |

完整原始记录见 `docs/api-probe-2026-09-19.md`。
