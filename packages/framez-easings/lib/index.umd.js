(function (a, b) { typeof exports === 'object' && typeof module !== 'undefined' ? b(exports) : typeof define === 'function' && define.amd ? define(['exports'], b) : b(a.easings = a.easings || {}) })(this, function (a) { 'use strict'; var b = Math.sin, c = Math.PI, d = Math.pow, e = function (a) { return void 0 === a && (a = 2), function (b) { return d(b, a) } }, f = function (a) { return void 0 === a && (a = 2), function (b) { return 1 - Math.abs(d(b - 1, a)) } }, g = function (a) { return void 0 === a && (a = 1), function (e) { return e === 0 || e === 1 ? e : -d(2, 10 * (e - 1)) * b((e - 1 - 1.5707963267948966 * (a / (2 * c))) * (2 * c) / a) } }; a.easeIn = e, a.easeInOut = function (a) { return function (b) { return b < 0.5 ? e(a)(2 * b) / 2 : f(a)(2 * b - 1) / 2 + 0.5 } }, a.easeInOutSin = function (a) { return (1 + b(c * a - c / 2)) / 2 }, a.easeInSin = function (a) { return 1 + b(c / 2 * a - c / 2) }, a.easeOut = f, a.easeOutSin = function (a) { return b(c / 2 * a) }, a.elasticIn = g, a.elasticInOut = function (a) { return function (b) { return b < 0.5 ? g(a)(2 * b) / 2 : 1 - g(a)(-2 * b + 2) / 2 } }, a.elasticOut = function (a) { return function (b) { return 1 - g(a)(1 - b) } }, Object.defineProperty(a, '__esModule', {value: !0}) })
// # sourceMappingURL=index.umd.js.map
