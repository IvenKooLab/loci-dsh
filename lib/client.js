window.__ModuleLoader__.load({
	id: "loci-dsh",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let react = require("react");
		let react_jsx_runtime = require("react/jsx-runtime");
		//#region src/client/locale.ts
		/** zh/en dictionaries for the loci tab; keyed by one LocaleKey union. */
		const strings = {
			zh: {
				"tab.title": "loci 记忆库",
				"view.search": "搜索",
				"view.ask": "问答",
				"view.memory": "记忆",
				"view.graph": "图谱",
				"view.harness": "工具",
				"view.status": "状态",
				"conn.connected": "已连接",
				"conn.disconnected": "未连接",
				"conn.checking": "检测中…",
				"conn.noToken": "未配置 token",
				"search.placeholder": "搜索知识库…（Enter）",
				"search.button": "搜索",
				"search.searching": "检索中…",
				"search.memoriesOnly": "只看记忆",
				"search.filterIn": "路径过滤",
				"search.filterIn.placeholder": "路径包含…",
				"search.results": "{n} 条结果",
				"search.empty": "没有匹配的结果",
				"search.emptyQuery": "输入关键词开始检索",
				"search.hint": "必须给关键词，空查询会被拦截",
				"ask.placeholder": "向你的第二大脑提问…（答案约 20 秒）",
				"ask.button": "提问",
				"ask.asking": "思考中…（最长 3 分钟）",
				"ask.verify": "逐条核查引用",
				"ask.sources": "引用来源",
				"memory.placeholder": "输入关键词检索记忆（如：架构、决定、T8）",
				"memory.hint": "时间流直读 loci 的 memories/ 目录（config memoriesPath）；关键词检索走 loci 混合检索",
				"memory.timeline": "全部记忆（{n}）",
				"memory.timelineUnavailable": "时间流未启用：在插件 config 里把 memoriesPath 指向 loci 的 memories 目录",
				"memory.expand": "展开全文",
				"memory.fold": "收起",
				"memory.title": "标题（可选）",
				"memory.text": "记忆内容",
				"memory.tags": "标签（逗号分隔）",
				"memory.submit": "存入记忆",
				"memory.saving": "写入中…",
				"memory.saved": "已记住",
				"memory.empty": "记忆库还是空的，或没有匹配",
				"status.baseUrl": "loci 地址",
				"status.token": "Bearer token",
				"status.tokenSet": "已设置",
				"status.tokenMissing": "未设置（检查插件 config 或 LOCI_TOKEN）",
				"status.store": "索引库",
				"status.models": "模型",
				"status.retrieval": "检索",
				"status.sources": "来源（{n}）",
				"status.chunks": "{n} 个 chunk",
				"status.refresh": "刷新",
				"status.empty": "索引为空 — 在 loci 里先运行 ingest",
				"status.star": "给个 ⭐ 支持开发",
				"graph.hint": "图谱来自 loci ≥ 0.6.0 的 loci graph build（LLM 抽取的实体-关系三元组）。未生成时在本机运行一次即可。",
				"harness.hint": "这台机器上装了哪些 AI 编码工具、各自记住了多少——loci 自动探测（安装目录 / 应用 / 环境变量），没装的不显示。",
				"harness.totals": "{tools} 个工具 · {files} 个文件 · {chunks} 块已索引",
				"harness.files": "{n} 个文件",
				"harness.chunks": "{n} 块",
				"harness.missingRoots": "{n} 个目录缺失",
				"harness.missingRootsHint": "配置里有这个工具的目录，但路径不存在——可能没安装，或外置盘没挂载",
				"harness.digest": "摘要状态：{status}",
				"harness.detail": "详情",
				"harness.empty": "没有探测到 AI 编码工具",
				"harness.emptyHint": "在 config.toml 里用 [[harness]] 手动添加，例如 name/type/paths",
				"harness.error": "读取 harness 信息失败",
				"graph.unavailable": "没有图谱数据",
				"graph.unavailableHint": "在本机运行 loci graph build 生成，然后在插件 config 里把 graphPath 指向 graph.json（默认 <store>/graph.json）",
				"graph.stats": "{e} 实体 · {r} 关系 · 来自 {f} 个文件",
				"graph.mode.links": "笔记链接",
				"graph.mode.relations": "实体关系",
				"links.hint": "谁链接了谁——直接来自你笔记里的 [[wiki 链接]]，不需要 LLM，也不需要先构建。",
				"links.stats": "{n} 条笔记 · {l} 条链接 · {b} 条未解析",
				"links.filter": "筛选笔记…",
				"links.notes": "笔记（按链接数排序）",
				"links.degree": "出链 {out} · 入链 {in} · {c} 块",
				"links.related": "「{name}」的关联",
				"links.connections": "链接明细",
				"links.isolated": "这条笔记没有任何链接",
				"links.empty": "索引里还没有链接",
				"links.emptyHint": "在笔记里写一条 [[另一条笔记]]，然后重新索引（loci ingest），这里就会出现关系图。",
				"graph.error": "读取图谱失败",
				"graph.filter": "筛选实体…",
				"graph.entities": "实体",
				"graph.relations": "关系",
				"graph.hub": "度 {n}",
				"graph.predicate": "谓词",
				"graph.clearFilter": "清除筛选",
				"graph.related": "与「{name}」相关的关系",
				"error.loci-unreachable": "连不上 loci：先启动 loci serve-http（默认 127.0.0.1:8765）",
				"error.loci-unauthorized": "token 不对：核对 loci config.toml 的 [http] token 与插件配置",
				"error.loci-timeout": "loci 超时未响应",
				"error.loci-error": "loci 返回错误",
				"error.bad-request": "请求不合法",
				"error.fallback": "请求失败",
				"common.retry": "重试",
				"common.expand": "展开",
				"common.collapse": "收起",
				"common.memoryBadge": "记忆"
			},
			en: {
				"tab.title": "loci memory",
				"view.search": "Search",
				"view.ask": "Ask",
				"view.memory": "Memories",
				"view.graph": "Graph",
				"view.harness": "Tools",
				"view.status": "Status",
				"conn.connected": "connected",
				"conn.disconnected": "offline",
				"conn.checking": "checking…",
				"conn.noToken": "no token",
				"search.placeholder": "Search the knowledge base… (Enter)",
				"search.button": "Search",
				"search.searching": "searching…",
				"search.memoriesOnly": "memories only",
				"search.filterIn": "path filter",
				"search.filterIn.placeholder": "path contains…",
				"search.results": "{n} results",
				"search.empty": "no matching results",
				"search.emptyQuery": "type a keyword to search",
				"search.hint": "a keyword is required; empty queries are rejected",
				"ask.placeholder": "Ask your second brain… (answers take ~20s)",
				"ask.button": "Ask",
				"ask.asking": "thinking… (up to 3 minutes)",
				"ask.verify": "verify claims against sources",
				"ask.sources": "sources",
				"memory.placeholder": "keyword to filter memories (e.g. decision, setup)",
				"memory.hint": "timeline reads loci's memories/ directory directly (config memoriesPath); keyword search goes through loci retrieval",
				"memory.timeline": "All memories ({n})",
				"memory.timelineUnavailable": "timeline disabled: point the plugin config memoriesPath at loci's memories directory",
				"memory.expand": "expand",
				"memory.fold": "fold",
				"memory.title": "title (optional)",
				"memory.text": "memory text",
				"memory.tags": "tags (comma separated)",
				"memory.submit": "Remember",
				"memory.saving": "saving…",
				"memory.saved": "remembered",
				"memory.empty": "no memories yet, or none match",
				"status.baseUrl": "loci URL",
				"status.token": "Bearer token",
				"status.tokenSet": "set",
				"status.tokenMissing": "missing (check plugin config or LOCI_TOKEN)",
				"status.store": "store",
				"status.models": "models",
				"status.retrieval": "retrieval",
				"status.sources": "sources ({n})",
				"status.chunks": "{n} chunks",
				"status.refresh": "refresh",
				"status.empty": "index is empty — run ingest in loci first",
				"status.star": "Star on GitHub ⭐",
				"graph.hint": "Built by `loci graph build` (loci ≥ 0.6.0): LLM-extracted entity-relation triples. If missing, run it once locally.",
				"harness.hint": "Which AI coding tools are installed on this machine and what each one remembers — detected by probe (install home / app bundle / env var); a tool that is not installed is absent.",
				"harness.totals": "{tools} tools · {files} files · {chunks} chunks indexed",
				"harness.files": "{n} files",
				"harness.chunks": "{n} chunks",
				"harness.missingRoots": "{n} missing",
				"harness.missingRootsHint": "configured for this tool, but the path does not exist — not installed, or an external drive is unmounted",
				"harness.digest": "digest: {status}",
				"harness.detail": "Details",
				"harness.empty": "No AI coding tools detected",
				"harness.emptyHint": "Add one by hand with a [[harness]] entry in config.toml (name / type / paths)",
				"harness.error": "Could not read harness information",
				"graph.unavailable": "No graph data",
				"graph.unavailableHint": "Run `loci graph build` locally, then point the plugin config `graphPath` at graph.json (default <store>/graph.json)",
				"graph.stats": "{e} entities · {r} relations · from {f} files",
				"graph.mode.links": "Note links",
				"graph.mode.relations": "Relations",
				"links.hint": "Who links to whom — straight from the [[wikilinks]] in your notes. No LLM, no build step.",
				"links.stats": "{n} notes · {l} links · {b} unresolved",
				"links.filter": "filter notes…",
				"links.notes": "Notes (most linked first)",
				"links.degree": "out {out} · in {in} · {c} chunks",
				"links.related": "Links around \"{name}\"",
				"links.connections": "Connections",
				"links.isolated": "This note has no links",
				"links.empty": "No links in the index yet",
				"links.emptyHint": "Write a [[wikilink]] to another note and re-index (loci ingest); the map appears here.",
				"graph.error": "Could not read the graph",
				"graph.filter": "filter entities…",
				"graph.entities": "Entities",
				"graph.relations": "Relations",
				"graph.hub": "degree {n}",
				"graph.predicate": "predicate",
				"graph.clearFilter": "clear filter",
				"graph.related": "Relations involving \"{name}\"",
				"error.loci-unreachable": "cannot reach loci: start loci serve-http first (default 127.0.0.1:8765)",
				"error.loci-unauthorized": "token mismatch: check [http] token in loci config.toml vs plugin config",
				"error.loci-timeout": "loci timed out",
				"error.loci-error": "loci returned an error",
				"error.bad-request": "invalid request",
				"error.fallback": "request failed",
				"common.retry": "retry",
				"common.expand": "expand",
				"common.collapse": "collapse",
				"common.memoryBadge": "memory"
			}
		};
		/** The dictionary for the browser's current language. */
		function currentLocale() {
			return typeof navigator !== "undefined" && navigator.language.startsWith("zh") ? strings.zh : strings.en;
		}
		/** Interpolate {n}/{x} placeholders in a dictionary string. */
		function format(template, values) {
			return template.replace(/\{(\w+)\}/g, (match, key) => key in values ? String(values[key]) : match);
		}
		//#endregion
		//#region \0dsh-css:/home/runner/work/loci-dsh/loci-dsh/src/client/styles.module.css.mjs
		const css = ".EEXsxG_root{height:100%;min-height:0;color:var(--dsh-fg-1,#e6e6e6);flex-direction:column;font-size:12px;display:flex}.EEXsxG_header{border-bottom:1px solid var(--dsh-border-2,#2a2a2a);align-items:center;gap:8px;padding:8px 10px;display:flex}.EEXsxG_headerSummary{text-overflow:ellipsis;white-space:nowrap;min-width:0;color:var(--dsh-fg-2,#9a9a9a);flex:1;overflow:hidden}.EEXsxG_headerButton{color:var(--dsh-fg-2,#9a9a9a);cursor:pointer;background:0 0;border:none;border-radius:4px;padding:2px 6px;font-size:14px;line-height:1}.EEXsxG_headerButton:hover{background:var(--dsh-bg-3,#2f2f2f);color:var(--dsh-fg-1,#e6e6e6)}.EEXsxG_tabs{gap:2px;padding:6px 8px 0;display:flex}.EEXsxG_tabButton{color:var(--dsh-fg-3,#7a7a7a);cursor:pointer;background:0 0;border:none;border-bottom:2px solid #0000;flex:1;padding:5px 8px;font-size:12px}.EEXsxG_tabActive{color:var(--dsh-fg-1,#e6e6e6);border-bottom-color:var(--dsh-accent,#7aa2f7)}.EEXsxG_body{flex:1;min-height:0;padding:10px;overflow-y:auto}.EEXsxG_view{flex-direction:column;gap:8px;display:flex}.EEXsxG_formRow{align-items:center;gap:6px;display:flex}.EEXsxG_input{min-width:0;color:var(--dsh-fg-1,#e6e6e6);background:var(--dsh-bg-2,#232323);border:1px solid var(--dsh-border-2,#333);border-radius:5px;flex:1;padding:5px 8px;font-size:12px}.EEXsxG_inputGrow{flex:.6}.EEXsxG_textarea{color:var(--dsh-fg-1,#e6e6e6);background:var(--dsh-bg-2,#232323);border:1px solid var(--dsh-border-2,#333);resize:vertical;border-radius:5px;padding:6px 8px;font-family:inherit;font-size:12px}.EEXsxG_select{color:var(--dsh-fg-1,#e6e6e6);background:var(--dsh-bg-2,#232323);border:1px solid var(--dsh-border-2,#333);border-radius:5px;padding:4px 6px;font-size:12px}.EEXsxG_button{background:var(--dsh-accent,#7aa2f7);color:#10131a;cursor:pointer;border:none;border-radius:5px;padding:5px 12px;font-size:12px;font-weight:600}.EEXsxG_button:disabled{opacity:.45;cursor:default}.EEXsxG_inlineLabel{color:var(--dsh-fg-2,#9a9a9a);white-space:nowrap;align-items:center;gap:4px;display:inline-flex}.EEXsxG_meta{color:var(--dsh-fg-3,#7a7a7a)}.EEXsxG_hint{color:var(--dsh-fg-3,#7a7a7a);background:var(--dsh-bg-2,#232323);border-radius:5px;padding:6px 8px;font-size:11px;line-height:1.5}.EEXsxG_errorBox{color:#e88;background:#e052521f;border:1px solid #e0525266;border-radius:5px;padding:8px}.EEXsxG_errorDetail{color:var(--dsh-fg-3,#8a7070);word-break:break-all;margin-top:4px;font-size:11px}.EEXsxG_hitList{flex-direction:column;gap:8px;display:flex}.EEXsxG_hit{background:var(--dsh-bg-2,#232323);border:1px solid var(--dsh-border-2,#2e2e2e);border-radius:6px;padding:8px}.EEXsxG_hitHead{align-items:center;gap:6px;display:flex}.EEXsxG_hitIndex{color:var(--dsh-fg-3,#7a7a7a);border:1px solid var(--dsh-border-2,#3a3a3a);border-radius:4px;padding:0 4px;font-size:10px}.EEXsxG_hitSource{color:var(--dsh-accent,#7aa2f7);text-overflow:ellipsis;white-space:nowrap;font-family:ui-monospace,Consolas,monospace;font-size:11px;overflow:hidden}.EEXsxG_badge{color:var(--dsh-fg-2,#9a9a9a);white-space:nowrap;margin-left:auto;font-size:10px}.EEXsxG_hitSection{color:var(--dsh-fg-3,#8a8a8a);text-overflow:ellipsis;white-space:nowrap;margin-top:3px;font-size:11px;overflow:hidden}.EEXsxG_hitText{white-space:pre-wrap;word-break:break-word;margin:6px 0 0;font-family:inherit;font-size:12px;line-height:1.55}.EEXsxG_linkButton{color:var(--dsh-accent,#7aa2f7);cursor:pointer;background:0 0;border:none;margin-top:4px;padding:0;font-size:11px}.EEXsxG_answer{background:var(--dsh-bg-2,#232323);border:1px solid var(--dsh-border-2,#2e2e2e);border-radius:6px;padding:8px}.EEXsxG_answerBody{white-space:pre-wrap;word-break:break-word;margin:0;font-family:inherit;font-size:12px;line-height:1.6}.EEXsxG_sources{flex-direction:column;gap:3px;margin-top:8px;display:flex}.EEXsxG_sourcesTitle{color:var(--dsh-fg-3,#7a7a7a);font-size:10px}.EEXsxG_sourceChip{color:var(--dsh-fg-2,#9a9a9a);background:var(--dsh-bg-3,#2a2a2a);text-overflow:ellipsis;white-space:nowrap;border-radius:4px;padding:2px 6px;font-family:ui-monospace,Consolas,monospace;font-size:10px;overflow:hidden}.EEXsxG_sectionTitle{color:var(--dsh-fg-2,#b5b5b5);margin-top:6px;font-size:11px;font-weight:600}.EEXsxG_dayGroup{flex-direction:column;gap:4px;display:flex}.EEXsxG_dayLabel{color:var(--dsh-fg-3,#8a8a8a);border-bottom:1px dashed var(--dsh-border-2,#333);padding-bottom:2px;font-size:11px;font-weight:600}.EEXsxG_memoryCard{background:var(--dsh-bg-2,#232323);border:1px solid var(--dsh-border-2,#2e2e2e);border-radius:6px;padding:7px 8px}.EEXsxG_memoryHead{justify-content:space-between;align-items:baseline;gap:8px;display:flex}.EEXsxG_memoryTitle{color:var(--dsh-fg-1,#e6e6e6);text-overflow:ellipsis;white-space:nowrap;font-size:12px;font-weight:600;overflow:hidden}.EEXsxG_memoryTags{flex-wrap:wrap;gap:4px;margin-top:4px;display:flex}.EEXsxG_memoryTag{color:var(--dsh-fg-2,#9a9a9a);background:var(--dsh-bg-3,#2a2a2a);border-radius:4px;padding:1px 5px;font-size:9px}.EEXsxG_memoryTime{color:var(--dsh-fg-3,#7a7a7a);font-family:ui-monospace,Consolas,monospace;font-size:10px}.EEXsxG_saved{color:#7ec98f;font-size:11px}.EEXsxG_statusList{flex-direction:column;gap:5px;margin:0;display:flex}.EEXsxG_statusRow{align-items:baseline;gap:8px;display:flex}.EEXsxG_statusRow dt{width:64px;color:var(--dsh-fg-3,#7a7a7a);flex-shrink:0;font-size:11px}.EEXsxG_statusRow dd{min-width:0;margin:0}.EEXsxG_mono{word-break:break-all;font-family:ui-monospace,Consolas,monospace;font-size:11px}.EEXsxG_sourceRow{border-radius:4px;align-items:center;gap:6px;padding:3px 6px;display:flex}.EEXsxG_sourceRow:hover{background:var(--dsh-bg-3,#2a2a2a)}.EEXsxG_sourceChunks{color:var(--dsh-fg-3,#7a7a7a);margin-left:auto;font-size:10px}.EEXsxG_dot{border-radius:50%;flex-shrink:0;width:8px;height:8px}.EEXsxG_dotUp{background:#7ec98f}.EEXsxG_dotDown{background:#e05252}.EEXsxG_dotChecking{background:#d9b45b;animation:1.2s ease-in-out infinite EEXsxG_lociPulse}.EEXsxG_graphChips{flex-wrap:wrap;gap:4px;display:flex}.EEXsxG_graphChip{border:1px solid var(--dsh-border-2,#333);background:var(--dsh-bg-2,#232323);color:var(--dsh-fg-1,#e6e6e6);cursor:pointer;border-radius:10px;align-items:center;gap:5px;padding:3px 8px;font-size:11px;display:inline-flex}.EEXsxG_graphChip:hover{border-color:var(--dsh-accent,#7aa2f7)}.EEXsxG_graphChipActive{border-color:var(--dsh-accent,#7aa2f7);background:#7aa2f726}.EEXsxG_graphChipDegree{color:var(--dsh-fg-3,#7a7a7a);font-size:9px}.EEXsxG_graphEdge{background:var(--dsh-bg-2,#232323);border:1px solid var(--dsh-border-2,#2e2e2e);border-radius:6px;flex-wrap:wrap;align-items:center;gap:6px;padding:6px 8px;display:flex}.EEXsxG_graphTerm{color:var(--dsh-accent,#7aa2f7);cursor:pointer;text-overflow:ellipsis;white-space:nowrap;background:0 0;border:none;max-width:45%;padding:0;font-size:12px;font-weight:600;overflow:hidden}.EEXsxG_graphPredicate{color:var(--dsh-fg-3,#8a8a8a);font-family:Consolas,ui-monospace,monospace;font-size:11px}.EEXsxG_graphSelected{color:var(--dsh-fg-2,#b5b5b5);font-size:11px}.EEXsxG_footer{border-top:1px solid var(--dsh-border-2,#2a2a2a);justify-content:space-between;align-items:center;gap:8px;margin-top:10px;padding-top:8px;display:flex}.EEXsxG_footerVersion{color:var(--dsh-fg-3,#66708a);font-size:10px}.EEXsxG_footerStar{color:var(--dsh-accent,#7aa2f7);white-space:nowrap;font-size:11px;text-decoration:none}.EEXsxG_footerStar:hover{text-decoration:underline}@keyframes EEXsxG_lociPulse{0%,to{opacity:.4}50%{opacity:1}}";
		const tagId = "loci-dsh/styles.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "loci-dsh";
			tag.dataset.pluginCss = tagId;
			tag.textContent = css;
			document.head.appendChild(tag);
		}
		var styles_module_css_default = {
			"graphPredicate": "EEXsxG_graphPredicate",
			"sources": "EEXsxG_sources",
			"sourceRow": "EEXsxG_sourceRow",
			"graphSelected": "EEXsxG_graphSelected",
			"dot": "EEXsxG_dot",
			"headerSummary": "EEXsxG_headerSummary",
			"sourceChip": "EEXsxG_sourceChip",
			"errorBox": "EEXsxG_errorBox",
			"errorDetail": "EEXsxG_errorDetail",
			"memoryTags": "EEXsxG_memoryTags",
			"graphTerm": "EEXsxG_graphTerm",
			"hint": "EEXsxG_hint",
			"hitSource": "EEXsxG_hitSource",
			"header": "EEXsxG_header",
			"select": "EEXsxG_select",
			"body": "EEXsxG_body",
			"graphChipActive": "EEXsxG_graphChipActive",
			"sourceChunks": "EEXsxG_sourceChunks",
			"statusList": "EEXsxG_statusList",
			"mono": "EEXsxG_mono",
			"graphChips": "EEXsxG_graphChips",
			"footerStar": "EEXsxG_footerStar",
			"badge": "EEXsxG_badge",
			"tabs": "EEXsxG_tabs",
			"inlineLabel": "EEXsxG_inlineLabel",
			"hitSection": "EEXsxG_hitSection",
			"footer": "EEXsxG_footer",
			"inputGrow": "EEXsxG_inputGrow",
			"hitIndex": "EEXsxG_hitIndex",
			"footerVersion": "EEXsxG_footerVersion",
			"lociPulse": "EEXsxG_lociPulse",
			"meta": "EEXsxG_meta",
			"sourcesTitle": "EEXsxG_sourcesTitle",
			"hitHead": "EEXsxG_hitHead",
			"statusRow": "EEXsxG_statusRow",
			"dotUp": "EEXsxG_dotUp",
			"answerBody": "EEXsxG_answerBody",
			"graphChip": "EEXsxG_graphChip",
			"formRow": "EEXsxG_formRow",
			"input": "EEXsxG_input",
			"tabButton": "EEXsxG_tabButton",
			"hit": "EEXsxG_hit",
			"answer": "EEXsxG_answer",
			"memoryTime": "EEXsxG_memoryTime",
			"memoryTitle": "EEXsxG_memoryTitle",
			"hitList": "EEXsxG_hitList",
			"textarea": "EEXsxG_textarea",
			"tabActive": "EEXsxG_tabActive",
			"button": "EEXsxG_button",
			"dayLabel": "EEXsxG_dayLabel",
			"dotDown": "EEXsxG_dotDown",
			"graphEdge": "EEXsxG_graphEdge",
			"saved": "EEXsxG_saved",
			"headerButton": "EEXsxG_headerButton",
			"memoryTag": "EEXsxG_memoryTag",
			"linkButton": "EEXsxG_linkButton",
			"dotChecking": "EEXsxG_dotChecking",
			"memoryCard": "EEXsxG_memoryCard",
			"dayGroup": "EEXsxG_dayGroup",
			"memoryHead": "EEXsxG_memoryHead",
			"graphChipDegree": "EEXsxG_graphChipDegree",
			"root": "EEXsxG_root",
			"hitText": "EEXsxG_hitText",
			"view": "EEXsxG_view",
			"sectionTitle": "EEXsxG_sectionTitle"
		};
		//#endregion
		//#region src/client/tab.tsx
		/**
		* The loci tab UI. Four inner views share one header strip (connection dot +
		* store summary); every data call goes to the node half's /loci-dsh/api
		* routes same-origin.
		*/
		async function callApi(method, payload = {}) {
			try {
				return await (await fetch(`/loci-dsh/api/${method}`, {
					method: "POST",
					headers: { "content-type": "application/json" },
					body: JSON.stringify(payload)
				})).json();
			} catch {
				return {
					ok: false,
					error: {
						code: "fallback",
						message: "network error"
					}
				};
			}
		}
		function useApiError() {
			const [error, setError] = (0, react.useState)(null);
			const t = currentLocale();
			return {
				error,
				setError,
				render: (0, react.useCallback)(() => {
					if (error === null) return null;
					const known = t[`error.${error.code}`];
					return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: styles_module_css_default.errorBox,
						role: "alert",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
							known ?? t["error.fallback"],
							"（",
							error.code,
							"）"
						] }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: styles_module_css_default.errorDetail,
							children: error.message
						})]
					});
				}, [error, t])
			};
		}
		function basename(path) {
			const normalized = path.replaceAll("\\", "/");
			const slash = normalized.lastIndexOf("/");
			return slash === -1 ? normalized : normalized.slice(slash + 1);
		}
		const K_OPTIONS = [
			5,
			10,
			20,
			50
		];
		function LociTab(props) {
			const t = currentLocale();
			const [view, setView] = (0, react.useState)("search");
			const [ping, setPing] = (0, react.useState)("checking");
			const [summary, setSummary] = (0, react.useState)("");
			const refreshStatus = (0, react.useCallback)(async () => {
				setPing("checking");
				const result = await callApi("ping");
				if (!result.ok) {
					setPing("down");
					return;
				}
				setPing(result.tokenSet ? result.health === "ok" ? "up" : "down" : "no-token");
				const stats = await callApi("stats");
				if (stats.ok) setSummary(`${format(t["status.chunks"], { n: stats.stats.chunks })} · ${format(t["status.sources"], { n: stats.stats.sources.length })}`);
			}, [t]);
			(0, react.useEffect)(() => {
				if (props.visible) refreshStatus();
			}, [props.visible, refreshStatus]);
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: styles_module_css_default.root,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: styles_module_css_default.header,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: `${styles_module_css_default.dot} ${ping === "up" ? styles_module_css_default.dotUp : ping === "checking" ? styles_module_css_default.dotChecking : styles_module_css_default.dotDown}`,
								"aria-label": ping === "up" ? t["conn.connected"] : t["conn.disconnected"]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: styles_module_css_default.headerSummary,
								children: ping === "up" ? summary || t["conn.connected"] : ping === "no-token" ? t["conn.noToken"] : ping === "checking" ? t["conn.checking"] : t["conn.disconnected"]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								className: styles_module_css_default.headerButton,
								onClick: () => void refreshStatus(),
								title: t["status.refresh"],
								children: "⟳"
							})
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: styles_module_css_default.tabs,
						role: "tablist",
						children: [
							"search",
							"ask",
							"memory",
							"graph",
							"status"
						].map((key) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							role: "tab",
							"aria-selected": view === key,
							className: `${styles_module_css_default.tabButton} ${view === key ? styles_module_css_default.tabActive : ""}`,
							onClick: () => setView(key),
							children: t[`view.${key}`]
						}, key))
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: styles_module_css_default.body,
						children: [
							view === "search" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SearchView, {}),
							view === "ask" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(AskView, {}),
							view === "memory" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(MemoryView, { onSaved: () => void refreshStatus() }),
							view === "graph" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(GraphView, {}),
							view === "harness" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(HarnessView, {}),
							view === "status" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(StatusView, {})
						]
					})
				]
			});
		}
		function SearchView() {
			const t = currentLocale();
			const [query, setQuery] = (0, react.useState)("");
			const [k, setK] = (0, react.useState)(10);
			const [memoriesOnly, setMemoriesOnly] = (0, react.useState)(false);
			const [filterIn, setFilterIn] = (0, react.useState)("");
			const [hits, setHits] = (0, react.useState)(null);
			const [busy, setBusy] = (0, react.useState)(false);
			const err = useApiError();
			const run = (0, react.useCallback)(async () => {
				if (query.trim() === "") return;
				setBusy(true);
				err.setError(null);
				const result = await callApi("search", {
					query,
					k,
					...memoriesOnly ? { tag: "memory" } : {},
					...filterIn.trim() === "" ? {} : { in: filterIn.trim() }
				});
				setBusy(false);
				if (result.ok) setHits(result.hits);
				else {
					err.setError(result.error);
					setHits(null);
				}
			}, [
				query,
				k,
				memoriesOnly,
				filterIn
			]);
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: styles_module_css_default.view,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: styles_module_css_default.formRow,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
							className: styles_module_css_default.input,
							value: query,
							placeholder: t["search.placeholder"],
							onChange: (event) => setQuery(event.target.value),
							onKeyDown: (event) => {
								if (event.key === "Enter") run();
							}
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							className: styles_module_css_default.button,
							disabled: busy || query.trim() === "",
							onClick: () => void run(),
							children: busy ? t["search.searching"] : t["search.button"]
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: styles_module_css_default.formRow,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
								className: styles_module_css_default.inlineLabel,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: memoriesOnly,
									onChange: (event) => setMemoriesOnly(event.target.checked)
								}), t["search.memoriesOnly"]]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("select", {
								className: styles_module_css_default.select,
								value: k,
								onChange: (event) => setK(Number(event.target.value)),
								children: K_OPTIONS.map((option) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
									value: option,
									children: option
								}, option))
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
								className: `${styles_module_css_default.input} ${styles_module_css_default.inputGrow}`,
								value: filterIn,
								placeholder: t["search.filterIn.placeholder"],
								title: t["search.filterIn"],
								onChange: (event) => setFilterIn(event.target.value)
							})
						]
					}),
					err.render(),
					hits !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: styles_module_css_default.meta,
						children: hits.length === 0 ? t["search.empty"] : format(t["search.results"], { n: hits.length })
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: styles_module_css_default.hitList,
						children: hits?.map((hit) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(HitCard, { hit }, `${hit.index}-${hit.source}`))
					})
				]
			});
		}
		function HitCard({ hit }) {
			const t = currentLocale();
			const [expanded, setExpanded] = (0, react.useState)(false);
			const long = hit.text.length > 320;
			const text = expanded || !long ? hit.text : `${hit.text.slice(0, 320)}…`;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: styles_module_css_default.hit,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: styles_module_css_default.hitHead,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: styles_module_css_default.hitIndex,
								children: hit.index
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: styles_module_css_default.hitSource,
								title: hit.source,
								children: basename(hit.source)
							}),
							hit.memoryTime !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
								className: styles_module_css_default.badge,
								title: t["common.memoryBadge"],
								children: ["🕯 ", hit.memoryTime]
							})
						]
					}),
					hit.section !== "" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: styles_module_css_default.hitSection,
						children: hit.section
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("pre", {
						className: styles_module_css_default.hitText,
						children: text
					}),
					long && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
						type: "button",
						className: styles_module_css_default.linkButton,
						onClick: () => setExpanded(!expanded),
						children: expanded ? t["common.collapse"] : t["common.expand"]
					})
				]
			});
		}
		function AskView() {
			const t = currentLocale();
			const [question, setQuestion] = (0, react.useState)("");
			const [verify, setVerify] = (0, react.useState)(false);
			const [answer, setAnswer] = (0, react.useState)(null);
			const [busy, setBusy] = (0, react.useState)(false);
			const err = useApiError();
			const run = (0, react.useCallback)(async () => {
				if (question.trim() === "") return;
				setBusy(true);
				err.setError(null);
				setAnswer(null);
				const result = await callApi("ask", {
					question,
					verify
				});
				setBusy(false);
				if (result.ok) setAnswer(result.answer);
				else err.setError(result.error);
			}, [question, verify]);
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: styles_module_css_default.view,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("textarea", {
						className: styles_module_css_default.textarea,
						rows: 3,
						value: question,
						placeholder: t["ask.placeholder"],
						onChange: (event) => setQuestion(event.target.value)
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: styles_module_css_default.formRow,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
							className: styles_module_css_default.inlineLabel,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: verify,
								onChange: (event) => setVerify(event.target.checked)
							}), t["ask.verify"]]
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							className: styles_module_css_default.button,
							disabled: busy || question.trim() === "",
							onClick: () => void run(),
							children: busy ? t["ask.asking"] : t["ask.button"]
						})]
					}),
					err.render(),
					answer !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: styles_module_css_default.answer,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("pre", {
							className: styles_module_css_default.answerBody,
							children: answer.body
						}), answer.sources.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: styles_module_css_default.sources,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: styles_module_css_default.sourcesTitle,
								children: t["ask.sources"]
							}), answer.sources.map((source) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: styles_module_css_default.sourceChip,
								title: source,
								children: basename(source)
							}, source))]
						})]
					})
				]
			});
		}
		function MemoryCard({ entry }) {
			const t = currentLocale();
			const [expanded, setExpanded] = (0, react.useState)(false);
			const long = entry.text.length > 240;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: styles_module_css_default.memoryCard,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: styles_module_css_default.memoryHead,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: styles_module_css_default.memoryTitle,
							children: entry.title
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: styles_module_css_default.memoryTime,
							children: entry.created
						})]
					}),
					entry.tags.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: styles_module_css_default.memoryTags,
						children: entry.tags.map((tag) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: styles_module_css_default.memoryTag,
							children: tag
						}, tag))
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("pre", {
						className: styles_module_css_default.hitText,
						children: expanded || !long ? entry.text : `${entry.text.slice(0, 240)}…`
					}),
					long && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
						type: "button",
						className: styles_module_css_default.linkButton,
						onClick: () => setExpanded(!expanded),
						children: expanded ? t["memory.fold"] : t["memory.expand"]
					})
				]
			});
		}
		function MemoryTimeline(props) {
			const t = currentLocale();
			const [entries, setEntries] = (0, react.useState)(void 0);
			(0, react.useEffect)(() => {
				(async () => {
					const result = await callApi("memories");
					setEntries(result.ok && result.available ? result.memories : null);
				})();
			}, [props.refreshKey]);
			if (entries === void 0) return null;
			if (entries === null) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: styles_module_css_default.hint,
				children: t["memory.timelineUnavailable"]
			});
			const grouped = [];
			{
				const byDay = /* @__PURE__ */ new Map();
				for (const entry of entries) {
					const day = entry.created.slice(0, 10) || "—";
					const bucket = byDay.get(day);
					if (bucket === void 0) byDay.set(day, [entry]);
					else bucket.push(entry);
				}
				grouped.push(...byDay.entries());
			}
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: styles_module_css_default.sectionTitle,
					children: ["🗂 ", format(t["memory.timeline"], { n: entries.length })]
				}),
				entries.length === 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: styles_module_css_default.meta,
					children: t["memory.empty"]
				}),
				grouped.map(([day, dayEntries]) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: styles_module_css_default.dayGroup,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: styles_module_css_default.dayLabel,
						children: day
					}), dayEntries.map((entry) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(MemoryCard, { entry }, entry.path))]
				}, day))
			] });
		}
		function MemoryView(props) {
			const t = currentLocale();
			const [query, setQuery] = (0, react.useState)("");
			const [hits, setHits] = (0, react.useState)(null);
			const [busy, setBusy] = (0, react.useState)(false);
			const [title, setTitle] = (0, react.useState)("");
			const [text, setText] = (0, react.useState)("");
			const [tags, setTags] = (0, react.useState)("");
			const [saveState, setSaveState] = (0, react.useState)("idle");
			const [savedPath, setSavedPath] = (0, react.useState)("");
			const [refreshKey, setRefreshKey] = (0, react.useState)(0);
			const err = useApiError();
			const run = (0, react.useCallback)(async () => {
				if (query.trim() === "") return;
				setBusy(true);
				err.setError(null);
				const result = await callApi("search", {
					query,
					k: 50,
					tag: "memory"
				});
				setBusy(false);
				if (result.ok) setHits(result.hits);
				else {
					err.setError(result.error);
					setHits(null);
				}
			}, [query]);
			const save = (0, react.useCallback)(async () => {
				if (text.trim() === "") return;
				setSaveState("busy");
				err.setError(null);
				const result = await callApi("remember", {
					text,
					...title.trim() === "" ? {} : { title: title.trim() },
					...tags.trim() === "" ? {} : { tags: tags.split(/[,，]/).map((tag) => tag.trim()).filter((tag) => tag !== "") }
				});
				if (result.ok) {
					setSaveState("saved");
					setSavedPath(result.result);
					setText("");
					setTitle("");
					setTags("");
					setRefreshKey((key) => key + 1);
					props.onSaved();
				} else {
					setSaveState("idle");
					err.setError(result.error);
				}
			}, [
				text,
				title,
				tags,
				props
			]);
			const grouped = (0, react.useMemo)(() => {
				if (hits === null) return [];
				const byDay = /* @__PURE__ */ new Map();
				for (const hit of hits) {
					const day = hit.memoryTime?.slice(0, 10) ?? "—";
					const bucket = byDay.get(day);
					if (bucket === void 0) byDay.set(day, [hit]);
					else bucket.push(hit);
				}
				return [...byDay.entries()].sort((a, b) => b[0].localeCompare(a[0]));
			}, [hits]);
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: styles_module_css_default.view,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(MemoryTimeline, { refreshKey }),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: styles_module_css_default.sectionTitle,
						children: ["🔍 ", t["view.memory"]]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: styles_module_css_default.formRow,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
							className: styles_module_css_default.input,
							value: query,
							placeholder: t["memory.placeholder"],
							onChange: (event) => setQuery(event.target.value),
							onKeyDown: (event) => {
								if (event.key === "Enter") run();
							}
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							className: styles_module_css_default.button,
							disabled: busy || query.trim() === "",
							onClick: () => void run(),
							children: busy ? t["search.searching"] : t["search.button"]
						})]
					}),
					err.render(),
					hits !== null && hits.length === 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: styles_module_css_default.meta,
						children: t["memory.empty"]
					}),
					grouped.map(([day, dayHits]) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: styles_module_css_default.dayGroup,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: styles_module_css_default.dayLabel,
							children: day
						}), dayHits.map((hit) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: styles_module_css_default.memoryCard,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: styles_module_css_default.memoryTime,
								children: hit.memoryTime ?? ""
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("pre", {
								className: styles_module_css_default.hitText,
								children: hit.text
							})]
						}, `${hit.index}-${hit.source}`))]
					}, day)),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: styles_module_css_default.hint,
						children: t["memory.hint"]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: styles_module_css_default.sectionTitle,
						children: ["✍️ ", t["memory.submit"]]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
						className: styles_module_css_default.input,
						value: title,
						placeholder: t["memory.title"],
						onChange: (event) => setTitle(event.target.value)
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("textarea", {
						className: styles_module_css_default.textarea,
						rows: 3,
						value: text,
						placeholder: t["memory.text"],
						onChange: (event) => setText(event.target.value)
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
						className: styles_module_css_default.input,
						value: tags,
						placeholder: t["memory.tags"],
						onChange: (event) => setTags(event.target.value)
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: styles_module_css_default.formRow,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							className: styles_module_css_default.button,
							disabled: saveState === "busy" || text.trim() === "",
							onClick: () => void save(),
							children: saveState === "busy" ? t["memory.saving"] : t["memory.submit"]
						}), saveState === "saved" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
							className: styles_module_css_default.saved,
							title: savedPath,
							children: ["✓ ", t["memory.saved"]]
						})]
					})
				]
			});
		}
		/** Which AI coding tools are installed on this machine, and what each holds. */
		function HarnessView() {
			const t = currentLocale();
			const [rows, setRows] = (0, react.useState)(void 0);
			const [expanded, setExpanded] = (0, react.useState)(null);
			(0, react.useEffect)(() => {
				(async () => {
					const result = await callApi("harness");
					setRows(result.ok ? result.harness : null);
				})();
			}, []);
			if (rows === void 0) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: styles_module_css_default.view,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: styles_module_css_default.meta,
					children: t["conn.checking"]
				})
			});
			if (rows === null) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: styles_module_css_default.view,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: styles_module_css_default.errorBox,
					children: t["harness.error"]
				})
			});
			if (rows.length === 0) return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: styles_module_css_default.view,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: styles_module_css_default.meta,
					children: t["harness.empty"]
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: styles_module_css_default.hint,
					children: t["harness.emptyHint"]
				})]
			});
			const totalFiles = rows.reduce((sum, row) => sum + row.files, 0);
			const totalChunks = rows.reduce((sum, row) => sum + row.chunks, 0);
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: styles_module_css_default.view,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: styles_module_css_default.hint,
						children: t["harness.hint"]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: styles_module_css_default.meta,
						children: format(t["harness.totals"], {
							tools: rows.length,
							files: totalFiles,
							chunks: totalChunks
						})
					}),
					rows.map((row) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: styles_module_css_default.memoryCard,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: styles_module_css_default.memoryHead,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
									className: styles_module_css_default.memoryTitle,
									children: [isImageIcon(row.icon) ? "" : `${row.icon} `, row.display]
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: styles_module_css_default.memoryTime,
									children: row.type
								})]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: styles_module_css_default.memoryTags,
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: styles_module_css_default.memoryTag,
										children: format(t["harness.files"], { n: row.files })
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: styles_module_css_default.memoryTag,
										children: format(t["harness.chunks"], { n: row.chunks })
									}),
									row.lastUpdated !== "" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: styles_module_css_default.memoryTag,
										children: row.lastUpdated
									}),
									row.missingRoots > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: styles_module_css_default.memoryTag,
										title: t["harness.missingRootsHint"],
										children: format(t["harness.missingRoots"], { n: row.missingRoots })
									})
								]
							}),
							expanded === row.name && row.summaryStatus !== "" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: styles_module_css_default.meta,
								children: format(t["harness.digest"], { status: row.summaryStatus })
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: styles_module_css_default.formRow,
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
									type: "button",
									className: styles_module_css_default.linkButton,
									onClick: () => setExpanded(expanded === row.name ? null : row.name),
									children: expanded === row.name ? t["memory.fold"] : t["harness.detail"]
								})
							})
						]
					}, row.name))
				]
			});
		}
		function isImageIcon(icon) {
			return /\.(png|svg|jpe?g|gif|webp)$/i.test(icon);
		}
		function GraphView() {
			const t = currentLocale();
			const [mode, setMode] = (0, react.useState)("links");
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: styles_module_css_default.view,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: styles_module_css_default.tabs,
					role: "tablist",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
						type: "button",
						role: "tab",
						"aria-selected": mode === "links",
						className: `${styles_module_css_default.tabButton} ${mode === "links" ? styles_module_css_default.tabActive : ""}`,
						onClick: () => setMode("links"),
						children: t["graph.mode.links"]
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
						type: "button",
						role: "tab",
						"aria-selected": mode === "relations",
						className: `${styles_module_css_default.tabButton} ${mode === "relations" ? styles_module_css_default.tabActive : ""}`,
						onClick: () => setMode("relations"),
						children: t["graph.mode.relations"]
					})]
				}), mode === "links" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(WikiGraphView, {}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(RelationGraphView, {})]
			});
		}
		/** `[[wikilink]]` graph from loci's `/graph` — no LLM, no build step. */
		function WikiGraphView() {
			const t = currentLocale();
			const [graph, setGraph] = (0, react.useState)(void 0);
			const [filter, setFilter] = (0, react.useState)("");
			const [selected, setSelected] = (0, react.useState)(null);
			(0, react.useEffect)(() => {
				(async () => {
					const result = await callApi("wikilinks");
					setGraph(result.ok ? result.graph : null);
				})();
			}, []);
			if (graph === void 0) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: styles_module_css_default.meta,
				children: t["conn.checking"]
			});
			if (graph === null) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: styles_module_css_default.errorBox,
				children: t["graph.error"]
			});
			if (graph.nodes.length === 0) return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: styles_module_css_default.meta,
				children: t["links.empty"]
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: styles_module_css_default.hint,
				children: t["links.emptyHint"]
			})] });
			const byStem = /* @__PURE__ */ new Map();
			for (const node of graph.nodes) {
				const key = node.name.toLowerCase();
				byStem.set(key, byStem.has(key) ? null : node);
			}
			const pathOf = new Map(graph.nodes.map((node) => [node.path, node]));
			const degree = /* @__PURE__ */ new Map();
			const bump = (path, side) => {
				const entry = degree.get(path) ?? {
					out: 0,
					in: 0
				};
				entry[side] += 1;
				degree.set(path, entry);
			};
			let broken = 0;
			for (const link of graph.links) {
				const target = byStem.get(link.to.split("/").pop()?.replace(/\.md$/i, "").toLowerCase() ?? "");
				if (target === void 0 || target === null) {
					broken += 1;
					continue;
				}
				bump(link.from, "out");
				bump(target.path, "in");
			}
			const needle = filter.trim().toLowerCase();
			const shown = graph.nodes.filter((node) => needle === "" || node.path.toLowerCase().includes(needle)).sort((a, b) => {
				const da = degree.get(a.path) ?? {
					out: 0,
					in: 0
				};
				const db = degree.get(b.path) ?? {
					out: 0,
					in: 0
				};
				return db.out + db.in - (da.out + da.in) || a.name.localeCompare(b.name);
			});
			const related = selected !== null ? graph.links.filter((link) => {
				if (link.from === selected) return true;
				return byStem.get(link.to.split("/").pop()?.replace(/\.md$/i, "").toLowerCase() ?? "")?.path === selected;
			}) : [];
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: styles_module_css_default.hint,
					children: t["links.hint"]
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: styles_module_css_default.meta,
					children: format(t["links.stats"], {
						n: graph.nodes.length,
						l: graph.links.length,
						b: broken
					})
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: styles_module_css_default.formRow,
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
						className: styles_module_css_default.input,
						value: filter,
						placeholder: t["links.filter"],
						onChange: (event) => setFilter(event.target.value)
					})
				}),
				selected !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: styles_module_css_default.formRow,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: styles_module_css_default.graphSelected,
						children: format(t["links.related"], { name: pathOf.get(selected)?.name ?? selected })
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
						type: "button",
						className: styles_module_css_default.linkButton,
						onClick: () => setSelected(null),
						children: t["graph.clearFilter"]
					})]
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: styles_module_css_default.sectionTitle,
					children: t["links.notes"]
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: styles_module_css_default.graphChips,
					children: shown.map((node) => {
						const d = degree.get(node.path) ?? {
							out: 0,
							in: 0
						};
						return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
							type: "button",
							title: format(t["links.degree"], {
								out: d.out,
								in: d.in,
								c: node.chunks
							}),
							className: `${styles_module_css_default.graphChip} ${selected === node.path ? styles_module_css_default.graphChipActive : ""}`,
							onClick: () => setSelected(selected === node.path ? null : node.path),
							children: [node.name, /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: styles_module_css_default.graphChipDegree,
								children: d.out + d.in
							})]
						}, node.path);
					})
				}),
				selected !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: styles_module_css_default.sectionTitle,
						children: t["links.connections"]
					}),
					related.length === 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: styles_module_css_default.meta,
						children: t["links.isolated"]
					}),
					related.map((link, i) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: styles_module_css_default.sourceRow,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: styles_module_css_default.mono,
								children: pathOf.get(link.from)?.name ?? link.from
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: styles_module_css_default.graphPredicate,
								children: "→"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: styles_module_css_default.mono,
								children: link.to
							})
						]
					}, `${link.from}-${link.to}-${i}`))
				] })
			] });
		}
		/** SPO relations from `graph.json` (`loci graph build`). */
		function RelationGraphView() {
			const t = currentLocale();
			const [graph, setGraph] = (0, react.useState)(void 0);
			const [filter, setFilter] = (0, react.useState)("");
			const [selected, setSelected] = (0, react.useState)(null);
			(0, react.useEffect)(() => {
				(async () => {
					const result = await callApi("graph");
					setGraph(result.ok && result.available ? result.graph : null);
				})();
			}, []);
			if (graph === void 0) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: styles_module_css_default.meta,
				children: t["conn.checking"]
			});
			if (graph === null) return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: styles_module_css_default.meta,
				children: t["graph.unavailable"]
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: styles_module_css_default.hint,
				children: t["graph.unavailableHint"]
			})] });
			const needle = filter.trim().toLowerCase();
			const shownEntities = needle === "" ? graph.entities : graph.entities.filter((entity) => entity.name.toLowerCase().includes(needle));
			const shownEdges = selected !== null ? graph.edges.filter((edge) => edge.s === selected || edge.o === selected) : graph.edges;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: styles_module_css_default.hint,
					children: t["graph.hint"]
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: styles_module_css_default.meta,
					children: format(t["graph.stats"], {
						e: graph.entities.length,
						r: graph.edges.length,
						f: graph.files
					})
				}),
				selected !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: styles_module_css_default.formRow,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: styles_module_css_default.graphSelected,
						children: format(t["graph.related"], { name: selected })
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
						type: "button",
						className: styles_module_css_default.linkButton,
						onClick: () => setSelected(null),
						children: t["graph.clearFilter"]
					})]
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: styles_module_css_default.formRow,
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
						className: styles_module_css_default.input,
						value: filter,
						placeholder: t["graph.filter"],
						onChange: (event) => setFilter(event.target.value)
					})
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: styles_module_css_default.sectionTitle,
					children: t["graph.entities"]
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: styles_module_css_default.graphChips,
					children: shownEntities.map((entity) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
						type: "button",
						title: format(t["graph.hub"], { n: entity.degree }),
						className: `${styles_module_css_default.graphChip} ${selected === entity.name ? styles_module_css_default.graphChipActive : ""}`,
						onClick: () => setSelected(selected === entity.name ? null : entity.name),
						children: [entity.name, /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: styles_module_css_default.graphChipDegree,
							children: entity.degree
						})]
					}, entity.name))
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: styles_module_css_default.sectionTitle,
					children: t["graph.relations"]
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { children: shownEdges.map((edge, i) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: styles_module_css_default.graphEdge,
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							className: styles_module_css_default.graphTerm,
							onClick: () => setSelected(edge.s),
							children: edge.s
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: styles_module_css_default.graphPredicate,
							title: t["graph.predicate"],
							children: edge.p
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							className: styles_module_css_default.graphTerm,
							onClick: () => setSelected(edge.o),
							children: edge.o
						})
					]
				}, `${edge.s}-${edge.p}-${edge.o}-${i}`)) })
			] });
		}
		/** Client-side copy of the package version (keep in sync on release). */
		const APP_VERSION = "0.3.0";
		const REPO_URL = "https://github.com/IvenKooLab/loci-dsh";
		function StatusView() {
			const t = currentLocale();
			const [state, setState] = (0, react.useState)(null);
			const err = useApiError();
			(0, react.useEffect)(() => {
				(async () => {
					const ping = await callApi("ping");
					if (!ping.ok) {
						err.setError(ping.error);
						return;
					}
					const stats = await callApi("stats");
					if (!stats.ok) {
						err.setError(stats.error);
						return;
					}
					setState({
						ping,
						stats: stats.stats
					});
				})();
			}, []);
			if (err.error !== null) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: styles_module_css_default.view,
				children: err.render()
			});
			if (state === null) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: styles_module_css_default.view,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: styles_module_css_default.meta,
					children: t["conn.checking"]
				})
			});
			const { ping, stats } = state;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: styles_module_css_default.view,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("dl", {
						className: styles_module_css_default.statusList,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: styles_module_css_default.statusRow,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dt", { children: t["status.baseUrl"] }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("dd", {
									className: styles_module_css_default.mono,
									children: ping.baseUrl
								})]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: styles_module_css_default.statusRow,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dt", { children: t["status.token"] }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("dd", { children: ping.tokenSet ? t["status.tokenSet"] : t["status.tokenMissing"] })]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: styles_module_css_default.statusRow,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dt", { children: t["status.store"] }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("dd", {
									className: styles_module_css_default.mono,
									children: [
										stats.storePath,
										" · ",
										format(t["status.chunks"], { n: stats.chunks })
									]
								})]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: styles_module_css_default.statusRow,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dt", { children: t["status.models"] }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("dd", {
									className: styles_module_css_default.mono,
									children: [
										stats.embedModel,
										" / ",
										stats.llmModel
									]
								})]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: styles_module_css_default.statusRow,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dt", { children: t["status.retrieval"] }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("dd", {
									className: styles_module_css_default.mono,
									children: stats.retrieval
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: styles_module_css_default.sectionTitle,
						children: format(t["status.sources"], { n: stats.sources.length })
					}),
					stats.empty ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: styles_module_css_default.hint,
						children: t["status.empty"]
					}) : stats.sources.map((source) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: styles_module_css_default.sourceRow,
						title: source.path,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: styles_module_css_default.mono,
							children: basename(source.path)
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: styles_module_css_default.sourceChunks,
							children: source.chunks
						})]
					}, source.path)),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: styles_module_css_default.footer,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
							className: styles_module_css_default.footerVersion,
							children: ["loci-dsh v", APP_VERSION]
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("a", {
							className: styles_module_css_default.footerStar,
							href: REPO_URL,
							target: "_blank",
							rel: "noreferrer",
							children: t["status.star"]
						})]
					})
				]
			});
		}
		//#endregion
		//#region src/client/index.tsx
		const inject = ["betterSidebar"];
		function apply(ctx) {
			if (ctx.betterSidebar === void 0) return;
			const sidebar = ctx.betterSidebar;
			ctx.effect(() => sidebar.registerTab({
				id: "loci:memory",
				title: () => currentLocale()["tab.title"],
				icon: (size) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					style: {
						fontSize: Math.max(12, size - 2),
						lineHeight: 1
					},
					children: "🧠"
				}),
				order: 70,
				single: true,
				component: ({ visible }) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(LociTab, { visible })
			}), "loci-dsh: better-sidebar tab");
		}
		//#endregion
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map