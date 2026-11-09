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
		//#region node_modules/.pnpm/marked@18.1.3/node_modules/marked/lib/marked.esm.js
		/**
		* marked v18.1.3 - a markdown parser
		* Copyright (c) 2018-2026, MarkedJS. (MIT License)
		* Copyright (c) 2011-2018, Christopher Jeffrey. (MIT License)
		* https://github.com/markedjs/marked
		*/
		/**
		* DO NOT EDIT THIS FILE
		* The code in this file is generated from files in ./src/
		*/
		function H() {
			return {
				async: !1,
				breaks: !1,
				extensions: null,
				gfm: !0,
				hooks: null,
				pedantic: !1,
				renderer: null,
				silent: !1,
				tokenizer: null,
				walkTokens: null
			};
		}
		var S = H();
		function se(a) {
			S = a;
		}
		var B = { exec: () => null };
		function D(a) {
			let e = [];
			return (t) => {
				let n = Math.max(0, Math.min(3, t - 1)), s = e[n];
				return s || (s = a(n), e[n] = s), s;
			};
		}
		function c(a, e = "") {
			let t = typeof a == "string" ? a : a.source, n = {
				replace: (s, r) => {
					let o = typeof r == "string" ? r : r.source;
					return o = o.replace(T.caret, "$1"), t = t.replace(s, o), n;
				},
				getRegex: () => new RegExp(t, e)
			};
			return n;
		}
		var Te = ((a = "") => {
			try {
				return !!new RegExp("(?<=1)(?<!1)" + a);
			} catch {
				return !1;
			}
		})();
		var T = {
			codeRemoveIndent: /^(?: {0,3}\t| {1,4})/gm,
			outputLinkReplace: /\\([\[\]])/g,
			indentCodeCompensation: /^(\s+)(?:```)/,
			beginningSpace: /^\s+/,
			endingHash: /#$/,
			startingSpaceChar: /^ /,
			endingSpaceChar: / $/,
			endingSpaceTabChar: /[ \t]$/,
			nonSpaceChar: /[^ ]/,
			newLineCharGlobal: /\n/g,
			tabCharGlobal: /\t/g,
			leadingSpaceTab: /^[ \t]+/,
			multipleSpaceGlobal: /\s+/g,
			blankLine: /^[ \t]*$/,
			doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
			blockquoteStart: /^ {0,3}>/,
			blockquoteSetextReplace: /\n {0,3}((?:=+|-+)[ \t]*)(?=\n|$)/g,
			blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
			blockquoteMarkerWhitespace: /^( {0,3}>)([ \t]+)/gm,
			listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
			listIsTask: /^\[[ xX]\][ \t]+\S/,
			listReplaceTask: /^\[[ xX]\][ \t]+/,
			listTaskCheckbox: /\[[ xX]\]/,
			anyLine: /\n.*\n/,
			hrefBrackets: /^<(.*)>$/,
			tableDelimiter: /[:|]/,
			tableAlignChars: /^\||\| *$/g,
			tableRowBlankLine: /\n[ \t]*$/,
			tableAlignRight: /^ *-+: *$/,
			tableAlignCenter: /^ *:-+: *$/,
			tableAlignLeft: /^ *:-+ *$/,
			startATag: /^<a /i,
			endATag: /^<\/a>/i,
			startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
			endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
			startAngleBracket: /^</,
			endAngleBracket: />$/,
			pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
			unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
			numericCharacterReference: /&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));/,
			numericCharacterReferenceOrAmpersand: /&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
			escapeTest: /[&<>"']/,
			escapeReplace: /[&<>"']/g,
			escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
			escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
			caret: /(^|[^\[])\^/g,
			percentDecode: /%25/g,
			findPipe: /\|/g,
			splitPipe: / \|/,
			slashPipe: /\\\|/g,
			carriageReturn: /\r\n|\r/g,
			spaceLine: /^ +$/gm,
			notSpaceStart: /^\S*/,
			endingNewline: /\n$/,
			listItemRegex: (a) => new RegExp(`^( {0,3}${a})((?:[	 ][^\\n]*)?(?:\\n|$))`),
			nextBulletRegex: D((a) => new RegExp(`^ {0,${a}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),
			hrRegex: D((a) => new RegExp(`^ {0,${a}}((?:-[ 	]*){3,}|(?:_[ 	]*){3,}|(?:\\*[ 	]*){3,})(?:\\n+|$)`)),
			fencesBeginRegex: D((a) => new RegExp(`^ {0,${a}}(?:\`\`\`|~~~)`)),
			headingBeginRegex: D((a) => new RegExp(`^ {0,${a}}#{1,6}(?:\\s|$)`)),
			pedanticHeadingBeginRegex: D((a) => new RegExp(`^ {0,${a}}#`)),
			htmlBeginRegex: D((a) => new RegExp(`^ {0,${a}}(?:</?(?:${K})(?: +|$|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`, "i")),
			blockquoteBeginRegex: D((a) => new RegExp(`^ {0,${a}}>`))
		};
		var ve = /^(?:[ \t]*(?:\n|$))+/;
		var Ze = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/;
		var He = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}(?:(?=`)\1`*|(?=~)\1~*) *(?=\n|$)|$)/;
		var W = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
		var je = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
		var oe = / {0,3}(?:[*+-]|\d{1,9}[.)])/;
		var Oe = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |fences|blockquote|heading|hr|html|table))+?)\n {0,3}(=+|-+)[ \t]*(?:\n+|$)/;
		var we = c(Oe).replace(/bull/g, oe).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}(?:\s|$)/).replace(/hr/g, / {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex();
		var Ge = c(Oe).replace(/bull/g, oe).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}(?:\s|$)/).replace(/hr/g, / {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex();
		var ae = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/;
		var Ne = /^[^\n]+/;
		var le = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\\n]|\n(?![ \t]*\n))+/;
		var Fe = c(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", le).replace("title", /(?:"(?:\\[\s\S]|[^"\\])*"|'(?:\\[\s\S]|[^'\\\n]|\n(?!\n))*'|\((?:\\[\s\S]|[^()\\])*\))/).getRegex();
		var Qe = c(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g, oe).getRegex();
		var K = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
		var ue = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
		var Ue = c("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?:[ \\t]+|\\n|/?>|$)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!(?:script|pre|style|textarea)(?![a-z0-9-]))([a-z][a-z0-9-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", ue).replace("tag", K).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
		var Pe = (a) => c(ae).replace("hr", W).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list", a).replace("html", " {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)").replace("tag", K).getRegex();
		var We = Pe(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/);
		var Ke = Pe(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/);
		var pe = {
			blockquote: c(/^( {0,3}> ?(?:(?![ \t]*(?:\n|$))(paragraph)|[^\n]*)(?:\n|$))+/).replace("paragraph", Ke).getRegex(),
			code: Ze,
			def: Fe,
			fences: He,
			heading: je,
			hr: W,
			html: Ue,
			lheading: we,
			list: Qe,
			newline: ve,
			paragraph: We,
			table: B,
			text: Ne
		};
		var xe = c("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", W).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", " {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)").replace("tag", K).getRegex();
		var Ve = {
			...pe,
			lheading: Ge,
			table: xe,
			paragraph: c(ae).replace("hr", W).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", xe).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html", " {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)").replace("tag", K).getRegex()
		};
		var Je = {
			...pe,
			html: c(`^ *(?:comment(?: *\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1>(?: *\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?>(?: *\\n{2,}|\\s*$))`).replace("comment", ue).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
			def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
			heading: /^(#{1,6})(.*)(?:\n+|$)/,
			fences: B,
			lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
			paragraph: c(ae).replace("hr", W).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", we).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
		};
		var Ye = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;
		var et = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;
		var Se = /^( {2,}|\\)\n(?!\s*$)[ \t]*/;
		var tt = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;
		var $ = /[\p{P}\p{S}]/u;
		var j = /[\s\p{P}\p{S}]/u;
		var X = /[^\s\p{P}\p{S}]/u;
		var nt = c(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, j).getRegex();
		var rt = /[\p{Pi}\p{Ps}"']/u;
		var ye = /(?!~)[\p{P}\p{S}]/u;
		var st = /(?!~)[\s\p{P}\p{S}]/u;
		var it = /(?:[^\s\p{P}\p{S}]|~)/u;
		var ot = c(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", Te ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex();
		var _e = /^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/;
		var at = c(_e, "u").replace(/punct/g, $).getRegex();
		var lt = c(_e, "u").replace(/punct/g, ye).getRegex();
		var pt = c(/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/, "u").replace(/openQuote/g, rt).replace(/punct/g, $).getRegex();
		var $e = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)";
		var ct = c($e, "gu").replace(/notPunctSpace/g, X).replace(/punctSpace/g, j).replace(/punct/g, $).getRegex();
		var ht = c($e, "gu").replace(/notPunctSpace/g, it).replace(/punctSpace/g, st).replace(/punct/g, ye).getRegex();
		var gt = c("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)", "gu").replace(/notPunctSpace/g, X).replace(/punctSpace/g, j).replace(/punct/g, $).getRegex();
		var kt = c("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, X).replace(/punctSpace/g, j).replace(/punct/g, $).getRegex();
		var mt = c("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)", "gu").replace(/notPunctSpace/g, X).replace(/punctSpace/g, j).replace(/punct/g, $).getRegex();
		var xt = c(/^~~?(?:((?!~)punct)|[^\s~])/, "u").replace(/punct/g, $).getRegex();
		var Rt = c("^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)", "gu").replace(/notPunctSpace/g, X).replace(/punctSpace/g, j).replace(/punct/g, $).getRegex();
		var Tt = c(/\\(punct)/, "gu").replace(/punct/g, $).getRegex();
		var Ot = c(/(`+)(?:[^`]|[^`][\s\S]*?[^`])\1(?!`)|`+|\\(punct)/, "gu").replace(/punct/g, $).getRegex();
		var wt = c(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
		var Pt = c(ue).replace("(?:-->|$)", "-->").getRegex();
		var St = c("^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Pt).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
		var Le = /\[(?:\\[\s\S]|[^\[\]\\])*\]/;
		var re = c(/(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/).replace("brackets", Le).getRegex();
		var yt = c(/^!?\[(label)\]\([ \t\n]*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?[ \t\n]*\)/).replace("label", re).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace("title", /"(?:\\[\s\S]|[^"\\])*"|'(?:\\[\s\S]|[^'\\])*'|\((?:\\[\s\S]|[^)\\])*\)/).getRegex();
		var _t = c(/^!?\[(label)\]\[(ref)\]/).replace("label", re).replace("ref", le).getRegex();
		var $t = c(/^!?\[(ref)\](?:\[\])?/).replace("ref", le).getRegex();
		var be = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\]){1,999}/;
		var Lt = c(/(?:[^\[\]\\`]*(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\]))){0,999}?[^\[\]\\`]*?/).replace("brackets", Le).getRegex();
		var Ct = c("reflink|nolink(?!\\()", "g").replace("reflink", c(/^!?\[(label)\]\[(ref)\]/).replace("label", Lt).replace("ref", be).getRegex()).replace("nolink", c(/^!?\[(ref)\](?:\[\])?/).replace("ref", be).getRegex()).getRegex();
		var Re = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/;
		var At = c(/(?:mailto:email|xmpp:email(?:\/[A-Za-z0-9@.]+)?)/).replace(/email/g, /[A-Za-z0-9._+-]+@[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex();
		var ce = {
			_backpedal: B,
			anyPunctuation: Tt,
			anyPunctuationOutsideCode: Ot,
			autolink: wt,
			blockSkip: ot,
			br: Se,
			code: et,
			del: B,
			delLDelim: B,
			delRDelim: B,
			emStrongLDelim: at,
			emStrongRDelimAst: ct,
			emStrongRDelimUnd: kt,
			escape: Ye,
			link: yt,
			nolink: $t,
			punctuation: nt,
			reflink: _t,
			reflinkSearch: Ct,
			tag: St,
			text: tt,
			url: B
		};
		var Et = {
			...ce,
			emStrongLDelim: pt,
			emStrongRDelimAst: gt,
			emStrongRDelimUnd: mt,
			link: c(/^!?\[(label)\]\((.*?)\)/).replace("label", re).getRegex(),
			reflink: c(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", re).getRegex()
		};
		var ie = {
			...ce,
			emStrongRDelimAst: ht,
			emStrongLDelim: lt,
			delLDelim: xt,
			delRDelim: Rt,
			url: c(/^emailProtocol|^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("emailProtocol", At).replace("protocol", Re).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),
			_backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
			del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,
			text: c(/^(?:[^a-zA-Z0-9](?=emailProtocol)|(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|wwwStart|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9](?=emailProtocol)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))))/).replace("protocol", Re).replace(/emailProtocol/g, /(?:mailto|xmpp):/).replace("wwwStart", Te ? "(?<![^\\s*_~(])www\\." : "www\\.").getRegex()
		};
		var zt = {
			...ie,
			br: c(Se).replace("{2,}", "*").getRegex(),
			text: c(ie.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
		};
		var V = {
			normal: pe,
			gfm: Ve,
			pedantic: Je
		};
		var G = {
			normal: ce,
			gfm: ie,
			breaks: zt,
			pedantic: Et
		};
		var Mt = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			"\"": "&quot;",
			"'": "&#39;"
		};
		var Ce = (a) => Mt[a];
		function P(a, e) {
			if (e) {
				if (T.escapeTest.test(a)) return a.replace(T.escapeReplace, Ce);
			} else if (T.escapeTestNoEncode.test(a)) return a.replace(T.escapeReplaceNoEncode, Ce);
			return a;
		}
		function Ie(a) {
			return T.numericCharacterReference.test(a) ? a.replace(T.numericCharacterReferenceOrAmpersand, (e, t, n) => {
				if (t === void 0 && n === void 0) return "&amp;";
				let s = t === void 0 ? Number.parseInt(n, 16) : Number.parseInt(t, 10);
				return s === 0 || s > 1114111 || s >= 55296 && s <= 57343 ? "�" : s === 38 ? "&amp;" : String.fromCodePoint(s);
			}) : a;
		}
		function he(a) {
			try {
				a = encodeURI(a).replace(T.percentDecode, "%");
			} catch {
				return null;
			}
			return a;
		}
		function de(a, e) {
			let n = a.replace(T.findPipe, (r, o, i) => {
				let l = !1, p = o;
				for (; --p >= 0 && i[p] === "\\";) l = !l;
				return l ? "|" : " |";
			}).split(T.splitPipe), s = 0;
			if (n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), e) if (n.length > e) n.splice(e);
			else for (; n.length < e;) n.push("");
			for (; s < n.length; s++) n[s] = n[s].trim().replace(T.slashPipe, "|");
			return n;
		}
		function L(a, e, t) {
			let n = a.length;
			if (n === 0) return "";
			let s = 0;
			for (; s < n;) {
				let r = a.charAt(n - s - 1);
				if (r === e && !t) s++;
				else if (r !== e && t) s++;
				else break;
			}
			return a.slice(0, n - s);
		}
		function ge(a) {
			let e = a.split(`
`), t = e.length - 1;
			for (; t >= 0 && T.blankLine.test(e[t]);) t--;
			return e.length - t <= 2 ? a : e.slice(0, t + 1).join(`
`);
		}
		function F(a) {
			return a.trim().replace(T.multipleSpaceGlobal, " ").toLowerCase().toUpperCase().toLowerCase();
		}
		function ke(a, e) {
			if (a.indexOf(e[0]) === -1 && a.indexOf(e[1]) === -1) return -1;
			let t = 0;
			for (let n = 0; n < a.length; n++) if (a[n] === "\\") n++;
			else if (a[n] === e[0]) t++;
			else if (a[n] === e[1] && (t--, t < 0)) return n;
			return t > 0 ? -2 : -1;
		}
		var N = /* @__PURE__ */ new WeakMap();
		function fe(a) {
			let e = {
				"*": -1,
				_: -1
			}, t = -1, n = a.length;
			for (let s = 0; s < n; s++) {
				let r = a[s];
				if (r !== "*" && r !== "_" && r !== "~") continue;
				let o = s === 0 ? `
` : a[s - 1], i = s + 1;
				for (; i < n && a[i] === r;) i++;
				o !== " " && o !== "	" && o !== `
` && o !== "\r" && o !== "\f" && (r === "~" ? t = s : e[r] = s), s = i - 1;
			}
			return {
				maskedSrc: a,
				lastPossibleEmStrongCloserIndex: e,
				lastPossibleDelCloserIndex: t
			};
		}
		function Ae(a, e) {
			let t = fe(e), n = N.get(a);
			n ? n.push(t) : N.set(a, [t]);
		}
		function Ee(a) {
			let e = N.get(a);
			e && (e.pop(), e.length === 0 && N.delete(a));
		}
		function ze(a, e, t) {
			let n = N.get(a)?.at(-1);
			return n && n.maskedSrc === e ? n.lastPossibleEmStrongCloserIndex[t] : fe(e).lastPossibleEmStrongCloserIndex[t];
		}
		function Me(a, e) {
			let t = N.get(a)?.at(-1);
			return t && t.maskedSrc === e ? t.lastPossibleDelCloserIndex : fe(e).lastPossibleDelCloserIndex;
		}
		function J(a, e = 0) {
			let t = e, n = "";
			for (let s of a) if (s === "	") {
				let r = 4 - t % 4;
				n += " ".repeat(r), t += r;
			} else n += s, t++;
			return n;
		}
		function De(a, e, t, n, s) {
			let r = e.href, o = e.title || null, i = a[1].replace(s.other.outputLinkReplace, "$1"), l = a[0].charAt(0) === "!", p = n.state.inLink, h = n.state.linkEmitted, u = n.state.inRawBlock;
			n.state.inLink = !0, n.state.linkEmitted = !1;
			let d = n.inlineTokens(i), k = n.state.linkEmitted;
			if (n.state.linkEmitted = h, n.state.inLink = p, !l) {
				if (k) {
					n.state.inRawBlock = u;
					return;
				}
				n.state.linkEmitted = !0;
			}
			return {
				type: l ? "image" : "link",
				raw: t,
				href: r,
				title: o,
				text: i,
				tokens: d
			};
		}
		function Dt(a, e, t) {
			let n = a.match(t.other.indentCodeCompensation);
			if (n === null) return e;
			let s = n[1];
			return e.split(`
`).map((r) => {
				let o = r.match(t.other.beginningSpace);
				if (o === null) return r;
				let [i] = o;
				return r.slice(Math.min(i.length, s.length));
			}).join(`
`);
		}
		function Be(a, e, t, n) {
			if (!e.includes("<")) return !1;
			for (let s = 0; s < e.length; s++) {
				if (e[s] === "\\") {
					s++;
					continue;
				}
				if (e[s] === "`") {
					let i = n.inline.code.exec(e.slice(s));
					if (i) {
						s += i[0].length - 1;
						continue;
					}
				}
				if (e[s] !== "<") continue;
				let r = a.slice(t + s), o = n.inline.tag.exec(r) || n.inline.autolink.exec(r);
				if (o) {
					if (o[0].length > e.length - s) return !0;
					s += o[0].length - 1;
				}
			}
			return !1;
		}
		var _ = class {
			options;
			rules;
			lexer;
			constructor(e) {
				this.options = e || S;
			}
			space(e) {
				let t = this.rules.block.newline.exec(e);
				if (t && t[0].length > 0) return {
					type: "space",
					raw: t[0]
				};
			}
			code(e) {
				let t = this.rules.block.code.exec(e);
				if (t) {
					let n = this.options.pedantic ? t[0] : ge(t[0]);
					return {
						type: "code",
						raw: n,
						codeBlockStyle: "indented",
						text: n.replace(this.rules.other.codeRemoveIndent, "")
					};
				}
			}
			fences(e) {
				let t = this.rules.block.fences.exec(e);
				if (t) {
					let n = t[0], s = Dt(n, t[3] || "", this.rules);
					return {
						type: "code",
						raw: n,
						lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
						text: s
					};
				}
			}
			heading(e) {
				let t = this.rules.block.heading.exec(e);
				if (t) {
					let n = t[2].trim();
					if (this.rules.other.endingHash.test(n)) {
						let s = L(n, "#");
						(this.options.pedantic || !s || this.rules.other.endingSpaceTabChar.test(s)) && (n = s.trim());
					}
					return {
						type: "heading",
						raw: L(t[0], `
`),
						depth: t[1].length,
						text: n,
						tokens: this.lexer.inline(n)
					};
				}
			}
			hr(e) {
				let t = this.rules.block.hr.exec(e);
				if (t) return {
					type: "hr",
					raw: L(t[0], `
`)
				};
			}
			blockquote(e) {
				let t = this.rules.block.blockquote.exec(e);
				if (t) {
					let n = L(t[0], `
`).split(`
`), s = "", r = "", o = [];
					for (; n.length > 0;) {
						let i = !1, l = [], p = 0;
						for (; p < n.length; p++) if (this.rules.other.blockquoteStart.test(n[p])) l.push(n[p]), i = !0;
						else if (!i) l.push(n[p]);
						else break;
						n = n.slice(p);
						let h = l.join(`
`), u = h.replace(this.rules.other.blockquoteMarkerWhitespace, (g, b, m) => b + J(m, b.length)).replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
						s = s ? `${s}
${h}` : h, r = r ? `${r}
${u}` : u;
						let d = this.lexer.state.top;
						if (this.lexer.state.top = !0, this.lexer.blockTokens(u, o, !0), this.lexer.state.top = d, n.length === 0) break;
						let k = o.at(-1);
						if (k?.type === "code" || k?.type === "heading" || k?.type === "hr" || k?.type === "html" || k?.type === "table") break;
						if (k?.type === "blockquote") {
							let g = k, b = n.join(`
`), m = g.raw + `
` + b.replace(this.rules.other.blockquoteSetextReplace2, ""), f = this.blockquote(m);
							o[o.length - 1] = f;
							let y = m.substring(f.raw.length).replace(/^\n/, ""), R = y ? y.split(`
`).length : 0, A = R ? n.slice(0, -R) : n;
							if (A.length > 0 && (s = `${s}
${A.join(`
`)}`), r = r.substring(0, r.length - g.text.length) + f.text, n = n.slice(A.length), n.length > 0 && this.rules.other.blockquoteStart.test(n[0])) continue;
							break;
						} else if (k?.type === "list") {
							let g = k, b = g.raw + `
` + n.join(`
`), m = this.list(b);
							o[o.length - 1] = m;
							let f = m.raw.length > g.raw.length ? b.slice(g.raw.length + 1, m.raw.length).split(`
`).length : 0;
							if (f > 0) {
								let y = n.slice(0, f).join(`
`);
								s = `${s}
${y}`, r = `${r}
${y}`;
							}
							n = n.slice(f);
							continue;
						}
					}
					return {
						type: "blockquote",
						raw: s,
						tokens: o,
						text: r
					};
				}
			}
			list(e) {
				let t = this.rules.block.list.exec(e);
				if (t) {
					let n = e, s = () => n.length - e.length, r = t[1].trim(), o = r.length > 1, i = {
						type: "list",
						raw: "",
						ordered: o,
						start: o ? +r.slice(0, -1) : "",
						loose: !1,
						items: []
					};
					r = o ? `\\d{1,9}\\${r.slice(-1)}` : `\\${r}`, this.options.pedantic && (r = o ? r : "[*+-]");
					let l = this.rules.other.listItemRegex(r), p = !1;
					for (; e;) {
						let u = !1, d = "";
						if (!(t = l.exec(e)) || this.rules.block.hr.test(e)) break;
						let k = s();
						e = e.substring(t[0].length);
						let g = t[2].split(`
`, 1)[0], b = t[1].length, m = this.options.pedantic ? J(g, b) : g.replace(this.rules.other.leadingSpaceTab, (v) => J(v, b)), f = e.split(`
`, 1)[0], y = !m.trim(), R = 0;
						if (this.options.pedantic ? (R = 2, d = m.trimStart()) : y ? R = b + 1 : (R = m.search(this.rules.other.nonSpaceChar), R = R > 4 ? 1 : R, d = m.slice(R), R += b), y && this.rules.other.blankLine.test(f) && (e = e.substring(f.length + 1), u = !0), !u) {
							let v = this.rules.other.nextBulletRegex(R), Q = this.rules.other.hrRegex(R), ee = this.rules.other.fencesBeginRegex(R), te = this.options.pedantic ? this.rules.other.pedanticHeadingBeginRegex(R) : this.rules.other.headingBeginRegex(R), M = this.rules.other.htmlBeginRegex(R), ne = this.rules.other.blockquoteBeginRegex(R);
							for (; e;) {
								let U = e.split(`
`, 1)[0], Z;
								if (f = U, this.options.pedantic ? (f = f.replace(this.rules.other.listReplaceNesting, "  "), Z = f) : Z = f.replace(this.rules.other.leadingSpaceTab, (me) => J(me)), ee.test(f) || te.test(f) || M.test(f) || ne.test(f) || v.test(f) || Q.test(f)) break;
								if (Z.search(this.rules.other.nonSpaceChar) >= R || !f.trim()) d += `
` + Z.slice(R);
								else {
									if (y || m.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || ee.test(m) || te.test(m) || M.test(m) || Q.test(m)) break;
									let qe = !this.options.pedantic && /^ {0,3}(?:=+|-+) *$/.test(f) && this.rules.block.lheading.test(`${m}
${f}`) ? `    ${Z.replace(/^ {0,3}/, "")}` : f;
									d += `
` + qe;
								}
								y = !f.trim(), e = e.substring(U.length + 1), m = Z.slice(R);
							}
						}
						let A = n.slice(k, s());
						i.loose || (p ? i.loose = !0 : this.rules.other.doubleBlankLine.test(A) && (p = !0)), i.items.push({
							type: "list_item",
							raw: A,
							task: !!this.options.gfm && this.rules.other.listIsTask.test(d),
							loose: !1,
							text: d,
							tokens: []
						});
					}
					let h = i.items.at(-1);
					if (h) h.raw = h.raw.trimEnd(), h.text = h.text.trimEnd();
					else return;
					i.raw = n.slice(0, s()).trimEnd();
					for (let u of i.items) if (this.lexer.state.top = !1, u.tokens = this.lexer.blockTokens(u.text, []), !i.loose) {
						let d = u.tokens.filter((g) => g.type === "space");
						i.loose = d.length > 0 && d.some((g) => this.rules.other.anyLine.test(g.raw));
					}
					for (let u of i.items) {
						let d = u.tokens[0];
						if (u.task && (d?.type === "text" || d?.type === "paragraph")) {
							u.text = u.text.replace(this.rules.other.listReplaceTask, ""), d.raw = d.raw.replace(this.rules.other.listReplaceTask, ""), d.text = d.text.replace(this.rules.other.listReplaceTask, "");
							for (let g = this.lexer.inlineQueue.length - 1; g >= 0; g--) if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[g].src)) {
								this.lexer.inlineQueue[g].src = this.lexer.inlineQueue[g].src.replace(this.rules.other.listReplaceTask, "");
								break;
							}
							let k = this.rules.other.listTaskCheckbox.exec(u.raw);
							if (k) {
								let g = {
									type: "checkbox",
									raw: k[0] + " ",
									checked: k[0] !== "[ ]"
								};
								u.checked = g.checked, i.loose ? u.tokens[0] && ["paragraph", "text"].includes(u.tokens[0].type) && "tokens" in u.tokens[0] && u.tokens[0].tokens ? (u.tokens[0].raw = g.raw + u.tokens[0].raw, u.tokens[0].text = g.raw + u.tokens[0].text, u.tokens[0].tokens.unshift(g)) : u.tokens.unshift({
									type: "paragraph",
									raw: g.raw,
									text: g.raw,
									tokens: [g]
								}) : u.tokens.unshift(g);
							}
						} else u.task && (u.task = !1);
					}
					if (i.loose) for (let u of i.items) {
						u.loose = !0;
						for (let d of u.tokens) d.type === "text" && (d.type = "paragraph");
					}
					return i;
				}
			}
			html(e) {
				let t = this.rules.block.html.exec(e);
				if (t) {
					let n = ge(t[0]);
					return {
						type: "html",
						block: !0,
						raw: n,
						pre: t[1] === "pre" || t[1] === "script" || t[1] === "style",
						text: n
					};
				}
			}
			def(e) {
				let t = this.rules.block.def.exec(e);
				if (t) {
					if (!this.rules.other.startAngleBracket.test(t[2]) && ke(t[2], "()") !== -1) return;
					let n = F(t[1]), s = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", r = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
					return {
						type: "def",
						tag: n,
						raw: L(t[0], `
`),
						href: s,
						title: r
					};
				}
			}
			table(e) {
				let t = this.rules.block.table.exec(e);
				if (!t || !this.rules.other.tableDelimiter.test(t[2])) return;
				let n = de(t[1]), s = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), r = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], o = {
					type: "table",
					raw: L(t[0], `
`),
					header: [],
					align: [],
					rows: []
				};
				if (n.length === s.length) {
					for (let i of s) this.rules.other.tableAlignRight.test(i) ? o.align.push("right") : this.rules.other.tableAlignCenter.test(i) ? o.align.push("center") : this.rules.other.tableAlignLeft.test(i) ? o.align.push("left") : o.align.push(null);
					for (let i = 0; i < n.length; i++) o.header.push({
						text: n[i],
						tokens: this.lexer.inline(n[i]),
						header: !0,
						align: o.align[i]
					});
					for (let i of r) o.rows.push(de(i, o.header.length).map((l, p) => ({
						text: l,
						tokens: this.lexer.inline(l),
						header: !1,
						align: o.align[p]
					})));
					return o;
				}
			}
			lheading(e) {
				let t = this.rules.block.lheading.exec(e);
				if (t) {
					let n = t[1].trim();
					return {
						type: "heading",
						raw: L(t[0], `
`),
						depth: t[2].charAt(0) === "=" ? 1 : 2,
						text: n,
						tokens: this.lexer.inline(n)
					};
				}
			}
			paragraph(e) {
				let t = this.rules.block.paragraph.exec(e);
				if (t) {
					let n = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
					return {
						type: "paragraph",
						raw: t[0],
						text: n,
						tokens: this.lexer.inline(n)
					};
				}
			}
			text(e) {
				let t = this.rules.block.text.exec(e);
				if (t) return {
					type: "text",
					raw: t[0],
					text: t[0],
					tokens: this.lexer.inline(t[0])
				};
			}
			escape(e) {
				let t = this.rules.inline.escape.exec(e);
				if (t) return {
					type: "escape",
					raw: t[0],
					text: t[1]
				};
			}
			tag(e) {
				let t = this.rules.inline.tag.exec(e);
				if (t) return !this.lexer.state.inLink && this.rules.other.startATag.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t[0]) && (this.lexer.state.inRawBlock = !1), {
					type: "html",
					raw: t[0],
					inLink: this.lexer.state.inLink,
					inRawBlock: this.lexer.state.inRawBlock,
					block: !1,
					text: t[0]
				};
			}
			link(e) {
				if (this.lexer.state.linkParenPossible === !1) return;
				let t = this.rules.inline.link.exec(e);
				if (t) {
					let n = t[0].charAt(0) === "!" ? 2 : 1;
					if (!this.options.pedantic && Be(e, t[1], n, this.rules)) return;
					let s = t[2].trim();
					if (!this.options.pedantic && this.rules.other.startAngleBracket.test(s)) {
						if (!this.rules.other.endAngleBracket.test(s)) return;
						let l = L(s.slice(0, -1), "\\");
						if ((s.length - l.length) % 2 === 0) return;
					} else {
						let l = ke(t[2], "()");
						if (l === -2) return;
						if (l > -1) {
							let h = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + l;
							t[2] = t[2].substring(0, l), t[0] = t[0].substring(0, h).trim(), t[3] = "";
						}
					}
					let r = L(t[0].slice(0, -1), "\\");
					if ((t[0].length - r.length) % 2 === 0) return;
					let o = t[2], i = "";
					if (this.options.pedantic) {
						let l = this.rules.other.pedanticHrefTitle.exec(o);
						l && (o = l[1], i = l[3]);
					} else i = t[3] ? t[3].slice(1, -1) : "";
					return o = o.trim(), this.rules.other.startAngleBracket.test(o) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(s) ? o = o.slice(1) : o = o.slice(1, -1)), De(t, {
						href: o && o.replace(this.rules.inline.anyPunctuation, "$1"),
						title: i && i.replace(this.rules.inline.anyPunctuation, "$1")
					}, t[0], this.lexer, this.rules);
				}
			}
			reflink(e, t) {
				let n;
				if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
					let s = n[0].charAt(0) === "!" ? 2 : 1;
					if (!this.options.pedantic && Be(e, n[1], s, this.rules)) return;
					let r = t[F(n[2] || n[1])];
					if (!r) {
						let o = n[0].charAt(0);
						return {
							type: "text",
							raw: o,
							text: o
						};
					}
					return De(n, r, n[0], this.lexer, this.rules);
				}
			}
			emStrong(e, t, n = "") {
				let s = this.rules.inline.emStrongLDelim.exec(e);
				if (!s || !s[1] && !s[2] && !s[3] && !s[4]) return;
				let r = s[0][0], o = n === r, i = t.length - e.length, l = i;
				for (; !this.options.pedantic && l > 0 && t[l - 1] === r;) l--;
				let p = [...t.slice(Math.max(0, l - 2), l)].at(-1) ?? "", h = p === "*" || p === "_" || !!this.rules.inline.punctuation.exec(p);
				l < i && (n = p);
				let u = l < i ? h : !!this.rules.inline.punctuation.exec(n);
				if (s[4] && n.match(this.rules.other.unicodeAlphaNumeric)) return;
				let d = s[1] || s[3] || "";
				if (!d || !n || u) {
					let k = [...s[0]].length - 1, g, b, m = k, f = 0, y = i - l + k, R = !this.options.pedantic && !!p.trim() && (!!d || r === "*" && !h);
					if (r !== "*" && r !== "_") return;
					let A = r === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd, v = ze(this, t, r), Q = t.length - e.length + k;
					if (v < Q) return;
					t = t.slice(-1 * e.length + k);
					let ee = v - Q;
					for (A.lastIndex = 0; (s = A.exec(t)) !== null && !(s.index > ee);) {
						if (g = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !g) continue;
						if (b = [...g].length, s[3] || s[4]) {
							m += b;
							continue;
						} else if (s[5] || s[6] || R) {
							if (o && (s[5] || s[6])) break;
							if (y % 3 && !((y + b) % 3)) {
								f += b;
								continue;
							}
						}
						if (m -= b, m > 0) continue;
						b = Math.min(b, b + m + f);
						let te = [...s[0]][0].length, M = e.slice(0, k + s.index + te + b);
						if (Math.min(k, b) % 2) {
							let U = M.slice(1, -1);
							return {
								type: "em",
								raw: M,
								text: U,
								tokens: this.lexer.inlineTokens(U)
							};
						}
						let ne = M.slice(2, -2);
						return {
							type: "strong",
							raw: M,
							text: ne,
							tokens: this.lexer.inlineTokens(ne)
						};
					}
				}
			}
			codespan(e) {
				let t = this.rules.inline.code.exec(e);
				if (t) {
					let n = t[2].replace(this.rules.other.newLineCharGlobal, " "), s = this.rules.other.nonSpaceChar.test(n), r = this.rules.other.startingSpaceChar.test(n) && this.rules.other.endingSpaceChar.test(n);
					return s && r && (n = n.substring(1, n.length - 1)), {
						type: "codespan",
						raw: t[0],
						text: n
					};
				}
			}
			br(e) {
				let t = this.rules.inline.br.exec(e);
				if (t) return {
					type: "br",
					raw: t[0]
				};
			}
			del(e, t, n = "") {
				let s = this.rules.inline.delLDelim.exec(e);
				if (!s) return;
				if (!(s[1] || "") || !n || this.rules.inline.punctuation.exec(n)) {
					let o = [...s[0]].length - 1, i, l, p = o, h = this.rules.inline.delRDelim, u = Me(this, t), d = t.length - e.length + o;
					if (u < d) return;
					t = t.slice(-1 * e.length + o);
					let k = u - d;
					for (h.lastIndex = 0; (s = h.exec(t)) !== null && !(s.index > k);) {
						if (i = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !i || (l = [...i].length, l !== o)) continue;
						if (s[3] || s[4]) {
							p += l;
							continue;
						}
						if (p -= l, p > 0) continue;
						l = Math.min(l, l + p);
						let g = [...s[0]][0].length, b = e.slice(0, o + s.index + g + l), m = b.slice(o, -o);
						return {
							type: "del",
							raw: b,
							text: m,
							tokens: this.lexer.inlineTokens(m)
						};
					}
				}
			}
			autolink(e) {
				let t = this.rules.inline.autolink.exec(e);
				if (t) {
					let n, s;
					return t[2] === "@" ? (n = t[1], s = "mailto:" + n) : (n = t[1], s = n), {
						type: "link",
						raw: t[0],
						text: n,
						href: s,
						autolink: !0,
						tokens: [{
							type: "text",
							raw: n,
							text: n
						}]
					};
				}
			}
			url(e) {
				let t;
				if (t = this.rules.inline.url.exec(e)) {
					let n, s;
					if (t[2] === "@") n = t[0], s = "mailto:" + n;
					else {
						let r;
						do
							r = t[0], t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? "";
						while (r !== t[0]);
						n = t[0], t[1] === "www." ? s = "http://" + t[0] : s = t[0];
					}
					return {
						type: "link",
						raw: t[0],
						text: n,
						href: s,
						autolink: !0,
						tokens: [{
							type: "text",
							raw: n,
							text: n
						}]
					};
				}
			}
			inlineText(e) {
				let t = this.rules.inline.text.exec(e);
				if (t) {
					let n = this.lexer.state.inRawBlock;
					return {
						type: "text",
						raw: t[0],
						text: n ? t[0] : Ie(t[0]),
						escaped: n
					};
				}
			}
		};
		var O = class a {
			tokens;
			options;
			state;
			inlineQueue;
			tokenizer;
			constructor(e) {
				this.tokens = [], this.tokens.links = Object.create(null), this.options = e || S, this.options.tokenizer = this.options.tokenizer || new _(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
					inLink: !1,
					inRawBlock: !1,
					linkEmitted: !1,
					linkParenPossible: !0,
					top: !0
				};
				let t = {
					other: T,
					block: V.normal,
					inline: G.normal
				};
				this.options.pedantic ? (t.block = V.pedantic, t.inline = G.pedantic) : this.options.gfm && (t.block = V.gfm, this.options.breaks ? t.inline = G.breaks : t.inline = G.gfm), this.tokenizer.rules = t;
			}
			static get rules() {
				return {
					block: V,
					inline: G
				};
			}
			static lex(e, t) {
				return new a(t).lex(e);
			}
			static lexInline(e, t) {
				return new a(t).inlineTokens(e);
			}
			lex(e) {
				e = e.replace(T.carriageReturn, `
`), this.blockTokens(e, this.tokens);
				for (let t = 0; t < this.inlineQueue.length; t++) {
					let n = this.inlineQueue[t];
					this.state.inRawBlock = !1, this.inlineTokens(n.src, n.tokens);
				}
				return this.inlineQueue = [], this.tokens;
			}
			blockTokens(e, t = [], n = !1) {
				this.tokenizer.lexer = this, this.options.pedantic && (e = e.replace(T.tabCharGlobal, "    ").replace(T.spaceLine, ""));
				let s = 1 / 0;
				for (; e;) {
					if (e.length < s) s = e.length;
					else {
						this.infiniteLoopError(e.charCodeAt(0));
						break;
					}
					let r;
					if (this.options.extensions?.block?.some((i) => (r = i.call({ lexer: this }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), !0) : !1)) continue;
					if (r = this.tokenizer.space(e)) {
						e = e.substring(r.raw.length);
						let i = t.at(-1);
						r.raw.length === 1 && i !== void 0 ? i.raw += `
` : t.push(r);
						continue;
					}
					if (r = this.tokenizer.code(e)) {
						e = e.substring(r.raw.length);
						let i = t.at(-1);
						i?.type === "paragraph" || i?.type === "text" ? (i.raw += (i.raw.endsWith(`
`) ? "" : `
`) + r.raw, i.text += `
` + r.text, this.inlineQueue.at(-1).src = i.text) : t.push(r);
						continue;
					}
					if (r = this.tokenizer.fences(e)) {
						e = e.substring(r.raw.length), t.push(r);
						continue;
					}
					if (r = this.tokenizer.heading(e)) {
						e = e.substring(r.raw.length), t.push(r);
						continue;
					}
					if (r = this.tokenizer.hr(e)) {
						e = e.substring(r.raw.length), t.push(r);
						continue;
					}
					if (r = this.tokenizer.blockquote(e)) {
						e = e.substring(r.raw.length), t.push(r);
						continue;
					}
					if (r = this.tokenizer.list(e)) {
						e = e.substring(r.raw.length), t.push(r);
						continue;
					}
					if (r = this.tokenizer.html(e)) {
						e = e.substring(r.raw.length), t.push(r);
						continue;
					}
					if (r = this.tokenizer.def(e)) {
						e = e.substring(r.raw.length);
						let i = t.at(-1);
						i?.type === "paragraph" || i?.type === "text" ? (i.raw += (i.raw.endsWith(`
`) ? "" : `
`) + r.raw, i.text += `
` + r.raw, this.inlineQueue.at(-1).src = i.text) : (this.tokens.links[r.tag] || (this.tokens.links[r.tag] = {
							href: r.href,
							title: r.title
						}), t.push(r));
						continue;
					}
					if (r = this.tokenizer.table(e)) {
						e = e.substring(r.raw.length), t.push(r);
						continue;
					}
					if (r = this.tokenizer.lheading(e)) {
						e = e.substring(r.raw.length), t.push(r);
						continue;
					}
					let o = e;
					if (this.options.extensions?.startBlock) {
						let i = 1 / 0, l = e.slice(1), p;
						this.options.extensions.startBlock.forEach((h) => {
							p = h.call({ lexer: this }, l), typeof p == "number" && p >= 0 && (i = Math.min(i, p));
						}), i < 1 / 0 && i >= 0 && (o = e.substring(0, i + 1));
					}
					if (this.state.top && (r = this.tokenizer.paragraph(o))) {
						let i = t.at(-1);
						n && i?.type === "paragraph" ? (i.raw += (i.raw.endsWith(`
`) ? "" : `
`) + r.raw, i.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = i.text) : t.push(r), n = o.length !== e.length, e = e.substring(r.raw.length);
						continue;
					}
					if (r = this.tokenizer.text(e)) {
						e = e.substring(r.raw.length);
						let i = t.at(-1);
						i?.type === "text" ? (i.raw += (i.raw.endsWith(`
`) ? "" : `
`) + r.raw, i.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = i.text) : t.push(r);
						continue;
					}
					if (e) {
						this.infiniteLoopError(e.charCodeAt(0));
						break;
					}
				}
				return this.state.top = !0, t;
			}
			inline(e, t = []) {
				return this.inlineQueue.push({
					src: e,
					tokens: t
				}), t;
			}
			linkInText(e) {
				if (!e.includes("[")) return !1;
				let t = this.tokenizer.rules.inline.link;
				for (let n of e.matchAll(this.tokenizer.rules.inline.blockSkip)) if (t.test(n[0]) && e.charAt(n.index - 1) !== "!") return !0;
				for (let n of e.matchAll(this.tokenizer.rules.inline.reflinkSearch)) {
					let s = n[0], r = s.lastIndexOf("[");
					if (!(s.charAt(0) === "!" || !Object.hasOwn(this.tokens.links, F(s.slice(r + 1, -1)))) && !(r > 1 && this.linkInText(s.slice(1, r - 1)))) return !0;
				}
				return !1;
			}
			inlineTokens(e, t = []) {
				this.tokenizer.lexer = this;
				let n = this.state.linkParenPossible;
				this.state.linkParenPossible = n && e.includes(")");
				try {
					return this.#e(e, t);
				} finally {
					this.state.linkParenPossible = n;
				}
			}
			#e(e, t) {
				let n = e.includes("*") || e.includes("_") || e.includes("~") || this.options.hooks?.emStrongMask || this.tokenizer.emStrong !== _.prototype.emStrong || this.tokenizer.del !== _.prototype.del ? this.#n(e) : e;
				Ae(this.tokenizer, n);
				try {
					return this.#t(e, n, t);
				} finally {
					Ee(this.tokenizer);
				}
			}
			#t(e, t, n) {
				let s = !1, r = "", o = 1 / 0;
				for (; e;) {
					if (e.length < o) o = e.length;
					else {
						this.infiniteLoopError(e.charCodeAt(0));
						break;
					}
					s || (r = ""), s = !1;
					let i;
					if (this.options.extensions?.inline?.some((p) => (i = p.call({ lexer: this }, e, n)) ? (e = e.substring(i.raw.length), n.push(i), !0) : !1)) continue;
					if (i = this.tokenizer.escape(e)) {
						e = e.substring(i.raw.length), n.push(i);
						continue;
					}
					if (i = this.tokenizer.tag(e)) {
						e = e.substring(i.raw.length), n.push(i);
						continue;
					}
					if (i = this.tokenizer.link(e)) {
						e = e.substring(i.raw.length), n.push(i);
						continue;
					}
					if (i = this.tokenizer.reflink(e, this.tokens.links)) {
						e = e.substring(i.raw.length);
						let p = n.at(-1);
						i.type === "text" && p?.type === "text" ? (p.raw += i.raw, p.text += i.text) : n.push(i);
						continue;
					}
					if (i = this.tokenizer.emStrong(e, t, r)) {
						e = e.substring(i.raw.length), n.push(i);
						continue;
					}
					if (i = this.tokenizer.codespan(e)) {
						e = e.substring(i.raw.length), n.push(i);
						continue;
					}
					if (i = this.tokenizer.br(e)) {
						e = e.substring(i.raw.length), n.push(i);
						continue;
					}
					if (i = this.tokenizer.del(e, t, r)) {
						e = e.substring(i.raw.length), n.push(i);
						continue;
					}
					if (i = this.tokenizer.autolink(e)) {
						e = e.substring(i.raw.length), n.push(i);
						continue;
					}
					if (!this.state.inLink && (i = this.tokenizer.url(e))) {
						e = e.substring(i.raw.length), n.push(i);
						continue;
					}
					let l = e;
					if (this.options.extensions?.startInline) {
						let p = 1 / 0, h = e.slice(1), u;
						this.options.extensions.startInline.forEach((d) => {
							u = d.call({ lexer: this }, h), typeof u == "number" && u >= 0 && (p = Math.min(p, u));
						}), p < 1 / 0 && p >= 0 && (l = e.substring(0, p + 1));
					}
					if (i = this.tokenizer.inlineText(l)) {
						e = e.substring(i.raw.length), i.raw.slice(-1) !== "_" && (r = i.raw.slice(-1)), s = !0;
						let p = n.at(-1);
						p?.type === "text" ? (p.raw += i.raw, p.text += i.text) : n.push(i);
						continue;
					}
					if (e) {
						this.infiniteLoopError(e.charCodeAt(0));
						break;
					}
				}
				return n;
			}
			#n(e) {
				let t = e;
				if (this.tokens.links && e.includes("[")) {
					let n = this.tokenizer.rules.inline.reflinkSearch, s = (r) => {
						let o = r.lastIndexOf("[");
						if (!Object.hasOwn(this.tokens.links, F(r.slice(o + 1, -1)))) return r;
						if (o > 1 && r.charAt(0) !== "!") {
							let i = r.slice(1, o - 1);
							if (this.linkInText(i)) return "[" + i.replace(n, s) + "][" + "a".repeat(r.length - o - 2) + "]";
						}
						return "[" + "a".repeat(r.length - 2) + "]";
					};
					t = t.replace(n, s);
				}
				return t = t.replace(this.tokenizer.rules.inline.anyPunctuationOutsideCode, (n, s, r) => r ? "+".repeat(n.length) : s ? s + n.slice(s.length, -s.length).replace(/`/g, "+") + s : n), t = t.replace(this.tokenizer.rules.inline.blockSkip, (n, s, r) => {
					let o = r ? r.length : 0;
					return n.slice(0, o) + "[" + "a".repeat(n.length - o - 2) + "]";
				}), t = this.options.hooks?.emStrongMask?.call({ lexer: this }, t) ?? t, t;
			}
			infiniteLoopError(e) {
				let t = "Infinite loop on byte: " + e;
				if (this.options.silent) console.error(t);
				else throw new Error(t);
			}
		};
		var C = class {
			options;
			parser;
			constructor(e) {
				this.options = e || S;
			}
			space(e) {
				return "";
			}
			code({ text: e, lang: t, escaped: n }) {
				let s = (t || "").match(T.notSpaceStart)?.[0], r = e ? e.replace(T.endingNewline, "") + `
` : "";
				return s ? "<pre><code class=\"language-" + P(s) + "\">" + (n ? r : P(r, !0)) + `</code></pre>
` : "<pre><code>" + (n ? r : P(r, !0)) + `</code></pre>
`;
			}
			blockquote({ tokens: e }) {
				return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
			}
			html({ text: e }) {
				return e;
			}
			def(e) {
				return "";
			}
			heading({ tokens: e, depth: t }) {
				return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`;
			}
			hr(e) {
				return `<hr>
`;
			}
			list(e) {
				let t = e.ordered, n = e.start, s = "";
				for (let i = 0; i < e.items.length; i++) {
					let l = e.items[i];
					s += this.listitem(l);
				}
				let r = t ? "ol" : "ul", o = t && n !== 1 ? " start=\"" + n + "\"" : "";
				return "<" + r + o + `>
` + s + "</" + r + `>
`;
			}
			listitem(e) {
				return `<li>${this.parser.parse(e.tokens)}</li>
`;
			}
			checkbox({ checked: e }) {
				return "<input " + (e ? "checked=\"\" " : "") + "disabled=\"\" type=\"checkbox\"> ";
			}
			paragraph({ tokens: e }) {
				return `<p>${this.parser.parseInline(e)}</p>
`;
			}
			table(e) {
				let t = "", n = "";
				for (let r = 0; r < e.header.length; r++) n += this.tablecell(e.header[r]);
				t += this.tablerow({ text: n });
				let s = "";
				for (let r = 0; r < e.rows.length; r++) {
					let o = e.rows[r];
					n = "";
					for (let i = 0; i < o.length; i++) n += this.tablecell(o[i]);
					s += this.tablerow({ text: n });
				}
				return s && (s = `<tbody>${s}</tbody>`), `<table>
<thead>
` + t + `</thead>
` + s + `</table>
`;
			}
			tablerow({ text: e }) {
				return `<tr>
${e}</tr>
`;
			}
			tablecell(e) {
				let t = this.parser.parseInline(e.tokens), n = e.header ? "th" : "td";
				return (e.align ? `<${n} align="${e.align}">` : `<${n}>`) + t + `</${n}>
`;
			}
			strong({ tokens: e }) {
				return `<strong>${this.parser.parseInline(e)}</strong>`;
			}
			em({ tokens: e }) {
				return `<em>${this.parser.parseInline(e)}</em>`;
			}
			codespan({ text: e }) {
				return `<code>${P(e, !0)}</code>`;
			}
			br(e) {
				return "<br>";
			}
			del({ tokens: e }) {
				return `<del>${this.parser.parseInline(e)}</del>`;
			}
			link({ href: e, title: t, text: n, tokens: s, autolink: r }) {
				let o = r ? P(n, !0) : this.parser.parseInline(s), i = he(e);
				if (i === null) return o;
				e = P(i, r);
				let l = "<a href=\"" + e + "\"";
				return t && (l += " title=\"" + P(t) + "\""), l += ">" + o + "</a>", l;
			}
			image({ href: e, title: t, text: n, tokens: s }) {
				s && (n = this.parser.parseInline(s, this.parser.textRenderer));
				let r = he(e);
				if (r === null) return P(n);
				e = r;
				let o = `<img src="${P(e)}" alt="${P(n)}"`;
				return t && (o += ` title="${P(t)}"`), o += ">", o;
			}
			text(e) {
				return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : P(e.text);
			}
		};
		var E = class {
			parser;
			strong({ text: e, tokens: t }) {
				return t ? this.parser.parseInline(t, this) : e;
			}
			em({ text: e, tokens: t }) {
				return t ? this.parser.parseInline(t, this) : e;
			}
			codespan({ text: e }) {
				return e;
			}
			del({ text: e, tokens: t }) {
				return t ? this.parser.parseInline(t, this) : e;
			}
			html({ text: e }) {
				return e;
			}
			text({ text: e }) {
				return e;
			}
			link({ text: e, tokens: t }) {
				return t ? this.parser.parseInline(t, this) : e;
			}
			image({ text: e, tokens: t }) {
				return t ? this.parser.parseInline(t, this) : e;
			}
			br() {
				return "";
			}
			checkbox({ raw: e }) {
				return e;
			}
		};
		var w = class a {
			options;
			renderer;
			textRenderer;
			constructor(e) {
				this.options = e || S, this.options.renderer = this.options.renderer || new C(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new E(), this.textRenderer.parser = this;
			}
			static parse(e, t) {
				return new a(t).parse(e);
			}
			static parseInline(e, t) {
				return new a(t).parseInline(e);
			}
			parse(e) {
				this.renderer.parser = this;
				let t = "";
				for (let n = 0; n < e.length; n++) {
					let s = e[n];
					if (this.options.extensions?.renderers?.[s.type]) {
						let o = s, i = this.options.extensions.renderers[o.type].call({ parser: this }, o);
						if (i !== !1 || ![
							"space",
							"hr",
							"heading",
							"code",
							"table",
							"blockquote",
							"list",
							"checkbox",
							"html",
							"def",
							"paragraph",
							"text"
						].includes(o.type)) {
							t += i || "";
							continue;
						}
					}
					let r = s;
					switch (r.type) {
						case "space":
							t += this.renderer.space(r);
							break;
						case "hr":
							t += this.renderer.hr(r);
							break;
						case "heading":
							t += this.renderer.heading(r);
							break;
						case "code":
							t += this.renderer.code(r);
							break;
						case "table":
							t += this.renderer.table(r);
							break;
						case "blockquote":
							t += this.renderer.blockquote(r);
							break;
						case "list":
							t += this.renderer.list(r);
							break;
						case "checkbox":
							t += this.renderer.checkbox(r);
							break;
						case "html":
							t += this.renderer.html(r);
							break;
						case "def":
							t += this.renderer.def(r);
							break;
						case "paragraph":
							t += this.renderer.paragraph(r);
							break;
						case "text":
							t += this.renderer.text(r);
							break;
						default: {
							let o = "Token with \"" + r.type + "\" type was not found.";
							if (this.options.silent) return console.error(o), "";
							throw new Error(o);
						}
					}
				}
				return t;
			}
			parseInline(e, t = this.renderer) {
				this.renderer.parser = this;
				let n = "";
				for (let s = 0; s < e.length; s++) {
					let r = e[s];
					if (this.options.extensions?.renderers?.[r.type]) {
						let i = this.options.extensions.renderers[r.type].call({ parser: this }, r);
						if (i !== !1 || ![
							"escape",
							"html",
							"link",
							"image",
							"checkbox",
							"strong",
							"em",
							"codespan",
							"br",
							"del",
							"text"
						].includes(r.type)) {
							n += i || "";
							continue;
						}
					}
					let o = r;
					switch (o.type) {
						case "escape":
							n += t.text(o);
							break;
						case "html":
							n += t.html(o);
							break;
						case "link":
							n += t.link(o);
							break;
						case "image":
							n += t.image(o);
							break;
						case "checkbox":
							n += t.checkbox(o);
							break;
						case "strong":
							n += t.strong(o);
							break;
						case "em":
							n += t.em(o);
							break;
						case "codespan":
							n += t.codespan(o);
							break;
						case "br":
							n += t.br(o);
							break;
						case "del":
							n += t.del(o);
							break;
						case "text":
							n += t.text(o);
							break;
						default: {
							let i = "Token with \"" + o.type + "\" type was not found.";
							if (this.options.silent) return console.error(i), "";
							throw new Error(i);
						}
					}
				}
				return n;
			}
		};
		var I = class {
			options;
			block;
			constructor(e) {
				this.options = e || S;
			}
			static passThroughHooks = /* @__PURE__ */ new Set([
				"preprocess",
				"postprocess",
				"processAllTokens",
				"emStrongMask"
			]);
			static passThroughHooksRespectAsync = /* @__PURE__ */ new Set([
				"preprocess",
				"postprocess",
				"processAllTokens"
			]);
			preprocess(e) {
				return e;
			}
			postprocess(e) {
				return e;
			}
			processAllTokens(e) {
				return e;
			}
			emStrongMask(e) {
				return e;
			}
			provideLexer(e = this.block) {
				return e ? O.lex : O.lexInline;
			}
			provideParser(e = this.block) {
				return e ? w.parse : w.parseInline;
			}
		};
		function z(a, e) {
			if (Array.isArray(e)) for (let t = 0; t < e.length; t++) a.push(e[t]);
			else a.push(e);
		}
		var Y = class {
			defaults = H();
			options = this.setOptions;
			parse = this.parseMarkdown(!0);
			parseInline = this.parseMarkdown(!1);
			Parser = w;
			Renderer = C;
			TextRenderer = E;
			Lexer = O;
			Tokenizer = _;
			Hooks = I;
			constructor(...e) {
				this.use(...e);
			}
			walkTokens(e, t) {
				let n = [];
				for (let s of e) switch (z(n, t.call(this, s)), s.type) {
					case "table": {
						let r = s;
						for (let o of r.header) z(n, this.walkTokens(o.tokens, t));
						for (let o of r.rows) for (let i of o) z(n, this.walkTokens(i.tokens, t));
						break;
					}
					case "list": {
						let r = s;
						z(n, this.walkTokens(r.items, t));
						break;
					}
					default: {
						let r = s;
						this.defaults.extensions?.childTokens?.[r.type] ? this.defaults.extensions.childTokens[r.type].forEach((o) => {
							let i = r[o].flat(1 / 0);
							z(n, this.walkTokens(i, t));
						}) : r.tokens && z(n, this.walkTokens(r.tokens, t));
					}
				}
				return n;
			}
			use(...e) {
				let t = this.defaults.extensions || {
					renderers: Object.create(null),
					childTokens: Object.create(null)
				};
				return e.forEach((n) => {
					let s = { ...n };
					if (s.async = this.defaults.async || s.async || !1, n.extensions && (n.extensions.forEach((r) => {
						if (!r.name) throw new Error("extension name required");
						if ("renderer" in r) {
							let o = t.renderers[r.name];
							o ? t.renderers[r.name] = function(...i) {
								let l = r.renderer.apply(this, i);
								return l === !1 && (l = o.apply(this, i)), l;
							} : t.renderers[r.name] = r.renderer;
						}
						if ("tokenizer" in r) {
							if (!r.level || r.level !== "block" && r.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
							let o = t[r.level];
							o ? o.unshift(r.tokenizer) : t[r.level] = [r.tokenizer], r.start && (r.level === "block" ? t.startBlock ? t.startBlock.push(r.start) : t.startBlock = [r.start] : r.level === "inline" && (t.startInline ? t.startInline.push(r.start) : t.startInline = [r.start]));
						}
						"childTokens" in r && r.childTokens && (t.childTokens[r.name] = r.childTokens);
					}), s.extensions = t), n.renderer) {
						let r = this.defaults.renderer || new C(this.defaults);
						for (let o in n.renderer) {
							if (!(o in r)) throw new Error(`renderer '${o}' does not exist`);
							if (["options", "parser"].includes(o)) continue;
							let i = o, l = n.renderer[i], p = r[i];
							r[i] = (...h) => {
								let u = l.apply(r, h);
								return u === !1 && (u = p.apply(r, h)), u === !1 ? "" : u ?? "";
							};
						}
						s.renderer = r;
					}
					if (n.tokenizer) {
						let r = this.defaults.tokenizer || new _(this.defaults);
						for (let o in n.tokenizer) {
							if (!(o in r)) throw new Error(`tokenizer '${o}' does not exist`);
							if ([
								"options",
								"rules",
								"lexer"
							].includes(o)) continue;
							let i = o, l = n.tokenizer[i], p = r[i];
							r[i] = (...h) => {
								let u = l.apply(r, h);
								return u === !1 && (u = p.apply(r, h)), u;
							};
						}
						s.tokenizer = r;
					}
					if (n.hooks) {
						let r = this.defaults.hooks || new I();
						for (let o in n.hooks) {
							if (!(o in r)) throw new Error(`hook '${o}' does not exist`);
							if (["options", "block"].includes(o)) continue;
							let i = o, l = n.hooks[i], p = r[i];
							I.passThroughHooks.has(o) ? r[i] = (h) => {
								if (r.options.async && I.passThroughHooksRespectAsync.has(o)) return (async () => {
									let d = await l.call(r, h);
									return p.call(r, d);
								})();
								let u = l.call(r, h);
								return p.call(r, u);
							} : r[i] = (...h) => {
								if (r.options.async) return (async () => {
									let d = await l.apply(r, h);
									return d === !1 && (d = await p.apply(r, h)), d;
								})();
								let u = l.apply(r, h);
								return u === !1 && (u = p.apply(r, h)), u;
							};
						}
						s.hooks = r;
					}
					if (n.walkTokens) {
						let r = this.defaults.walkTokens, o = n.walkTokens;
						s.walkTokens = function(i) {
							let l = [];
							return z(l, o.call(this, i)), r && z(l, r.call(this, i)), l;
						};
					}
					this.defaults = {
						...this.defaults,
						...s
					};
				}), this;
			}
			setOptions(e) {
				return this.defaults = {
					...this.defaults,
					...e
				}, this;
			}
			lexer(e, t) {
				return O.lex(e, t ?? this.defaults);
			}
			parser(e, t) {
				return w.parse(e, t ?? this.defaults);
			}
			parseMarkdown(e) {
				return (n, s) => {
					let r = { ...s }, o = {
						...this.defaults,
						...r
					}, i = this.onError(!!o.silent, !!o.async);
					if (this.defaults.async === !0 && r.async === !1) return i(/* @__PURE__ */ new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
					if (typeof n > "u" || n === null) return i(/* @__PURE__ */ new Error("marked(): input parameter is undefined or null"));
					if (typeof n != "string") return i(/* @__PURE__ */ new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n) + ", string expected"));
					if (o.hooks && (o.hooks.options = o, o.hooks.block = e), o.async) return (async () => {
						let l = o.hooks ? await o.hooks.preprocess(n) : n, h = await (o.hooks ? await o.hooks.provideLexer(e) : e ? O.lex : O.lexInline)(l, o), u = o.hooks ? await o.hooks.processAllTokens(h) : h;
						o.walkTokens && await Promise.all(this.walkTokens(u, o.walkTokens));
						let k = await (o.hooks ? await o.hooks.provideParser(e) : e ? w.parse : w.parseInline)(u, o);
						return o.hooks ? await o.hooks.postprocess(k) : k;
					})().catch(i);
					try {
						o.hooks && (n = o.hooks.preprocess(n));
						let p = (o.hooks ? o.hooks.provideLexer(e) : e ? O.lex : O.lexInline)(n, o);
						o.hooks && (p = o.hooks.processAllTokens(p)), o.walkTokens && this.walkTokens(p, o.walkTokens);
						let u = (o.hooks ? o.hooks.provideParser(e) : e ? w.parse : w.parseInline)(p, o);
						return o.hooks && (u = o.hooks.postprocess(u)), u;
					} catch (l) {
						return i(l);
					}
				};
			}
			onError(e, t) {
				return (n) => {
					if (n.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
						let s = "<p>An error occurred:</p><pre>" + P(n.message + "", !0) + "</pre>";
						return t ? Promise.resolve(s) : s;
					}
					if (t) return Promise.reject(n);
					throw n;
				};
			}
		};
		var q = new Y();
		function x(a, e) {
			return q.parse(a, e);
		}
		x.options = x.setOptions = function(a) {
			return q.setOptions(a), x.defaults = q.defaults, se(x.defaults), x;
		};
		x.getDefaults = H;
		x.defaults = S;
		function Bt(...a) {
			return q.use(...a), x.defaults = q.defaults, se(x.defaults), x;
		}
		x.use = Bt;
		x.walkTokens = function(a, e) {
			return q.walkTokens(a, e);
		};
		x.parseInline = q.parseInline;
		x.Parser = w;
		x.parser = w.parse;
		x.Renderer = C;
		x.TextRenderer = E;
		x.Lexer = O;
		x.lexer = O.lex;
		x.Tokenizer = _;
		x.Hooks = I;
		x.parse = x;
		x.options;
		x.setOptions;
		x.walkTokens;
		x.parseInline;
		w.parse;
		O.lex;
		//#endregion
		//#region src/client/md.ts
		/**
		* Safe markdown rendering for loci content (search chunks, ask answers,
		* memory bodies). The source comes from the user's own knowledge base, but
		* ingested pages can carry arbitrary HTML — so raw HTML is escaped BEFORE
		* parsing (markdown syntax itself needs no literal < >), which makes the
		* output structurally free of injected tags. Images are stripped to their
		* alt text (local file paths would render as broken imgs).
		*/
		x.setOptions({
			gfm: true,
			breaks: true
		});
		//#endregion
		//#region \0dsh-css:E:\work\gitee\loci-dsh\src\client\styles.module.css.mjs
		const css = ".gCSg5a_root{height:100%;min-height:0;color:var(--dsh-fg-1,#e6e6e6);flex-direction:column;font-size:12px;display:flex}.gCSg5a_header{border-bottom:1px solid var(--dsh-border-2,#2a2a2a);align-items:center;gap:8px;padding:8px 10px;display:flex}.gCSg5a_headerSummary{text-overflow:ellipsis;white-space:nowrap;min-width:0;color:var(--dsh-fg-2,#9a9a9a);flex:1;overflow:hidden}.gCSg5a_headerButton{color:var(--dsh-fg-2,#9a9a9a);cursor:pointer;background:0 0;border:none;border-radius:4px;padding:2px 6px;font-size:14px;line-height:1}.gCSg5a_headerButton:hover{background:var(--dsh-bg-3,#2f2f2f);color:var(--dsh-fg-1,#e6e6e6)}.gCSg5a_tabs{gap:2px;padding:6px 8px 0;display:flex}.gCSg5a_tabButton{color:var(--dsh-fg-3,#7a7a7a);cursor:pointer;background:0 0;border:none;border-bottom:2px solid #0000;flex:1;padding:5px 8px;font-size:12px}.gCSg5a_tabActive{color:var(--dsh-fg-1,#e6e6e6);border-bottom-color:var(--dsh-accent,#7aa2f7)}.gCSg5a_body{flex:1;min-height:0;padding:10px;overflow-y:auto}.gCSg5a_view{flex-direction:column;gap:8px;display:flex}.gCSg5a_formRow{align-items:center;gap:6px;display:flex}.gCSg5a_input{min-width:0;color:var(--dsh-fg-1,#e6e6e6);background:var(--dsh-bg-2,#232323);border:1px solid var(--dsh-border-2,#333);border-radius:5px;flex:1;padding:5px 8px;font-size:12px}.gCSg5a_inputGrow{flex:.6}.gCSg5a_textarea{color:var(--dsh-fg-1,#e6e6e6);background:var(--dsh-bg-2,#232323);border:1px solid var(--dsh-border-2,#333);resize:vertical;border-radius:5px;padding:6px 8px;font-family:inherit;font-size:12px}.gCSg5a_select{color:var(--dsh-fg-1,#e6e6e6);background:var(--dsh-bg-2,#232323);border:1px solid var(--dsh-border-2,#333);border-radius:5px;padding:4px 6px;font-size:12px}.gCSg5a_button{background:var(--dsh-accent,#7aa2f7);color:#10131a;cursor:pointer;border:none;border-radius:5px;padding:5px 12px;font-size:12px;font-weight:600}.gCSg5a_button:disabled{opacity:.45;cursor:default}.gCSg5a_inlineLabel{color:var(--dsh-fg-2,#9a9a9a);white-space:nowrap;align-items:center;gap:4px;display:inline-flex}.gCSg5a_meta{color:var(--dsh-fg-3,#7a7a7a)}.gCSg5a_hint{color:var(--dsh-fg-3,#7a7a7a);background:var(--dsh-bg-2,#232323);border-radius:5px;padding:6px 8px;font-size:11px;line-height:1.5}.gCSg5a_errorBox{color:#e88;background:#e052521f;border:1px solid #e0525266;border-radius:5px;padding:8px}.gCSg5a_errorDetail{color:var(--dsh-fg-3,#8a7070);word-break:break-all;margin-top:4px;font-size:11px}.gCSg5a_hitList{flex-direction:column;gap:8px;display:flex}.gCSg5a_hit{background:var(--dsh-bg-2,#232323);border:1px solid var(--dsh-border-2,#2e2e2e);border-radius:6px;padding:8px}.gCSg5a_hitHead{align-items:center;gap:6px;display:flex}.gCSg5a_hitIndex{color:var(--dsh-fg-3,#7a7a7a);border:1px solid var(--dsh-border-2,#3a3a3a);border-radius:4px;padding:0 4px;font-size:10px}.gCSg5a_hitSource{color:var(--dsh-accent,#7aa2f7);text-overflow:ellipsis;white-space:nowrap;font-family:ui-monospace,Consolas,monospace;font-size:11px;overflow:hidden}.gCSg5a_badge{color:var(--dsh-fg-2,#9a9a9a);white-space:nowrap;margin-left:auto;font-size:10px}.gCSg5a_hitSection{color:var(--dsh-fg-3,#8a8a8a);text-overflow:ellipsis;white-space:nowrap;margin-top:3px;font-size:11px;overflow:hidden}.gCSg5a_hitText{white-space:pre-wrap;word-break:break-word;margin:6px 0 0;font-family:inherit;font-size:12px;line-height:1.55}.gCSg5a_linkButton{color:var(--dsh-accent,#7aa2f7);cursor:pointer;background:0 0;border:none;margin-top:4px;padding:0;font-size:11px}.gCSg5a_answer{background:var(--dsh-bg-2,#232323);border:1px solid var(--dsh-border-2,#2e2e2e);border-radius:6px;padding:8px}.gCSg5a_answerBody{white-space:pre-wrap;word-break:break-word;margin:0;font-family:inherit;font-size:12px;line-height:1.6}.gCSg5a_sources{flex-direction:column;gap:3px;margin-top:8px;display:flex}.gCSg5a_sourcesTitle{color:var(--dsh-fg-3,#7a7a7a);font-size:10px}.gCSg5a_sourceChip{color:var(--dsh-fg-2,#9a9a9a);background:var(--dsh-bg-3,#2a2a2a);text-overflow:ellipsis;white-space:nowrap;border-radius:4px;padding:2px 6px;font-family:ui-monospace,Consolas,monospace;font-size:10px;overflow:hidden}.gCSg5a_sectionTitle{color:var(--dsh-fg-2,#b5b5b5);margin-top:6px;font-size:11px;font-weight:600}.gCSg5a_dayGroup{flex-direction:column;gap:4px;display:flex}.gCSg5a_dayLabel{color:var(--dsh-fg-3,#8a8a8a);border-bottom:1px dashed var(--dsh-border-2,#333);padding-bottom:2px;font-size:11px;font-weight:600}.gCSg5a_memoryCard{background:var(--dsh-bg-2,#232323);border:1px solid var(--dsh-border-2,#2e2e2e);border-radius:6px;padding:7px 8px}.gCSg5a_memoryHead{justify-content:space-between;align-items:baseline;gap:8px;display:flex}.gCSg5a_memoryTitle{color:var(--dsh-fg-1,#e6e6e6);text-overflow:ellipsis;white-space:nowrap;font-size:12px;font-weight:600;overflow:hidden}.gCSg5a_memoryTags{flex-wrap:wrap;gap:4px;margin-top:4px;display:flex}.gCSg5a_memoryTag{color:var(--dsh-fg-2,#9a9a9a);background:var(--dsh-bg-3,#2a2a2a);border-radius:4px;padding:1px 5px;font-size:9px}.gCSg5a_memoryTime{color:var(--dsh-fg-3,#7a7a7a);font-family:ui-monospace,Consolas,monospace;font-size:10px}.gCSg5a_saved{color:#7ec98f;font-size:11px}.gCSg5a_statusList{flex-direction:column;gap:5px;margin:0;display:flex}.gCSg5a_statusRow{align-items:baseline;gap:8px;display:flex}.gCSg5a_statusRow dt{width:64px;color:var(--dsh-fg-3,#7a7a7a);flex-shrink:0;font-size:11px}.gCSg5a_statusRow dd{min-width:0;margin:0}.gCSg5a_mono{word-break:break-all;font-family:ui-monospace,Consolas,monospace;font-size:11px}.gCSg5a_sourceRow{border-radius:4px;align-items:center;gap:6px;padding:3px 6px;display:flex}.gCSg5a_sourceRow:hover{background:var(--dsh-bg-3,#2a2a2a)}.gCSg5a_sourceChunks{color:var(--dsh-fg-3,#7a7a7a);margin-left:auto;font-size:10px}.gCSg5a_dot{border-radius:50%;flex-shrink:0;width:8px;height:8px}.gCSg5a_dotUp{background:#7ec98f}.gCSg5a_dotDown{background:#e05252}.gCSg5a_dotChecking{background:#d9b45b;animation:1.2s ease-in-out infinite gCSg5a_lociPulse}.gCSg5a_graphChips{flex-wrap:wrap;gap:4px;display:flex}.gCSg5a_graphChip{border:1px solid var(--dsh-border-2,#333);background:var(--dsh-bg-2,#232323);color:var(--dsh-fg-1,#e6e6e6);cursor:pointer;border-radius:10px;align-items:center;gap:5px;padding:3px 8px;font-size:11px;display:inline-flex}.gCSg5a_graphChip:hover{border-color:var(--dsh-accent,#7aa2f7)}.gCSg5a_graphChipActive{border-color:var(--dsh-accent,#7aa2f7);background:#7aa2f726}.gCSg5a_graphChipDegree{color:var(--dsh-fg-3,#7a7a7a);font-size:9px}.gCSg5a_graphEdge{background:var(--dsh-bg-2,#232323);border:1px solid var(--dsh-border-2,#2e2e2e);border-radius:6px;flex-wrap:wrap;align-items:center;gap:6px;padding:6px 8px;display:flex}.gCSg5a_graphTerm{color:var(--dsh-accent,#7aa2f7);cursor:pointer;text-overflow:ellipsis;white-space:nowrap;background:0 0;border:none;max-width:45%;padding:0;font-size:12px;font-weight:600;overflow:hidden}.gCSg5a_graphPredicate{color:var(--dsh-fg-3,#8a8a8a);font-family:Consolas,ui-monospace,monospace;font-size:11px}.gCSg5a_graphSelected{color:var(--dsh-fg-2,#b5b5b5);font-size:11px}.gCSg5a_footer{border-top:1px solid var(--dsh-border-2,#2a2a2a);justify-content:space-between;align-items:center;gap:8px;margin-top:10px;padding-top:8px;display:flex}.gCSg5a_footerVersion{color:var(--dsh-fg-3,#66708a);font-size:10px}.gCSg5a_footerStar{color:var(--dsh-accent,#7aa2f7);white-space:nowrap;font-size:11px;text-decoration:none}.gCSg5a_footerStar:hover{text-decoration:underline}@keyframes gCSg5a_lociPulse{0%,to{opacity:.4}50%{opacity:1}}";
		const tagId = "loci-dsh/styles.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "loci-dsh";
			tag.dataset.pluginCss = tagId;
			tag.textContent = css;
			document.head.appendChild(tag);
		}
		var styles_module_css_default = {
			"button": "gCSg5a_button",
			"inputGrow": "gCSg5a_inputGrow",
			"memoryCard": "gCSg5a_memoryCard",
			"sourceRow": "gCSg5a_sourceRow",
			"hitText": "gCSg5a_hitText",
			"hitSource": "gCSg5a_hitSource",
			"sources": "gCSg5a_sources",
			"select": "gCSg5a_select",
			"graphEdge": "gCSg5a_graphEdge",
			"formRow": "gCSg5a_formRow",
			"graphChip": "gCSg5a_graphChip",
			"sourceChunks": "gCSg5a_sourceChunks",
			"textarea": "gCSg5a_textarea",
			"hitIndex": "gCSg5a_hitIndex",
			"dotDown": "gCSg5a_dotDown",
			"headerSummary": "gCSg5a_headerSummary",
			"dayGroup": "gCSg5a_dayGroup",
			"lociPulse": "gCSg5a_lociPulse",
			"answer": "gCSg5a_answer",
			"dot": "gCSg5a_dot",
			"hint": "gCSg5a_hint",
			"memoryTag": "gCSg5a_memoryTag",
			"graphChipDegree": "gCSg5a_graphChipDegree",
			"saved": "gCSg5a_saved",
			"headerButton": "gCSg5a_headerButton",
			"body": "gCSg5a_body",
			"view": "gCSg5a_view",
			"dayLabel": "gCSg5a_dayLabel",
			"header": "gCSg5a_header",
			"mono": "gCSg5a_mono",
			"hitList": "gCSg5a_hitList",
			"sourceChip": "gCSg5a_sourceChip",
			"statusList": "gCSg5a_statusList",
			"footerStar": "gCSg5a_footerStar",
			"graphChips": "gCSg5a_graphChips",
			"tabButton": "gCSg5a_tabButton",
			"memoryTitle": "gCSg5a_memoryTitle",
			"hitHead": "gCSg5a_hitHead",
			"memoryTags": "gCSg5a_memoryTags",
			"root": "gCSg5a_root",
			"footer": "gCSg5a_footer",
			"dotUp": "gCSg5a_dotUp",
			"dotChecking": "gCSg5a_dotChecking",
			"answerBody": "gCSg5a_answerBody",
			"sourcesTitle": "gCSg5a_sourcesTitle",
			"graphChipActive": "gCSg5a_graphChipActive",
			"memoryHead": "gCSg5a_memoryHead",
			"input": "gCSg5a_input",
			"tabs": "gCSg5a_tabs",
			"statusRow": "gCSg5a_statusRow",
			"errorDetail": "gCSg5a_errorDetail",
			"badge": "gCSg5a_badge",
			"graphSelected": "gCSg5a_graphSelected",
			"errorBox": "gCSg5a_errorBox",
			"tabActive": "gCSg5a_tabActive",
			"inlineLabel": "gCSg5a_inlineLabel",
			"sectionTitle": "gCSg5a_sectionTitle",
			"graphTerm": "gCSg5a_graphTerm",
			"hitSection": "gCSg5a_hitSection",
			"graphPredicate": "gCSg5a_graphPredicate",
			"linkButton": "gCSg5a_linkButton",
			"meta": "gCSg5a_meta",
			"hit": "gCSg5a_hit",
			"memoryTime": "gCSg5a_memoryTime",
			"footerVersion": "gCSg5a_footerVersion"
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
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								style: { display: view === "search" ? void 0 : "none" },
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SearchView, {})
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								style: { display: view === "ask" ? void 0 : "none" },
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(AskView, {})
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								style: { display: view === "memory" ? void 0 : "none" },
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(MemoryView, { onSaved: () => void refreshStatus() })
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								style: { display: view === "graph" ? void 0 : "none" },
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(GraphView, {})
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								style: { display: view === "status" ? void 0 : "none" },
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(StatusView, {})
							})
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