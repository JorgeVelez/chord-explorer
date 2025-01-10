// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"e68OI":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lqZg":[function(require,module,exports) {
var _tonal = require("@tonaljs/tonal");
var _chord = require("@tonaljs/chord");
var _chordDictionary = require("@tonaljs/chord-dictionary");
var _howler = require("howler");
var _webmidi = require("webmidi");
const sound = new (0, _howler.Howl)({
    src: [
        "assets/piano.webm",
        "assets/piano.mp3"
    ],
    //piano
    sprite: {
        "21": [
            89e3,
            14117.73242630386
        ],
        "22": [
            105e3,
            14117.73242630386
        ],
        "23": [
            121e3,
            14117.73242630386
        ],
        "24": [
            137e3,
            14117.73242630386
        ],
        "25": [
            153e3,
            14117.73242630386
        ],
        "26": [
            169e3,
            14117.73242630386
        ],
        "27": [
            185e3,
            14117.73242630386
        ],
        "28": [
            201e3,
            14117.73242630386
        ],
        "29": [
            217e3,
            14117.73242630386
        ],
        "30": [
            233e3,
            14117.73242630386
        ],
        "31": [
            249e3,
            14117.73242630386
        ],
        "32": [
            265e3,
            14860.77097505671
        ],
        "33": [
            281e3,
            14117.73242630386
        ],
        "34": [
            297e3,
            14860.77097505671
        ],
        "35": [
            313e3,
            14860.77097505671
        ],
        "36": [
            329e3,
            14860.77097505671
        ],
        "37": [
            345e3,
            14860.77097505671
        ],
        "38": [
            361e3,
            14117.73242630386
        ],
        "39": [
            377e3,
            14117.73242630386
        ],
        "40": [
            393e3,
            14117.73242630386
        ],
        "41": [
            409e3,
            12631.65532879816
        ],
        "42": [
            423e3,
            12631.65532879816
        ],
        "43": [
            437e3,
            11888.616780045368
        ],
        "44": [
            45e4,
            11145.578231292518
        ],
        "45": [
            463e3,
            14117.73242630386
        ],
        "46": [
            479e3,
            14117.73242630386
        ],
        "47": [
            495e3,
            14117.73242630386
        ],
        "48": [
            511e3,
            11888.616780045368
        ],
        "49": [
            524e3,
            11888.616780045368
        ],
        "50": [
            537e3,
            12631.65532879816
        ],
        "51": [
            551e3,
            11888.616780045368
        ],
        "52": [
            564e3,
            11145.57823129246
        ],
        "53": [
            577e3,
            13374.693877551068
        ],
        "54": [
            592e3,
            13374.693877551068
        ],
        "55": [
            607e3,
            12631.65532879816
        ],
        "56": [
            621e3,
            13374.693877551068
        ],
        "57": [
            636e3,
            12631.65532879816
        ],
        "58": [
            65e4,
            12631.65532879816
        ],
        "59": [
            664e3,
            8173.424036281176
        ],
        "60": [
            674e3,
            8173.424036281176
        ],
        "61": [
            684e3,
            7430.385487528383
        ],
        "62": [
            693e3,
            11888.616780045368
        ],
        "63": [
            706e3,
            11145.57823129246
        ],
        "64": [
            719e3,
            11145.57823129246
        ],
        "65": [
            732e3,
            12631.65532879816
        ],
        "66": [
            746e3,
            11888.616780045368
        ],
        "67": [
            759e3,
            11888.616780045368
        ],
        "68": [
            772e3,
            11888.616780045368
        ],
        "69": [
            785e3,
            11888.616780045368
        ],
        "70": [
            798e3,
            11888.616780045368
        ],
        "71": [
            811e3,
            10402.539682539667
        ],
        "72": [
            823e3,
            9659.501133786875
        ],
        "73": [
            834e3,
            9659.501133786875
        ],
        "74": [
            845e3,
            7430.385487528383
        ],
        "75": [
            854e3,
            7430.385487528383
        ],
        "76": [
            863e3,
            7430.385487528383
        ],
        "77": [
            872e3,
            10402.539682539667
        ],
        "78": [
            884e3,
            10402.539682539667
        ],
        "79": [
            896e3,
            10402.539682539667
        ],
        "80": [
            908e3,
            13374.693877551068
        ],
        "81": [
            923e3,
            13374.693877551068
        ],
        "82": [
            938e3,
            13374.693877551068
        ],
        "83": [
            953e3,
            13374.693877551068
        ],
        "84": [
            968e3,
            13374.693877551068
        ],
        "85": [
            983e3,
            13374.693877551068
        ],
        "86": [
            998e3,
            14117.73242630386
        ],
        "87": [
            1014e3,
            14117.732426303746
        ],
        "88": [
            103e4,
            14117.732426303746
        ],
        "89": [
            1046e3,
            9659.501133786762
        ],
        "90": [
            1057e3,
            9659.501133786762
        ],
        "91": [
            1068e3,
            9659.501133786762
        ],
        "92": [
            1079e3,
            9659.501133786762
        ],
        "93": [
            109e4,
            9659.501133786762
        ],
        "94": [
            1101e3,
            9659.501133786762
        ],
        "95": [
            1112e3,
            12631.65532879816
        ],
        "96": [
            1126e3,
            12631.65532879816
        ],
        "97": [
            114e4,
            12631.65532879816
        ],
        "98": [
            1154e3,
            8173.424036281176
        ],
        "99": [
            1164e3,
            8173.424036281176
        ],
        "100": [
            0,
            8173.42403628118
        ],
        "101": [
            1e4,
            8916.46258503401
        ],
        "102": [
            2e4,
            8916.46258503401
        ],
        "103": [
            3e4,
            8916.46258503401
        ],
        "104": [
            4e4,
            9659.501133786847
        ],
        "105": [
            51e3,
            9659.501133786847
        ],
        "106": [
            62e3,
            9659.501133786847
        ],
        "107": [
            73e3,
            6687.346938775505
        ],
        "108": [
            81e3,
            6687.346938775505
        ]
    },
    //epiano
    //sprite:{"21":[27e3,14860.770975056688],"22":[43e3,14860.770975056688],"23":[59e3,14860.770975056696],"24":[75e3,14860.770975056696],"25":[91e3,14860.770975056696],"26":[107e3,14860.770975056696],"27":[123e3,14860.770975056681],"28":[139e3,14860.770975056681],"29":[155e3,14860.770975056681],"30":[171e3,14860.770975056681],"31":[187e3,14860.770975056681],"32":[203e3,14860.770975056681],"33":[219e3,14860.770975056681],"34":[235e3,14860.770975056681],"35":[251e3,14860.77097505671],"36":[267e3,14860.77097505671],"37":[283e3,14117.73242630386],"38":[299e3,14860.77097505671],"39":[315e3,14860.77097505671],"40":[331e3,14860.77097505671],"41":[347e3,14860.77097505671],"42":[363e3,14117.73242630386],"43":[379e3,14117.73242630386],"44":[395e3,14117.73242630386],"45":[411e3,14117.73242630386],"46":[427e3,14117.73242630386],"47":[443e3,14117.73242630386],"48":[459e3,14117.73242630386],"49":[475e3,14117.73242630386],"50":[491e3,14117.73242630386],"51":[507e3,14117.73242630386],"52":[523e3,14117.73242630386],"53":[539e3,12631.65532879816],"54":[553e3,14117.73242630386],"55":[569e3,14117.73242630386],"56":[585e3,14117.73242630386],"57":[601e3,14117.73242630386],"58":[617e3,14117.73242630386],"59":[633e3,12631.65532879816],"60":[647e3,11145.57823129246],"61":[66e4,11145.57823129246],"62":[673e3,11145.57823129246],"63":[686e3,8916.462585033969],"64":[696e3,8173.424036281176],"65":[706e3,9659.501133786875],"66":[717e3,10402.539682539667],"67":[729e3,11145.57823129246],"68":[742e3,10402.539682539667],"69":[754e3,10402.539682539667],"70":[766e3,11145.57823129246],"71":[779e3,10402.539682539667],"72":[791e3,9659.501133786875],"73":[802e3,8916.462585033969],"74":[812e3,8916.462585033969],"75":[822e3,8173.424036281176],"76":[832e3,8173.424036281176],"77":[842e3,8173.424036281176],"78":[852e3,7430.385487528383],"79":[861e3,6687.346938775477],"80":[869e3,6687.346938775477],"81":[877e3,6687.346938775477],"82":[885e3,6687.346938775477],"83":[893e3,5944.308390022684],"84":[9e5,5944.308390022684],"85":[907e3,5201.269841269891],"86":[914e3,5201.269841269891],"87":[921e3,4458.2312925169845],"88":[927e3,4458.2312925169845],"89":[933e3,3715.1927437641916],"90":[938e3,3715.1927437641916],"91":[943e3,2972.154195011285],"92":[947e3,2972.154195011285],"93":[951e3,2972.154195011285],"94":[955e3,2972.154195011285],"95":[959e3,2229.1156462584922],"96":[963e3,2229.1156462584922],"97":[967e3,2229.1156462584922],"98":[971e3,2229.1156462584922],"99":[975e3,2229.1156462584922],"100":[0,1486.077097505669],"101":[3e3,1486.0770975056691],"102":[6e3,1486.0770975056691],"103":[9e3,1486.0770975056691],"104":[12e3,1486.0770975056691],"105":[15e3,1486.0770975056673],"106":[18e3,1486.0770975056673],"107":[21e3,1486.0770975056673],"108":[24e3,1486.0770975056673]},
    onload () {
        console.log("Sound file has been loaded. Do something here!");
        soundEngine.init();
    },
    onloaderror (e, msg) {
        console.log("Error", e, msg);
    }
});
const startNotes = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B"
];
const chordQualities = [
    "M",
    "maj7",
    "maj9",
    "m",
    "m7",
    "m9",
    "dim",
    "dim7",
    "aug",
    "A",
    "A#",
    "B"
];
//const startNoteSelector = document.querySelector('#start-note');
const octaveSelector = document.querySelector("#octave");
const buttons = document.querySelector(".buttons");
const roots = document.querySelector(".roots");
const intervalsInChord = document.querySelector(".intervals-in-chord");
const notesInChord = document.querySelector(".notes-in-chord");
const chordName = document.querySelector(".chord-name");
var mySynth;
var myKeyboard;
let selectedStartNote = "C";
let selectedOctave = "2";
let selectedChord = "M";
const app = {
    init () {
        (0, _webmidi.WebMidi).enable().then(()=>this.onEnabled()).catch((err)=>console.log(err));
        // this.setupStartNotes();
        this.setupOctaves();
        this.setupButtons();
        this.setupRoots();
        this.setupEventListeners();
    },
    // setupStartNotes() {
    //     startNotes.forEach(noteName => {
    //         let noteNameOption = this.createElement('option', noteName);
    //         startNoteSelector.appendChild(noteNameOption);
    //     });
    // },
    onEnabled () {
        if ((0, _webmidi.WebMidi).inputs.length < 1) document.body.innerHTML += "No device detected.";
        else {
            console.log("Inputs:");
            (0, _webmidi.WebMidi).inputs.forEach((device, index)=>{
                //document.body.innerHTML+= `${index}: ${device.name} <br>`;
                console.log(index + ":" + device.name);
            });
            console.log("Outputs:");
            (0, _webmidi.WebMidi).outputs.forEach((device, index)=>{
                //document.body.innerHTML+= `${index}: ${device.name} <br>`;
                console.log(index + ":" + device.name);
            });
        }
        myKeyboard = (0, _webmidi.WebMidi).inputs[1];
        mySynth = (0, _webmidi.WebMidi).outputs[0];
        // const mySynth = WebMidi.getInputByName("TYPE NAME HERE!")
        myKeyboard.channels[1].addListener("noteon", (e)=>{
            // document.body.innerHTML+= `${e.note.name} <br>`;
            console.log(e.note.number);
            sound.volume(0.75);
            sound.play(e.note.number.toString());
        });
    },
    setupOctaves () {
        for(let i = 1; i <= 4; i++){
            let octaveNumber = this.createElement("option", i);
            octaveSelector.appendChild(octaveNumber);
        }
    },
    setupRoots () {
        startNotes.forEach((root)=>{
            let rootButton = this.createElement("button", root);
            roots.appendChild(rootButton);
            if (root == selectedStartNote) rootButton.style.backgroundColor = "MediumSpringGreen";
        });
    },
    setupButtons () {
        const chordNames = (0, _chordDictionary.entries)().map((entry)=>{
            return entry.aliases[0];
        });
        chordNames.forEach((chordName)=>{
            let chordButton = this.createElement("button", chordName);
            buttons.appendChild(chordButton);
            if (chordName == selectedChord) chordButton.style.backgroundColor = "Tomato";
        });
    },
    setupEventListeners () {
        // startNoteSelector.addEventListener('change', () => {
        //     selectedStartNote = startNoteSelector.value;
        // });
        octaveSelector.addEventListener("change", ()=>{
            selectedOctave = octaveSelector.value;
        });
        roots.addEventListener("click", (event)=>{
            if (event.target.classList.contains("roots")) //alert("no existe!");
            return;
            this.resetRootButtons();
            event.target.style.backgroundColor = "MediumSpringGreen";
            selectedStartNote = event.target.innerText;
            this.displayAndPlayChord(selectedChord);
        });
        buttons.addEventListener("click", (event)=>{
            if (event.target.classList.contains("buttons")) return;
            this.resetButtons();
            event.target.style.backgroundColor = "Tomato";
            console.log(event.target);
            selectedChord = event.target.innerText;
            console.log(selectedChord);
        });
        addEventListener("keydown", (event)=>{
            switch(event.key){
                case "1":
                    this.changeRootButton(startNotes[0]);
                    break;
                case "2":
                    this.changeRootButton(startNotes[1]);
                    break;
                case "3":
                    this.changeRootButton(startNotes[2]);
                    break;
                case "4":
                    this.changeRootButton(startNotes[3]);
                    break;
                case "5":
                    this.changeRootButton(startNotes[4]);
                    break;
                case "6":
                    this.changeRootButton(startNotes[5]);
                    break;
                case "7":
                    this.changeRootButton(startNotes[6]);
                    break;
                case "8":
                    this.changeRootButton(startNotes[7]);
                    break;
                case "9":
                    this.changeRootButton(startNotes[8]);
                    break;
                case "0":
                    this.changeRootButton(startNotes[9]);
                    break;
                case "-":
                    this.changeRootButton(startNotes[10]);
                    break;
                case "+":
                    this.changeRootButton(startNotes[11]);
                    break;
                case "=":
                    this.changeRootButton(startNotes[11]);
                    break;
                case "m":
                    this.changeChordButton("M");
                    break;
                case "j":
                    this.changeChordButton("maj7");
                    break;
                case "u":
                    this.changeChordButton("6");
                    break;
                case "i":
                    this.changeChordButton("7");
                    break;
                case "n":
                    this.changeChordButton("m");
                    break;
                case "h":
                    this.changeChordButton("m7");
                    break;
                case "y":
                    this.changeChordButton("m6");
                    break;
                case "b":
                    this.changeChordButton("dim");
                    break;
                case "g":
                    this.changeChordButton("dim7");
                    break;
                case "v":
                    this.changeChordButton("aug");
                    break;
                default:
                    return;
            }
        });
    },
    resetRootButtons () {
        const rootscollection = document.getElementsByClassName("roots")[0].querySelectorAll("button");
        rootscollection.forEach((rootsbutton)=>{
            rootsbutton.style.backgroundColor = "MediumSlateBlue";
        });
    },
    resetButtons () {
        const buttonscollection = document.getElementsByClassName("buttons")[0].querySelectorAll("button");
        buttonscollection.forEach((chordbutton)=>{
            chordbutton.style.backgroundColor = "Orange";
        });
    },
    changeRootButton (val) {
        this.resetRootButtons();
        selectedStartNote = val;
        const rootscollection = document.getElementsByClassName("roots")[0].querySelectorAll("button");
        rootscollection.forEach((rootsbutton)=>{
            if (rootsbutton.innerText == val) rootsbutton.style.backgroundColor = "MediumSpringGreen";
        });
        this.displayAndPlayChord(selectedChord);
    },
    changeChordButton (val) {
        this.resetButtons();
        this.resetButtons();
        const rootscollection = document.getElementsByClassName("buttons")[0].querySelectorAll("button");
        rootscollection.forEach((rootsbutton)=>{
            if (rootsbutton.innerText == val) rootsbutton.style.backgroundColor = "Tomato";
        });
        selectedChord = val;
        console.log(selectedChord);
    },
    displayAndPlayChord (selectedChord) {
        let chordIntervals = (0, _chord.chord)(selectedChord).intervals;
        intervalsInChord.innerText = chordIntervals.join(" - ");
        const startNoteWithOctave = selectedStartNote + selectedOctave;
        let chordNotes = chordIntervals.map((val)=>{
            return (0, _tonal.transpose)(startNoteWithOctave, val);
        });
        notesInChord.innerText = chordNotes.join(" - ");
        chordName.innerText = (0, _chord.chord)(selectedStartNote + selectedOctave + selectedChord).name;
        soundEngine.play(chordNotes);
    },
    createElement (elementName, content) {
        let element = document.createElement(elementName);
        element.innerHTML = content;
        return element;
    }
};
const soundEngine = {
    init () {
    // const lengthOfNote = 2400;
    // let timeIndex = 0;
    // for (let i = 24; i <= 96; i++) {
    //     sound['_sprite'][i] = [timeIndex, lengthOfNote];
    //     timeIndex += lengthOfNote;
    // }
    },
    play (soundSequence) {
        const chordMidiNumbers = soundSequence.map((noteName)=>{
            return (0, _tonal.note)(noteName).midi;
        });
        sound.volume(0.75);
        chordMidiNumbers.forEach((noteMidiNumber)=>{
            sound.play(noteMidiNumber.toString());
            mySynth.playNote(noteMidiNumber, {
                duration: 10
            });
        });
    }
};
app.init();

},{"@tonaljs/tonal":"4q9Lu","@tonaljs/chord":"86fqr","@tonaljs/chord-dictionary":"1dcny","webmidi":"7gVlB","howler":"5Vjgk"}],"4q9Lu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AbcNotation", ()=>(0, _abcNotationDefault.default));
parcelHelpers.export(exports, "Chord", ()=>(0, _chordDefault.default));
parcelHelpers.export(exports, "ChordType", ()=>(0, _chordTypeDefault.default));
parcelHelpers.export(exports, "Collection", ()=>(0, _collectionDefault.default));
parcelHelpers.export(exports, "DurationValue", ()=>(0, _durationValueDefault.default));
parcelHelpers.export(exports, "Interval", ()=>(0, _intervalDefault.default));
parcelHelpers.export(exports, "Key", ()=>(0, _keyDefault.default));
parcelHelpers.export(exports, "Midi", ()=>(0, _midiDefault.default));
parcelHelpers.export(exports, "Mode", ()=>(0, _modeDefault.default));
parcelHelpers.export(exports, "Note", ()=>(0, _noteDefault.default));
parcelHelpers.export(exports, "Pcset", ()=>(0, _pcsetDefault.default));
parcelHelpers.export(exports, "Progression", ()=>(0, _progressionDefault.default));
parcelHelpers.export(exports, "Range", ()=>(0, _rangeDefault.default));
parcelHelpers.export(exports, "RomanNumeral", ()=>(0, _romanNumeralDefault.default));
parcelHelpers.export(exports, "Scale", ()=>(0, _scaleDefault.default));
parcelHelpers.export(exports, "ScaleType", ()=>(0, _scaleTypeDefault.default));
parcelHelpers.export(exports, "TimeSignature", ()=>(0, _timeSignatureDefault.default));
parcelHelpers.export(exports, "Array", ()=>_array);
parcelHelpers.export(exports, "Core", ()=>_core);
parcelHelpers.export(exports, "ChordDictionary", ()=>ChordDictionary);
parcelHelpers.export(exports, "PcSet", ()=>PcSet);
parcelHelpers.export(exports, "ScaleDictionary", ()=>ScaleDictionary);
parcelHelpers.export(exports, "Tonal", ()=>Tonal);
var _abcNotation = require("@tonaljs/abc-notation");
var _abcNotationDefault = parcelHelpers.interopDefault(_abcNotation);
var _array = require("@tonaljs/array");
var _chord = require("@tonaljs/chord");
var _chordDefault = parcelHelpers.interopDefault(_chord);
var _chordType = require("@tonaljs/chord-type");
var _chordTypeDefault = parcelHelpers.interopDefault(_chordType);
var _collection = require("@tonaljs/collection");
var _collectionDefault = parcelHelpers.interopDefault(_collection);
var _core = require("@tonaljs/core");
parcelHelpers.exportAll(_core, exports);
var _durationValue = require("@tonaljs/duration-value");
var _durationValueDefault = parcelHelpers.interopDefault(_durationValue);
var _interval = require("@tonaljs/interval");
var _intervalDefault = parcelHelpers.interopDefault(_interval);
var _key = require("@tonaljs/key");
var _keyDefault = parcelHelpers.interopDefault(_key);
var _midi = require("@tonaljs/midi");
var _midiDefault = parcelHelpers.interopDefault(_midi);
var _mode = require("@tonaljs/mode");
var _modeDefault = parcelHelpers.interopDefault(_mode);
var _note = require("@tonaljs/note");
var _noteDefault = parcelHelpers.interopDefault(_note);
var _pcset = require("@tonaljs/pcset");
var _pcsetDefault = parcelHelpers.interopDefault(_pcset);
var _progression = require("@tonaljs/progression");
var _progressionDefault = parcelHelpers.interopDefault(_progression);
var _range = require("@tonaljs/range");
var _rangeDefault = parcelHelpers.interopDefault(_range);
var _romanNumeral = require("@tonaljs/roman-numeral");
var _romanNumeralDefault = parcelHelpers.interopDefault(_romanNumeral);
var _scale = require("@tonaljs/scale");
var _scaleDefault = parcelHelpers.interopDefault(_scale);
var _scaleType = require("@tonaljs/scale-type");
var _scaleTypeDefault = parcelHelpers.interopDefault(_scaleType);
var _timeSignature = require("@tonaljs/time-signature");
var _timeSignatureDefault = parcelHelpers.interopDefault(_timeSignature);
// deprecated (backwards compatibility)
const Tonal = _core;
const PcSet = (0, _pcsetDefault.default);
const ChordDictionary = (0, _chordTypeDefault.default);
const ScaleDictionary = (0, _scaleTypeDefault.default);

},{"@tonaljs/abc-notation":"hXWKp","@tonaljs/array":"Lh2Xc","@tonaljs/chord":"86fqr","@tonaljs/chord-type":"asSVJ","@tonaljs/collection":"8KqbI","@tonaljs/core":"e6pW0","@tonaljs/duration-value":"6z4EQ","@tonaljs/interval":"gihyZ","@tonaljs/key":"8lW9p","@tonaljs/midi":"4PEvd","@tonaljs/mode":"khyxV","@tonaljs/note":"l93bX","@tonaljs/pcset":"bTNFe","@tonaljs/progression":"a4BOh","@tonaljs/range":"juxWF","@tonaljs/roman-numeral":"jEY9W","@tonaljs/scale":"3PiyV","@tonaljs/scale-type":"frYDK","@tonaljs/time-signature":"1oUQi","@parcel/transformer-js/src/esmodule-helpers.js":"kANgE"}],"hXWKp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "abcToScientificNotation", ()=>abcToScientificNotation);
parcelHelpers.export(exports, "distance", ()=>distance);
parcelHelpers.export(exports, "scientificToAbcNotation", ()=>scientificToAbcNotation);
parcelHelpers.export(exports, "tokenize", ()=>tokenize);
parcelHelpers.export(exports, "transpose", ()=>transpose);
var _core = require("@tonaljs/core");
const fillStr = (character, times)=>Array(times + 1).join(character);
const REGEX = /^(_{1,}|=|\^{1,}|)([abcdefgABCDEFG])([,']*)$/;
function tokenize(str) {
    const m = REGEX.exec(str);
    if (!m) return [
        "",
        "",
        ""
    ];
    return [
        m[1],
        m[2],
        m[3]
    ];
}
/**
 * Convert a (string) note in ABC notation into a (string) note in scientific notation
 *
 * @example
 * abcToScientificNotation("c") // => "C5"
 */ function abcToScientificNotation(str) {
    const [acc, letter, oct] = tokenize(str);
    if (letter === "") return "";
    let o = 4;
    for(let i = 0; i < oct.length; i++)o += oct.charAt(i) === "," ? -1 : 1;
    const a = acc[0] === "_" ? acc.replace(/_/g, "b") : acc[0] === "^" ? acc.replace(/\^/g, "#") : "";
    return letter.charCodeAt(0) > 96 ? letter.toUpperCase() + a + (o + 1) : letter + a + o;
}
/**
 * Convert a (string) note in scientific notation into a (string) note in ABC notation
 *
 * @example
 * scientificToAbcNotation("C#4") // => "^C"
 */ function scientificToAbcNotation(str) {
    const n = (0, _core.note)(str);
    if (n.empty || !n.oct) return "";
    const { letter, acc, oct } = n;
    const a = acc[0] === "b" ? acc.replace(/b/g, "_") : acc.replace(/#/g, "^");
    const l = oct > 4 ? letter.toLowerCase() : letter;
    const o = oct === 5 ? "" : oct > 4 ? fillStr("'", oct - 5) : fillStr(",", 4 - oct);
    return a + l + o;
}
function transpose(note, interval) {
    return scientificToAbcNotation((0, _core.transpose)(abcToScientificNotation(note), interval));
}
function distance(from, to) {
    return (0, _core.distance)(abcToScientificNotation(from), abcToScientificNotation(to));
}
var index = {
    abcToScientificNotation,
    scientificToAbcNotation,
    tokenize,
    transpose,
    distance
};
exports.default = index;

},{"@tonaljs/core":"e6pW0","@parcel/transformer-js/src/esmodule-helpers.js":"kANgE"}],"e6pW0":[function(require,module,exports) {
/**
 * Fill a string with a repeated character
 *
 * @param character
 * @param repetition
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "accToAlt", ()=>accToAlt);
parcelHelpers.export(exports, "altToAcc", ()=>altToAcc);
parcelHelpers.export(exports, "coordToInterval", ()=>coordToInterval);
parcelHelpers.export(exports, "coordToNote", ()=>coordToNote);
parcelHelpers.export(exports, "decode", ()=>decode);
parcelHelpers.export(exports, "deprecate", ()=>deprecate);
parcelHelpers.export(exports, "distance", ()=>distance);
parcelHelpers.export(exports, "encode", ()=>encode);
parcelHelpers.export(exports, "fillStr", ()=>fillStr);
parcelHelpers.export(exports, "interval", ()=>interval);
parcelHelpers.export(exports, "isNamed", ()=>isNamed);
parcelHelpers.export(exports, "isPitch", ()=>isPitch);
parcelHelpers.export(exports, "note", ()=>note);
parcelHelpers.export(exports, "stepToLetter", ()=>stepToLetter);
parcelHelpers.export(exports, "tokenizeInterval", ()=>tokenizeInterval);
parcelHelpers.export(exports, "tokenizeNote", ()=>tokenizeNote);
parcelHelpers.export(exports, "transpose", ()=>transpose);
const fillStr = (s, n)=>Array(Math.abs(n) + 1).join(s);
function deprecate(original, alternative, fn) {
    return function(...args) {
        // tslint:disable-next-line
        console.warn(`${original} is deprecated. Use ${alternative}.`);
        return fn.apply(this, args);
    };
}
function isNamed(src) {
    return src !== null && typeof src === "object" && typeof src.name === "string" ? true : false;
}
function isPitch(pitch) {
    return pitch !== null && typeof pitch === "object" && typeof pitch.step === "number" && typeof pitch.alt === "number" ? true : false;
}
// The number of fifths of [C, D, E, F, G, A, B]
const FIFTHS = [
    0,
    2,
    4,
    -1,
    1,
    3,
    5
];
// The number of octaves it span each step
const STEPS_TO_OCTS = FIFTHS.map((fifths)=>Math.floor(fifths * 7 / 12));
function encode(pitch) {
    const { step, alt, oct, dir = 1 } = pitch;
    const f = FIFTHS[step] + 7 * alt;
    if (oct === undefined) return [
        dir * f
    ];
    const o = oct - STEPS_TO_OCTS[step] - 4 * alt;
    return [
        dir * f,
        dir * o
    ];
}
// We need to get the steps from fifths
// Fifths for CDEFGAB are [ 0, 2, 4, -1, 1, 3, 5 ]
// We add 1 to fifths to avoid negative numbers, so:
// for ["F", "C", "G", "D", "A", "E", "B"] we have:
const FIFTHS_TO_STEPS = [
    3,
    0,
    4,
    1,
    5,
    2,
    6
];
function decode(coord) {
    const [f, o, dir] = coord;
    const step = FIFTHS_TO_STEPS[unaltered(f)];
    const alt = Math.floor((f + 1) / 7);
    if (o === undefined) return {
        step,
        alt,
        dir
    };
    const oct = o + 4 * alt + STEPS_TO_OCTS[step];
    return {
        step,
        alt,
        oct,
        dir
    };
}
// Return the number of fifths as if it were unaltered
function unaltered(f) {
    const i = (f + 1) % 7;
    return i < 0 ? 7 + i : i;
}
const NoNote = {
    empty: true,
    name: "",
    pc: "",
    acc: ""
};
const cache = new Map();
const stepToLetter = (step)=>"CDEFGAB".charAt(step);
const altToAcc = (alt)=>alt < 0 ? fillStr("b", -alt) : fillStr("#", alt);
const accToAlt = (acc)=>acc[0] === "b" ? -acc.length : acc.length;
/**
 * Given a note literal (a note name or a note object), returns the Note object
 * @example
 * note('Bb4') // => { name: "Bb4", midi: 70, chroma: 10, ... }
 */ function note(src) {
    const cached = cache.get(src);
    if (cached) return cached;
    const value = typeof src === "string" ? parse(src) : isPitch(src) ? note(pitchName(src)) : isNamed(src) ? note(src.name) : NoNote;
    cache.set(src, value);
    return value;
}
const REGEX = /^([a-gA-G]?)(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)$/;
/**
 * @private
 */ function tokenizeNote(str) {
    const m = REGEX.exec(str);
    return [
        m[1].toUpperCase(),
        m[2].replace(/x/g, "##"),
        m[3],
        m[4]
    ];
}
/**
 * @private
 */ function coordToNote(noteCoord) {
    return note(decode(noteCoord));
}
const mod = (n, m)=>(n % m + m) % m;
const SEMI = [
    0,
    2,
    4,
    5,
    7,
    9,
    11
];
function parse(noteName) {
    const tokens = tokenizeNote(noteName);
    if (tokens[0] === "" || tokens[3] !== "") return NoNote;
    const letter = tokens[0];
    const acc = tokens[1];
    const octStr = tokens[2];
    const step = (letter.charCodeAt(0) + 3) % 7;
    const alt = accToAlt(acc);
    const oct = octStr.length ? +octStr : undefined;
    const coord = encode({
        step,
        alt,
        oct
    });
    const name = letter + acc + octStr;
    const pc = letter + acc;
    const chroma = (SEMI[step] + alt + 120) % 12;
    const height = oct === undefined ? mod(SEMI[step] + alt, 12) - 1188 : SEMI[step] + alt + 12 * (oct + 1);
    const midi = height >= 0 && height <= 127 ? height : null;
    const freq = oct === undefined ? null : Math.pow(2, (height - 69) / 12) * 440;
    return {
        empty: false,
        acc,
        alt,
        chroma,
        coord,
        freq,
        height,
        letter,
        midi,
        name,
        oct,
        pc,
        step
    };
}
function pitchName(props) {
    const { step, alt, oct } = props;
    const letter = stepToLetter(step);
    if (!letter) return "";
    const pc = letter + altToAcc(alt);
    return oct || oct === 0 ? pc + oct : pc;
}
const NoInterval = {
    empty: true,
    name: "",
    acc: ""
};
// shorthand tonal notation (with quality after number)
const INTERVAL_TONAL_REGEX = "([-+]?\\d+)(d{1,4}|m|M|P|A{1,4})";
// standard shorthand notation (with quality before number)
const INTERVAL_SHORTHAND_REGEX = "(AA|A|P|M|m|d|dd)([-+]?\\d+)";
const REGEX$1 = new RegExp("^" + INTERVAL_TONAL_REGEX + "|" + INTERVAL_SHORTHAND_REGEX + "$");
/**
 * @private
 */ function tokenizeInterval(str) {
    const m = REGEX$1.exec(`${str}`);
    if (m === null) return [
        "",
        ""
    ];
    return m[1] ? [
        m[1],
        m[2]
    ] : [
        m[4],
        m[3]
    ];
}
const cache$1 = {};
/**
 * Get interval properties. It returns an object with:
 *
 * - name: the interval name
 * - num: the interval number
 * - type: 'perfectable' or 'majorable'
 * - q: the interval quality (d, m, M, A)
 * - dir: interval direction (1 ascending, -1 descending)
 * - simple: the simplified number
 * - semitones: the size in semitones
 * - chroma: the interval chroma
 *
 * @param {string} interval - the interval name
 * @return {Object} the interval properties
 *
 * @example
 * import { interval } from '@tonaljs/core'
 * interval('P5').semitones // => 7
 * interval('m3').type // => 'majorable'
 */ function interval(src) {
    return typeof src === "string" ? cache$1[src] || (cache$1[src] = parse$1(src)) : isPitch(src) ? interval(pitchName$1(src)) : isNamed(src) ? interval(src.name) : NoInterval;
}
const SIZES = [
    0,
    2,
    4,
    5,
    7,
    9,
    11
];
const TYPES = "PMMPPMM";
function parse$1(str) {
    const tokens = tokenizeInterval(str);
    if (tokens[0] === "") return NoInterval;
    const num = +tokens[0];
    const q = tokens[1];
    const step = (Math.abs(num) - 1) % 7;
    const t = TYPES[step];
    if (t === "M" && q === "P") return NoInterval;
    const type = t === "M" ? "majorable" : "perfectable";
    const name = "" + num + q;
    const dir = num < 0 ? -1 : 1;
    const simple = num === 8 || num === -8 ? num : dir * (step + 1);
    const alt = qToAlt(type, q);
    const oct = Math.floor((Math.abs(num) - 1) / 7);
    const semitones = dir * (SIZES[step] + alt + 12 * oct);
    const chroma = (dir * (SIZES[step] + alt) % 12 + 12) % 12;
    const coord = encode({
        step,
        alt,
        oct,
        dir
    });
    return {
        empty: false,
        name,
        num,
        q,
        step,
        alt,
        dir,
        type,
        simple,
        semitones,
        chroma,
        coord,
        oct
    };
}
/**
 * @private
 */ function coordToInterval(coord) {
    const [f, o = 0] = coord;
    const isDescending = f * 7 + o * 12 < 0;
    const ivl = isDescending ? [
        -f,
        -o,
        -1
    ] : [
        f,
        o,
        1
    ];
    return interval(decode(ivl));
}
function qToAlt(type, q) {
    return q === "M" && type === "majorable" || q === "P" && type === "perfectable" ? 0 : q === "m" && type === "majorable" ? -1 : /^A+$/.test(q) ? q.length : /^d+$/.test(q) ? -1 * (type === "perfectable" ? q.length : q.length + 1) : 0;
}
// return the interval name of a pitch
function pitchName$1(props) {
    const { step, alt, oct = 0, dir } = props;
    if (!dir) return "";
    const num = step + 1 + 7 * oct;
    const d = dir < 0 ? "-" : "";
    const type = TYPES[step] === "M" ? "majorable" : "perfectable";
    const name = d + num + altToQ(type, alt);
    return name;
}
function altToQ(type, alt) {
    if (alt === 0) return type === "majorable" ? "M" : "P";
    else if (alt === -1 && type === "majorable") return "m";
    else if (alt > 0) return fillStr("A", alt);
    else return fillStr("d", type === "perfectable" ? alt : alt + 1);
}
/**
 * Transpose a note by an interval.
 *
 * @param {string} note - the note or note name
 * @param {string} interval - the interval or interval name
 * @return {string} the transposed note name or empty string if not valid notes
 * @example
 * import { tranpose } from "@tonaljs/core"
 * transpose("d3", "3M") // => "F#3"
 * transpose("D", "3M") // => "F#"
 * ["C", "D", "E", "F", "G"].map(pc => transpose(pc, "M3)) // => ["E", "F#", "G#", "A", "B"]
 */ function transpose(noteName, intervalName) {
    const note$1 = note(noteName);
    const interval$1 = interval(intervalName);
    if (note$1.empty || interval$1.empty) return "";
    const noteCoord = note$1.coord;
    const intervalCoord = interval$1.coord;
    const tr = noteCoord.length === 1 ? [
        noteCoord[0] + intervalCoord[0]
    ] : [
        noteCoord[0] + intervalCoord[0],
        noteCoord[1] + intervalCoord[1]
    ];
    return coordToNote(tr).name;
}
/**
 * Find the interval distance between two notes or coord classes.
 *
 * To find distance between coord classes, both notes must be coord classes and
 * the interval is always ascending
 *
 * @param {Note|string} from - the note or note name to calculate distance from
 * @param {Note|string} to - the note or note name to calculate distance to
 * @return {string} the interval name or empty string if not valid notes
 *
 */ function distance(fromNote, toNote) {
    const from = note(fromNote);
    const to = note(toNote);
    if (from.empty || to.empty) return "";
    const fcoord = from.coord;
    const tcoord = to.coord;
    const fifths = tcoord[0] - fcoord[0];
    const octs = fcoord.length === 2 && tcoord.length === 2 ? tcoord[1] - fcoord[1] : -Math.floor(fifths * 7 / 12);
    return coordToInterval([
        fifths,
        octs
    ]).name;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"kANgE"}],"kANgE":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"Lh2Xc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "compact", ()=>compact);
parcelHelpers.export(exports, "permutations", ()=>permutations);
parcelHelpers.export(exports, "range", ()=>range);
parcelHelpers.export(exports, "rotate", ()=>rotate);
parcelHelpers.export(exports, "shuffle", ()=>shuffle);
parcelHelpers.export(exports, "sortedNoteNames", ()=>sortedNoteNames);
parcelHelpers.export(exports, "sortedUniqNoteNames", ()=>sortedUniqNoteNames);
var _core = require("@tonaljs/core");
// ascending range
function ascR(b, n) {
    const a = [];
    // tslint:disable-next-line:curly
    for(; n--; a[n] = n + b);
    return a;
}
// descending range
function descR(b, n) {
    const a = [];
    // tslint:disable-next-line:curly
    for(; n--; a[n] = b - n);
    return a;
}
/**
 * Creates a numeric range
 *
 * @param {number} from
 * @param {number} to
 * @return {Array<number>}
 *
 * @example
 * range(-2, 2) // => [-2, -1, 0, 1, 2]
 * range(2, -2) // => [2, 1, 0, -1, -2]
 */ function range(from, to) {
    return from < to ? ascR(from, to - from + 1) : descR(from, from - to + 1);
}
/**
 * Rotates a list a number of times. It"s completly agnostic about the
 * contents of the list.
 *
 * @param {Integer} times - the number of rotations
 * @param {Array} array
 * @return {Array} the rotated array
 *
 * @example
 * rotate(1, [1, 2, 3]) // => [2, 3, 1]
 */ function rotate(times, arr) {
    const len = arr.length;
    const n = (times % len + len) % len;
    return arr.slice(n, len).concat(arr.slice(0, n));
}
/**
 * Return a copy of the array with the null values removed
 * @function
 * @param {Array} array
 * @return {Array}
 *
 * @example
 * compact(["a", "b", null, "c"]) // => ["a", "b", "c"]
 */ function compact(arr) {
    return arr.filter((n)=>n === 0 || n);
}
/**
 * Sort an array of notes in ascending order. Pitch classes are listed
 * before notes. Any string that is not a note is removed.
 *
 * @param {string[]} notes
 * @return {string[]} sorted array of notes
 *
 * @example
 * sortedNoteNames(['c2', 'c5', 'c1', 'c0', 'c6', 'c'])
 * // => ['C', 'C0', 'C1', 'C2', 'C5', 'C6']
 * sortedNoteNames(['c', 'F', 'G', 'a', 'b', 'h', 'J'])
 * // => ['C', 'F', 'G', 'A', 'B']
 */ function sortedNoteNames(notes) {
    const valid = notes.map((n)=>(0, _core.note)(n)).filter((n)=>!n.empty);
    return valid.sort((a, b)=>a.height - b.height).map((n)=>n.name);
}
/**
 * Get sorted notes with duplicates removed. Pitch classes are listed
 * before notes.
 *
 * @function
 * @param {string[]} array
 * @return {string[]} unique sorted notes
 *
 * @example
 * Array.sortedUniqNoteNames(['a', 'b', 'c2', '1p', 'p2', 'c2', 'b', 'c', 'c3' ])
 * // => [ 'C', 'A', 'B', 'C2', 'C3' ]
 */ function sortedUniqNoteNames(arr) {
    return sortedNoteNames(arr).filter((n, i, a)=>i === 0 || n !== a[i - 1]);
}
/**
 * Randomizes the order of the specified array in-place, using the Fisher–Yates shuffle.
 *
 * @function
 * @param {Array} array
 * @return {Array} the array shuffled
 *
 * @example
 * shuffle(["C", "D", "E", "F"]) // => [...]
 */ function shuffle(arr, rnd = Math.random) {
    let i;
    let t;
    let m = arr.length;
    while(m){
        i = Math.floor(rnd() * m--);
        t = arr[m];
        arr[m] = arr[i];
        arr[i] = t;
    }
    return arr;
}
/**
 * Get all permutations of an array
 *
 * @param {Array} array - the array
 * @return {Array<Array>} an array with all the permutations
 * @example
 * permutations(["a", "b", "c"])) // =>
 * [
 *   ["a", "b", "c"],
 *   ["b", "a", "c"],
 *   ["b", "c", "a"],
 *   ["a", "c", "b"],
 *   ["c", "a", "b"],
 *   ["c", "b", "a"]
 * ]
 */ function permutations(arr) {
    if (arr.length === 0) return [
        []
    ];
    return permutations(arr.slice(1)).reduce((acc, perm)=>{
        return acc.concat(arr.map((e, pos)=>{
            const newPerm = perm.slice();
            newPerm.splice(pos, 0, arr[0]);
            return newPerm;
        }));
    }, []);
}

},{"@tonaljs/core":"e6pW0","@parcel/transformer-js/src/esmodule-helpers.js":"kANgE"}],"86fqr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "detect", ()=>(0, _chordDetect.detect));
parcelHelpers.export(exports, "chord", ()=>chord);
parcelHelpers.export(exports, "chordScales", ()=>chordScales);
parcelHelpers.export(exports, "extended", ()=>extended);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "getChord", ()=>getChord);
parcelHelpers.export(exports, "reduced", ()=>reduced);
parcelHelpers.export(exports, "tokenize", ()=>tokenize);
parcelHelpers.export(exports, "transpose", ()=>transpose);
var _chordDetect = require("@tonaljs/chord-detect");
var _chordType = require("@tonaljs/chord-type");
var _core = require("@tonaljs/core");
var _pcset = require("@tonaljs/pcset");
var _scaleType = require("@tonaljs/scale-type");
const NoChord = {
    empty: true,
    name: "",
    symbol: "",
    root: "",
    rootDegree: 0,
    type: "",
    tonic: null,
    setNum: NaN,
    quality: "Unknown",
    chroma: "",
    normalized: "",
    aliases: [],
    notes: [],
    intervals: []
};
// 6, 64, 7, 9, 11 and 13 are consider part of the chord
// (see https://github.com/danigb/tonal/issues/55)
const NUM_TYPES = /^(6|64|7|9|11|13)$/;
/**
 * Tokenize a chord name. It returns an array with the tonic and chord type
 * If not tonic is found, all the name is considered the chord name.
 *
 * This function does NOT check if the chord type exists or not. It only tries
 * to split the tonic and chord type.
 *
 * @function
 * @param {string} name - the chord name
 * @return {Array} an array with [tonic, type]
 * @example
 * tokenize("Cmaj7") // => [ "C", "maj7" ]
 * tokenize("C7") // => [ "C", "7" ]
 * tokenize("mMaj7") // => [ null, "mMaj7" ]
 * tokenize("Cnonsense") // => [ null, "nonsense" ]
 */ function tokenize(name) {
    const [letter, acc, oct, type] = (0, _core.tokenizeNote)(name);
    if (letter === "") return [
        "",
        name
    ];
    // aug is augmented (see https://github.com/danigb/tonal/issues/55)
    if (letter === "A" && type === "ug") return [
        "",
        "aug"
    ];
    // see: https://github.com/tonaljs/tonal/issues/70
    if (!type && (oct === "4" || oct === "5")) return [
        letter + acc,
        oct
    ];
    if (NUM_TYPES.test(oct)) return [
        letter + acc,
        oct + type
    ];
    else return [
        letter + acc + oct,
        type
    ];
}
/**
 * Get a Chord from a chord name.
 */ function get(src) {
    if (src === "") return NoChord;
    if (Array.isArray(src) && src.length === 2) return getChord(src[1], src[0]);
    else {
        const [tonic, type] = tokenize(src);
        const chord = getChord(type, tonic);
        return chord.empty ? getChord(src) : chord;
    }
}
/**
 * Get chord properties
 *
 * @param typeName - the chord type name
 * @param [tonic] - Optional tonic
 * @param [root]  - Optional root (requires a tonic)
 */ function getChord(typeName, optionalTonic, optionalRoot) {
    const type = (0, _chordType.get)(typeName);
    const tonic = (0, _core.note)(optionalTonic || "");
    const root = (0, _core.note)(optionalRoot || "");
    if (type.empty || optionalTonic && tonic.empty || optionalRoot && root.empty) return NoChord;
    const rootInterval = (0, _core.distance)(tonic.pc, root.pc);
    const rootDegree = type.intervals.indexOf(rootInterval) + 1;
    if (!root.empty && !rootDegree) return NoChord;
    const intervals = Array.from(type.intervals);
    for(let i = 1; i < rootDegree; i++){
        const num = intervals[0][0];
        const quality = intervals[0][1];
        const newNum = parseInt(num, 10) + 7;
        intervals.push(`${newNum}${quality}`);
        intervals.shift();
    }
    const notes = tonic.empty ? [] : intervals.map((i)=>(0, _core.transpose)(tonic, i));
    typeName = type.aliases.indexOf(typeName) !== -1 ? typeName : type.aliases[0];
    const symbol = `${tonic.empty ? "" : tonic.pc}${typeName}${root.empty || rootDegree <= 1 ? "" : "/" + root.pc}`;
    const name = `${optionalTonic ? tonic.pc + " " : ""}${type.name}${rootDegree > 1 && optionalRoot ? " over " + root.pc : ""}`;
    return {
        ...type,
        name,
        symbol,
        type: type.name,
        root: root.name,
        intervals,
        rootDegree,
        tonic: tonic.name,
        notes
    };
}
const chord = (0, _core.deprecate)("Chord.chord", "Chord.get", get);
/**
 * Transpose a chord name
 *
 * @param {string} chordName - the chord name
 * @return {string} the transposed chord
 *
 * @example
 * transpose('Dm7', 'P4') // => 'Gm7
 */ function transpose(chordName, interval) {
    const [tonic, type] = tokenize(chordName);
    if (!tonic) return chordName;
    return (0, _core.transpose)(tonic, interval) + type;
}
/**
 * Get all scales where the given chord fits
 *
 * @example
 * chordScales('C7b9')
 * // => ["phrygian dominant", "flamenco", "spanish heptatonic", "half-whole diminished", "chromatic"]
 */ function chordScales(name) {
    const s = get(name);
    const isChordIncluded = (0, _pcset.isSupersetOf)(s.chroma);
    return (0, _scaleType.all)().filter((scale)=>isChordIncluded(scale.chroma)).map((scale)=>scale.name);
}
/**
 * Get all chords names that are a superset of the given one
 * (has the same notes and at least one more)
 *
 * @function
 * @example
 * extended("CMaj7")
 * // => [ 'Cmaj#4', 'Cmaj7#9#11', 'Cmaj9', 'CM7add13', 'Cmaj13', 'Cmaj9#11', 'CM13#11', 'CM7b9' ]
 */ function extended(chordName) {
    const s = get(chordName);
    const isSuperset = (0, _pcset.isSupersetOf)(s.chroma);
    return (0, _chordType.all)().filter((chord)=>isSuperset(chord.chroma)).map((chord)=>s.tonic + chord.aliases[0]);
}
/**
 * Find all chords names that are a subset of the given one
 * (has less notes but all from the given chord)
 *
 * @example
 */ function reduced(chordName) {
    const s = get(chordName);
    const isSubset = (0, _pcset.isSubsetOf)(s.chroma);
    return (0, _chordType.all)().filter((chord)=>isSubset(chord.chroma)).map((chord)=>s.tonic + chord.aliases[0]);
}
var index = {
    getChord,
    get,
    detect: (0, _chordDetect.detect),
    chordScales,
    extended,
    reduced,
    tokenize,
    transpose,
    // deprecate
    chord
};
exports.default = index;

},{"@tonaljs/chord-detect":"caJ2N","@tonaljs/chord-type":"asSVJ","@tonaljs/core":"e6pW0","@tonaljs/pcset":"bTNFe","@tonaljs/scale-type":"frYDK","@parcel/transformer-js/src/esmodule-helpers.js":"kANgE"}],"caJ2N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "detect", ()=>detect);
var _chordType = require("@tonaljs/chord-type");
var _core = require("@tonaljs/core");
var _pcset = require("@tonaljs/pcset");
const namedSet = (notes)=>{
    const pcToName = notes.reduce((record, n)=>{
        const chroma = (0, _core.note)(n).chroma;
        if (chroma !== undefined) record[chroma] = record[chroma] || (0, _core.note)(n).name;
        return record;
    }, {});
    return (chroma)=>pcToName[chroma];
};
function detect(source) {
    const notes = source.map((n)=>(0, _core.note)(n).pc).filter((x)=>x);
    if ((0, _core.note).length === 0) return [];
    const found = findExactMatches(notes, 1);
    return found.filter((chord)=>chord.weight).sort((a, b)=>b.weight - a.weight).map((chord)=>chord.name);
}
function findExactMatches(notes, weight) {
    const tonic = notes[0];
    const tonicChroma = (0, _core.note)(tonic).chroma;
    const noteName = namedSet(notes);
    // we need to test all chormas to get the correct baseNote
    const allModes = (0, _pcset.modes)(notes, false);
    const found = [];
    allModes.forEach((mode, index)=>{
        // some chords could have the same chroma but different interval spelling
        const chordTypes = (0, _chordType.all)().filter((chordType)=>chordType.chroma === mode);
        chordTypes.forEach((chordType)=>{
            const chordName = chordType.aliases[0];
            const baseNote = noteName(index);
            const isInversion = index !== tonicChroma;
            if (isInversion) found.push({
                weight: 0.5 * weight,
                name: `${baseNote}${chordName}/${tonic}`
            });
            else found.push({
                weight: 1 * weight,
                name: `${baseNote}${chordName}`
            });
        });
    });
    return found;
}
var index = {
    detect
};
exports.default = index;

},{"@tonaljs/chord-type":"asSVJ","@tonaljs/core":"e6pW0","@tonaljs/pcset":"bTNFe","@parcel/transformer-js/src/esmodule-helpers.js":"kANgE"}],"asSVJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "add", ()=>add);
parcelHelpers.export(exports, "addAlias", ()=>addAlias);
parcelHelpers.export(exports, "all", ()=>all);
parcelHelpers.export(exports, "chordType", ()=>chordType);
parcelHelpers.export(exports, "entries", ()=>entries);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "keys", ()=>keys);
parcelHelpers.export(exports, "names", ()=>names);
parcelHelpers.export(exports, "removeAll", ()=>removeAll);
parcelHelpers.export(exports, "symbols", ()=>symbols);
var _core = require("@tonaljs/core");
var _pcset = require("@tonaljs/pcset");
/**
 * @private
 * Chord List
 * Source: https://en.wikibooks.org/wiki/Music_Theory/Complete_List_of_Chord_Patterns
 * Format: ["intervals", "full name", "abrv1 abrv2"]
 */ const CHORDS = [
    // ==Major==
    [
        "1P 3M 5P",
        "major",
        "M ^ "
    ],
    [
        "1P 3M 5P 7M",
        "major seventh",
        "maj7 Δ ma7 M7 Maj7 ^7"
    ],
    [
        "1P 3M 5P 7M 9M",
        "major ninth",
        "maj9 Δ9 ^9"
    ],
    [
        "1P 3M 5P 7M 9M 13M",
        "major thirteenth",
        "maj13 Maj13 ^13"
    ],
    [
        "1P 3M 5P 6M",
        "sixth",
        "6 add6 add13 M6"
    ],
    [
        "1P 3M 5P 6M 9M",
        "sixth/ninth",
        "6/9 69 M69"
    ],
    [
        "1P 3M 6m 7M",
        "major seventh flat sixth",
        "M7b6 ^7b6"
    ],
    [
        "1P 3M 5P 7M 11A",
        "major seventh sharp eleventh",
        "maj#4 Δ#4 Δ#11 M7#11 ^7#11 maj7#11"
    ],
    // ==Minor==
    // '''Normal'''
    [
        "1P 3m 5P",
        "minor",
        "m min -"
    ],
    [
        "1P 3m 5P 7m",
        "minor seventh",
        "m7 min7 mi7 -7"
    ],
    [
        "1P 3m 5P 7M",
        "minor/major seventh",
        "m/ma7 m/maj7 mM7 mMaj7 m/M7 -Δ7 mΔ -^7"
    ],
    [
        "1P 3m 5P 6M",
        "minor sixth",
        "m6 -6"
    ],
    [
        "1P 3m 5P 7m 9M",
        "minor ninth",
        "m9 -9"
    ],
    [
        "1P 3m 5P 7M 9M",
        "minor/major ninth",
        "mM9 mMaj9 -^9"
    ],
    [
        "1P 3m 5P 7m 9M 11P",
        "minor eleventh",
        "m11 -11"
    ],
    [
        "1P 3m 5P 7m 9M 13M",
        "minor thirteenth",
        "m13 -13"
    ],
    // '''Diminished'''
    [
        "1P 3m 5d",
        "diminished",
        "dim \xb0 o"
    ],
    [
        "1P 3m 5d 7d",
        "diminished seventh",
        "dim7 \xb07 o7"
    ],
    [
        "1P 3m 5d 7m",
        "half-diminished",
        "m7b5 \xf8 -7b5 h7 h"
    ],
    // ==Dominant/Seventh==
    // '''Normal'''
    [
        "1P 3M 5P 7m",
        "dominant seventh",
        "7 dom"
    ],
    [
        "1P 3M 5P 7m 9M",
        "dominant ninth",
        "9"
    ],
    [
        "1P 3M 5P 7m 9M 13M",
        "dominant thirteenth",
        "13"
    ],
    [
        "1P 3M 5P 7m 11A",
        "lydian dominant seventh",
        "7#11 7#4"
    ],
    // '''Altered'''
    [
        "1P 3M 5P 7m 9m",
        "dominant flat ninth",
        "7b9"
    ],
    [
        "1P 3M 5P 7m 9A",
        "dominant sharp ninth",
        "7#9"
    ],
    [
        "1P 3M 7m 9m",
        "altered",
        "alt7"
    ],
    // '''Suspended'''
    [
        "1P 4P 5P",
        "suspended fourth",
        "sus4 sus"
    ],
    [
        "1P 2M 5P",
        "suspended second",
        "sus2"
    ],
    [
        "1P 4P 5P 7m",
        "suspended fourth seventh",
        "7sus4 7sus"
    ],
    [
        "1P 5P 7m 9M 11P",
        "eleventh",
        "11"
    ],
    [
        "1P 4P 5P 7m 9m",
        "suspended fourth flat ninth",
        "b9sus phryg 7b9sus 7b9sus4"
    ],
    // ==Other==
    [
        "1P 5P",
        "fifth",
        "5"
    ],
    [
        "1P 3M 5A",
        "augmented",
        "aug + +5 ^#5"
    ],
    [
        "1P 3m 5A",
        "minor augmented",
        "m#5 -#5 m+"
    ],
    [
        "1P 3M 5A 7M",
        "augmented seventh",
        "maj7#5 maj7+5 +maj7 ^7#5"
    ],
    [
        "1P 3M 5P 7M 9M 11A",
        "major sharp eleventh (lydian)",
        "maj9#11 Δ9#11 ^9#11"
    ],
    // ==Legacy==
    [
        "1P 2M 4P 5P",
        "",
        "sus24 sus4add9"
    ],
    [
        "1P 3M 5A 7M 9M",
        "",
        "maj9#5 Maj9#5"
    ],
    [
        "1P 3M 5A 7m",
        "",
        "7#5 +7 7+ 7aug aug7"
    ],
    [
        "1P 3M 5A 7m 9A",
        "",
        "7#5#9 7#9#5 7alt"
    ],
    [
        "1P 3M 5A 7m 9M",
        "",
        "9#5 9+"
    ],
    [
        "1P 3M 5A 7m 9M 11A",
        "",
        "9#5#11"
    ],
    [
        "1P 3M 5A 7m 9m",
        "",
        "7#5b9 7b9#5"
    ],
    [
        "1P 3M 5A 7m 9m 11A",
        "",
        "7#5b9#11"
    ],
    [
        "1P 3M 5A 9A",
        "",
        "+add#9"
    ],
    [
        "1P 3M 5A 9M",
        "",
        "M#5add9 +add9"
    ],
    [
        "1P 3M 5P 6M 11A",
        "",
        "M6#11 M6b5 6#11 6b5"
    ],
    [
        "1P 3M 5P 6M 7M 9M",
        "",
        "M7add13"
    ],
    [
        "1P 3M 5P 6M 9M 11A",
        "",
        "69#11"
    ],
    [
        "1P 3m 5P 6M 9M",
        "",
        "m69 -69"
    ],
    [
        "1P 3M 5P 6m 7m",
        "",
        "7b6"
    ],
    [
        "1P 3M 5P 7M 9A 11A",
        "",
        "maj7#9#11"
    ],
    [
        "1P 3M 5P 7M 9M 11A 13M",
        "",
        "M13#11 maj13#11 M13+4 M13#4"
    ],
    [
        "1P 3M 5P 7M 9m",
        "",
        "M7b9"
    ],
    [
        "1P 3M 5P 7m 11A 13m",
        "",
        "7#11b13 7b5b13"
    ],
    [
        "1P 3M 5P 7m 13M",
        "",
        "7add6 67 7add13"
    ],
    [
        "1P 3M 5P 7m 9A 11A",
        "",
        "7#9#11 7b5#9 7#9b5"
    ],
    [
        "1P 3M 5P 7m 9A 11A 13M",
        "",
        "13#9#11"
    ],
    [
        "1P 3M 5P 7m 9A 11A 13m",
        "",
        "7#9#11b13"
    ],
    [
        "1P 3M 5P 7m 9A 13M",
        "",
        "13#9"
    ],
    [
        "1P 3M 5P 7m 9A 13m",
        "",
        "7#9b13"
    ],
    [
        "1P 3M 5P 7m 9M 11A",
        "",
        "9#11 9+4 9#4"
    ],
    [
        "1P 3M 5P 7m 9M 11A 13M",
        "",
        "13#11 13+4 13#4"
    ],
    [
        "1P 3M 5P 7m 9M 11A 13m",
        "",
        "9#11b13 9b5b13"
    ],
    [
        "1P 3M 5P 7m 9m 11A",
        "",
        "7b9#11 7b5b9 7b9b5"
    ],
    [
        "1P 3M 5P 7m 9m 11A 13M",
        "",
        "13b9#11"
    ],
    [
        "1P 3M 5P 7m 9m 11A 13m",
        "",
        "7b9b13#11 7b9#11b13 7b5b9b13"
    ],
    [
        "1P 3M 5P 7m 9m 13M",
        "",
        "13b9"
    ],
    [
        "1P 3M 5P 7m 9m 13m",
        "",
        "7b9b13"
    ],
    [
        "1P 3M 5P 7m 9m 9A",
        "",
        "7b9#9"
    ],
    [
        "1P 3M 5P 9M",
        "",
        "Madd9 2 add9 add2"
    ],
    [
        "1P 3M 5P 9m",
        "",
        "Maddb9"
    ],
    [
        "1P 3M 5d",
        "",
        "Mb5"
    ],
    [
        "1P 3M 5d 6M 7m 9M",
        "",
        "13b5"
    ],
    [
        "1P 3M 5d 7M",
        "",
        "M7b5"
    ],
    [
        "1P 3M 5d 7M 9M",
        "",
        "M9b5"
    ],
    [
        "1P 3M 5d 7m",
        "",
        "7b5"
    ],
    [
        "1P 3M 5d 7m 9M",
        "",
        "9b5"
    ],
    [
        "1P 3M 7m",
        "",
        "7no5"
    ],
    [
        "1P 3M 7m 13m",
        "",
        "7b13"
    ],
    [
        "1P 3M 7m 9M",
        "",
        "9no5"
    ],
    [
        "1P 3M 7m 9M 13M",
        "",
        "13no5"
    ],
    [
        "1P 3M 7m 9M 13m",
        "",
        "9b13"
    ],
    [
        "1P 3m 4P 5P",
        "",
        "madd4"
    ],
    [
        "1P 3m 5P 6m 7M",
        "",
        "mMaj7b6"
    ],
    [
        "1P 3m 5P 6m 7M 9M",
        "",
        "mMaj9b6"
    ],
    [
        "1P 3m 5P 7m 11P",
        "",
        "m7add11 m7add4"
    ],
    [
        "1P 3m 5P 9M",
        "",
        "madd9"
    ],
    [
        "1P 3m 5d 6M 7M",
        "",
        "o7M7"
    ],
    [
        "1P 3m 5d 7M",
        "",
        "oM7"
    ],
    [
        "1P 3m 6m 7M",
        "",
        "mb6M7"
    ],
    [
        "1P 3m 6m 7m",
        "",
        "m7#5"
    ],
    [
        "1P 3m 6m 7m 9M",
        "",
        "m9#5"
    ],
    [
        "1P 3m 5A 7m 9M 11P",
        "",
        "m11A"
    ],
    [
        "1P 3m 6m 9m",
        "",
        "mb6b9"
    ],
    [
        "1P 2M 3m 5d 7m",
        "",
        "m9b5"
    ],
    [
        "1P 4P 5A 7M",
        "",
        "M7#5sus4"
    ],
    [
        "1P 4P 5A 7M 9M",
        "",
        "M9#5sus4"
    ],
    [
        "1P 4P 5A 7m",
        "",
        "7#5sus4"
    ],
    [
        "1P 4P 5P 7M",
        "",
        "M7sus4"
    ],
    [
        "1P 4P 5P 7M 9M",
        "",
        "M9sus4"
    ],
    [
        "1P 4P 5P 7m 9M",
        "",
        "9sus4 9sus"
    ],
    [
        "1P 4P 5P 7m 9M 13M",
        "",
        "13sus4 13sus"
    ],
    [
        "1P 4P 5P 7m 9m 13m",
        "",
        "7sus4b9b13 7b9b13sus4"
    ],
    [
        "1P 4P 7m 10m",
        "",
        "4 quartal"
    ],
    [
        "1P 5P 7m 9m 11P",
        "",
        "11b9"
    ]
];
const NoChordType = {
    ...(0, _pcset.EmptyPcset),
    name: "",
    quality: "Unknown",
    intervals: [],
    aliases: []
};
let dictionary = [];
let index = {};
/**
 * Given a chord name or chroma, return the chord properties
 * @param {string} source - chord name or pitch class set chroma
 * @example
 * import { get } from 'tonaljs/chord-type'
 * get('major') // => { name: 'major', ... }
 */ function get(type) {
    return index[type] || NoChordType;
}
const chordType = (0, _core.deprecate)("ChordType.chordType", "ChordType.get", get);
/**
 * Get all chord (long) names
 */ function names() {
    return dictionary.map((chord)=>chord.name).filter((x)=>x);
}
/**
 * Get all chord symbols
 */ function symbols() {
    return dictionary.map((chord)=>chord.aliases[0]).filter((x)=>x);
}
/**
 * Keys used to reference chord types
 */ function keys() {
    return Object.keys(index);
}
/**
 * Return a list of all chord types
 */ function all() {
    return dictionary.slice();
}
const entries = (0, _core.deprecate)("ChordType.entries", "ChordType.all", all);
/**
 * Clear the dictionary
 */ function removeAll() {
    dictionary = [];
    index = {};
}
/**
 * Add a chord to the dictionary.
 * @param intervals
 * @param aliases
 * @param [fullName]
 */ function add(intervals, aliases, fullName) {
    const quality = getQuality(intervals);
    const chord = {
        ...(0, _pcset.get)(intervals),
        name: fullName || "",
        quality,
        intervals,
        aliases
    };
    dictionary.push(chord);
    if (chord.name) index[chord.name] = chord;
    index[chord.setNum] = chord;
    index[chord.chroma] = chord;
    chord.aliases.forEach((alias)=>addAlias(chord, alias));
}
function addAlias(chord, alias) {
    index[alias] = chord;
}
function getQuality(intervals) {
    const has = (interval)=>intervals.indexOf(interval) !== -1;
    return has("5A") ? "Augmented" : has("3M") ? "Major" : has("5d") ? "Diminished" : has("3m") ? "Minor" : "Unknown";
}
CHORDS.forEach(([ivls, fullName, names])=>add(ivls.split(" "), names.split(" "), fullName));
dictionary.sort((a, b)=>a.setNum - b.setNum);
var index$1 = {
    names,
    symbols,
    get,
    all,
    add,
    removeAll,
    keys,
    // deprecated
    entries,
    chordType
};
exports.default = index$1;

},{"@tonaljs/core":"e6pW0","@tonaljs/pcset":"bTNFe","@parcel/transformer-js/src/esmodule-helpers.js":"kANgE"}],"bTNFe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EmptyPcset", ()=>EmptyPcset);
parcelHelpers.export(exports, "chromaToIntervals", ()=>chromaToIntervals);
parcelHelpers.export(exports, "chromas", ()=>chromas);
parcelHelpers.export(exports, "filter", ()=>filter);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "includes", ()=>includes);
parcelHelpers.export(exports, "isEqual", ()=>isEqual);
parcelHelpers.export(exports, "isNoteIncludedIn", ()=>isNoteIncludedIn);
parcelHelpers.export(exports, "isSubsetOf", ()=>isSubsetOf);
parcelHelpers.export(exports, "isSupersetOf", ()=>isSupersetOf);
parcelHelpers.export(exports, "modes", ()=>modes);
parcelHelpers.export(exports, "pcset", ()=>pcset);
var _collection = require("@tonaljs/collection");
var _core = require("@tonaljs/core");
const EmptyPcset = {
    empty: true,
    name: "",
    setNum: 0,
    chroma: "000000000000",
    normalized: "000000000000",
    intervals: []
};
// UTILITIES
const setNumToChroma = (num)=>Number(num).toString(2);
const chromaToNumber = (chroma)=>parseInt(chroma, 2);
const REGEX = /^[01]{12}$/;
function isChroma(set) {
    return REGEX.test(set);
}
const isPcsetNum = (set)=>typeof set === "number" && set >= 0 && set <= 4095;
const isPcset = (set)=>set && isChroma(set.chroma);
const cache = {
    [EmptyPcset.chroma]: EmptyPcset
};
/**
 * Get the pitch class set of a collection of notes or set number or chroma
 */ function get(src) {
    const chroma = isChroma(src) ? src : isPcsetNum(src) ? setNumToChroma(src) : Array.isArray(src) ? listToChroma(src) : isPcset(src) ? src.chroma : EmptyPcset.chroma;
    return cache[chroma] = cache[chroma] || chromaToPcset(chroma);
}
/**
 * Use Pcset.properties
 * @function
 * @deprecated
 */ const pcset = (0, _core.deprecate)("Pcset.pcset", "Pcset.get", get);
/**
 * Get pitch class set chroma
 * @function
 * @example
 * Pcset.chroma(["c", "d", "e"]); //=> "101010000000"
 */ const chroma = (set)=>get(set).chroma;
/**
 * Get intervals (from C) of a set
 * @function
 * @example
 * Pcset.intervals(["c", "d", "e"]); //=>
 */ const intervals = (set)=>get(set).intervals;
/**
 * Get pitch class set number
 * @function
 * @example
 * Pcset.num(["c", "d", "e"]); //=> 2192
 */ const num = (set)=>get(set).setNum;
const IVLS = [
    "1P",
    "2m",
    "2M",
    "3m",
    "3M",
    "4P",
    "5d",
    "5P",
    "6m",
    "6M",
    "7m",
    "7M"
];
/**
 * @private
 * Get the intervals of a pcset *starting from C*
 * @param {Set} set - the pitch class set
 * @return {IntervalName[]} an array of interval names or an empty array
 * if not a valid pitch class set
 */ function chromaToIntervals(chroma) {
    const intervals = [];
    for(let i = 0; i < 12; i++)// tslint:disable-next-line:curly
    if (chroma.charAt(i) === "1") intervals.push(IVLS[i]);
    return intervals;
}
/**
 * Get a list of all possible pitch class sets (all possible chromas) *having
 * C as root*. There are 2048 different chromas. If you want them with another
 * note you have to transpose it
 *
 * @see http://allthescales.org/
 * @return {Array<PcsetChroma>} an array of possible chromas from '10000000000' to '11111111111'
 */ function chromas() {
    return (0, _collection.range)(2048, 4095).map(setNumToChroma);
}
/**
 * Given a a list of notes or a pcset chroma, produce the rotations
 * of the chroma discarding the ones that starts with "0"
 *
 * This is used, for example, to get all the modes of a scale.
 *
 * @param {Array|string} set - the list of notes or pitchChr of the set
 * @param {boolean} normalize - (Optional, true by default) remove all
 * the rotations that starts with "0"
 * @return {Array<string>} an array with all the modes of the chroma
 *
 * @example
 * Pcset.modes(["C", "D", "E"]).map(Pcset.intervals)
 */ function modes(set, normalize = true) {
    const pcs = get(set);
    const binary = pcs.chroma.split("");
    return (0, _collection.compact)(binary.map((_, i)=>{
        const r = (0, _collection.rotate)(i, binary);
        return normalize && r[0] === "0" ? null : r.join("");
    }));
}
/**
 * Test if two pitch class sets are numentical
 *
 * @param {Array|string} set1 - one of the pitch class sets
 * @param {Array|string} set2 - the other pitch class set
 * @return {boolean} true if they are equal
 * @example
 * Pcset.isEqual(["c2", "d3"], ["c5", "d2"]) // => true
 */ function isEqual(s1, s2) {
    return get(s1).setNum === get(s2).setNum;
}
/**
 * Create a function that test if a collection of notes is a
 * subset of a given set
 *
 * The function is curryfied.
 *
 * @param {PcsetChroma|NoteName[]} set - the superset to test against (chroma or
 * list of notes)
 * @return{function(PcsetChroma|NoteNames[]): boolean} a function accepting a set
 * to test against (chroma or list of notes)
 * @example
 * const inCMajor = Pcset.isSubsetOf(["C", "E", "G"])
 * inCMajor(["e6", "c4"]) // => true
 * inCMajor(["e6", "c4", "d3"]) // => false
 */ function isSubsetOf(set) {
    const s = get(set).setNum;
    return (notes)=>{
        const o = get(notes).setNum;
        // tslint:disable-next-line: no-bitwise
        return s && s !== o && (o & s) === o;
    };
}
/**
 * Create a function that test if a collection of notes is a
 * superset of a given set (it contains all notes and at least one more)
 *
 * @param {Set} set - an array of notes or a chroma set string to test against
 * @return {(subset: Set): boolean} a function that given a set
 * returns true if is a subset of the first one
 * @example
 * const extendsCMajor = Pcset.isSupersetOf(["C", "E", "G"])
 * extendsCMajor(["e6", "a", "c4", "g2"]) // => true
 * extendsCMajor(["c6", "e4", "g3"]) // => false
 */ function isSupersetOf(set) {
    const s = get(set).setNum;
    return (notes)=>{
        const o = get(notes).setNum;
        // tslint:disable-next-line: no-bitwise
        return s && s !== o && (o | s) === o;
    };
}
/**
 * Test if a given pitch class set includes a note
 *
 * @param {Array<string>} set - the base set to test against
 * @param {string} note - the note to test
 * @return {boolean} true if the note is included in the pcset
 *
 * Can be partially applied
 *
 * @example
 * const isNoteInCMajor = isNoteIncludedIn(['C', 'E', 'G'])
 * isNoteInCMajor('C4') // => true
 * isNoteInCMajor('C#4') // => false
 */ function isNoteIncludedIn(set) {
    const s = get(set);
    return (noteName)=>{
        const n = (0, _core.note)(noteName);
        return s && !n.empty && s.chroma.charAt(n.chroma) === "1";
    };
}
/** @deprecated use: isNoteIncludedIn */ const includes = isNoteIncludedIn;
/**
 * Filter a list with a pitch class set
 *
 * @param {Array|string} set - the pitch class set notes
 * @param {Array|string} notes - the note list to be filtered
 * @return {Array} the filtered notes
 *
 * @example
 * Pcset.filter(["C", "D", "E"], ["c2", "c#2", "d2", "c3", "c#3", "d3"]) // => [ "c2", "d2", "c3", "d3" ])
 * Pcset.filter(["C2"], ["c2", "c#2", "d2", "c3", "c#3", "d3"]) // => [ "c2", "c3" ])
 */ function filter(set) {
    const isIncluded = isNoteIncludedIn(set);
    return (notes)=>{
        return notes.filter(isIncluded);
    };
}
var index = {
    get,
    chroma,
    num,
    intervals,
    chromas,
    isSupersetOf,
    isSubsetOf,
    isNoteIncludedIn,
    isEqual,
    filter,
    modes,
    // deprecated
    pcset
};
//// PRIVATE ////
function chromaRotations(chroma) {
    const binary = chroma.split("");
    return binary.map((_, i)=>(0, _collection.rotate)(i, binary).join(""));
}
function chromaToPcset(chroma) {
    const setNum = chromaToNumber(chroma);
    const normalizedNum = chromaRotations(chroma).map(chromaToNumber).filter((n)=>n >= 2048).sort()[0];
    const normalized = setNumToChroma(normalizedNum);
    const intervals = chromaToIntervals(chroma);
    return {
        empty: false,
        name: "",
        setNum,
        chroma,
        normalized,
        intervals
    };
}
function listToChroma(set) {
    if (set.length === 0) return EmptyPcset.chroma;
    let pitch;
    const binary = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ];
    // tslint:disable-next-line:prefer-for-of
    for(let i = 0; i < set.length; i++){
        pitch = (0, _core.note)(set[i]);
        // tslint:disable-next-line: curly
        if (pitch.empty) pitch = (0, _core.interval)(set[i]);
        // tslint:disable-next-line: curly
        if (!pitch.empty) binary[pitch.chroma] = 1;
    }
    return binary.join("");
}
exports.default = index;

},{"@tonaljs/collection":"8KqbI","@tonaljs/core":"e6pW0","@parcel/transformer-js/src/esmodule-helpers.js":"kANgE"}],"8KqbI":[function(require,module,exports) {
// ascending range
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "compact", ()=>compact);
parcelHelpers.export(exports, "permutations", ()=>permutations);
parcelHelpers.export(exports, "range", ()=>range);
parcelHelpers.export(exports, "rotate", ()=>rotate);
parcelHelpers.export(exports, "shuffle", ()=>shuffle);
function ascR(b, n) {
    const a = [];
    // tslint:disable-next-line:curly
    for(; n--; a[n] = n + b);
    return a;
}
// descending range
function descR(b, n) {
    const a = [];
    // tslint:disable-next-line:curly
    for(; n--; a[n] = b - n);
    return a;
}
/**
 * Creates a numeric range
 *
 * @param {number} from
 * @param {number} to
 * @return {Array<number>}
 *
 * @example
 * range(-2, 2) // => [-2, -1, 0, 1, 2]
 * range(2, -2) // => [2, 1, 0, -1, -2]
 */ function range(from, to) {
    return from < to ? ascR(from, to - from + 1) : descR(from, from - to + 1);
}
/**
 * Rotates a list a number of times. It"s completly agnostic about the
 * contents of the list.
 *
 * @param {Integer} times - the number of rotations
 * @param {Array} collection
 * @return {Array} the rotated collection
 *
 * @example
 * rotate(1, [1, 2, 3]) // => [2, 3, 1]
 */ function rotate(times, arr) {
    const len = arr.length;
    const n = (times % len + len) % len;
    return arr.slice(n, len).concat(arr.slice(0, n));
}
/**
 * Return a copy of the collection with the null values removed
 * @function
 * @param {Array} collection
 * @return {Array}
 *
 * @example
 * compact(["a", "b", null, "c"]) // => ["a", "b", "c"]
 */ function compact(arr) {
    return arr.filter((n)=>n === 0 || n);
}
/**
 * Randomizes the order of the specified collection in-place, using the Fisher–Yates shuffle.
 *
 * @function
 * @param {Array} collection
 * @return {Array} the collection shuffled
 *
 * @example
 * shuffle(["C", "D", "E", "F"]) // => [...]
 */ function shuffle(arr, rnd = Math.random) {
    let i;
    let t;
    let m = arr.length;
    while(m){
        i = Math.floor(rnd() * m--);
        t = arr[m];
        arr[m] = arr[i];
        arr[i] = t;
    }
    return arr;
}
/**
 * Get all permutations of an collection
 *
 * @param {Array} collection - the collection
 * @return {Array<Array>} an collection with all the permutations
 * @example
 * permutations(["a", "b", "c"])) // =>
 * [
 *   ["a", "b", "c"],
 *   ["b", "a", "c"],
 *   ["b", "c", "a"],
 *   ["a", "c", "b"],
 *   ["c", "a", "b"],
 *   ["c", "b", "a"]
 * ]
 */ function permutations(arr) {
    if (arr.length === 0) return [
        []
    ];
    return permutations(arr.slice(1)).reduce((acc, perm)=>{
        return acc.concat(arr.map((e, pos)=>{
            const newPerm = perm.slice();
            newPerm.splice(pos, 0, arr[0]);
            return newPerm;
        }));
    }, []);
}
var index = {
    compact,
    permutations,
    range,
    rotate,
    shuffle
};
exports.default = index;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"kANgE"}],"frYDK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NoScaleType", ()=>NoScaleType);
parcelHelpers.export(exports, "add", ()=>add);
parcelHelpers.export(exports, "addAlias", ()=>addAlias);
parcelHelpers.export(exports, "all", ()=>all);
parcelHelpers.export(exports, "entries", ()=>entries);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "keys", ()=>keys);
parcelHelpers.export(exports, "names", ()=>names);
parcelHelpers.export(exports, "removeAll", ()=>removeAll);
parcelHelpers.export(exports, "scaleType", ()=>scaleType);
var _core = require("@tonaljs/core");
var _pcset = require("@tonaljs/pcset");
// SCALES
// Format: ["intervals", "name", "alias1", "alias2", ...]
const SCALES = [
    // 5-note scales
    [
        "1P 2M 3M 5P 6M",
        "major pentatonic",
        "pentatonic"
    ],
    [
        "1P 3M 4P 5P 7M",
        "ionian pentatonic"
    ],
    [
        "1P 3M 4P 5P 7m",
        "mixolydian pentatonic",
        "indian"
    ],
    [
        "1P 2M 4P 5P 6M",
        "ritusen"
    ],
    [
        "1P 2M 4P 5P 7m",
        "egyptian"
    ],
    [
        "1P 3M 4P 5d 7m",
        "neopolitan major pentatonic"
    ],
    [
        "1P 3m 4P 5P 6m",
        "vietnamese 1"
    ],
    [
        "1P 2m 3m 5P 6m",
        "pelog"
    ],
    [
        "1P 2m 4P 5P 6m",
        "kumoijoshi"
    ],
    [
        "1P 2M 3m 5P 6m",
        "hirajoshi"
    ],
    [
        "1P 2m 4P 5d 7m",
        "iwato"
    ],
    [
        "1P 2m 4P 5P 7m",
        "in-sen"
    ],
    [
        "1P 3M 4A 5P 7M",
        "lydian pentatonic",
        "chinese"
    ],
    [
        "1P 3m 4P 6m 7m",
        "malkos raga"
    ],
    [
        "1P 3m 4P 5d 7m",
        "locrian pentatonic",
        "minor seven flat five pentatonic"
    ],
    [
        "1P 3m 4P 5P 7m",
        "minor pentatonic",
        "vietnamese 2"
    ],
    [
        "1P 3m 4P 5P 6M",
        "minor six pentatonic"
    ],
    [
        "1P 2M 3m 5P 6M",
        "flat three pentatonic",
        "kumoi"
    ],
    [
        "1P 2M 3M 5P 6m",
        "flat six pentatonic"
    ],
    [
        "1P 2m 3M 5P 6M",
        "scriabin"
    ],
    [
        "1P 3M 5d 6m 7m",
        "whole tone pentatonic"
    ],
    [
        "1P 3M 4A 5A 7M",
        "lydian #5P pentatonic"
    ],
    [
        "1P 3M 4A 5P 7m",
        "lydian dominant pentatonic"
    ],
    [
        "1P 3m 4P 5P 7M",
        "minor #7M pentatonic"
    ],
    [
        "1P 3m 4d 5d 7m",
        "super locrian pentatonic"
    ],
    // 6-note scales
    [
        "1P 2M 3m 4P 5P 7M",
        "minor hexatonic"
    ],
    [
        "1P 2A 3M 5P 5A 7M",
        "augmented"
    ],
    [
        "1P 2M 3m 3M 5P 6M",
        "major blues"
    ],
    [
        "1P 2M 4P 5P 6M 7m",
        "piongio"
    ],
    [
        "1P 2m 3M 4A 6M 7m",
        "prometheus neopolitan"
    ],
    [
        "1P 2M 3M 4A 6M 7m",
        "prometheus"
    ],
    [
        "1P 2m 3M 5d 6m 7m",
        "mystery #1"
    ],
    [
        "1P 2m 3M 4P 5A 6M",
        "six tone symmetric"
    ],
    [
        "1P 2M 3M 4A 5A 7m",
        "whole tone",
        "messiaen's mode #1"
    ],
    [
        "1P 2m 4P 4A 5P 7M",
        "messiaen's mode #5"
    ],
    [
        "1P 3m 4P 5d 5P 7m",
        "minor blues",
        "blues"
    ],
    // 7-note scales
    [
        "1P 2M 3M 4P 5d 6m 7m",
        "locrian major",
        "arabian"
    ],
    [
        "1P 2m 3M 4A 5P 6m 7M",
        "double harmonic lydian"
    ],
    [
        "1P 2M 3m 4P 5P 6m 7M",
        "harmonic minor"
    ],
    [
        "1P 2m 3m 4d 5d 6m 7m",
        "altered",
        "super locrian",
        "diminished whole tone",
        "pomeroy"
    ],
    [
        "1P 2M 3m 4P 5d 6m 7m",
        "locrian #2",
        "half-diminished",
        "aeolian b5"
    ],
    [
        "1P 2M 3M 4P 5P 6m 7m",
        "mixolydian b6",
        "melodic minor fifth mode",
        "hindu"
    ],
    [
        "1P 2M 3M 4A 5P 6M 7m",
        "lydian dominant",
        "lydian b7",
        "overtone"
    ],
    [
        "1P 2M 3M 4A 5P 6M 7M",
        "lydian"
    ],
    [
        "1P 2M 3M 4A 5A 6M 7M",
        "lydian augmented"
    ],
    [
        "1P 2m 3m 4P 5P 6M 7m",
        "dorian b2",
        "phrygian #6",
        "melodic minor second mode"
    ],
    [
        "1P 2M 3m 4P 5P 6M 7M",
        "melodic minor"
    ],
    [
        "1P 2m 3m 4P 5d 6m 7m",
        "locrian"
    ],
    [
        "1P 2m 3m 4d 5d 6m 7d",
        "ultralocrian",
        "superlocrian bb7",
        "\xb7superlocrian diminished"
    ],
    [
        "1P 2m 3m 4P 5d 6M 7m",
        "locrian 6",
        "locrian natural 6",
        "locrian sharp 6"
    ],
    [
        "1P 2A 3M 4P 5P 5A 7M",
        "augmented heptatonic"
    ],
    [
        "1P 2M 3m 5d 5P 6M 7m",
        "romanian minor"
    ],
    [
        "1P 2M 3m 4A 5P 6M 7m",
        "dorian #4"
    ],
    [
        "1P 2M 3m 4A 5P 6M 7M",
        "lydian diminished"
    ],
    [
        "1P 2m 3m 4P 5P 6m 7m",
        "phrygian"
    ],
    [
        "1P 2M 3M 4A 5A 7m 7M",
        "leading whole tone"
    ],
    [
        "1P 2M 3M 4A 5P 6m 7m",
        "lydian minor"
    ],
    [
        "1P 2m 3M 4P 5P 6m 7m",
        "phrygian dominant",
        "spanish",
        "phrygian major"
    ],
    [
        "1P 2m 3m 4P 5P 6m 7M",
        "balinese"
    ],
    [
        "1P 2m 3m 4P 5P 6M 7M",
        "neopolitan major"
    ],
    [
        "1P 2M 3m 4P 5P 6m 7m",
        "aeolian",
        "minor"
    ],
    [
        "1P 2M 3M 4P 5P 6m 7M",
        "harmonic major"
    ],
    [
        "1P 2m 3M 4P 5P 6m 7M",
        "double harmonic major",
        "gypsy"
    ],
    [
        "1P 2M 3m 4P 5P 6M 7m",
        "dorian"
    ],
    [
        "1P 2M 3m 4A 5P 6m 7M",
        "hungarian minor"
    ],
    [
        "1P 2A 3M 4A 5P 6M 7m",
        "hungarian major"
    ],
    [
        "1P 2m 3M 4P 5d 6M 7m",
        "oriental"
    ],
    [
        "1P 2m 3m 3M 4A 5P 7m",
        "flamenco"
    ],
    [
        "1P 2m 3m 4A 5P 6m 7M",
        "todi raga"
    ],
    [
        "1P 2M 3M 4P 5P 6M 7m",
        "mixolydian",
        "dominant"
    ],
    [
        "1P 2m 3M 4P 5d 6m 7M",
        "persian"
    ],
    [
        "1P 2M 3M 4P 5P 6M 7M",
        "major",
        "ionian"
    ],
    [
        "1P 2m 3M 5d 6m 7m 7M",
        "enigmatic"
    ],
    [
        "1P 2M 3M 4P 5A 6M 7M",
        "major augmented",
        "major #5",
        "ionian augmented",
        "ionian #5"
    ],
    [
        "1P 2A 3M 4A 5P 6M 7M",
        "lydian #9"
    ],
    // 8-note scales
    [
        "1P 2m 2M 4P 4A 5P 6m 7M",
        "messiaen's mode #4"
    ],
    [
        "1P 2m 3M 4P 4A 5P 6m 7M",
        "purvi raga"
    ],
    [
        "1P 2m 3m 3M 4P 5P 6m 7m",
        "spanish heptatonic"
    ],
    [
        "1P 2M 3M 4P 5P 6M 7m 7M",
        "bebop"
    ],
    [
        "1P 2M 3m 3M 4P 5P 6M 7m",
        "bebop minor"
    ],
    [
        "1P 2M 3M 4P 5P 5A 6M 7M",
        "bebop major"
    ],
    [
        "1P 2m 3m 4P 5d 5P 6m 7m",
        "bebop locrian"
    ],
    [
        "1P 2M 3m 4P 5P 6m 7m 7M",
        "minor bebop"
    ],
    [
        "1P 2M 3m 4P 5d 6m 6M 7M",
        "diminished",
        "whole-half diminished"
    ],
    [
        "1P 2M 3M 4P 5d 5P 6M 7M",
        "ichikosucho"
    ],
    [
        "1P 2M 3m 4P 5P 6m 6M 7M",
        "minor six diminished"
    ],
    [
        "1P 2m 3m 3M 4A 5P 6M 7m",
        "half-whole diminished",
        "dominant diminished",
        "messiaen's mode #2"
    ],
    [
        "1P 3m 3M 4P 5P 6M 7m 7M",
        "kafi raga"
    ],
    [
        "1P 2M 3M 4P 4A 5A 6A 7M",
        "messiaen's mode #6"
    ],
    // 9-note scales
    [
        "1P 2M 3m 3M 4P 5d 5P 6M 7m",
        "composite blues"
    ],
    [
        "1P 2M 3m 3M 4A 5P 6m 7m 7M",
        "messiaen's mode #3"
    ],
    // 10-note scales
    [
        "1P 2m 2M 3m 4P 4A 5P 6m 6M 7M",
        "messiaen's mode #7"
    ],
    // 12-note scales
    [
        "1P 2m 2M 3m 3M 4P 5d 5P 6m 6M 7m 7M",
        "chromatic"
    ]
];
const NoScaleType = {
    ...(0, _pcset.EmptyPcset),
    intervals: [],
    aliases: []
};
let dictionary = [];
let index = {};
function names() {
    return dictionary.map((scale)=>scale.name);
}
/**
 * Given a scale name or chroma, return the scale properties
 *
 * @param {string} type - scale name or pitch class set chroma
 * @example
 * import { get } from 'tonaljs/scale-type'
 * get('major') // => { name: 'major', ... }
 */ function get(type) {
    return index[type] || NoScaleType;
}
const scaleType = (0, _core.deprecate)("ScaleDictionary.scaleType", "ScaleType.get", get);
/**
 * Return a list of all scale types
 */ function all() {
    return dictionary.slice();
}
const entries = (0, _core.deprecate)("ScaleDictionary.entries", "ScaleType.all", all);
/**
 * Keys used to reference scale types
 */ function keys() {
    return Object.keys(index);
}
/**
 * Clear the dictionary
 */ function removeAll() {
    dictionary = [];
    index = {};
}
/**
 * Add a scale into dictionary
 * @param intervals
 * @param name
 * @param aliases
 */ function add(intervals, name, aliases = []) {
    const scale = {
        ...(0, _pcset.get)(intervals),
        name,
        intervals,
        aliases
    };
    dictionary.push(scale);
    index[scale.name] = scale;
    index[scale.setNum] = scale;
    index[scale.chroma] = scale;
    scale.aliases.forEach((alias)=>addAlias(scale, alias));
    return scale;
}
function addAlias(scale, alias) {
    index[alias] = scale;
}
SCALES.forEach(([ivls, name, ...aliases])=>add(ivls.split(" "), name, aliases));
var index$1 = {
    names,
    get,
    all,
    add,
    removeAll,
    keys,
    // deprecated
    entries,
    scaleType
};
exports.default = index$1;

},{"@tonaljs/core":"e6pW0","@tonaljs/pcset":"bTNFe","@parcel/transformer-js/src/esmodule-helpers.js":"kANgE"}],"6z4EQ":[function(require,module,exports) {
// source: https://en.wikipedia.org/wiki/Note_value
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fraction", ()=>fraction);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "names", ()=>names);
parcelHelpers.export(exports, "shorthands", ()=>shorthands);
parcelHelpers.export(exports, "value", ()=>value);
const DATA = [
    [
        0.125,
        "dl",
        [
            "large",
            "duplex longa",
            "maxima",
            "octuple",
            "octuple whole"
        ]
    ],
    [
        0.25,
        "l",
        [
            "long",
            "longa"
        ]
    ],
    [
        0.5,
        "d",
        [
            "double whole",
            "double",
            "breve"
        ]
    ],
    [
        1,
        "w",
        [
            "whole",
            "semibreve"
        ]
    ],
    [
        2,
        "h",
        [
            "half",
            "minim"
        ]
    ],
    [
        4,
        "q",
        [
            "quarter",
            "crotchet"
        ]
    ],
    [
        8,
        "e",
        [
            "eighth",
            "quaver"
        ]
    ],
    [
        16,
        "s",
        [
            "sixteenth",
            "semiquaver"
        ]
    ],
    [
        32,
        "t",
        [
            "thirty-second",
            "demisemiquaver"
        ]
    ],
    [
        64,
        "sf",
        [
            "sixty-fourth",
            "hemidemisemiquaver"
        ]
    ],
    [
        128,
        "h",
        [
            "hundred twenty-eighth"
        ]
    ],
    [
        256,
        "th",
        [
            "two hundred fifty-sixth"
        ]
    ]
];
const VALUES = [];
DATA.forEach(([denominator, shorthand, names])=>add(denominator, shorthand, names));
const NoDuration = {
    empty: true,
    name: "",
    value: 0,
    fraction: [
        0,
        0
    ],
    shorthand: "",
    dots: "",
    names: []
};
function names() {
    return VALUES.reduce((names, duration)=>{
        duration.names.forEach((name)=>names.push(name));
        return names;
    }, []);
}
function shorthands() {
    return VALUES.map((dur)=>dur.shorthand);
}
const REGEX = /^([^.]+)(\.*)$/;
function get(name) {
    const [_, simple, dots] = REGEX.exec(name) || [];
    const base = VALUES.find((dur)=>dur.shorthand === simple || dur.names.includes(simple));
    if (!base) return NoDuration;
    const fraction = calcDots(base.fraction, dots.length);
    const value = fraction[0] / fraction[1];
    return {
        ...base,
        name,
        dots,
        value,
        fraction
    };
}
const value = (name)=>get(name).value;
const fraction = (name)=>get(name).fraction;
var index = {
    names,
    shorthands,
    get,
    value,
    fraction
};
//// PRIVATE ////
function add(denominator, shorthand, names) {
    VALUES.push({
        empty: false,
        dots: "",
        name: "",
        value: 1 / denominator,
        fraction: denominator < 1 ? [
            1 / denominator,
            1
        ] : [
            1,
            denominator
        ],
        shorthand,
        names
    });
}
function calcDots(fraction, dots) {
    const pow = Math.pow(2, dots);
    let numerator = fraction[0] * pow;
    let denominator = fraction[1] * pow;
    const base = numerator;
    // add fractions
    for(let i = 0; i < dots; i++)numerator += base / Math.pow(2, i + 1);
    // simplify
    while(numerator % 2 === 0 && denominator % 2 === 0){
        numerator /= 2;
        denominator /= 2;
    }
    return [
        numerator,
        denominator
    ];
}
exports.default = index;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"kANgE"}],"gihyZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "add", ()=>add);
parcelHelpers.export(exports, "addTo", ()=>addTo);
parcelHelpers.export(exports, "distance", ()=>distance);
parcelHelpers.export(exports, "fromSemitones", ()=>fromSemitones);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "invert", ()=>invert);
parcelHelpers.export(exports, "name", ()=>name);
parcelHelpers.export(exports, "names", ()=>names);
parcelHelpers.export(exports, "num", ()=>num);
parcelHelpers.export(exports, "quality", ()=>quality);
parcelHelpers.export(exports, "semitones", ()=>semitones);
parcelHelpers.export(exports, "simplify", ()=>simplify);
parcelHelpers.export(exports, "substract", ()=>substract);
var _core = require("@tonaljs/core");
/**
 * Get the natural list of names
 */ function names() {
    return "1P 2M 3M 4P 5P 6m 7m".split(" ");
}
/**
 * Get properties of an interval
 *
 * @function
 * @example
 * Interval.get('P4') // => {"alt": 0,  "dir": 1,  "name": "4P", "num": 4, "oct": 0, "q": "P", "semitones": 5, "simple": 4, "step": 3, "type": "perfectable"}
 */ const get = (0, _core.interval);
/**
 * Get name of an interval
 *
 * @function
 * @example
 * Interval.name('4P') // => "4P"
 * Interval.name('P4') // => "4P"
 * Interval.name('C4') // => ""
 */ const name = (name)=>(0, _core.interval)(name).name;
/**
 * Get semitones of an interval
 * @function
 * @example
 * Interval.semitones('P4') // => 5
 */ const semitones = (name)=>(0, _core.interval)(name).semitones;
/**
 * Get quality of an interval
 * @function
 * @example
 * Interval.quality('P4') // => "P"
 */ const quality = (name)=>(0, _core.interval)(name).q;
/**
 * Get number of an interval
 * @function
 * @example
 * Interval.num('P4') // => 4
 */ const num = (name)=>(0, _core.interval)(name).num;
/**
 * Get the simplified version of an interval.
 *
 * @function
 * @param {string} interval - the interval to simplify
 * @return {string} the simplified interval
 *
 * @example
 * Interval.simplify("9M") // => "2M"
 * Interval.simplify("2M") // => "2M"
 * Interval.simplify("-2M") // => "7m"
 * ["8P", "9M", "10M", "11P", "12P", "13M", "14M", "15P"].map(Interval.simplify)
 * // => [ "8P", "2M", "3M", "4P", "5P", "6M", "7M", "8P" ]
 */ function simplify(name) {
    const i = (0, _core.interval)(name);
    return i.empty ? "" : i.simple + i.q;
}
/**
 * Get the inversion (https://en.wikipedia.org/wiki/Inversion_(music)#Intervals)
 * of an interval.
 *
 * @function
 * @param {string} interval - the interval to invert in interval shorthand
 * notation or interval array notation
 * @return {string} the inverted interval
 *
 * @example
 * Interval.invert("3m") // => "6M"
 * Interval.invert("2M") // => "7m"
 */ function invert(name) {
    const i = (0, _core.interval)(name);
    if (i.empty) return "";
    const step = (7 - i.step) % 7;
    const alt = i.type === "perfectable" ? -i.alt : -(i.alt + 1);
    return (0, _core.interval)({
        step,
        alt,
        oct: i.oct,
        dir: i.dir
    }).name;
}
// interval numbers
const IN = [
    1,
    2,
    2,
    3,
    3,
    4,
    5,
    5,
    6,
    6,
    7,
    7
];
// interval qualities
const IQ = "P m M m M P d P m M m M".split(" ");
/**
 * Get interval name from semitones number. Since there are several interval
 * names for the same number, the name it's arbitrary, but deterministic.
 *
 * @param {Integer} num - the number of semitones (can be negative)
 * @return {string} the interval name
 * @example
 * Interval.fromSemitones(7) // => "5P"
 * Interval.fromSemitones(-7) // => "-5P"
 */ function fromSemitones(semitones) {
    const d = semitones < 0 ? -1 : 1;
    const n = Math.abs(semitones);
    const c = n % 12;
    const o = Math.floor(n / 12);
    return d * (IN[c] + 7 * o) + IQ[c];
}
/**
 * Find interval between two notes
 *
 * @example
 * Interval.distance("C4", "G4"); // => "5P"
 */ const distance = (0, _core.distance);
/**
 * Adds two intervals
 *
 * @function
 * @param {string} interval1
 * @param {string} interval2
 * @return {string} the added interval name
 * @example
 * Interval.add("3m", "5P") // => "7m"
 */ const add = combinator((a, b)=>[
        a[0] + b[0],
        a[1] + b[1]
    ]);
/**
 * Returns a function that adds an interval
 *
 * @function
 * @example
 * ['1P', '2M', '3M'].map(Interval.addTo('5P')) // => ["5P", "6M", "7M"]
 */ const addTo = (interval)=>(other)=>add(interval, other);
/**
 * Subtracts two intervals
 *
 * @function
 * @param {string} minuendInterval
 * @param {string} subtrahendInterval
 * @return {string} the substracted interval name
 * @example
 * Interval.substract('5P', '3M') // => '3m'
 * Interval.substract('3M', '5P') // => '-3m'
 */ const substract = combinator((a, b)=>[
        a[0] - b[0],
        a[1] - b[1]
    ]);
var index = {
    names,
    get,
    name,
    num,
    semitones,
    quality,
    fromSemitones,
    distance,
    invert,
    simplify,
    add,
    addTo,
    substract
};
function combinator(fn) {
    return (a, b)=>{
        const coordA = (0, _core.interval)(a).coord;
        const coordB = (0, _core.interval)(b).coord;
        if (coordA && coordB) {
            const coord = fn(coordA, coordB);
            return (0, _core.coordToInterval)(coord).name;
        }
    };
}
exports.default = index;

},{"@tonaljs/core":"e6pW0","@parcel/transformer-js/src/esmodule-helpers.js":"kANgE"}],"8lW9p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "majorKey", ()=>majorKey);
parcelHelpers.export(exports, "majorTonicFromKeySignature", ()=>majorTonicFromKeySignature);
parcelHelpers.export(exports, "minorKey", ()=>minorKey);
var _core = require("@tonaljs/core");
var _note = require("@tonaljs/note");
var _romanNumeral = require("@tonaljs/roman-numeral");
const mapToScale = (scale)=>(symbols, sep = "")=>symbols.map((symbol, index)=>symbol !== "-" ? scale[index] + sep + symbol : "");
function keyScale(gradesLiteral, chordsLiteral, hfLiteral, chordScalesLiteral) {
    return (tonic)=>{
        const grades = gradesLiteral.split(" ");
        const intervals = grades.map((gr)=>(0, _romanNumeral.get)(gr).interval || "");
        const scale = intervals.map((interval)=>(0, _core.transpose)(tonic, interval));
        const map = mapToScale(scale);
        return {
            tonic,
            grades,
            intervals,
            scale,
            chords: map(chordsLiteral.split(" ")),
            chordsHarmonicFunction: hfLiteral.split(" "),
            chordScales: map(chordScalesLiteral.split(","), " ")
        };
    };
}
const distInFifths = (from, to)=>{
    const f = (0, _core.note)(from);
    const t = (0, _core.note)(to);
    return f.empty || t.empty ? 0 : t.coord[0] - f.coord[0];
};
const MajorScale = keyScale("I II III IV V VI VII", "maj7 m7 m7 maj7 7 m7 m7b5", "T SD T SD D T D", "major,dorian,phrygian,lydian,mixolydian,minor,locrian");
const NaturalScale = keyScale("I II bIII IV V bVI bVII", "m7 m7b5 maj7 m7 m7 maj7 7", "T SD T SD D SD SD", "minor,locrian,major,dorian,phrygian,lydian,mixolydian");
const HarmonicScale = keyScale("I II bIII IV V bVI VII", "mmaj7 m7b5 +maj7 m7 7 maj7 mo7", "T SD T SD D SD D", "harmonic minor,locrian 6,major augmented,lydian diminished,phrygian dominant,lydian #9,ultralocrian");
const MelodicScale = keyScale("I II bIII IV V VI VII", "m6 m7 +maj7 7 7 m7b5 m7b5", "T SD T SD D - -", "melodic minor,dorian b2,lydian augmented,lydian dominant,mixolydian b6,locrian #2,altered");
/**
 * Get a major key properties in a given tonic
 * @param tonic
 */ function majorKey(tonic) {
    const keyScale = MajorScale(tonic);
    const alteration = distInFifths("C", tonic);
    const map = mapToScale(keyScale.scale);
    return {
        ...keyScale,
        type: "major",
        minorRelative: (0, _core.transpose)(tonic, "-3m"),
        alteration,
        keySignature: (0, _core.altToAcc)(alteration),
        secondaryDominants: map("- VI7 VII7 I7 II7 III7 -".split(" ")),
        secondaryDominantsMinorRelative: map("- IIIm7b5 IV#m7 Vm7 VIm7 VIIm7b5 -".split(" ")),
        substituteDominants: map("- bIII7 IV7 bV7 bVI7 bVII7 -".split(" ")),
        substituteDominantsMinorRelative: map("- IIIm7 Im7 IIbm7 VIm7 IVm7 -".split(" "))
    };
}
/**
 * Get minor key properties in a given tonic
 * @param tonic
 */ function minorKey(tonic) {
    const alteration = distInFifths("C", tonic) - 3;
    return {
        type: "minor",
        tonic,
        relativeMajor: (0, _core.transpose)(tonic, "3m"),
        alteration,
        keySignature: (0, _core.altToAcc)(alteration),
        natural: NaturalScale(tonic),
        harmonic: HarmonicScale(tonic),
        melodic: MelodicScale(tonic)
    };
}
/**
 * Given a key signature, returns the tonic of the major key
 * @param sigature
 * @example
 * majorTonicFromKeySignature('###') // => 'A'
 */ function majorTonicFromKeySignature(sig) {
    if (typeof sig === "number") return (0, _note.transposeFifths)("C", sig);
    else if (typeof sig === "string" && /^b+|#+$/.test(sig)) return (0, _note.transposeFifths)("C", (0, _core.accToAlt)(sig));
    return null;
}
var index = {
    majorKey,
    majorTonicFromKeySignature,
    minorKey
};
exports.default = index;

},{"@tonaljs/core":"e6pW0","@tonaljs/note":"l93bX","@tonaljs/roman-numeral":"jEY9W","@parcel/transformer-js/src/esmodule-helpers.js":"kANgE"}],"l93bX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "accidentals", ()=>accidentals);
parcelHelpers.export(exports, "ascending", ()=>ascending);
parcelHelpers.export(exports, "chroma", ()=>chroma);
parcelHelpers.export(exports, "descending", ()=>descending);
parcelHelpers.export(exports, "enharmonic", ()=>enharmonic);
parcelHelpers.export(exports, "freq", ()=>freq);
parcelHelpers.export(exports, "fromFreq", ()=>fromFreq);
parcelHelpers.export(exports, "fromFreqSharps", ()=>fromFreqSharps);
parcelHelpers.export(exports, "fromMidi", ()=>fromMidi);
parcelHelpers.export(exports, "fromMidiSharps", ()=>fromMidiSharps);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "midi", ()=>midi);
parcelHelpers.export(exports, "name", ()=>name);
parcelHelpers.export(exports, "names", ()=>names);
parcelHelpers.export(exports, "octave", ()=>octave);
parcelHelpers.export(exports, "pitchClass", ()=>pitchClass);
parcelHelpers.export(exports, "simplify", ()=>simplify);
parcelHelpers.export(exports, "sortedNames", ()=>sortedNames);
parcelHelpers.export(exports, "sortedUniqNames", ()=>sortedUniqNames);
parcelHelpers.export(exports, "tr", ()=>tr);
parcelHelpers.export(exports, "trBy", ()=>trBy);
parcelHelpers.export(exports, "trFifths", ()=>trFifths);
parcelHelpers.export(exports, "trFrom", ()=>trFrom);
parcelHelpers.export(exports, "transpose", ()=>transpose);
parcelHelpers.export(exports, "transposeBy", ()=>transposeBy);
parcelHelpers.export(exports, "transposeFifths", ()=>transposeFifths);
parcelHelpers.export(exports, "transposeFrom", ()=>transposeFrom);
var _core = require("@tonaljs/core");
var _midi = require("@tonaljs/midi");
const NAMES = [
    "C",
    "D",
    "E",
    "F",
    "G",
    "A",
    "B"
];
const toName = (n)=>n.name;
const onlyNotes = (array)=>array.map((0, _core.note)).filter((n)=>!n.empty);
/**
 * Return the natural note names without octave
 * @function
 * @example
 * Note.names(); // => ["C", "D", "E", "F", "G", "A", "B"]
 */ function names(array) {
    if (array === undefined) return NAMES.slice();
    else if (!Array.isArray(array)) return [];
    else return onlyNotes(array).map(toName);
}
/**
 * Get a note from a note name
 *
 * @function
 * @example
 * Note.get('Bb4') // => { name: "Bb4", midi: 70, chroma: 10, ... }
 */ const get = (0, _core.note);
/**
 * Get the note name
 * @function
 */ const name = (note)=>get(note).name;
/**
 * Get the note pitch class name
 * @function
 */ const pitchClass = (note)=>get(note).pc;
/**
 * Get the note accidentals
 * @function
 */ const accidentals = (note)=>get(note).acc;
/**
 * Get the note octave
 * @function
 */ const octave = (note)=>get(note).oct;
/**
 * Get the note midi
 * @function
 */ const midi = (note)=>get(note).midi;
/**
 * Get the note midi
 * @function
 */ const freq = (note)=>get(note).freq;
/**
 * Get the note chroma
 * @function
 */ const chroma = (note)=>get(note).chroma;
/**
 * Given a midi number, returns a note name. Uses flats for altered notes.
 *
 * @function
 * @param {number} midi - the midi note number
 * @return {string} the note name
 * @example
 * Note.fromMidi(61) // => "Db4"
 * Note.fromMidi(61.7) // => "D4"
 */ function fromMidi(midi) {
    return (0, _midi.midiToNoteName)(midi);
}
/**
 * Given a midi number, returns a note name. Uses flats for altered notes.
 */ function fromFreq(freq) {
    return (0, _midi.midiToNoteName)((0, _midi.freqToMidi)(freq));
}
/**
 * Given a midi number, returns a note name. Uses flats for altered notes.
 */ function fromFreqSharps(freq) {
    return (0, _midi.midiToNoteName)((0, _midi.freqToMidi)(freq), {
        sharps: true
    });
}
/**
 * Given a midi number, returns a note name. Uses flats for altered notes.
 *
 * @function
 * @param {number} midi - the midi note number
 * @return {string} the note name
 * @example
 * Note.fromMidiSharps(61) // => "C#4"
 */ function fromMidiSharps(midi) {
    return (0, _midi.midiToNoteName)(midi, {
        sharps: true
    });
}
/**
 * Transpose a note by an interval
 */ const transpose = (0, _core.transpose);
const tr = (0, _core.transpose);
/**
 * Transpose by an interval.
 * @function
 * @param {string} interval
 * @return {function} a function that transposes by the given interval
 * @example
 * ["C", "D", "E"].map(Note.transposeBy("5P"));
 * // => ["G", "A", "B"]
 */ const transposeBy = (interval)=>(note)=>transpose(note, interval);
const trBy = transposeBy;
/**
 * Transpose from a note
 * @function
 * @param {string} note
 * @return {function}  a function that transposes the the note by an interval
 * ["1P", "3M", "5P"].map(Note.transposeFrom("C"));
 * // => ["C", "E", "G"]
 */ const transposeFrom = (note)=>(interval)=>transpose(note, interval);
const trFrom = transposeFrom;
/**
 * Transpose a note by a number of perfect fifths.
 *
 * @function
 * @param {string} note - the note name
 * @param {number} fifhts - the number of fifths
 * @return {string} the transposed note name
 *
 * @example
 * import { transposeFifths } from "@tonaljs/note"
 * transposeFifths("G4", 1) // => "D"
 * [0, 1, 2, 3, 4].map(fifths => transposeFifths("C", fifths)) // => ["C", "G", "D", "A", "E"]
 */ function transposeFifths(noteName, fifths) {
    const note = get(noteName);
    if (note.empty) return "";
    const [nFifths, nOcts] = note.coord;
    const transposed = nOcts === undefined ? (0, _core.coordToNote)([
        nFifths + fifths
    ]) : (0, _core.coordToNote)([
        nFifths + fifths,
        nOcts
    ]);
    return transposed.name;
}
const trFifths = transposeFifths;
const ascending = (a, b)=>a.height - b.height;
const descending = (a, b)=>b.height - a.height;
function sortedNames(notes, comparator) {
    comparator = comparator || ascending;
    return onlyNotes(notes).sort(comparator).map(toName);
}
function sortedUniqNames(notes) {
    return sortedNames(notes, ascending).filter((n, i, a)=>i === 0 || n !== a[i - 1]);
}
/**
 * Simplify a note
 *
 * @function
 * @param {string} note - the note to be simplified
 * - sameAccType: default true. Use same kind of accidentals that source
 * @return {string} the simplified note or '' if not valid note
 * @example
 * simplify("C##") // => "D"
 * simplify("C###") // => "D#"
 * simplify("C###")
 * simplify("B#4") // => "C5"
 */ const simplify = nameBuilder(true);
/**
 * Get enharmonic of a note
 *
 * @function
 * @param {string} note
 * @return {string} the enharmonic note or '' if not valid note
 * @example
 * Note.enharmonic("Db") // => "C#"
 * Note.enharmonic("C") // => "C"
 */ const enharmonic = nameBuilder(false);
function nameBuilder(sameAccidentals) {
    return (noteName)=>{
        const note = get(noteName);
        if (note.empty) return "";
        const sharps = sameAccidentals ? note.alt > 0 : note.alt < 0;
        const pitchClass = note.midi === null;
        return (0, _midi.midiToNoteName)(note.midi || note.chroma, {
            sharps,
            pitchClass
        });
    };
}
var index = {
    names,
    get,
    name,
    pitchClass,
    accidentals,
    octave,
    midi,
    ascending,
    descending,
    sortedNames,
    sortedUniqNames,
    fromMidi,
    fromMidiSharps,
    freq,
    fromFreq,
    fromFreqSharps,
    chroma,
    transpose,
    tr,
    transposeBy,
    trBy,
    transposeFrom,
    trFrom,
    transposeFifths,
    trFifths,
    simplify,
    enharmonic
};
exports.default = index;

},{"@tonaljs/core":"e6pW0","@tonaljs/midi":"4PEvd","@parcel/transformer-js/src/esmodule-helpers.js":"kANgE"}],"4PEvd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "freqToMidi", ()=>freqToMidi);
parcelHelpers.export(exports, "isMidi", ()=>isMidi);
parcelHelpers.export(exports, "midiToFreq", ()=>midiToFreq);
parcelHelpers.export(exports, "midiToNoteName", ()=>midiToNoteName);
parcelHelpers.export(exports, "toMidi", ()=>toMidi);
var _core = require("@tonaljs/core");
function isMidi(arg) {
    return +arg >= 0 && +arg <= 127;
}
/**
 * Get the note midi number (a number between 0 and 127)
 *
 * It returns undefined if not valid note name
 *
 * @function
 * @param {string|number} note - the note name or midi number
 * @return {Integer} the midi number or undefined if not valid note
 * @example
 * import { toMidi } from '@tonaljs/midi'
 * toMidi("C4") // => 60
 * toMidi(60) // => 60
 * toMidi('60') // => 60
 */ function toMidi(note$1) {
    if (isMidi(note$1)) return +note$1;
    const n = (0, _core.note)(note$1);
    return n.empty ? null : n.midi;
}
/**
 * Get the frequency in hertzs from midi number
 *
 * @param {number} midi - the note midi number
 * @param {number} [tuning = 440] - A4 tuning frequency in Hz (440 by default)
 * @return {number} the frequency or null if not valid note midi
 * @example
 * import { midiToFreq} from '@tonaljs/midi'
 * midiToFreq(69) // => 440
 */ function midiToFreq(midi, tuning = 440) {
    return Math.pow(2, (midi - 69) / 12) * tuning;
}
const L2 = Math.log(2);
const L440 = Math.log(440);
/**
 * Get the midi number from a frequency in hertz. The midi number can
 * contain decimals (with two digits precission)
 *
 * @param {number} frequency
 * @return {number}
 * @example
 * import { freqToMidi} from '@tonaljs/midi'
 * freqToMidi(220)); //=> 57
 * freqToMidi(261.62)); //=> 60
 * freqToMidi(261)); //=> 59.96
 */ function freqToMidi(freq) {
    const v = 12 * (Math.log(freq) - L440) / L2 + 69;
    return Math.round(v * 100) / 100;
}
const SHARPS = "C C# D D# E F F# G G# A A# B".split(" ");
const FLATS = "C Db D Eb E F Gb G Ab A Bb B".split(" ");
/**
 * Given a midi number, returns a note name. The altered notes will have
 * flats unless explicitly set with the optional `useSharps` parameter.
 *
 * @function
 * @param {number} midi - the midi note number
 * @param {Object} options = default: `{ sharps: false, pitchClass: false }`
 * @param {boolean} useSharps - (Optional) set to true to use sharps instead of flats
 * @return {string} the note name
 * @example
 * import { midiToNoteName } from '@tonaljs/midi'
 * midiToNoteName(61) // => "Db4"
 * midiToNoteName(61, { pitchClass: true }) // => "Db"
 * midiToNoteName(61, { sharps: true }) // => "C#4"
 * midiToNoteName(61, { pitchClass: true, sharps: true }) // => "C#"
 * // it rounds to nearest note
 * midiToNoteName(61.7) // => "D4"
 */ function midiToNoteName(midi, options = {}) {
    if (isNaN(midi) || midi === -Infinity || midi === Infinity) return "";
    midi = Math.round(midi);
    const pcs = options.sharps === true ? SHARPS : FLATS;
    const pc = pcs[midi % 12];
    if (options.pitchClass) return pc;
    const o = Math.floor(midi / 12) - 1;
    return pc + o;
}
var index = {
    isMidi,
    toMidi,
    midiToFreq,
    midiToNoteName,
    freqToMidi
};
exports.default = index;

},{"@tonaljs/core":"e6pW0","@parcel/transformer-js/src/esmodule-helpers.js":"kANgE"}],"jEY9W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "names", ()=>names);
parcelHelpers.export(exports, "tokenize", ()=>tokenize);
var _core = require("@tonaljs/core");
const NoRomanNumeral = {
    empty: true,
    name: "",
    chordType: ""
};
const cache = {};
/**
 * Get properties of a roman numeral string
 *
 * @function
 * @param {string} - the roman numeral string (can have type, like: Imaj7)
 * @return {Object} - the roman numeral properties
 * @param {string} name - the roman numeral (tonic)
 * @param {string} type - the chord type
 * @param {string} num - the number (1 = I, 2 = II...)
 * @param {boolean} major - major or not
 *
 * @example
 * romanNumeral("VIIb5") // => { name: "VII", type: "b5", num: 7, major: true }
 */ function get(src) {
    return typeof src === "string" ? cache[src] || (cache[src] = parse(src)) : typeof src === "number" ? get(NAMES[src] || "") : (0, _core.isPitch)(src) ? fromPitch(src) : (0, _core.isNamed)(src) ? get(src.name) : NoRomanNumeral;
}
const romanNumeral = (0, _core.deprecate)("RomanNumeral.romanNumeral", "RomanNumeral.get", get);
/**
 * Get roman numeral names
 *
 * @function
 * @param {boolean} [isMajor=true]
 * @return {Array<String>}
 *
 * @example
 * names() // => ["I", "II", "III", "IV", "V", "VI", "VII"]
 */ function names(major = true) {
    return (major ? NAMES : NAMES_MINOR).slice();
}
function fromPitch(pitch) {
    return get((0, _core.altToAcc)(pitch.alt) + NAMES[pitch.step]);
}
const REGEX = /^(#{1,}|b{1,}|x{1,}|)(IV|I{1,3}|VI{0,2}|iv|i{1,3}|vi{0,2})([^IViv]*)$/;
function tokenize(str) {
    return REGEX.exec(str) || [
        "",
        "",
        "",
        ""
    ];
}
const ROMANS = "I II III IV V VI VII";
const NAMES = ROMANS.split(" ");
const NAMES_MINOR = ROMANS.toLowerCase().split(" ");
function parse(src) {
    const [name, acc, roman, chordType] = tokenize(src);
    if (!roman) return NoRomanNumeral;
    const upperRoman = roman.toUpperCase();
    const step = NAMES.indexOf(upperRoman);
    const alt = (0, _core.accToAlt)(acc);
    const dir = 1;
    return {
        empty: false,
        name,
        roman,
        interval: (0, _core.interval)({
            step,
            alt,
            dir
        }).name,
        acc,
        chordType,
        alt,
        step,
        major: roman === upperRoman,
        oct: 0,
        dir
    };
}
var index = {
    names,
    get,
    // deprecated
    romanNumeral
};
exports.default = index;

},{"@tonaljs/core":"e6pW0","@parcel/transformer-js/src/esmodule-helpers.js":"kANgE"}],"khyxV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "all", ()=>all);
parcelHelpers.export(exports, "entries", ()=>entries);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "mode", ()=>mode);
parcelHelpers.export(exports, "names", ()=>names);
var _core = require("@tonaljs/core");
var _pcset = require("@tonaljs/pcset");
const DATA = [
    [
        0,
        2773,
        0,
        "ionian",
        "",
        "Maj7",
        "major"
    ],
    [
        1,
        2902,
        2,
        "dorian",
        "m",
        "m7"
    ],
    [
        2,
        3418,
        4,
        "phrygian",
        "m",
        "m7"
    ],
    [
        3,
        2741,
        -1,
        "lydian",
        "",
        "Maj7"
    ],
    [
        4,
        2774,
        1,
        "mixolydian",
        "",
        "7"
    ],
    [
        5,
        2906,
        3,
        "aeolian",
        "m",
        "m7",
        "minor"
    ],
    [
        6,
        3434,
        5,
        "locrian",
        "dim",
        "m7b5"
    ]
];
const NoMode = {
    ...(0, _pcset.EmptyPcset),
    name: "",
    alt: 0,
    modeNum: NaN,
    triad: "",
    seventh: "",
    aliases: []
};
const modes = DATA.map(toMode);
const index = {};
modes.forEach((mode)=>{
    index[mode.name] = mode;
    mode.aliases.forEach((alias)=>{
        index[alias] = mode;
    });
});
/**
 * Get a Mode by it's name
 *
 * @example
 * get('dorian')
 * // =>
 * // {
 * //   intervals: [ '1P', '2M', '3m', '4P', '5P', '6M', '7m' ],
 * //   modeNum: 1,
 * //   chroma: '101101010110',
 * //   normalized: '101101010110',
 * //   name: 'dorian',
 * //   setNum: 2902,
 * //   alt: 2,
 * //   triad: 'm',
 * //   seventh: 'm7',
 * //   aliases: []
 * // }
 */ function get(name) {
    return typeof name === "string" ? index[name.toLowerCase()] || NoMode : name && name.name ? get(name.name) : NoMode;
}
const mode = (0, _core.deprecate)("Mode.mode", "Mode.get", get);
/**
 * Get a list of all modes
 */ function all() {
    return modes.slice();
}
const entries = (0, _core.deprecate)("Mode.mode", "Mode.all", all);
/**
 * Get a list of all mode names
 */ function names() {
    return modes.map((mode)=>mode.name);
}
function toMode(mode) {
    const [modeNum, setNum, alt, name, triad, seventh, alias] = mode;
    const aliases = alias ? [
        alias
    ] : [];
    const chroma = Number(setNum).toString(2);
    const intervals = (0, _pcset.chromaToIntervals)(chroma);
    return {
        empty: false,
        intervals,
        modeNum,
        chroma,
        normalized: chroma,
        name,
        setNum,
        alt,
        triad,
        seventh,
        aliases
    };
}
var index$1 = {
    get,
    names,
    all,
    // deprecated
    entries,
    mode
};
exports.default = index$1;

},{"@tonaljs/core":"e6pW0","@tonaljs/pcset":"bTNFe","@parcel/transformer-js/src/esmodule-helpers.js":"kANgE"}],"a4BOh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fromRomanNumerals", ()=>fromRomanNumerals);
parcelHelpers.export(exports, "toRomanNumerals", ()=>toRomanNumerals);
var _chord = require("@tonaljs/chord");
var _core = require("@tonaljs/core");
var _romanNumeral = require("@tonaljs/roman-numeral");
/**
 * Given a tonic and a chord list expressed with roman numeral notation
 * returns the progression expressed with leadsheet chords symbols notation
 * @example
 * fromRomanNumerals("C", ["I", "IIm7", "V7"]);
 * // => ["C", "Dm7", "G7"]
 */ function fromRomanNumerals(tonic, chords) {
    const romanNumerals = chords.map((0, _romanNumeral.get));
    return romanNumerals.map((rn)=>(0, _core.transpose)(tonic, (0, _core.interval)(rn)) + rn.chordType);
}
/**
 * Given a tonic and a chord list with leadsheet symbols notation,
 * return the chord list with roman numeral notation
 * @example
 * toRomanNumerals("C", ["CMaj7", "Dm7", "G7"]);
 * // => ["IMaj7", "IIm7", "V7"]
 */ function toRomanNumerals(tonic, chords) {
    return chords.map((chord)=>{
        const [note, chordType] = (0, _chord.tokenize)(chord);
        const intervalName = (0, _core.distance)(tonic, note);
        const roman = (0, _romanNumeral.get)((0, _core.interval)(intervalName));
        return roman.name + chordType;
    });
}
var index = {
    fromRomanNumerals,
    toRomanNumerals
};
exports.default = index;

},{"@tonaljs/chord":"86fqr","@tonaljs/core":"e6pW0","@tonaljs/roman-numeral":"jEY9W","@parcel/transformer-js/src/esmodule-helpers.js":"kANgE"}],"juxWF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "chromatic", ()=>chromatic);
parcelHelpers.export(exports, "numeric", ()=>numeric);
var _collection = require("@tonaljs/collection");
var _midi = require("@tonaljs/midi");
/**
 * Create a numeric range. You supply a list of notes or numbers and it will
 * be connected to create complex ranges.
 *
 * @param {Array} notes - the list of notes or midi numbers used
 * @return {Array} an array of numbers or empty array if not valid parameters
 *
 * @example
 * numeric(["C5", "C4"]) // => [ 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60 ]
 * // it works midi notes
 * numeric([10, 5]) // => [ 10, 9, 8, 7, 6, 5 ]
 * // complex range
 * numeric(["C4", "E4", "Bb3"]) // => [60, 61, 62, 63, 64, 63, 62, 61, 60, 59, 58]
 */ function numeric(notes) {
    const midi = (0, _collection.compact)(notes.map((0, _midi.toMidi)));
    if (!notes.length || midi.length !== notes.length) // there is no valid notes
    return [];
    return midi.reduce((result, note)=>{
        const last = result[result.length - 1];
        return result.concat((0, _collection.range)(last, note).slice(1));
    }, [
        midi[0]
    ]);
}
/**
 * Create a range of chromatic notes. The altered notes will use flats.
 *
 * @function
 * @param {Array} notes - the list of notes or midi note numbers to create a range from
 * @param {Object} options - The same as `midiToNoteName` (`{ sharps: boolean, pitchClass: boolean }`)
 * @return {Array} an array of note names
 *
 * @example
 * Range.chromatic(["C2, "E2", "D2"]) // => ["C2", "Db2", "D2", "Eb2", "E2", "Eb2", "D2"]
 * // with sharps
 * Range.chromatic(["C2", "C3"], { sharps: true }) // => [ "C2", "C#2", "D2", "D#2", "E2", "F2", "F#2", "G2", "G#2", "A2", "A#2", "B2", "C3" ]
 */ function chromatic(notes, options) {
    return numeric(notes).map((midi)=>(0, _midi.midiToNoteName)(midi, options));
}
var index = {
    numeric,
    chromatic
};
exports.default = index;

},{"@tonaljs/collection":"8KqbI","@tonaljs/midi":"4PEvd","@parcel/transformer-js/src/esmodule-helpers.js":"kANgE"}],"3PiyV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "extended", ()=>extended);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "modeNames", ()=>modeNames);
parcelHelpers.export(exports, "names", ()=>names);
parcelHelpers.export(exports, "rangeOf", ()=>rangeOf);
parcelHelpers.export(exports, "reduced", ()=>reduced);
parcelHelpers.export(exports, "scale", ()=>scale);
parcelHelpers.export(exports, "scaleChords", ()=>scaleChords);
parcelHelpers.export(exports, "scaleNotes", ()=>scaleNotes);
parcelHelpers.export(exports, "tokenize", ()=>tokenize);
var _chordType = require("@tonaljs/chord-type");
var _collection = require("@tonaljs/collection");
var _core = require("@tonaljs/core");
var _note = require("@tonaljs/note");
var _pcset = require("@tonaljs/pcset");
var _scaleType = require("@tonaljs/scale-type");
/**
 * References:
 * - https://www.researchgate.net/publication/327567188_An_Algorithm_for_Spelling_the_Pitches_of_Any_Musical_Scale
 * @module scale
 */ const NoScale = {
    empty: true,
    name: "",
    type: "",
    tonic: null,
    setNum: NaN,
    chroma: "",
    normalized: "",
    aliases: [],
    notes: [],
    intervals: []
};
/**
 * Given a string with a scale name and (optionally) a tonic, split
 * that components.
 *
 * It retuns an array with the form [ name, tonic ] where tonic can be a
 * note name or null and name can be any arbitrary string
 * (this function doesn"t check if that scale name exists)
 *
 * @function
 * @param {string} name - the scale name
 * @return {Array} an array [tonic, name]
 * @example
 * tokenize("C mixolydean") // => ["C", "mixolydean"]
 * tokenize("anything is valid") // => ["", "anything is valid"]
 * tokenize() // => ["", ""]
 */ function tokenize(name) {
    if (typeof name !== "string") return [
        "",
        ""
    ];
    const i = name.indexOf(" ");
    const tonic = (0, _core.note)(name.substring(0, i));
    if (tonic.empty) {
        const n = (0, _core.note)(name);
        return n.empty ? [
            "",
            name
        ] : [
            n.name,
            ""
        ];
    }
    const type = name.substring(tonic.name.length + 1);
    return [
        tonic.name,
        type.length ? type : ""
    ];
}
/**
 * Get all scale names
 * @function
 */ const names = (0, _scaleType.names);
/**
 * Get a Scale from a scale name.
 */ function get(src) {
    const tokens = Array.isArray(src) ? src : tokenize(src);
    const tonic = (0, _core.note)(tokens[0]).name;
    const st = (0, _scaleType.get)(tokens[1]);
    if (st.empty) return NoScale;
    const type = st.name;
    const notes = tonic ? st.intervals.map((i)=>(0, _core.transpose)(tonic, i)) : [];
    const name = tonic ? tonic + " " + type : type;
    return {
        ...st,
        name,
        type,
        tonic,
        notes
    };
}
const scale = (0, _core.deprecate)("Scale.scale", "Scale.get", get);
/**
 * Get all chords that fits a given scale
 *
 * @function
 * @param {string} name - the scale name
 * @return {Array<string>} - the chord names
 *
 * @example
 * scaleChords("pentatonic") // => ["5", "64", "M", "M6", "Madd9", "Msus2"]
 */ function scaleChords(name) {
    const s = get(name);
    const inScale = (0, _pcset.isSubsetOf)(s.chroma);
    return (0, _chordType.all)().filter((chord)=>inScale(chord.chroma)).map((chord)=>chord.aliases[0]);
}
/**
 * Get all scales names that are a superset of the given one
 * (has the same notes and at least one more)
 *
 * @function
 * @param {string} name
 * @return {Array} a list of scale names
 * @example
 * extended("major") // => ["bebop", "bebop dominant", "bebop major", "chromatic", "ichikosucho"]
 */ function extended(name) {
    const s = get(name);
    const isSuperset = (0, _pcset.isSupersetOf)(s.chroma);
    return (0, _scaleType.all)().filter((scale)=>isSuperset(scale.chroma)).map((scale)=>scale.name);
}
/**
 * Find all scales names that are a subset of the given one
 * (has less notes but all from the given scale)
 *
 * @function
 * @param {string} name
 * @return {Array} a list of scale names
 *
 * @example
 * reduced("major") // => ["ionian pentatonic", "major pentatonic", "ritusen"]
 */ function reduced(name) {
    const isSubset = (0, _pcset.isSubsetOf)(get(name).chroma);
    return (0, _scaleType.all)().filter((scale)=>isSubset(scale.chroma)).map((scale)=>scale.name);
}
/**
 * Given an array of notes, return the scale: a pitch class set starting from
 * the first note of the array
 *
 * @function
 * @param {string[]} notes
 * @return {string[]} pitch classes with same tonic
 * @example
 * scaleNotes(['C4', 'c3', 'C5', 'C4', 'c4']) // => ["C"]
 * scaleNotes(['D4', 'c#5', 'A5', 'F#6']) // => ["D", "F#", "A", "C#"]
 */ function scaleNotes(notes) {
    const pcset = notes.map((n)=>(0, _core.note)(n).pc).filter((x)=>x);
    const tonic = pcset[0];
    const scale = (0, _note.sortedUniqNames)(pcset);
    return (0, _collection.rotate)(scale.indexOf(tonic), scale);
}
/**
 * Find mode names of a scale
 *
 * @function
 * @param {string} name - scale name
 * @example
 * modeNames("C pentatonic") // => [
 *   ["C", "major pentatonic"],
 *   ["D", "egyptian"],
 *   ["E", "malkos raga"],
 *   ["G", "ritusen"],
 *   ["A", "minor pentatonic"]
 * ]
 */ function modeNames(name) {
    const s = get(name);
    if (s.empty) return [];
    const tonics = s.tonic ? s.notes : s.intervals;
    return (0, _pcset.modes)(s.chroma).map((chroma, i)=>{
        const modeName = get(chroma).name;
        return modeName ? [
            tonics[i],
            modeName
        ] : [
            "",
            ""
        ];
    }).filter((x)=>x[0]);
}
function getNoteNameOf(scale) {
    const names = Array.isArray(scale) ? scaleNotes(scale) : get(scale).notes;
    const chromas = names.map((name)=>(0, _core.note)(name).chroma);
    return (noteOrMidi)=>{
        const height = typeof noteOrMidi === "number" ? noteOrMidi : (0, _core.note)(noteOrMidi).height;
        if (height === undefined) return undefined;
        const chroma = height % 12;
        const oct = Math.floor(height / 12) - 1;
        const position = chromas.indexOf(chroma);
        if (position === -1) return undefined;
        return names[position] + oct;
    };
}
function rangeOf(scale) {
    const getName = getNoteNameOf(scale);
    return (fromNote, toNote)=>{
        const from = (0, _core.note)(fromNote).height;
        const to = (0, _core.note)(toNote).height;
        if (from === undefined || to === undefined) return [];
        return (0, _collection.range)(from, to).map(getName).filter((x)=>x);
    };
}
var index = {
    get,
    names,
    extended,
    modeNames,
    reduced,
    scaleChords,
    scaleNotes,
    tokenize,
    rangeOf,
    // deprecated
    scale
};
exports.default = index;

},{"@tonaljs/chord-type":"asSVJ","@tonaljs/collection":"8KqbI","@tonaljs/core":"e6pW0","@tonaljs/note":"l93bX","@tonaljs/pcset":"bTNFe","@tonaljs/scale-type":"frYDK","@parcel/transformer-js/src/esmodule-helpers.js":"kANgE"}],"1oUQi":[function(require,module,exports) {
// CONSTANTS
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "names", ()=>names);
parcelHelpers.export(exports, "parse", ()=>parse);
const NONE = {
    empty: true,
    name: "",
    upper: undefined,
    lower: undefined,
    type: undefined,
    additive: []
};
const NAMES = [
    "4/4",
    "3/4",
    "2/4",
    "2/2",
    "12/8",
    "9/8",
    "6/8",
    "3/8"
];
// PUBLIC API
function names() {
    return NAMES.slice();
}
const REGEX = /^(\d?\d(?:\+\d)*)\/(\d)$/;
const CACHE = new Map();
function get(literal) {
    const cached = CACHE.get(literal);
    if (cached) return cached;
    const ts = build(parse(literal));
    CACHE.set(literal, ts);
    return ts;
}
function parse(literal) {
    if (typeof literal === "string") {
        const [_, up, low] = REGEX.exec(literal) || [];
        return parse([
            up,
            low
        ]);
    }
    const [up, down] = literal;
    const denominator = +down;
    if (typeof up === "number") return [
        up,
        denominator
    ];
    const list = up.split("+").map((n)=>+n);
    return list.length === 1 ? [
        list[0],
        denominator
    ] : [
        list,
        denominator
    ];
}
var index = {
    names,
    parse,
    get
};
// PRIVATE
function build([up, down]) {
    const upper = Array.isArray(up) ? up.reduce((a, b)=>a + b, 0) : up;
    const lower = down;
    if (upper === 0 || lower === 0) return NONE;
    const name = Array.isArray(up) ? `${up.join("+")}/${down}` : `${up}/${down}`;
    const additive = Array.isArray(up) ? up : [];
    const type = lower === 4 || lower === 2 ? "simple" : lower === 8 && upper % 3 === 0 ? "compound" : "irregular";
    return {
        empty: false,
        name,
        type,
        upper,
        lower,
        additive
    };
}
exports.default = index;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"kANgE"}],"1dcny":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _chordTypeDefault.default));
var _chordType = require("@tonaljs/chord-type");
parcelHelpers.exportAll(_chordType, exports);
var _chordTypeDefault = parcelHelpers.interopDefault(_chordType);

},{"@tonaljs/chord-type":"asSVJ","@parcel/transformer-js/src/esmodule-helpers.js":"kANgE"}],"7gVlB":[function(require,module,exports) {
/**
 * WEBMIDI.js v3.1.12
 * A JavaScript library to kickstart your MIDI projects
 * https://webmidijs.org
 * Build generated on November 22nd, 2024.
 *
 * © Copyright 2015-2024, Jean-Philippe Côté.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */ var process = require("efe8767325d23004");
var global = arguments[3];
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
class EventEmitter {
    constructor(e1 = !1){
        this.eventMap = {}, this.eventsSuspended = 1 == e1;
    }
    addListener(e1, t1, n1 = {}) {
        if ("string" == typeof e1 && e1.length < 1 || e1 instanceof String && e1.length < 1 || "string" != typeof e1 && !(e1 instanceof String) && e1 !== EventEmitter.ANY_EVENT) throw new TypeError("The 'event' parameter must be a string or EventEmitter.ANY_EVENT.");
        if ("function" != typeof t1) throw new TypeError("The callback must be a function.");
        const r1 = new Listener(e1, this, t1, n1);
        return this.eventMap[e1] || (this.eventMap[e1] = []), n1.prepend ? this.eventMap[e1].unshift(r1) : this.eventMap[e1].push(r1), r1;
    }
    addOneTimeListener(e1, t1, n1 = {}) {
        n1.remaining = 1, this.addListener(e1, t1, n1);
    }
    static get ANY_EVENT() {
        return Symbol.for("Any event");
    }
    hasListener(e1, t1) {
        if (void 0 === e1) return !!(this.eventMap[EventEmitter.ANY_EVENT] && this.eventMap[EventEmitter.ANY_EVENT].length > 0) || Object.entries(this.eventMap).some(([, e1])=>e1.length > 0);
        if (this.eventMap[e1] && this.eventMap[e1].length > 0) {
            if (t1 instanceof Listener) return this.eventMap[e1].filter((e1)=>e1 === t1).length > 0;
            if ("function" == typeof t1) return this.eventMap[e1].filter((e1)=>e1.callback === t1).length > 0;
            return null == t1;
        }
        return !1;
    }
    get eventNames() {
        return Object.keys(this.eventMap);
    }
    getListeners(e1) {
        return this.eventMap[e1] || [];
    }
    suspendEvent(e1) {
        this.getListeners(e1).forEach((e1)=>{
            e1.suspended = !0;
        });
    }
    unsuspendEvent(e1) {
        this.getListeners(e1).forEach((e1)=>{
            e1.suspended = !1;
        });
    }
    getListenerCount(e1) {
        return this.getListeners(e1).length;
    }
    emit(e1, ...t1) {
        if ("string" != typeof e1 && !(e1 instanceof String)) throw new TypeError("The 'event' parameter must be a string.");
        if (this.eventsSuspended) return;
        let n1 = [], r1 = this.eventMap[EventEmitter.ANY_EVENT] || [];
        return this.eventMap[e1] && (r1 = r1.concat(this.eventMap[e1])), r1.forEach((e1)=>{
            if (e1.suspended) return;
            let r1 = [
                ...t1
            ];
            Array.isArray(e1.arguments) && (r1 = r1.concat(e1.arguments)), e1.remaining > 0 && (n1.push(e1.callback.apply(e1.context, r1)), e1.count++), --e1.remaining < 1 && e1.remove();
        }), n1;
    }
    removeListener(e1, t1, n1 = {}) {
        if (void 0 === e1) return void (this.eventMap = {});
        if (!this.eventMap[e1]) return;
        let r1 = this.eventMap[e1].filter((e1)=>t1 && e1.callback !== t1 || n1.remaining && n1.remaining !== e1.remaining || n1.context && n1.context !== e1.context);
        r1.length ? this.eventMap[e1] = r1 : delete this.eventMap[e1];
    }
    async waitFor(e1, t1 = {}) {
        return t1.duration = parseInt(t1.duration), (isNaN(t1.duration) || t1.duration <= 0) && (t1.duration = 1 / 0), new Promise((n1, r1)=>{
            let i1, s1 = this.addListener(e1, ()=>{
                clearTimeout(i1), n1();
            }, {
                remaining: 1
            });
            t1.duration !== 1 / 0 && (i1 = setTimeout(()=>{
                s1.remove(), r1("The duration expired before the event was emitted.");
            }, t1.duration));
        });
    }
    get eventCount() {
        return Object.keys(this.eventMap).length;
    }
}
class Listener {
    constructor(e1, t1, n1, r1 = {}){
        if ("string" != typeof e1 && !(e1 instanceof String) && e1 !== EventEmitter.ANY_EVENT) throw new TypeError("The 'event' parameter must be a string or EventEmitter.ANY_EVENT.");
        if (!t1) throw new ReferenceError("The 'target' parameter is mandatory.");
        if ("function" != typeof n1) throw new TypeError("The 'callback' must be a function.");
        void 0 === r1.arguments || Array.isArray(r1.arguments) || (r1.arguments = [
            r1.arguments
        ]), (r1 = Object.assign({
            context: t1,
            remaining: 1 / 0,
            arguments: void 0,
            duration: 1 / 0
        }, r1)).duration !== 1 / 0 && setTimeout(()=>this.remove(), r1.duration), this.arguments = r1.arguments, this.callback = n1, this.context = r1.context, this.count = 0, this.event = e1, this.remaining = parseInt(r1.remaining) >= 1 ? parseInt(r1.remaining) : 1 / 0, this.suspended = !1, this.target = t1;
    }
    remove() {
        this.target.removeListener(this.event, this.callback, {
            context: this.context,
            remaining: this.remaining
        });
    }
}
/**
 * The `Enumerations` class contains enumerations and arrays of elements used throughout the
 * library. All its properties are static and should be referenced using the class name. For
 * example: `Enumerations.CHANNEL_MESSAGES`.
 *
 * @license Apache-2.0
 * @since 3.0.0
 */ class Enumerations {
    static get MIDI_CHANNEL_MESSAGES() {
        return this.validation && console.warn("The MIDI_CHANNEL_MESSAGES enum has been deprecated. Use the Enumerations.CHANNEL_MESSAGES enum instead."), Enumerations.CHANNEL_MESSAGES;
    }
    static get CHANNEL_MESSAGES() {
        return {
            noteoff: 8,
            noteon: 9,
            keyaftertouch: 10,
            controlchange: 11,
            programchange: 12,
            channelaftertouch: 13,
            pitchbend: 14
        };
    }
    static get CHANNEL_NUMBERS() {
        return [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16
        ];
    }
    static get MIDI_CHANNEL_NUMBERS() {
        return this.validation && console.warn("The MIDI_CHANNEL_NUMBERS array has been deprecated. Use the Enumerations.CHANNEL_NUMBERS array instead."), [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16
        ];
    }
    static get CHANNEL_MODE_MESSAGES() {
        return {
            allsoundoff: 120,
            resetallcontrollers: 121,
            localcontrol: 122,
            allnotesoff: 123,
            omnimodeoff: 124,
            omnimodeon: 125,
            monomodeon: 126,
            polymodeon: 127
        };
    }
    static get MIDI_CHANNEL_MODE_MESSAGES() {
        return this.validation && console.warn("The MIDI_CHANNEL_MODE_MESSAGES enum has been deprecated. Use the Enumerations.CHANNEL_MODE_MESSAGES enum instead."), Enumerations.CHANNEL_MODE_MESSAGES;
    }
    static get MIDI_CONTROL_CHANGE_MESSAGES() {
        return this.validation && console.warn("The MIDI_CONTROL_CHANGE_MESSAGES enum has been deprecated. Use the Enumerations.CONTROL_CHANGE_MESSAGES array instead."), {
            bankselectcoarse: 0,
            modulationwheelcoarse: 1,
            breathcontrollercoarse: 2,
            controller3: 3,
            footcontrollercoarse: 4,
            portamentotimecoarse: 5,
            dataentrycoarse: 6,
            volumecoarse: 7,
            balancecoarse: 8,
            controller9: 9,
            pancoarse: 10,
            expressioncoarse: 11,
            effectcontrol1coarse: 12,
            effectcontrol2coarse: 13,
            controller14: 14,
            controller15: 15,
            generalpurposeslider1: 16,
            generalpurposeslider2: 17,
            generalpurposeslider3: 18,
            generalpurposeslider4: 19,
            controller20: 20,
            controller21: 21,
            controller22: 22,
            controller23: 23,
            controller24: 24,
            controller25: 25,
            controller26: 26,
            controller27: 27,
            controller28: 28,
            controller29: 29,
            controller30: 30,
            controller31: 31,
            bankselectfine: 32,
            modulationwheelfine: 33,
            breathcontrollerfine: 34,
            controller35: 35,
            footcontrollerfine: 36,
            portamentotimefine: 37,
            dataentryfine: 38,
            volumefine: 39,
            balancefine: 40,
            controller41: 41,
            panfine: 42,
            expressionfine: 43,
            effectcontrol1fine: 44,
            effectcontrol2fine: 45,
            controller46: 46,
            controller47: 47,
            controller48: 48,
            controller49: 49,
            controller50: 50,
            controller51: 51,
            controller52: 52,
            controller53: 53,
            controller54: 54,
            controller55: 55,
            controller56: 56,
            controller57: 57,
            controller58: 58,
            controller59: 59,
            controller60: 60,
            controller61: 61,
            controller62: 62,
            controller63: 63,
            holdpedal: 64,
            portamento: 65,
            sustenutopedal: 66,
            softpedal: 67,
            legatopedal: 68,
            hold2pedal: 69,
            soundvariation: 70,
            resonance: 71,
            soundreleasetime: 72,
            soundattacktime: 73,
            brightness: 74,
            soundcontrol6: 75,
            soundcontrol7: 76,
            soundcontrol8: 77,
            soundcontrol9: 78,
            soundcontrol10: 79,
            generalpurposebutton1: 80,
            generalpurposebutton2: 81,
            generalpurposebutton3: 82,
            generalpurposebutton4: 83,
            controller84: 84,
            controller85: 85,
            controller86: 86,
            controller87: 87,
            controller88: 88,
            controller89: 89,
            controller90: 90,
            reverblevel: 91,
            tremololevel: 92,
            choruslevel: 93,
            celestelevel: 94,
            phaserlevel: 95,
            databuttonincrement: 96,
            databuttondecrement: 97,
            nonregisteredparametercoarse: 98,
            nonregisteredparameterfine: 99,
            registeredparametercoarse: 100,
            registeredparameterfine: 101,
            controller102: 102,
            controller103: 103,
            controller104: 104,
            controller105: 105,
            controller106: 106,
            controller107: 107,
            controller108: 108,
            controller109: 109,
            controller110: 110,
            controller111: 111,
            controller112: 112,
            controller113: 113,
            controller114: 114,
            controller115: 115,
            controller116: 116,
            controller117: 117,
            controller118: 118,
            controller119: 119,
            allsoundoff: 120,
            resetallcontrollers: 121,
            localcontrol: 122,
            allnotesoff: 123,
            omnimodeoff: 124,
            omnimodeon: 125,
            monomodeon: 126,
            polymodeon: 127
        };
    }
    static get CONTROL_CHANGE_MESSAGES() {
        return [
            {
                number: 0,
                name: "bankselectcoarse",
                description: "Bank Select (Coarse)",
                position: "msb"
            },
            {
                number: 1,
                name: "modulationwheelcoarse",
                description: "Modulation Wheel (Coarse)",
                position: "msb"
            },
            {
                number: 2,
                name: "breathcontrollercoarse",
                description: "Breath Controller (Coarse)",
                position: "msb"
            },
            {
                number: 3,
                name: "controller3",
                description: "Undefined",
                position: "msb"
            },
            {
                number: 4,
                name: "footcontrollercoarse",
                description: "Foot Controller (Coarse)",
                position: "msb"
            },
            {
                number: 5,
                name: "portamentotimecoarse",
                description: "Portamento Time (Coarse)",
                position: "msb"
            },
            {
                number: 6,
                name: "dataentrycoarse",
                description: "Data Entry (Coarse)",
                position: "msb"
            },
            {
                number: 7,
                name: "volumecoarse",
                description: "Channel Volume (Coarse)",
                position: "msb"
            },
            {
                number: 8,
                name: "balancecoarse",
                description: "Balance (Coarse)",
                position: "msb"
            },
            {
                number: 9,
                name: "controller9",
                description: "Controller 9 (Coarse)",
                position: "msb"
            },
            {
                number: 10,
                name: "pancoarse",
                description: "Pan (Coarse)",
                position: "msb"
            },
            {
                number: 11,
                name: "expressioncoarse",
                description: "Expression Controller (Coarse)",
                position: "msb"
            },
            {
                number: 12,
                name: "effectcontrol1coarse",
                description: "Effect Control 1 (Coarse)",
                position: "msb"
            },
            {
                number: 13,
                name: "effectcontrol2coarse",
                description: "Effect Control 2 (Coarse)",
                position: "msb"
            },
            {
                number: 14,
                name: "controller14",
                description: "Undefined",
                position: "msb"
            },
            {
                number: 15,
                name: "controller15",
                description: "Undefined",
                position: "msb"
            },
            {
                number: 16,
                name: "generalpurposecontroller1",
                description: "General Purpose Controller 1 (Coarse)",
                position: "msb"
            },
            {
                number: 17,
                name: "generalpurposecontroller2",
                description: "General Purpose Controller 2 (Coarse)",
                position: "msb"
            },
            {
                number: 18,
                name: "generalpurposecontroller3",
                description: "General Purpose Controller 3 (Coarse)",
                position: "msb"
            },
            {
                number: 19,
                name: "generalpurposecontroller4",
                description: "General Purpose Controller 4 (Coarse)",
                position: "msb"
            },
            {
                number: 20,
                name: "controller20",
                description: "Undefined",
                position: "msb"
            },
            {
                number: 21,
                name: "controller21",
                description: "Undefined",
                position: "msb"
            },
            {
                number: 22,
                name: "controller22",
                description: "Undefined",
                position: "msb"
            },
            {
                number: 23,
                name: "controller23",
                description: "Undefined",
                position: "msb"
            },
            {
                number: 24,
                name: "controller24",
                description: "Undefined",
                position: "msb"
            },
            {
                number: 25,
                name: "controller25",
                description: "Undefined",
                position: "msb"
            },
            {
                number: 26,
                name: "controller26",
                description: "Undefined",
                position: "msb"
            },
            {
                number: 27,
                name: "controller27",
                description: "Undefined",
                position: "msb"
            },
            {
                number: 28,
                name: "controller28",
                description: "Undefined",
                position: "msb"
            },
            {
                number: 29,
                name: "controller29",
                description: "Undefined",
                position: "msb"
            },
            {
                number: 30,
                name: "controller30",
                description: "Undefined",
                position: "msb"
            },
            {
                number: 31,
                name: "controller31",
                description: "Undefined",
                position: "msb"
            },
            {
                number: 32,
                name: "bankselectfine",
                description: "Bank Select (Fine)",
                position: "lsb"
            },
            {
                number: 33,
                name: "modulationwheelfine",
                description: "Modulation Wheel (Fine)",
                position: "lsb"
            },
            {
                number: 34,
                name: "breathcontrollerfine",
                description: "Breath Controller (Fine)",
                position: "lsb"
            },
            {
                number: 35,
                name: "controller35",
                description: "Undefined",
                position: "lsb"
            },
            {
                number: 36,
                name: "footcontrollerfine",
                description: "Foot Controller (Fine)",
                position: "lsb"
            },
            {
                number: 37,
                name: "portamentotimefine",
                description: "Portamento Time (Fine)",
                position: "lsb"
            },
            {
                number: 38,
                name: "dataentryfine",
                description: "Data Entry (Fine)",
                position: "lsb"
            },
            {
                number: 39,
                name: "channelvolumefine",
                description: "Channel Volume (Fine)",
                position: "lsb"
            },
            {
                number: 40,
                name: "balancefine",
                description: "Balance (Fine)",
                position: "lsb"
            },
            {
                number: 41,
                name: "controller41",
                description: "Undefined",
                position: "lsb"
            },
            {
                number: 42,
                name: "panfine",
                description: "Pan (Fine)",
                position: "lsb"
            },
            {
                number: 43,
                name: "expressionfine",
                description: "Expression Controller (Fine)",
                position: "lsb"
            },
            {
                number: 44,
                name: "effectcontrol1fine",
                description: "Effect control 1 (Fine)",
                position: "lsb"
            },
            {
                number: 45,
                name: "effectcontrol2fine",
                description: "Effect control 2 (Fine)",
                position: "lsb"
            },
            {
                number: 46,
                name: "controller46",
                description: "Undefined",
                position: "lsb"
            },
            {
                number: 47,
                name: "controller47",
                description: "Undefined",
                position: "lsb"
            },
            {
                number: 48,
                name: "controller48",
                description: "General Purpose Controller 1 (Fine)",
                position: "lsb"
            },
            {
                number: 49,
                name: "controller49",
                description: "General Purpose Controller 2 (Fine)",
                position: "lsb"
            },
            {
                number: 50,
                name: "controller50",
                description: "General Purpose Controller 3 (Fine)",
                position: "lsb"
            },
            {
                number: 51,
                name: "controller51",
                description: "General Purpose Controller 4 (Fine)",
                position: "lsb"
            },
            {
                number: 52,
                name: "controller52",
                description: "Undefined",
                position: "lsb"
            },
            {
                number: 53,
                name: "controller53",
                description: "Undefined",
                position: "lsb"
            },
            {
                number: 54,
                name: "controller54",
                description: "Undefined",
                position: "lsb"
            },
            {
                number: 55,
                name: "controller55",
                description: "Undefined",
                position: "lsb"
            },
            {
                number: 56,
                name: "controller56",
                description: "Undefined",
                position: "lsb"
            },
            {
                number: 57,
                name: "controller57",
                description: "Undefined",
                position: "lsb"
            },
            {
                number: 58,
                name: "controller58",
                description: "Undefined",
                position: "lsb"
            },
            {
                number: 59,
                name: "controller59",
                description: "Undefined",
                position: "lsb"
            },
            {
                number: 60,
                name: "controller60",
                description: "Undefined",
                position: "lsb"
            },
            {
                number: 61,
                name: "controller61",
                description: "Undefined",
                position: "lsb"
            },
            {
                number: 62,
                name: "controller62",
                description: "Undefined",
                position: "lsb"
            },
            {
                number: 63,
                name: "controller63",
                description: "Undefined",
                position: "lsb"
            },
            {
                number: 64,
                name: "damperpedal",
                description: "Damper Pedal On/Off"
            },
            {
                number: 65,
                name: "portamento",
                description: "Portamento On/Off"
            },
            {
                number: 66,
                name: "sostenuto",
                description: "Sostenuto On/Off"
            },
            {
                number: 67,
                name: "softpedal",
                description: "Soft Pedal On/Off"
            },
            {
                number: 68,
                name: "legatopedal",
                description: "Legato Pedal On/Off"
            },
            {
                number: 69,
                name: "hold2",
                description: "Hold 2 On/Off"
            },
            {
                number: 70,
                name: "soundvariation",
                description: "Sound Variation",
                position: "lsb"
            },
            {
                number: 71,
                name: "resonance",
                description: "Resonance",
                position: "lsb"
            },
            {
                number: 72,
                name: "releasetime",
                description: "Release Time",
                position: "lsb"
            },
            {
                number: 73,
                name: "attacktime",
                description: "Attack Time",
                position: "lsb"
            },
            {
                number: 74,
                name: "brightness",
                description: "Brightness",
                position: "lsb"
            },
            {
                number: 75,
                name: "decaytime",
                description: "Decay Time",
                position: "lsb"
            },
            {
                number: 76,
                name: "vibratorate",
                description: "Vibrato Rate",
                position: "lsb"
            },
            {
                number: 77,
                name: "vibratodepth",
                description: "Vibrato Depth",
                position: "lsb"
            },
            {
                number: 78,
                name: "vibratodelay",
                description: "Vibrato Delay",
                position: "lsb"
            },
            {
                number: 79,
                name: "controller79",
                description: "Undefined",
                position: "lsb"
            },
            {
                number: 80,
                name: "generalpurposecontroller5",
                description: "General Purpose Controller 5",
                position: "lsb"
            },
            {
                number: 81,
                name: "generalpurposecontroller6",
                description: "General Purpose Controller 6",
                position: "lsb"
            },
            {
                number: 82,
                name: "generalpurposecontroller7",
                description: "General Purpose Controller 7",
                position: "lsb"
            },
            {
                number: 83,
                name: "generalpurposecontroller8",
                description: "General Purpose Controller 8",
                position: "lsb"
            },
            {
                number: 84,
                name: "portamentocontrol",
                description: "Portamento Control",
                position: "lsb"
            },
            {
                number: 85,
                name: "controller85",
                description: "Undefined"
            },
            {
                number: 86,
                name: "controller86",
                description: "Undefined"
            },
            {
                number: 87,
                name: "controller87",
                description: "Undefined"
            },
            {
                number: 88,
                name: "highresolutionvelocityprefix",
                description: "High Resolution Velocity Prefix",
                position: "lsb"
            },
            {
                number: 89,
                name: "controller89",
                description: "Undefined"
            },
            {
                number: 90,
                name: "controller90",
                description: "Undefined"
            },
            {
                number: 91,
                name: "effect1depth",
                description: "Effects 1 Depth (Reverb Send Level)"
            },
            {
                number: 92,
                name: "effect2depth",
                description: "Effects 2 Depth"
            },
            {
                number: 93,
                name: "effect3depth",
                description: "Effects 3 Depth (Chorus Send Level)"
            },
            {
                number: 94,
                name: "effect4depth",
                description: "Effects 4 Depth"
            },
            {
                number: 95,
                name: "effect5depth",
                description: "Effects 5 Depth"
            },
            {
                number: 96,
                name: "dataincrement",
                description: "Data Increment"
            },
            {
                number: 97,
                name: "datadecrement",
                description: "Data Decrement"
            },
            {
                number: 98,
                name: "nonregisteredparameterfine",
                description: "Non-Registered Parameter Number (Fine)",
                position: "lsb"
            },
            {
                number: 99,
                name: "nonregisteredparametercoarse",
                description: "Non-Registered Parameter Number (Coarse)",
                position: "msb"
            },
            {
                number: 100,
                name: "registeredparameterfine",
                description: "Registered Parameter Number (Fine)",
                position: "lsb"
            },
            {
                number: 101,
                name: "registeredparametercoarse",
                description: "Registered Parameter Number (Coarse)",
                position: "msb"
            },
            {
                number: 102,
                name: "controller102",
                description: "Undefined"
            },
            {
                number: 103,
                name: "controller103",
                description: "Undefined"
            },
            {
                number: 104,
                name: "controller104",
                description: "Undefined"
            },
            {
                number: 105,
                name: "controller105",
                description: "Undefined"
            },
            {
                number: 106,
                name: "controller106",
                description: "Undefined"
            },
            {
                number: 107,
                name: "controller107",
                description: "Undefined"
            },
            {
                number: 108,
                name: "controller108",
                description: "Undefined"
            },
            {
                number: 109,
                name: "controller109",
                description: "Undefined"
            },
            {
                number: 110,
                name: "controller110",
                description: "Undefined"
            },
            {
                number: 111,
                name: "controller111",
                description: "Undefined"
            },
            {
                number: 112,
                name: "controller112",
                description: "Undefined"
            },
            {
                number: 113,
                name: "controller113",
                description: "Undefined"
            },
            {
                number: 114,
                name: "controller114",
                description: "Undefined"
            },
            {
                number: 115,
                name: "controller115",
                description: "Undefined"
            },
            {
                number: 116,
                name: "controller116",
                description: "Undefined"
            },
            {
                number: 117,
                name: "controller117",
                description: "Undefined"
            },
            {
                number: 118,
                name: "controller118",
                description: "Undefined"
            },
            {
                number: 119,
                name: "controller119",
                description: "Undefined"
            },
            {
                number: 120,
                name: "allsoundoff",
                description: "All Sound Off"
            },
            {
                number: 121,
                name: "resetallcontrollers",
                description: "Reset All Controllers"
            },
            {
                number: 122,
                name: "localcontrol",
                description: "Local Control On/Off"
            },
            {
                number: 123,
                name: "allnotesoff",
                description: "All Notes Off"
            },
            {
                number: 124,
                name: "omnimodeoff",
                description: "Omni Mode Off"
            },
            {
                number: 125,
                name: "omnimodeon",
                description: "Omni Mode On"
            },
            {
                number: 126,
                name: "monomodeon",
                description: "Mono Mode On"
            },
            {
                number: 127,
                name: "polymodeon",
                description: "Poly Mode On"
            }
        ];
    }
    static get REGISTERED_PARAMETERS() {
        return {
            pitchbendrange: [
                0,
                0
            ],
            channelfinetuning: [
                0,
                1
            ],
            channelcoarsetuning: [
                0,
                2
            ],
            tuningprogram: [
                0,
                3
            ],
            tuningbank: [
                0,
                4
            ],
            modulationrange: [
                0,
                5
            ],
            azimuthangle: [
                61,
                0
            ],
            elevationangle: [
                61,
                1
            ],
            gain: [
                61,
                2
            ],
            distanceratio: [
                61,
                3
            ],
            maximumdistance: [
                61,
                4
            ],
            maximumdistancegain: [
                61,
                5
            ],
            referencedistanceratio: [
                61,
                6
            ],
            panspreadangle: [
                61,
                7
            ],
            rollangle: [
                61,
                8
            ]
        };
    }
    static get MIDI_REGISTERED_PARAMETERS() {
        return this.validation && console.warn("The MIDI_REGISTERED_PARAMETERS enum has been deprecated. Use the Enumerations.REGISTERED_PARAMETERS enum instead."), Enumerations.MIDI_REGISTERED_PARAMETERS;
    }
    static get SYSTEM_MESSAGES() {
        return {
            sysex: 240,
            timecode: 241,
            songposition: 242,
            songselect: 243,
            tunerequest: 246,
            tuningrequest: 246,
            sysexend: 247,
            clock: 248,
            start: 250,
            continue: 251,
            stop: 252,
            activesensing: 254,
            reset: 255,
            midimessage: 0,
            unknownsystemmessage: -1
        };
    }
    static get MIDI_SYSTEM_MESSAGES() {
        return this.validation && console.warn("The MIDI_SYSTEM_MESSAGES enum has been deprecated. Use the Enumerations.SYSTEM_MESSAGES enum instead."), Enumerations.SYSTEM_MESSAGES;
    }
    static get CHANNEL_EVENTS() {
        return [
            "noteoff",
            "controlchange",
            "noteon",
            "keyaftertouch",
            "programchange",
            "channelaftertouch",
            "pitchbend",
            "allnotesoff",
            "allsoundoff",
            "localcontrol",
            "monomode",
            "omnimode",
            "resetallcontrollers",
            "nrpn",
            "nrpn-dataentrycoarse",
            "nrpn-dataentryfine",
            "nrpn-dataincrement",
            "nrpn-datadecrement",
            "rpn",
            "rpn-dataentrycoarse",
            "rpn-dataentryfine",
            "rpn-dataincrement",
            "rpn-datadecrement",
            "nrpn-databuttonincrement",
            "nrpn-databuttondecrement",
            "rpn-databuttonincrement",
            "rpn-databuttondecrement"
        ];
    }
}
/**
 * The `Note` class represents a single musical note such as `"D3"`, `"G#4"`, `"F-1"`, `"Gb7"`, etc.
 *
 * `Note` objects can be played back on a single channel by calling
 * [`OutputChannel.playNote()`]{@link OutputChannel#playNote} or, on multiple channels of the same
 * output, by calling [`Output.playNote()`]{@link Output#playNote}.
 *
 * The note has [`attack`](#attack) and [`release`](#release) velocities set at `0.5` by default.
 * These can be changed by passing in the appropriate option. It is also possible to set a
 * system-wide default for attack and release velocities by using the
 * [`WebMidi.defaults`](WebMidi#defaults) property.
 *
 * If you prefer to work with raw MIDI values (`0` to `127`), you can use [`rawAttack`](#rawAttack) and
 * [`rawRelease`](#rawRelease) to both get and set the values.
 *
 * The note may have a [`duration`](#duration). If it does, playback will be automatically stopped
 * when the duration has elapsed by sending a `"noteoff"` event. By default, the duration is set to
 * `Infinity`. In this case, it will never stop playing unless explicitly stopped by calling a
 * method such as [`OutputChannel.stopNote()`]{@link OutputChannel#stopNote},
 * [`Output.stopNote()`]{@link Output#stopNote} or similar.
 *
 * @license Apache-2.0
 * @since 3.0.0
 */ class Note {
    constructor(e1, t1 = {}){
        this.duration = wm.defaults.note.duration, this.attack = wm.defaults.note.attack, this.release = wm.defaults.note.release, null != t1.duration && (this.duration = t1.duration), null != t1.attack && (this.attack = t1.attack), null != t1.rawAttack && (this.attack = Utilities.from7bitToFloat(t1.rawAttack)), null != t1.release && (this.release = t1.release), null != t1.rawRelease && (this.release = Utilities.from7bitToFloat(t1.rawRelease)), Number.isInteger(e1) ? this.identifier = Utilities.toNoteIdentifier(e1) : this.identifier = e1;
    }
    get identifier() {
        return this._name + (this._accidental || "") + this._octave;
    }
    set identifier(e1) {
        const t1 = Utilities.getNoteDetails(e1);
        if (wm.validation && !e1) throw new Error("Invalid note identifier");
        this._name = t1.name, this._accidental = t1.accidental, this._octave = t1.octave;
    }
    get name() {
        return this._name;
    }
    set name(e1) {
        if (wm.validation && (e1 = e1.toUpperCase(), ![
            "C",
            "D",
            "E",
            "F",
            "G",
            "A",
            "B"
        ].includes(e1))) throw new Error("Invalid name value");
        this._name = e1;
    }
    get accidental() {
        return this._accidental;
    }
    set accidental(e1) {
        if (wm.validation && (e1 = e1.toLowerCase(), ![
            "#",
            "##",
            "b",
            "bb"
        ].includes(e1))) throw new Error("Invalid accidental value");
        this._accidental = e1;
    }
    get octave() {
        return this._octave;
    }
    set octave(e1) {
        if (wm.validation && (e1 = parseInt(e1), isNaN(e1))) throw new Error("Invalid octave value");
        this._octave = e1;
    }
    get duration() {
        return this._duration;
    }
    set duration(e1) {
        if (wm.validation && (e1 = parseFloat(e1), isNaN(e1) || null === e1 || e1 < 0)) throw new RangeError("Invalid duration value.");
        this._duration = e1;
    }
    get attack() {
        return this._attack;
    }
    set attack(e1) {
        if (wm.validation && (e1 = parseFloat(e1), isNaN(e1) || !(e1 >= 0 && e1 <= 1))) throw new RangeError("Invalid attack value.");
        this._attack = e1;
    }
    get release() {
        return this._release;
    }
    set release(e1) {
        if (wm.validation && (e1 = parseFloat(e1), isNaN(e1) || !(e1 >= 0 && e1 <= 1))) throw new RangeError("Invalid release value.");
        this._release = e1;
    }
    get rawAttack() {
        return Utilities.fromFloatTo7Bit(this._attack);
    }
    set rawAttack(e1) {
        this._attack = Utilities.from7bitToFloat(e1);
    }
    get rawRelease() {
        return Utilities.fromFloatTo7Bit(this._release);
    }
    set rawRelease(e1) {
        this._release = Utilities.from7bitToFloat(e1);
    }
    get number() {
        return Utilities.toNoteNumber(this.identifier);
    }
    getOffsetNumber(e1 = 0, t1 = 0) {
        return wm.validation && (e1 = parseInt(e1) || 0, t1 = parseInt(t1) || 0), Math.min(Math.max(this.number + 12 * e1 + t1, 0), 127);
    }
}
/**
 * The `Utilities` class contains general-purpose utility methods. All methods are static and
 * should be called using the class name. For example: `Utilities.getNoteDetails("C4")`.
 *
 * @license Apache-2.0
 * @since 3.0.0
 */ class Utilities {
    /**
   * Returns a MIDI note number matching the identifier passed in the form of a string. The
   * identifier must include the octave number. The identifier also optionally include a sharp (#),
   * a double sharp (##), a flat (b) or a double flat (bb) symbol. For example, these are all valid
   * identifiers: C5, G4, D#-1, F0, Gb7, Eb-1, Abb4, B##6, etc.
   *
   * When converting note identifiers to numbers, C4 is considered to be middle C (MIDI note number
   * 60) as per the scientific pitch notation standard.
   *
   * The resulting note number can be offset by using the `octaveOffset` parameter.
   *
   * @param identifier {string} The identifier in the form of a letter, followed by an optional "#",
   * "##", "b" or "bb" followed by the octave number. For exemple: C5, G4, D#-1, F0, Gb7, Eb-1,
   * Abb4, B##6, etc.
   *
   * @param {number} [octaveOffset=0] A integer to offset the octave by.
   *
   * @returns {number} The MIDI note number (an integer between 0 and 127).
   *
   * @throws RangeError Invalid 'octaveOffset' value
   *
   * @throws TypeError Invalid note identifier
   *
   * @license Apache-2.0
   * @since 3.0.0
   * @static
   */ static toNoteNumber(e1, t1 = 0) {
        if (t1 = null == t1 ? 0 : parseInt(t1), isNaN(t1)) throw new RangeError("Invalid 'octaveOffset' value");
        "string" != typeof e1 && (e1 = "");
        const n1 = this.getNoteDetails(e1);
        if (!n1) throw new TypeError("Invalid note identifier");
        let r1 = 12 * (n1.octave + 1 + t1);
        if (r1 += ({
            C: 0,
            D: 2,
            E: 4,
            F: 5,
            G: 7,
            A: 9,
            B: 11
        })[n1.name], n1.accidental && (n1.accidental.startsWith("b") ? r1 -= n1.accidental.length : r1 += n1.accidental.length), r1 < 0 || r1 > 127) throw new RangeError("Invalid octaveOffset value");
        return r1;
    }
    static getNoteDetails(e1) {
        Number.isInteger(e1) && (e1 = this.toNoteIdentifier(e1));
        const t1 = e1.match(/^([CDEFGAB])(#{0,2}|b{0,2})(-?\d+)$/i);
        if (!t1) throw new TypeError("Invalid note identifier");
        const n1 = t1[1].toUpperCase(), r1 = parseInt(t1[3]);
        let i1 = t1[2].toLowerCase();
        i1 = "" === i1 ? void 0 : i1;
        return {
            accidental: i1,
            identifier: n1 + (i1 || "") + r1,
            name: n1,
            octave: r1
        };
    }
    static sanitizeChannels(e1) {
        let t1;
        if (wm.validation) {
            if ("all" === e1) t1 = [
                "all"
            ];
            else if ("none" === e1) return [];
        }
        return t1 = Array.isArray(e1) ? e1 : [
            e1
        ], t1.indexOf("all") > -1 && (t1 = Enumerations.MIDI_CHANNEL_NUMBERS), t1.map(function(e1) {
            return parseInt(e1);
        }).filter(function(e1) {
            return e1 >= 1 && e1 <= 16;
        });
    }
    static toTimestamp(e1) {
        let t1 = !1;
        const n1 = parseFloat(e1);
        return !isNaN(n1) && ("string" == typeof e1 && "+" === e1.substring(0, 1) ? n1 >= 0 && (t1 = wm.time + n1) : n1 >= 0 && (t1 = n1), t1);
    }
    static guessNoteNumber(e1, t1) {
        t1 = parseInt(t1) || 0;
        let n1 = !1;
        if (Number.isInteger(e1) && e1 >= 0 && e1 <= 127) n1 = parseInt(e1);
        else if (parseInt(e1) >= 0 && parseInt(e1) <= 127) n1 = parseInt(e1);
        else if ("string" == typeof e1 || e1 instanceof String) try {
            n1 = this.toNoteNumber(e1.trim(), t1);
        } catch (e1) {
            return !1;
        }
        return n1;
    }
    static toNoteIdentifier(e1, t1) {
        if (e1 = parseInt(e1), isNaN(e1) || e1 < 0 || e1 > 127) throw new RangeError("Invalid note number");
        if (t1 = null == t1 ? 0 : parseInt(t1), isNaN(t1)) throw new RangeError("Invalid octaveOffset value");
        const n1 = Math.floor(e1 / 12 - 1) + t1;
        return [
            "C",
            "C#",
            "D",
            "D#",
            "E",
            "F",
            "F#",
            "G",
            "G#",
            "A",
            "A#",
            "B"
        ][e1 % 12] + n1.toString();
    }
    static buildNote(e1, t1 = {}) {
        if (t1.octaveOffset = parseInt(t1.octaveOffset) || 0, e1 instanceof Note) return e1;
        let n1 = this.guessNoteNumber(e1, t1.octaveOffset);
        if (!1 === n1) throw new TypeError(`The input could not be parsed as a note (${e1})`);
        return t1.octaveOffset = void 0, new Note(n1, t1);
    }
    static buildNoteArray(e1, t1 = {}) {
        let n1 = [];
        return Array.isArray(e1) || (e1 = [
            e1
        ]), e1.forEach((e1)=>{
            n1.push(this.buildNote(e1, t1));
        }), n1;
    }
    static from7bitToFloat(e1) {
        return e1 === 1 / 0 && (e1 = 127), e1 = parseInt(e1) || 0, Math.min(Math.max(e1 / 127, 0), 1);
    }
    static fromFloatTo7Bit(e1) {
        return e1 === 1 / 0 && (e1 = 1), e1 = parseFloat(e1) || 0, Math.min(Math.max(Math.round(127 * e1), 0), 127);
    }
    static fromMsbLsbToFloat(e1, t1 = 0) {
        wm.validation && (e1 = Math.min(Math.max(parseInt(e1) || 0, 0), 127), t1 = Math.min(Math.max(parseInt(t1) || 0, 0), 127));
        const n1 = ((e1 << 7) + t1) / 16383;
        return Math.min(Math.max(n1, 0), 1);
    }
    static fromFloatToMsbLsb(e1) {
        wm.validation && (e1 = Math.min(Math.max(parseFloat(e1) || 0, 0), 1));
        const t1 = Math.round(16383 * e1);
        return {
            msb: t1 >> 7,
            lsb: 127 & t1
        };
    }
    static offsetNumber(e1, t1 = 0, n1 = 0) {
        if (wm.validation) {
            if (e1 = parseInt(e1), isNaN(e1)) throw new Error("Invalid note number");
            t1 = parseInt(t1) || 0, n1 = parseInt(n1) || 0;
        }
        return Math.min(Math.max(e1 + 12 * t1 + n1, 0), 127);
    }
    static getPropertyByValue(e1, t1) {
        return Object.keys(e1).find((n1)=>e1[n1] === t1);
    }
    static getCcNameByNumber(e1) {
        if (!wm.validation || (e1 = parseInt(e1)) >= 0 && e1 <= 127) return Enumerations.CONTROL_CHANGE_MESSAGES[e1].name;
    }
    static getCcNumberByName(e1) {
        let t1 = Enumerations.CONTROL_CHANGE_MESSAGES.find((t1)=>t1.name === e1);
        return t1 ? t1.number : Enumerations.MIDI_CONTROL_CHANGE_MESSAGES[e1];
    }
    static getChannelModeByNumber(e1) {
        if (!(e1 >= 120 && e1 <= 127)) return !1;
        for(let t1 in Enumerations.CHANNEL_MODE_MESSAGES)if (Enumerations.CHANNEL_MODE_MESSAGES.hasOwnProperty(t1) && e1 === Enumerations.CHANNEL_MODE_MESSAGES[t1]) return t1;
        return !1;
    }
    static get isNode() {
        return "undefined" != typeof process && null != process.versions && null != process.versions.node;
    }
    static get isBrowser() {
        return "undefined" != typeof window && void 0 !== window.document;
    }
}
/**
 * The `OutputChannel` class represents a single output MIDI channel. `OutputChannel` objects are
 * provided by an [`Output`](Output) port which, itself, is made available by a device. The
 * `OutputChannel` object is derived from the host's MIDI subsystem and should not be instantiated
 * directly.
 *
 * All 16 `OutputChannel` objects can be found inside the parent output's
 * [`channels`]{@link Output#channels} property.
 *
 * @param {Output} output The [`Output`](Output) this channel belongs to.
 * @param {number} number The MIDI channel number (`1` - `16`).
 *
 * @extends EventEmitter
 * @license Apache-2.0
 * @since 3.0.0
 */ class OutputChannel extends EventEmitter {
    constructor(e1, t1){
        super(), this._output = e1, this._number = t1, this._octaveOffset = 0;
    }
    destroy() {
        this._output = null, this._number = null, this._octaveOffset = 0, this.removeListener();
    }
    send(e1, t1 = {
        time: 0
    }) {
        return this.output.send(e1, t1), this;
    }
    sendKeyAftertouch(e1, t1, n1 = {}) {
        if (wm.validation) {
            if (n1.useRawValue && (n1.rawValue = n1.useRawValue), isNaN(parseFloat(t1))) throw new RangeError("Invalid key aftertouch value.");
            if (n1.rawValue) {
                if (!(t1 >= 0 && t1 <= 127 && Number.isInteger(t1))) throw new RangeError("Key aftertouch raw value must be an integer between 0 and 127.");
            } else if (!(t1 >= 0 && t1 <= 1)) throw new RangeError("Key aftertouch value must be a float between 0 and 1.");
        }
        n1.rawValue || (t1 = Utilities.fromFloatTo7Bit(t1));
        const r1 = wm.octaveOffset + this.output.octaveOffset + this.octaveOffset;
        return Array.isArray(e1) || (e1 = [
            e1
        ]), Utilities.buildNoteArray(e1).forEach((e1)=>{
            this.send([
                (Enumerations.CHANNEL_MESSAGES.keyaftertouch << 4) + (this.number - 1),
                e1.getOffsetNumber(r1),
                t1
            ], {
                time: Utilities.toTimestamp(n1.time)
            });
        }), this;
    }
    /**
   * Sends a MIDI **control change** message to the channel at the scheduled time. The control
   * change message to send can be specified numerically (`0` to `127`) or by using one of the
   * following common names:
   *
   * | Number | Name                          |
   * |--------|-------------------------------|
   * | 0      |`bankselectcoarse`             |
   * | 1      |`modulationwheelcoarse`        |
   * | 2      |`breathcontrollercoarse`       |
   * | 4      |`footcontrollercoarse`         |
   * | 5      |`portamentotimecoarse`         |
   * | 6      |`dataentrycoarse`              |
   * | 7      |`volumecoarse`                 |
   * | 8      |`balancecoarse`                |
   * | 10     |`pancoarse`                    |
   * | 11     |`expressioncoarse`             |
   * | 12     |`effectcontrol1coarse`         |
   * | 13     |`effectcontrol2coarse`         |
   * | 18     |`generalpurposeslider3`        |
   * | 19     |`generalpurposeslider4`        |
   * | 32     |`bankselectfine`               |
   * | 33     |`modulationwheelfine`          |
   * | 34     |`breathcontrollerfine`         |
   * | 36     |`footcontrollerfine`           |
   * | 37     |`portamentotimefine`           |
   * | 38     |`dataentryfine`                |
   * | 39     |`volumefine`                   |
   * | 40     |`balancefine`                  |
   * | 42     |`panfine`                      |
   * | 43     |`expressionfine`               |
   * | 44     |`effectcontrol1fine`           |
   * | 45     |`effectcontrol2fine`           |
   * | 64     |`holdpedal`                    |
   * | 65     |`portamento`                   |
   * | 66     |`sustenutopedal`               |
   * | 67     |`softpedal`                    |
   * | 68     |`legatopedal`                  |
   * | 69     |`hold2pedal`                   |
   * | 70     |`soundvariation`               |
   * | 71     |`resonance`                    |
   * | 72     |`soundreleasetime`             |
   * | 73     |`soundattacktime`              |
   * | 74     |`brightness`                   |
   * | 75     |`soundcontrol6`                |
   * | 76     |`soundcontrol7`                |
   * | 77     |`soundcontrol8`                |
   * | 78     |`soundcontrol9`                |
   * | 79     |`soundcontrol10`               |
   * | 80     |`generalpurposebutton1`        |
   * | 81     |`generalpurposebutton2`        |
   * | 82     |`generalpurposebutton3`        |
   * | 83     |`generalpurposebutton4`        |
   * | 91     |`reverblevel`                  |
   * | 92     |`tremololevel`                 |
   * | 93     |`choruslevel`                  |
   * | 94     |`celestelevel`                 |
   * | 95     |`phaserlevel`                  |
   * | 96     |`dataincrement`                |
   * | 97     |`datadecrement`                |
   * | 98     |`nonregisteredparametercoarse` |
   * | 99     |`nonregisteredparameterfine`   |
   * | 100    |`registeredparametercoarse`    |
   * | 101    |`registeredparameterfine`      |
   * | 120    |`allsoundoff`                  |
   * | 121    |`resetallcontrollers`          |
   * | 122    |`localcontrol`                 |
   * | 123    |`allnotesoff`                  |
   * | 124    |`omnimodeoff`                  |
   * | 125    |`omnimodeon`                   |
   * | 126    |`monomodeon`                   |
   * | 127    |`polymodeon`                   |
   *
   * As you can see above, not all control change message have a matching name. This does not mean
   * you cannot use the others. It simply means you will need to use their number
   * (`0` to `127`) instead of their name. While you can still use them, numbers `120` to `127` are
   * usually reserved for *channel mode* messages. See
   * [`sendChannelMode()`]{@link OutputChannel#sendChannelMode} method for more info.
   *
   * To view a detailed list of all available **control change** messages, please consult "Table 3 -
   * Control Change Messages" from the [MIDI Messages](
   * https://www.midi.org/specifications/item/table-3-control-change-messages-data-bytes-2)
   * specification.
   *
   * **Note**: messages #0-31 (MSB) are paired with messages #32-63 (LSB). For example, message #1
   * (`modulationwheelcoarse`) can be accompanied by a second control change message for
   * `modulationwheelfine` to achieve a greater level of precision. if you want to specify both MSB
   * and LSB for messages between `0` and `31`, you can do so by passing a 2-value array as the
   * second parameter.
   *
   * @param {number|string} controller The MIDI controller name or number (`0` - `127`).
   *
   * @param {number|number[]} value The value to send (0-127). You can also use a two-position array
   * for controllers 0 to 31. In this scenario, the first value will be sent as usual and the second
   * value will be sent to the matching LSB controller (which is obtained by adding 32 to the first
   * controller)
   *
   * @param {object} [options={}]
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @throws {RangeError} Controller numbers must be between 0 and 127.
   * @throws {RangeError} Invalid controller name.
   * @throws {TypeError} The value array must have a length of 2.
   *
   * @returns {OutputChannel} Returns the `OutputChannel` object so methods can be chained.
   *
   * @license Apache-2.0
   * @since 3.0.0
   */ sendControlChange(e1, t1, n1 = {}) {
        if ("string" == typeof e1 && (e1 = Utilities.getCcNumberByName(e1)), Array.isArray(t1) || (t1 = [
            t1
        ]), wm.validation) {
            if (void 0 === e1) throw new TypeError("Control change must be identified with a valid name or an integer between 0 and 127.");
            if (!Number.isInteger(e1) || !(e1 >= 0 && e1 <= 127)) throw new TypeError("Control change number must be an integer between 0 and 127.");
            if (2 === (t1 = t1.map((e1)=>{
                const t1 = Math.min(Math.max(parseInt(e1), 0), 127);
                if (isNaN(t1)) throw new TypeError("Values must be integers between 0 and 127");
                return t1;
            })).length && e1 >= 32) throw new TypeError("To use a value array, the controller must be between 0 and 31");
        }
        return t1.forEach((r1, i1)=>{
            this.send([
                (Enumerations.CHANNEL_MESSAGES.controlchange << 4) + (this.number - 1),
                e1 + 32 * i1,
                t1[i1]
            ], {
                time: Utilities.toTimestamp(n1.time)
            });
        }), this;
    }
    _selectNonRegisteredParameter(e1, t1 = {}) {
        return this.sendControlChange(99, e1[0], t1), this.sendControlChange(98, e1[1], t1), this;
    }
    _deselectRegisteredParameter(e1 = {}) {
        return this.sendControlChange(101, 127, e1), this.sendControlChange(100, 127, e1), this;
    }
    _deselectNonRegisteredParameter(e1 = {}) {
        return this.sendControlChange(101, 127, e1), this.sendControlChange(100, 127, e1), this;
    }
    _selectRegisteredParameter(e1, t1 = {}) {
        return this.sendControlChange(101, e1[0], t1), this.sendControlChange(100, e1[1], t1), this;
    }
    _setCurrentParameter(e1, t1 = {}) {
        return e1 = [].concat(e1), this.sendControlChange(6, e1[0], t1), e1.length < 2 || this.sendControlChange(38, e1[1], t1), this;
    }
    sendRpnDecrement(e1, t1 = {}) {
        if (Array.isArray(e1) || (e1 = Enumerations.REGISTERED_PARAMETERS[e1]), wm.validation) {
            if (void 0 === e1) throw new TypeError("The specified registered parameter is invalid.");
            let t1 = !1;
            if (Object.getOwnPropertyNames(Enumerations.REGISTERED_PARAMETERS).forEach((n1)=>{
                Enumerations.REGISTERED_PARAMETERS[n1][0] === e1[0] && Enumerations.REGISTERED_PARAMETERS[n1][1] === e1[1] && (t1 = !0);
            }), !t1) throw new TypeError("The specified registered parameter is invalid.");
        }
        return this._selectRegisteredParameter(e1, t1), this.sendControlChange(97, 0, t1), this._deselectRegisteredParameter(t1), this;
    }
    sendRpnIncrement(e1, t1 = {}) {
        if (Array.isArray(e1) || (e1 = Enumerations.REGISTERED_PARAMETERS[e1]), wm.validation) {
            if (void 0 === e1) throw new TypeError("The specified registered parameter is invalid.");
            let t1 = !1;
            if (Object.getOwnPropertyNames(Enumerations.REGISTERED_PARAMETERS).forEach((n1)=>{
                Enumerations.REGISTERED_PARAMETERS[n1][0] === e1[0] && Enumerations.REGISTERED_PARAMETERS[n1][1] === e1[1] && (t1 = !0);
            }), !t1) throw new TypeError("The specified registered parameter is invalid.");
        }
        return this._selectRegisteredParameter(e1, t1), this.sendControlChange(96, 0, t1), this._deselectRegisteredParameter(t1), this;
    }
    playNote(e1, t1 = {}) {
        this.sendNoteOn(e1, t1);
        const n1 = Array.isArray(e1) ? e1 : [
            e1
        ];
        for (let e1 of n1)if (parseInt(e1.duration) > 0) {
            const n1 = {
                time: (Utilities.toTimestamp(t1.time) || wm.time) + parseInt(e1.duration),
                release: e1.release,
                rawRelease: e1.rawRelease
            };
            this.sendNoteOff(e1, n1);
        } else if (parseInt(t1.duration) > 0) {
            const n1 = {
                time: (Utilities.toTimestamp(t1.time) || wm.time) + parseInt(t1.duration),
                release: t1.release,
                rawRelease: t1.rawRelease
            };
            this.sendNoteOff(e1, n1);
        }
        return this;
    }
    sendNoteOff(e1, t1 = {}) {
        if (wm.validation) {
            if (null != t1.rawRelease && !(t1.rawRelease >= 0 && t1.rawRelease <= 127)) throw new RangeError("The 'rawRelease' option must be an integer between 0 and 127");
            if (null != t1.release && !(t1.release >= 0 && t1.release <= 1)) throw new RangeError("The 'release' option must be an number between 0 and 1");
            t1.rawVelocity && (t1.rawRelease = t1.velocity, console.warn("The 'rawVelocity' option is deprecated. Use 'rawRelease' instead.")), t1.velocity && (t1.release = t1.velocity, console.warn("The 'velocity' option is deprecated. Use 'attack' instead."));
        }
        let n1 = 64;
        null != t1.rawRelease ? n1 = t1.rawRelease : isNaN(t1.release) || (n1 = Math.round(127 * t1.release));
        const r1 = wm.octaveOffset + this.output.octaveOffset + this.octaveOffset;
        return Utilities.buildNoteArray(e1, {
            rawRelease: parseInt(n1)
        }).forEach((e1)=>{
            this.send([
                (Enumerations.CHANNEL_MESSAGES.noteoff << 4) + (this.number - 1),
                e1.getOffsetNumber(r1),
                e1.rawRelease
            ], {
                time: Utilities.toTimestamp(t1.time)
            });
        }), this;
    }
    stopNote(e1, t1 = {}) {
        return this.sendNoteOff(e1, t1);
    }
    sendNoteOn(e1, t1 = {}) {
        if (wm.validation) {
            if (null != t1.rawAttack && !(t1.rawAttack >= 0 && t1.rawAttack <= 127)) throw new RangeError("The 'rawAttack' option must be an integer between 0 and 127");
            if (null != t1.attack && !(t1.attack >= 0 && t1.attack <= 1)) throw new RangeError("The 'attack' option must be an number between 0 and 1");
            t1.rawVelocity && (t1.rawAttack = t1.velocity, t1.rawRelease = t1.release, console.warn("The 'rawVelocity' option is deprecated. Use 'rawAttack' or 'rawRelease'.")), t1.velocity && (t1.attack = t1.velocity, console.warn("The 'velocity' option is deprecated. Use 'attack' instead."));
        }
        let n1 = 64;
        null != t1.rawAttack ? n1 = t1.rawAttack : isNaN(t1.attack) || (n1 = Math.round(127 * t1.attack));
        const r1 = wm.octaveOffset + this.output.octaveOffset + this.octaveOffset;
        return Utilities.buildNoteArray(e1, {
            rawAttack: n1
        }).forEach((e1)=>{
            this.send([
                (Enumerations.CHANNEL_MESSAGES.noteon << 4) + (this.number - 1),
                e1.getOffsetNumber(r1),
                e1.rawAttack
            ], {
                time: Utilities.toTimestamp(t1.time)
            });
        }), this;
    }
    sendChannelMode(e1, t1 = 0, n1 = {}) {
        if ("string" == typeof e1 && (e1 = Enumerations.CHANNEL_MODE_MESSAGES[e1]), wm.validation) {
            if (void 0 === e1) throw new TypeError("Invalid channel mode message name or number.");
            if (isNaN(e1) || !(e1 >= 120 && e1 <= 127)) throw new TypeError("Invalid channel mode message number.");
            if (isNaN(parseInt(t1)) || t1 < 0 || t1 > 127) throw new RangeError("Value must be an integer between 0 and 127.");
        }
        return this.send([
            (Enumerations.CHANNEL_MESSAGES.controlchange << 4) + (this.number - 1),
            e1,
            t1
        ], {
            time: Utilities.toTimestamp(n1.time)
        }), this;
    }
    sendOmniMode(e1, t1 = {}) {
        return void 0 === e1 || e1 ? this.sendChannelMode("omnimodeon", 0, t1) : this.sendChannelMode("omnimodeoff", 0, t1), this;
    }
    sendChannelAftertouch(e1, t1 = {}) {
        if (wm.validation) {
            if (isNaN(parseFloat(e1))) throw new RangeError("Invalid channel aftertouch value.");
            if (t1.rawValue) {
                if (!(e1 >= 0 && e1 <= 127 && Number.isInteger(e1))) throw new RangeError("Channel aftertouch raw value must be an integer between 0 and 127.");
            } else if (!(e1 >= 0 && e1 <= 1)) throw new RangeError("Channel aftertouch value must be a float between 0 and 1.");
        }
        return t1.rawValue || (e1 = Utilities.fromFloatTo7Bit(e1)), this.send([
            (Enumerations.CHANNEL_MESSAGES.channelaftertouch << 4) + (this.number - 1),
            Math.round(e1)
        ], {
            time: Utilities.toTimestamp(t1.time)
        }), this;
    }
    sendMasterTuning(e1, t1 = {}) {
        if (e1 = parseFloat(e1) || 0, wm.validation && !(e1 > -65 && e1 < 64)) throw new RangeError("The value must be a decimal number larger than -65 and smaller than 64.");
        let n1 = Math.floor(e1) + 64, r1 = e1 - Math.floor(e1);
        r1 = Math.round((r1 + 1) / 2 * 16383);
        let i1 = r1 >> 7 & 127, s1 = 127 & r1;
        return this.sendRpnValue("channelcoarsetuning", n1, t1), this.sendRpnValue("channelfinetuning", [
            i1,
            s1
        ], t1), this;
    }
    sendModulationRange(e1, t1, n1 = {}) {
        if (wm.validation) {
            if (!Number.isInteger(e1) || !(e1 >= 0 && e1 <= 127)) throw new RangeError("The semitones value must be an integer between 0 and 127.");
            if (!(null == t1 || Number.isInteger(t1) && t1 >= 0 && t1 <= 127)) throw new RangeError("If specified, the cents value must be an integer between 0 and 127.");
        }
        return t1 >= 0 && t1 <= 127 || (t1 = 0), this.sendRpnValue("modulationrange", [
            e1,
            t1
        ], n1), this;
    }
    sendNrpnValue(e1, t1, n1 = {}) {
        if (t1 = [].concat(t1), wm.validation) {
            if (!Array.isArray(e1) || !Number.isInteger(e1[0]) || !Number.isInteger(e1[1])) throw new TypeError("The specified NRPN is invalid.");
            if (!(e1[0] >= 0 && e1[0] <= 127)) throw new RangeError("The first byte of the NRPN must be between 0 and 127.");
            if (!(e1[1] >= 0 && e1[1] <= 127)) throw new RangeError("The second byte of the NRPN must be between 0 and 127.");
            t1.forEach((e1)=>{
                if (!(e1 >= 0 && e1 <= 127)) throw new RangeError("The data bytes of the NRPN must be between 0 and 127.");
            });
        }
        return this._selectNonRegisteredParameter(e1, n1), this._setCurrentParameter(t1, n1), this._deselectNonRegisteredParameter(n1), this;
    }
    sendPitchBend(e1, t1 = {}) {
        if (wm.validation) {
            if (t1.rawValue && Array.isArray(e1)) {
                if (!(e1[0] >= 0 && e1[0] <= 127)) throw new RangeError("The pitch bend MSB must be an integer between 0 and 127.");
                if (!(e1[1] >= 0 && e1[1] <= 127)) throw new RangeError("The pitch bend LSB must be an integer between 0 and 127.");
            } else if (t1.rawValue && !Array.isArray(e1)) {
                if (!(e1 >= 0 && e1 <= 127)) throw new RangeError("The pitch bend MSB must be an integer between 0 and 127.");
            } else {
                if (isNaN(e1) || null === e1) throw new RangeError("Invalid pitch bend value.");
                if (!(e1 >= -1 && e1 <= 1)) throw new RangeError("The pitch bend value must be a float between -1 and 1.");
            }
        }
        let n1 = 0, r1 = 0;
        if (t1.rawValue && Array.isArray(e1)) n1 = e1[0], r1 = e1[1];
        else if (t1.rawValue && !Array.isArray(e1)) n1 = e1;
        else {
            const t1 = Utilities.fromFloatToMsbLsb((e1 + 1) / 2);
            n1 = t1.msb, r1 = t1.lsb;
        }
        return this.send([
            (Enumerations.CHANNEL_MESSAGES.pitchbend << 4) + (this.number - 1),
            r1,
            n1
        ], {
            time: Utilities.toTimestamp(t1.time)
        }), this;
    }
    sendPitchBendRange(e1, t1, n1 = {}) {
        if (wm.validation) {
            if (!Number.isInteger(e1) || !(e1 >= 0 && e1 <= 127)) throw new RangeError("The semitones value must be an integer between 0 and 127.");
            if (!Number.isInteger(t1) || !(t1 >= 0 && t1 <= 127)) throw new RangeError("The cents value must be an integer between 0 and 127.");
        }
        return this.sendRpnValue("pitchbendrange", [
            e1,
            t1
        ], n1), this;
    }
    sendProgramChange(e1, t1 = {}) {
        if (e1 = parseInt(e1) || 0, wm.validation && !(e1 >= 0 && e1 <= 127)) throw new RangeError("The program number must be between 0 and 127.");
        return this.send([
            (Enumerations.CHANNEL_MESSAGES.programchange << 4) + (this.number - 1),
            e1
        ], {
            time: Utilities.toTimestamp(t1.time)
        }), this;
    }
    sendRpnValue(e1, t1, n1 = {}) {
        if (Array.isArray(e1) || (e1 = Enumerations.REGISTERED_PARAMETERS[e1]), wm.validation) {
            if (!Number.isInteger(e1[0]) || !Number.isInteger(e1[1])) throw new TypeError("The specified NRPN is invalid.");
            if (!(e1[0] >= 0 && e1[0] <= 127)) throw new RangeError("The first byte of the RPN must be between 0 and 127.");
            if (!(e1[1] >= 0 && e1[1] <= 127)) throw new RangeError("The second byte of the RPN must be between 0 and 127.");
            [].concat(t1).forEach((e1)=>{
                if (!(e1 >= 0 && e1 <= 127)) throw new RangeError("The data bytes of the RPN must be between 0 and 127.");
            });
        }
        return this._selectRegisteredParameter(e1, n1), this._setCurrentParameter(t1, n1), this._deselectRegisteredParameter(n1), this;
    }
    sendTuningBank(e1, t1 = {}) {
        if (wm.validation && (!Number.isInteger(e1) || !(e1 >= 0 && e1 <= 127))) throw new RangeError("The tuning bank number must be between 0 and 127.");
        return this.sendRpnValue("tuningbank", e1, t1), this;
    }
    sendTuningProgram(e1, t1 = {}) {
        if (wm.validation && (!Number.isInteger(e1) || !(e1 >= 0 && e1 <= 127))) throw new RangeError("The tuning program number must be between 0 and 127.");
        return this.sendRpnValue("tuningprogram", e1, t1), this;
    }
    sendLocalControl(e1, t1 = {}) {
        return e1 ? this.sendChannelMode("localcontrol", 127, t1) : this.sendChannelMode("localcontrol", 0, t1);
    }
    sendAllNotesOff(e1 = {}) {
        return this.sendChannelMode("allnotesoff", 0, e1);
    }
    sendAllSoundOff(e1 = {}) {
        return this.sendChannelMode("allsoundoff", 0, e1);
    }
    sendResetAllControllers(e1 = {}) {
        return this.sendChannelMode("resetallcontrollers", 0, e1);
    }
    sendPolyphonicMode(e1, t1 = {}) {
        return "mono" === e1 ? this.sendChannelMode("monomodeon", 0, t1) : this.sendChannelMode("polymodeon", 0, t1);
    }
    get octaveOffset() {
        return this._octaveOffset;
    }
    set octaveOffset(e1) {
        if (this.validation && (e1 = parseInt(e1), isNaN(e1))) throw new TypeError("The 'octaveOffset' property must be an integer.");
        this._octaveOffset = e1;
    }
    get output() {
        return this._output;
    }
    get number() {
        return this._number;
    }
}
/**
 * The `Output` class represents a single MIDI output port (not to be confused with a MIDI channel).
 * A port is made available by a MIDI device. A MIDI device can advertise several input and output
 * ports. Each port has 16 MIDI channels which can be accessed via the [`channels`](#channels)
 * property.
 *
 * The `Output` object is automatically instantiated by the library according to the host's MIDI
 * subsystem and should not be directly instantiated.
 *
 * You can access all available `Output` objects by referring to the
 * [`WebMidi.outputs`](WebMidi#outputs) array or by using methods such as
 * [`WebMidi.getOutputByName()`](WebMidi#getOutputByName) or
 * [`WebMidi.getOutputById()`](WebMidi#getOutputById).
 *
 * @fires Output#opened
 * @fires Output#disconnected
 * @fires Output#closed
 *
 * @extends EventEmitter
 * @license Apache-2.0
 */ class Output extends EventEmitter {
    constructor(e1){
        super(), this._midiOutput = e1, this._octaveOffset = 0, this.channels = [];
        for(let e1 = 1; e1 <= 16; e1++)this.channels[e1] = new OutputChannel(this, e1);
        this._midiOutput.onstatechange = this._onStateChange.bind(this);
    }
    async destroy() {
        this.removeListener(), this.channels.forEach((e1)=>e1.destroy()), this.channels = [], this._midiOutput && (this._midiOutput.onstatechange = null), await this.close(), this._midiOutput = null;
    }
    _onStateChange(e1) {
        let t1 = {
            timestamp: wm.time
        };
        "open" === e1.port.connection ? (t1.type = "opened", t1.target = this, t1.port = t1.target, this.emit("opened", t1)) : "closed" === e1.port.connection && "connected" === e1.port.state ? (t1.type = "closed", t1.target = this, t1.port = t1.target, this.emit("closed", t1)) : "closed" === e1.port.connection && "disconnected" === e1.port.state ? (t1.type = "disconnected", t1.port = {
            connection: e1.port.connection,
            id: e1.port.id,
            manufacturer: e1.port.manufacturer,
            name: e1.port.name,
            state: e1.port.state,
            type: e1.port.type
        }, this.emit("disconnected", t1)) : "pending" === e1.port.connection && "disconnected" === e1.port.state || console.warn("This statechange event was not caught:", e1.port.connection, e1.port.state);
    }
    async open() {
        try {
            return await this._midiOutput.open(), Promise.resolve(this);
        } catch (e1) {
            return Promise.reject(e1);
        }
    }
    async close() {
        this._midiOutput ? await this._midiOutput.close() : await Promise.resolve();
    }
    /**
   * Sends a MIDI message on the MIDI output port. If no time is specified, the message will be
   * sent immediately. The message should be an array of 8 bit unsigned integers (0-225), a
   * [`Uint8Array`]{@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array}
   * object or a [`Message`](Message) object.
   *
   * It is usually not necessary to use this method directly as you can use one of the simpler
   * helper methods such as [`playNote()`](#playNote), [`stopNote()`](#stopNote),
   * [`sendControlChange()`](#sendControlChange), etc.
   *
   * Details on the format of MIDI messages are available in the summary of
   * [MIDI messages]{@link https://www.midi.org/specifications-old/item/table-1-summary-of-midi-message}
   * from the MIDI Manufacturers Association.
   *
   * @param message {number[]|Uint8Array|Message} An array of 8bit unsigned integers, a `Uint8Array`
   * object (not available in Node.js) containing the message bytes or a `Message` object.
   *
   * @param {object} [options={}]
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @throws {RangeError} The first byte (status) must be an integer between 128 and 255.
   *
   * @returns {Output} Returns the `Output` object so methods can be chained.
   *
   * @license Apache-2.0
   */ send(e1, t1 = {
        time: 0
    }, n1 = 0) {
        if (e1 instanceof Message && (e1 = Utilities.isNode ? e1.data : e1.rawData), e1 instanceof Uint8Array && Utilities.isNode && (e1 = Array.from(e1)), wm.validation) {
            if (Array.isArray(e1) || e1 instanceof Uint8Array || (e1 = [
                e1
            ], Array.isArray(t1) && (e1 = e1.concat(t1)), t1 = isNaN(n1) ? {
                time: 0
            } : {
                time: n1
            }), !(parseInt(e1[0]) >= 128 && parseInt(e1[0]) <= 255)) throw new RangeError("The first byte (status) must be an integer between 128 and 255.");
            e1.slice(1).forEach((e1)=>{
                if (!((e1 = parseInt(e1)) >= 0 && e1 <= 255)) throw new RangeError("Data bytes must be integers between 0 and 255.");
            }), t1 || (t1 = {
                time: 0
            });
        }
        return this._midiOutput.send(e1, Utilities.toTimestamp(t1.time)), this;
    }
    sendSysex(e1, t1 = [], n1 = {}) {
        if (e1 = [].concat(e1), t1 instanceof Uint8Array) {
            const r1 = new Uint8Array(1 + e1.length + t1.length + 1);
            r1[0] = Enumerations.SYSTEM_MESSAGES.sysex, r1.set(Uint8Array.from(e1), 1), r1.set(t1, 1 + e1.length), r1[r1.length - 1] = Enumerations.SYSTEM_MESSAGES.sysexend, this.send(r1, {
                time: n1.time
            });
        } else {
            const r1 = e1.concat(t1, Enumerations.SYSTEM_MESSAGES.sysexend);
            this.send([
                Enumerations.SYSTEM_MESSAGES.sysex
            ].concat(r1), {
                time: n1.time
            });
        }
        return this;
    }
    clear() {
        return this._midiOutput.clear ? this._midiOutput.clear() : wm.validation && console.warn("The 'clear()' method has not yet been implemented in your environment."), this;
    }
    sendTimecodeQuarterFrame(e1, t1 = {}) {
        if (wm.validation && (e1 = parseInt(e1), isNaN(e1) || !(e1 >= 0 && e1 <= 127))) throw new RangeError("The value must be an integer between 0 and 127.");
        return this.send([
            Enumerations.SYSTEM_MESSAGES.timecode,
            e1
        ], {
            time: t1.time
        }), this;
    }
    sendSongPosition(e1 = 0, t1 = {}) {
        var n1 = (e1 = Math.floor(e1) || 0) >> 7 & 127, r1 = 127 & e1;
        return this.send([
            Enumerations.SYSTEM_MESSAGES.songposition,
            n1,
            r1
        ], {
            time: t1.time
        }), this;
    }
    sendSongSelect(e1 = 0, t1 = {}) {
        if (wm.validation && (e1 = parseInt(e1), isNaN(e1) || !(e1 >= 0 && e1 <= 127))) throw new RangeError("The program value must be between 0 and 127");
        return this.send([
            Enumerations.SYSTEM_MESSAGES.songselect,
            e1
        ], {
            time: t1.time
        }), this;
    }
    sendTuneRequest(e1 = {}) {
        return this.send([
            Enumerations.SYSTEM_MESSAGES.tunerequest
        ], {
            time: e1.time
        }), this;
    }
    sendClock(e1 = {}) {
        return this.send([
            Enumerations.SYSTEM_MESSAGES.clock
        ], {
            time: e1.time
        }), this;
    }
    sendStart(e1 = {}) {
        return this.send([
            Enumerations.SYSTEM_MESSAGES.start
        ], {
            time: e1.time
        }), this;
    }
    sendContinue(e1 = {}) {
        return this.send([
            Enumerations.SYSTEM_MESSAGES.continue
        ], {
            time: e1.time
        }), this;
    }
    sendStop(e1 = {}) {
        return this.send([
            Enumerations.SYSTEM_MESSAGES.stop
        ], {
            time: e1.time
        }), this;
    }
    sendActiveSensing(e1 = {}) {
        return this.send([
            Enumerations.SYSTEM_MESSAGES.activesensing
        ], {
            time: e1.time
        }), this;
    }
    sendReset(e1 = {}) {
        return this.send([
            Enumerations.SYSTEM_MESSAGES.reset
        ], {
            time: e1.time
        }), this;
    }
    sendTuningRequest(e1 = {}) {
        return wm.validation && console.warn("The sendTuningRequest() method has been deprecated. Use sendTuningRequest() instead."), this.sendTuneRequest(e1);
    }
    sendKeyAftertouch(e1, t1, n1 = {}) {
        return null == n1.channels && (n1.channels = Enumerations.MIDI_CHANNEL_NUMBERS), Utilities.sanitizeChannels(n1.channels).forEach((r1)=>{
            this.channels[r1].sendKeyAftertouch(e1, t1, n1);
        }), this;
    }
    sendControlChange(e1, t1, n1 = {}, r1 = {}) {
        if (wm.validation && (Array.isArray(n1) || Number.isInteger(n1) || "all" === n1)) {
            const e1 = n1;
            (n1 = r1).channels = e1, "all" === n1.channels && (n1.channels = Enumerations.MIDI_CHANNEL_NUMBERS);
        }
        return null == n1.channels && (n1.channels = Enumerations.MIDI_CHANNEL_NUMBERS), Utilities.sanitizeChannels(n1.channels).forEach((r1)=>{
            this.channels[r1].sendControlChange(e1, t1, n1);
        }), this;
    }
    sendPitchBendRange(e1 = 0, t1 = 0, n1 = {}) {
        return null == n1.channels && (n1.channels = Enumerations.MIDI_CHANNEL_NUMBERS), Utilities.sanitizeChannels(n1.channels).forEach((r1)=>{
            this.channels[r1].sendPitchBendRange(e1, t1, n1);
        }), this;
    }
    setPitchBendRange(e1 = 0, t1 = 0, n1 = "all", r1 = {}) {
        return wm.validation && (console.warn("The setPitchBendRange() method is deprecated. Use sendPitchBendRange() instead."), r1.channels = n1, "all" === r1.channels && (r1.channels = Enumerations.MIDI_CHANNEL_NUMBERS)), this.sendPitchBendRange(e1, t1, r1);
    }
    sendRpnValue(e1, t1, n1 = {}) {
        return null == n1.channels && (n1.channels = Enumerations.MIDI_CHANNEL_NUMBERS), Utilities.sanitizeChannels(n1.channels).forEach((r1)=>{
            this.channels[r1].sendRpnValue(e1, t1, n1);
        }), this;
    }
    setRegisteredParameter(e1, t1 = [], n1 = "all", r1 = {}) {
        return wm.validation && (console.warn("The setRegisteredParameter() method is deprecated. Use sendRpnValue() instead."), r1.channels = n1, "all" === r1.channels && (r1.channels = Enumerations.MIDI_CHANNEL_NUMBERS)), this.sendRpnValue(e1, t1, r1);
    }
    sendChannelAftertouch(e1, t1 = {}, n1 = {}) {
        if (wm.validation && (Array.isArray(t1) || Number.isInteger(t1) || "all" === t1)) {
            const e1 = t1;
            (t1 = n1).channels = e1, "all" === t1.channels && (t1.channels = Enumerations.MIDI_CHANNEL_NUMBERS);
        }
        return null == t1.channels && (t1.channels = Enumerations.MIDI_CHANNEL_NUMBERS), Utilities.sanitizeChannels(t1.channels).forEach((n1)=>{
            this.channels[n1].sendChannelAftertouch(e1, t1);
        }), this;
    }
    sendPitchBend(e1, t1 = {}, n1 = {}) {
        if (wm.validation && (Array.isArray(t1) || Number.isInteger(t1) || "all" === t1)) {
            const e1 = t1;
            (t1 = n1).channels = e1, "all" === t1.channels && (t1.channels = Enumerations.MIDI_CHANNEL_NUMBERS);
        }
        return null == t1.channels && (t1.channels = Enumerations.MIDI_CHANNEL_NUMBERS), Utilities.sanitizeChannels(t1.channels).forEach((n1)=>{
            this.channels[n1].sendPitchBend(e1, t1);
        }), this;
    }
    sendProgramChange(e1 = 0, t1 = {}, n1 = {}) {
        if (wm.validation && (Array.isArray(t1) || Number.isInteger(t1) || "all" === t1)) {
            const e1 = t1;
            (t1 = n1).channels = e1, "all" === t1.channels && (t1.channels = Enumerations.MIDI_CHANNEL_NUMBERS);
        }
        return null == t1.channels && (t1.channels = Enumerations.MIDI_CHANNEL_NUMBERS), Utilities.sanitizeChannels(t1.channels).forEach((n1)=>{
            this.channels[n1].sendProgramChange(e1, t1);
        }), this;
    }
    sendModulationRange(e1, t1, n1 = {}) {
        return null == n1.channels && (n1.channels = Enumerations.MIDI_CHANNEL_NUMBERS), Utilities.sanitizeChannels(n1.channels).forEach((r1)=>{
            this.channels[r1].sendModulationRange(e1, t1, n1);
        }), this;
    }
    setModulationRange(e1 = 0, t1 = 0, n1 = "all", r1 = {}) {
        return wm.validation && (console.warn("The setModulationRange() method is deprecated. Use sendModulationRange() instead."), r1.channels = n1, "all" === r1.channels && (r1.channels = Enumerations.MIDI_CHANNEL_NUMBERS)), this.sendModulationRange(e1, t1, r1);
    }
    sendMasterTuning(e1, t1 = {}) {
        return null == t1.channels && (t1.channels = Enumerations.MIDI_CHANNEL_NUMBERS), Utilities.sanitizeChannels(t1.channels).forEach((n1)=>{
            this.channels[n1].sendMasterTuning(e1, t1);
        }), this;
    }
    setMasterTuning(e1, t1 = {}, n1 = {}) {
        return wm.validation && (console.warn("The setMasterTuning() method is deprecated. Use sendMasterTuning() instead."), n1.channels = t1, "all" === n1.channels && (n1.channels = Enumerations.MIDI_CHANNEL_NUMBERS)), this.sendMasterTuning(e1, n1);
    }
    sendTuningProgram(e1, t1 = {}) {
        return null == t1.channels && (t1.channels = Enumerations.MIDI_CHANNEL_NUMBERS), Utilities.sanitizeChannels(t1.channels).forEach((n1)=>{
            this.channels[n1].sendTuningProgram(e1, t1);
        }), this;
    }
    setTuningProgram(e1, t1 = "all", n1 = {}) {
        return wm.validation && (console.warn("The setTuningProgram() method is deprecated. Use sendTuningProgram() instead."), n1.channels = t1, "all" === n1.channels && (n1.channels = Enumerations.MIDI_CHANNEL_NUMBERS)), this.sendTuningProgram(e1, n1);
    }
    sendTuningBank(e1 = 0, t1 = {}) {
        return null == t1.channels && (t1.channels = Enumerations.MIDI_CHANNEL_NUMBERS), Utilities.sanitizeChannels(t1.channels).forEach((n1)=>{
            this.channels[n1].sendTuningBank(e1, t1);
        }), this;
    }
    setTuningBank(e1, t1 = "all", n1 = {}) {
        return wm.validation && (console.warn("The setTuningBank() method is deprecated. Use sendTuningBank() instead."), n1.channels = t1, "all" === n1.channels && (n1.channels = Enumerations.MIDI_CHANNEL_NUMBERS)), this.sendTuningBank(e1, n1);
    }
    sendChannelMode(e1, t1 = 0, n1 = {}, r1 = {}) {
        if (wm.validation && (Array.isArray(n1) || Number.isInteger(n1) || "all" === n1)) {
            const e1 = n1;
            (n1 = r1).channels = e1, "all" === n1.channels && (n1.channels = Enumerations.MIDI_CHANNEL_NUMBERS);
        }
        return null == n1.channels && (n1.channels = Enumerations.MIDI_CHANNEL_NUMBERS), Utilities.sanitizeChannels(n1.channels).forEach((r1)=>{
            this.channels[r1].sendChannelMode(e1, t1, n1);
        }), this;
    }
    sendAllSoundOff(e1 = {}) {
        return null == e1.channels && (e1.channels = Enumerations.MIDI_CHANNEL_NUMBERS), Utilities.sanitizeChannels(e1.channels).forEach((t1)=>{
            this.channels[t1].sendAllSoundOff(e1);
        }), this;
    }
    sendAllNotesOff(e1 = {}) {
        return null == e1.channels && (e1.channels = Enumerations.MIDI_CHANNEL_NUMBERS), Utilities.sanitizeChannels(e1.channels).forEach((t1)=>{
            this.channels[t1].sendAllNotesOff(e1);
        }), this;
    }
    sendResetAllControllers(e1 = {}, t1 = {}) {
        if (wm.validation && (Array.isArray(e1) || Number.isInteger(e1) || "all" === e1)) {
            const n1 = e1;
            (e1 = t1).channels = n1, "all" === e1.channels && (e1.channels = Enumerations.MIDI_CHANNEL_NUMBERS);
        }
        return null == e1.channels && (e1.channels = Enumerations.MIDI_CHANNEL_NUMBERS), Utilities.sanitizeChannels(e1.channels).forEach((t1)=>{
            this.channels[t1].sendResetAllControllers(e1);
        }), this;
    }
    sendPolyphonicMode(e1, t1 = {}, n1 = {}) {
        if (wm.validation && (Array.isArray(t1) || Number.isInteger(t1) || "all" === t1)) {
            const e1 = t1;
            (t1 = n1).channels = e1, "all" === t1.channels && (t1.channels = Enumerations.MIDI_CHANNEL_NUMBERS);
        }
        return null == t1.channels && (t1.channels = Enumerations.MIDI_CHANNEL_NUMBERS), Utilities.sanitizeChannels(t1.channels).forEach((n1)=>{
            this.channels[n1].sendPolyphonicMode(e1, t1);
        }), this;
    }
    sendLocalControl(e1, t1 = {}, n1 = {}) {
        if (wm.validation && (Array.isArray(t1) || Number.isInteger(t1) || "all" === t1)) {
            const e1 = t1;
            (t1 = n1).channels = e1, "all" === t1.channels && (t1.channels = Enumerations.MIDI_CHANNEL_NUMBERS);
        }
        return null == t1.channels && (t1.channels = Enumerations.MIDI_CHANNEL_NUMBERS), Utilities.sanitizeChannels(t1.channels).forEach((n1)=>{
            this.channels[n1].sendLocalControl(e1, t1);
        }), this;
    }
    sendOmniMode(e1, t1 = {}, n1 = {}) {
        if (wm.validation && (Array.isArray(t1) || Number.isInteger(t1) || "all" === t1)) {
            const e1 = t1;
            (t1 = n1).channels = e1, "all" === t1.channels && (t1.channels = Enumerations.MIDI_CHANNEL_NUMBERS);
        }
        return null == t1.channels && (t1.channels = Enumerations.MIDI_CHANNEL_NUMBERS), Utilities.sanitizeChannels(t1.channels).forEach((n1)=>{
            this.channels[n1].sendOmniMode(e1, t1);
        }), this;
    }
    sendNrpnValue(e1, t1, n1 = {}) {
        return null == n1.channels && (n1.channels = Enumerations.MIDI_CHANNEL_NUMBERS), Utilities.sanitizeChannels(n1.channels).forEach((r1)=>{
            this.channels[r1].sendNrpnValue(e1, t1, n1);
        }), this;
    }
    setNonRegisteredParameter(e1, t1 = [], n1 = "all", r1 = {}) {
        return wm.validation && (console.warn("The setNonRegisteredParameter() method is deprecated. Use sendNrpnValue() instead."), r1.channels = n1, "all" === r1.channels && (r1.channels = Enumerations.MIDI_CHANNEL_NUMBERS)), this.sendNrpnValue(e1, t1, r1);
    }
    sendRpnIncrement(e1, t1 = {}) {
        return null == t1.channels && (t1.channels = Enumerations.MIDI_CHANNEL_NUMBERS), Utilities.sanitizeChannels(t1.channels).forEach((n1)=>{
            this.channels[n1].sendRpnIncrement(e1, t1);
        }), this;
    }
    incrementRegisteredParameter(e1, t1 = "all", n1 = {}) {
        return wm.validation && (console.warn("The incrementRegisteredParameter() method is deprecated. Use sendRpnIncrement() instead."), n1.channels = t1, "all" === n1.channels && (n1.channels = Enumerations.MIDI_CHANNEL_NUMBERS)), this.sendRpnIncrement(e1, n1);
    }
    sendRpnDecrement(e1, t1 = {}) {
        return null == t1.channels && (t1.channels = Enumerations.MIDI_CHANNEL_NUMBERS), Utilities.sanitizeChannels(t1.channels).forEach((n1)=>{
            this.channels[n1].sendRpnDecrement(e1, t1);
        }), this;
    }
    decrementRegisteredParameter(e1, t1 = "all", n1 = {}) {
        return wm.validation && (console.warn("The decrementRegisteredParameter() method is deprecated. Use sendRpnDecrement() instead."), n1.channels = t1, "all" === n1.channels && (n1.channels = Enumerations.MIDI_CHANNEL_NUMBERS)), this.sendRpnDecrement(e1, n1);
    }
    sendNoteOff(e1, t1 = {}, n1 = {}) {
        if (wm.validation && (Array.isArray(t1) || Number.isInteger(t1) || "all" === t1)) {
            const e1 = t1;
            (t1 = n1).channels = e1, "all" === t1.channels && (t1.channels = Enumerations.MIDI_CHANNEL_NUMBERS);
        }
        return null == t1.channels && (t1.channels = Enumerations.MIDI_CHANNEL_NUMBERS), Utilities.sanitizeChannels(t1.channels).forEach((n1)=>{
            this.channels[n1].sendNoteOff(e1, t1);
        }), this;
    }
    stopNote(e1, t1) {
        return this.sendNoteOff(e1, t1);
    }
    playNote(e1, t1 = {}, n1 = {}) {
        if (wm.validation && (t1.rawVelocity && console.warn("The 'rawVelocity' option is deprecated. Use 'rawAttack' instead."), t1.velocity && console.warn("The 'velocity' option is deprecated. Use 'velocity' instead."), Array.isArray(t1) || Number.isInteger(t1) || "all" === t1)) {
            const e1 = t1;
            (t1 = n1).channels = e1, "all" === t1.channels && (t1.channels = Enumerations.MIDI_CHANNEL_NUMBERS);
        }
        return null == t1.channels && (t1.channels = Enumerations.MIDI_CHANNEL_NUMBERS), Utilities.sanitizeChannels(t1.channels).forEach((n1)=>{
            this.channels[n1].playNote(e1, t1);
        }), this;
    }
    sendNoteOn(e1, t1 = {}, n1 = {}) {
        if (wm.validation && (Array.isArray(t1) || Number.isInteger(t1) || "all" === t1)) {
            const e1 = t1;
            (t1 = n1).channels = e1, "all" === t1.channels && (t1.channels = Enumerations.MIDI_CHANNEL_NUMBERS);
        }
        return null == t1.channels && (t1.channels = Enumerations.MIDI_CHANNEL_NUMBERS), Utilities.sanitizeChannels(t1.channels).forEach((n1)=>{
            this.channels[n1].sendNoteOn(e1, t1);
        }), this;
    }
    get name() {
        return this._midiOutput.name;
    }
    get id() {
        return this._midiOutput.id;
    }
    get connection() {
        return this._midiOutput.connection;
    }
    get manufacturer() {
        return this._midiOutput.manufacturer;
    }
    get state() {
        return this._midiOutput.state;
    }
    get type() {
        return this._midiOutput.type;
    }
    get octaveOffset() {
        return this._octaveOffset;
    }
    set octaveOffset(e1) {
        if (this.validation && (e1 = parseInt(e1), isNaN(e1))) throw new TypeError("The 'octaveOffset' property must be an integer.");
        this._octaveOffset = e1;
    }
}
/**
 * The `Forwarder` class allows the forwarding of MIDI messages to predetermined outputs. When you
 * call its [`forward()`](#forward) method, it will send the specified [`Message`](Message) object
 * to all the outputs listed in its [`destinations`](#destinations) property.
 *
 * If specific channels or message types have been defined in the [`channels`](#channels) or
 * [`types`](#types) properties, only messages matching the channels/types will be forwarded.
 *
 * While it can be manually instantiated, you are more likely to come across a `Forwarder` object as
 * the return value of the [`Input.addForwarder()`](Input#addForwarder) method.
 *
 * @license Apache-2.0
 * @since 3.0.0
 */ class Forwarder {
    constructor(e1 = [], t1 = {}){
        this.destinations = [], this.types = [
            ...Object.keys(Enumerations.SYSTEM_MESSAGES),
            ...Object.keys(Enumerations.CHANNEL_MESSAGES)
        ], this.channels = Enumerations.MIDI_CHANNEL_NUMBERS, this.suspended = !1, Array.isArray(e1) || (e1 = [
            e1
        ]), t1.types && !Array.isArray(t1.types) && (t1.types = [
            t1.types
        ]), t1.channels && !Array.isArray(t1.channels) && (t1.channels = [
            t1.channels
        ]), wm.validation && (e1.forEach((e1)=>{
            if (!(e1 instanceof Output)) throw new TypeError("Destinations must be of type 'Output'.");
        }), void 0 !== t1.types && t1.types.forEach((e1)=>{
            if (!Enumerations.SYSTEM_MESSAGES.hasOwnProperty(e1) && !Enumerations.CHANNEL_MESSAGES.hasOwnProperty(e1)) throw new TypeError("Type must be a valid message type.");
        }), void 0 !== t1.channels && t1.channels.forEach((e1)=>{
            if (!Enumerations.MIDI_CHANNEL_NUMBERS.includes(e1)) throw new TypeError("MIDI channel must be between 1 and 16.");
        })), this.destinations = e1, t1.types && (this.types = t1.types), t1.channels && (this.channels = t1.channels);
    }
    forward(e1) {
        this.suspended || this.types.includes(e1.type) && (e1.channel && !this.channels.includes(e1.channel) || this.destinations.forEach((t1)=>{
            (!wm.validation || t1 instanceof Output) && t1.send(e1);
        }));
    }
}
/**
 * The `InputChannel` class represents a single MIDI input channel (1-16) from a single input
 * device. This object is derived from the host's MIDI subsystem and should not be instantiated
 * directly.
 *
 * All 16 `InputChannel` objects can be found inside the input's [`channels`](Input#channels)
 * property.
 *
 * @fires InputChannel#midimessage
 * @fires InputChannel#unknownmessage
 *
 * @fires InputChannel#noteoff
 * @fires InputChannel#noteon
 * @fires InputChannel#keyaftertouch
 * @fires InputChannel#programchange
 * @fires InputChannel#channelaftertouch
 * @fires InputChannel#pitchbend
 *
 * @fires InputChannel#allnotesoff
 * @fires InputChannel#allsoundoff
 * @fires InputChannel#localcontrol
 * @fires InputChannel#monomode
 * @fires InputChannel#omnimode
 * @fires InputChannel#resetallcontrollers
 *
 * @fires InputChannel#event:nrpn
 * @fires InputChannel#event:nrpn-dataentrycoarse
 * @fires InputChannel#event:nrpn-dataentryfine
 * @fires InputChannel#event:nrpn-dataincrement
 * @fires InputChannel#event:nrpn-datadecrement
 * @fires InputChannel#event:rpn
 * @fires InputChannel#event:rpn-dataentrycoarse
 * @fires InputChannel#event:rpn-dataentryfine
 * @fires InputChannel#event:rpn-dataincrement
 * @fires InputChannel#event:rpn-datadecrement
 *
 * @fires InputChannel#controlchange
 * @fires InputChannel#event:controlchange-controllerxxx
 * @fires InputChannel#event:controlchange-bankselectcoarse
 * @fires InputChannel#event:controlchange-modulationwheelcoarse
 * @fires InputChannel#event:controlchange-breathcontrollercoarse
 * @fires InputChannel#event:controlchange-footcontrollercoarse
 * @fires InputChannel#event:controlchange-portamentotimecoarse
 * @fires InputChannel#event:controlchange-dataentrycoarse
 * @fires InputChannel#event:controlchange-volumecoarse
 * @fires InputChannel#event:controlchange-balancecoarse
 * @fires InputChannel#event:controlchange-pancoarse
 * @fires InputChannel#event:controlchange-expressioncoarse
 * @fires InputChannel#event:controlchange-effectcontrol1coarse
 * @fires InputChannel#event:controlchange-effectcontrol2coarse
 * @fires InputChannel#event:controlchange-generalpurposecontroller1
 * @fires InputChannel#event:controlchange-generalpurposecontroller2
 * @fires InputChannel#event:controlchange-generalpurposecontroller3
 * @fires InputChannel#event:controlchange-generalpurposecontroller4
 * @fires InputChannel#event:controlchange-bankselectfine
 * @fires InputChannel#event:controlchange-modulationwheelfine
 * @fires InputChannel#event:controlchange-breathcontrollerfine
 * @fires InputChannel#event:controlchange-footcontrollerfine
 * @fires InputChannel#event:controlchange-portamentotimefine
 * @fires InputChannel#event:controlchange-dataentryfine
 * @fires InputChannel#event:controlchange-channelvolumefine
 * @fires InputChannel#event:controlchange-balancefine
 * @fires InputChannel#event:controlchange-panfine
 * @fires InputChannel#event:controlchange-expressionfine
 * @fires InputChannel#event:controlchange-effectcontrol1fine
 * @fires InputChannel#event:controlchange-effectcontrol2fine
 * @fires InputChannel#event:controlchange-damperpedal
 * @fires InputChannel#event:controlchange-portamento
 * @fires InputChannel#event:controlchange-sostenuto
 * @fires InputChannel#event:controlchange-softpedal
 * @fires InputChannel#event:controlchange-legatopedal
 * @fires InputChannel#event:controlchange-hold2
 * @fires InputChannel#event:controlchange-soundvariation
 * @fires InputChannel#event:controlchange-resonance
 * @fires InputChannel#event:controlchange-releasetime
 * @fires InputChannel#event:controlchange-attacktime
 * @fires InputChannel#event:controlchange-brightness
 * @fires InputChannel#event:controlchange-decaytime
 * @fires InputChannel#event:controlchange-vibratorate
 * @fires InputChannel#event:controlchange-vibratodepth
 * @fires InputChannel#event:controlchange-vibratodelay
 * @fires InputChannel#event:controlchange-generalpurposecontroller5
 * @fires InputChannel#event:controlchange-generalpurposecontroller6
 * @fires InputChannel#event:controlchange-generalpurposecontroller7
 * @fires InputChannel#event:controlchange-generalpurposecontroller8
 * @fires InputChannel#event:controlchange-portamentocontrol
 * @fires InputChannel#event:controlchange-highresolutionvelocityprefix
 * @fires InputChannel#event:controlchange-effect1depth
 * @fires InputChannel#event:controlchange-effect2depth
 * @fires InputChannel#event:controlchange-effect3depth
 * @fires InputChannel#event:controlchange-effect4depth
 * @fires InputChannel#event:controlchange-effect5depth
 * @fires InputChannel#event:controlchange-dataincrement
 * @fires InputChannel#event:controlchange-datadecrement
 * @fires InputChannel#event:controlchange-nonregisteredparameterfine
 * @fires InputChannel#event:controlchange-nonregisteredparametercoarse
 * @fires InputChannel#event:controlchange-registeredparameterfine
 * @fires InputChannel#event:controlchange-registeredparametercoarse
 * @fires InputChannel#event:controlchange-allsoundoff
 * @fires InputChannel#event:controlchange-resetallcontrollers
 * @fires InputChannel#event:controlchange-localcontrol
 * @fires InputChannel#event:controlchange-allnotesoff
 * @fires InputChannel#event:controlchange-omnimodeoff
 * @fires InputChannel#event:controlchange-omnimodeon
 * @fires InputChannel#event:controlchange-monomodeon
 * @fires InputChannel#event:controlchange-polymodeon
 * @fires InputChannel#event:
 *
 * @extends EventEmitter
 * @license Apache-2.0
 * @since 3.0.0
 */ class InputChannel extends EventEmitter {
    constructor(e1, t1){
        super(), this._input = e1, this._number = t1, this._octaveOffset = 0, this._nrpnBuffer = [], this._rpnBuffer = [], this.parameterNumberEventsEnabled = !0, this.notesState = new Array(128).fill(!1);
    }
    destroy() {
        this._input = null, this._number = null, this._octaveOffset = 0, this._nrpnBuffer = [], this.notesState = new Array(128).fill(!1), this.parameterNumberEventsEnabled = !1, this.removeListener();
    }
    _processMidiMessageEvent(e1) {
        const t1 = Object.assign({}, e1);
        t1.port = this.input, t1.target = this, t1.type = "midimessage", this.emit(t1.type, t1), this._parseEventForStandardMessages(t1);
    }
    _parseEventForStandardMessages(e1) {
        const t1 = Object.assign({}, e1);
        t1.type = t1.message.type || "unknownmessage";
        const n1 = e1.message.dataBytes[0], r1 = e1.message.dataBytes[1];
        if ("noteoff" === t1.type || "noteon" === t1.type && 0 === r1) this.notesState[n1] = !1, t1.type = "noteoff", t1.note = new Note(Utilities.offsetNumber(n1, this.octaveOffset + this.input.octaveOffset + wm.octaveOffset), {
            rawAttack: 0,
            rawRelease: r1
        }), t1.value = Utilities.from7bitToFloat(r1), t1.rawValue = r1, t1.velocity = t1.note.release, t1.rawVelocity = t1.note.rawRelease;
        else if ("noteon" === t1.type) this.notesState[n1] = !0, t1.note = new Note(Utilities.offsetNumber(n1, this.octaveOffset + this.input.octaveOffset + wm.octaveOffset), {
            rawAttack: r1
        }), t1.value = Utilities.from7bitToFloat(r1), t1.rawValue = r1, t1.velocity = t1.note.attack, t1.rawVelocity = t1.note.rawAttack;
        else if ("keyaftertouch" === t1.type) t1.note = new Note(Utilities.offsetNumber(n1, this.octaveOffset + this.input.octaveOffset + wm.octaveOffset)), t1.value = Utilities.from7bitToFloat(r1), t1.rawValue = r1, t1.identifier = t1.note.identifier, t1.key = t1.note.number, t1.rawKey = n1;
        else if ("controlchange" === t1.type) {
            t1.controller = {
                number: n1,
                name: Enumerations.CONTROL_CHANGE_MESSAGES[n1].name,
                description: Enumerations.CONTROL_CHANGE_MESSAGES[n1].description,
                position: Enumerations.CONTROL_CHANGE_MESSAGES[n1].position
            }, t1.subtype = t1.controller.name || "controller" + n1, t1.value = Utilities.from7bitToFloat(r1), t1.rawValue = r1;
            const e1 = Object.assign({}, t1);
            e1.type = `${t1.type}-controller${n1}`, delete e1.subtype, this.emit(e1.type, e1);
            const i1 = Object.assign({}, t1);
            i1.type = t1.type + "-" + Enumerations.CONTROL_CHANGE_MESSAGES[n1].name, delete i1.subtype, 0 !== i1.type.indexOf("controller") && this.emit(i1.type, i1), t1.message.dataBytes[0] >= 120 && this._parseChannelModeMessage(t1), this.parameterNumberEventsEnabled && this._isRpnOrNrpnController(t1.message.dataBytes[0]) && this._parseEventForParameterNumber(t1);
        } else "programchange" === t1.type ? (t1.value = n1, t1.rawValue = t1.value) : "channelaftertouch" === t1.type ? (t1.value = Utilities.from7bitToFloat(n1), t1.rawValue = n1) : "pitchbend" === t1.type ? (t1.value = ((r1 << 7) + n1 - 8192) / 8192, t1.rawValue = (r1 << 7) + n1) : t1.type = "unknownmessage";
        this.emit(t1.type, t1);
    }
    _parseChannelModeMessage(e1) {
        const t1 = Object.assign({}, e1);
        t1.type = t1.controller.name, "localcontrol" === t1.type && (t1.value = 127 === t1.message.data[2], t1.rawValue = t1.message.data[2]), "omnimodeon" === t1.type ? (t1.type = "omnimode", t1.value = !0, t1.rawValue = t1.message.data[2]) : "omnimodeoff" === t1.type && (t1.type = "omnimode", t1.value = !1, t1.rawValue = t1.message.data[2]), "monomodeon" === t1.type ? (t1.type = "monomode", t1.value = !0, t1.rawValue = t1.message.data[2]) : "polymodeon" === t1.type && (t1.type = "monomode", t1.value = !1, t1.rawValue = t1.message.data[2]), this.emit(t1.type, t1);
    }
    _parseEventForParameterNumber(e1) {
        const t1 = e1.message.dataBytes[0], n1 = e1.message.dataBytes[1];
        99 === t1 || 101 === t1 ? (this._nrpnBuffer = [], this._rpnBuffer = [], 99 === t1 ? this._nrpnBuffer = [
            e1.message
        ] : 127 !== n1 && (this._rpnBuffer = [
            e1.message
        ])) : 98 === t1 || 100 === t1 ? 98 === t1 ? (this._rpnBuffer = [], 1 === this._nrpnBuffer.length ? this._nrpnBuffer.push(e1.message) : this._nrpnBuffer = []) : (this._nrpnBuffer = [], 1 === this._rpnBuffer.length && 127 !== n1 ? this._rpnBuffer.push(e1.message) : this._rpnBuffer = []) : 6 !== t1 && 38 !== t1 && 96 !== t1 && 97 !== t1 || (2 === this._rpnBuffer.length ? this._dispatchParameterNumberEvent("rpn", this._rpnBuffer[0].dataBytes[1], this._rpnBuffer[1].dataBytes[1], e1) : 2 === this._nrpnBuffer.length ? this._dispatchParameterNumberEvent("nrpn", this._nrpnBuffer[0].dataBytes[1], this._nrpnBuffer[1].dataBytes[1], e1) : (this._nrpnBuffer = [], this._rpnBuffer = []));
    }
    _isRpnOrNrpnController(e1) {
        return 6 === e1 || 38 === e1 || 96 === e1 || 97 === e1 || 98 === e1 || 99 === e1 || 100 === e1 || 101 === e1;
    }
    _dispatchParameterNumberEvent(e1, t1, n1, r1) {
        e1 = "nrpn" === e1 ? "nrpn" : "rpn";
        const i1 = {
            target: r1.target,
            timestamp: r1.timestamp,
            message: r1.message,
            parameterMsb: t1,
            parameterLsb: n1,
            value: Utilities.from7bitToFloat(r1.message.dataBytes[1]),
            rawValue: r1.message.dataBytes[1]
        };
        i1.parameter = "rpn" === e1 ? Object.keys(Enumerations.REGISTERED_PARAMETERS).find((e1)=>Enumerations.REGISTERED_PARAMETERS[e1][0] === t1 && Enumerations.REGISTERED_PARAMETERS[e1][1] === n1) : (t1 << 7) + n1;
        const s1 = Enumerations.CONTROL_CHANGE_MESSAGES[r1.message.dataBytes[0]].name;
        i1.type = `${e1}-${s1}`, this.emit(i1.type, i1);
        const a1 = Object.assign({}, i1);
        "nrpn-dataincrement" === a1.type ? a1.type = "nrpn-databuttonincrement" : "nrpn-datadecrement" === a1.type ? a1.type = "nrpn-databuttondecrement" : "rpn-dataincrement" === a1.type ? a1.type = "rpn-databuttonincrement" : "rpn-datadecrement" === a1.type && (a1.type = "rpn-databuttondecrement"), this.emit(a1.type, a1), i1.type = e1, i1.subtype = s1, this.emit(i1.type, i1);
    }
    getChannelModeByNumber(e1) {
        return wm.validation && (console.warn("The 'getChannelModeByNumber()' method has been moved to the 'Utilities' class."), e1 = Math.floor(e1)), Utilities.getChannelModeByNumber(e1);
    }
    getCcNameByNumber(e1) {
        if (wm.validation && (console.warn("The 'getCcNameByNumber()' method has been moved to the 'Utilities' class."), !((e1 = parseInt(e1)) >= 0 && e1 <= 127))) throw new RangeError("Invalid control change number.");
        return Utilities.getCcNameByNumber(e1);
    }
    getNoteState(e1) {
        e1 instanceof Note && (e1 = e1.identifier);
        const t1 = Utilities.guessNoteNumber(e1, wm.octaveOffset + this.input.octaveOffset + this.octaveOffset);
        return this.notesState[t1];
    }
    get octaveOffset() {
        return this._octaveOffset;
    }
    set octaveOffset(e1) {
        if (this.validation && (e1 = parseInt(e1), isNaN(e1))) throw new TypeError("The 'octaveOffset' property must be an integer.");
        this._octaveOffset = e1;
    }
    get input() {
        return this._input;
    }
    get number() {
        return this._number;
    }
    get nrpnEventsEnabled() {
        return this.parameterNumberEventsEnabled;
    }
    set nrpnEventsEnabled(e1) {
        this.validation && (e1 = !!e1), this.parameterNumberEventsEnabled = e1;
    }
}
/**
 * The `Message` class represents a single MIDI message. It has several properties that make it
 * easy to make sense of the binary data it contains.
 *
 * @license Apache-2.0
 * @since 3.0.0
 */ class Message {
    constructor(e1){
        this.rawData = e1, this.data = Array.from(this.rawData), this.statusByte = this.rawData[0], this.rawDataBytes = this.rawData.slice(1), this.dataBytes = this.data.slice(1), this.isChannelMessage = !1, this.isSystemMessage = !1, this.command = void 0, this.channel = void 0, this.manufacturerId = void 0, this.type = void 0, this.statusByte < 240 ? (this.isChannelMessage = !0, this.command = this.statusByte >> 4, this.channel = 1 + (15 & this.statusByte)) : (this.isSystemMessage = !0, this.command = this.statusByte), this.isChannelMessage ? this.type = Utilities.getPropertyByValue(Enumerations.CHANNEL_MESSAGES, this.command) : this.isSystemMessage && (this.type = Utilities.getPropertyByValue(Enumerations.SYSTEM_MESSAGES, this.command)), this.statusByte === Enumerations.SYSTEM_MESSAGES.sysex && (0 === this.dataBytes[0] ? (this.manufacturerId = this.dataBytes.slice(0, 3), this.dataBytes = this.dataBytes.slice(3, this.rawDataBytes.length - 1), this.rawDataBytes = this.rawDataBytes.slice(3, this.rawDataBytes.length - 1)) : (this.manufacturerId = [
            this.dataBytes[0]
        ], this.dataBytes = this.dataBytes.slice(1, this.dataBytes.length - 1), this.rawDataBytes = this.rawDataBytes.slice(1, this.rawDataBytes.length - 1)));
    }
}
/**
 * The `Input` class represents a single MIDI input port. This object is automatically instantiated
 * by the library according to the host's MIDI subsystem and does not need to be directly
 * instantiated. Instead, you can access all `Input` objects by referring to the
 * [`WebMidi.inputs`](WebMidi#inputs) array. You can also retrieve inputs by using methods such as
 * [`WebMidi.getInputByName()`](WebMidi#getInputByName) and
 * [`WebMidi.getInputById()`](WebMidi#getInputById).
 *
 * Note that a single MIDI device may expose several inputs and/or outputs.
 *
 * **Important**: the `Input` class does not directly fire channel-specific MIDI messages
 * (such as [`noteon`](InputChannel#event:noteon) or
 * [`controlchange`](InputChannel#event:controlchange), etc.). The [`InputChannel`](InputChannel)
 * object does that. However, you can still use the
 * [`Input.addListener()`](#addListener) method to listen to channel-specific events on multiple
 * [`InputChannel`](InputChannel) objects at once.
 *
 * @fires Input#opened
 * @fires Input#disconnected
 * @fires Input#closed
 * @fires Input#midimessage
 *
 * @fires Input#sysex
 * @fires Input#timecode
 * @fires Input#songposition
 * @fires Input#songselect
 * @fires Input#tunerequest
 * @fires Input#clock
 * @fires Input#start
 * @fires Input#continue
 * @fires Input#stop
 * @fires Input#activesensing
 * @fires Input#reset
 *
 * @fires Input#unknownmidimessage
 *
 * @extends EventEmitter
 * @license Apache-2.0
 */ class Input extends EventEmitter {
    constructor(e1){
        super(), this._midiInput = e1, this._octaveOffset = 0, this.channels = [];
        for(let e1 = 1; e1 <= 16; e1++)this.channels[e1] = new InputChannel(this, e1);
        this._forwarders = [], this._midiInput.onstatechange = this._onStateChange.bind(this), this._midiInput.onmidimessage = this._onMidiMessage.bind(this);
    }
    async destroy() {
        this.removeListener(), this.channels.forEach((e1)=>e1.destroy()), this.channels = [], this._forwarders = [], this._midiInput && (this._midiInput.onstatechange = null, this._midiInput.onmidimessage = null), await this.close(), this._midiInput = null;
    }
    _onStateChange(e1) {
        let t1 = {
            timestamp: wm.time,
            target: this,
            port: this
        };
        "open" === e1.port.connection ? (t1.type = "opened", this.emit("opened", t1)) : "closed" === e1.port.connection && "connected" === e1.port.state ? (t1.type = "closed", this.emit("closed", t1)) : "closed" === e1.port.connection && "disconnected" === e1.port.state ? (t1.type = "disconnected", t1.port = {
            connection: e1.port.connection,
            id: e1.port.id,
            manufacturer: e1.port.manufacturer,
            name: e1.port.name,
            state: e1.port.state,
            type: e1.port.type
        }, this.emit("disconnected", t1)) : "pending" === e1.port.connection && "disconnected" === e1.port.state || console.warn("This statechange event was not caught: ", e1.port.connection, e1.port.state);
    }
    _onMidiMessage(e1) {
        const t1 = new Message(e1.data), n1 = {
            port: this,
            target: this,
            message: t1,
            timestamp: e1.timeStamp,
            type: "midimessage",
            data: t1.data,
            rawData: t1.data,
            statusByte: t1.data[0],
            dataBytes: t1.dataBytes
        };
        this.emit("midimessage", n1), t1.isSystemMessage ? this._parseEvent(n1) : t1.isChannelMessage && this.channels[t1.channel]._processMidiMessageEvent(n1), this._forwarders.forEach((e1)=>e1.forward(t1));
    }
    _parseEvent(e1) {
        const t1 = Object.assign({}, e1);
        t1.type = t1.message.type || "unknownmidimessage", "songselect" === t1.type && (t1.song = e1.data[1] + 1, t1.value = e1.data[1], t1.rawValue = t1.value), this.emit(t1.type, t1);
    }
    async open() {
        try {
            await this._midiInput.open();
        } catch (e1) {
            return Promise.reject(e1);
        }
        return Promise.resolve(this);
    }
    async close() {
        if (!this._midiInput) return Promise.resolve(this);
        try {
            await this._midiInput.close();
        } catch (e1) {
            return Promise.reject(e1);
        }
        return Promise.resolve(this);
    }
    getChannelModeByNumber() {
        wm.validation && console.warn("The 'getChannelModeByNumber()' method has been moved to the 'Utilities' class.");
    }
    addListener(e1, t1, n1 = {}) {
        if (wm.validation && "function" == typeof n1) {
            let e1 = null != t1 ? [].concat(t1) : void 0;
            t1 = n1, n1 = {
                channels: e1
            };
        }
        if (Enumerations.CHANNEL_EVENTS.includes(e1)) {
            void 0 === n1.channels && (n1.channels = Enumerations.MIDI_CHANNEL_NUMBERS);
            let r1 = [];
            return Utilities.sanitizeChannels(n1.channels).forEach((i1)=>{
                r1.push(this.channels[i1].addListener(e1, t1, n1));
            }), r1;
        }
        return super.addListener(e1, t1, n1);
    }
    addOneTimeListener(e1, t1, n1 = {}) {
        return n1.remaining = 1, this.addListener(e1, t1, n1);
    }
    on(e1, t1, n1, r1) {
        return this.addListener(e1, t1, n1, r1);
    }
    hasListener(e1, t1, n1 = {}) {
        if (wm.validation && "function" == typeof n1) {
            let e1 = [].concat(t1);
            t1 = n1, n1 = {
                channels: e1
            };
        }
        return Enumerations.CHANNEL_EVENTS.includes(e1) ? (void 0 === n1.channels && (n1.channels = Enumerations.MIDI_CHANNEL_NUMBERS), Utilities.sanitizeChannels(n1.channels).every((n1)=>this.channels[n1].hasListener(e1, t1))) : super.hasListener(e1, t1);
    }
    removeListener(e1, t1, n1 = {}) {
        if (wm.validation && "function" == typeof n1) {
            let e1 = [].concat(t1);
            t1 = n1, n1 = {
                channels: e1
            };
        }
        if (void 0 === n1.channels && (n1.channels = Enumerations.MIDI_CHANNEL_NUMBERS), null == e1) return Utilities.sanitizeChannels(n1.channels).forEach((e1)=>{
            this.channels[e1] && this.channels[e1].removeListener();
        }), super.removeListener();
        Enumerations.CHANNEL_EVENTS.includes(e1) ? Utilities.sanitizeChannels(n1.channels).forEach((r1)=>{
            this.channels[r1].removeListener(e1, t1, n1);
        }) : super.removeListener(e1, t1, n1);
    }
    addForwarder(e1, t1 = {}) {
        let n1;
        return n1 = e1 instanceof Forwarder ? e1 : new Forwarder(e1, t1), this._forwarders.push(n1), n1;
    }
    removeForwarder(e1) {
        this._forwarders = this._forwarders.filter((t1)=>t1 !== e1);
    }
    hasForwarder(e1) {
        return this._forwarders.includes(e1);
    }
    get name() {
        return this._midiInput.name;
    }
    get id() {
        return this._midiInput.id;
    }
    get connection() {
        return this._midiInput.connection;
    }
    get manufacturer() {
        return this._midiInput.manufacturer;
    }
    get octaveOffset() {
        return this._octaveOffset;
    }
    set octaveOffset(e1) {
        if (this.validation && (e1 = parseInt(e1), isNaN(e1))) throw new TypeError("The 'octaveOffset' property must be an integer.");
        this._octaveOffset = e1;
    }
    get state() {
        return this._midiInput.state;
    }
    get type() {
        return this._midiInput.type;
    }
    get nrpnEventsEnabled() {
        return wm.validation && console.warn("The 'nrpnEventsEnabled' property has been moved to the 'InputChannel' class."), !1;
    }
}
if (Utilities.isNode) {
    try {
        window.navigator;
    } catch (err) {
        let jzz;
        eval('jzz = require("jzz")'), global.navigator || (global.navigator = {}), Object.assign(global.navigator, jzz);
    }
    try {
        performance;
    } catch (err) {
        let performance;
        eval('performance = require("perf_hooks").performance'), global.performance = performance;
    }
}
/**
 * The `WebMidi` object makes it easier to work with the low-level Web MIDI API. Basically, it
 * simplifies sending outgoing MIDI messages and reacting to incoming MIDI messages.
 *
 * When using the WebMidi.js library, you should know that the `WebMidi` class has already been
 * instantiated. You cannot instantiate it yourself. If you use the **IIFE** version, you should
 * simply use the global object called `WebMidi`. If you use the **CJS** (CommonJS) or **ESM** (ES6
 * module) version, you get an already-instantiated object when you import the module.
 *
 * @fires WebMidi#connected
 * @fires WebMidi#disabled
 * @fires WebMidi#disconnected
 * @fires WebMidi#enabled
 * @fires WebMidi#error
 * @fires WebMidi#midiaccessgranted
 * @fires WebMidi#portschanged
 *
 * @extends EventEmitter
 * @license Apache-2.0
 */ class WebMidi extends EventEmitter {
    constructor(){
        super(), this.defaults = {
            note: {
                attack: Utilities.from7bitToFloat(64),
                release: Utilities.from7bitToFloat(64),
                duration: 1 / 0
            }
        }, this.interface = null, this.validation = !0, this._inputs = [], this._disconnectedInputs = [], this._outputs = [], this._disconnectedOutputs = [], this._stateChangeQueue = [], this._octaveOffset = 0;
    }
    async enable(e1 = {}, t1 = !1) {
        if (this.validation = !1 !== e1.validation, this.validation && ("function" == typeof e1 && (e1 = {
            callback: e1,
            sysex: t1
        }), t1 && (e1.sysex = !0)), this.enabled) return "function" == typeof e1.callback && e1.callback(), Promise.resolve();
        const n1 = {
            timestamp: this.time,
            target: this,
            type: "error",
            error: void 0
        }, r1 = {
            timestamp: this.time,
            target: this,
            type: "midiaccessgranted"
        }, i1 = {
            timestamp: this.time,
            target: this,
            type: "enabled"
        };
        try {
            "function" == typeof e1.requestMIDIAccessFunction ? this.interface = await e1.requestMIDIAccessFunction({
                sysex: e1.sysex,
                software: e1.software
            }) : this.interface = await navigator.requestMIDIAccess({
                sysex: e1.sysex,
                software: e1.software
            });
        } catch (t1) {
            return n1.error = t1, this.emit("error", n1), "function" == typeof e1.callback && e1.callback(t1), Promise.reject(t1);
        }
        this.emit("midiaccessgranted", r1), this.interface.onstatechange = this._onInterfaceStateChange.bind(this);
        try {
            await this._updateInputsAndOutputs();
        } catch (t1) {
            return n1.error = t1, this.emit("error", n1), "function" == typeof e1.callback && e1.callback(t1), Promise.reject(t1);
        }
        return this.emit("enabled", i1), "function" == typeof e1.callback && e1.callback(), Promise.resolve(this);
    }
    async disable() {
        return this.interface && (this.interface.onstatechange = void 0), this._destroyInputsAndOutputs().then(()=>{
            navigator && "function" == typeof navigator.close && navigator.close(), this.interface = null;
            let e1 = {
                timestamp: this.time,
                target: this,
                type: "disabled"
            };
            this.emit("disabled", e1), this.removeListener();
        });
    }
    getInputById(e1, t1 = {
        disconnected: !1
    }) {
        if (this.validation) {
            if (!this.enabled) throw new Error("WebMidi is not enabled.");
            if (!e1) return;
        }
        if (t1.disconnected) {
            for(let t1 = 0; t1 < this._disconnectedInputs.length; t1++)if (this._disconnectedInputs[t1].id === e1.toString()) return this._disconnectedInputs[t1];
        } else for(let t1 = 0; t1 < this.inputs.length; t1++)if (this.inputs[t1].id === e1.toString()) return this.inputs[t1];
    }
    getInputByName(e1, t1 = {
        disconnected: !1
    }) {
        if (this.validation) {
            if (!this.enabled) throw new Error("WebMidi is not enabled.");
            if (!e1) return;
            e1 = e1.toString();
        }
        if (t1.disconnected) {
            for(let t1 = 0; t1 < this._disconnectedInputs.length; t1++)if (~this._disconnectedInputs[t1].name.indexOf(e1)) return this._disconnectedInputs[t1];
        } else for(let t1 = 0; t1 < this.inputs.length; t1++)if (~this.inputs[t1].name.indexOf(e1)) return this.inputs[t1];
    }
    getOutputByName(e1, t1 = {
        disconnected: !1
    }) {
        if (this.validation) {
            if (!this.enabled) throw new Error("WebMidi is not enabled.");
            if (!e1) return;
            e1 = e1.toString();
        }
        if (t1.disconnected) {
            for(let t1 = 0; t1 < this._disconnectedOutputs.length; t1++)if (~this._disconnectedOutputs[t1].name.indexOf(e1)) return this._disconnectedOutputs[t1];
        } else for(let t1 = 0; t1 < this.outputs.length; t1++)if (~this.outputs[t1].name.indexOf(e1)) return this.outputs[t1];
    }
    getOutputById(e1, t1 = {
        disconnected: !1
    }) {
        if (this.validation) {
            if (!this.enabled) throw new Error("WebMidi is not enabled.");
            if (!e1) return;
        }
        if (t1.disconnected) {
            for(let t1 = 0; t1 < this._disconnectedOutputs.length; t1++)if (this._disconnectedOutputs[t1].id === e1.toString()) return this._disconnectedOutputs[t1];
        } else for(let t1 = 0; t1 < this.outputs.length; t1++)if (this.outputs[t1].id === e1.toString()) return this.outputs[t1];
    }
    noteNameToNumber(e1) {
        return this.validation && console.warn("The noteNameToNumber() method is deprecated. Use Utilities.toNoteNumber() instead."), Utilities.toNoteNumber(e1, this.octaveOffset);
    }
    getOctave(e1) {
        return this.validation && (console.warn("The getOctave()is deprecated. Use Utilities.getNoteDetails() instead"), e1 = parseInt(e1)), !isNaN(e1) && e1 >= 0 && e1 <= 127 && Utilities.getNoteDetails(Utilities.offsetNumber(e1, this.octaveOffset)).octave;
    }
    sanitizeChannels(e1) {
        return this.validation && console.warn("The sanitizeChannels() method has been moved to the utilities class."), Utilities.sanitizeChannels(e1);
    }
    toMIDIChannels(e1) {
        return this.validation && console.warn("The toMIDIChannels() method has been deprecated. Use Utilities.sanitizeChannels() instead."), Utilities.sanitizeChannels(e1);
    }
    guessNoteNumber(e1) {
        return this.validation && console.warn("The guessNoteNumber() method has been deprecated. Use Utilities.guessNoteNumber() instead."), Utilities.guessNoteNumber(e1, this.octaveOffset);
    }
    getValidNoteArray(e1, t1 = {}) {
        return this.validation && console.warn("The getValidNoteArray() method has been moved to the Utilities.buildNoteArray()"), Utilities.buildNoteArray(e1, t1);
    }
    convertToTimestamp(e1) {
        return this.validation && console.warn("The convertToTimestamp() method has been moved to Utilities.toTimestamp()."), Utilities.toTimestamp(e1);
    }
    async _destroyInputsAndOutputs() {
        let e1 = [];
        return this.inputs.forEach((t1)=>e1.push(t1.destroy())), this.outputs.forEach((t1)=>e1.push(t1.destroy())), Promise.all(e1).then(()=>{
            this._inputs = [], this._outputs = [];
        });
    }
    _onInterfaceStateChange(e1) {
        this._updateInputsAndOutputs();
        let t1 = {
            timestamp: e1.timeStamp,
            type: e1.port.state,
            target: this
        };
        if ("connected" === e1.port.state && "open" === e1.port.connection) {
            "output" === e1.port.type ? t1.port = this.getOutputById(e1.port.id) : "input" === e1.port.type && (t1.port = this.getInputById(e1.port.id)), this.emit(e1.port.state, t1);
            const n1 = Object.assign({}, t1);
            n1.type = "portschanged", this.emit(n1.type, n1);
        } else if ("disconnected" === e1.port.state && "pending" === e1.port.connection) {
            "input" === e1.port.type ? t1.port = this.getInputById(e1.port.id, {
                disconnected: !0
            }) : "output" === e1.port.type && (t1.port = this.getOutputById(e1.port.id, {
                disconnected: !0
            })), this.emit(e1.port.state, t1);
            const n1 = Object.assign({}, t1);
            n1.type = "portschanged", this.emit(n1.type, n1);
        }
    }
    async _updateInputsAndOutputs() {
        return Promise.all([
            this._updateInputs(),
            this._updateOutputs()
        ]);
    }
    async _updateInputs() {
        if (!this.interface) return;
        for(let e1 = this._inputs.length - 1; e1 >= 0; e1--){
            const t1 = this._inputs[e1];
            Array.from(this.interface.inputs.values()).find((e1)=>e1 === t1._midiInput) || (this._disconnectedInputs.push(t1), this._inputs.splice(e1, 1));
        }
        let e1 = [];
        return this.interface.inputs.forEach((t1)=>{
            if (!this._inputs.find((e1)=>e1._midiInput === t1)) {
                let n1 = this._disconnectedInputs.find((e1)=>e1._midiInput === t1);
                n1 || (n1 = new Input(t1)), this._inputs.push(n1), e1.push(n1.open());
            }
        }), Promise.all(e1);
    }
    async _updateOutputs() {
        if (!this.interface) return;
        for(let e1 = this._outputs.length - 1; e1 >= 0; e1--){
            const t1 = this._outputs[e1];
            Array.from(this.interface.outputs.values()).find((e1)=>e1 === t1._midiOutput) || (this._disconnectedOutputs.push(t1), this._outputs.splice(e1, 1));
        }
        let e1 = [];
        return this.interface.outputs.forEach((t1)=>{
            if (!this._outputs.find((e1)=>e1._midiOutput === t1)) {
                let n1 = this._disconnectedOutputs.find((e1)=>e1._midiOutput === t1);
                n1 || (n1 = new Output(t1)), this._outputs.push(n1), e1.push(n1.open());
            }
        }), Promise.all(e1);
    }
    get enabled() {
        return null !== this.interface;
    }
    get inputs() {
        return this._inputs;
    }
    get isNode() {
        return this.validation && console.warn("WebMidi.isNode has been deprecated. Use Utilities.isNode instead."), Utilities.isNode;
    }
    get isBrowser() {
        return this.validation && console.warn("WebMidi.isBrowser has been deprecated. Use Utilities.isBrowser instead."), Utilities.isBrowser;
    }
    get octaveOffset() {
        return this._octaveOffset;
    }
    set octaveOffset(e1) {
        if (this.validation && (e1 = parseInt(e1), isNaN(e1))) throw new TypeError("The 'octaveOffset' property must be an integer.");
        this._octaveOffset = e1;
    }
    get outputs() {
        return this._outputs;
    }
    get supported() {
        return "undefined" != typeof navigator && !!navigator.requestMIDIAccess;
    }
    get sysexEnabled() {
        return !(!this.interface || !this.interface.sysexEnabled);
    }
    get time() {
        return performance.now();
    }
    get version() {
        return "3.1.12";
    }
    get flavour() {
        return "cjs";
    }
    get CHANNEL_EVENTS() {
        return this.validation && console.warn("The CHANNEL_EVENTS enum has been moved to Enumerations.CHANNEL_EVENTS."), Enumerations.CHANNEL_EVENTS;
    }
    get MIDI_SYSTEM_MESSAGES() {
        return this.validation && console.warn("The MIDI_SYSTEM_MESSAGES enum has been moved to Enumerations.SYSTEM_MESSAGES."), Enumerations.SYSTEM_MESSAGES;
    }
    get MIDI_CHANNEL_MODE_MESSAGES() {
        return this.validation && console.warn("The MIDI_CHANNEL_MODE_MESSAGES enum has been moved to Enumerations.CHANNEL_MODE_MESSAGES."), Enumerations.CHANNEL_MODE_MESSAGES;
    }
    get MIDI_CONTROL_CHANGE_MESSAGES() {
        return this.validation && console.warn("The MIDI_CONTROL_CHANGE_MESSAGES enum has been replaced by the Enumerations.CONTROL_CHANGE_MESSAGES array."), Enumerations.MIDI_CONTROL_CHANGE_MESSAGES;
    }
    get MIDI_REGISTERED_PARAMETER() {
        return this.validation && console.warn("The MIDI_REGISTERED_PARAMETER enum has been moved to Enumerations.REGISTERED_PARAMETERS."), Enumerations.REGISTERED_PARAMETERS;
    }
    get NOTES() {
        return this.validation && console.warn("The NOTES enum has been deprecated."), [
            "C",
            "C#",
            "D",
            "D#",
            "E",
            "F",
            "F#",
            "G",
            "G#",
            "A",
            "A#",
            "B"
        ];
    }
}
const wm = new WebMidi;
wm.constructor = null, exports.Enumerations = Enumerations, exports.Forwarder = Forwarder, exports.Input = Input, exports.InputChannel = InputChannel, exports.Message = Message, exports.Note = Note, exports.Output = Output, exports.OutputChannel = OutputChannel, exports.Utilities = Utilities, exports.WebMidi = wm;

},{"efe8767325d23004":"d5jf4"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"5Vjgk":[function(require,module,exports) {
var global = arguments[3];
/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */ (function() {
    "use strict";
    /** Global Methods **/ /***************************************************************************/ /**
   * Create the global controller. All contained methods and properties apply
   * to all sounds that are currently playing or will be in the future.
   */ var HowlerGlobal1 = function() {
        this.init();
    };
    HowlerGlobal1.prototype = {
        /**
     * Initialize the global Howler object.
     * @return {Howler}
     */ init: function() {
            var self = this || Howler1;
            // Create a global ID counter.
            self._counter = 1000;
            // Pool of unlocked HTML5 Audio objects.
            self._html5AudioPool = [];
            self.html5PoolSize = 10;
            // Internal properties.
            self._codecs = {};
            self._howls = [];
            self._muted = false;
            self._volume = 1;
            self._canPlayEvent = "canplaythrough";
            self._navigator = typeof window !== "undefined" && window.navigator ? window.navigator : null;
            // Public properties.
            self.masterGain = null;
            self.noAudio = false;
            self.usingWebAudio = true;
            self.autoSuspend = true;
            self.ctx = null;
            // Set to false to disable the auto audio unlocker.
            self.autoUnlock = true;
            // Setup the various state values for global tracking.
            self._setup();
            return self;
        },
        /**
     * Get/set the global volume for all sounds.
     * @param  {Float} vol Volume from 0.0 to 1.0.
     * @return {Howler/Float}     Returns self or current volume.
     */ volume: function(vol) {
            var self = this || Howler1;
            vol = parseFloat(vol);
            // If we don't have an AudioContext created yet, run the setup.
            if (!self.ctx) setupAudioContext();
            if (typeof vol !== "undefined" && vol >= 0 && vol <= 1) {
                self._volume = vol;
                // Don't update any of the nodes if we are muted.
                if (self._muted) return self;
                // When using Web Audio, we just need to adjust the master gain.
                if (self.usingWebAudio) self.masterGain.gain.setValueAtTime(vol, Howler1.ctx.currentTime);
                // Loop through and change volume for all HTML5 audio nodes.
                for(var i = 0; i < self._howls.length; i++)if (!self._howls[i]._webAudio) {
                    // Get all of the sounds in this Howl group.
                    var ids = self._howls[i]._getSoundIds();
                    // Loop through all sounds and change the volumes.
                    for(var j = 0; j < ids.length; j++){
                        var sound = self._howls[i]._soundById(ids[j]);
                        if (sound && sound._node) sound._node.volume = sound._volume * vol;
                    }
                }
                return self;
            }
            return self._volume;
        },
        /**
     * Handle muting and unmuting globally.
     * @param  {Boolean} muted Is muted or not.
     */ mute: function(muted) {
            var self = this || Howler1;
            // If we don't have an AudioContext created yet, run the setup.
            if (!self.ctx) setupAudioContext();
            self._muted = muted;
            // With Web Audio, we just need to mute the master gain.
            if (self.usingWebAudio) self.masterGain.gain.setValueAtTime(muted ? 0 : self._volume, Howler1.ctx.currentTime);
            // Loop through and mute all HTML5 Audio nodes.
            for(var i = 0; i < self._howls.length; i++)if (!self._howls[i]._webAudio) {
                // Get all of the sounds in this Howl group.
                var ids = self._howls[i]._getSoundIds();
                // Loop through all sounds and mark the audio node as muted.
                for(var j = 0; j < ids.length; j++){
                    var sound = self._howls[i]._soundById(ids[j]);
                    if (sound && sound._node) sound._node.muted = muted ? true : sound._muted;
                }
            }
            return self;
        },
        /**
     * Handle stopping all sounds globally.
     */ stop: function() {
            var self = this || Howler1;
            // Loop through all Howls and stop them.
            for(var i = 0; i < self._howls.length; i++)self._howls[i].stop();
            return self;
        },
        /**
     * Unload and destroy all currently loaded Howl objects.
     * @return {Howler}
     */ unload: function() {
            var self = this || Howler1;
            for(var i = self._howls.length - 1; i >= 0; i--)self._howls[i].unload();
            // Create a new AudioContext to make sure it is fully reset.
            if (self.usingWebAudio && self.ctx && typeof self.ctx.close !== "undefined") {
                self.ctx.close();
                self.ctx = null;
                setupAudioContext();
            }
            return self;
        },
        /**
     * Check for codec support of specific extension.
     * @param  {String} ext Audio file extention.
     * @return {Boolean}
     */ codecs: function(ext) {
            return (this || Howler1)._codecs[ext.replace(/^x-/, "")];
        },
        /**
     * Setup various state values for global tracking.
     * @return {Howler}
     */ _setup: function() {
            var self = this || Howler1;
            // Keeps track of the suspend/resume state of the AudioContext.
            self.state = self.ctx ? self.ctx.state || "suspended" : "suspended";
            // Automatically begin the 30-second suspend process
            self._autoSuspend();
            // Check if audio is available.
            if (!self.usingWebAudio) {
                // No audio is available on this system if noAudio is set to true.
                if (typeof Audio !== "undefined") try {
                    var test = new Audio();
                    // Check if the canplaythrough event is available.
                    if (typeof test.oncanplaythrough === "undefined") self._canPlayEvent = "canplay";
                } catch (e) {
                    self.noAudio = true;
                }
                else self.noAudio = true;
            }
            // Test to make sure audio isn't disabled in Internet Explorer.
            try {
                var test = new Audio();
                if (test.muted) self.noAudio = true;
            } catch (e) {}
            // Check for supported codecs.
            if (!self.noAudio) self._setupCodecs();
            return self;
        },
        /**
     * Check for browser support for various codecs and cache the results.
     * @return {Howler}
     */ _setupCodecs: function() {
            var self = this || Howler1;
            var audioTest = null;
            // Must wrap in a try/catch because IE11 in server mode throws an error.
            try {
                audioTest = typeof Audio !== "undefined" ? new Audio() : null;
            } catch (err) {
                return self;
            }
            if (!audioTest || typeof audioTest.canPlayType !== "function") return self;
            var mpegTest = audioTest.canPlayType("audio/mpeg;").replace(/^no$/, "");
            // Opera version <33 has mixed MP3 support, so we need to check for and block it.
            var ua = self._navigator ? self._navigator.userAgent : "";
            var checkOpera = ua.match(/OPR\/(\d+)/g);
            var isOldOpera = checkOpera && parseInt(checkOpera[0].split("/")[1], 10) < 33;
            var checkSafari = ua.indexOf("Safari") !== -1 && ua.indexOf("Chrome") === -1;
            var safariVersion = ua.match(/Version\/(.*?) /);
            var isOldSafari = checkSafari && safariVersion && parseInt(safariVersion[1], 10) < 15;
            self._codecs = {
                mp3: !!(!isOldOpera && (mpegTest || audioTest.canPlayType("audio/mp3;").replace(/^no$/, ""))),
                mpeg: !!mpegTest,
                opus: !!audioTest.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                ogg: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                oga: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                wav: !!(audioTest.canPlayType('audio/wav; codecs="1"') || audioTest.canPlayType("audio/wav")).replace(/^no$/, ""),
                aac: !!audioTest.canPlayType("audio/aac;").replace(/^no$/, ""),
                caf: !!audioTest.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                m4a: !!(audioTest.canPlayType("audio/x-m4a;") || audioTest.canPlayType("audio/m4a;") || audioTest.canPlayType("audio/aac;")).replace(/^no$/, ""),
                m4b: !!(audioTest.canPlayType("audio/x-m4b;") || audioTest.canPlayType("audio/m4b;") || audioTest.canPlayType("audio/aac;")).replace(/^no$/, ""),
                mp4: !!(audioTest.canPlayType("audio/x-mp4;") || audioTest.canPlayType("audio/mp4;") || audioTest.canPlayType("audio/aac;")).replace(/^no$/, ""),
                weba: !!(!isOldSafari && audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
                webm: !!(!isOldSafari && audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
                dolby: !!audioTest.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
                flac: !!(audioTest.canPlayType("audio/x-flac;") || audioTest.canPlayType("audio/flac;")).replace(/^no$/, "")
            };
            return self;
        },
        /**
     * Some browsers/devices will only allow audio to be played after a user interaction.
     * Attempt to automatically unlock audio on the first user interaction.
     * Concept from: http://paulbakaus.com/tutorials/html5/web-audio-on-ios/
     * @return {Howler}
     */ _unlockAudio: function() {
            var self = this || Howler1;
            // Only run this if Web Audio is supported and it hasn't already been unlocked.
            if (self._audioUnlocked || !self.ctx) return;
            self._audioUnlocked = false;
            self.autoUnlock = false;
            // Some mobile devices/platforms have distortion issues when opening/closing tabs and/or web views.
            // Bugs in the browser (especially Mobile Safari) can cause the sampleRate to change from 44100 to 48000.
            // By calling Howler.unload(), we create a new AudioContext with the correct sampleRate.
            if (!self._mobileUnloaded && self.ctx.sampleRate !== 44100) {
                self._mobileUnloaded = true;
                self.unload();
            }
            // Scratch buffer for enabling iOS to dispose of web audio buffers correctly, as per:
            // http://stackoverflow.com/questions/24119684
            self._scratchBuffer = self.ctx.createBuffer(1, 1, 22050);
            // Call this method on touch start to create and play a buffer,
            // then check if the audio actually played to determine if
            // audio has now been unlocked on iOS, Android, etc.
            var unlock = function(e) {
                // Create a pool of unlocked HTML5 Audio objects that can
                // be used for playing sounds without user interaction. HTML5
                // Audio objects must be individually unlocked, as opposed
                // to the WebAudio API which only needs a single activation.
                // This must occur before WebAudio setup or the source.onended
                // event will not fire.
                while(self._html5AudioPool.length < self.html5PoolSize)try {
                    var audioNode = new Audio();
                    // Mark this Audio object as unlocked to ensure it can get returned
                    // to the unlocked pool when released.
                    audioNode._unlocked = true;
                    // Add the audio node to the pool.
                    self._releaseHtml5Audio(audioNode);
                } catch (e) {
                    self.noAudio = true;
                    break;
                }
                // Loop through any assigned audio nodes and unlock them.
                for(var i = 0; i < self._howls.length; i++)if (!self._howls[i]._webAudio) {
                    // Get all of the sounds in this Howl group.
                    var ids = self._howls[i]._getSoundIds();
                    // Loop through all sounds and unlock the audio nodes.
                    for(var j = 0; j < ids.length; j++){
                        var sound = self._howls[i]._soundById(ids[j]);
                        if (sound && sound._node && !sound._node._unlocked) {
                            sound._node._unlocked = true;
                            sound._node.load();
                        }
                    }
                }
                // Fix Android can not play in suspend state.
                self._autoResume();
                // Create an empty buffer.
                var source = self.ctx.createBufferSource();
                source.buffer = self._scratchBuffer;
                source.connect(self.ctx.destination);
                // Play the empty buffer.
                if (typeof source.start === "undefined") source.noteOn(0);
                else source.start(0);
                // Calling resume() on a stack initiated by user gesture is what actually unlocks the audio on Android Chrome >= 55.
                if (typeof self.ctx.resume === "function") self.ctx.resume();
                // Setup a timeout to check that we are unlocked on the next event loop.
                source.onended = function() {
                    source.disconnect(0);
                    // Update the unlocked state and prevent this check from happening again.
                    self._audioUnlocked = true;
                    // Remove the touch start listener.
                    document.removeEventListener("touchstart", unlock, true);
                    document.removeEventListener("touchend", unlock, true);
                    document.removeEventListener("click", unlock, true);
                    document.removeEventListener("keydown", unlock, true);
                    // Let all sounds know that audio has been unlocked.
                    for(var i = 0; i < self._howls.length; i++)self._howls[i]._emit("unlock");
                };
            };
            // Setup a touch start listener to attempt an unlock in.
            document.addEventListener("touchstart", unlock, true);
            document.addEventListener("touchend", unlock, true);
            document.addEventListener("click", unlock, true);
            document.addEventListener("keydown", unlock, true);
            return self;
        },
        /**
     * Get an unlocked HTML5 Audio object from the pool. If none are left,
     * return a new Audio object and throw a warning.
     * @return {Audio} HTML5 Audio object.
     */ _obtainHtml5Audio: function() {
            var self = this || Howler1;
            // Return the next object from the pool if one exists.
            if (self._html5AudioPool.length) return self._html5AudioPool.pop();
            //.Check if the audio is locked and throw a warning.
            var testPlay = new Audio().play();
            if (testPlay && typeof Promise !== "undefined" && (testPlay instanceof Promise || typeof testPlay.then === "function")) testPlay.catch(function() {
                console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.");
            });
            return new Audio();
        },
        /**
     * Return an activated HTML5 Audio object to the pool.
     * @return {Howler}
     */ _releaseHtml5Audio: function(audio) {
            var self = this || Howler1;
            // Don't add audio to the pool if we don't know if it has been unlocked.
            if (audio._unlocked) self._html5AudioPool.push(audio);
            return self;
        },
        /**
     * Automatically suspend the Web Audio AudioContext after no sound has played for 30 seconds.
     * This saves processing/energy and fixes various browser-specific bugs with audio getting stuck.
     * @return {Howler}
     */ _autoSuspend: function() {
            var self = this;
            if (!self.autoSuspend || !self.ctx || typeof self.ctx.suspend === "undefined" || !Howler1.usingWebAudio) return;
            // Check if any sounds are playing.
            for(var i = 0; i < self._howls.length; i++){
                if (self._howls[i]._webAudio) for(var j = 0; j < self._howls[i]._sounds.length; j++){
                    if (!self._howls[i]._sounds[j]._paused) return self;
                }
            }
            if (self._suspendTimer) clearTimeout(self._suspendTimer);
            // If no sound has played after 30 seconds, suspend the context.
            self._suspendTimer = setTimeout(function() {
                if (!self.autoSuspend) return;
                self._suspendTimer = null;
                self.state = "suspending";
                // Handle updating the state of the audio context after suspending.
                var handleSuspension = function() {
                    self.state = "suspended";
                    if (self._resumeAfterSuspend) {
                        delete self._resumeAfterSuspend;
                        self._autoResume();
                    }
                };
                // Either the state gets suspended or it is interrupted.
                // Either way, we need to update the state to suspended.
                self.ctx.suspend().then(handleSuspension, handleSuspension);
            }, 30000);
            return self;
        },
        /**
     * Automatically resume the Web Audio AudioContext when a new sound is played.
     * @return {Howler}
     */ _autoResume: function() {
            var self = this;
            if (!self.ctx || typeof self.ctx.resume === "undefined" || !Howler1.usingWebAudio) return;
            if (self.state === "running" && self.ctx.state !== "interrupted" && self._suspendTimer) {
                clearTimeout(self._suspendTimer);
                self._suspendTimer = null;
            } else if (self.state === "suspended" || self.state === "running" && self.ctx.state === "interrupted") {
                self.ctx.resume().then(function() {
                    self.state = "running";
                    // Emit to all Howls that the audio has resumed.
                    for(var i = 0; i < self._howls.length; i++)self._howls[i]._emit("resume");
                });
                if (self._suspendTimer) {
                    clearTimeout(self._suspendTimer);
                    self._suspendTimer = null;
                }
            } else if (self.state === "suspending") self._resumeAfterSuspend = true;
            return self;
        }
    };
    // Setup the global audio controller.
    var Howler1 = new HowlerGlobal1();
    /** Group Methods **/ /***************************************************************************/ /**
   * Create an audio group controller.
   * @param {Object} o Passed in properties for this group.
   */ var Howl1 = function(o) {
        var self = this;
        // Throw an error if no source is provided.
        if (!o.src || o.src.length === 0) {
            console.error("An array of source files must be passed with any new Howl.");
            return;
        }
        self.init(o);
    };
    Howl1.prototype = {
        /**
     * Initialize a new Howl group object.
     * @param  {Object} o Passed in properties for this group.
     * @return {Howl}
     */ init: function(o) {
            var self = this;
            // If we don't have an AudioContext created yet, run the setup.
            if (!Howler1.ctx) setupAudioContext();
            // Setup user-defined default properties.
            self._autoplay = o.autoplay || false;
            self._format = typeof o.format !== "string" ? o.format : [
                o.format
            ];
            self._html5 = o.html5 || false;
            self._muted = o.mute || false;
            self._loop = o.loop || false;
            self._pool = o.pool || 5;
            self._preload = typeof o.preload === "boolean" || o.preload === "metadata" ? o.preload : true;
            self._rate = o.rate || 1;
            self._sprite = o.sprite || {};
            self._src = typeof o.src !== "string" ? o.src : [
                o.src
            ];
            self._volume = o.volume !== undefined ? o.volume : 1;
            self._xhr = {
                method: o.xhr && o.xhr.method ? o.xhr.method : "GET",
                headers: o.xhr && o.xhr.headers ? o.xhr.headers : null,
                withCredentials: o.xhr && o.xhr.withCredentials ? o.xhr.withCredentials : false
            };
            // Setup all other default properties.
            self._duration = 0;
            self._state = "unloaded";
            self._sounds = [];
            self._endTimers = {};
            self._queue = [];
            self._playLock = false;
            // Setup event listeners.
            self._onend = o.onend ? [
                {
                    fn: o.onend
                }
            ] : [];
            self._onfade = o.onfade ? [
                {
                    fn: o.onfade
                }
            ] : [];
            self._onload = o.onload ? [
                {
                    fn: o.onload
                }
            ] : [];
            self._onloaderror = o.onloaderror ? [
                {
                    fn: o.onloaderror
                }
            ] : [];
            self._onplayerror = o.onplayerror ? [
                {
                    fn: o.onplayerror
                }
            ] : [];
            self._onpause = o.onpause ? [
                {
                    fn: o.onpause
                }
            ] : [];
            self._onplay = o.onplay ? [
                {
                    fn: o.onplay
                }
            ] : [];
            self._onstop = o.onstop ? [
                {
                    fn: o.onstop
                }
            ] : [];
            self._onmute = o.onmute ? [
                {
                    fn: o.onmute
                }
            ] : [];
            self._onvolume = o.onvolume ? [
                {
                    fn: o.onvolume
                }
            ] : [];
            self._onrate = o.onrate ? [
                {
                    fn: o.onrate
                }
            ] : [];
            self._onseek = o.onseek ? [
                {
                    fn: o.onseek
                }
            ] : [];
            self._onunlock = o.onunlock ? [
                {
                    fn: o.onunlock
                }
            ] : [];
            self._onresume = [];
            // Web Audio or HTML5 Audio?
            self._webAudio = Howler1.usingWebAudio && !self._html5;
            // Automatically try to enable audio.
            if (typeof Howler1.ctx !== "undefined" && Howler1.ctx && Howler1.autoUnlock) Howler1._unlockAudio();
            // Keep track of this Howl group in the global controller.
            Howler1._howls.push(self);
            // If they selected autoplay, add a play event to the load queue.
            if (self._autoplay) self._queue.push({
                event: "play",
                action: function() {
                    self.play();
                }
            });
            // Load the source file unless otherwise specified.
            if (self._preload && self._preload !== "none") self.load();
            return self;
        },
        /**
     * Load the audio file.
     * @return {Howler}
     */ load: function() {
            var self = this;
            var url = null;
            // If no audio is available, quit immediately.
            if (Howler1.noAudio) {
                self._emit("loaderror", null, "No audio support.");
                return;
            }
            // Make sure our source is in an array.
            if (typeof self._src === "string") self._src = [
                self._src
            ];
            // Loop through the sources and pick the first one that is compatible.
            for(var i = 0; i < self._src.length; i++){
                var ext, str;
                if (self._format && self._format[i]) // If an extension was specified, use that instead.
                ext = self._format[i];
                else {
                    // Make sure the source is a string.
                    str = self._src[i];
                    if (typeof str !== "string") {
                        self._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                        continue;
                    }
                    // Extract the file extension from the URL or base64 data URI.
                    ext = /^data:audio\/([^;,]+);/i.exec(str);
                    if (!ext) ext = /\.([^.]+)$/.exec(str.split("?", 1)[0]);
                    if (ext) ext = ext[1].toLowerCase();
                }
                // Log a warning if no extension was found.
                if (!ext) console.warn('No file extension was found. Consider using the "format" property or specify an extension.');
                // Check if this extension is available.
                if (ext && Howler1.codecs(ext)) {
                    url = self._src[i];
                    break;
                }
            }
            if (!url) {
                self._emit("loaderror", null, "No codec support for selected audio sources.");
                return;
            }
            self._src = url;
            self._state = "loading";
            // If the hosting page is HTTPS and the source isn't,
            // drop down to HTML5 Audio to avoid Mixed Content errors.
            if (window.location.protocol === "https:" && url.slice(0, 5) === "http:") {
                self._html5 = true;
                self._webAudio = false;
            }
            // Create a new sound object and add it to the pool.
            new Sound1(self);
            // Load and decode the audio data for playback.
            if (self._webAudio) loadBuffer(self);
            return self;
        },
        /**
     * Play a sound or resume previous playback.
     * @param  {String/Number} sprite   Sprite name for sprite playback or sound id to continue previous.
     * @param  {Boolean} internal Internal Use: true prevents event firing.
     * @return {Number}          Sound ID.
     */ play: function(sprite, internal) {
            var self = this;
            var id = null;
            // Determine if a sprite, sound id or nothing was passed
            if (typeof sprite === "number") {
                id = sprite;
                sprite = null;
            } else if (typeof sprite === "string" && self._state === "loaded" && !self._sprite[sprite]) // If the passed sprite doesn't exist, do nothing.
            return null;
            else if (typeof sprite === "undefined") {
                // Use the default sound sprite (plays the full audio length).
                sprite = "__default";
                // Check if there is a single paused sound that isn't ended.
                // If there is, play that sound. If not, continue as usual.
                if (!self._playLock) {
                    var num = 0;
                    for(var i = 0; i < self._sounds.length; i++)if (self._sounds[i]._paused && !self._sounds[i]._ended) {
                        num++;
                        id = self._sounds[i]._id;
                    }
                    if (num === 1) sprite = null;
                    else id = null;
                }
            }
            // Get the selected node, or get one from the pool.
            var sound = id ? self._soundById(id) : self._inactiveSound();
            // If the sound doesn't exist, do nothing.
            if (!sound) return null;
            // Select the sprite definition.
            if (id && !sprite) sprite = sound._sprite || "__default";
            // If the sound hasn't loaded, we must wait to get the audio's duration.
            // We also need to wait to make sure we don't run into race conditions with
            // the order of function calls.
            if (self._state !== "loaded") {
                // Set the sprite value on this sound.
                sound._sprite = sprite;
                // Mark this sound as not ended in case another sound is played before this one loads.
                sound._ended = false;
                // Add the sound to the queue to be played on load.
                var soundId = sound._id;
                self._queue.push({
                    event: "play",
                    action: function() {
                        self.play(soundId);
                    }
                });
                return soundId;
            }
            // Don't play the sound if an id was passed and it is already playing.
            if (id && !sound._paused) {
                // Trigger the play event, in order to keep iterating through queue.
                if (!internal) self._loadQueue("play");
                return sound._id;
            }
            // Make sure the AudioContext isn't suspended, and resume it if it is.
            if (self._webAudio) Howler1._autoResume();
            // Determine how long to play for and where to start playing.
            var seek = Math.max(0, sound._seek > 0 ? sound._seek : self._sprite[sprite][0] / 1000);
            var duration = Math.max(0, (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000 - seek);
            var timeout = duration * 1000 / Math.abs(sound._rate);
            var start = self._sprite[sprite][0] / 1000;
            var stop = (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000;
            sound._sprite = sprite;
            // Mark the sound as ended instantly so that this async playback
            // doesn't get grabbed by another call to play while this one waits to start.
            sound._ended = false;
            // Update the parameters of the sound.
            var setParams = function() {
                sound._paused = false;
                sound._seek = seek;
                sound._start = start;
                sound._stop = stop;
                sound._loop = !!(sound._loop || self._sprite[sprite][2]);
            };
            // End the sound instantly if seek is at the end.
            if (seek >= stop) {
                self._ended(sound);
                return;
            }
            // Begin the actual playback.
            var node = sound._node;
            if (self._webAudio) {
                // Fire this when the sound is ready to play to begin Web Audio playback.
                var playWebAudio = function() {
                    self._playLock = false;
                    setParams();
                    self._refreshBuffer(sound);
                    // Setup the playback params.
                    var vol = sound._muted || self._muted ? 0 : sound._volume;
                    node.gain.setValueAtTime(vol, Howler1.ctx.currentTime);
                    sound._playStart = Howler1.ctx.currentTime;
                    // Play the sound using the supported method.
                    if (typeof node.bufferSource.start === "undefined") sound._loop ? node.bufferSource.noteGrainOn(0, seek, 86400) : node.bufferSource.noteGrainOn(0, seek, duration);
                    else sound._loop ? node.bufferSource.start(0, seek, 86400) : node.bufferSource.start(0, seek, duration);
                    // Start a new timer if none is present.
                    if (timeout !== Infinity) self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
                    if (!internal) setTimeout(function() {
                        self._emit("play", sound._id);
                        self._loadQueue();
                    }, 0);
                };
                if (Howler1.state === "running" && Howler1.ctx.state !== "interrupted") playWebAudio();
                else {
                    self._playLock = true;
                    // Wait for the audio context to resume before playing.
                    self.once("resume", playWebAudio);
                    // Cancel the end timer.
                    self._clearTimer(sound._id);
                }
            } else {
                // Fire this when the sound is ready to play to begin HTML5 Audio playback.
                var playHtml5 = function() {
                    node.currentTime = seek;
                    node.muted = sound._muted || self._muted || Howler1._muted || node.muted;
                    node.volume = sound._volume * Howler1.volume();
                    node.playbackRate = sound._rate;
                    // Some browsers will throw an error if this is called without user interaction.
                    try {
                        var play = node.play();
                        // Support older browsers that don't support promises, and thus don't have this issue.
                        if (play && typeof Promise !== "undefined" && (play instanceof Promise || typeof play.then === "function")) {
                            // Implements a lock to prevent DOMException: The play() request was interrupted by a call to pause().
                            self._playLock = true;
                            // Set param values immediately.
                            setParams();
                            // Releases the lock and executes queued actions.
                            play.then(function() {
                                self._playLock = false;
                                node._unlocked = true;
                                if (!internal) self._emit("play", sound._id);
                                else self._loadQueue();
                            }).catch(function() {
                                self._playLock = false;
                                self._emit("playerror", sound._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                                // Reset the ended and paused values.
                                sound._ended = true;
                                sound._paused = true;
                            });
                        } else if (!internal) {
                            self._playLock = false;
                            setParams();
                            self._emit("play", sound._id);
                        }
                        // Setting rate before playing won't work in IE, so we set it again here.
                        node.playbackRate = sound._rate;
                        // If the node is still paused, then we can assume there was a playback issue.
                        if (node.paused) {
                            self._emit("playerror", sound._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                            return;
                        }
                        // Setup the end timer on sprites or listen for the ended event.
                        if (sprite !== "__default" || sound._loop) self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
                        else {
                            self._endTimers[sound._id] = function() {
                                // Fire ended on this audio node.
                                self._ended(sound);
                                // Clear this listener.
                                node.removeEventListener("ended", self._endTimers[sound._id], false);
                            };
                            node.addEventListener("ended", self._endTimers[sound._id], false);
                        }
                    } catch (err) {
                        self._emit("playerror", sound._id, err);
                    }
                };
                // If this is streaming audio, make sure the src is set and load again.
                if (node.src === "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA") {
                    node.src = self._src;
                    node.load();
                }
                // Play immediately if ready, or wait for the 'canplaythrough'e vent.
                var loadedNoReadyState = window && window.ejecta || !node.readyState && Howler1._navigator.isCocoonJS;
                if (node.readyState >= 3 || loadedNoReadyState) playHtml5();
                else {
                    self._playLock = true;
                    self._state = "loading";
                    var listener = function() {
                        self._state = "loaded";
                        // Begin playback.
                        playHtml5();
                        // Clear this listener.
                        node.removeEventListener(Howler1._canPlayEvent, listener, false);
                    };
                    node.addEventListener(Howler1._canPlayEvent, listener, false);
                    // Cancel the end timer.
                    self._clearTimer(sound._id);
                }
            }
            return sound._id;
        },
        /**
     * Pause playback and save current position.
     * @param  {Number} id The sound ID (empty to pause all in group).
     * @return {Howl}
     */ pause: function(id) {
            var self = this;
            // If the sound hasn't loaded or a play() promise is pending, add it to the load queue to pause when capable.
            if (self._state !== "loaded" || self._playLock) {
                self._queue.push({
                    event: "pause",
                    action: function() {
                        self.pause(id);
                    }
                });
                return self;
            }
            // If no id is passed, get all ID's to be paused.
            var ids = self._getSoundIds(id);
            for(var i = 0; i < ids.length; i++){
                // Clear the end timer.
                self._clearTimer(ids[i]);
                // Get the sound.
                var sound = self._soundById(ids[i]);
                if (sound && !sound._paused) {
                    // Reset the seek position.
                    sound._seek = self.seek(ids[i]);
                    sound._rateSeek = 0;
                    sound._paused = true;
                    // Stop currently running fades.
                    self._stopFade(ids[i]);
                    if (sound._node) {
                        if (self._webAudio) {
                            // Make sure the sound has been created.
                            if (!sound._node.bufferSource) continue;
                            if (typeof sound._node.bufferSource.stop === "undefined") sound._node.bufferSource.noteOff(0);
                            else sound._node.bufferSource.stop(0);
                            // Clean up the buffer source.
                            self._cleanBuffer(sound._node);
                        } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) sound._node.pause();
                    }
                }
                // Fire the pause event, unless `true` is passed as the 2nd argument.
                if (!arguments[1]) self._emit("pause", sound ? sound._id : null);
            }
            return self;
        },
        /**
     * Stop playback and reset to start.
     * @param  {Number} id The sound ID (empty to stop all in group).
     * @param  {Boolean} internal Internal Use: true prevents event firing.
     * @return {Howl}
     */ stop: function(id, internal) {
            var self = this;
            // If the sound hasn't loaded, add it to the load queue to stop when capable.
            if (self._state !== "loaded" || self._playLock) {
                self._queue.push({
                    event: "stop",
                    action: function() {
                        self.stop(id);
                    }
                });
                return self;
            }
            // If no id is passed, get all ID's to be stopped.
            var ids = self._getSoundIds(id);
            for(var i = 0; i < ids.length; i++){
                // Clear the end timer.
                self._clearTimer(ids[i]);
                // Get the sound.
                var sound = self._soundById(ids[i]);
                if (sound) {
                    // Reset the seek position.
                    sound._seek = sound._start || 0;
                    sound._rateSeek = 0;
                    sound._paused = true;
                    sound._ended = true;
                    // Stop currently running fades.
                    self._stopFade(ids[i]);
                    if (sound._node) {
                        if (self._webAudio) // Make sure the sound's AudioBufferSourceNode has been created.
                        {
                            if (sound._node.bufferSource) {
                                if (typeof sound._node.bufferSource.stop === "undefined") sound._node.bufferSource.noteOff(0);
                                else sound._node.bufferSource.stop(0);
                                // Clean up the buffer source.
                                self._cleanBuffer(sound._node);
                            }
                        } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
                            sound._node.currentTime = sound._start || 0;
                            sound._node.pause();
                            // If this is a live stream, stop download once the audio is stopped.
                            if (sound._node.duration === Infinity) self._clearSound(sound._node);
                        }
                    }
                    if (!internal) self._emit("stop", sound._id);
                }
            }
            return self;
        },
        /**
     * Mute/unmute a single sound or all sounds in this Howl group.
     * @param  {Boolean} muted Set to true to mute and false to unmute.
     * @param  {Number} id    The sound ID to update (omit to mute/unmute all).
     * @return {Howl}
     */ mute: function(muted, id) {
            var self = this;
            // If the sound hasn't loaded, add it to the load queue to mute when capable.
            if (self._state !== "loaded" || self._playLock) {
                self._queue.push({
                    event: "mute",
                    action: function() {
                        self.mute(muted, id);
                    }
                });
                return self;
            }
            // If applying mute/unmute to all sounds, update the group's value.
            if (typeof id === "undefined") {
                if (typeof muted === "boolean") self._muted = muted;
                else return self._muted;
            }
            // If no id is passed, get all ID's to be muted.
            var ids = self._getSoundIds(id);
            for(var i = 0; i < ids.length; i++){
                // Get the sound.
                var sound = self._soundById(ids[i]);
                if (sound) {
                    sound._muted = muted;
                    // Cancel active fade and set the volume to the end value.
                    if (sound._interval) self._stopFade(sound._id);
                    if (self._webAudio && sound._node) sound._node.gain.setValueAtTime(muted ? 0 : sound._volume, Howler1.ctx.currentTime);
                    else if (sound._node) sound._node.muted = Howler1._muted ? true : muted;
                    self._emit("mute", sound._id);
                }
            }
            return self;
        },
        /**
     * Get/set the volume of this sound or of the Howl group. This method can optionally take 0, 1 or 2 arguments.
     *   volume() -> Returns the group's volume value.
     *   volume(id) -> Returns the sound id's current volume.
     *   volume(vol) -> Sets the volume of all sounds in this Howl group.
     *   volume(vol, id) -> Sets the volume of passed sound id.
     * @return {Howl/Number} Returns self or current volume.
     */ volume: function() {
            var self = this;
            var args = arguments;
            var vol, id;
            // Determine the values based on arguments.
            if (args.length === 0) // Return the value of the groups' volume.
            return self._volume;
            else if (args.length === 1 || args.length === 2 && typeof args[1] === "undefined") {
                // First check if this is an ID, and if not, assume it is a new volume.
                var ids = self._getSoundIds();
                var index = ids.indexOf(args[0]);
                if (index >= 0) id = parseInt(args[0], 10);
                else vol = parseFloat(args[0]);
            } else if (args.length >= 2) {
                vol = parseFloat(args[0]);
                id = parseInt(args[1], 10);
            }
            // Update the volume or return the current volume.
            var sound;
            if (typeof vol !== "undefined" && vol >= 0 && vol <= 1) {
                // If the sound hasn't loaded, add it to the load queue to change volume when capable.
                if (self._state !== "loaded" || self._playLock) {
                    self._queue.push({
                        event: "volume",
                        action: function() {
                            self.volume.apply(self, args);
                        }
                    });
                    return self;
                }
                // Set the group volume.
                if (typeof id === "undefined") self._volume = vol;
                // Update one or all volumes.
                id = self._getSoundIds(id);
                for(var i = 0; i < id.length; i++){
                    // Get the sound.
                    sound = self._soundById(id[i]);
                    if (sound) {
                        sound._volume = vol;
                        // Stop currently running fades.
                        if (!args[2]) self._stopFade(id[i]);
                        if (self._webAudio && sound._node && !sound._muted) sound._node.gain.setValueAtTime(vol, Howler1.ctx.currentTime);
                        else if (sound._node && !sound._muted) sound._node.volume = vol * Howler1.volume();
                        self._emit("volume", sound._id);
                    }
                }
            } else {
                sound = id ? self._soundById(id) : self._sounds[0];
                return sound ? sound._volume : 0;
            }
            return self;
        },
        /**
     * Fade a currently playing sound between two volumes (if no id is passed, all sounds will fade).
     * @param  {Number} from The value to fade from (0.0 to 1.0).
     * @param  {Number} to   The volume to fade to (0.0 to 1.0).
     * @param  {Number} len  Time in milliseconds to fade.
     * @param  {Number} id   The sound id (omit to fade all sounds).
     * @return {Howl}
     */ fade: function(from, to, len, id) {
            var self = this;
            // If the sound hasn't loaded, add it to the load queue to fade when capable.
            if (self._state !== "loaded" || self._playLock) {
                self._queue.push({
                    event: "fade",
                    action: function() {
                        self.fade(from, to, len, id);
                    }
                });
                return self;
            }
            // Make sure the to/from/len values are numbers.
            from = Math.min(Math.max(0, parseFloat(from)), 1);
            to = Math.min(Math.max(0, parseFloat(to)), 1);
            len = parseFloat(len);
            // Set the volume to the start position.
            self.volume(from, id);
            // Fade the volume of one or all sounds.
            var ids = self._getSoundIds(id);
            for(var i = 0; i < ids.length; i++){
                // Get the sound.
                var sound = self._soundById(ids[i]);
                // Create a linear fade or fall back to timeouts with HTML5 Audio.
                if (sound) {
                    // Stop the previous fade if no sprite is being used (otherwise, volume handles this).
                    if (!id) self._stopFade(ids[i]);
                    // If we are using Web Audio, let the native methods do the actual fade.
                    if (self._webAudio && !sound._muted) {
                        var currentTime = Howler1.ctx.currentTime;
                        var end = currentTime + len / 1000;
                        sound._volume = from;
                        sound._node.gain.setValueAtTime(from, currentTime);
                        sound._node.gain.linearRampToValueAtTime(to, end);
                    }
                    self._startFadeInterval(sound, from, to, len, ids[i], typeof id === "undefined");
                }
            }
            return self;
        },
        /**
     * Starts the internal interval to fade a sound.
     * @param  {Object} sound Reference to sound to fade.
     * @param  {Number} from The value to fade from (0.0 to 1.0).
     * @param  {Number} to   The volume to fade to (0.0 to 1.0).
     * @param  {Number} len  Time in milliseconds to fade.
     * @param  {Number} id   The sound id to fade.
     * @param  {Boolean} isGroup   If true, set the volume on the group.
     */ _startFadeInterval: function(sound, from, to, len, id, isGroup) {
            var self = this;
            var vol = from;
            var diff = to - from;
            var steps = Math.abs(diff / 0.01);
            var stepLen = Math.max(4, steps > 0 ? len / steps : len);
            var lastTick = Date.now();
            // Store the value being faded to.
            sound._fadeTo = to;
            // Update the volume value on each interval tick.
            sound._interval = setInterval(function() {
                // Update the volume based on the time since the last tick.
                var tick = (Date.now() - lastTick) / len;
                lastTick = Date.now();
                vol += diff * tick;
                // Round to within 2 decimal points.
                vol = Math.round(vol * 100) / 100;
                // Make sure the volume is in the right bounds.
                if (diff < 0) vol = Math.max(to, vol);
                else vol = Math.min(to, vol);
                // Change the volume.
                if (self._webAudio) sound._volume = vol;
                else self.volume(vol, sound._id, true);
                // Set the group's volume.
                if (isGroup) self._volume = vol;
                // When the fade is complete, stop it and fire event.
                if (to < from && vol <= to || to > from && vol >= to) {
                    clearInterval(sound._interval);
                    sound._interval = null;
                    sound._fadeTo = null;
                    self.volume(to, sound._id);
                    self._emit("fade", sound._id);
                }
            }, stepLen);
        },
        /**
     * Internal method that stops the currently playing fade when
     * a new fade starts, volume is changed or the sound is stopped.
     * @param  {Number} id The sound id.
     * @return {Howl}
     */ _stopFade: function(id) {
            var self = this;
            var sound = self._soundById(id);
            if (sound && sound._interval) {
                if (self._webAudio) sound._node.gain.cancelScheduledValues(Howler1.ctx.currentTime);
                clearInterval(sound._interval);
                sound._interval = null;
                self.volume(sound._fadeTo, id);
                sound._fadeTo = null;
                self._emit("fade", id);
            }
            return self;
        },
        /**
     * Get/set the loop parameter on a sound. This method can optionally take 0, 1 or 2 arguments.
     *   loop() -> Returns the group's loop value.
     *   loop(id) -> Returns the sound id's loop value.
     *   loop(loop) -> Sets the loop value for all sounds in this Howl group.
     *   loop(loop, id) -> Sets the loop value of passed sound id.
     * @return {Howl/Boolean} Returns self or current loop value.
     */ loop: function() {
            var self = this;
            var args = arguments;
            var loop, id, sound;
            // Determine the values for loop and id.
            if (args.length === 0) // Return the grou's loop value.
            return self._loop;
            else if (args.length === 1) {
                if (typeof args[0] === "boolean") {
                    loop = args[0];
                    self._loop = loop;
                } else {
                    // Return this sound's loop value.
                    sound = self._soundById(parseInt(args[0], 10));
                    return sound ? sound._loop : false;
                }
            } else if (args.length === 2) {
                loop = args[0];
                id = parseInt(args[1], 10);
            }
            // If no id is passed, get all ID's to be looped.
            var ids = self._getSoundIds(id);
            for(var i = 0; i < ids.length; i++){
                sound = self._soundById(ids[i]);
                if (sound) {
                    sound._loop = loop;
                    if (self._webAudio && sound._node && sound._node.bufferSource) {
                        sound._node.bufferSource.loop = loop;
                        if (loop) {
                            sound._node.bufferSource.loopStart = sound._start || 0;
                            sound._node.bufferSource.loopEnd = sound._stop;
                            // If playing, restart playback to ensure looping updates.
                            if (self.playing(ids[i])) {
                                self.pause(ids[i], true);
                                self.play(ids[i], true);
                            }
                        }
                    }
                }
            }
            return self;
        },
        /**
     * Get/set the playback rate of a sound. This method can optionally take 0, 1 or 2 arguments.
     *   rate() -> Returns the first sound node's current playback rate.
     *   rate(id) -> Returns the sound id's current playback rate.
     *   rate(rate) -> Sets the playback rate of all sounds in this Howl group.
     *   rate(rate, id) -> Sets the playback rate of passed sound id.
     * @return {Howl/Number} Returns self or the current playback rate.
     */ rate: function() {
            var self = this;
            var args = arguments;
            var rate, id;
            // Determine the values based on arguments.
            if (args.length === 0) // We will simply return the current rate of the first node.
            id = self._sounds[0]._id;
            else if (args.length === 1) {
                // First check if this is an ID, and if not, assume it is a new rate value.
                var ids = self._getSoundIds();
                var index = ids.indexOf(args[0]);
                if (index >= 0) id = parseInt(args[0], 10);
                else rate = parseFloat(args[0]);
            } else if (args.length === 2) {
                rate = parseFloat(args[0]);
                id = parseInt(args[1], 10);
            }
            // Update the playback rate or return the current value.
            var sound;
            if (typeof rate === "number") {
                // If the sound hasn't loaded, add it to the load queue to change playback rate when capable.
                if (self._state !== "loaded" || self._playLock) {
                    self._queue.push({
                        event: "rate",
                        action: function() {
                            self.rate.apply(self, args);
                        }
                    });
                    return self;
                }
                // Set the group rate.
                if (typeof id === "undefined") self._rate = rate;
                // Update one or all volumes.
                id = self._getSoundIds(id);
                for(var i = 0; i < id.length; i++){
                    // Get the sound.
                    sound = self._soundById(id[i]);
                    if (sound) {
                        // Keep track of our position when the rate changed and update the playback
                        // start position so we can properly adjust the seek position for time elapsed.
                        if (self.playing(id[i])) {
                            sound._rateSeek = self.seek(id[i]);
                            sound._playStart = self._webAudio ? Howler1.ctx.currentTime : sound._playStart;
                        }
                        sound._rate = rate;
                        // Change the playback rate.
                        if (self._webAudio && sound._node && sound._node.bufferSource) sound._node.bufferSource.playbackRate.setValueAtTime(rate, Howler1.ctx.currentTime);
                        else if (sound._node) sound._node.playbackRate = rate;
                        // Reset the timers.
                        var seek = self.seek(id[i]);
                        var duration = (self._sprite[sound._sprite][0] + self._sprite[sound._sprite][1]) / 1000 - seek;
                        var timeout = duration * 1000 / Math.abs(sound._rate);
                        // Start a new end timer if sound is already playing.
                        if (self._endTimers[id[i]] || !sound._paused) {
                            self._clearTimer(id[i]);
                            self._endTimers[id[i]] = setTimeout(self._ended.bind(self, sound), timeout);
                        }
                        self._emit("rate", sound._id);
                    }
                }
            } else {
                sound = self._soundById(id);
                return sound ? sound._rate : self._rate;
            }
            return self;
        },
        /**
     * Get/set the seek position of a sound. This method can optionally take 0, 1 or 2 arguments.
     *   seek() -> Returns the first sound node's current seek position.
     *   seek(id) -> Returns the sound id's current seek position.
     *   seek(seek) -> Sets the seek position of the first sound node.
     *   seek(seek, id) -> Sets the seek position of passed sound id.
     * @return {Howl/Number} Returns self or the current seek position.
     */ seek: function() {
            var self = this;
            var args = arguments;
            var seek, id;
            // Determine the values based on arguments.
            if (args.length === 0) // We will simply return the current position of the first node.
            {
                if (self._sounds.length) id = self._sounds[0]._id;
            } else if (args.length === 1) {
                // First check if this is an ID, and if not, assume it is a new seek position.
                var ids = self._getSoundIds();
                var index = ids.indexOf(args[0]);
                if (index >= 0) id = parseInt(args[0], 10);
                else if (self._sounds.length) {
                    id = self._sounds[0]._id;
                    seek = parseFloat(args[0]);
                }
            } else if (args.length === 2) {
                seek = parseFloat(args[0]);
                id = parseInt(args[1], 10);
            }
            // If there is no ID, bail out.
            if (typeof id === "undefined") return 0;
            // If the sound hasn't loaded, add it to the load queue to seek when capable.
            if (typeof seek === "number" && (self._state !== "loaded" || self._playLock)) {
                self._queue.push({
                    event: "seek",
                    action: function() {
                        self.seek.apply(self, args);
                    }
                });
                return self;
            }
            // Get the sound.
            var sound = self._soundById(id);
            if (sound) {
                if (typeof seek === "number" && seek >= 0) {
                    // Pause the sound and update position for restarting playback.
                    var playing = self.playing(id);
                    if (playing) self.pause(id, true);
                    // Move the position of the track and cancel timer.
                    sound._seek = seek;
                    sound._ended = false;
                    self._clearTimer(id);
                    // Update the seek position for HTML5 Audio.
                    if (!self._webAudio && sound._node && !isNaN(sound._node.duration)) sound._node.currentTime = seek;
                    // Seek and emit when ready.
                    var seekAndEmit = function() {
                        // Restart the playback if the sound was playing.
                        if (playing) self.play(id, true);
                        self._emit("seek", id);
                    };
                    // Wait for the play lock to be unset before emitting (HTML5 Audio).
                    if (playing && !self._webAudio) {
                        var emitSeek = function() {
                            if (!self._playLock) seekAndEmit();
                            else setTimeout(emitSeek, 0);
                        };
                        setTimeout(emitSeek, 0);
                    } else seekAndEmit();
                } else {
                    if (self._webAudio) {
                        var realTime = self.playing(id) ? Howler1.ctx.currentTime - sound._playStart : 0;
                        var rateSeek = sound._rateSeek ? sound._rateSeek - sound._seek : 0;
                        return sound._seek + (rateSeek + realTime * Math.abs(sound._rate));
                    } else return sound._node.currentTime;
                }
            }
            return self;
        },
        /**
     * Check if a specific sound is currently playing or not (if id is provided), or check if at least one of the sounds in the group is playing or not.
     * @param  {Number}  id The sound id to check. If none is passed, the whole sound group is checked.
     * @return {Boolean} True if playing and false if not.
     */ playing: function(id) {
            var self = this;
            // Check the passed sound ID (if any).
            if (typeof id === "number") {
                var sound = self._soundById(id);
                return sound ? !sound._paused : false;
            }
            // Otherwise, loop through all sounds and check if any are playing.
            for(var i = 0; i < self._sounds.length; i++){
                if (!self._sounds[i]._paused) return true;
            }
            return false;
        },
        /**
     * Get the duration of this sound. Passing a sound id will return the sprite duration.
     * @param  {Number} id The sound id to check. If none is passed, return full source duration.
     * @return {Number} Audio duration in seconds.
     */ duration: function(id) {
            var self = this;
            var duration = self._duration;
            // If we pass an ID, get the sound and return the sprite length.
            var sound = self._soundById(id);
            if (sound) duration = self._sprite[sound._sprite][1] / 1000;
            return duration;
        },
        /**
     * Returns the current loaded state of this Howl.
     * @return {String} 'unloaded', 'loading', 'loaded'
     */ state: function() {
            return this._state;
        },
        /**
     * Unload and destroy the current Howl object.
     * This will immediately stop all sound instances attached to this group.
     */ unload: function() {
            var self = this;
            // Stop playing any active sounds.
            var sounds = self._sounds;
            for(var i = 0; i < sounds.length; i++){
                // Stop the sound if it is currently playing.
                if (!sounds[i]._paused) self.stop(sounds[i]._id);
                // Remove the source or disconnect.
                if (!self._webAudio) {
                    // Set the source to 0-second silence to stop any downloading (except in IE).
                    self._clearSound(sounds[i]._node);
                    // Remove any event listeners.
                    sounds[i]._node.removeEventListener("error", sounds[i]._errorFn, false);
                    sounds[i]._node.removeEventListener(Howler1._canPlayEvent, sounds[i]._loadFn, false);
                    sounds[i]._node.removeEventListener("ended", sounds[i]._endFn, false);
                    // Release the Audio object back to the pool.
                    Howler1._releaseHtml5Audio(sounds[i]._node);
                }
                // Empty out all of the nodes.
                delete sounds[i]._node;
                // Make sure all timers are cleared out.
                self._clearTimer(sounds[i]._id);
            }
            // Remove the references in the global Howler object.
            var index = Howler1._howls.indexOf(self);
            if (index >= 0) Howler1._howls.splice(index, 1);
            // Delete this sound from the cache (if no other Howl is using it).
            var remCache = true;
            for(i = 0; i < Howler1._howls.length; i++)if (Howler1._howls[i]._src === self._src || self._src.indexOf(Howler1._howls[i]._src) >= 0) {
                remCache = false;
                break;
            }
            if (cache && remCache) delete cache[self._src];
            // Clear global errors.
            Howler1.noAudio = false;
            // Clear out `self`.
            self._state = "unloaded";
            self._sounds = [];
            self = null;
            return null;
        },
        /**
     * Listen to a custom event.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to call.
     * @param  {Number}   id    (optional) Only listen to events for this sound.
     * @param  {Number}   once  (INTERNAL) Marks event to fire only once.
     * @return {Howl}
     */ on: function(event, fn, id, once) {
            var self = this;
            var events = self["_on" + event];
            if (typeof fn === "function") events.push(once ? {
                id: id,
                fn: fn,
                once: once
            } : {
                id: id,
                fn: fn
            });
            return self;
        },
        /**
     * Remove a custom event. Call without parameters to remove all events.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to remove. Leave empty to remove all.
     * @param  {Number}   id    (optional) Only remove events for this sound.
     * @return {Howl}
     */ off: function(event, fn, id) {
            var self = this;
            var events = self["_on" + event];
            var i = 0;
            // Allow passing just an event and ID.
            if (typeof fn === "number") {
                id = fn;
                fn = null;
            }
            if (fn || id) // Loop through event store and remove the passed function.
            for(i = 0; i < events.length; i++){
                var isId = id === events[i].id;
                if (fn === events[i].fn && isId || !fn && isId) {
                    events.splice(i, 1);
                    break;
                }
            }
            else if (event) // Clear out all events of this type.
            self["_on" + event] = [];
            else {
                // Clear out all events of every type.
                var keys = Object.keys(self);
                for(i = 0; i < keys.length; i++)if (keys[i].indexOf("_on") === 0 && Array.isArray(self[keys[i]])) self[keys[i]] = [];
            }
            return self;
        },
        /**
     * Listen to a custom event and remove it once fired.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to call.
     * @param  {Number}   id    (optional) Only listen to events for this sound.
     * @return {Howl}
     */ once: function(event, fn, id) {
            var self = this;
            // Setup the event listener.
            self.on(event, fn, id, 1);
            return self;
        },
        /**
     * Emit all events of a specific type and pass the sound id.
     * @param  {String} event Event name.
     * @param  {Number} id    Sound ID.
     * @param  {Number} msg   Message to go with event.
     * @return {Howl}
     */ _emit: function(event, id, msg) {
            var self = this;
            var events = self["_on" + event];
            // Loop through event store and fire all functions.
            for(var i = events.length - 1; i >= 0; i--)// Only fire the listener if the correct ID is used.
            if (!events[i].id || events[i].id === id || event === "load") {
                setTimeout((function(fn) {
                    fn.call(this, id, msg);
                }).bind(self, events[i].fn), 0);
                // If this event was setup with `once`, remove it.
                if (events[i].once) self.off(event, events[i].fn, events[i].id);
            }
            // Pass the event type into load queue so that it can continue stepping.
            self._loadQueue(event);
            return self;
        },
        /**
     * Queue of actions initiated before the sound has loaded.
     * These will be called in sequence, with the next only firing
     * after the previous has finished executing (even if async like play).
     * @return {Howl}
     */ _loadQueue: function(event) {
            var self = this;
            if (self._queue.length > 0) {
                var task = self._queue[0];
                // Remove this task if a matching event was passed.
                if (task.event === event) {
                    self._queue.shift();
                    self._loadQueue();
                }
                // Run the task if no event type is passed.
                if (!event) task.action();
            }
            return self;
        },
        /**
     * Fired when playback ends at the end of the duration.
     * @param  {Sound} sound The sound object to work with.
     * @return {Howl}
     */ _ended: function(sound) {
            var self = this;
            var sprite = sound._sprite;
            // If we are using IE and there was network latency we may be clipping
            // audio before it completes playing. Lets check the node to make sure it
            // believes it has completed, before ending the playback.
            if (!self._webAudio && sound._node && !sound._node.paused && !sound._node.ended && sound._node.currentTime < sound._stop) {
                setTimeout(self._ended.bind(self, sound), 100);
                return self;
            }
            // Should this sound loop?
            var loop = !!(sound._loop || self._sprite[sprite][2]);
            // Fire the ended event.
            self._emit("end", sound._id);
            // Restart the playback for HTML5 Audio loop.
            if (!self._webAudio && loop) self.stop(sound._id, true).play(sound._id);
            // Restart this timer if on a Web Audio loop.
            if (self._webAudio && loop) {
                self._emit("play", sound._id);
                sound._seek = sound._start || 0;
                sound._rateSeek = 0;
                sound._playStart = Howler1.ctx.currentTime;
                var timeout = (sound._stop - sound._start) * 1000 / Math.abs(sound._rate);
                self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
            }
            // Mark the node as paused.
            if (self._webAudio && !loop) {
                sound._paused = true;
                sound._ended = true;
                sound._seek = sound._start || 0;
                sound._rateSeek = 0;
                self._clearTimer(sound._id);
                // Clean up the buffer source.
                self._cleanBuffer(sound._node);
                // Attempt to auto-suspend AudioContext if no sounds are still playing.
                Howler1._autoSuspend();
            }
            // When using a sprite, end the track.
            if (!self._webAudio && !loop) self.stop(sound._id, true);
            return self;
        },
        /**
     * Clear the end timer for a sound playback.
     * @param  {Number} id The sound ID.
     * @return {Howl}
     */ _clearTimer: function(id) {
            var self = this;
            if (self._endTimers[id]) {
                // Clear the timeout or remove the ended listener.
                if (typeof self._endTimers[id] !== "function") clearTimeout(self._endTimers[id]);
                else {
                    var sound = self._soundById(id);
                    if (sound && sound._node) sound._node.removeEventListener("ended", self._endTimers[id], false);
                }
                delete self._endTimers[id];
            }
            return self;
        },
        /**
     * Return the sound identified by this ID, or return null.
     * @param  {Number} id Sound ID
     * @return {Object}    Sound object or null.
     */ _soundById: function(id) {
            var self = this;
            // Loop through all sounds and find the one with this ID.
            for(var i = 0; i < self._sounds.length; i++){
                if (id === self._sounds[i]._id) return self._sounds[i];
            }
            return null;
        },
        /**
     * Return an inactive sound from the pool or create a new one.
     * @return {Sound} Sound playback object.
     */ _inactiveSound: function() {
            var self = this;
            self._drain();
            // Find the first inactive node to recycle.
            for(var i = 0; i < self._sounds.length; i++){
                if (self._sounds[i]._ended) return self._sounds[i].reset();
            }
            // If no inactive node was found, create a new one.
            return new Sound1(self);
        },
        /**
     * Drain excess inactive sounds from the pool.
     */ _drain: function() {
            var self = this;
            var limit = self._pool;
            var cnt = 0;
            var i = 0;
            // If there are less sounds than the max pool size, we are done.
            if (self._sounds.length < limit) return;
            // Count the number of inactive sounds.
            for(i = 0; i < self._sounds.length; i++)if (self._sounds[i]._ended) cnt++;
            // Remove excess inactive sounds, going in reverse order.
            for(i = self._sounds.length - 1; i >= 0; i--){
                if (cnt <= limit) return;
                if (self._sounds[i]._ended) {
                    // Disconnect the audio source when using Web Audio.
                    if (self._webAudio && self._sounds[i]._node) self._sounds[i]._node.disconnect(0);
                    // Remove sounds until we have the pool size.
                    self._sounds.splice(i, 1);
                    cnt--;
                }
            }
        },
        /**
     * Get all ID's from the sounds pool.
     * @param  {Number} id Only return one ID if one is passed.
     * @return {Array}    Array of IDs.
     */ _getSoundIds: function(id) {
            var self = this;
            if (typeof id === "undefined") {
                var ids = [];
                for(var i = 0; i < self._sounds.length; i++)ids.push(self._sounds[i]._id);
                return ids;
            } else return [
                id
            ];
        },
        /**
     * Load the sound back into the buffer source.
     * @param  {Sound} sound The sound object to work with.
     * @return {Howl}
     */ _refreshBuffer: function(sound) {
            var self = this;
            // Setup the buffer source for playback.
            sound._node.bufferSource = Howler1.ctx.createBufferSource();
            sound._node.bufferSource.buffer = cache[self._src];
            // Connect to the correct node.
            if (sound._panner) sound._node.bufferSource.connect(sound._panner);
            else sound._node.bufferSource.connect(sound._node);
            // Setup looping and playback rate.
            sound._node.bufferSource.loop = sound._loop;
            if (sound._loop) {
                sound._node.bufferSource.loopStart = sound._start || 0;
                sound._node.bufferSource.loopEnd = sound._stop || 0;
            }
            sound._node.bufferSource.playbackRate.setValueAtTime(sound._rate, Howler1.ctx.currentTime);
            return self;
        },
        /**
     * Prevent memory leaks by cleaning up the buffer source after playback.
     * @param  {Object} node Sound's audio node containing the buffer source.
     * @return {Howl}
     */ _cleanBuffer: function(node) {
            var self = this;
            var isIOS = Howler1._navigator && Howler1._navigator.vendor.indexOf("Apple") >= 0;
            if (!node.bufferSource) return self;
            if (Howler1._scratchBuffer && node.bufferSource) {
                node.bufferSource.onended = null;
                node.bufferSource.disconnect(0);
                if (isIOS) try {
                    node.bufferSource.buffer = Howler1._scratchBuffer;
                } catch (e) {}
            }
            node.bufferSource = null;
            return self;
        },
        /**
     * Set the source to a 0-second silence to stop any downloading (except in IE).
     * @param  {Object} node Audio node to clear.
     */ _clearSound: function(node) {
            var checkIE = /MSIE |Trident\//.test(Howler1._navigator && Howler1._navigator.userAgent);
            if (!checkIE) node.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA";
        }
    };
    /** Single Sound Methods **/ /***************************************************************************/ /**
   * Setup the sound object, which each node attached to a Howl group is contained in.
   * @param {Object} howl The Howl parent group.
   */ var Sound1 = function(howl) {
        this._parent = howl;
        this.init();
    };
    Sound1.prototype = {
        /**
     * Initialize a new Sound object.
     * @return {Sound}
     */ init: function() {
            var self = this;
            var parent = self._parent;
            // Setup the default parameters.
            self._muted = parent._muted;
            self._loop = parent._loop;
            self._volume = parent._volume;
            self._rate = parent._rate;
            self._seek = 0;
            self._paused = true;
            self._ended = true;
            self._sprite = "__default";
            // Generate a unique ID for this sound.
            self._id = ++Howler1._counter;
            // Add itself to the parent's pool.
            parent._sounds.push(self);
            // Create the new node.
            self.create();
            return self;
        },
        /**
     * Create and setup a new sound object, whether HTML5 Audio or Web Audio.
     * @return {Sound}
     */ create: function() {
            var self = this;
            var parent = self._parent;
            var volume = Howler1._muted || self._muted || self._parent._muted ? 0 : self._volume;
            if (parent._webAudio) {
                // Create the gain node for controlling volume (the source will connect to this).
                self._node = typeof Howler1.ctx.createGain === "undefined" ? Howler1.ctx.createGainNode() : Howler1.ctx.createGain();
                self._node.gain.setValueAtTime(volume, Howler1.ctx.currentTime);
                self._node.paused = true;
                self._node.connect(Howler1.masterGain);
            } else if (!Howler1.noAudio) {
                // Get an unlocked Audio object from the pool.
                self._node = Howler1._obtainHtml5Audio();
                // Listen for errors (http://dev.w3.org/html5/spec-author-view/spec.html#mediaerror).
                self._errorFn = self._errorListener.bind(self);
                self._node.addEventListener("error", self._errorFn, false);
                // Listen for 'canplaythrough' event to let us know the sound is ready.
                self._loadFn = self._loadListener.bind(self);
                self._node.addEventListener(Howler1._canPlayEvent, self._loadFn, false);
                // Listen for the 'ended' event on the sound to account for edge-case where
                // a finite sound has a duration of Infinity.
                self._endFn = self._endListener.bind(self);
                self._node.addEventListener("ended", self._endFn, false);
                // Setup the new audio node.
                self._node.src = parent._src;
                self._node.preload = parent._preload === true ? "auto" : parent._preload;
                self._node.volume = volume * Howler1.volume();
                // Begin loading the source.
                self._node.load();
            }
            return self;
        },
        /**
     * Reset the parameters of this sound to the original state (for recycle).
     * @return {Sound}
     */ reset: function() {
            var self = this;
            var parent = self._parent;
            // Reset all of the parameters of this sound.
            self._muted = parent._muted;
            self._loop = parent._loop;
            self._volume = parent._volume;
            self._rate = parent._rate;
            self._seek = 0;
            self._rateSeek = 0;
            self._paused = true;
            self._ended = true;
            self._sprite = "__default";
            // Generate a new ID so that it isn't confused with the previous sound.
            self._id = ++Howler1._counter;
            return self;
        },
        /**
     * HTML5 Audio error listener callback.
     */ _errorListener: function() {
            var self = this;
            // Fire an error event and pass back the code.
            self._parent._emit("loaderror", self._id, self._node.error ? self._node.error.code : 0);
            // Clear the event listener.
            self._node.removeEventListener("error", self._errorFn, false);
        },
        /**
     * HTML5 Audio canplaythrough listener callback.
     */ _loadListener: function() {
            var self = this;
            var parent = self._parent;
            // Round up the duration to account for the lower precision in HTML5 Audio.
            parent._duration = Math.ceil(self._node.duration * 10) / 10;
            // Setup a sprite if none is defined.
            if (Object.keys(parent._sprite).length === 0) parent._sprite = {
                __default: [
                    0,
                    parent._duration * 1000
                ]
            };
            if (parent._state !== "loaded") {
                parent._state = "loaded";
                parent._emit("load");
                parent._loadQueue();
            }
            // Clear the event listener.
            self._node.removeEventListener(Howler1._canPlayEvent, self._loadFn, false);
        },
        /**
     * HTML5 Audio ended listener callback.
     */ _endListener: function() {
            var self = this;
            var parent = self._parent;
            // Only handle the `ended`` event if the duration is Infinity.
            if (parent._duration === Infinity) {
                // Update the parent duration to match the real audio duration.
                // Round up the duration to account for the lower precision in HTML5 Audio.
                parent._duration = Math.ceil(self._node.duration * 10) / 10;
                // Update the sprite that corresponds to the real duration.
                if (parent._sprite.__default[1] === Infinity) parent._sprite.__default[1] = parent._duration * 1000;
                // Run the regular ended method.
                parent._ended(self);
            }
            // Clear the event listener since the duration is now correct.
            self._node.removeEventListener("ended", self._endFn, false);
        }
    };
    /** Helper Methods **/ /***************************************************************************/ var cache = {};
    /**
   * Buffer a sound from URL, Data URI or cache and decode to audio source (Web Audio API).
   * @param  {Howl} self
   */ var loadBuffer = function(self) {
        var url = self._src;
        // Check if the buffer has already been cached and use it instead.
        if (cache[url]) {
            // Set the duration from the cache.
            self._duration = cache[url].duration;
            // Load the sound into this Howl.
            loadSound(self);
            return;
        }
        if (/^data:[^;]+;base64,/.test(url)) {
            // Decode the base64 data URI without XHR, since some browsers don't support it.
            var data = atob(url.split(",")[1]);
            var dataView = new Uint8Array(data.length);
            for(var i = 0; i < data.length; ++i)dataView[i] = data.charCodeAt(i);
            decodeAudioData(dataView.buffer, self);
        } else {
            // Load the buffer from the URL.
            var xhr = new XMLHttpRequest();
            xhr.open(self._xhr.method, url, true);
            xhr.withCredentials = self._xhr.withCredentials;
            xhr.responseType = "arraybuffer";
            // Apply any custom headers to the request.
            if (self._xhr.headers) Object.keys(self._xhr.headers).forEach(function(key) {
                xhr.setRequestHeader(key, self._xhr.headers[key]);
            });
            xhr.onload = function() {
                // Make sure we get a successful response back.
                var code = (xhr.status + "")[0];
                if (code !== "0" && code !== "2" && code !== "3") {
                    self._emit("loaderror", null, "Failed loading audio file with status: " + xhr.status + ".");
                    return;
                }
                decodeAudioData(xhr.response, self);
            };
            xhr.onerror = function() {
                // If there is an error, switch to HTML5 Audio.
                if (self._webAudio) {
                    self._html5 = true;
                    self._webAudio = false;
                    self._sounds = [];
                    delete cache[url];
                    self.load();
                }
            };
            safeXhrSend(xhr);
        }
    };
    /**
   * Send the XHR request wrapped in a try/catch.
   * @param  {Object} xhr XHR to send.
   */ var safeXhrSend = function(xhr) {
        try {
            xhr.send();
        } catch (e) {
            xhr.onerror();
        }
    };
    /**
   * Decode audio data from an array buffer.
   * @param  {ArrayBuffer} arraybuffer The audio data.
   * @param  {Howl}        self
   */ var decodeAudioData = function(arraybuffer, self) {
        // Fire a load error if something broke.
        var error = function() {
            self._emit("loaderror", null, "Decoding audio data failed.");
        };
        // Load the sound on success.
        var success = function(buffer) {
            if (buffer && self._sounds.length > 0) {
                cache[self._src] = buffer;
                loadSound(self, buffer);
            } else error();
        };
        // Decode the buffer into an audio source.
        if (typeof Promise !== "undefined" && Howler1.ctx.decodeAudioData.length === 1) Howler1.ctx.decodeAudioData(arraybuffer).then(success).catch(error);
        else Howler1.ctx.decodeAudioData(arraybuffer, success, error);
    };
    /**
   * Sound is now loaded, so finish setting everything up and fire the loaded event.
   * @param  {Howl} self
   * @param  {Object} buffer The decoded buffer sound source.
   */ var loadSound = function(self, buffer) {
        // Set the duration.
        if (buffer && !self._duration) self._duration = buffer.duration;
        // Setup a sprite if none is defined.
        if (Object.keys(self._sprite).length === 0) self._sprite = {
            __default: [
                0,
                self._duration * 1000
            ]
        };
        // Fire the loaded event.
        if (self._state !== "loaded") {
            self._state = "loaded";
            self._emit("load");
            self._loadQueue();
        }
    };
    /**
   * Setup the audio context when available, or switch to HTML5 Audio mode.
   */ var setupAudioContext = function() {
        // If we have already detected that Web Audio isn't supported, don't run this step again.
        if (!Howler1.usingWebAudio) return;
        // Check if we are using Web Audio and setup the AudioContext if we are.
        try {
            if (typeof AudioContext !== "undefined") Howler1.ctx = new AudioContext();
            else if (typeof webkitAudioContext !== "undefined") Howler1.ctx = new webkitAudioContext();
            else Howler1.usingWebAudio = false;
        } catch (e) {
            Howler1.usingWebAudio = false;
        }
        // If the audio context creation still failed, set using web audio to false.
        if (!Howler1.ctx) Howler1.usingWebAudio = false;
        // Check if a webview is being used on iOS8 or earlier (rather than the browser).
        // If it is, disable Web Audio as it causes crashing.
        var iOS = /iP(hone|od|ad)/.test(Howler1._navigator && Howler1._navigator.platform);
        var appVersion = Howler1._navigator && Howler1._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
        var version = appVersion ? parseInt(appVersion[1], 10) : null;
        if (iOS && version && version < 9) {
            var safari = /safari/.test(Howler1._navigator && Howler1._navigator.userAgent.toLowerCase());
            if (Howler1._navigator && !safari) Howler1.usingWebAudio = false;
        }
        // Create and expose the master GainNode when using Web Audio (useful for plugins or advanced usage).
        if (Howler1.usingWebAudio) {
            Howler1.masterGain = typeof Howler1.ctx.createGain === "undefined" ? Howler1.ctx.createGainNode() : Howler1.ctx.createGain();
            Howler1.masterGain.gain.setValueAtTime(Howler1._muted ? 0 : Howler1._volume, Howler1.ctx.currentTime);
            Howler1.masterGain.connect(Howler1.ctx.destination);
        }
        // Re-run the setup on Howler.
        Howler1._setup();
    };
    // Add support for AMD (Asynchronous Module Definition) libraries such as require.js.
    if (typeof define === "function" && define.amd) define([], function() {
        return {
            Howler: Howler1,
            Howl: Howl1
        };
    });
    exports.Howler = Howler1;
    exports.Howl = Howl1;
    // Add to global in Node.js (for testing, etc).
    if (typeof global !== "undefined") {
        global.HowlerGlobal = HowlerGlobal1;
        global.Howler = Howler1;
        global.Howl = Howl1;
        global.Sound = Sound1;
    } else if (typeof window !== "undefined") {
        window.HowlerGlobal = HowlerGlobal1;
        window.Howler = Howler1;
        window.Howl = Howl1;
        window.Sound = Sound1;
    }
})();
/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */ (function() {
    "use strict";
    // Setup default properties.
    HowlerGlobal.prototype._pos = [
        0,
        0,
        0
    ];
    HowlerGlobal.prototype._orientation = [
        0,
        0,
        -1,
        0,
        1,
        0
    ];
    /** Global Methods **/ /***************************************************************************/ /**
   * Helper method to update the stereo panning position of all current Howls.
   * Future Howls will not use this value unless explicitly set.
   * @param  {Number} pan A value of -1.0 is all the way left and 1.0 is all the way right.
   * @return {Howler/Number}     Self or current stereo panning value.
   */ HowlerGlobal.prototype.stereo = function(pan) {
        var self = this;
        // Stop right here if not using Web Audio.
        if (!self.ctx || !self.ctx.listener) return self;
        // Loop through all Howls and update their stereo panning.
        for(var i = self._howls.length - 1; i >= 0; i--)self._howls[i].stereo(pan);
        return self;
    };
    /**
   * Get/set the position of the listener in 3D cartesian space. Sounds using
   * 3D position will be relative to the listener's position.
   * @param  {Number} x The x-position of the listener.
   * @param  {Number} y The y-position of the listener.
   * @param  {Number} z The z-position of the listener.
   * @return {Howler/Array}   Self or current listener position.
   */ HowlerGlobal.prototype.pos = function(x, y, z) {
        var self = this;
        // Stop right here if not using Web Audio.
        if (!self.ctx || !self.ctx.listener) return self;
        // Set the defaults for optional 'y' & 'z'.
        y = typeof y !== "number" ? self._pos[1] : y;
        z = typeof z !== "number" ? self._pos[2] : z;
        if (typeof x === "number") {
            self._pos = [
                x,
                y,
                z
            ];
            if (typeof self.ctx.listener.positionX !== "undefined") {
                self.ctx.listener.positionX.setTargetAtTime(self._pos[0], Howler.ctx.currentTime, 0.1);
                self.ctx.listener.positionY.setTargetAtTime(self._pos[1], Howler.ctx.currentTime, 0.1);
                self.ctx.listener.positionZ.setTargetAtTime(self._pos[2], Howler.ctx.currentTime, 0.1);
            } else self.ctx.listener.setPosition(self._pos[0], self._pos[1], self._pos[2]);
        } else return self._pos;
        return self;
    };
    /**
   * Get/set the direction the listener is pointing in the 3D cartesian space.
   * A front and up vector must be provided. The front is the direction the
   * face of the listener is pointing, and up is the direction the top of the
   * listener is pointing. Thus, these values are expected to be at right angles
   * from each other.
   * @param  {Number} x   The x-orientation of the listener.
   * @param  {Number} y   The y-orientation of the listener.
   * @param  {Number} z   The z-orientation of the listener.
   * @param  {Number} xUp The x-orientation of the top of the listener.
   * @param  {Number} yUp The y-orientation of the top of the listener.
   * @param  {Number} zUp The z-orientation of the top of the listener.
   * @return {Howler/Array}     Returns self or the current orientation vectors.
   */ HowlerGlobal.prototype.orientation = function(x, y, z, xUp, yUp, zUp) {
        var self = this;
        // Stop right here if not using Web Audio.
        if (!self.ctx || !self.ctx.listener) return self;
        // Set the defaults for optional 'y' & 'z'.
        var or = self._orientation;
        y = typeof y !== "number" ? or[1] : y;
        z = typeof z !== "number" ? or[2] : z;
        xUp = typeof xUp !== "number" ? or[3] : xUp;
        yUp = typeof yUp !== "number" ? or[4] : yUp;
        zUp = typeof zUp !== "number" ? or[5] : zUp;
        if (typeof x === "number") {
            self._orientation = [
                x,
                y,
                z,
                xUp,
                yUp,
                zUp
            ];
            if (typeof self.ctx.listener.forwardX !== "undefined") {
                self.ctx.listener.forwardX.setTargetAtTime(x, Howler.ctx.currentTime, 0.1);
                self.ctx.listener.forwardY.setTargetAtTime(y, Howler.ctx.currentTime, 0.1);
                self.ctx.listener.forwardZ.setTargetAtTime(z, Howler.ctx.currentTime, 0.1);
                self.ctx.listener.upX.setTargetAtTime(xUp, Howler.ctx.currentTime, 0.1);
                self.ctx.listener.upY.setTargetAtTime(yUp, Howler.ctx.currentTime, 0.1);
                self.ctx.listener.upZ.setTargetAtTime(zUp, Howler.ctx.currentTime, 0.1);
            } else self.ctx.listener.setOrientation(x, y, z, xUp, yUp, zUp);
        } else return or;
        return self;
    };
    /** Group Methods **/ /***************************************************************************/ /**
   * Add new properties to the core init.
   * @param  {Function} _super Core init method.
   * @return {Howl}
   */ Howl.prototype.init = function(_super) {
        return function(o) {
            var self = this;
            // Setup user-defined default properties.
            self._orientation = o.orientation || [
                1,
                0,
                0
            ];
            self._stereo = o.stereo || null;
            self._pos = o.pos || null;
            self._pannerAttr = {
                coneInnerAngle: typeof o.coneInnerAngle !== "undefined" ? o.coneInnerAngle : 360,
                coneOuterAngle: typeof o.coneOuterAngle !== "undefined" ? o.coneOuterAngle : 360,
                coneOuterGain: typeof o.coneOuterGain !== "undefined" ? o.coneOuterGain : 0,
                distanceModel: typeof o.distanceModel !== "undefined" ? o.distanceModel : "inverse",
                maxDistance: typeof o.maxDistance !== "undefined" ? o.maxDistance : 10000,
                panningModel: typeof o.panningModel !== "undefined" ? o.panningModel : "HRTF",
                refDistance: typeof o.refDistance !== "undefined" ? o.refDistance : 1,
                rolloffFactor: typeof o.rolloffFactor !== "undefined" ? o.rolloffFactor : 1
            };
            // Setup event listeners.
            self._onstereo = o.onstereo ? [
                {
                    fn: o.onstereo
                }
            ] : [];
            self._onpos = o.onpos ? [
                {
                    fn: o.onpos
                }
            ] : [];
            self._onorientation = o.onorientation ? [
                {
                    fn: o.onorientation
                }
            ] : [];
            // Complete initilization with howler.js core's init function.
            return _super.call(this, o);
        };
    }(Howl.prototype.init);
    /**
   * Get/set the stereo panning of the audio source for this sound or all in the group.
   * @param  {Number} pan  A value of -1.0 is all the way left and 1.0 is all the way right.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Number}    Returns self or the current stereo panning value.
   */ Howl.prototype.stereo = function(pan, id) {
        var self = this;
        // Stop right here if not using Web Audio.
        if (!self._webAudio) return self;
        // If the sound hasn't loaded, add it to the load queue to change stereo pan when capable.
        if (self._state !== "loaded") {
            self._queue.push({
                event: "stereo",
                action: function() {
                    self.stereo(pan, id);
                }
            });
            return self;
        }
        // Check for PannerStereoNode support and fallback to PannerNode if it doesn't exist.
        var pannerType = typeof Howler.ctx.createStereoPanner === "undefined" ? "spatial" : "stereo";
        // Setup the group's stereo panning if no ID is passed.
        if (typeof id === "undefined") {
            // Return the group's stereo panning if no parameters are passed.
            if (typeof pan === "number") {
                self._stereo = pan;
                self._pos = [
                    pan,
                    0,
                    0
                ];
            } else return self._stereo;
        }
        // Change the streo panning of one or all sounds in group.
        var ids = self._getSoundIds(id);
        for(var i = 0; i < ids.length; i++){
            // Get the sound.
            var sound = self._soundById(ids[i]);
            if (sound) {
                if (typeof pan === "number") {
                    sound._stereo = pan;
                    sound._pos = [
                        pan,
                        0,
                        0
                    ];
                    if (sound._node) {
                        // If we are falling back, make sure the panningModel is equalpower.
                        sound._pannerAttr.panningModel = "equalpower";
                        // Check if there is a panner setup and create a new one if not.
                        if (!sound._panner || !sound._panner.pan) setupPanner(sound, pannerType);
                        if (pannerType === "spatial") {
                            if (typeof sound._panner.positionX !== "undefined") {
                                sound._panner.positionX.setValueAtTime(pan, Howler.ctx.currentTime);
                                sound._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime);
                                sound._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime);
                            } else sound._panner.setPosition(pan, 0, 0);
                        } else sound._panner.pan.setValueAtTime(pan, Howler.ctx.currentTime);
                    }
                    self._emit("stereo", sound._id);
                } else return sound._stereo;
            }
        }
        return self;
    };
    /**
   * Get/set the 3D spatial position of the audio source for this sound or group relative to the global listener.
   * @param  {Number} x  The x-position of the audio source.
   * @param  {Number} y  The y-position of the audio source.
   * @param  {Number} z  The z-position of the audio source.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Array}    Returns self or the current 3D spatial position: [x, y, z].
   */ Howl.prototype.pos = function(x, y, z, id) {
        var self = this;
        // Stop right here if not using Web Audio.
        if (!self._webAudio) return self;
        // If the sound hasn't loaded, add it to the load queue to change position when capable.
        if (self._state !== "loaded") {
            self._queue.push({
                event: "pos",
                action: function() {
                    self.pos(x, y, z, id);
                }
            });
            return self;
        }
        // Set the defaults for optional 'y' & 'z'.
        y = typeof y !== "number" ? 0 : y;
        z = typeof z !== "number" ? -0.5 : z;
        // Setup the group's spatial position if no ID is passed.
        if (typeof id === "undefined") {
            // Return the group's spatial position if no parameters are passed.
            if (typeof x === "number") self._pos = [
                x,
                y,
                z
            ];
            else return self._pos;
        }
        // Change the spatial position of one or all sounds in group.
        var ids = self._getSoundIds(id);
        for(var i = 0; i < ids.length; i++){
            // Get the sound.
            var sound = self._soundById(ids[i]);
            if (sound) {
                if (typeof x === "number") {
                    sound._pos = [
                        x,
                        y,
                        z
                    ];
                    if (sound._node) {
                        // Check if there is a panner setup and create a new one if not.
                        if (!sound._panner || sound._panner.pan) setupPanner(sound, "spatial");
                        if (typeof sound._panner.positionX !== "undefined") {
                            sound._panner.positionX.setValueAtTime(x, Howler.ctx.currentTime);
                            sound._panner.positionY.setValueAtTime(y, Howler.ctx.currentTime);
                            sound._panner.positionZ.setValueAtTime(z, Howler.ctx.currentTime);
                        } else sound._panner.setPosition(x, y, z);
                    }
                    self._emit("pos", sound._id);
                } else return sound._pos;
            }
        }
        return self;
    };
    /**
   * Get/set the direction the audio source is pointing in the 3D cartesian coordinate
   * space. Depending on how direction the sound is, based on the `cone` attributes,
   * a sound pointing away from the listener can be quiet or silent.
   * @param  {Number} x  The x-orientation of the source.
   * @param  {Number} y  The y-orientation of the source.
   * @param  {Number} z  The z-orientation of the source.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Array}    Returns self or the current 3D spatial orientation: [x, y, z].
   */ Howl.prototype.orientation = function(x, y, z, id) {
        var self = this;
        // Stop right here if not using Web Audio.
        if (!self._webAudio) return self;
        // If the sound hasn't loaded, add it to the load queue to change orientation when capable.
        if (self._state !== "loaded") {
            self._queue.push({
                event: "orientation",
                action: function() {
                    self.orientation(x, y, z, id);
                }
            });
            return self;
        }
        // Set the defaults for optional 'y' & 'z'.
        y = typeof y !== "number" ? self._orientation[1] : y;
        z = typeof z !== "number" ? self._orientation[2] : z;
        // Setup the group's spatial orientation if no ID is passed.
        if (typeof id === "undefined") {
            // Return the group's spatial orientation if no parameters are passed.
            if (typeof x === "number") self._orientation = [
                x,
                y,
                z
            ];
            else return self._orientation;
        }
        // Change the spatial orientation of one or all sounds in group.
        var ids = self._getSoundIds(id);
        for(var i = 0; i < ids.length; i++){
            // Get the sound.
            var sound = self._soundById(ids[i]);
            if (sound) {
                if (typeof x === "number") {
                    sound._orientation = [
                        x,
                        y,
                        z
                    ];
                    if (sound._node) {
                        // Check if there is a panner setup and create a new one if not.
                        if (!sound._panner) {
                            // Make sure we have a position to setup the node with.
                            if (!sound._pos) sound._pos = self._pos || [
                                0,
                                0,
                                -0.5
                            ];
                            setupPanner(sound, "spatial");
                        }
                        if (typeof sound._panner.orientationX !== "undefined") {
                            sound._panner.orientationX.setValueAtTime(x, Howler.ctx.currentTime);
                            sound._panner.orientationY.setValueAtTime(y, Howler.ctx.currentTime);
                            sound._panner.orientationZ.setValueAtTime(z, Howler.ctx.currentTime);
                        } else sound._panner.setOrientation(x, y, z);
                    }
                    self._emit("orientation", sound._id);
                } else return sound._orientation;
            }
        }
        return self;
    };
    /**
   * Get/set the panner node's attributes for a sound or group of sounds.
   * This method can optionall take 0, 1 or 2 arguments.
   *   pannerAttr() -> Returns the group's values.
   *   pannerAttr(id) -> Returns the sound id's values.
   *   pannerAttr(o) -> Set's the values of all sounds in this Howl group.
   *   pannerAttr(o, id) -> Set's the values of passed sound id.
   *
   *   Attributes:
   *     coneInnerAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
   *                      inside of which there will be no volume reduction.
   *     coneOuterAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
   *                      outside of which the volume will be reduced to a constant value of `coneOuterGain`.
   *     coneOuterGain - (0 by default) A parameter for directional audio sources, this is the gain outside of the
   *                     `coneOuterAngle`. It is a linear value in the range `[0, 1]`.
   *     distanceModel - ('inverse' by default) Determines algorithm used to reduce volume as audio moves away from
   *                     listener. Can be `linear`, `inverse` or `exponential.
   *     maxDistance - (10000 by default) The maximum distance between source and listener, after which the volume
   *                   will not be reduced any further.
   *     refDistance - (1 by default) A reference distance for reducing volume as source moves further from the listener.
   *                   This is simply a variable of the distance model and has a different effect depending on which model
   *                   is used and the scale of your coordinates. Generally, volume will be equal to 1 at this distance.
   *     rolloffFactor - (1 by default) How quickly the volume reduces as source moves from listener. This is simply a
   *                     variable of the distance model and can be in the range of `[0, 1]` with `linear` and `[0, ∞]`
   *                     with `inverse` and `exponential`.
   *     panningModel - ('HRTF' by default) Determines which spatialization algorithm is used to position audio.
   *                     Can be `HRTF` or `equalpower`.
   *
   * @return {Howl/Object} Returns self or current panner attributes.
   */ Howl.prototype.pannerAttr = function() {
        var self = this;
        var args = arguments;
        var o, id, sound;
        // Stop right here if not using Web Audio.
        if (!self._webAudio) return self;
        // Determine the values based on arguments.
        if (args.length === 0) // Return the group's panner attribute values.
        return self._pannerAttr;
        else if (args.length === 1) {
            if (typeof args[0] === "object") {
                o = args[0];
                // Set the grou's panner attribute values.
                if (typeof id === "undefined") {
                    if (!o.pannerAttr) o.pannerAttr = {
                        coneInnerAngle: o.coneInnerAngle,
                        coneOuterAngle: o.coneOuterAngle,
                        coneOuterGain: o.coneOuterGain,
                        distanceModel: o.distanceModel,
                        maxDistance: o.maxDistance,
                        refDistance: o.refDistance,
                        rolloffFactor: o.rolloffFactor,
                        panningModel: o.panningModel
                    };
                    self._pannerAttr = {
                        coneInnerAngle: typeof o.pannerAttr.coneInnerAngle !== "undefined" ? o.pannerAttr.coneInnerAngle : self._coneInnerAngle,
                        coneOuterAngle: typeof o.pannerAttr.coneOuterAngle !== "undefined" ? o.pannerAttr.coneOuterAngle : self._coneOuterAngle,
                        coneOuterGain: typeof o.pannerAttr.coneOuterGain !== "undefined" ? o.pannerAttr.coneOuterGain : self._coneOuterGain,
                        distanceModel: typeof o.pannerAttr.distanceModel !== "undefined" ? o.pannerAttr.distanceModel : self._distanceModel,
                        maxDistance: typeof o.pannerAttr.maxDistance !== "undefined" ? o.pannerAttr.maxDistance : self._maxDistance,
                        refDistance: typeof o.pannerAttr.refDistance !== "undefined" ? o.pannerAttr.refDistance : self._refDistance,
                        rolloffFactor: typeof o.pannerAttr.rolloffFactor !== "undefined" ? o.pannerAttr.rolloffFactor : self._rolloffFactor,
                        panningModel: typeof o.pannerAttr.panningModel !== "undefined" ? o.pannerAttr.panningModel : self._panningModel
                    };
                }
            } else {
                // Return this sound's panner attribute values.
                sound = self._soundById(parseInt(args[0], 10));
                return sound ? sound._pannerAttr : self._pannerAttr;
            }
        } else if (args.length === 2) {
            o = args[0];
            id = parseInt(args[1], 10);
        }
        // Update the values of the specified sounds.
        var ids = self._getSoundIds(id);
        for(var i = 0; i < ids.length; i++){
            sound = self._soundById(ids[i]);
            if (sound) {
                // Merge the new values into the sound.
                var pa = sound._pannerAttr;
                pa = {
                    coneInnerAngle: typeof o.coneInnerAngle !== "undefined" ? o.coneInnerAngle : pa.coneInnerAngle,
                    coneOuterAngle: typeof o.coneOuterAngle !== "undefined" ? o.coneOuterAngle : pa.coneOuterAngle,
                    coneOuterGain: typeof o.coneOuterGain !== "undefined" ? o.coneOuterGain : pa.coneOuterGain,
                    distanceModel: typeof o.distanceModel !== "undefined" ? o.distanceModel : pa.distanceModel,
                    maxDistance: typeof o.maxDistance !== "undefined" ? o.maxDistance : pa.maxDistance,
                    refDistance: typeof o.refDistance !== "undefined" ? o.refDistance : pa.refDistance,
                    rolloffFactor: typeof o.rolloffFactor !== "undefined" ? o.rolloffFactor : pa.rolloffFactor,
                    panningModel: typeof o.panningModel !== "undefined" ? o.panningModel : pa.panningModel
                };
                // Create a new panner node if one doesn't already exist.
                var panner = sound._panner;
                if (!panner) {
                    // Make sure we have a position to setup the node with.
                    if (!sound._pos) sound._pos = self._pos || [
                        0,
                        0,
                        -0.5
                    ];
                    // Create a new panner node.
                    setupPanner(sound, "spatial");
                    panner = sound._panner;
                }
                // Update the panner values or create a new panner if none exists.
                panner.coneInnerAngle = pa.coneInnerAngle;
                panner.coneOuterAngle = pa.coneOuterAngle;
                panner.coneOuterGain = pa.coneOuterGain;
                panner.distanceModel = pa.distanceModel;
                panner.maxDistance = pa.maxDistance;
                panner.refDistance = pa.refDistance;
                panner.rolloffFactor = pa.rolloffFactor;
                panner.panningModel = pa.panningModel;
            }
        }
        return self;
    };
    /** Single Sound Methods **/ /***************************************************************************/ /**
   * Add new properties to the core Sound init.
   * @param  {Function} _super Core Sound init method.
   * @return {Sound}
   */ Sound.prototype.init = function(_super) {
        return function() {
            var self = this;
            var parent = self._parent;
            // Setup user-defined default properties.
            self._orientation = parent._orientation;
            self._stereo = parent._stereo;
            self._pos = parent._pos;
            self._pannerAttr = parent._pannerAttr;
            // Complete initilization with howler.js core Sound's init function.
            _super.call(this);
            // If a stereo or position was specified, set it up.
            if (self._stereo) parent.stereo(self._stereo);
            else if (self._pos) parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
        };
    }(Sound.prototype.init);
    /**
   * Override the Sound.reset method to clean up properties from the spatial plugin.
   * @param  {Function} _super Sound reset method.
   * @return {Sound}
   */ Sound.prototype.reset = function(_super) {
        return function() {
            var self = this;
            var parent = self._parent;
            // Reset all spatial plugin properties on this sound.
            self._orientation = parent._orientation;
            self._stereo = parent._stereo;
            self._pos = parent._pos;
            self._pannerAttr = parent._pannerAttr;
            // If a stereo or position was specified, set it up.
            if (self._stereo) parent.stereo(self._stereo);
            else if (self._pos) parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
            else if (self._panner) {
                // Disconnect the panner.
                self._panner.disconnect(0);
                self._panner = undefined;
                parent._refreshBuffer(self);
            }
            // Complete resetting of the sound.
            return _super.call(this);
        };
    }(Sound.prototype.reset);
    /** Helper Methods **/ /***************************************************************************/ /**
   * Create a new panner node and save it on the sound.
   * @param  {Sound} sound Specific sound to setup panning on.
   * @param {String} type Type of panner to create: 'stereo' or 'spatial'.
   */ var setupPanner = function(sound, type) {
        type = type || "spatial";
        // Create the new panner node.
        if (type === "spatial") {
            sound._panner = Howler.ctx.createPanner();
            sound._panner.coneInnerAngle = sound._pannerAttr.coneInnerAngle;
            sound._panner.coneOuterAngle = sound._pannerAttr.coneOuterAngle;
            sound._panner.coneOuterGain = sound._pannerAttr.coneOuterGain;
            sound._panner.distanceModel = sound._pannerAttr.distanceModel;
            sound._panner.maxDistance = sound._pannerAttr.maxDistance;
            sound._panner.refDistance = sound._pannerAttr.refDistance;
            sound._panner.rolloffFactor = sound._pannerAttr.rolloffFactor;
            sound._panner.panningModel = sound._pannerAttr.panningModel;
            if (typeof sound._panner.positionX !== "undefined") {
                sound._panner.positionX.setValueAtTime(sound._pos[0], Howler.ctx.currentTime);
                sound._panner.positionY.setValueAtTime(sound._pos[1], Howler.ctx.currentTime);
                sound._panner.positionZ.setValueAtTime(sound._pos[2], Howler.ctx.currentTime);
            } else sound._panner.setPosition(sound._pos[0], sound._pos[1], sound._pos[2]);
            if (typeof sound._panner.orientationX !== "undefined") {
                sound._panner.orientationX.setValueAtTime(sound._orientation[0], Howler.ctx.currentTime);
                sound._panner.orientationY.setValueAtTime(sound._orientation[1], Howler.ctx.currentTime);
                sound._panner.orientationZ.setValueAtTime(sound._orientation[2], Howler.ctx.currentTime);
            } else sound._panner.setOrientation(sound._orientation[0], sound._orientation[1], sound._orientation[2]);
        } else {
            sound._panner = Howler.ctx.createStereoPanner();
            sound._panner.pan.setValueAtTime(sound._stereo, Howler.ctx.currentTime);
        }
        sound._panner.connect(sound._node);
        // Update the connections.
        if (!sound._paused) sound._parent.pause(sound._id, true).play(sound._id, true);
    };
})();

},{}]},["e68OI","8lqZg"], "8lqZg", "parcelRequirebab9")

//# sourceMappingURL=index.975ef6c8.js.map
