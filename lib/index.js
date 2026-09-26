import { readFile, stat } from "node:fs/promises";
//#region src/graph.ts
/**
* Reader for loci's knowledge-graph artifact (loci ≥ 0.6.0 `loci graph build`
* output): `{version, processed: {file → hash}, entities: {name → {degree,
* sources[]}}, edges: [{s, p, o, source, ts}]}`. Read directly from disk with
* an mtime cache — the file only changes when the user rebuilds the graph.
*/
const cache = /* @__PURE__ */ new Map();
function normalize(data) {
	const record = data ?? {};
	const rawEntities = record.entities ?? {};
	const entities = Object.entries(rawEntities).map(([name, meta]) => ({
		name,
		degree: typeof meta?.degree === "number" ? meta.degree : 0,
		sources: Array.isArray(meta?.sources) ? meta.sources.filter((s) => typeof s === "string") : []
	})).sort((a, b) => b.degree - a.degree || a.name.localeCompare(b.name));
	const edges = (Array.isArray(record.edges) ? record.edges : []).filter((edge) => typeof edge === "object" && edge !== null).map((edge) => ({
		s: String(edge.s ?? ""),
		p: String(edge.p ?? ""),
		o: String(edge.o ?? ""),
		source: String(edge.source ?? ""),
		...typeof edge.ts === "number" ? { ts: edge.ts } : {}
	})).filter((edge) => edge.s !== "" && edge.o !== "");
	return {
		version: typeof record.version === "number" ? record.version : 1,
		entities,
		edges,
		files: Object.keys(record.processed ?? {}).length
	};
}
/**
* Load the graph file, or null when graphPath is unset / the file is absent
* (loci < 0.6.0, or `loci graph build` never ran — the view renders a hint).
*/
async function loadGraph(graphPath) {
	if (graphPath.trim() === "") return null;
	let mtimeMs;
	try {
		mtimeMs = (await stat(graphPath)).mtimeMs;
	} catch {
		cache.delete(graphPath);
		return null;
	}
	const hit = cache.get(graphPath);
	if (hit !== void 0 && hit.mtimeMs === mtimeMs) return hit.data;
	try {
		const data = normalize(JSON.parse(await readFile(graphPath, "utf-8")));
		cache.set(graphPath, {
			mtimeMs,
			data
		});
		return data;
	} catch {
		return null;
	}
}
//#endregion
//#region src/loci-client.ts
/** Error with a stable machine code: 'loci-unreachable' | 'loci-unauthorized' | 'loci-timeout' | 'loci-error'. */
var LociError = class extends Error {
	code;
	constructor(code, message) {
		super(message);
		this.code = code;
	}
};
var LociClient = class {
	config;
	constructor(config) {
		this.config = config;
	}
	get baseUrl() {
		return this.config.baseUrl;
	}
	get tokenSet() {
		return this.config.token !== "";
	}
	/** False when neither config row nor env provided a token — loci would 401 every call. */
	get configured() {
		return this.tokenSet;
	}
	async request(path, init) {
		const timeoutMs = init?.timeoutMs ?? this.config.timeoutMs;
		let response;
		try {
			response = await fetch(`${this.config.baseUrl}${path}`, {
				method: init?.body === void 0 ? "GET" : "POST",
				headers: {
					authorization: `Bearer ${this.config.token}`,
					...init?.body === void 0 ? {} : { "content-type": "application/json" }
				},
				body: init?.body === void 0 ? void 0 : JSON.stringify(init.body),
				signal: AbortSignal.timeout(timeoutMs)
			});
		} catch (error) {
			const cause = error instanceof Error ? error : void 0;
			if (cause?.name === "TimeoutError" || cause?.name === "AbortError") throw new LociError("loci-timeout", `loci did not answer within ${Math.round(timeoutMs / 1e3)}s (${path})`);
			throw new LociError("loci-unreachable", `cannot reach loci at ${this.config.baseUrl}${path} — is "loci serve-http" running? (${cause?.message ?? String(error)})`);
		}
		if (response.status === 401) throw new LociError("loci-unauthorized", "loci rejected the bearer token — set [http] token in loci config.toml and the same value in this plugin's config (or LOCI_TOKEN)");
		if (!response.ok) {
			const snippet = (await response.text()).slice(0, 200);
			throw new LociError("loci-error", `loci ${path} returned HTTP ${response.status}: ${snippet}`);
		}
		try {
			return await response.json();
		} catch {
			throw new LociError("loci-error", `loci ${path} returned a non-JSON body`);
		}
	}
	unwrapString(data, field, path) {
		const value = data?.[field];
		if (typeof value !== "string") throw new LociError("loci-error", `loci ${path} returned no "${field}" string`);
		return value;
	}
	async health() {
		const status = (await this.request("/health", { timeoutMs: 3e3 }))?.status;
		return typeof status === "string" ? status : "unknown";
	}
	async stats() {
		const data = await this.request("/stats");
		return this.unwrapString(data, "stats", "/stats");
	}
	async search(args) {
		const data = await this.request("/search", { body: {
			query: args.query,
			...args.k === void 0 ? {} : { k: args.k },
			...args.tag === void 0 ? {} : { tag: args.tag },
			...args.in === void 0 ? {} : { in: args.in }
		} });
		return this.unwrapString(data, "result", "/search");
	}
	async ask(args) {
		const data = await this.request("/ask", {
			body: {
				question: args.question,
				...args.verify === void 0 ? {} : { verify: args.verify }
			},
			timeoutMs: this.config.askTimeoutMs
		});
		return this.unwrapString(data, "result", "/ask");
	}
	async remember(args) {
		const data = await this.request("/remember", { body: {
			text: args.text,
			...args.title === void 0 ? {} : { title: args.title },
			...args.tags === void 0 || args.tags.length === 0 ? {} : { tags: args.tags }
		} });
		return this.unwrapString(data, "result", "/remember");
	}
};
//#endregion
//#region src/parse.ts
/** `[3] path > section > nested` header at line start begins a new hit block. */
const HIT_HEADER = /^\[(\d+)\] (.+)$/gm;
/**
* Memory filenames embed their creation time: `YYYYMMDD-HHMMSS-slug.md`.
* Returns e.g. "2026-09-19 14:49" or undefined for non-memory sources.
*/
function memoryTimeOf(source) {
	const match = /(\d{4})(\d{2})(\d{2})-(\d{2})(\d{2})(\d{2})-/.exec(source);
	if (match === null) return void 0;
	return `${match[1]}-${match[2]}-${match[3]} ${match[4]}:${match[5]}`;
}
function parseSearchText(result) {
	if (result === "(no results)" || result.trim() === "") return [];
	const hits = [];
	const headers = [];
	HIT_HEADER.lastIndex = 0;
	for (let match = HIT_HEADER.exec(result); match !== null; match = HIT_HEADER.exec(result)) headers.push({
		index: Number(match[1]),
		header: match[2],
		start: match.index + match[0].length,
		end: match.index
	});
	for (let i = 0; i < headers.length; i += 1) {
		const block = headers[i];
		const text = result.slice(block.start, i + 1 < headers.length ? headers[i + 1].end : result.length).trim();
		const separator = block.header.indexOf(" > ");
		const source = separator === -1 ? block.header : block.header.slice(0, separator);
		const section = separator === -1 ? "" : block.header.slice(separator + 3);
		hits.push({
			index: block.index,
			source,
			section,
			text,
			...memoryTimeOf(source) === void 0 ? {} : { memoryTime: memoryTimeOf(source) }
		});
	}
	return hits;
}
function parseStatsText(stats) {
	const parsed = {
		storePath: "",
		chunks: 0,
		embedModel: "",
		llmModel: "",
		retrieval: "",
		sources: [],
		empty: false
	};
	for (const rawLine of stats.split(/\r?\n/)) {
		const line = rawLine.trimEnd();
		const store = /^store\s*:\s*(.+?)\s+\((\d+) chunks\)$/.exec(line);
		if (store !== null) {
			parsed.storePath = store[1];
			parsed.chunks = Number(store[2]);
			continue;
		}
		const models = /^models\s*:\s*(.+?)\s+\(embed\)\s*\/\s*(.+?)\s+\(llm\)$/.exec(line);
		if (models !== null) {
			parsed.embedModel = models[1];
			parsed.llmModel = models[2];
			continue;
		}
		const retrieval = /^retrieval\s*:\s*(.+)$/.exec(line);
		if (retrieval !== null) {
			parsed.retrieval = retrieval[1];
			continue;
		}
		if (/^sources\s*:\s*\(index is empty/.test(line)) {
			parsed.empty = true;
			continue;
		}
		const source = /^  (.+?)\s+(\d+) chunks$/.exec(rawLine);
		if (source !== null) parsed.sources.push({
			path: source[1],
			chunks: Number(source[2])
		});
	}
	return parsed;
}
function parseAskAnswer(result) {
	const sources = [];
	return {
		body: result.split(/\r?\n/).filter((line) => {
			const source = /^\[source:\s*(.+?)\s*\]$/.exec(line.trim());
			if (source !== null) {
				sources.push(source[1]);
				return false;
			}
			return true;
		}).join("\n").trimEnd(),
		sources
	};
}
//#endregion
//#region src/trust-fence.ts
function header(headers, name) {
	const value = headers[name];
	return typeof value === "string" ? value : void 0;
}
/** Normalized URL of a Host-header authority, or undefined when unparsable. */
function parseAuthority(authority) {
	try {
		return new URL(`http://${authority}`);
	} catch {
		return;
	}
}
/** Whether a normalized URL hostname names the local loopback authority. */
function isLoopbackHostname(hostname) {
	if (hostname === "localhost" || hostname === "[::1]") return true;
	const parts = hostname.split(".");
	return parts.length === 4 && parts[0] === "127" && parts.every((part) => /^\d{1,3}$/.test(part) && Number(part) <= 255);
}
/** Canonical authority form: hostname, or hostname:port when a port was written. */
function canonicalAuthority(entry, entryUrl) {
	const port = entryUrl.port !== "" ? entryUrl.port : new URL(`https://${entry}`).port;
	return port === "" ? entryUrl.hostname : `${entryUrl.hostname}:${port}`;
}
/** Whether the request authority matches a trustedHosts entry (exact or port-less). */
function isTrustedAuthority(hostUrl, trustedHosts) {
	return trustedHosts.some((entry) => {
		const entryUrl = parseAuthority(entry);
		if (entryUrl === void 0) return false;
		return canonicalAuthority(entry, entryUrl) === entryUrl.hostname ? entryUrl.hostname === hostUrl.hostname : entryUrl.host === hostUrl.host;
	});
}
/**
* Decide whether one loci-dsh request may reach the plugin routes.
* @param request - node HTTP request facts (headers).
* @param trustedHosts - non-loopback authorities this deployment serves.
* @returns true when the Host is ours (loopback or trusted) and browser markers are same-origin.
*/
function isTrustedApiRequest(request, trustedHosts) {
	const host = header(request.headers, "host");
	if (host === void 0) return false;
	const hostUrl = parseAuthority(host);
	if (hostUrl === void 0) return false;
	if (!isLoopbackHostname(hostUrl.hostname) && !isTrustedAuthority(hostUrl, trustedHosts)) return false;
	if (header(request.headers, "sec-fetch-site") === "cross-site") return false;
	const origin = header(request.headers, "origin");
	if (origin === void 0) return true;
	try {
		return new URL(origin).hostname === hostUrl.hostname;
	} catch {
		return false;
	}
}
//#endregion
//#region src/index.ts
/**
* loci-dsh, node half.
*
* A thin HTTP proxy: mounts `/loci-dsh/api/*` on the dsh web server
* and forwards JSON calls to a running `loci serve-http` instance
* (search / ask / remember / stats / health, Bearer auth). The browser-side
* half is same-origin with this server, so the proxy also sidesteps the fact
* that loci's HTTP API ships no CORS headers — the browser never talks to
* loci directly, only the host process does.
*
* Routes mount through dynamic `ctx.inject(['webServer'])` so headless
* profiles without a web server still load the plugin harmlessly. Every
* request passes the same Host-header loopback fence the dsh /api gateway
* uses (DNS-rebinding defense, not authentication).
*/
const name = "loci-dsh";
const inject = [];
const DEFAULT_CONFIG = {
	baseUrl: "http://127.0.0.1:8765",
	token: "",
	timeoutMs: 2e4,
	askTimeoutMs: 18e4,
	graphPath: ""
};
function resolveConfig(config) {
	return {
		baseUrl: config?.baseUrl ?? process.env.LOCI_URL ?? DEFAULT_CONFIG.baseUrl,
		token: config?.token ?? process.env.LOCI_TOKEN ?? DEFAULT_CONFIG.token,
		timeoutMs: config?.timeoutMs ?? DEFAULT_CONFIG.timeoutMs,
		askTimeoutMs: config?.askTimeoutMs ?? DEFAULT_CONFIG.askTimeoutMs,
		graphPath: config?.graphPath ?? process.env.LOCI_GRAPH_PATH ?? DEFAULT_CONFIG.graphPath
	};
}
/**
* Route prefix: a plugin-owned namespace (like better-sidebar's /sidebar).
* NOT /plugins/<pkg>/... — that path family belongs to the web runtime's own
* module-serving routes, which answer 400 before plugin routes are consulted.
*/
const API_PREFIX = "/loci-dsh/api";
function writeJson(res, status, body) {
	const text = JSON.stringify(body);
	res.writeHead(status, { "content-type": "application/json; charset=utf-8" });
	res.end(text);
}
function writeError(res, code, message, status = 400) {
	writeJson(res, status, {
		ok: false,
		error: {
			code,
			message
		}
	});
}
function readJsonBody(req, limitBytes = 1 << 20) {
	return new Promise((resolve, reject) => {
		const chunks = [];
		let size = 0;
		req.on("data", (chunk) => {
			size += chunk.length;
			if (size > limitBytes) {
				reject(/* @__PURE__ */ new Error("request body too large"));
				return;
			}
			chunks.push(chunk);
		});
		req.on("end", () => {
			const raw = Buffer.concat(chunks).toString("utf-8");
			if (raw.trim() === "") {
				resolve({});
				return;
			}
			try {
				resolve(JSON.parse(raw));
			} catch {
				reject(/* @__PURE__ */ new Error("request body is not valid JSON"));
			}
		});
		req.on("error", (error) => reject(error));
	});
}
function requireString(payload, field) {
	const value = payload?.[field];
	if (typeof value !== "string") throw new BadRequestError(`field "${field}" must be a string`);
	return value;
}
var BadRequestError = class extends Error {};
function apply(ctx, config) {
	const resolved = resolveConfig(config);
	const client = new LociClient(resolved);
	ctx.inject(["webServer", "webRuntime"], (wctx) => {
		const trustedHosts = () => wctx.webRuntime?.trustedHosts ?? [];
		wctx.effect(() => wctx.webServer.register({
			kind: "prefix",
			path: API_PREFIX,
			handler: async (req, res) => {
				try {
					await handleApiRequest(resolved, client, trustedHosts(), req, res);
				} catch (error) {
					ctx.logger?.warn(`[loci-dsh] handler error: ${error instanceof Error ? error.message : String(error)}`);
					throw error;
				}
			}
		}), "loci-dsh: /loci-dsh/api routes");
	});
}
async function handleApiRequest(resolved, client, trustedHosts, req, res) {
	if (!isTrustedApiRequest(req, trustedHosts)) {
		writeError(res, "forbidden", "forbidden", 403);
		return;
	}
	if (req.method !== "POST") {
		writeError(res, "method-error", "method not allowed", 405);
		return;
	}
	const pathname = new URL(req.url ?? "/", "http://dsh.internal").pathname;
	const method = pathname.startsWith(`${API_PREFIX}/`) ? pathname.slice(14) : void 0;
	if (method === void 0 || method.includes("/")) {
		writeError(res, "not-found", "unknown loci-dsh API method", 404);
		return;
	}
	try {
		writeJson(res, 200, {
			ok: true,
			...await dispatch(resolved, client, method, await readJsonBody(req))
		});
	} catch (error) {
		if (error instanceof BadRequestError) writeError(res, "bad-request", error.message);
		else if (error instanceof LociError) writeJson(res, 200, {
			ok: false,
			error: {
				code: error.code,
				message: error.message
			}
		});
		else writeError(res, "internal", error instanceof Error ? error.message : String(error), 500);
	}
}
async function dispatch(resolved, client, method, payload) {
	if (method === "ping") {
		const health = await client.health();
		return {
			configured: client.configured,
			baseUrl: client.baseUrl,
			tokenSet: client.tokenSet,
			health
		};
	}
	if (method === "stats") {
		const stats = await client.stats();
		return {
			stats: parseStatsText(stats),
			raw: stats
		};
	}
	if (method === "search") {
		const query = requireString(payload, "query").trim();
		if (query === "") throw new BadRequestError("query must not be empty");
		const k = typeof payload.k === "number" ? payload.k : void 0;
		const tag = typeof payload.tag === "string" && payload.tag.trim() !== "" ? payload.tag.trim() : void 0;
		const inPath = typeof payload.in === "string" && payload.in.trim() !== "" ? payload.in.trim() : void 0;
		const result = await client.search({
			query,
			k,
			tag,
			in: inPath
		});
		return {
			hits: parseSearchText(result),
			raw: result
		};
	}
	if (method === "ask") {
		const question = requireString(payload, "question").trim();
		if (question === "") throw new BadRequestError("question must not be empty");
		const verify = payload.verify === true;
		const result = await client.ask({
			question,
			verify
		});
		return {
			answer: parseAskAnswer(result),
			raw: result
		};
	}
	if (method === "remember") {
		const text = requireString(payload, "text").trim();
		if (text === "") throw new BadRequestError("text must not be empty");
		const title = typeof payload.title === "string" && payload.title.trim() !== "" ? payload.title.trim() : void 0;
		const tags = Array.isArray(payload.tags) ? payload.tags.filter((tag) => typeof tag === "string") : void 0;
		return { result: await client.remember({
			text,
			title,
			tags
		}) };
	}
	if (method === "graph") {
		const graph = await loadGraph(resolved.graphPath);
		return {
			available: graph !== null,
			graph
		};
	}
	throw new BadRequestError(`unknown loci-dsh API method "${method}"`);
}
//#endregion
export { DEFAULT_CONFIG, apply, inject, name, resolveConfig };
