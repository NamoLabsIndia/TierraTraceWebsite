globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"163ca-bMz9l6HJvrE69eqGmjL4c93alOI\"",
		"mtime": "2026-07-31T05:31:11.877Z",
		"size": 91082,
		"path": "../public/favicon.png"
	},
	"/hyperledger-icon.svg": {
		"type": "image/svg+xml",
		"etag": "\"e-ePs48hL6SQKa/yTGaaOWSNm05os\"",
		"mtime": "2026-07-31T05:31:11.877Z",
		"size": 14,
		"path": "../public/hyperledger-icon.svg"
	},
	"/hyperledger.jpg": {
		"type": "image/jpeg",
		"etag": "\"813b-cJ+GQ65KzNeFWAjZPDYLclWOi5c\"",
		"mtime": "2026-07-31T05:31:11.877Z",
		"size": 33083,
		"path": "../public/hyperledger.jpg"
	},
	"/hyperledger-logo.svg": {
		"type": "image/svg+xml",
		"etag": "\"57-mPqhR6d9uqse/MeyR6q73Np+kFE\"",
		"mtime": "2026-07-31T05:31:11.877Z",
		"size": 87,
		"path": "../public/hyperledger-logo.svg"
	},
	"/Namo Labs Logo.png": {
		"type": "image/png",
		"etag": "\"b840-UBPVGTMYsGgf0qYLo67leBTDXmc\"",
		"mtime": "2026-07-31T05:31:11.861Z",
		"size": 47168,
		"path": "../public/Namo Labs Logo.png"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"4c-zcIVK1MUOY4AeteEMPDj5odw72U\"",
		"mtime": "2026-07-31T05:31:11.892Z",
		"size": 76,
		"path": "../public/robots.txt"
	},
	"/assets/chevron-right-ByV3w4KX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"77-intXXNhvbst6WZ8l0EkTvF59TFY\"",
		"mtime": "2026-07-31T12:49:40.484Z",
		"size": 119,
		"path": "../public/assets/chevron-right-ByV3w4KX.js"
	},
	"/sitemap.xml": {
		"type": "application/xml",
		"etag": "\"d3-ZWIuMJj2XchtDO7Lm6D4cq23SHQ\"",
		"mtime": "2026-07-31T05:31:11.893Z",
		"size": 211,
		"path": "../public/sitemap.xml"
	},
	"/assets/journeys-DcdhsT-d.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2f0e-j/tBNPkOw+IS7oID4km9dExPeGU\"",
		"mtime": "2026-07-31T12:49:40.485Z",
		"size": 12046,
		"path": "../public/assets/journeys-DcdhsT-d.js"
	},
	"/dress_with_qr.png": {
		"type": "image/png",
		"etag": "\"b335c-VN+ZnjI334ekX+Ex9cd0o5VtlSA\"",
		"mtime": "2026-07-31T05:31:11.877Z",
		"size": 734044,
		"path": "../public/dress_with_qr.png"
	},
	"/green_3d_earth.png": {
		"type": "image/png",
		"etag": "\"a8484-A+2INyblbmyYNWX3CX/XA+YNoQk\"",
		"mtime": "2026-07-31T05:31:11.877Z",
		"size": 689284,
		"path": "../public/green_3d_earth.png"
	},
	"/holographic_laptop.png": {
		"type": "image/png",
		"etag": "\"bd13e-dxiEJB/NMq5DGX8m07v357ArEDs\"",
		"mtime": "2026-07-31T05:31:11.877Z",
		"size": 774462,
		"path": "../public/holographic_laptop.png"
	},
	"/scanner_bg.png": {
		"type": "image/png",
		"etag": "\"b137a-+lP5UeV9k7t/l6PuiOtXFgKL0vY\"",
		"mtime": "2026-07-31T05:31:11.893Z",
		"size": 725882,
		"path": "../public/scanner_bg.png"
	},
	"/assets/ind_auto-76t_aBKU.png": {
		"type": "image/png",
		"etag": "\"97871-rfstvYItzvbpB5jdoBN3ap861uI\"",
		"mtime": "2026-07-31T12:49:40.488Z",
		"size": 620657,
		"path": "../public/assets/ind_auto-76t_aBKU.png"
	},
	"/scanning_polo_shirt.png": {
		"type": "image/png",
		"etag": "\"bcfab-4KMJHtyFVk5+ByOA5v3Ma4S6CNk\"",
		"mtime": "2026-07-31T05:31:11.893Z",
		"size": 774059,
		"path": "../public/scanning_polo_shirt.png"
	},
	"/assets/ind_electronics-C-gpO30P.png": {
		"type": "image/png",
		"etag": "\"cae5d-ZTgDNl87RFarHyGdNlwjGJCUo0g\"",
		"mtime": "2026-07-31T12:49:40.489Z",
		"size": 831069,
		"path": "../public/assets/ind_electronics-C-gpO30P.png"
	},
	"/polo_shirt.png": {
		"type": "image/png",
		"etag": "\"c26b1-wGwdWRkY6EQwydFZ5dYVnde9zq0\"",
		"mtime": "2026-07-31T05:31:11.892Z",
		"size": 796337,
		"path": "../public/polo_shirt.png"
	},
	"/assets/ind_luxury-Dax1Lz8i.png": {
		"type": "image/png",
		"etag": "\"9ec73-Y5UanhKaWw0mMz9pjwVTX1Tsa40\"",
		"mtime": "2026-07-31T12:49:40.492Z",
		"size": 650355,
		"path": "../public/assets/ind_luxury-Dax1Lz8i.png"
	},
	"/assets/ind_logistics-B-FfqDgr.png": {
		"type": "image/png",
		"etag": "\"e4f40-vLEcTgDLQi9qixrvzqC+meqAe84\"",
		"mtime": "2026-07-31T12:49:40.492Z",
		"size": 937792,
		"path": "../public/assets/ind_logistics-B-FfqDgr.png"
	},
	"/assets/ind_pharma-BPpZQXBL.png": {
		"type": "image/png",
		"etag": "\"9a648-enW8oxWILnEnuWp3n9QgxgJJY9c\"",
		"mtime": "2026-07-31T12:49:40.492Z",
		"size": 632392,
		"path": "../public/assets/ind_pharma-BPpZQXBL.png"
	},
	"/assets/index-3XeXAoqP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a06eb-csPnGdBqCJZZZlvqlI7JYasSxGg\"",
		"mtime": "2026-07-31T12:49:40.482Z",
		"size": 657131,
		"path": "../public/assets/index-3XeXAoqP.js"
	},
	"/assets/ind_coffee-CPY6R6H2.png": {
		"type": "image/png",
		"etag": "\"dd572-5WX1FLtrnzak2jO6usl2wE+nE68\"",
		"mtime": "2026-07-31T12:49:40.489Z",
		"size": 906610,
		"path": "../public/assets/ind_coffee-CPY6R6H2.png"
	},
	"/assets/ind_textile-Br3oAy8d.png": {
		"type": "image/png",
		"etag": "\"bcbf2-BgvZU9f0++342UnAzCQ/QLaKvdA\"",
		"mtime": "2026-07-31T12:49:40.494Z",
		"size": 773106,
		"path": "../public/assets/ind_textile-Br3oAy8d.png"
	},
	"/assets/ind_enterprise-QxtpNSuQ.png": {
		"type": "image/png",
		"etag": "\"c6178-JZB6fdD6tzJkA9IEejSGYNbYhEk\"",
		"mtime": "2026-07-31T12:49:40.490Z",
		"size": 811384,
		"path": "../public/assets/ind_enterprise-QxtpNSuQ.png"
	},
	"/assets/globe-BgfVK4Gg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d2bde-5c1IYUm6TZoeDqpNPpwWTCHKQJ0\"",
		"mtime": "2026-07-31T12:49:40.485Z",
		"size": 1911774,
		"path": "../public/assets/globe-BgfVK4Gg.js"
	},
	"/assets/logo-BYCu5uk0.png": {
		"type": "image/png",
		"etag": "\"163ca-bMz9l6HJvrE69eqGmjL4c93alOI\"",
		"mtime": "2026-07-31T12:49:40.494Z",
		"size": 91082,
		"path": "../public/assets/logo-BYCu5uk0.png"
	},
	"/assets/routes-hMBn3JQG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1823d-GWQyxNZkFDmi6lYsUwe9EMZPxlM\"",
		"mtime": "2026-07-31T12:49:40.486Z",
		"size": 98877,
		"path": "../public/assets/routes-hMBn3JQG.js"
	},
	"/assets/verify-Cc-tTSqu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5156-QrTXJAWSWkS8KwNL9gcAzHWqRR8\"",
		"mtime": "2026-07-31T12:49:40.486Z",
		"size": 20822,
		"path": "../public/assets/verify-Cc-tTSqu.js"
	},
	"/assets/styles-BQy_bNmG.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1fdb7-mFXJAJakS5R1979bXchwaU7EYXI\"",
		"mtime": "2026-07-31T12:49:40.495Z",
		"size": 130487,
		"path": "../public/assets/styles-BQy_bNmG.css"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_YDg6jz = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_YDg6jz
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
