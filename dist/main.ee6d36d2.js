// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
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

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
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
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"IwUp":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "/*\n* \u9996\u5148\uFF0C\u51C6\u5907\u76AE\u5361\u4E18\u7684\u76AE\u80A4\n*/\n.pikachu {\n    background: #ffe600;\n}\n\n/*\n * \u753B\u4E00\u4E2A\u9F3B\u5B50\n */\n.nose {\n    width: 0;\n    height: 0;\n    border-top: .09em solid black;\n    border-left: .11em solid transparent;\n    border-right: .11em solid transparent;\n    position: absolute;\n    left: 50%;\n    top: 1.20em;\n    margin-left: -.11em;\n    transform-origin: bottom center;\n    animation: nose-move 4s infinite;\n}\n\n.nose::before {\n    content: '';\n    display: block;\n    width: .22em;\n    height: .05em;\n    background: black;\n    position: absolute;\n    top: -.14em;\n    left:-.11em;\n    border-top-right-radius: .11em .05em;\n    border-top-left-radius: .11em .05em;\n    box-shadow: 0 -.005em .01em black;\n}\n\n/*\n * \u8BA9\u9F3B\u5B50\u6296\u4E00\u6296\n */\n@keyframes nose-move {\n    0%, 35%, 38%, 41%, 44%,100% {transform: rotate(0)}\n    36%,39%,42% {transform: rotate(5deg)}\n    37%,40%,43% {transform: rotate(-5deg)}\n}\n\n/* \n * \u753B\u4E00\u53CC\u773C\u775B\n */\n.eye {\n    border: .03em solid black;\n    width: .64em;\n    height: .64em;\n    position: absolute;\n    left: 50%;\n    top: .80em;\n    margin-left: -.32em;\n    border-radius: 50%;\n    background:#2e2e2e;\n}\n\n/*\n * \u5DE6\u773C\u79FB\u5230\u5DE6\u8FB9\n */\n.eye.left {\n    transform: translateX(-1.15em);\n}\n\n/*\n * \u53F3\u773C\u79FB\u5230\u53F3\u8FB9\n */\n.eye.right {\n    transform: translateX(1.15em);\n}\n\n/*\n * \u753B\u4E0A\u773C\u73E0\u5B50\n */\n.eye::before{\n    content: '';\n    display: block;\n    width: .3em;\n    height: .3em;\n    border: .03em solid black;\n    background: white;\n    border-radius: 50%;\n    position: relative;\n    top: -.01em; \n    left: .07em;\n    animation: eyes-move 4s infinite linear;\n}\n\n/*\n * \u773C\u775B\u8F6C\u4E00\u8F6C\n */\n@keyframes eyes-move {\n    0%,20% {top: -.01em; left: .07em;}\n    5% {top: .05em; left: .25em;}\n    10% {top: .2em; left: .29em;}\n    15% {top: .25em; left: .05em;}  \n}\n\n/* \n * \u753B\u4E0A\u773C\u76AE\n */\n.eye::after {\n    content: '';\n    display: block;\n    width: .66em;\n    height: .66em;\n    position: relative;\n    top: -1em;\n    left: -.04em;\n    background: #ffe600;\n    animation: eye-close 4s infinite linear;\n}\n\n/*\n * \u773C\u775B\u7728\u4E00\u7728\n */\n@keyframes eye-close {\n    0%, 23%, 33%, 100% {top: -1em;}\n    28% {top: -.55em;}\n}\n\n/*\n * \u753B\u4E0A\u5634\u5507\n */\n.up {\n    width: 1.6em;\n    height: 1em;\n    position: absolute;\n    left: 50%;\n    top: 1.4em;\n    margin-left: -.8em;\n    z-index: 1;\n}\n\n.up .lip {\n    background: #ffe600;\n    width: .8em;\n    height: .3em;\n    position: absolute;\n}\n\n.up .lip.left{ \n    border-left: .03em solid black;\n    border-bottom: .03em solid black; \n    border-bottom-left-radius: .55em .3em;   \n    transform: rotate(-25.5deg) translateZ(0);\n    left: -.015em;\n}\n\n.up .lip.right{\n    border-right: .03em solid black;\n    border-bottom: .03em solid black; \n    border-bottom-right-radius: .55em .3em;\n    transform: rotate(25.5deg) translateZ(0); \n    right: -.015em;\n}\n\n/* \n * \u753B\u4E2A\u5927\u5634\u5DF4\n */\n.down {\n    width: 1.4em;\n    height: 1.7em;\n    position: absolute;\n    left: 50%;\n    top: 1.52em;\n    margin-left: -.7em;\n    overflow: hidden;\n}\n\n.down .inner {\n    width: 1.8em;\n    height: 9em;\n    border: .04em solid black;\n    background: #9b000a;\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    margin-left: -.9em;\n    border-bottom-left-radius: 100%;\n    border-bottom-right-radius: 100%;\n    overflow: hidden;\n}\n\n/*\n * \u753B\u4E2A\u5C0F\u820C\u5934\n */\n.down .inner .tongue {\n    width: 2em;\n    height: 5em;\n    background: #ff485f;\n    position: absolute;\n    bottom: -3.6em;\n    left: 50%;\n    margin-left: -1em;\n    border-top-left-radius: .95em 1.5em;\n    border-top-right-radius: .95em 1.5em;\n}\n\n/*\n * \u753B2\u4E2A\u7EA2\u7EA2\u7684\u5C0F\u8138\u988A\n */\n.cheek {\n    width: .88em;\n    height: .88em;\n    border: .03em solid black;\n    border-radius: 50%;\n    background: #ff0000;\n    position: absolute;\n    left: 50%;\n    top: 1.9em;\n    margin-left: -.44em;\n    animation: light 4s ease-out infinite;\n    z-index: 2;\n}\n\n/* \n * \u4E00\u4E2A\u79FB\u5230\u5DE6\u8FB9\n */\n.cheek.left {\n    transform: translateX(-1.65em);\n}\n\n/*\n * \u4E00\u4E2A\u79FB\u5230\u53F3\u8FB9\n */\n.cheek.right {\n    transform: translateX(1.65em);\n}\n\n/*\n * \u653E\u51FA\u7231\u7684\u5149\u8292\n */\n@keyframes light {\n    55% {background: #ff0000;}\n    60% {background: #FFFA3F;} \n}\n\n/*\n * \u753B\u597D\u4E86\uFF0C\u8FD9\u53EA\u76AE\u5361\u4E18\u9001\u7ED9\u4F60~\n */\n";
var _default = string;
exports.default = _default;
},{}],"epB2":[function(require,module,exports) {
"use strict";

var _style = _interopRequireDefault(require("./style.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  n: 0,
  time: 60,
  id: undefined,
  code: '',
  init: function init() {
    player.listener();
    player.play();
  },
  ui: {
    text: document.querySelector('#text'),
    style: document.querySelector('#style')
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnQuick': 'quick',
    '#btnReplay': 'replay'
  },
  listener: function listener() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        document.querySelector(key).onclick = player[player.events[key]];
      }
    }
  },
  play: function play() {
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  run: function run() {
    if (player.n === 0) {
      player.code = "";
    }

    if (player.n < _style.default.length) {
      if (_style.default[player.n] === "\n") {
        player.code += "<br>";
      } else if (_style.default[player.n] === " ") {
        player.code += "&nbsp;"; // HTML的空格
      } else {
        player.code += _style.default[player.n];
      }

      player.n += 1;
      player.ui.text.scrollTop = text.scrollHeight;
      player.ui.text.innerHTML = player.code;
      player.ui.style.innerHTML = _style.default.substring(0, player.n);
    }
  },
  slow: function slow() {
    player.pause();
    player.time = 200;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 60;
    player.play();
  },
  quick: function quick() {
    player.pause();
    player.time = 0;
    player.play();
  },
  replay: function replay() {
    player.pause();
    player.n = 0;
    player.play();
  }
};
player.init();
},{"./style.js":"IwUp"}]},{},["epB2"], null)
//# sourceMappingURL=main.ee6d36d2.js.map