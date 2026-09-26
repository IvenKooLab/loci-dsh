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
				"memory.hint": "loci 尚无记忆列表接口：需关键词驱动检索；时间流全文列举等端点需求见 docs/upstream-requirements.md",
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
				"graph.hint": "图谱来自 loci ≥ 0.6.0 的 loci graph build（LLM 抽取的实体-关系三元组）。未生成时在本机运行一次即可。",
				"graph.unavailable": "没有图谱数据",
				"graph.unavailableHint": "在本机运行 loci graph build 生成，然后在插件 config 里把 graphPath 指向 graph.json（默认 <store>/graph.json）",
				"graph.stats": "{e} 实体 · {r} 关系 · 来自 {f} 个文件",
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
				"memory.hint": "loci has no list endpoint yet: retrieval is keyword-driven; timeline/wiki endpoint needs are in docs/upstream-requirements.md",
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
				"graph.hint": "Built by `loci graph build` (loci ≥ 0.6.0): LLM-extracted entity-relation triples. If missing, run it once locally.",
				"graph.unavailable": "No graph data",
				"graph.unavailableHint": "Run `loci graph build` locally, then point the plugin config `graphPath` at graph.json (default <store>/graph.json)",
				"graph.stats": "{e} entities · {r} relations · from {f} files",
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
		//#region \0dsh-css:E:\work\gitee\loci-dsh\src\client\styles.module.css.mjs
		const css = ".gCSg5a_root{height:100%;min-height:0;color:var(--dsh-fg-1,#e6e6e6);flex-direction:column;font-size:12px;display:flex}.gCSg5a_header{border-bottom:1px solid var(--dsh-border-2,#2a2a2a);align-items:center;gap:8px;padding:8px 10px;display:flex}.gCSg5a_headerSummary{text-overflow:ellipsis;white-space:nowrap;min-width:0;color:var(--dsh-fg-2,#9a9a9a);flex:1;overflow:hidden}.gCSg5a_headerButton{color:var(--dsh-fg-2,#9a9a9a);cursor:pointer;background:0 0;border:none;border-radius:4px;padding:2px 6px;font-size:14px;line-height:1}.gCSg5a_headerButton:hover{background:var(--dsh-bg-3,#2f2f2f);color:var(--dsh-fg-1,#e6e6e6)}.gCSg5a_tabs{gap:2px;padding:6px 8px 0;display:flex}.gCSg5a_tabButton{color:var(--dsh-fg-3,#7a7a7a);cursor:pointer;background:0 0;border:none;border-bottom:2px solid #0000;flex:1;padding:5px 8px;font-size:12px}.gCSg5a_tabActive{color:var(--dsh-fg-1,#e6e6e6);border-bottom-color:var(--dsh-accent,#7aa2f7)}.gCSg5a_body{flex:1;min-height:0;padding:10px;overflow-y:auto}.gCSg5a_view{flex-direction:column;gap:8px;display:flex}.gCSg5a_formRow{align-items:center;gap:6px;display:flex}.gCSg5a_input{min-width:0;color:var(--dsh-fg-1,#e6e6e6);background:var(--dsh-bg-2,#232323);border:1px solid var(--dsh-border-2,#333);border-radius:5px;flex:1;padding:5px 8px;font-size:12px}.gCSg5a_inputGrow{flex:.6}.gCSg5a_textarea{color:var(--dsh-fg-1,#e6e6e6);background:var(--dsh-bg-2,#232323);border:1px solid var(--dsh-border-2,#333);resize:vertical;border-radius:5px;padding:6px 8px;font-family:inherit;font-size:12px}.gCSg5a_select{color:var(--dsh-fg-1,#e6e6e6);background:var(--dsh-bg-2,#232323);border:1px solid var(--dsh-border-2,#333);border-radius:5px;padding:4px 6px;font-size:12px}.gCSg5a_button{background:var(--dsh-accent,#7aa2f7);color:#10131a;cursor:pointer;border:none;border-radius:5px;padding:5px 12px;font-size:12px;font-weight:600}.gCSg5a_button:disabled{opacity:.45;cursor:default}.gCSg5a_inlineLabel{color:var(--dsh-fg-2,#9a9a9a);white-space:nowrap;align-items:center;gap:4px;display:inline-flex}.gCSg5a_meta{color:var(--dsh-fg-3,#7a7a7a)}.gCSg5a_hint{color:var(--dsh-fg-3,#7a7a7a);background:var(--dsh-bg-2,#232323);border-radius:5px;padding:6px 8px;font-size:11px;line-height:1.5}.gCSg5a_errorBox{color:#e88;background:#e052521f;border:1px solid #e0525266;border-radius:5px;padding:8px}.gCSg5a_errorDetail{color:var(--dsh-fg-3,#8a7070);word-break:break-all;margin-top:4px;font-size:11px}.gCSg5a_hitList{flex-direction:column;gap:8px;display:flex}.gCSg5a_hit{background:var(--dsh-bg-2,#232323);border:1px solid var(--dsh-border-2,#2e2e2e);border-radius:6px;padding:8px}.gCSg5a_hitHead{align-items:center;gap:6px;display:flex}.gCSg5a_hitIndex{color:var(--dsh-fg-3,#7a7a7a);border:1px solid var(--dsh-border-2,#3a3a3a);border-radius:4px;padding:0 4px;font-size:10px}.gCSg5a_hitSource{color:var(--dsh-accent,#7aa2f7);text-overflow:ellipsis;white-space:nowrap;font-family:ui-monospace,Consolas,monospace;font-size:11px;overflow:hidden}.gCSg5a_badge{color:var(--dsh-fg-2,#9a9a9a);white-space:nowrap;margin-left:auto;font-size:10px}.gCSg5a_hitSection{color:var(--dsh-fg-3,#8a8a8a);text-overflow:ellipsis;white-space:nowrap;margin-top:3px;font-size:11px;overflow:hidden}.gCSg5a_hitText{white-space:pre-wrap;word-break:break-word;margin:6px 0 0;font-family:inherit;font-size:12px;line-height:1.55}.gCSg5a_linkButton{color:var(--dsh-accent,#7aa2f7);cursor:pointer;background:0 0;border:none;margin-top:4px;padding:0;font-size:11px}.gCSg5a_answer{background:var(--dsh-bg-2,#232323);border:1px solid var(--dsh-border-2,#2e2e2e);border-radius:6px;padding:8px}.gCSg5a_answerBody{white-space:pre-wrap;word-break:break-word;margin:0;font-family:inherit;font-size:12px;line-height:1.6}.gCSg5a_sources{flex-direction:column;gap:3px;margin-top:8px;display:flex}.gCSg5a_sourcesTitle{color:var(--dsh-fg-3,#7a7a7a);font-size:10px}.gCSg5a_sourceChip{color:var(--dsh-fg-2,#9a9a9a);background:var(--dsh-bg-3,#2a2a2a);text-overflow:ellipsis;white-space:nowrap;border-radius:4px;padding:2px 6px;font-family:ui-monospace,Consolas,monospace;font-size:10px;overflow:hidden}.gCSg5a_sectionTitle{color:var(--dsh-fg-2,#b5b5b5);margin-top:6px;font-size:11px;font-weight:600}.gCSg5a_dayGroup{flex-direction:column;gap:4px;display:flex}.gCSg5a_dayLabel{color:var(--dsh-fg-3,#8a8a8a);border-bottom:1px dashed var(--dsh-border-2,#333);padding-bottom:2px;font-size:11px;font-weight:600}.gCSg5a_memoryCard{background:var(--dsh-bg-2,#232323);border:1px solid var(--dsh-border-2,#2e2e2e);border-radius:6px;padding:7px 8px}.gCSg5a_memoryTime{color:var(--dsh-fg-3,#7a7a7a);font-family:ui-monospace,Consolas,monospace;font-size:10px}.gCSg5a_saved{color:#7ec98f;font-size:11px}.gCSg5a_statusList{flex-direction:column;gap:5px;margin:0;display:flex}.gCSg5a_statusRow{align-items:baseline;gap:8px;display:flex}.gCSg5a_statusRow dt{width:64px;color:var(--dsh-fg-3,#7a7a7a);flex-shrink:0;font-size:11px}.gCSg5a_statusRow dd{min-width:0;margin:0}.gCSg5a_mono{word-break:break-all;font-family:ui-monospace,Consolas,monospace;font-size:11px}.gCSg5a_sourceRow{border-radius:4px;align-items:center;gap:6px;padding:3px 6px;display:flex}.gCSg5a_sourceRow:hover{background:var(--dsh-bg-3,#2a2a2a)}.gCSg5a_sourceChunks{color:var(--dsh-fg-3,#7a7a7a);margin-left:auto;font-size:10px}.gCSg5a_dot{border-radius:50%;flex-shrink:0;width:8px;height:8px}.gCSg5a_dotUp{background:#7ec98f}.gCSg5a_dotDown{background:#e05252}.gCSg5a_dotChecking{background:#d9b45b;animation:1.2s ease-in-out infinite gCSg5a_lociPulse}.gCSg5a_graphChips{flex-wrap:wrap;gap:4px;display:flex}.gCSg5a_graphChip{border:1px solid var(--dsh-border-2,#333);background:var(--dsh-bg-2,#232323);color:var(--dsh-fg-1,#e6e6e6);cursor:pointer;border-radius:10px;align-items:center;gap:5px;padding:3px 8px;font-size:11px;display:inline-flex}.gCSg5a_graphChip:hover{border-color:var(--dsh-accent,#7aa2f7)}.gCSg5a_graphChipActive{border-color:var(--dsh-accent,#7aa2f7);background:#7aa2f726}.gCSg5a_graphChipDegree{color:var(--dsh-fg-3,#7a7a7a);font-size:9px}.gCSg5a_graphEdge{background:var(--dsh-bg-2,#232323);border:1px solid var(--dsh-border-2,#2e2e2e);border-radius:6px;flex-wrap:wrap;align-items:center;gap:6px;padding:6px 8px;display:flex}.gCSg5a_graphTerm{color:var(--dsh-accent,#7aa2f7);cursor:pointer;text-overflow:ellipsis;white-space:nowrap;background:0 0;border:none;max-width:45%;padding:0;font-size:12px;font-weight:600;overflow:hidden}.gCSg5a_graphPredicate{color:var(--dsh-fg-3,#8a8a8a);font-family:Consolas,ui-monospace,monospace;font-size:11px}.gCSg5a_graphSelected{color:var(--dsh-fg-2,#b5b5b5);font-size:11px}@keyframes gCSg5a_lociPulse{0%,to{opacity:.4}50%{opacity:1}}";
		const tagId = "loci-dsh/styles.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "loci-dsh";
			tag.dataset.pluginCss = tagId;
			tag.textContent = css;
			document.head.appendChild(tag);
		}
		var styles_module_css_default = {
			"hit": "gCSg5a_hit",
			"sources": "gCSg5a_sources",
			"sourcesTitle": "gCSg5a_sourcesTitle",
			"dayGroup": "gCSg5a_dayGroup",
			"dotUp": "gCSg5a_dotUp",
			"inlineLabel": "gCSg5a_inlineLabel",
			"dayLabel": "gCSg5a_dayLabel",
			"dotChecking": "gCSg5a_dotChecking",
			"tabButton": "gCSg5a_tabButton",
			"graphEdge": "gCSg5a_graphEdge",
			"sectionTitle": "gCSg5a_sectionTitle",
			"formRow": "gCSg5a_formRow",
			"headerSummary": "gCSg5a_headerSummary",
			"hitIndex": "gCSg5a_hitIndex",
			"textarea": "gCSg5a_textarea",
			"linkButton": "gCSg5a_linkButton",
			"graphPredicate": "gCSg5a_graphPredicate",
			"input": "gCSg5a_input",
			"button": "gCSg5a_button",
			"mono": "gCSg5a_mono",
			"lociPulse": "gCSg5a_lociPulse",
			"hitText": "gCSg5a_hitText",
			"statusList": "gCSg5a_statusList",
			"graphChipActive": "gCSg5a_graphChipActive",
			"graphChipDegree": "gCSg5a_graphChipDegree",
			"memoryCard": "gCSg5a_memoryCard",
			"body": "gCSg5a_body",
			"sourceChunks": "gCSg5a_sourceChunks",
			"sourceRow": "gCSg5a_sourceRow",
			"root": "gCSg5a_root",
			"hitHead": "gCSg5a_hitHead",
			"graphTerm": "gCSg5a_graphTerm",
			"graphChips": "gCSg5a_graphChips",
			"graphChip": "gCSg5a_graphChip",
			"hitSection": "gCSg5a_hitSection",
			"dot": "gCSg5a_dot",
			"saved": "gCSg5a_saved",
			"meta": "gCSg5a_meta",
			"hint": "gCSg5a_hint",
			"view": "gCSg5a_view",
			"hitList": "gCSg5a_hitList",
			"memoryTime": "gCSg5a_memoryTime",
			"graphSelected": "gCSg5a_graphSelected",
			"select": "gCSg5a_select",
			"answerBody": "gCSg5a_answerBody",
			"answer": "gCSg5a_answer",
			"tabActive": "gCSg5a_tabActive",
			"errorDetail": "gCSg5a_errorDetail",
			"errorBox": "gCSg5a_errorBox",
			"sourceChip": "gCSg5a_sourceChip",
			"inputGrow": "gCSg5a_inputGrow",
			"tabs": "gCSg5a_tabs",
			"dotDown": "gCSg5a_dotDown",
			"header": "gCSg5a_header",
			"headerButton": "gCSg5a_headerButton",
			"statusRow": "gCSg5a_statusRow",
			"hitSource": "gCSg5a_hitSource",
			"badge": "gCSg5a_badge"
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
		function GraphView() {
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
				className: styles_module_css_default.view,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: styles_module_css_default.meta,
					children: t["conn.checking"]
				})
			});
			if (graph === null) return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: styles_module_css_default.view,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: styles_module_css_default.meta,
					children: t["graph.unavailable"]
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: styles_module_css_default.hint,
					children: t["graph.unavailableHint"]
				})]
			});
			const needle = filter.trim().toLowerCase();
			const shownEntities = needle === "" ? graph.entities : graph.entities.filter((entity) => entity.name.toLowerCase().includes(needle));
			const shownEdges = selected !== null ? graph.edges.filter((edge) => edge.s === selected || edge.o === selected) : graph.edges;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: styles_module_css_default.view,
				children: [
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
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: styles_module_css_default.hitList,
						children: shownEdges.map((edge, i) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
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
						}, `${edge.s}-${edge.p}-${edge.o}-${i}`))
					})
				]
			});
		}
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
					}, source.path))
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