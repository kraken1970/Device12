// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"assets/styles/style.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\fonts\\gilroy\\gilroylight.woff2":[["gilroylight.ed9c96ec.woff2","assets/fonts/gilroy/gilroylight.woff2"],"assets/fonts/gilroy/gilroylight.woff2"],"./..\\fonts\\gilroy\\gilroylight.woff":[["gilroylight.3f51e30a.woff","assets/fonts/gilroy/gilroylight.woff"],"assets/fonts/gilroy/gilroylight.woff"],"./..\\fonts\\gilroy\\Gilroylight.ttf":[["Gilroylight.e8e383cf.ttf","assets/fonts/gilroy/Gilroylight.ttf"],"assets/fonts/gilroy/Gilroylight.ttf"],"./..\\fonts\\gilroy\\gilroyextrabold.woff2":[["gilroyextrabold.25abba36.woff2","assets/fonts/gilroy/gilroyextrabold.woff2"],"assets/fonts/gilroy/gilroyextrabold.woff2"],"./..\\fonts\\gilroy\\gilroyextrabold.woff":[["gilroyextrabold.284aae00.woff","assets/fonts/gilroy/gilroyextrabold.woff"],"assets/fonts/gilroy/gilroyextrabold.woff"],"./..\\fonts\\gilroy\\Gilroyextrabold.ttf":[["Gilroyextrabold.6f4618b4.ttf","assets/fonts/gilroy/Gilroyextrabold.ttf"],"assets/fonts/gilroy/Gilroyextrabold.ttf"],"./..\\fonts\\open_sans\\opensanslight.woff2":[["opensanslight.eb2f517c.woff2","assets/fonts/open_sans/opensanslight.woff2"],"assets/fonts/open_sans/opensanslight.woff2"],"./..\\fonts\\open_sans\\opensanslight.woff":[["opensanslight.a8f64202.woff","assets/fonts/open_sans/opensanslight.woff"],"assets/fonts/open_sans/opensanslight.woff"],"./..\\fonts\\open_sans\\OpenSans-Light.ttf":[["OpenSans-Light.29eef5a1.ttf","assets/fonts/open_sans/OpenSans-Light.ttf"],"assets/fonts/open_sans/OpenSans-Light.ttf"],"./..\\fonts\\open_sans\\opensans.woff2":[["opensans.e417a7f1.woff2","assets/fonts/open_sans/opensans.woff2"],"assets/fonts/open_sans/opensans.woff2"],"./..\\fonts\\open_sans\\opensans.woff":[["opensans.b07fba6f.woff","assets/fonts/open_sans/opensans.woff"],"assets/fonts/open_sans/opensans.woff"],"./..\\fonts\\open_sans\\OpenSans-Regular.ttf":[["OpenSans-Regular.16c5bcab.ttf","assets/fonts/open_sans/OpenSans-Regular.ttf"],"assets/fonts/open_sans/OpenSans-Regular.ttf"],"./..\\images\\icon\\search.png":[["search.8a6a1b3c.png","assets/images/icon/search.png"],"assets/images/icon/search.png"],"./..\\images\\icon\\user-icon.png":[["user-icon.d954e17e.png","assets/images/icon/user-icon.png"],"assets/images/icon/user-icon.png"],"./..\\images\\icon\\compare-icon.png":[["compare-icon.5604b589.png","assets/images/icon/compare-icon.png"],"assets/images/icon/compare-icon.png"],"./..\\images\\icon\\cart-icon.png":[["cart-icon.a7295f72.png","assets/images/icon/cart-icon.png"],"assets/images/icon/cart-icon.png"],"./..\\images\\plus.png":[["plus.ae768a75.png","assets/images/plus.png"],"assets/images/plus.png"],"./..\\images\\good-1.png":[["good-1.c9987444.png","assets/images/good-1.png"],"assets/images/good-1.png"],"./..\\images\\good-2.png":[["good-2.1675974b.png","assets/images/good-2.png"],"assets/images/good-2.png"],"./..\\images\\good-3.png":[["good-3.de23cdbf.png","assets/images/good-3.png"],"assets/images/good-3.png"],"./..\\images\\good-4.png":[["good-4.118d0919.png","assets/images/good-4.png"],"assets/images/good-4.png"],"./..\\images\\good-5.png":[["good-5.98d10402.png","assets/images/good-5.png"],"assets/images/good-5.png"],"./..\\images\\good-6.png":[["good-6.95b315e6.png","assets/images/good-6.png"],"assets/images/good-6.png"],"./..\\images\\fb.png":[["fb.63da464c.png","assets/images/fb.png"],"assets/images/fb.png"],"./..\\images\\insta.png":[["insta.16c65870.png","assets/images/insta.png"],"assets/images/insta.png"],"./..\\images\\twitter.png":[["twitter.d1307237.png","assets/images/twitter.png"],"assets/images/twitter.png"],"./..\\images\\user-footer.png":[["user-footer.a833d9f2.png","assets/images/user-footer.png"],"assets/images/user-footer.png"],"./..\\images\\compare-footer.png":[["compare-footer.53708313.png","assets/images/compare-footer.png"],"assets/images/compare-footer.png"],"./..\\images\\cart-footer.png":[["cart-footer.e95ebd77.png","assets/images/cart-footer.png"],"assets/images/cart-footer.png"],"./..\\images\\academy.png":[["academy.5d7cba79.png","assets/images/academy.png"],"assets/images/academy.png"],"./..\\images\\htmlacademy.png":[["htmlacademy.cd1a8849.png","assets/images/htmlacademy.png"],"assets/images/htmlacademy.png"],"./..\\images\\map-big-fon.png":[["map-big-fon.69a33b14.png","assets/images/map-big-fon.png"],"assets/images/map-big-fon.png"],"./..\\images\\sort-up.png":[["sort-up.3959ccb0.png","assets/images/sort-up.png"],"assets/images/sort-up.png"],"./..\\images\\sort-down.png":[["sort-down.2d60d5d5.png","assets/images/sort-down.png"],"assets/images/sort-down.png"],"./..\\images\\tick.png":[["tick.cc4be49b.png","assets/images/tick.png"],"assets/images/tick.png"],"./..\\images\\item-1.png":[["item-1.7be447cf.png","assets/images/item-1.png"],"assets/images/item-1.png"],"./..\\images\\item-2.png":[["item-2.1daec3e3.png","assets/images/item-2.png"],"assets/images/item-2.png"],"./..\\images\\item-3.png":[["item-3.ff36031a.png","assets/images/item-3.png"],"assets/images/item-3.png"],"./..\\images\\item-4.png":[["item-4.12a55ee5.png","assets/images/item-4.png"],"assets/images/item-4.png"],"_css_loader":"C:/Users/Serg Minin/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"C:/Users/Serg Minin/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58632" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}],"C:/Users/Serg Minin/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"C:/Users/Serg Minin/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-loader.js":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;

function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }

  var id = bundles[bundles.length - 1];

  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }

    throw err;
  }
}

function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}

var bundleLoaders = {};

function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}

module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};

function loadBundle(bundle) {
  var id;

  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }

  if (bundles[bundle]) {
    return bundles[bundle];
  }

  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];

  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }

      return resolved;
    });
  }
}

function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}

LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};

LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"C:/Users/Serg Minin/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"C:/Users/Serg Minin/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/loaders/browser/js-loader.js":[function(require,module,exports) {
module.exports = function loadJSBundle(bundle) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.src = bundle;

    script.onerror = function (e) {
      script.onerror = script.onload = null;
      reject(e);
    };

    script.onload = function () {
      script.onerror = script.onload = null;
      resolve();
    };

    document.getElementsByTagName('head')[0].appendChild(script);
  });
};
},{}],0:[function(require,module,exports) {
var b=require("C:/Users/Serg Minin/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-loader.js");b.register("js",require("C:/Users/Serg Minin/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/loaders/browser/js-loader.js"));b.load([]);
},{}]},{},["C:/Users/Serg Minin/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js",0], null)