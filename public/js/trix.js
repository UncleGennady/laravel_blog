/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/trix.js":
/*!******************************!*\
  !*** ./resources/js/trix.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e55) { throw _e55; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e56) { didErr = true; err = _e56; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*
Trix 2.0.0
Copyright © 2022 Basecamp, LLC
 */
!function (t, e) {
  "object" == ( false ? 0 : _typeof(exports)) && "undefined" != "object" ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function () {
  "use strict";

  var t = "2.0.0";
  var e = "[data-trix-attachment]",
    i = {
      preview: {
        presentation: "gallery",
        caption: {
          name: !0,
          size: !0
        }
      },
      file: {
        caption: {
          size: !0
        }
      }
    },
    n = {
      "default": {
        tagName: "div",
        parse: !1
      },
      quote: {
        tagName: "blockquote",
        nestable: !0
      },
      heading1: {
        tagName: "h1",
        terminal: !0,
        breakOnReturn: !0,
        group: !1
      },
      code: {
        tagName: "pre",
        terminal: !0,
        text: {
          plaintext: !0
        }
      },
      bulletList: {
        tagName: "ul",
        parse: !1
      },
      bullet: {
        tagName: "li",
        listAttribute: "bulletList",
        group: !1,
        nestable: !0,
        test: function test(t) {
          return r(t.parentNode) === n[this.listAttribute].tagName;
        }
      },
      numberList: {
        tagName: "ol",
        parse: !1
      },
      number: {
        tagName: "li",
        listAttribute: "numberList",
        group: !1,
        nestable: !0,
        test: function test(t) {
          return r(t.parentNode) === n[this.listAttribute].tagName;
        }
      },
      attachmentGallery: {
        tagName: "div",
        exclusive: !0,
        terminal: !0,
        parse: !1,
        group: !1
      }
    },
    r = function r(t) {
      var e;
      return null == t || null === (e = t.tagName) || void 0 === e ? void 0 : e.toLowerCase();
    };
  var o = {
      composesExistingText: /Android.*Chrome/.test(navigator.userAgent),
      forcesObjectResizing: /Trident.*rv:11/.test(navigator.userAgent),
      supportsInputEvents: function () {
        if ("undefined" == typeof InputEvent) return !1;
        for (var _i2 = 0, _arr = ["data", "getTargetRanges", "inputType"]; _i2 < _arr.length; _i2++) {
          var _t2 = _arr[_i2];
          if (!(_t2 in InputEvent.prototype)) return !1;
        }
        return !0;
      }()
    },
    s = {
      attachFiles: "Attach Files",
      bold: "Bold",
      bullets: "Bullets",
      "byte": "Byte",
      bytes: "Bytes",
      captionPlaceholder: "Add a caption…",
      code: "Code",
      heading1: "Heading",
      indent: "Increase Level",
      italic: "Italic",
      link: "Link",
      numbers: "Numbers",
      outdent: "Decrease Level",
      quote: "Quote",
      redo: "Redo",
      remove: "Remove",
      strike: "Strikethrough",
      undo: "Undo",
      unlink: "Unlink",
      url: "URL",
      urlPlaceholder: "Enter a URL…",
      GB: "GB",
      KB: "KB",
      MB: "MB",
      PB: "PB",
      TB: "TB"
    };
  var a = [s.bytes, s.KB, s.MB, s.GB, s.TB, s.PB];
  var l = {
    prefix: "IEC",
    precision: 2,
    formatter: function formatter(t) {
      switch (t) {
        case 0:
          return "0 ".concat(s.bytes);
        case 1:
          return "1 ".concat(s["byte"]);
        default:
          var _e2;
          "SI" === this.prefix ? _e2 = 1e3 : "IEC" === this.prefix && (_e2 = 1024);
          var _i3 = Math.floor(Math.log(t) / Math.log(_e2)),
            _n = (t / Math.pow(_e2, _i3)).toFixed(this.precision).replace(/0*$/, "").replace(/\.$/, "");
          return "".concat(_n, " ").concat(a[_i3]);
      }
    }
  };
  var c = "\uFEFF",
    u = " ",
    h = function h(t) {
      for (var _e3 in t) {
        var _i4 = t[_e3];
        this[_e3] = _i4;
      }
      return this;
    },
    d = document.documentElement,
    g = d.matches,
    m = function m(t) {
      var _ref = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        e = _ref.onElement,
        i = _ref.matchingSelector,
        n = _ref.withCallback,
        r = _ref.inPhase,
        o = _ref.preventDefault,
        s = _ref.times;
      var a = e || d,
        l = i,
        c = "capturing" === r,
        u = function u(t) {
          null != s && 0 == --s && u.destroy();
          var e = b(t.target, {
            matchingSelector: l
          });
          null != e && (null == n || n.call(e, t, e), o && t.preventDefault());
        };
      return u.destroy = function () {
        return a.removeEventListener(t, u, c);
      }, a.addEventListener(t, u, c), u;
    },
    p = function p(t) {
      var _ref2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        e = _ref2.onElement,
        i = _ref2.bubbles,
        n = _ref2.cancelable,
        r = _ref2.attributes;
      var o = null != e ? e : d;
      i = !1 !== i, n = !1 !== n;
      var s = document.createEvent("Events");
      return s.initEvent(t, i, n), null != r && h.call(s, r), o.dispatchEvent(s);
    },
    f = function f(t, e) {
      if (1 === (null == t ? void 0 : t.nodeType)) return g.call(t, e);
    },
    b = function b(t) {
      var _ref3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        e = _ref3.matchingSelector,
        i = _ref3.untilNode;
      for (; t && t.nodeType !== Node.ELEMENT_NODE;) t = t.parentNode;
      if (null != t) {
        if (null == e) return t;
        if (t.closest && null == i) return t.closest(e);
        for (; t && t !== i;) {
          if (f(t, e)) return t;
          t = t.parentNode;
        }
      }
    },
    v = function v(t) {
      return document.activeElement !== t && A(t, document.activeElement);
    },
    A = function A(t, e) {
      if (t && e) for (; e;) {
        if (e === t) return !0;
        e = e.parentNode;
      }
    },
    x = function x(t) {
      var e;
      if (null === (e = t) || void 0 === e || !e.parentNode) return;
      var i = 0;
      for (t = t.previousSibling; t;) i++, t = t.previousSibling;
      return i;
    },
    y = function y(t) {
      var e;
      return null == t || null === (e = t.parentNode) || void 0 === e ? void 0 : e.removeChild(t);
    },
    C = function C(t) {
      var _ref4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        e = _ref4.onlyNodesOfType,
        i = _ref4.usingFilter,
        n = _ref4.expandEntityReferences;
      var r = function () {
        switch (e) {
          case "element":
            return NodeFilter.SHOW_ELEMENT;
          case "text":
            return NodeFilter.SHOW_TEXT;
          case "comment":
            return NodeFilter.SHOW_COMMENT;
          default:
            return NodeFilter.SHOW_ALL;
        }
      }();
      return document.createTreeWalker(t, r, null != i ? i : null, !0 === n);
    },
    R = function R(t) {
      var e;
      return null == t || null === (e = t.tagName) || void 0 === e ? void 0 : e.toLowerCase();
    },
    S = function S(t) {
      var e,
        i,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      "object" == _typeof(t) ? (n = t, t = n.tagName) : n = {
        attributes: n
      };
      var r = document.createElement(t);
      if (null != n.editable && (null == n.attributes && (n.attributes = {}), n.attributes.contenteditable = n.editable), n.attributes) for (e in n.attributes) i = n.attributes[e], r.setAttribute(e, i);
      if (n.style) for (e in n.style) i = n.style[e], r.style[e] = i;
      if (n.data) for (e in n.data) i = n.data[e], r.dataset[e] = i;
      return n.className && n.className.split(" ").forEach(function (t) {
        r.classList.add(t);
      }), n.textContent && (r.textContent = n.textContent), n.childNodes && [].concat(n.childNodes).forEach(function (t) {
        r.appendChild(t);
      }), r;
    };
  var E;
  var k = function k() {
      if (null != E) return E;
      E = [];
      for (var _t3 in n) {
        var _e4 = n[_t3];
        _e4.tagName && E.push(_e4.tagName);
      }
      return E;
    },
    L = function L(t) {
      return T(null == t ? void 0 : t.firstChild);
    },
    D = function D(t) {
      return k().includes(R(t)) && !k().includes(R(t.firstChild));
    },
    w = function w(t) {
      var _ref5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          strict: !0
        },
        e = _ref5.strict;
      return e ? T(t) : T(t) || !T(t.firstChild) && D(t);
    },
    T = function T(t) {
      return F(t) && "block" === (null == t ? void 0 : t.data);
    },
    F = function F(t) {
      return (null == t ? void 0 : t.nodeType) === Node.COMMENT_NODE;
    },
    B = function B(t) {
      var _ref6 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        e = _ref6.name;
      if (t) return N(t) ? t.data === c ? !e || t.parentNode.dataset.trixCursorTarget === e : void 0 : B(t.firstChild);
    },
    P = function P(t) {
      return f(t, e);
    },
    I = function I(t) {
      return N(t) && "" === (null == t ? void 0 : t.data);
    },
    N = function N(t) {
      return (null == t ? void 0 : t.nodeType) === Node.TEXT_NODE;
    },
    O = {
      level2Enabled: !0,
      getLevel: function getLevel() {
        return this.level2Enabled && o.supportsInputEvents ? 2 : 0;
      },
      pickFiles: function pickFiles(t) {
        var e = S("input", {
          type: "file",
          multiple: !0,
          hidden: !0,
          id: this.fileInputId
        });
        e.addEventListener("change", function () {
          t(e.files), y(e);
        }), y(document.getElementById(this.fileInputId)), document.body.appendChild(e), e.click();
      }
    };
  var M = {
      removeBlankTableCells: !1,
      tableCellSeparator: " | ",
      tableRowSeparator: "\n"
    },
    j = {
      bold: {
        tagName: "strong",
        inheritable: !0,
        parser: function parser(t) {
          var e = window.getComputedStyle(t);
          return "bold" === e.fontWeight || e.fontWeight >= 600;
        }
      },
      italic: {
        tagName: "em",
        inheritable: !0,
        parser: function parser(t) {
          return "italic" === window.getComputedStyle(t).fontStyle;
        }
      },
      href: {
        groupTagName: "a",
        parser: function parser(t) {
          var i = "a:not(".concat(e, ")"),
            n = t.closest(i);
          if (n) return n.getAttribute("href");
        }
      },
      strike: {
        tagName: "del",
        inheritable: !0
      },
      frozen: {
        style: {
          backgroundColor: "highlight"
        }
      }
    },
    W = {
      getDefaultHTML: function getDefaultHTML() {
        return '<div class="trix-button-row">\n      <span class="trix-button-group trix-button-group--text-tools" data-trix-button-group="text-tools">\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-bold" data-trix-attribute="bold" data-trix-key="b" title="'.concat(s.bold, '" tabindex="-1">').concat(s.bold, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-italic" data-trix-attribute="italic" data-trix-key="i" title="').concat(s.italic, '" tabindex="-1">').concat(s.italic, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-strike" data-trix-attribute="strike" title="').concat(s.strike, '" tabindex="-1">').concat(s.strike, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-link" data-trix-attribute="href" data-trix-action="link" data-trix-key="k" title="').concat(s.link, '" tabindex="-1">').concat(s.link, '</button>\n      </span>\n\n      <span class="trix-button-group trix-button-group--block-tools" data-trix-button-group="block-tools">\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-heading-1" data-trix-attribute="heading1" title="').concat(s.heading1, '" tabindex="-1">').concat(s.heading1, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-quote" data-trix-attribute="quote" title="').concat(s.quote, '" tabindex="-1">').concat(s.quote, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-code" data-trix-attribute="code" title="').concat(s.code, '" tabindex="-1">').concat(s.code, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-bullet-list" data-trix-attribute="bullet" title="').concat(s.bullets, '" tabindex="-1">').concat(s.bullets, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-number-list" data-trix-attribute="number" title="').concat(s.numbers, '" tabindex="-1">').concat(s.numbers, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-decrease-nesting-level" data-trix-action="decreaseNestingLevel" title="').concat(s.outdent, '" tabindex="-1">').concat(s.outdent, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-increase-nesting-level" data-trix-action="increaseNestingLevel" title="').concat(s.indent, '" tabindex="-1">').concat(s.indent, '</button>\n      </span>\n\n      <span class="trix-button-group trix-button-group--file-tools" data-trix-button-group="file-tools">\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-attach" data-trix-action="attachFiles" title="').concat(s.attachFiles, '" tabindex="-1">').concat(s.attachFiles, '</button>\n      </span>\n\n      <span class="trix-button-group-spacer"></span>\n\n      <span class="trix-button-group trix-button-group--history-tools" data-trix-button-group="history-tools">\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-undo" data-trix-action="undo" data-trix-key="z" title="').concat(s.undo, '" tabindex="-1">').concat(s.undo, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-redo" data-trix-action="redo" data-trix-key="shift+z" title="').concat(s.redo, '" tabindex="-1">').concat(s.redo, '</button>\n      </span>\n    </div>\n\n    <div class="trix-dialogs" data-trix-dialogs>\n      <div class="trix-dialog trix-dialog--link" data-trix-dialog="href" data-trix-dialog-attribute="href">\n        <div class="trix-dialog__link-fields">\n          <input type="url" name="href" class="trix-input trix-input--dialog" placeholder="').concat(s.urlPlaceholder, '" aria-label="').concat(s.url, '" required data-trix-input>\n          <div class="trix-button-group">\n            <input type="button" class="trix-button trix-button--dialog" value="').concat(s.link, '" data-trix-method="setAttribute">\n            <input type="button" class="trix-button trix-button--dialog" value="').concat(s.unlink, '" data-trix-method="removeAttribute">\n          </div>\n        </div>\n      </div>\n    </div>');
      }
    };
  var q = {
    interval: 5e3
  };
  var U = Object.freeze({
    __proto__: null,
    attachments: i,
    blockAttributes: n,
    browser: o,
    css: {
      attachment: "attachment",
      attachmentCaption: "attachment__caption",
      attachmentCaptionEditor: "attachment__caption-editor",
      attachmentMetadata: "attachment__metadata",
      attachmentMetadataContainer: "attachment__metadata-container",
      attachmentName: "attachment__name",
      attachmentProgress: "attachment__progress",
      attachmentSize: "attachment__size",
      attachmentToolbar: "attachment__toolbar",
      attachmentGallery: "attachment-gallery"
    },
    fileSize: l,
    input: O,
    keyNames: {
      8: "backspace",
      9: "tab",
      13: "return",
      27: "escape",
      37: "left",
      39: "right",
      46: "delete",
      68: "d",
      72: "h",
      79: "o"
    },
    lang: s,
    parser: M,
    textAttributes: j,
    toolbar: W,
    undo: q
  });
  var V = /*#__PURE__*/function () {
    function V() {
      _classCallCheck(this, V);
    }
    _createClass(V, null, [{
      key: "proxyMethod",
      value: function proxyMethod(t) {
        var _z = z(t),
          e = _z.name,
          i = _z.toMethod,
          n = _z.toProperty,
          r = _z.optional;
        this.prototype[e] = function () {
          var t, o;
          var s, a;
          i ? o = r ? null === (s = this[i]) || void 0 === s ? void 0 : s.call(this) : this[i]() : n && (o = this[n]);
          return r ? (t = null === (a = o) || void 0 === a ? void 0 : a[e], t ? _.call(t, o, arguments) : void 0) : (t = o[e], _.call(t, o, arguments));
        };
      }
    }]);
    return V;
  }();
  var z = function z(t) {
      var e = t.match(H);
      if (!e) throw new Error("can't parse @proxyMethod expression: ".concat(t));
      var i = {
        name: e[4]
      };
      return null != e[2] ? i.toMethod = e[1] : i.toProperty = e[1], null != e[3] && (i.optional = !0), i;
    },
    _ = Function.prototype.apply,
    H = new RegExp("^(.+?)(\\(\\))?(\\?)?\\.(.+?)$");
  var J, K, G;
  var $ = /*#__PURE__*/function (_V) {
    _inherits($, _V);
    function $(t, e) {
      var _this;
      _classCallCheck(this, $);
      _this = _callSuper(this, $, arguments), _this.ucs2String = t, _this.codepoints = e, _this.length = _this.codepoints.length, _this.ucs2Length = _this.ucs2String.length;
      return _this;
    }
    _createClass($, [{
      key: "offsetToUCS2Offset",
      value: function offsetToUCS2Offset(t) {
        return tt(this.codepoints.slice(0, Math.max(0, t))).length;
      }
    }, {
      key: "offsetFromUCS2Offset",
      value: function offsetFromUCS2Offset(t) {
        return Z(this.ucs2String.slice(0, Math.max(0, t))).length;
      }
    }, {
      key: "slice",
      value: function slice() {
        var _this$codepoints;
        return this.constructor.fromCodepoints((_this$codepoints = this.codepoints).slice.apply(_this$codepoints, arguments));
      }
    }, {
      key: "charAt",
      value: function charAt(t) {
        return this.slice(t, t + 1);
      }
    }, {
      key: "isEqualTo",
      value: function isEqualTo(t) {
        return this.constructor.box(t).ucs2String === this.ucs2String;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return this.ucs2String;
      }
    }, {
      key: "getCacheKey",
      value: function getCacheKey() {
        return this.ucs2String;
      }
    }, {
      key: "toString",
      value: function toString() {
        return this.ucs2String;
      }
    }], [{
      key: "box",
      value: function box() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return t instanceof this ? t : this.fromUCS2String(null == t ? void 0 : t.toString());
      }
    }, {
      key: "fromUCS2String",
      value: function fromUCS2String(t) {
        return new this(t, Z(t));
      }
    }, {
      key: "fromCodepoints",
      value: function fromCodepoints(t) {
        return new this(tt(t), t);
      }
    }]);
    return $;
  }(V);
  var X = 1 === (null === (J = Array.from) || void 0 === J ? void 0 : J.call(Array, "👼").length),
    Y = null != (null === (K = " ".codePointAt) || void 0 === K ? void 0 : K.call(" ", 0)),
    Q = " 👼" === (null === (G = String.fromCodePoint) || void 0 === G ? void 0 : G.call(String, 32, 128124));
  var Z, tt;
  Z = X && Y ? function (t) {
    return Array.from(t).map(function (t) {
      return t.codePointAt(0);
    });
  } : function (t) {
    var e = [];
    var i = 0;
    var n = t.length;
    for (; i < n;) {
      var _r = t.charCodeAt(i++);
      if (55296 <= _r && _r <= 56319 && i < n) {
        var _e5 = t.charCodeAt(i++);
        56320 == (64512 & _e5) ? _r = ((1023 & _r) << 10) + (1023 & _e5) + 65536 : i--;
      }
      e.push(_r);
    }
    return e;
  }, tt = Q ? function (t) {
    return String.fromCodePoint.apply(String, _toConsumableArray(Array.from(t || [])));
  } : function (t) {
    return function () {
      var e = [];
      return Array.from(t).forEach(function (t) {
        var i = "";
        t > 65535 && (t -= 65536, i += String.fromCharCode(t >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e.push(i + String.fromCharCode(t));
      }), e;
    }().join("");
  };
  var et = 0;
  var it = /*#__PURE__*/function (_V2) {
    _inherits(it, _V2);
    function it() {
      var _this2;
      _classCallCheck(this, it);
      _this2 = _callSuper(this, it, arguments), _this2.id = ++et;
      return _this2;
    }
    _createClass(it, [{
      key: "hasSameConstructorAs",
      value: function hasSameConstructorAs(t) {
        return this.constructor === (null == t ? void 0 : t.constructor);
      }
    }, {
      key: "isEqualTo",
      value: function isEqualTo(t) {
        return this === t;
      }
    }, {
      key: "inspect",
      value: function inspect() {
        var t = [],
          e = this.contentsForInspection() || {};
        for (var _i5 in e) {
          var _n2 = e[_i5];
          t.push("".concat(_i5, "=").concat(_n2));
        }
        return "#<".concat(this.constructor.name, ":").concat(this.id).concat(t.length ? " ".concat(t.join(", ")) : "", ">");
      }
    }, {
      key: "contentsForInspection",
      value: function contentsForInspection() {}
    }, {
      key: "toJSONString",
      value: function toJSONString() {
        return JSON.stringify(this);
      }
    }, {
      key: "toUTF16String",
      value: function toUTF16String() {
        return $.box(this);
      }
    }, {
      key: "getCacheKey",
      value: function getCacheKey() {
        return this.id.toString();
      }
    }], [{
      key: "fromJSONString",
      value: function fromJSONString(t) {
        return this.fromJSON(JSON.parse(t));
      }
    }]);
    return it;
  }(V);
  var nt = function nt() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      if (t.length !== e.length) return !1;
      for (var _i6 = 0; _i6 < t.length; _i6++) {
        if (t[_i6] !== e[_i6]) return !1;
      }
      return !0;
    },
    rt = function rt(t) {
      var e = t.slice(0);
      for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) n[r - 1] = arguments[r];
      return e.splice.apply(e, n), e;
    },
    ot = /[\u05BE\u05C0\u05C3\u05D0-\u05EA\u05F0-\u05F4\u061B\u061F\u0621-\u063A\u0640-\u064A\u066D\u0671-\u06B7\u06BA-\u06BE\u06C0-\u06CE\u06D0-\u06D5\u06E5\u06E6\u200F\u202B\u202E\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE72\uFE74\uFE76-\uFEFC]/,
    st = function () {
      var t = S("input", {
          dir: "auto",
          name: "x",
          dirName: "x.dir"
        }),
        e = S("form");
      e.appendChild(t);
      var i = function () {
          try {
            return new FormData(e).has(t.dirName);
          } catch (t) {
            return !1;
          }
        }(),
        n = function () {
          try {
            return t.matches(":dir(ltr),:dir(rtl)");
          } catch (t) {
            return !1;
          }
        }();
      return i ? function (i) {
        return t.value = i, new FormData(e).get(t.dirName);
      } : n ? function (e) {
        return t.value = e, t.matches(":dir(rtl)") ? "rtl" : "ltr";
      } : function (t) {
        var e = t.trim().charAt(0);
        return ot.test(e) ? "rtl" : "ltr";
      };
    }();
  var at = null,
    lt = null,
    ct = null,
    ut = null;
  var ht = function ht() {
      return at || (at = pt().concat(gt())), at;
    },
    dt = function dt(t) {
      return n[t];
    },
    gt = function gt() {
      return lt || (lt = Object.keys(n)), lt;
    },
    mt = function mt(t) {
      return j[t];
    },
    pt = function pt() {
      return ct || (ct = Object.keys(j)), ct;
    },
    ft = function ft(t, e) {
      bt(t).textContent = e.replace(/%t/g, t);
    },
    bt = function bt(t) {
      var e = document.createElement("style");
      e.setAttribute("type", "text/css"), e.setAttribute("data-tag-name", t.toLowerCase());
      var i = vt();
      return i && e.setAttribute("nonce", i), document.head.insertBefore(e, document.head.firstChild), e;
    },
    vt = function vt() {
      var t = At("trix-csp-nonce") || At("csp-nonce");
      if (t) return t.getAttribute("content");
    },
    At = function At(t) {
      return document.head.querySelector("meta[name=".concat(t, "]"));
    },
    xt = {
      "application/x-trix-feature-detection": "test"
    },
    yt = function yt(t) {
      var e = t.getData("text/plain"),
        i = t.getData("text/html");
      if (!e || !i) return null == e ? void 0 : e.length;
      {
        var _DOMParser$parseFromS = new DOMParser().parseFromString(i, "text/html"),
          _t4 = _DOMParser$parseFromS.body;
        if (_t4.textContent === e) return !_t4.querySelector("*");
      }
    },
    Ct = /Mac|^iP/.test(navigator.platform) ? function (t) {
      return t.metaKey;
    } : function (t) {
      return t.ctrlKey;
    },
    Rt = function Rt(t) {
      return setTimeout(t, 1);
    },
    St = function St() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      var e = {};
      for (var _i7 in t) {
        var _n3 = t[_i7];
        e[_i7] = _n3;
      }
      return e;
    },
    Et = function Et() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      if (Object.keys(t).length !== Object.keys(e).length) return !1;
      for (var _i8 in t) {
        if (t[_i8] !== e[_i8]) return !1;
      }
      return !0;
    },
    kt = function kt(t) {
      if (null != t) return Array.isArray(t) || (t = [t, t]), [wt(t[0]), wt(null != t[1] ? t[1] : t[0])];
    },
    Lt = function Lt(t) {
      if (null == t) return;
      var _kt = kt(t),
        _kt2 = _slicedToArray(_kt, 2),
        e = _kt2[0],
        i = _kt2[1];
      return Tt(e, i);
    },
    Dt = function Dt(t, e) {
      if (null == t || null == e) return;
      var _kt3 = kt(t),
        _kt4 = _slicedToArray(_kt3, 2),
        i = _kt4[0],
        n = _kt4[1],
        _kt5 = kt(e),
        _kt6 = _slicedToArray(_kt5, 2),
        r = _kt6[0],
        o = _kt6[1];
      return Tt(i, r) && Tt(n, o);
    },
    wt = function wt(t) {
      return "number" == typeof t ? t : St(t);
    },
    Tt = function Tt(t, e) {
      return "number" == typeof t ? t === e : Et(t, e);
    };
  var Ft = /*#__PURE__*/function (_V3) {
    _inherits(Ft, _V3);
    function Ft() {
      var _this3;
      _classCallCheck(this, Ft);
      _this3 = _callSuper(this, Ft, arguments), _this3.update = _this3.update.bind(_assertThisInitialized(_this3)), _this3.run = _this3.run.bind(_assertThisInitialized(_this3)), _this3.selectionManagers = [];
      return _this3;
    }
    _createClass(Ft, [{
      key: "start",
      value: function start() {
        if (!this.started) return this.started = !0, "onselectionchange" in document ? document.addEventListener("selectionchange", this.update, !0) : this.run();
      }
    }, {
      key: "stop",
      value: function stop() {
        if (this.started) return this.started = !1, document.removeEventListener("selectionchange", this.update, !0);
      }
    }, {
      key: "registerSelectionManager",
      value: function registerSelectionManager(t) {
        if (!this.selectionManagers.includes(t)) return this.selectionManagers.push(t), this.start();
      }
    }, {
      key: "unregisterSelectionManager",
      value: function unregisterSelectionManager(t) {
        if (this.selectionManagers = this.selectionManagers.filter(function (e) {
          return e !== t;
        }), 0 === this.selectionManagers.length) return this.stop();
      }
    }, {
      key: "notifySelectionManagersOfSelectionChange",
      value: function notifySelectionManagersOfSelectionChange() {
        return this.selectionManagers.map(function (t) {
          return t.selectionDidChange();
        });
      }
    }, {
      key: "update",
      value: function update() {
        var t = Nt();
        if (!Bt(t, this.domRange)) return this.domRange = t, this.notifySelectionManagersOfSelectionChange();
      }
    }, {
      key: "reset",
      value: function reset() {
        return this.domRange = null, this.update();
      }
    }, {
      key: "run",
      value: function run() {
        if (this.started) return this.update(), requestAnimationFrame(this.run);
      }
    }]);
    return Ft;
  }(V);
  var Bt = function Bt(t, e) {
      return (null == t ? void 0 : t.startContainer) === (null == e ? void 0 : e.startContainer) && (null == t ? void 0 : t.startOffset) === (null == e ? void 0 : e.startOffset) && (null == t ? void 0 : t.endContainer) === (null == e ? void 0 : e.endContainer) && (null == t ? void 0 : t.endOffset) === (null == e ? void 0 : e.endOffset);
    },
    Pt = new Ft(),
    It = function It() {
      var t = window.getSelection();
      if (t.rangeCount > 0) return t;
    },
    Nt = function Nt() {
      var t;
      var e = null === (t = It()) || void 0 === t ? void 0 : t.getRangeAt(0);
      if (e && !Mt(e)) return e;
    },
    Ot = function Ot(t) {
      var e = window.getSelection();
      return e.removeAllRanges(), e.addRange(t), Pt.update();
    },
    Mt = function Mt(t) {
      return jt(t.startContainer) || jt(t.endContainer);
    },
    jt = function jt(t) {
      return !Object.getPrototypeOf(t);
    },
    Wt = function Wt(t) {
      return t.replace(new RegExp("".concat(c), "g"), "").replace(new RegExp("".concat(u), "g"), " ");
    },
    qt = new RegExp("[^\\S".concat(u, "]")),
    Ut = function Ut(t) {
      return t.replace(new RegExp("".concat(qt.source), "g"), " ").replace(/\ {2,}/g, " ");
    },
    Vt = function Vt(t, e) {
      if (t.isEqualTo(e)) return ["", ""];
      var i = zt(t, e),
        n = i.utf16String.length;
      var r;
      if (n) {
        var _o = i.offset,
          _s = t.codepoints.slice(0, _o).concat(t.codepoints.slice(_o + n));
        r = zt(e, $.fromCodepoints(_s));
      } else r = zt(e, t);
      return [i.utf16String.toString(), r.utf16String.toString()];
    },
    zt = function zt(t, e) {
      var i = 0,
        n = t.length,
        r = e.length;
      for (; i < n && t.charAt(i).isEqualTo(e.charAt(i));) i++;
      for (; n > i + 1 && t.charAt(n - 1).isEqualTo(e.charAt(r - 1));) n--, r--;
      return {
        utf16String: t.slice(i, n),
        offset: i
      };
    };
  var _t = /*#__PURE__*/function (_it) {
    _inherits(_t, _it);
    function _t() {
      var _this4;
      _classCallCheck(this, _t);
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      _this4 = _callSuper(this, _t, arguments), _this4.values = Kt(t);
      return _this4;
    }
    _createClass(_t, [{
      key: "add",
      value: function add(t, e) {
        return this.merge(Ht(t, e));
      }
    }, {
      key: "remove",
      value: function remove(t) {
        return new _t(Kt(this.values, t));
      }
    }, {
      key: "get",
      value: function get(t) {
        return this.values[t];
      }
    }, {
      key: "has",
      value: function has(t) {
        return t in this.values;
      }
    }, {
      key: "merge",
      value: function merge(t) {
        return new _t(Jt(this.values, $t(t)));
      }
    }, {
      key: "slice",
      value: function slice(t) {
        var _this5 = this;
        var e = {};
        return Array.from(t).forEach(function (t) {
          _this5.has(t) && (e[t] = _this5.values[t]);
        }), new _t(e);
      }
    }, {
      key: "getKeys",
      value: function getKeys() {
        return Object.keys(this.values);
      }
    }, {
      key: "getKeysCommonToHash",
      value: function getKeysCommonToHash(t) {
        var _this6 = this;
        return t = Gt(t), this.getKeys().filter(function (e) {
          return _this6.values[e] === t.values[e];
        });
      }
    }, {
      key: "isEqualTo",
      value: function isEqualTo(t) {
        return nt(this.toArray(), Gt(t).toArray());
      }
    }, {
      key: "isEmpty",
      value: function isEmpty() {
        return 0 === this.getKeys().length;
      }
    }, {
      key: "toArray",
      value: function toArray() {
        if (!this.array) {
          var _t5 = [];
          for (var _e6 in this.values) {
            var _i9 = this.values[_e6];
            _t5.push(_t5.push(_e6, _i9));
          }
          this.array = _t5.slice(0);
        }
        return this.array;
      }
    }, {
      key: "toObject",
      value: function toObject() {
        return Kt(this.values);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return this.toObject();
      }
    }, {
      key: "contentsForInspection",
      value: function contentsForInspection() {
        return {
          values: JSON.stringify(this.values)
        };
      }
    }], [{
      key: "fromCommonAttributesOfObjects",
      value: function fromCommonAttributesOfObjects() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        if (!t.length) return new this();
        var e = Gt(t[0]),
          i = e.getKeys();
        return t.slice(1).forEach(function (t) {
          i = e.getKeysCommonToHash(Gt(t)), e = e.slice(i);
        }), e;
      }
    }, {
      key: "box",
      value: function box(t) {
        return Gt(t);
      }
    }]);
    return _t;
  }(it);
  var Ht = function Ht(t, e) {
      var i = {};
      return i[t] = e, i;
    },
    Jt = function Jt(t, e) {
      var i = Kt(t);
      for (var _t6 in e) {
        var _n4 = e[_t6];
        i[_t6] = _n4;
      }
      return i;
    },
    Kt = function Kt(t, e) {
      var i = {};
      return Object.keys(t).sort().forEach(function (n) {
        n !== e && (i[n] = t[n]);
      }), i;
    },
    Gt = function Gt(t) {
      return t instanceof _t ? t : new _t(t);
    },
    $t = function $t(t) {
      return t instanceof _t ? t.values : t;
    };
  var Xt = /*#__PURE__*/function () {
    function Xt() {
      _classCallCheck(this, Xt);
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        _ref7 = arguments.length > 1 ? arguments[1] : void 0,
        e = _ref7.depth,
        i = _ref7.asTree;
      this.objects = t, i && (this.depth = e, this.objects = this.constructor.groupObjects(this.objects, {
        asTree: i,
        depth: this.depth + 1
      }));
    }
    _createClass(Xt, [{
      key: "getObjects",
      value: function getObjects() {
        return this.objects;
      }
    }, {
      key: "getDepth",
      value: function getDepth() {
        return this.depth;
      }
    }, {
      key: "getCacheKey",
      value: function getCacheKey() {
        var t = ["objectGroup"];
        return Array.from(this.getObjects()).forEach(function (e) {
          t.push(e.getCacheKey());
        }), t.join("/");
      }
    }], [{
      key: "groupObjects",
      value: function groupObjects() {
        var _this7 = this;
        var t,
          e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          _ref8 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          i = _ref8.depth,
          n = _ref8.asTree;
        n && null == i && (i = 0);
        var r = [];
        return Array.from(e).forEach(function (e) {
          var o;
          if (t) {
            var s, a, l;
            if (null !== (s = e.canBeGrouped) && void 0 !== s && s.call(e, i) && null !== (a = (l = t[t.length - 1]).canBeGroupedWith) && void 0 !== a && a.call(l, e, i)) return void t.push(e);
            r.push(new _this7(t, {
              depth: i,
              asTree: n
            })), t = null;
          }
          null !== (o = e.canBeGrouped) && void 0 !== o && o.call(e, i) ? t = [e] : r.push(e);
        }), t && r.push(new this(t, {
          depth: i,
          asTree: n
        })), r;
      }
    }]);
    return Xt;
  }();
  var Yt = /*#__PURE__*/function (_V4) {
    _inherits(Yt, _V4);
    function Yt() {
      var _this8;
      _classCallCheck(this, Yt);
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      _this8 = _callSuper(this, Yt, arguments), _this8.objects = {}, Array.from(t).forEach(function (t) {
        var e = JSON.stringify(t);
        null == _this8.objects[e] && (_this8.objects[e] = t);
      });
      return _this8;
    }
    _createClass(Yt, [{
      key: "find",
      value: function find(t) {
        var e = JSON.stringify(t);
        return this.objects[e];
      }
    }]);
    return Yt;
  }(V);
  var Qt = /*#__PURE__*/function () {
    function Qt(t) {
      _classCallCheck(this, Qt);
      this.reset(t);
    }
    _createClass(Qt, [{
      key: "add",
      value: function add(t) {
        var e = Zt(t);
        this.elements[e] = t;
      }
    }, {
      key: "remove",
      value: function remove(t) {
        var e = Zt(t),
          i = this.elements[e];
        if (i) return delete this.elements[e], i;
      }
    }, {
      key: "reset",
      value: function reset() {
        var _this9 = this;
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return this.elements = {}, Array.from(t).forEach(function (t) {
          _this9.add(t);
        }), t;
      }
    }]);
    return Qt;
  }();
  var Zt = function Zt(t) {
    return t.dataset.trixStoreKey;
  };
  var te = /*#__PURE__*/function (_V5) {
    _inherits(te, _V5);
    function te() {
      _classCallCheck(this, te);
      return _callSuper(this, te, arguments);
    }
    _createClass(te, [{
      key: "isPerforming",
      value: function isPerforming() {
        return !0 === this.performing;
      }
    }, {
      key: "hasPerformed",
      value: function hasPerformed() {
        return !0 === this.performed;
      }
    }, {
      key: "hasSucceeded",
      value: function hasSucceeded() {
        return this.performed && this.succeeded;
      }
    }, {
      key: "hasFailed",
      value: function hasFailed() {
        return this.performed && !this.succeeded;
      }
    }, {
      key: "getPromise",
      value: function getPromise() {
        var _this10 = this;
        return this.promise || (this.promise = new Promise(function (t, e) {
          return _this10.performing = !0, _this10.perform(function (i, n) {
            _this10.succeeded = i, _this10.performing = !1, _this10.performed = !0, _this10.succeeded ? t(n) : e(n);
          });
        })), this.promise;
      }
    }, {
      key: "perform",
      value: function perform(t) {
        return t(!1);
      }
    }, {
      key: "release",
      value: function release() {
        var t, e;
        null === (t = this.promise) || void 0 === t || null === (e = t.cancel) || void 0 === e || e.call(t), this.promise = null, this.performing = null, this.performed = null, this.succeeded = null;
      }
    }]);
    return te;
  }(V);
  te.proxyMethod("getPromise().then"), te.proxyMethod("getPromise().catch");
  var ee = /*#__PURE__*/function (_V6) {
    _inherits(ee, _V6);
    function ee(t) {
      var _this11;
      _classCallCheck(this, ee);
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      _this11 = _callSuper(this, ee, arguments), _this11.object = t, _this11.options = e, _this11.childViews = [], _this11.rootView = _assertThisInitialized(_this11);
      return _this11;
    }
    _createClass(ee, [{
      key: "getNodes",
      value: function getNodes() {
        return this.nodes || (this.nodes = this.createNodes()), this.nodes.map(function (t) {
          return t.cloneNode(!0);
        });
      }
    }, {
      key: "invalidate",
      value: function invalidate() {
        var t;
        return this.nodes = null, this.childViews = [], null === (t = this.parentView) || void 0 === t ? void 0 : t.invalidate();
      }
    }, {
      key: "invalidateViewForObject",
      value: function invalidateViewForObject(t) {
        var e;
        return null === (e = this.findViewForObject(t)) || void 0 === e ? void 0 : e.invalidate();
      }
    }, {
      key: "findOrCreateCachedChildView",
      value: function findOrCreateCachedChildView(t, e, i) {
        var n = this.getCachedViewForObject(e);
        return n ? this.recordChildView(n) : (n = this.createChildView.apply(this, arguments), this.cacheViewForObject(n, e)), n;
      }
    }, {
      key: "createChildView",
      value: function createChildView(t, e) {
        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        e instanceof Xt && (i.viewClass = t, t = ie);
        var n = new t(e, i);
        return this.recordChildView(n);
      }
    }, {
      key: "recordChildView",
      value: function recordChildView(t) {
        return t.parentView = this, t.rootView = this.rootView, this.childViews.push(t), t;
      }
    }, {
      key: "getAllChildViews",
      value: function getAllChildViews() {
        var t = [];
        return this.childViews.forEach(function (e) {
          t.push(e), t = t.concat(e.getAllChildViews());
        }), t;
      }
    }, {
      key: "findElement",
      value: function findElement() {
        return this.findElementForObject(this.object);
      }
    }, {
      key: "findElementForObject",
      value: function findElementForObject(t) {
        var e = null == t ? void 0 : t.id;
        if (e) return this.rootView.element.querySelector("[data-trix-id='".concat(e, "']"));
      }
    }, {
      key: "findViewForObject",
      value: function findViewForObject(t) {
        var _iterator = _createForOfIteratorHelper(this.getAllChildViews()),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _e7 = _step.value;
            if (_e7.object === t) return _e7;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }, {
      key: "getViewCache",
      value: function getViewCache() {
        return this.rootView !== this ? this.rootView.getViewCache() : this.isViewCachingEnabled() ? (this.viewCache || (this.viewCache = {}), this.viewCache) : void 0;
      }
    }, {
      key: "isViewCachingEnabled",
      value: function isViewCachingEnabled() {
        return !1 !== this.shouldCacheViews;
      }
    }, {
      key: "enableViewCaching",
      value: function enableViewCaching() {
        this.shouldCacheViews = !0;
      }
    }, {
      key: "disableViewCaching",
      value: function disableViewCaching() {
        this.shouldCacheViews = !1;
      }
    }, {
      key: "getCachedViewForObject",
      value: function getCachedViewForObject(t) {
        var e;
        return null === (e = this.getViewCache()) || void 0 === e ? void 0 : e[t.getCacheKey()];
      }
    }, {
      key: "cacheViewForObject",
      value: function cacheViewForObject(t, e) {
        var i = this.getViewCache();
        i && (i[e.getCacheKey()] = t);
      }
    }, {
      key: "garbageCollectCachedViews",
      value: function garbageCollectCachedViews() {
        var t = this.getViewCache();
        if (t) {
          var _e8 = this.getAllChildViews().concat(this).map(function (t) {
            return t.object.getCacheKey();
          });
          for (var _i10 in t) _e8.includes(_i10) || delete t[_i10];
        }
      }
    }]);
    return ee;
  }(V);
  var ie = /*#__PURE__*/function (_ee) {
    _inherits(ie, _ee);
    function ie() {
      var _this12;
      _classCallCheck(this, ie);
      _this12 = _callSuper(this, ie, arguments), _this12.objectGroup = _this12.object, _this12.viewClass = _this12.options.viewClass, delete _this12.options.viewClass;
      return _this12;
    }
    _createClass(ie, [{
      key: "getChildViews",
      value: function getChildViews() {
        var _this13 = this;
        return this.childViews.length || Array.from(this.objectGroup.getObjects()).forEach(function (t) {
          _this13.findOrCreateCachedChildView(_this13.viewClass, t, _this13.options);
        }), this.childViews;
      }
    }, {
      key: "createNodes",
      value: function createNodes() {
        var t = this.createContainerElement();
        return this.getChildViews().forEach(function (e) {
          Array.from(e.getNodes()).forEach(function (e) {
            t.appendChild(e);
          });
        }), [t];
      }
    }, {
      key: "createContainerElement",
      value: function createContainerElement() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.objectGroup.getDepth();
        return this.getChildViews()[0].createContainerElement(t);
      }
    }]);
    return ie;
  }(ee);
  var ne = U.css;
  var re = /*#__PURE__*/function (_ee2) {
    _inherits(re, _ee2);
    function re() {
      var _this14;
      _classCallCheck(this, re);
      _this14 = _callSuper(this, re, arguments), _this14.attachment = _this14.object, _this14.attachment.uploadProgressDelegate = _assertThisInitialized(_this14), _this14.attachmentPiece = _this14.options.piece;
      return _this14;
    }
    _createClass(re, [{
      key: "createContentNodes",
      value: function createContentNodes() {
        return [];
      }
    }, {
      key: "createNodes",
      value: function createNodes() {
        var t;
        var e = t = S({
            tagName: "figure",
            className: this.getClassName(),
            data: this.getData(),
            editable: !1
          }),
          i = this.getHref();
        return i && (t = S({
          tagName: "a",
          editable: !1,
          attributes: {
            href: i,
            tabindex: -1
          }
        }), e.appendChild(t)), this.attachment.hasContent() ? t.innerHTML = this.attachment.getContent() : this.createContentNodes().forEach(function (e) {
          t.appendChild(e);
        }), t.appendChild(this.createCaptionElement()), this.attachment.isPending() && (this.progressElement = S({
          tagName: "progress",
          attributes: {
            "class": ne.attachmentProgress,
            value: this.attachment.getUploadProgress(),
            max: 100
          },
          data: {
            trixMutable: !0,
            trixStoreKey: ["progressElement", this.attachment.id].join("/")
          }
        }), e.appendChild(this.progressElement)), [oe("left"), e, oe("right")];
      }
    }, {
      key: "createCaptionElement",
      value: function createCaptionElement() {
        var t = S({
            tagName: "figcaption",
            className: ne.attachmentCaption
          }),
          e = this.attachmentPiece.getCaption();
        if (e) t.classList.add("".concat(ne.attachmentCaption, "--edited")), t.textContent = e;else {
          var _e9, _i11;
          var _n5 = this.getCaptionConfig();
          if (_n5.name && (_e9 = this.attachment.getFilename()), _n5.size && (_i11 = this.attachment.getFormattedFilesize()), _e9) {
            var _i12 = S({
              tagName: "span",
              className: ne.attachmentName,
              textContent: _e9
            });
            t.appendChild(_i12);
          }
          if (_i11) {
            _e9 && t.appendChild(document.createTextNode(" "));
            var _n6 = S({
              tagName: "span",
              className: ne.attachmentSize,
              textContent: _i11
            });
            t.appendChild(_n6);
          }
        }
        return t;
      }
    }, {
      key: "getClassName",
      value: function getClassName() {
        var t = [ne.attachment, "".concat(ne.attachment, "--").concat(this.attachment.getType())],
          e = this.attachment.getExtension();
        return e && t.push("".concat(ne.attachment, "--").concat(e)), t.join(" ");
      }
    }, {
      key: "getData",
      value: function getData() {
        var t = {
            trixAttachment: JSON.stringify(this.attachment),
            trixContentType: this.attachment.getContentType(),
            trixId: this.attachment.id
          },
          e = this.attachmentPiece.attributes;
        return e.isEmpty() || (t.trixAttributes = JSON.stringify(e)), this.attachment.isPending() && (t.trixSerialize = !1), t;
      }
    }, {
      key: "getHref",
      value: function getHref() {
        if (!se(this.attachment.getContent(), "a")) return this.attachment.getHref();
      }
    }, {
      key: "getCaptionConfig",
      value: function getCaptionConfig() {
        var t;
        var e = this.attachment.getType(),
          n = St(null === (t = i[e]) || void 0 === t ? void 0 : t.caption);
        return "file" === e && (n.name = !0), n;
      }
    }, {
      key: "findProgressElement",
      value: function findProgressElement() {
        var t;
        return null === (t = this.findElement()) || void 0 === t ? void 0 : t.querySelector("progress");
      }
    }, {
      key: "attachmentDidChangeUploadProgress",
      value: function attachmentDidChangeUploadProgress() {
        var t = this.attachment.getUploadProgress(),
          e = this.findProgressElement();
        e && (e.value = t);
      }
    }]);
    return re;
  }(ee);
  var oe = function oe(t) {
      return S({
        tagName: "span",
        textContent: c,
        data: {
          trixCursorTarget: t,
          trixSerialize: !1
        }
      });
    },
    se = function se(t, e) {
      var i = S("div");
      return i.innerHTML = t || "", i.querySelector(e);
    };
  var ae = /*#__PURE__*/function (_re) {
    _inherits(ae, _re);
    function ae() {
      var _this15;
      _classCallCheck(this, ae);
      _this15 = _callSuper(this, ae, arguments), _this15.attachment.previewDelegate = _assertThisInitialized(_this15);
      return _this15;
    }
    _createClass(ae, [{
      key: "createContentNodes",
      value: function createContentNodes() {
        return this.image = S({
          tagName: "img",
          attributes: {
            src: ""
          },
          data: {
            trixMutable: !0
          }
        }), this.refresh(this.image), [this.image];
      }
    }, {
      key: "createCaptionElement",
      value: function createCaptionElement() {
        var t = _get(_getPrototypeOf(ae.prototype), "createCaptionElement", this).apply(this, arguments);
        return t.textContent || t.setAttribute("data-trix-placeholder", s.captionPlaceholder), t;
      }
    }, {
      key: "refresh",
      value: function refresh(t) {
        var e;
        t || (t = null === (e = this.findElement()) || void 0 === e ? void 0 : e.querySelector("img"));
        if (t) return this.updateAttributesForImage(t);
      }
    }, {
      key: "updateAttributesForImage",
      value: function updateAttributesForImage(t) {
        var e = this.attachment.getURL(),
          i = this.attachment.getPreviewURL();
        if (t.src = i || e, i === e) t.removeAttribute("data-trix-serialized-attributes");else {
          var _i13 = JSON.stringify({
            src: e
          });
          t.setAttribute("data-trix-serialized-attributes", _i13);
        }
        var n = this.attachment.getWidth(),
          r = this.attachment.getHeight();
        null != n && (t.width = n), null != r && (t.height = r);
        var o = ["imageElement", this.attachment.id, t.src, t.width, t.height].join("/");
        t.dataset.trixStoreKey = o;
      }
    }, {
      key: "attachmentDidChangeAttributes",
      value: function attachmentDidChangeAttributes() {
        return this.refresh(this.image), this.refresh();
      }
    }]);
    return ae;
  }(re);
  var le = /*#__PURE__*/function (_ee3) {
    _inherits(le, _ee3);
    function le() {
      var _this16;
      _classCallCheck(this, le);
      _this16 = _callSuper(this, le, arguments), _this16.piece = _this16.object, _this16.attributes = _this16.piece.getAttributes(), _this16.textConfig = _this16.options.textConfig, _this16.context = _this16.options.context, _this16.piece.attachment ? _this16.attachment = _this16.piece.attachment : _this16.string = _this16.piece.toString();
      return _this16;
    }
    _createClass(le, [{
      key: "createNodes",
      value: function createNodes() {
        var t = this.attachment ? this.createAttachmentNodes() : this.createStringNodes();
        var e = this.createElement();
        if (e) {
          var _i14 = function (t) {
            for (; null !== (e = t) && void 0 !== e && e.firstElementChild;) {
              var e;
              t = t.firstElementChild;
            }
            return t;
          }(e);
          Array.from(t).forEach(function (t) {
            _i14.appendChild(t);
          }), t = [e];
        }
        return t;
      }
    }, {
      key: "createAttachmentNodes",
      value: function createAttachmentNodes() {
        var t = this.attachment.isPreviewable() ? ae : re;
        return this.createChildView(t, this.piece.attachment, {
          piece: this.piece
        }).getNodes();
      }
    }, {
      key: "createStringNodes",
      value: function createStringNodes() {
        var t;
        if (null !== (t = this.textConfig) && void 0 !== t && t.plaintext) return [document.createTextNode(this.string)];
        {
          var _t7 = [],
            _e10 = this.string.split("\n");
          for (var _i15 = 0; _i15 < _e10.length; _i15++) {
            var _n7 = _e10[_i15];
            if (_i15 > 0) {
              var _e11 = S("br");
              _t7.push(_e11);
            }
            if (_n7.length) {
              var _e12 = document.createTextNode(this.preserveSpaces(_n7));
              _t7.push(_e12);
            }
          }
          return _t7;
        }
      }
    }, {
      key: "createElement",
      value: function createElement() {
        var t, e, i;
        var n = {};
        for (e in this.attributes) {
          i = this.attributes[e];
          var _o2 = mt(e);
          if (_o2) {
            if (_o2.tagName) {
              var r;
              var _e13 = S(_o2.tagName);
              r ? (r.appendChild(_e13), r = _e13) : t = r = _e13;
            }
            if (_o2.styleProperty && (n[_o2.styleProperty] = i), _o2.style) for (e in _o2.style) i = _o2.style[e], n[e] = i;
          }
        }
        if (Object.keys(n).length) for (e in t || (t = S("span")), n) i = n[e], t.style[e] = i;
        return t;
      }
    }, {
      key: "createContainerElement",
      value: function createContainerElement() {
        for (var _t8 in this.attributes) {
          var _e14 = this.attributes[_t8],
            _i16 = mt(_t8);
          if (_i16 && _i16.groupTagName) {
            var _n8 = {};
            return _n8[_t8] = _e14, S(_i16.groupTagName, _n8);
          }
        }
      }
    }, {
      key: "preserveSpaces",
      value: function preserveSpaces(t) {
        return this.context.isLast && (t = t.replace(/\ $/, u)), t = t.replace(/(\S)\ {3}(\S)/g, "$1 ".concat(u, " $2")).replace(/\ {2}/g, "".concat(u, " ")).replace(/\ {2}/g, " ".concat(u)), (this.context.isFirst || this.context.followsWhitespace) && (t = t.replace(/^\ /, u)), t;
      }
    }]);
    return le;
  }(ee);
  var ce = /*#__PURE__*/function (_ee4) {
    _inherits(ce, _ee4);
    function ce() {
      var _this17;
      _classCallCheck(this, ce);
      _this17 = _callSuper(this, ce, arguments), _this17.text = _this17.object, _this17.textConfig = _this17.options.textConfig;
      return _this17;
    }
    _createClass(ce, [{
      key: "createNodes",
      value: function createNodes() {
        var t = [],
          e = Xt.groupObjects(this.getPieces()),
          i = e.length - 1;
        for (var _r2 = 0; _r2 < e.length; _r2++) {
          var _o3 = e[_r2],
            _s2 = {};
          0 === _r2 && (_s2.isFirst = !0), _r2 === i && (_s2.isLast = !0), ue(n) && (_s2.followsWhitespace = !0);
          var _a = this.findOrCreateCachedChildView(le, _o3, {
            textConfig: this.textConfig,
            context: _s2
          });
          t.push.apply(t, _toConsumableArray(Array.from(_a.getNodes() || [])));
          var n = _o3;
        }
        return t;
      }
    }, {
      key: "getPieces",
      value: function getPieces() {
        return Array.from(this.text.getPieces()).filter(function (t) {
          return !t.hasAttribute("blockBreak");
        });
      }
    }]);
    return ce;
  }(ee);
  var ue = function ue(t) {
      return /\s$/.test(null == t ? void 0 : t.toString());
    },
    he = U.css;
  var de = /*#__PURE__*/function (_ee5) {
    _inherits(de, _ee5);
    function de() {
      var _this18;
      _classCallCheck(this, de);
      _this18 = _callSuper(this, de, arguments), _this18.block = _this18.object, _this18.attributes = _this18.block.getAttributes();
      return _this18;
    }
    _createClass(de, [{
      key: "createNodes",
      value: function createNodes() {
        var t = [document.createComment("block")];
        if (this.block.isEmpty()) t.push(S("br"));else {
          var e;
          var _i17 = null === (e = dt(this.block.getLastAttribute())) || void 0 === e ? void 0 : e.text,
            _n9 = this.findOrCreateCachedChildView(ce, this.block.text, {
              textConfig: _i17
            });
          t.push.apply(t, _toConsumableArray(Array.from(_n9.getNodes() || []))), this.shouldAddExtraNewlineElement() && t.push(S("br"));
        }
        if (this.attributes.length) return t;
        {
          var _e15;
          var _i18 = n["default"].tagName;
          this.block.isRTL() && (_e15 = {
            dir: "rtl"
          });
          var _r3 = S({
            tagName: _i18,
            attributes: _e15
          });
          return t.forEach(function (t) {
            return _r3.appendChild(t);
          }), [_r3];
        }
      }
    }, {
      key: "createContainerElement",
      value: function createContainerElement(t) {
        var e, i;
        var n = this.attributes[t],
          _dt = dt(n),
          r = _dt.tagName;
        if (0 === t && this.block.isRTL() && (e = {
          dir: "rtl"
        }), "attachmentGallery" === n) {
          var _t9 = this.block.getBlockBreakPosition();
          i = "".concat(he.attachmentGallery, " ").concat(he.attachmentGallery, "--").concat(_t9);
        }
        return S({
          tagName: r,
          className: i,
          attributes: e
        });
      }
    }, {
      key: "shouldAddExtraNewlineElement",
      value: function shouldAddExtraNewlineElement() {
        return /\n\n$/.test(this.block.toString());
      }
    }]);
    return de;
  }(ee);
  var ge = /*#__PURE__*/function (_ee6) {
    _inherits(ge, _ee6);
    function ge() {
      var _this19;
      _classCallCheck(this, ge);
      _this19 = _callSuper(this, ge, arguments), _this19.element = _this19.options.element, _this19.elementStore = new Qt(), _this19.setDocument(_this19.object);
      return _this19;
    }
    _createClass(ge, [{
      key: "setDocument",
      value: function setDocument(t) {
        t.isEqualTo(this.document) || (this.document = this.object = t);
      }
    }, {
      key: "render",
      value: function render() {
        var _this20 = this;
        if (this.childViews = [], this.shadowElement = S("div"), !this.document.isEmpty()) {
          var _t10 = Xt.groupObjects(this.document.getBlocks(), {
            asTree: !0
          });
          Array.from(_t10).forEach(function (t) {
            var e = _this20.findOrCreateCachedChildView(de, t);
            Array.from(e.getNodes()).map(function (t) {
              return _this20.shadowElement.appendChild(t);
            });
          });
        }
      }
    }, {
      key: "isSynced",
      value: function isSynced() {
        return pe(this.shadowElement, this.element);
      }
    }, {
      key: "sync",
      value: function sync() {
        var t = this.createDocumentFragmentForSync();
        for (; this.element.lastChild;) this.element.removeChild(this.element.lastChild);
        return this.element.appendChild(t), this.didSync();
      }
    }, {
      key: "didSync",
      value: function didSync() {
        var _this21 = this;
        return this.elementStore.reset(me(this.element)), Rt(function () {
          return _this21.garbageCollectCachedViews();
        });
      }
    }, {
      key: "createDocumentFragmentForSync",
      value: function createDocumentFragmentForSync() {
        var _this22 = this;
        var t = document.createDocumentFragment();
        return Array.from(this.shadowElement.childNodes).forEach(function (e) {
          t.appendChild(e.cloneNode(!0));
        }), Array.from(me(t)).forEach(function (t) {
          var e = _this22.elementStore.remove(t);
          e && t.parentNode.replaceChild(e, t);
        }), t;
      }
    }], [{
      key: "render",
      value: function render(t) {
        var e = S("div"),
          i = new this(t, {
            element: e
          });
        return i.render(), i.sync(), e;
      }
    }]);
    return ge;
  }(ee);
  var me = function me(t) {
      return t.querySelectorAll("[data-trix-store-key]");
    },
    pe = function pe(t, e) {
      return fe(t.innerHTML) === fe(e.innerHTML);
    },
    fe = function fe(t) {
      return t.replace(/&nbsp;/g, " ");
    };
  function be(t) {
    this.wrapped = t;
  }
  function ve(t) {
    var e, i;
    function n(e, i) {
      try {
        var o = t[e](i),
          s = o.value,
          a = s instanceof be;
        Promise.resolve(a ? s.wrapped : s).then(function (t) {
          a ? n("return" === e ? "return" : "next", t) : r(o.done ? "return" : "normal", t);
        }, function (t) {
          n("throw", t);
        });
      } catch (t) {
        r("throw", t);
      }
    }
    function r(t, r) {
      switch (t) {
        case "return":
          e.resolve({
            value: r,
            done: !0
          });
          break;
        case "throw":
          e.reject(r);
          break;
        default:
          e.resolve({
            value: r,
            done: !1
          });
      }
      (e = e.next) ? n(e.key, e.arg) : i = null;
    }
    this._invoke = function (t, r) {
      return new Promise(function (o, s) {
        var a = {
          key: t,
          arg: r,
          resolve: o,
          reject: s,
          next: null
        };
        i ? i = i.next = a : (e = i = a, n(t, r));
      });
    }, "function" != typeof t["return"] && (this["return"] = void 0);
  }
  function Ae(t, e, i) {
    return e in t ? Object.defineProperty(t, e, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = i, t;
  }
  ve.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function () {
    return this;
  }, ve.prototype.next = function (t) {
    return this._invoke("next", t);
  }, ve.prototype["throw"] = function (t) {
    return this._invoke("throw", t);
  }, ve.prototype["return"] = function (t) {
    return this._invoke("return", t);
  };
  var xe = /*#__PURE__*/function (_it2) {
    _inherits(xe, _it2);
    function xe(t) {
      var _this23;
      _classCallCheck(this, xe);
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      _this23 = _callSuper(this, xe, arguments), _this23.attributes = _t.box(e);
      return _this23;
    }
    _createClass(xe, [{
      key: "copyWithAttributes",
      value: function copyWithAttributes(t) {
        return new this.constructor(this.getValue(), t);
      }
    }, {
      key: "copyWithAdditionalAttributes",
      value: function copyWithAdditionalAttributes(t) {
        return this.copyWithAttributes(this.attributes.merge(t));
      }
    }, {
      key: "copyWithoutAttribute",
      value: function copyWithoutAttribute(t) {
        return this.copyWithAttributes(this.attributes.remove(t));
      }
    }, {
      key: "copy",
      value: function copy() {
        return this.copyWithAttributes(this.attributes);
      }
    }, {
      key: "getAttribute",
      value: function getAttribute(t) {
        return this.attributes.get(t);
      }
    }, {
      key: "getAttributesHash",
      value: function getAttributesHash() {
        return this.attributes;
      }
    }, {
      key: "getAttributes",
      value: function getAttributes() {
        return this.attributes.toObject();
      }
    }, {
      key: "hasAttribute",
      value: function hasAttribute(t) {
        return this.attributes.has(t);
      }
    }, {
      key: "hasSameStringValueAsPiece",
      value: function hasSameStringValueAsPiece(t) {
        return t && this.toString() === t.toString();
      }
    }, {
      key: "hasSameAttributesAsPiece",
      value: function hasSameAttributesAsPiece(t) {
        return t && (this.attributes === t.attributes || this.attributes.isEqualTo(t.attributes));
      }
    }, {
      key: "isBlockBreak",
      value: function isBlockBreak() {
        return !1;
      }
    }, {
      key: "isEqualTo",
      value: function isEqualTo(t) {
        return _get(_getPrototypeOf(xe.prototype), "isEqualTo", this).apply(this, arguments) || this.hasSameConstructorAs(t) && this.hasSameStringValueAsPiece(t) && this.hasSameAttributesAsPiece(t);
      }
    }, {
      key: "isEmpty",
      value: function isEmpty() {
        return 0 === this.length;
      }
    }, {
      key: "isSerializable",
      value: function isSerializable() {
        return !0;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          type: this.constructor.type,
          attributes: this.getAttributes()
        };
      }
    }, {
      key: "contentsForInspection",
      value: function contentsForInspection() {
        return {
          type: this.constructor.type,
          attributes: this.attributes.inspect()
        };
      }
    }, {
      key: "canBeGrouped",
      value: function canBeGrouped() {
        return this.hasAttribute("href");
      }
    }, {
      key: "canBeGroupedWith",
      value: function canBeGroupedWith(t) {
        return this.getAttribute("href") === t.getAttribute("href");
      }
    }, {
      key: "getLength",
      value: function getLength() {
        return this.length;
      }
    }, {
      key: "canBeConsolidatedWith",
      value: function canBeConsolidatedWith(t) {
        return !1;
      }
    }], [{
      key: "registerType",
      value: function registerType(t, e) {
        e.type = t, this.types[t] = e;
      }
    }, {
      key: "fromJSON",
      value: function fromJSON(t) {
        var e = this.types[t.type];
        if (e) return e.fromJSON(t);
      }
    }]);
    return xe;
  }(it);
  Ae(xe, "types", {});
  var ye = /*#__PURE__*/function (_te) {
    _inherits(ye, _te);
    function ye(t) {
      var _this24;
      _classCallCheck(this, ye);
      _this24 = _callSuper(this, ye, arguments), _this24.url = t;
      return _this24;
    }
    _createClass(ye, [{
      key: "perform",
      value: function perform(t) {
        var _this25 = this;
        var e = new Image();
        e.onload = function () {
          return e.width = _this25.width = e.naturalWidth, e.height = _this25.height = e.naturalHeight, t(!0, e);
        }, e.onerror = function () {
          return t(!1);
        }, e.src = this.url;
      }
    }]);
    return ye;
  }(te);
  var Ce = /*#__PURE__*/function (_it3) {
    _inherits(Ce, _it3);
    function Ce() {
      var _this26;
      _classCallCheck(this, Ce);
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      _this26 = _callSuper(this, Ce, [t]), _this26.releaseFile = _this26.releaseFile.bind(_assertThisInitialized(_this26)), _this26.attributes = _t.box(t), _this26.didChangeAttributes();
      return _this26;
    }
    _createClass(Ce, [{
      key: "getAttribute",
      value: function getAttribute(t) {
        return this.attributes.get(t);
      }
    }, {
      key: "hasAttribute",
      value: function hasAttribute(t) {
        return this.attributes.has(t);
      }
    }, {
      key: "getAttributes",
      value: function getAttributes() {
        return this.attributes.toObject();
      }
    }, {
      key: "setAttributes",
      value: function setAttributes() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var e = this.attributes.merge(t);
        var i, n, r, o;
        if (!this.attributes.isEqualTo(e)) return this.attributes = e, this.didChangeAttributes(), null === (i = this.previewDelegate) || void 0 === i || null === (n = i.attachmentDidChangeAttributes) || void 0 === n || n.call(i, this), null === (r = this.delegate) || void 0 === r || null === (o = r.attachmentDidChangeAttributes) || void 0 === o ? void 0 : o.call(r, this);
      }
    }, {
      key: "didChangeAttributes",
      value: function didChangeAttributes() {
        if (this.isPreviewable()) return this.preloadURL();
      }
    }, {
      key: "isPending",
      value: function isPending() {
        return null != this.file && !(this.getURL() || this.getHref());
      }
    }, {
      key: "isPreviewable",
      value: function isPreviewable() {
        return this.attributes.has("previewable") ? this.attributes.get("previewable") : Ce.previewablePattern.test(this.getContentType());
      }
    }, {
      key: "getType",
      value: function getType() {
        return this.hasContent() ? "content" : this.isPreviewable() ? "preview" : "file";
      }
    }, {
      key: "getURL",
      value: function getURL() {
        return this.attributes.get("url");
      }
    }, {
      key: "getHref",
      value: function getHref() {
        return this.attributes.get("href");
      }
    }, {
      key: "getFilename",
      value: function getFilename() {
        return this.attributes.get("filename") || "";
      }
    }, {
      key: "getFilesize",
      value: function getFilesize() {
        return this.attributes.get("filesize");
      }
    }, {
      key: "getFormattedFilesize",
      value: function getFormattedFilesize() {
        var t = this.attributes.get("filesize");
        return "number" == typeof t ? l.formatter(t) : "";
      }
    }, {
      key: "getExtension",
      value: function getExtension() {
        var t;
        return null === (t = this.getFilename().match(/\.(\w+)$/)) || void 0 === t ? void 0 : t[1].toLowerCase();
      }
    }, {
      key: "getContentType",
      value: function getContentType() {
        return this.attributes.get("contentType");
      }
    }, {
      key: "hasContent",
      value: function hasContent() {
        return this.attributes.has("content");
      }
    }, {
      key: "getContent",
      value: function getContent() {
        return this.attributes.get("content");
      }
    }, {
      key: "getWidth",
      value: function getWidth() {
        return this.attributes.get("width");
      }
    }, {
      key: "getHeight",
      value: function getHeight() {
        return this.attributes.get("height");
      }
    }, {
      key: "getFile",
      value: function getFile() {
        return this.file;
      }
    }, {
      key: "setFile",
      value: function setFile(t) {
        if (this.file = t, this.isPreviewable()) return this.preloadFile();
      }
    }, {
      key: "releaseFile",
      value: function releaseFile() {
        this.releasePreloadedFile(), this.file = null;
      }
    }, {
      key: "getUploadProgress",
      value: function getUploadProgress() {
        return null != this.uploadProgress ? this.uploadProgress : 0;
      }
    }, {
      key: "setUploadProgress",
      value: function setUploadProgress(t) {
        var e, i;
        if (this.uploadProgress !== t) return this.uploadProgress = t, null === (e = this.uploadProgressDelegate) || void 0 === e || null === (i = e.attachmentDidChangeUploadProgress) || void 0 === i ? void 0 : i.call(e, this);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return this.getAttributes();
      }
    }, {
      key: "getCacheKey",
      value: function getCacheKey() {
        return [_get(_getPrototypeOf(Ce.prototype), "getCacheKey", this).apply(this, arguments), this.attributes.getCacheKey(), this.getPreviewURL()].join("/");
      }
    }, {
      key: "getPreviewURL",
      value: function getPreviewURL() {
        return this.previewURL || this.preloadingURL;
      }
    }, {
      key: "setPreviewURL",
      value: function setPreviewURL(t) {
        var e, i, n, r;
        if (t !== this.getPreviewURL()) return this.previewURL = t, null === (e = this.previewDelegate) || void 0 === e || null === (i = e.attachmentDidChangeAttributes) || void 0 === i || i.call(e, this), null === (n = this.delegate) || void 0 === n || null === (r = n.attachmentDidChangePreviewURL) || void 0 === r ? void 0 : r.call(n, this);
      }
    }, {
      key: "preloadURL",
      value: function preloadURL() {
        return this.preload(this.getURL(), this.releaseFile);
      }
    }, {
      key: "preloadFile",
      value: function preloadFile() {
        if (this.file) return this.fileObjectURL = URL.createObjectURL(this.file), this.preload(this.fileObjectURL);
      }
    }, {
      key: "releasePreloadedFile",
      value: function releasePreloadedFile() {
        this.fileObjectURL && (URL.revokeObjectURL(this.fileObjectURL), this.fileObjectURL = null);
      }
    }, {
      key: "preload",
      value: function preload(t, e) {
        var _this27 = this;
        if (t && t !== this.getPreviewURL()) {
          this.preloadingURL = t;
          return new ye(t).then(function (i) {
            var n = i.width,
              r = i.height;
            return _this27.getWidth() && _this27.getHeight() || _this27.setAttributes({
              width: n,
              height: r
            }), _this27.preloadingURL = null, _this27.setPreviewURL(t), null == e ? void 0 : e();
          })["catch"](function () {
            return _this27.preloadingURL = null, null == e ? void 0 : e();
          });
        }
      }
    }], [{
      key: "attachmentForFile",
      value: function attachmentForFile(t) {
        var e = new this(this.attributesForFile(t));
        return e.setFile(t), e;
      }
    }, {
      key: "attributesForFile",
      value: function attributesForFile(t) {
        return new _t({
          filename: t.name,
          filesize: t.size,
          contentType: t.type
        });
      }
    }, {
      key: "fromJSON",
      value: function fromJSON(t) {
        return new this(t);
      }
    }]);
    return Ce;
  }(it);
  Ae(Ce, "previewablePattern", /^image(\/(gif|png|jpe?g)|$)/);
  var Re = /*#__PURE__*/function (_xe) {
    _inherits(Re, _xe);
    function Re(t) {
      var _this28;
      _classCallCheck(this, Re);
      _this28 = _callSuper(this, Re, arguments), _this28.attachment = t, _this28.length = 1, _this28.ensureAttachmentExclusivelyHasAttribute("href"), _this28.attachment.hasContent() || _this28.removeProhibitedAttributes();
      return _this28;
    }
    _createClass(Re, [{
      key: "ensureAttachmentExclusivelyHasAttribute",
      value: function ensureAttachmentExclusivelyHasAttribute(t) {
        this.hasAttribute(t) && (this.attachment.hasAttribute(t) || this.attachment.setAttributes(this.attributes.slice([t])), this.attributes = this.attributes.remove(t));
      }
    }, {
      key: "removeProhibitedAttributes",
      value: function removeProhibitedAttributes() {
        var t = this.attributes.slice(Re.permittedAttributes);
        t.isEqualTo(this.attributes) || (this.attributes = t);
      }
    }, {
      key: "getValue",
      value: function getValue() {
        return this.attachment;
      }
    }, {
      key: "isSerializable",
      value: function isSerializable() {
        return !this.attachment.isPending();
      }
    }, {
      key: "getCaption",
      value: function getCaption() {
        return this.attributes.get("caption") || "";
      }
    }, {
      key: "isEqualTo",
      value: function isEqualTo(t) {
        var e;
        return _get(_getPrototypeOf(Re.prototype), "isEqualTo", this).call(this, t) && this.attachment.id === (null == t || null === (e = t.attachment) || void 0 === e ? void 0 : e.id);
      }
    }, {
      key: "toString",
      value: function toString() {
        return "￼";
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var t = _get(_getPrototypeOf(Re.prototype), "toJSON", this).apply(this, arguments);
        return t.attachment = this.attachment, t;
      }
    }, {
      key: "getCacheKey",
      value: function getCacheKey() {
        return [_get(_getPrototypeOf(Re.prototype), "getCacheKey", this).apply(this, arguments), this.attachment.getCacheKey()].join("/");
      }
    }, {
      key: "toConsole",
      value: function toConsole() {
        return JSON.stringify(this.toString());
      }
    }], [{
      key: "fromJSON",
      value: function fromJSON(t) {
        return new this(Ce.fromJSON(t.attachment), t.attributes);
      }
    }]);
    return Re;
  }(xe);
  Ae(Re, "permittedAttributes", ["caption", "presentation"]), xe.registerType("attachment", Re);
  var Se = /*#__PURE__*/function (_xe2) {
    _inherits(Se, _xe2);
    function Se(t) {
      var _this29;
      _classCallCheck(this, Se);
      _this29 = _callSuper(this, Se, arguments), _this29.string = function (t) {
        return t.replace(/\r\n/g, "\n");
      }(t), _this29.length = _this29.string.length;
      return _this29;
    }
    _createClass(Se, [{
      key: "getValue",
      value: function getValue() {
        return this.string;
      }
    }, {
      key: "toString",
      value: function toString() {
        return this.string.toString();
      }
    }, {
      key: "isBlockBreak",
      value: function isBlockBreak() {
        return "\n" === this.toString() && !0 === this.getAttribute("blockBreak");
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var t = _get(_getPrototypeOf(Se.prototype), "toJSON", this).apply(this, arguments);
        return t.string = this.string, t;
      }
    }, {
      key: "canBeConsolidatedWith",
      value: function canBeConsolidatedWith(t) {
        return t && this.hasSameConstructorAs(t) && this.hasSameAttributesAsPiece(t);
      }
    }, {
      key: "consolidateWith",
      value: function consolidateWith(t) {
        return new this.constructor(this.toString() + t.toString(), this.attributes);
      }
    }, {
      key: "splitAtOffset",
      value: function splitAtOffset(t) {
        var e, i;
        return 0 === t ? (e = null, i = this) : t === this.length ? (e = this, i = null) : (e = new this.constructor(this.string.slice(0, t), this.attributes), i = new this.constructor(this.string.slice(t), this.attributes)), [e, i];
      }
    }, {
      key: "toConsole",
      value: function toConsole() {
        var t = this.string;
        return t.length > 15 && (t = t.slice(0, 14) + "…"), JSON.stringify(t.toString());
      }
    }], [{
      key: "fromJSON",
      value: function fromJSON(t) {
        return new this(t.string, t.attributes);
      }
    }]);
    return Se;
  }(xe);
  xe.registerType("string", Se);
  var Ee = /*#__PURE__*/function (_it4) {
    _inherits(Ee, _it4);
    function Ee() {
      var _this30;
      _classCallCheck(this, Ee);
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      _this30 = _callSuper(this, Ee, arguments), _this30.objects = t.slice(0), _this30.length = _this30.objects.length;
      return _this30;
    }
    _createClass(Ee, [{
      key: "indexOf",
      value: function indexOf(t) {
        return this.objects.indexOf(t);
      }
    }, {
      key: "splice",
      value: function splice() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        return new this.constructor(rt.apply(void 0, [this.objects].concat(e)));
      }
    }, {
      key: "eachObject",
      value: function eachObject(t) {
        return this.objects.map(function (e, i) {
          return t(e, i);
        });
      }
    }, {
      key: "insertObjectAtIndex",
      value: function insertObjectAtIndex(t, e) {
        return this.splice(e, 0, t);
      }
    }, {
      key: "insertSplittableListAtIndex",
      value: function insertSplittableListAtIndex(t, e) {
        return this.splice.apply(this, [e, 0].concat(_toConsumableArray(t.objects)));
      }
    }, {
      key: "insertSplittableListAtPosition",
      value: function insertSplittableListAtPosition(t, e) {
        var _this$splitObjectAtPo = this.splitObjectAtPosition(e),
          _this$splitObjectAtPo2 = _slicedToArray(_this$splitObjectAtPo, 2),
          i = _this$splitObjectAtPo2[0],
          n = _this$splitObjectAtPo2[1];
        return new this.constructor(i).insertSplittableListAtIndex(t, n);
      }
    }, {
      key: "editObjectAtIndex",
      value: function editObjectAtIndex(t, e) {
        return this.replaceObjectAtIndex(e(this.objects[t]), t);
      }
    }, {
      key: "replaceObjectAtIndex",
      value: function replaceObjectAtIndex(t, e) {
        return this.splice(e, 1, t);
      }
    }, {
      key: "removeObjectAtIndex",
      value: function removeObjectAtIndex(t) {
        return this.splice(t, 1);
      }
    }, {
      key: "getObjectAtIndex",
      value: function getObjectAtIndex(t) {
        return this.objects[t];
      }
    }, {
      key: "getSplittableListInRange",
      value: function getSplittableListInRange(t) {
        var _this$splitObjectsAtR = this.splitObjectsAtRange(t),
          _this$splitObjectsAtR2 = _slicedToArray(_this$splitObjectsAtR, 3),
          e = _this$splitObjectsAtR2[0],
          i = _this$splitObjectsAtR2[1],
          n = _this$splitObjectsAtR2[2];
        return new this.constructor(e.slice(i, n + 1));
      }
    }, {
      key: "selectSplittableList",
      value: function selectSplittableList(t) {
        var e = this.objects.filter(function (e) {
          return t(e);
        });
        return new this.constructor(e);
      }
    }, {
      key: "removeObjectsInRange",
      value: function removeObjectsInRange(t) {
        var _this$splitObjectsAtR3 = this.splitObjectsAtRange(t),
          _this$splitObjectsAtR4 = _slicedToArray(_this$splitObjectsAtR3, 3),
          e = _this$splitObjectsAtR4[0],
          i = _this$splitObjectsAtR4[1],
          n = _this$splitObjectsAtR4[2];
        return new this.constructor(e).splice(i, n - i + 1);
      }
    }, {
      key: "transformObjectsInRange",
      value: function transformObjectsInRange(t, e) {
        var _this$splitObjectsAtR5 = this.splitObjectsAtRange(t),
          _this$splitObjectsAtR6 = _slicedToArray(_this$splitObjectsAtR5, 3),
          i = _this$splitObjectsAtR6[0],
          n = _this$splitObjectsAtR6[1],
          r = _this$splitObjectsAtR6[2],
          o = i.map(function (t, i) {
            return n <= i && i <= r ? e(t) : t;
          });
        return new this.constructor(o);
      }
    }, {
      key: "splitObjectsAtRange",
      value: function splitObjectsAtRange(t) {
        var _this$constructor$spl, _this$constructor$spl2;
        var e,
          _this$splitObjectAtPo3 = this.splitObjectAtPosition(Le(t)),
          _this$splitObjectAtPo4 = _slicedToArray(_this$splitObjectAtPo3, 3),
          i = _this$splitObjectAtPo4[0],
          n = _this$splitObjectAtPo4[1],
          r = _this$splitObjectAtPo4[2];
        return (_this$constructor$spl = new this.constructor(i).splitObjectAtPosition(De(t) + r), _this$constructor$spl2 = _slicedToArray(_this$constructor$spl, 2), i = _this$constructor$spl2[0], e = _this$constructor$spl2[1]), [i, n, e - 1];
      }
    }, {
      key: "getObjectAtPosition",
      value: function getObjectAtPosition(t) {
        var _this$findIndexAndOff = this.findIndexAndOffsetAtPosition(t),
          e = _this$findIndexAndOff.index;
        return this.objects[e];
      }
    }, {
      key: "splitObjectAtPosition",
      value: function splitObjectAtPosition(t) {
        var e, i;
        var _this$findIndexAndOff2 = this.findIndexAndOffsetAtPosition(t),
          n = _this$findIndexAndOff2.index,
          r = _this$findIndexAndOff2.offset,
          o = this.objects.slice(0);
        if (null != n) {
          if (0 === r) e = n, i = 0;else {
            var _t11 = this.getObjectAtIndex(n),
              _t$splitAtOffset = _t11.splitAtOffset(r),
              _t$splitAtOffset2 = _slicedToArray(_t$splitAtOffset, 2),
              _s3 = _t$splitAtOffset2[0],
              _a2 = _t$splitAtOffset2[1];
            o.splice(n, 1, _s3, _a2), e = n + 1, i = _s3.getLength() - r;
          }
        } else e = o.length, i = 0;
        return [o, e, i];
      }
    }, {
      key: "consolidate",
      value: function consolidate() {
        var t = [];
        var e = this.objects[0];
        return this.objects.slice(1).forEach(function (i) {
          var n, r;
          null !== (n = (r = e).canBeConsolidatedWith) && void 0 !== n && n.call(r, i) ? e = e.consolidateWith(i) : (t.push(e), e = i);
        }), e && t.push(e), new this.constructor(t);
      }
    }, {
      key: "consolidateFromIndexToIndex",
      value: function consolidateFromIndexToIndex(t, e) {
        var i = this.objects.slice(0).slice(t, e + 1),
          n = new this.constructor(i).consolidate().toArray();
        return this.splice.apply(this, [t, i.length].concat(_toConsumableArray(n)));
      }
    }, {
      key: "findIndexAndOffsetAtPosition",
      value: function findIndexAndOffsetAtPosition(t) {
        var e,
          i = 0;
        for (e = 0; e < this.objects.length; e++) {
          var _n10 = i + this.objects[e].getLength();
          if (i <= t && t < _n10) return {
            index: e,
            offset: t - i
          };
          i = _n10;
        }
        return {
          index: null,
          offset: null
        };
      }
    }, {
      key: "findPositionAtIndexAndOffset",
      value: function findPositionAtIndexAndOffset(t, e) {
        var i = 0;
        for (var _n11 = 0; _n11 < this.objects.length; _n11++) {
          var _r4 = this.objects[_n11];
          if (_n11 < t) i += _r4.getLength();else if (_n11 === t) {
            i += e;
            break;
          }
        }
        return i;
      }
    }, {
      key: "getEndPosition",
      value: function getEndPosition() {
        var _this31 = this;
        return null == this.endPosition && (this.endPosition = 0, this.objects.forEach(function (t) {
          return _this31.endPosition += t.getLength();
        })), this.endPosition;
      }
    }, {
      key: "toString",
      value: function toString() {
        return this.objects.join("");
      }
    }, {
      key: "toArray",
      value: function toArray() {
        return this.objects.slice(0);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return this.toArray();
      }
    }, {
      key: "isEqualTo",
      value: function isEqualTo(t) {
        return _get(_getPrototypeOf(Ee.prototype), "isEqualTo", this).apply(this, arguments) || ke(this.objects, null == t ? void 0 : t.objects);
      }
    }, {
      key: "contentsForInspection",
      value: function contentsForInspection() {
        return {
          objects: "[".concat(this.objects.map(function (t) {
            return t.inspect();
          }).join(", "), "]")
        };
      }
    }], [{
      key: "box",
      value: function box(t) {
        return t instanceof this ? t : new this(t);
      }
    }]);
    return Ee;
  }(it);
  var ke = function ke(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      if (t.length !== e.length) return !1;
      var i = !0;
      for (var _n12 = 0; _n12 < t.length; _n12++) {
        var _r5 = t[_n12];
        i && !_r5.isEqualTo(e[_n12]) && (i = !1);
      }
      return i;
    },
    Le = function Le(t) {
      return t[0];
    },
    De = function De(t) {
      return t[1];
    };
  var we = /*#__PURE__*/function (_it5) {
    _inherits(we, _it5);
    function we() {
      var _this32;
      _classCallCheck(this, we);
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      _this32 = _callSuper(this, we, arguments);
      var e = t.filter(function (t) {
        return !t.isEmpty();
      });
      _this32.pieceList = new Ee(e);
      return _this32;
    }
    _createClass(we, [{
      key: "copy",
      value: function copy() {
        return this.copyWithPieceList(this.pieceList);
      }
    }, {
      key: "copyWithPieceList",
      value: function copyWithPieceList(t) {
        return new this.constructor(t.consolidate().toArray());
      }
    }, {
      key: "copyUsingObjectMap",
      value: function copyUsingObjectMap(t) {
        var e = this.getPieces().map(function (e) {
          return t.find(e) || e;
        });
        return new this.constructor(e);
      }
    }, {
      key: "appendText",
      value: function appendText(t) {
        return this.insertTextAtPosition(t, this.getLength());
      }
    }, {
      key: "insertTextAtPosition",
      value: function insertTextAtPosition(t, e) {
        return this.copyWithPieceList(this.pieceList.insertSplittableListAtPosition(t.pieceList, e));
      }
    }, {
      key: "removeTextAtRange",
      value: function removeTextAtRange(t) {
        return this.copyWithPieceList(this.pieceList.removeObjectsInRange(t));
      }
    }, {
      key: "replaceTextAtRange",
      value: function replaceTextAtRange(t, e) {
        return this.removeTextAtRange(e).insertTextAtPosition(t, e[0]);
      }
    }, {
      key: "moveTextFromRangeToPosition",
      value: function moveTextFromRangeToPosition(t, e) {
        if (t[0] <= e && e <= t[1]) return;
        var i = this.getTextAtRange(t),
          n = i.getLength();
        return t[0] < e && (e -= n), this.removeTextAtRange(t).insertTextAtPosition(i, e);
      }
    }, {
      key: "addAttributeAtRange",
      value: function addAttributeAtRange(t, e, i) {
        var n = {};
        return n[t] = e, this.addAttributesAtRange(n, i);
      }
    }, {
      key: "addAttributesAtRange",
      value: function addAttributesAtRange(t, e) {
        return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e, function (e) {
          return e.copyWithAdditionalAttributes(t);
        }));
      }
    }, {
      key: "removeAttributeAtRange",
      value: function removeAttributeAtRange(t, e) {
        return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e, function (e) {
          return e.copyWithoutAttribute(t);
        }));
      }
    }, {
      key: "setAttributesAtRange",
      value: function setAttributesAtRange(t, e) {
        return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e, function (e) {
          return e.copyWithAttributes(t);
        }));
      }
    }, {
      key: "getAttributesAtPosition",
      value: function getAttributesAtPosition(t) {
        var e;
        return (null === (e = this.pieceList.getObjectAtPosition(t)) || void 0 === e ? void 0 : e.getAttributes()) || {};
      }
    }, {
      key: "getCommonAttributes",
      value: function getCommonAttributes() {
        var t = Array.from(this.pieceList.toArray()).map(function (t) {
          return t.getAttributes();
        });
        return _t.fromCommonAttributesOfObjects(t).toObject();
      }
    }, {
      key: "getCommonAttributesAtRange",
      value: function getCommonAttributesAtRange(t) {
        return this.getTextAtRange(t).getCommonAttributes() || {};
      }
    }, {
      key: "getExpandedRangeForAttributeAtOffset",
      value: function getExpandedRangeForAttributeAtOffset(t, e) {
        var i,
          n = i = e;
        var r = this.getLength();
        for (; n > 0 && this.getCommonAttributesAtRange([n - 1, i])[t];) n--;
        for (; i < r && this.getCommonAttributesAtRange([e, i + 1])[t];) i++;
        return [n, i];
      }
    }, {
      key: "getTextAtRange",
      value: function getTextAtRange(t) {
        return this.copyWithPieceList(this.pieceList.getSplittableListInRange(t));
      }
    }, {
      key: "getStringAtRange",
      value: function getStringAtRange(t) {
        return this.pieceList.getSplittableListInRange(t).toString();
      }
    }, {
      key: "getStringAtPosition",
      value: function getStringAtPosition(t) {
        return this.getStringAtRange([t, t + 1]);
      }
    }, {
      key: "startsWithString",
      value: function startsWithString(t) {
        return this.getStringAtRange([0, t.length]) === t;
      }
    }, {
      key: "endsWithString",
      value: function endsWithString(t) {
        var e = this.getLength();
        return this.getStringAtRange([e - t.length, e]) === t;
      }
    }, {
      key: "getAttachmentPieces",
      value: function getAttachmentPieces() {
        return this.pieceList.toArray().filter(function (t) {
          return !!t.attachment;
        });
      }
    }, {
      key: "getAttachments",
      value: function getAttachments() {
        return this.getAttachmentPieces().map(function (t) {
          return t.attachment;
        });
      }
    }, {
      key: "getAttachmentAndPositionById",
      value: function getAttachmentAndPositionById(t) {
        var e = 0;
        var _iterator2 = _createForOfIteratorHelper(this.pieceList.toArray()),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _n13 = _step2.value;
            var i;
            if ((null === (i = _n13.attachment) || void 0 === i ? void 0 : i.id) === t) return {
              attachment: _n13.attachment,
              position: e
            };
            e += _n13.length;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        return {
          attachment: null,
          position: null
        };
      }
    }, {
      key: "getAttachmentById",
      value: function getAttachmentById(t) {
        var _this$getAttachmentAn = this.getAttachmentAndPositionById(t),
          e = _this$getAttachmentAn.attachment;
        return e;
      }
    }, {
      key: "getRangeOfAttachment",
      value: function getRangeOfAttachment(t) {
        var e = this.getAttachmentAndPositionById(t.id),
          i = e.position;
        if (t = e.attachment) return [i, i + 1];
      }
    }, {
      key: "updateAttributesForAttachment",
      value: function updateAttributesForAttachment(t, e) {
        var i = this.getRangeOfAttachment(e);
        return i ? this.addAttributesAtRange(t, i) : this;
      }
    }, {
      key: "getLength",
      value: function getLength() {
        return this.pieceList.getEndPosition();
      }
    }, {
      key: "isEmpty",
      value: function isEmpty() {
        return 0 === this.getLength();
      }
    }, {
      key: "isEqualTo",
      value: function isEqualTo(t) {
        var e;
        return _get(_getPrototypeOf(we.prototype), "isEqualTo", this).call(this, t) || (null == t || null === (e = t.pieceList) || void 0 === e ? void 0 : e.isEqualTo(this.pieceList));
      }
    }, {
      key: "isBlockBreak",
      value: function isBlockBreak() {
        return 1 === this.getLength() && this.pieceList.getObjectAtIndex(0).isBlockBreak();
      }
    }, {
      key: "eachPiece",
      value: function eachPiece(t) {
        return this.pieceList.eachObject(t);
      }
    }, {
      key: "getPieces",
      value: function getPieces() {
        return this.pieceList.toArray();
      }
    }, {
      key: "getPieceAtPosition",
      value: function getPieceAtPosition(t) {
        return this.pieceList.getObjectAtPosition(t);
      }
    }, {
      key: "contentsForInspection",
      value: function contentsForInspection() {
        return {
          pieceList: this.pieceList.inspect()
        };
      }
    }, {
      key: "toSerializableText",
      value: function toSerializableText() {
        var t = this.pieceList.selectSplittableList(function (t) {
          return t.isSerializable();
        });
        return this.copyWithPieceList(t);
      }
    }, {
      key: "toString",
      value: function toString() {
        return this.pieceList.toString();
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return this.pieceList.toJSON();
      }
    }, {
      key: "toConsole",
      value: function toConsole() {
        return JSON.stringify(this.pieceList.toArray().map(function (t) {
          return JSON.parse(t.toConsole());
        }));
      }
    }, {
      key: "getDirection",
      value: function getDirection() {
        return st(this.toString());
      }
    }, {
      key: "isRTL",
      value: function isRTL() {
        return "rtl" === this.getDirection();
      }
    }], [{
      key: "textForAttachmentWithAttributes",
      value: function textForAttachmentWithAttributes(t, e) {
        return new this([new Re(t, e)]);
      }
    }, {
      key: "textForStringWithAttributes",
      value: function textForStringWithAttributes(t, e) {
        return new this([new Se(t, e)]);
      }
    }, {
      key: "fromJSON",
      value: function fromJSON(t) {
        return new this(Array.from(t).map(function (t) {
          return xe.fromJSON(t);
        }));
      }
    }]);
    return we;
  }(it);
  var Te = /*#__PURE__*/function (_it6) {
    _inherits(Te, _it6);
    function Te(t, e) {
      var _this33;
      _classCallCheck(this, Te);
      _this33 = _callSuper(this, Te, arguments), _this33.text = Fe(t || new we()), _this33.attributes = e || [];
      return _this33;
    }
    _createClass(Te, [{
      key: "isEmpty",
      value: function isEmpty() {
        return this.text.isBlockBreak();
      }
    }, {
      key: "isEqualTo",
      value: function isEqualTo(t) {
        return !!_get(_getPrototypeOf(Te.prototype), "isEqualTo", this).call(this, t) || this.text.isEqualTo(null == t ? void 0 : t.text) && nt(this.attributes, null == t ? void 0 : t.attributes);
      }
    }, {
      key: "copyWithText",
      value: function copyWithText(t) {
        return new Te(t, this.attributes);
      }
    }, {
      key: "copyWithoutText",
      value: function copyWithoutText() {
        return this.copyWithText(null);
      }
    }, {
      key: "copyWithAttributes",
      value: function copyWithAttributes(t) {
        return new Te(this.text, t);
      }
    }, {
      key: "copyWithoutAttributes",
      value: function copyWithoutAttributes() {
        return this.copyWithAttributes(null);
      }
    }, {
      key: "copyUsingObjectMap",
      value: function copyUsingObjectMap(t) {
        var e = t.find(this.text);
        return e ? this.copyWithText(e) : this.copyWithText(this.text.copyUsingObjectMap(t));
      }
    }, {
      key: "addAttribute",
      value: function addAttribute(t) {
        var e = this.attributes.concat(Me(t));
        return this.copyWithAttributes(e);
      }
    }, {
      key: "removeAttribute",
      value: function removeAttribute(t) {
        var _dt2 = dt(t),
          e = _dt2.listAttribute,
          i = We(We(this.attributes, t), e);
        return this.copyWithAttributes(i);
      }
    }, {
      key: "removeLastAttribute",
      value: function removeLastAttribute() {
        return this.removeAttribute(this.getLastAttribute());
      }
    }, {
      key: "getLastAttribute",
      value: function getLastAttribute() {
        return je(this.attributes);
      }
    }, {
      key: "getAttributes",
      value: function getAttributes() {
        return this.attributes.slice(0);
      }
    }, {
      key: "getAttributeLevel",
      value: function getAttributeLevel() {
        return this.attributes.length;
      }
    }, {
      key: "getAttributeAtLevel",
      value: function getAttributeAtLevel(t) {
        return this.attributes[t - 1];
      }
    }, {
      key: "hasAttribute",
      value: function hasAttribute(t) {
        return this.attributes.includes(t);
      }
    }, {
      key: "hasAttributes",
      value: function hasAttributes() {
        return this.getAttributeLevel() > 0;
      }
    }, {
      key: "getLastNestableAttribute",
      value: function getLastNestableAttribute() {
        return je(this.getNestableAttributes());
      }
    }, {
      key: "getNestableAttributes",
      value: function getNestableAttributes() {
        return this.attributes.filter(function (t) {
          return dt(t).nestable;
        });
      }
    }, {
      key: "getNestingLevel",
      value: function getNestingLevel() {
        return this.getNestableAttributes().length;
      }
    }, {
      key: "decreaseNestingLevel",
      value: function decreaseNestingLevel() {
        var t = this.getLastNestableAttribute();
        return t ? this.removeAttribute(t) : this;
      }
    }, {
      key: "increaseNestingLevel",
      value: function increaseNestingLevel() {
        var t = this.getLastNestableAttribute();
        if (t) {
          var _e16 = this.attributes.lastIndexOf(t),
            _i19 = rt.apply(void 0, [this.attributes, _e16 + 1, 0].concat(_toConsumableArray(Me(t))));
          return this.copyWithAttributes(_i19);
        }
        return this;
      }
    }, {
      key: "getListItemAttributes",
      value: function getListItemAttributes() {
        return this.attributes.filter(function (t) {
          return dt(t).listAttribute;
        });
      }
    }, {
      key: "isListItem",
      value: function isListItem() {
        var t;
        return null === (t = dt(this.getLastAttribute())) || void 0 === t ? void 0 : t.listAttribute;
      }
    }, {
      key: "isTerminalBlock",
      value: function isTerminalBlock() {
        var t;
        return null === (t = dt(this.getLastAttribute())) || void 0 === t ? void 0 : t.terminal;
      }
    }, {
      key: "breaksOnReturn",
      value: function breaksOnReturn() {
        var t;
        return null === (t = dt(this.getLastAttribute())) || void 0 === t ? void 0 : t.breakOnReturn;
      }
    }, {
      key: "findLineBreakInDirectionFromPosition",
      value: function findLineBreakInDirectionFromPosition(t, e) {
        var i = this.toString();
        var n;
        switch (t) {
          case "forward":
            n = i.indexOf("\n", e);
            break;
          case "backward":
            n = i.slice(0, e).lastIndexOf("\n");
        }
        if (-1 !== n) return n;
      }
    }, {
      key: "contentsForInspection",
      value: function contentsForInspection() {
        return {
          text: this.text.inspect(),
          attributes: this.attributes
        };
      }
    }, {
      key: "toString",
      value: function toString() {
        return this.text.toString();
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          text: this.text,
          attributes: this.attributes
        };
      }
    }, {
      key: "getDirection",
      value: function getDirection() {
        return this.text.getDirection();
      }
    }, {
      key: "isRTL",
      value: function isRTL() {
        return this.text.isRTL();
      }
    }, {
      key: "getLength",
      value: function getLength() {
        return this.text.getLength();
      }
    }, {
      key: "canBeConsolidatedWith",
      value: function canBeConsolidatedWith(t) {
        return !this.hasAttributes() && !t.hasAttributes() && this.getDirection() === t.getDirection();
      }
    }, {
      key: "consolidateWith",
      value: function consolidateWith(t) {
        var e = we.textForStringWithAttributes("\n"),
          i = this.getTextWithoutBlockBreak().appendText(e);
        return this.copyWithText(i.appendText(t.text));
      }
    }, {
      key: "splitAtOffset",
      value: function splitAtOffset(t) {
        var e, i;
        return 0 === t ? (e = null, i = this) : t === this.getLength() ? (e = this, i = null) : (e = this.copyWithText(this.text.getTextAtRange([0, t])), i = this.copyWithText(this.text.getTextAtRange([t, this.getLength()]))), [e, i];
      }
    }, {
      key: "getBlockBreakPosition",
      value: function getBlockBreakPosition() {
        return this.text.getLength() - 1;
      }
    }, {
      key: "getTextWithoutBlockBreak",
      value: function getTextWithoutBlockBreak() {
        return Ne(this.text) ? this.text.getTextAtRange([0, this.getBlockBreakPosition()]) : this.text.copy();
      }
    }, {
      key: "canBeGrouped",
      value: function canBeGrouped(t) {
        return this.attributes[t];
      }
    }, {
      key: "canBeGroupedWith",
      value: function canBeGroupedWith(t, e) {
        var i = t.getAttributes(),
          r = i[e],
          o = this.attributes[e];
        return o === r && !(!1 === dt(o).group && !function () {
          if (!ut) {
            ut = [];
            for (var _t12 in n) {
              var _e17 = n[_t12].listAttribute;
              null != _e17 && ut.push(_e17);
            }
          }
          return ut;
        }().includes(i[e + 1])) && (this.getDirection() === t.getDirection() || t.isEmpty());
      }
    }], [{
      key: "fromJSON",
      value: function fromJSON(t) {
        return new this(we.fromJSON(t.text), t.attributes);
      }
    }]);
    return Te;
  }(it);
  var Fe = function Fe(t) {
      return t = Be(t), t = Ie(t);
    },
    Be = function Be(t) {
      var e = !1;
      var i = t.getPieces();
      var n = i.slice(0, i.length - 1);
      var r = i[i.length - 1];
      return r ? (n = n.map(function (t) {
        return t.isBlockBreak() ? (e = !0, Oe(t)) : t;
      }), e ? new we([].concat(_toConsumableArray(n), [r])) : t) : t;
    },
    Pe = we.textForStringWithAttributes("\n", {
      blockBreak: !0
    }),
    Ie = function Ie(t) {
      return Ne(t) ? t : t.appendText(Pe);
    },
    Ne = function Ne(t) {
      var e = t.getLength();
      if (0 === e) return !1;
      return t.getTextAtRange([e - 1, e]).isBlockBreak();
    },
    Oe = function Oe(t) {
      return t.copyWithoutAttribute("blockBreak");
    },
    Me = function Me(t) {
      var _dt3 = dt(t),
        e = _dt3.listAttribute;
      return e ? [e, t] : [t];
    },
    je = function je(t) {
      return t.slice(-1)[0];
    },
    We = function We(t, e) {
      var i = t.lastIndexOf(e);
      return -1 === i ? t : rt(t, i, 1);
    };
  var qe = /*#__PURE__*/function (_it7) {
    _inherits(qe, _it7);
    function qe() {
      var _this34;
      _classCallCheck(this, qe);
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      _this34 = _callSuper(this, qe, arguments), 0 === t.length && (t = [new Te()]), _this34.blockList = Ee.box(t);
      return _this34;
    }
    _createClass(qe, [{
      key: "isEmpty",
      value: function isEmpty() {
        var t = this.getBlockAtIndex(0);
        return 1 === this.blockList.length && t.isEmpty() && !t.hasAttributes();
      }
    }, {
      key: "copy",
      value: function copy() {
        var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).consolidateBlocks ? this.blockList.consolidate().toArray() : this.blockList.toArray();
        return new this.constructor(t);
      }
    }, {
      key: "copyUsingObjectsFromDocument",
      value: function copyUsingObjectsFromDocument(t) {
        var e = new Yt(t.getObjects());
        return this.copyUsingObjectMap(e);
      }
    }, {
      key: "copyUsingObjectMap",
      value: function copyUsingObjectMap(t) {
        var e = this.getBlocks().map(function (e) {
          return t.find(e) || e.copyUsingObjectMap(t);
        });
        return new this.constructor(e);
      }
    }, {
      key: "copyWithBaseBlockAttributes",
      value: function copyWithBaseBlockAttributes() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        var e = this.getBlocks().map(function (e) {
          var i = t.concat(e.getAttributes());
          return e.copyWithAttributes(i);
        });
        return new this.constructor(e);
      }
    }, {
      key: "replaceBlock",
      value: function replaceBlock(t, e) {
        var i = this.blockList.indexOf(t);
        return -1 === i ? this : new this.constructor(this.blockList.replaceObjectAtIndex(e, i));
      }
    }, {
      key: "insertDocumentAtRange",
      value: function insertDocumentAtRange(t, e) {
        var i = t.blockList;
        e = kt(e);
        var _e18 = e,
          _e19 = _slicedToArray(_e18, 1),
          n = _e19[0];
        var _this$locationFromPos = this.locationFromPosition(n),
          r = _this$locationFromPos.index,
          o = _this$locationFromPos.offset;
        var s = this;
        var a = this.getBlockAtPosition(n);
        return Lt(e) && a.isEmpty() && !a.hasAttributes() ? s = new this.constructor(s.blockList.removeObjectAtIndex(r)) : a.getBlockBreakPosition() === o && n++, s = s.removeTextAtRange(e), new this.constructor(s.blockList.insertSplittableListAtPosition(i, n));
      }
    }, {
      key: "mergeDocumentAtRange",
      value: function mergeDocumentAtRange(t, e) {
        var i, n;
        e = kt(e);
        var _e20 = e,
          _e21 = _slicedToArray(_e20, 1),
          r = _e21[0],
          o = this.locationFromPosition(r),
          s = this.getBlockAtIndex(o.index).getAttributes(),
          a = t.getBaseBlockAttributes(),
          l = s.slice(-a.length);
        if (nt(a, l)) {
          var _e22 = s.slice(0, -a.length);
          i = t.copyWithBaseBlockAttributes(_e22);
        } else i = t.copy({
          consolidateBlocks: !0
        }).copyWithBaseBlockAttributes(s);
        var c = i.getBlockCount(),
          u = i.getBlockAtIndex(0);
        if (nt(s, u.getAttributes())) {
          var _t13 = u.getTextWithoutBlockBreak();
          if (n = this.insertTextAtRange(_t13, e), c > 1) {
            i = new this.constructor(i.getBlocks().slice(1));
            var _e23 = r + _t13.getLength();
            n = n.insertDocumentAtRange(i, _e23);
          }
        } else n = this.insertDocumentAtRange(i, e);
        return n;
      }
    }, {
      key: "insertTextAtRange",
      value: function insertTextAtRange(t, e) {
        e = kt(e);
        var _e24 = e,
          _e25 = _slicedToArray(_e24, 1),
          i = _e25[0],
          _this$locationFromPos2 = this.locationFromPosition(i),
          n = _this$locationFromPos2.index,
          r = _this$locationFromPos2.offset,
          o = this.removeTextAtRange(e);
        return new this.constructor(o.blockList.editObjectAtIndex(n, function (e) {
          return e.copyWithText(e.text.insertTextAtPosition(t, r));
        }));
      }
    }, {
      key: "removeTextAtRange",
      value: function removeTextAtRange(t) {
        var e;
        t = kt(t);
        var _t14 = t,
          _t15 = _slicedToArray(_t14, 2),
          i = _t15[0],
          n = _t15[1];
        if (Lt(t)) return this;
        var _Array$from = Array.from(this.locationRangeFromRange(t)),
          _Array$from2 = _slicedToArray(_Array$from, 2),
          r = _Array$from2[0],
          o = _Array$from2[1],
          s = r.index,
          a = r.offset,
          l = this.getBlockAtIndex(s),
          c = o.index,
          u = o.offset,
          h = this.getBlockAtIndex(c);
        if (n - i == 1 && l.getBlockBreakPosition() === a && h.getBlockBreakPosition() !== u && "\n" === h.text.getStringAtPosition(u)) e = this.blockList.editObjectAtIndex(c, function (t) {
          return t.copyWithText(t.text.removeTextAtRange([u, u + 1]));
        });else {
          var _t16;
          var _i20 = l.text.getTextAtRange([0, a]),
            _n14 = h.text.getTextAtRange([u, h.getLength()]),
            _r6 = _i20.appendText(_n14);
          _t16 = s !== c && 0 === a && l.getAttributeLevel() >= h.getAttributeLevel() ? h.copyWithText(_r6) : l.copyWithText(_r6);
          var _o4 = c + 1 - s;
          e = this.blockList.splice(s, _o4, _t16);
        }
        return new this.constructor(e);
      }
    }, {
      key: "moveTextFromRangeToPosition",
      value: function moveTextFromRangeToPosition(t, e) {
        var i;
        t = kt(t);
        var _t17 = t,
          _t18 = _slicedToArray(_t17, 2),
          n = _t18[0],
          r = _t18[1];
        if (n <= e && e <= r) return this;
        var o = this.getDocumentAtRange(t),
          s = this.removeTextAtRange(t);
        var a = n < e;
        a && (e -= o.getLength());
        var _o$getBlocks = o.getBlocks(),
          _o$getBlocks2 = _toArray(_o$getBlocks),
          l = _o$getBlocks2[0],
          c = _o$getBlocks2.slice(1);
        return 0 === c.length ? (i = l.getTextWithoutBlockBreak(), a && (e += 1)) : i = l.text, s = s.insertTextAtRange(i, e), 0 === c.length ? s : (o = new this.constructor(c), e += i.getLength(), s.insertDocumentAtRange(o, e));
      }
    }, {
      key: "addAttributeAtRange",
      value: function addAttributeAtRange(t, e, i) {
        var n = this.blockList;
        return this.eachBlockAtRange(i, function (i, r, o) {
          return n = n.editObjectAtIndex(o, function () {
            return dt(t) ? i.addAttribute(t, e) : r[0] === r[1] ? i : i.copyWithText(i.text.addAttributeAtRange(t, e, r));
          });
        }), new this.constructor(n);
      }
    }, {
      key: "addAttribute",
      value: function addAttribute(t, e) {
        var i = this.blockList;
        return this.eachBlock(function (n, r) {
          return i = i.editObjectAtIndex(r, function () {
            return n.addAttribute(t, e);
          });
        }), new this.constructor(i);
      }
    }, {
      key: "removeAttributeAtRange",
      value: function removeAttributeAtRange(t, e) {
        var i = this.blockList;
        return this.eachBlockAtRange(e, function (e, n, r) {
          dt(t) ? i = i.editObjectAtIndex(r, function () {
            return e.removeAttribute(t);
          }) : n[0] !== n[1] && (i = i.editObjectAtIndex(r, function () {
            return e.copyWithText(e.text.removeAttributeAtRange(t, n));
          }));
        }), new this.constructor(i);
      }
    }, {
      key: "updateAttributesForAttachment",
      value: function updateAttributesForAttachment(t, e) {
        var i = this.getRangeOfAttachment(e),
          _Array$from3 = Array.from(i),
          _Array$from4 = _slicedToArray(_Array$from3, 1),
          n = _Array$from4[0],
          _this$locationFromPos3 = this.locationFromPosition(n),
          r = _this$locationFromPos3.index,
          o = this.getTextAtIndex(r);
        return new this.constructor(this.blockList.editObjectAtIndex(r, function (i) {
          return i.copyWithText(o.updateAttributesForAttachment(t, e));
        }));
      }
    }, {
      key: "removeAttributeForAttachment",
      value: function removeAttributeForAttachment(t, e) {
        var i = this.getRangeOfAttachment(e);
        return this.removeAttributeAtRange(t, i);
      }
    }, {
      key: "insertBlockBreakAtRange",
      value: function insertBlockBreakAtRange(t) {
        var e;
        t = kt(t);
        var _t19 = t,
          _t20 = _slicedToArray(_t19, 1),
          i = _t20[0],
          _this$locationFromPos4 = this.locationFromPosition(i),
          n = _this$locationFromPos4.offset,
          r = this.removeTextAtRange(t);
        return 0 === n && (e = [new Te()]), new this.constructor(r.blockList.insertSplittableListAtPosition(new Ee(e), i));
      }
    }, {
      key: "applyBlockAttributeAtRange",
      value: function applyBlockAttributeAtRange(t, e, i) {
        var n = this.expandRangeToLineBreaksAndSplitBlocks(i);
        var r = n.document;
        i = n.range;
        var o = dt(t);
        if (o.listAttribute) {
          r = r.removeLastListAttributeAtRange(i, {
            exceptAttributeName: t
          });
          var _e26 = r.convertLineBreaksToBlockBreaksInRange(i);
          r = _e26.document, i = _e26.range;
        } else r = o.exclusive ? r.removeBlockAttributesAtRange(i) : o.terminal ? r.removeLastTerminalAttributeAtRange(i) : r.consolidateBlocksAtRange(i);
        return r.addAttributeAtRange(t, e, i);
      }
    }, {
      key: "removeLastListAttributeAtRange",
      value: function removeLastListAttributeAtRange(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          i = this.blockList;
        return this.eachBlockAtRange(t, function (t, n, r) {
          var o = t.getLastAttribute();
          o && dt(o).listAttribute && o !== e.exceptAttributeName && (i = i.editObjectAtIndex(r, function () {
            return t.removeAttribute(o);
          }));
        }), new this.constructor(i);
      }
    }, {
      key: "removeLastTerminalAttributeAtRange",
      value: function removeLastTerminalAttributeAtRange(t) {
        var e = this.blockList;
        return this.eachBlockAtRange(t, function (t, i, n) {
          var r = t.getLastAttribute();
          r && dt(r).terminal && (e = e.editObjectAtIndex(n, function () {
            return t.removeAttribute(r);
          }));
        }), new this.constructor(e);
      }
    }, {
      key: "removeBlockAttributesAtRange",
      value: function removeBlockAttributesAtRange(t) {
        var e = this.blockList;
        return this.eachBlockAtRange(t, function (t, i, n) {
          t.hasAttributes() && (e = e.editObjectAtIndex(n, function () {
            return t.copyWithoutAttributes();
          }));
        }), new this.constructor(e);
      }
    }, {
      key: "expandRangeToLineBreaksAndSplitBlocks",
      value: function expandRangeToLineBreaksAndSplitBlocks(t) {
        var e;
        t = kt(t);
        var _t21 = t,
          _t22 = _slicedToArray(_t21, 2),
          i = _t22[0],
          n = _t22[1];
        var r = this.locationFromPosition(i),
          o = this.locationFromPosition(n);
        var s = this;
        var a = s.getBlockAtIndex(r.index);
        if (r.offset = a.findLineBreakInDirectionFromPosition("backward", r.offset), null != r.offset && (e = s.positionFromLocation(r), s = s.insertBlockBreakAtRange([e, e + 1]), o.index += 1, o.offset -= s.getBlockAtIndex(r.index).getLength(), r.index += 1), r.offset = 0, 0 === o.offset && o.index > r.index) o.index -= 1, o.offset = s.getBlockAtIndex(o.index).getBlockBreakPosition();else {
          var _t23 = s.getBlockAtIndex(o.index);
          "\n" === _t23.text.getStringAtRange([o.offset - 1, o.offset]) ? o.offset -= 1 : o.offset = _t23.findLineBreakInDirectionFromPosition("forward", o.offset), o.offset !== _t23.getBlockBreakPosition() && (e = s.positionFromLocation(o), s = s.insertBlockBreakAtRange([e, e + 1]));
        }
        return i = s.positionFromLocation(r), n = s.positionFromLocation(o), {
          document: s,
          range: t = kt([i, n])
        };
      }
    }, {
      key: "convertLineBreaksToBlockBreaksInRange",
      value: function convertLineBreaksToBlockBreaksInRange(t) {
        t = kt(t);
        var _t24 = t,
          _t25 = _slicedToArray(_t24, 1),
          e = _t25[0];
        var i = this.getStringAtRange(t).slice(0, -1);
        var n = this;
        return i.replace(/.*?\n/g, function (t) {
          e += t.length, n = n.insertBlockBreakAtRange([e - 1, e]);
        }), {
          document: n,
          range: t
        };
      }
    }, {
      key: "consolidateBlocksAtRange",
      value: function consolidateBlocksAtRange(t) {
        t = kt(t);
        var _t26 = t,
          _t27 = _slicedToArray(_t26, 2),
          e = _t27[0],
          i = _t27[1],
          n = this.locationFromPosition(e).index,
          r = this.locationFromPosition(i).index;
        return new this.constructor(this.blockList.consolidateFromIndexToIndex(n, r));
      }
    }, {
      key: "getDocumentAtRange",
      value: function getDocumentAtRange(t) {
        t = kt(t);
        var e = this.blockList.getSplittableListInRange(t).toArray();
        return new this.constructor(e);
      }
    }, {
      key: "getStringAtRange",
      value: function getStringAtRange(t) {
        var e;
        var i = t = kt(t);
        return i[i.length - 1] !== this.getLength() && (e = -1), this.getDocumentAtRange(t).toString().slice(0, e);
      }
    }, {
      key: "getBlockAtIndex",
      value: function getBlockAtIndex(t) {
        return this.blockList.getObjectAtIndex(t);
      }
    }, {
      key: "getBlockAtPosition",
      value: function getBlockAtPosition(t) {
        var _this$locationFromPos5 = this.locationFromPosition(t),
          e = _this$locationFromPos5.index;
        return this.getBlockAtIndex(e);
      }
    }, {
      key: "getTextAtIndex",
      value: function getTextAtIndex(t) {
        var e;
        return null === (e = this.getBlockAtIndex(t)) || void 0 === e ? void 0 : e.text;
      }
    }, {
      key: "getTextAtPosition",
      value: function getTextAtPosition(t) {
        var _this$locationFromPos6 = this.locationFromPosition(t),
          e = _this$locationFromPos6.index;
        return this.getTextAtIndex(e);
      }
    }, {
      key: "getPieceAtPosition",
      value: function getPieceAtPosition(t) {
        var _this$locationFromPos7 = this.locationFromPosition(t),
          e = _this$locationFromPos7.index,
          i = _this$locationFromPos7.offset;
        return this.getTextAtIndex(e).getPieceAtPosition(i);
      }
    }, {
      key: "getCharacterAtPosition",
      value: function getCharacterAtPosition(t) {
        var _this$locationFromPos8 = this.locationFromPosition(t),
          e = _this$locationFromPos8.index,
          i = _this$locationFromPos8.offset;
        return this.getTextAtIndex(e).getStringAtRange([i, i + 1]);
      }
    }, {
      key: "getLength",
      value: function getLength() {
        return this.blockList.getEndPosition();
      }
    }, {
      key: "getBlocks",
      value: function getBlocks() {
        return this.blockList.toArray();
      }
    }, {
      key: "getBlockCount",
      value: function getBlockCount() {
        return this.blockList.length;
      }
    }, {
      key: "getEditCount",
      value: function getEditCount() {
        return this.editCount;
      }
    }, {
      key: "eachBlock",
      value: function eachBlock(t) {
        return this.blockList.eachObject(t);
      }
    }, {
      key: "eachBlockAtRange",
      value: function eachBlockAtRange(t, e) {
        var i, n;
        t = kt(t);
        var _t28 = t,
          _t29 = _slicedToArray(_t28, 2),
          r = _t29[0],
          o = _t29[1],
          s = this.locationFromPosition(r),
          a = this.locationFromPosition(o);
        if (s.index === a.index) return i = this.getBlockAtIndex(s.index), n = [s.offset, a.offset], e(i, n, s.index);
        for (var _t30 = s.index; _t30 <= a.index; _t30++) if (i = this.getBlockAtIndex(_t30), i) {
          switch (_t30) {
            case s.index:
              n = [s.offset, i.text.getLength()];
              break;
            case a.index:
              n = [0, a.offset];
              break;
            default:
              n = [0, i.text.getLength()];
          }
          e(i, n, _t30);
        }
      }
    }, {
      key: "getCommonAttributesAtRange",
      value: function getCommonAttributesAtRange(t) {
        t = kt(t);
        var _t31 = t,
          _t32 = _slicedToArray(_t31, 1),
          e = _t32[0];
        if (Lt(t)) return this.getCommonAttributesAtPosition(e);
        {
          var _e27 = [],
            _i21 = [];
          return this.eachBlockAtRange(t, function (t, n) {
            if (n[0] !== n[1]) return _e27.push(t.text.getCommonAttributesAtRange(n)), _i21.push(Ue(t));
          }), _t.fromCommonAttributesOfObjects(_e27).merge(_t.fromCommonAttributesOfObjects(_i21)).toObject();
        }
      }
    }, {
      key: "getCommonAttributesAtPosition",
      value: function getCommonAttributesAtPosition(t) {
        var e, i;
        var _this$locationFromPos9 = this.locationFromPosition(t),
          n = _this$locationFromPos9.index,
          r = _this$locationFromPos9.offset,
          o = this.getBlockAtIndex(n);
        if (!o) return {};
        var s = Ue(o),
          a = o.text.getAttributesAtPosition(r),
          l = o.text.getAttributesAtPosition(r - 1),
          c = Object.keys(j).filter(function (t) {
            return j[t].inheritable;
          });
        for (e in l) i = l[e], (i === a[e] || c.includes(e)) && (s[e] = i);
        return s;
      }
    }, {
      key: "getRangeOfCommonAttributeAtPosition",
      value: function getRangeOfCommonAttributeAtPosition(t, e) {
        var _this$locationFromPos10 = this.locationFromPosition(e),
          i = _this$locationFromPos10.index,
          n = _this$locationFromPos10.offset,
          r = this.getTextAtIndex(i),
          _Array$from5 = Array.from(r.getExpandedRangeForAttributeAtOffset(t, n)),
          _Array$from6 = _slicedToArray(_Array$from5, 2),
          o = _Array$from6[0],
          s = _Array$from6[1],
          a = this.positionFromLocation({
            index: i,
            offset: o
          }),
          l = this.positionFromLocation({
            index: i,
            offset: s
          });
        return kt([a, l]);
      }
    }, {
      key: "getBaseBlockAttributes",
      value: function getBaseBlockAttributes() {
        var _this35 = this;
        var t = this.getBlockAtIndex(0).getAttributes();
        var _loop = function _loop() {
          var i = _this35.getBlockAtIndex(_e28).getAttributes(),
            n = Math.min(t.length, i.length);
          t = function () {
            var e = [];
            for (var _r7 = 0; _r7 < n && i[_r7] === t[_r7]; _r7++) e.push(i[_r7]);
            return e;
          }();
        };
        for (var _e28 = 1; _e28 < this.getBlockCount(); _e28++) {
          _loop();
        }
        return t;
      }
    }, {
      key: "getAttachmentById",
      value: function getAttachmentById(t) {
        var _iterator3 = _createForOfIteratorHelper(this.getAttachments()),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _e29 = _step3.value;
            if (_e29.id === t) return _e29;
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    }, {
      key: "getAttachmentPieces",
      value: function getAttachmentPieces() {
        var t = [];
        return this.blockList.eachObject(function (e) {
          var i = e.text;
          return t = t.concat(i.getAttachmentPieces());
        }), t;
      }
    }, {
      key: "getAttachments",
      value: function getAttachments() {
        return this.getAttachmentPieces().map(function (t) {
          return t.attachment;
        });
      }
    }, {
      key: "getRangeOfAttachment",
      value: function getRangeOfAttachment(t) {
        var e = 0;
        var i = this.blockList.toArray();
        for (var _n15 = 0; _n15 < i.length; _n15++) {
          var _r8 = i[_n15].text,
            _o5 = _r8.getRangeOfAttachment(t);
          if (_o5) return kt([e + _o5[0], e + _o5[1]]);
          e += _r8.getLength();
        }
      }
    }, {
      key: "getLocationRangeOfAttachment",
      value: function getLocationRangeOfAttachment(t) {
        var e = this.getRangeOfAttachment(t);
        return this.locationRangeFromRange(e);
      }
    }, {
      key: "getAttachmentPieceForAttachment",
      value: function getAttachmentPieceForAttachment(t) {
        var _iterator4 = _createForOfIteratorHelper(this.getAttachmentPieces()),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _e30 = _step4.value;
            if (_e30.attachment === t) return _e30;
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
    }, {
      key: "findRangesForBlockAttribute",
      value: function findRangesForBlockAttribute(t) {
        var e = 0;
        var i = [];
        return this.getBlocks().forEach(function (n) {
          var r = n.getLength();
          n.hasAttribute(t) && i.push([e, e + r]), e += r;
        }), i;
      }
    }, {
      key: "findRangesForTextAttribute",
      value: function findRangesForTextAttribute(t) {
        var _ref9 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          e = _ref9.withValue,
          i = 0,
          n = [];
        var r = [];
        return this.getPieces().forEach(function (o) {
          var s = o.getLength();
          (function (i) {
            return e ? i.getAttribute(t) === e : i.hasAttribute(t);
          })(o) && (n[1] === i ? n[1] = i + s : r.push(n = [i, i + s])), i += s;
        }), r;
      }
    }, {
      key: "locationFromPosition",
      value: function locationFromPosition(t) {
        var e = this.blockList.findIndexAndOffsetAtPosition(Math.max(0, t));
        if (null != e.index) return e;
        {
          var _t33 = this.getBlocks();
          return {
            index: _t33.length - 1,
            offset: _t33[_t33.length - 1].getLength()
          };
        }
      }
    }, {
      key: "positionFromLocation",
      value: function positionFromLocation(t) {
        return this.blockList.findPositionAtIndexAndOffset(t.index, t.offset);
      }
    }, {
      key: "locationRangeFromPosition",
      value: function locationRangeFromPosition(t) {
        return kt(this.locationFromPosition(t));
      }
    }, {
      key: "locationRangeFromRange",
      value: function locationRangeFromRange(t) {
        if (!(t = kt(t))) return;
        var _Array$from7 = Array.from(t),
          _Array$from8 = _slicedToArray(_Array$from7, 2),
          e = _Array$from8[0],
          i = _Array$from8[1],
          n = this.locationFromPosition(e),
          r = this.locationFromPosition(i);
        return kt([n, r]);
      }
    }, {
      key: "rangeFromLocationRange",
      value: function rangeFromLocationRange(t) {
        var e;
        t = kt(t);
        var i = this.positionFromLocation(t[0]);
        return Lt(t) || (e = this.positionFromLocation(t[1])), kt([i, e]);
      }
    }, {
      key: "isEqualTo",
      value: function isEqualTo(t) {
        return this.blockList.isEqualTo(null == t ? void 0 : t.blockList);
      }
    }, {
      key: "getTexts",
      value: function getTexts() {
        return this.getBlocks().map(function (t) {
          return t.text;
        });
      }
    }, {
      key: "getPieces",
      value: function getPieces() {
        var t = [];
        return Array.from(this.getTexts()).forEach(function (e) {
          t.push.apply(t, _toConsumableArray(Array.from(e.getPieces() || [])));
        }), t;
      }
    }, {
      key: "getObjects",
      value: function getObjects() {
        return this.getBlocks().concat(this.getTexts()).concat(this.getPieces());
      }
    }, {
      key: "toSerializableDocument",
      value: function toSerializableDocument() {
        var t = [];
        return this.blockList.eachObject(function (e) {
          return t.push(e.copyWithText(e.text.toSerializableText()));
        }), new this.constructor(t);
      }
    }, {
      key: "toString",
      value: function toString() {
        return this.blockList.toString();
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return this.blockList.toJSON();
      }
    }, {
      key: "toConsole",
      value: function toConsole() {
        return JSON.stringify(this.blockList.toArray()).map(function (t) {
          return JSON.parse(t.text.toConsole());
        });
      }
    }], [{
      key: "fromJSON",
      value: function fromJSON(t) {
        return new this(Array.from(t).map(function (t) {
          return Te.fromJSON(t);
        }));
      }
    }, {
      key: "fromString",
      value: function fromString(t, e) {
        var i = we.textForStringWithAttributes(t, e);
        return new this([new Te(i)]);
      }
    }]);
    return qe;
  }(it);
  var Ue = function Ue(t) {
      var e = {},
        i = t.getLastAttribute();
      return i && (e[i] = !0), e;
    },
    Ve = "style href src width height class".split(" "),
    ze = "javascript:".split(" "),
    _e = "script iframe".split(" ");
  var He = /*#__PURE__*/function (_V7) {
    _inherits(He, _V7);
    function He(t) {
      var _this36;
      _classCallCheck(this, He);
      var _ref10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        e = _ref10.allowedAttributes,
        i = _ref10.forbiddenProtocols,
        n = _ref10.forbiddenElements;
      _this36 = _callSuper(this, He, arguments), _this36.allowedAttributes = e || Ve, _this36.forbiddenProtocols = i || ze, _this36.forbiddenElements = n || _e, _this36.body = Je(t);
      return _this36;
    }
    _createClass(He, [{
      key: "sanitize",
      value: function sanitize() {
        return this.sanitizeElements(), this.normalizeListElementNesting();
      }
    }, {
      key: "getHTML",
      value: function getHTML() {
        return this.body.innerHTML;
      }
    }, {
      key: "getBody",
      value: function getBody() {
        return this.body;
      }
    }, {
      key: "sanitizeElements",
      value: function sanitizeElements() {
        var t = C(this.body),
          e = [];
        for (; t.nextNode();) {
          var _i22 = t.currentNode;
          switch (_i22.nodeType) {
            case Node.ELEMENT_NODE:
              this.elementIsRemovable(_i22) ? e.push(_i22) : this.sanitizeElement(_i22);
              break;
            case Node.COMMENT_NODE:
              e.push(_i22);
          }
        }
        return e.forEach(function (t) {
          return y(t);
        }), this.body;
      }
    }, {
      key: "sanitizeElement",
      value: function sanitizeElement(t) {
        var _this37 = this;
        return t.hasAttribute("href") && this.forbiddenProtocols.includes(t.protocol) && t.removeAttribute("href"), Array.from(t.attributes).forEach(function (e) {
          var i = e.name;
          _this37.allowedAttributes.includes(i) || 0 === i.indexOf("data-trix") || t.removeAttribute(i);
        }), t;
      }
    }, {
      key: "normalizeListElementNesting",
      value: function normalizeListElementNesting() {
        return Array.from(this.body.querySelectorAll("ul,ol")).forEach(function (t) {
          var e = t.previousElementSibling;
          e && "li" === R(e) && e.appendChild(t);
        }), this.body;
      }
    }, {
      key: "elementIsRemovable",
      value: function elementIsRemovable(t) {
        if ((null == t ? void 0 : t.nodeType) === Node.ELEMENT_NODE) return this.elementIsForbidden(t) || this.elementIsntSerializable(t);
      }
    }, {
      key: "elementIsForbidden",
      value: function elementIsForbidden(t) {
        return this.forbiddenElements.includes(R(t));
      }
    }, {
      key: "elementIsntSerializable",
      value: function elementIsntSerializable(t) {
        return "false" === t.getAttribute("data-trix-serialize") && !P(t);
      }
    }], [{
      key: "sanitize",
      value: function sanitize(t, e) {
        var i = new this(t, e);
        return i.sanitize(), i;
      }
    }]);
    return He;
  }(V);
  var Je = function Je() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      t = t.replace(/<\/html[^>]*>[^]*$/i, "</html>");
      var e = document.implementation.createHTMLDocument("");
      return e.documentElement.innerHTML = t, Array.from(e.head.querySelectorAll("style")).forEach(function (t) {
        e.body.appendChild(t);
      }), e.body;
    },
    Ke = function Ke(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      var i = "string";
      return {
        string: t = Wt(t),
        attributes: e,
        type: i
      };
    },
    Ge = function Ge(t, e) {
      try {
        return JSON.parse(t.getAttribute("data-trix-".concat(e)));
      } catch (t) {
        return {};
      }
    };
  var $e = /*#__PURE__*/function (_V8) {
    _inherits($e, _V8);
    function $e(t) {
      var _this38;
      _classCallCheck(this, $e);
      var _ref11 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        e = _ref11.referenceElement;
      _this38 = _callSuper(this, $e, arguments), _this38.html = t, _this38.referenceElement = e, _this38.blocks = [], _this38.blockElements = [], _this38.processedElements = [];
      return _this38;
    }
    _createClass($e, [{
      key: "getDocument",
      value: function getDocument() {
        return qe.fromJSON(this.blocks);
      }
    }, {
      key: "parse",
      value: function parse() {
        try {
          this.createHiddenContainer();
          var _t34 = He.sanitize(this.html).getHTML();
          this.containerElement.innerHTML = _t34;
          var _e31 = C(this.containerElement, {
            usingFilter: Ze
          });
          for (; _e31.nextNode();) this.processNode(_e31.currentNode);
          return this.translateBlockElementMarginsToNewlines();
        } finally {
          this.removeHiddenContainer();
        }
      }
    }, {
      key: "createHiddenContainer",
      value: function createHiddenContainer() {
        return this.referenceElement ? (this.containerElement = this.referenceElement.cloneNode(!1), this.containerElement.removeAttribute("id"), this.containerElement.setAttribute("data-trix-internal", ""), this.containerElement.style.display = "none", this.referenceElement.parentNode.insertBefore(this.containerElement, this.referenceElement.nextSibling)) : (this.containerElement = S({
          tagName: "div",
          style: {
            display: "none"
          }
        }), document.body.appendChild(this.containerElement));
      }
    }, {
      key: "removeHiddenContainer",
      value: function removeHiddenContainer() {
        return y(this.containerElement);
      }
    }, {
      key: "processNode",
      value: function processNode(t) {
        switch (t.nodeType) {
          case Node.TEXT_NODE:
            if (!this.isInsignificantTextNode(t)) return this.appendBlockForTextNode(t), this.processTextNode(t);
            break;
          case Node.ELEMENT_NODE:
            return this.appendBlockForElement(t), this.processElement(t);
        }
      }
    }, {
      key: "appendBlockForTextNode",
      value: function appendBlockForTextNode(t) {
        var e = t.parentNode;
        if (e === this.currentBlockElement && this.isBlockElement(t.previousSibling)) return this.appendStringWithAttributes("\n");
        if (e === this.containerElement || this.isBlockElement(e)) {
          var i;
          var _t35 = this.getBlockAttributes(e);
          nt(_t35, null === (i = this.currentBlock) || void 0 === i ? void 0 : i.attributes) || (this.currentBlock = this.appendBlockForAttributesWithElement(_t35, e), this.currentBlockElement = e);
        }
      }
    }, {
      key: "appendBlockForElement",
      value: function appendBlockForElement(t) {
        var e = this.isBlockElement(t),
          i = A(this.currentBlockElement, t);
        if (e && !this.isBlockElement(t.firstChild)) {
          if (!this.isInsignificantTextNode(t.firstChild) || !this.isBlockElement(t.firstElementChild)) {
            var _e32 = this.getBlockAttributes(t);
            if (t.firstChild) {
              if (i && nt(_e32, this.currentBlock.attributes)) return this.appendStringWithAttributes("\n");
              this.currentBlock = this.appendBlockForAttributesWithElement(_e32, t), this.currentBlockElement = t;
            }
          }
        } else if (this.currentBlockElement && !i && !e) {
          var _e33 = this.findParentBlockElement(t);
          if (_e33) return this.appendBlockForElement(_e33);
          this.currentBlock = this.appendEmptyBlock(), this.currentBlockElement = null;
        }
      }
    }, {
      key: "findParentBlockElement",
      value: function findParentBlockElement(t) {
        var e = t.parentElement;
        for (; e && e !== this.containerElement;) {
          if (this.isBlockElement(e) && this.blockElements.includes(e)) return e;
          e = e.parentElement;
        }
        return null;
      }
    }, {
      key: "processTextNode",
      value: function processTextNode(t) {
        var e = t.data;
        var i;
        Xe(t.parentNode) || (e = Ut(e), ii(null === (i = t.previousSibling) || void 0 === i ? void 0 : i.textContent) && (e = ti(e)));
        return this.appendStringWithAttributes(e, this.getTextAttributes(t.parentNode));
      }
    }, {
      key: "processElement",
      value: function processElement(t) {
        var e;
        if (P(t)) {
          if (e = Ge(t, "attachment"), Object.keys(e).length) {
            var _i23 = this.getTextAttributes(t);
            this.appendAttachmentWithAttributes(e, _i23), t.innerHTML = "";
          }
          return this.processedElements.push(t);
        }
        switch (R(t)) {
          case "br":
            return this.isExtraBR(t) || this.isBlockElement(t.nextSibling) || this.appendStringWithAttributes("\n", this.getTextAttributes(t)), this.processedElements.push(t);
          case "img":
            e = {
              url: t.getAttribute("src"),
              contentType: "image"
            };
            var _i24 = function (t) {
              var e = t.getAttribute("width"),
                i = t.getAttribute("height"),
                n = {};
              return e && (n.width = parseInt(e, 10)), i && (n.height = parseInt(i, 10)), n;
            }(t);
            for (var _t36 in _i24) {
              var _n16 = _i24[_t36];
              e[_t36] = _n16;
            }
            return this.appendAttachmentWithAttributes(e, this.getTextAttributes(t)), this.processedElements.push(t);
          case "tr":
            if (this.needsTableSeparator(t)) return this.appendStringWithAttributes(M.tableRowSeparator);
            break;
          case "td":
            if (this.needsTableSeparator(t)) return this.appendStringWithAttributes(M.tableCellSeparator);
        }
      }
    }, {
      key: "appendBlockForAttributesWithElement",
      value: function appendBlockForAttributesWithElement(t, e) {
        this.blockElements.push(e);
        var i = function () {
          return {
            text: [],
            attributes: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          };
        }(t);
        return this.blocks.push(i), i;
      }
    }, {
      key: "appendEmptyBlock",
      value: function appendEmptyBlock() {
        return this.appendBlockForAttributesWithElement([], null);
      }
    }, {
      key: "appendStringWithAttributes",
      value: function appendStringWithAttributes(t, e) {
        return this.appendPiece(Ke(t, e));
      }
    }, {
      key: "appendAttachmentWithAttributes",
      value: function appendAttachmentWithAttributes(t, e) {
        return this.appendPiece(function (t) {
          return {
            attachment: t,
            attributes: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            type: "attachment"
          };
        }(t, e));
      }
    }, {
      key: "appendPiece",
      value: function appendPiece(t) {
        return 0 === this.blocks.length && this.appendEmptyBlock(), this.blocks[this.blocks.length - 1].text.push(t);
      }
    }, {
      key: "appendStringToTextAtIndex",
      value: function appendStringToTextAtIndex(t, e) {
        var i = this.blocks[e].text,
          n = i[i.length - 1];
        if ("string" !== (null == n ? void 0 : n.type)) return i.push(Ke(t));
        n.string += t;
      }
    }, {
      key: "prependStringToTextAtIndex",
      value: function prependStringToTextAtIndex(t, e) {
        var i = this.blocks[e].text,
          n = i[0];
        if ("string" !== (null == n ? void 0 : n.type)) return i.unshift(Ke(t));
        n.string = t + n.string;
      }
    }, {
      key: "getTextAttributes",
      value: function getTextAttributes(t) {
        var e;
        var i = {};
        for (var _n17 in j) {
          var _r9 = j[_n17];
          if (_r9.tagName && b(t, {
            matchingSelector: _r9.tagName,
            untilNode: this.containerElement
          })) i[_n17] = !0;else if (_r9.parser) {
            if (e = _r9.parser(t), e) {
              var _o6 = !1;
              var _iterator5 = _createForOfIteratorHelper(this.findBlockElementAncestors(t)),
                _step5;
              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var _i25 = _step5.value;
                  if (_r9.parser(_i25) === e) {
                    _o6 = !0;
                    break;
                  }
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
              _o6 || (i[_n17] = e);
            }
          } else _r9.styleProperty && (e = t.style[_r9.styleProperty], e && (i[_n17] = e));
        }
        if (P(t)) {
          var _n18 = Ge(t, "attributes");
          for (var _t37 in _n18) e = _n18[_t37], i[_t37] = e;
        }
        return i;
      }
    }, {
      key: "getBlockAttributes",
      value: function getBlockAttributes(t) {
        var e = [];
        for (; t && t !== this.containerElement;) {
          for (var _r10 in n) {
            var _o7 = n[_r10];
            var i;
            if (!1 !== _o7.parse) if (R(t) === _o7.tagName) (null !== (i = _o7.test) && void 0 !== i && i.call(_o7, t) || !_o7.test) && (e.push(_r10), _o7.listAttribute && e.push(_o7.listAttribute));
          }
          t = t.parentNode;
        }
        return e.reverse();
      }
    }, {
      key: "findBlockElementAncestors",
      value: function findBlockElementAncestors(t) {
        var e = [];
        for (; t && t !== this.containerElement;) {
          var _i26 = R(t);
          k().includes(_i26) && e.push(t), t = t.parentNode;
        }
        return e;
      }
    }, {
      key: "isBlockElement",
      value: function isBlockElement(t) {
        if ((null == t ? void 0 : t.nodeType) === Node.ELEMENT_NODE && !P(t) && !b(t, {
          matchingSelector: "td",
          untilNode: this.containerElement
        })) return k().includes(R(t)) || "block" === window.getComputedStyle(t).display;
      }
    }, {
      key: "isInsignificantTextNode",
      value: function isInsignificantTextNode(t) {
        if ((null == t ? void 0 : t.nodeType) !== Node.TEXT_NODE) return;
        if (!ei(t.data)) return;
        var e = t.parentNode,
          i = t.previousSibling,
          n = t.nextSibling;
        return Ye(e.previousSibling) && !this.isBlockElement(e.previousSibling) || Xe(e) ? void 0 : !i || this.isBlockElement(i) || !n || this.isBlockElement(n);
      }
    }, {
      key: "isExtraBR",
      value: function isExtraBR(t) {
        return "br" === R(t) && this.isBlockElement(t.parentNode) && t.parentNode.lastChild === t;
      }
    }, {
      key: "needsTableSeparator",
      value: function needsTableSeparator(t) {
        if (M.removeBlankTableCells) {
          var e;
          var _i27 = null === (e = t.previousSibling) || void 0 === e ? void 0 : e.textContent;
          return _i27 && /\S/.test(_i27);
        }
        return t.previousSibling;
      }
    }, {
      key: "translateBlockElementMarginsToNewlines",
      value: function translateBlockElementMarginsToNewlines() {
        var t = this.getMarginOfDefaultBlockElement();
        for (var _e34 = 0; _e34 < this.blocks.length; _e34++) {
          var _i28 = this.getMarginOfBlockElementAtIndex(_e34);
          _i28 && (_i28.top > 2 * t.top && this.prependStringToTextAtIndex("\n", _e34), _i28.bottom > 2 * t.bottom && this.appendStringToTextAtIndex("\n", _e34));
        }
      }
    }, {
      key: "getMarginOfBlockElementAtIndex",
      value: function getMarginOfBlockElementAtIndex(t) {
        var e = this.blockElements[t];
        if (e && e.textContent && !k().includes(R(e)) && !this.processedElements.includes(e)) return Qe(e);
      }
    }, {
      key: "getMarginOfDefaultBlockElement",
      value: function getMarginOfDefaultBlockElement() {
        var t = S(n["default"].tagName);
        return this.containerElement.appendChild(t), Qe(t);
      }
    }], [{
      key: "parse",
      value: function parse(t, e) {
        var i = new this(t, e);
        return i.parse(), i;
      }
    }]);
    return $e;
  }(V);
  var Xe = function Xe(t) {
      var _window$getComputedSt = window.getComputedStyle(t),
        e = _window$getComputedSt.whiteSpace;
      return ["pre", "pre-wrap", "pre-line"].includes(e);
    },
    Ye = function Ye(t) {
      return t && !ii(t.textContent);
    },
    Qe = function Qe(t) {
      var e = window.getComputedStyle(t);
      if ("block" === e.display) return {
        top: parseInt(e.marginTop),
        bottom: parseInt(e.marginBottom)
      };
    },
    Ze = function Ze(t) {
      return "style" === R(t) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
    },
    ti = function ti(t) {
      return t.replace(new RegExp("^".concat(qt.source, "+")), "");
    },
    ei = function ei(t) {
      return new RegExp("^".concat(qt.source, "*$")).test(t);
    },
    ii = function ii(t) {
      return /\s$/.test(t);
    },
    ni = ["contenteditable", "data-trix-id", "data-trix-store-key", "data-trix-mutable", "data-trix-placeholder", "tabindex"],
    ri = "data-trix-serialized-attributes",
    oi = "[".concat(ri, "]"),
    si = new RegExp("\x3c!--block--\x3e", "g"),
    ai = {
      "application/json": function applicationJson(t) {
        var e;
        if (t instanceof qe) e = t;else {
          if (!(t instanceof HTMLElement)) throw new Error("unserializable object");
          e = $e.parse(t.innerHTML).getDocument();
        }
        return e.toSerializableDocument().toJSONString();
      },
      "text/html": function textHtml(t) {
        var e;
        if (t instanceof qe) e = ge.render(t);else {
          if (!(t instanceof HTMLElement)) throw new Error("unserializable object");
          e = t.cloneNode(!0);
        }
        return Array.from(e.querySelectorAll("[data-trix-serialize=false]")).forEach(function (t) {
          y(t);
        }), ni.forEach(function (t) {
          Array.from(e.querySelectorAll("[".concat(t, "]"))).forEach(function (e) {
            e.removeAttribute(t);
          });
        }), Array.from(e.querySelectorAll(oi)).forEach(function (t) {
          try {
            var _e35 = JSON.parse(t.getAttribute(ri));
            t.removeAttribute(ri);
            for (var _i29 in _e35) {
              var _n19 = _e35[_i29];
              t.setAttribute(_i29, _n19);
            }
          } catch (t) {}
        }), e.innerHTML.replace(si, "");
      }
    };
  var li = Object.freeze({
    __proto__: null
  });
  var ci = /*#__PURE__*/function (_V9) {
    _inherits(ci, _V9);
    function ci(t, e) {
      var _this39;
      _classCallCheck(this, ci);
      _this39 = _callSuper(this, ci, arguments), _this39.attachmentManager = t, _this39.attachment = e, _this39.id = _this39.attachment.id, _this39.file = _this39.attachment.file;
      return _this39;
    }
    _createClass(ci, [{
      key: "remove",
      value: function remove() {
        return this.attachmentManager.requestRemovalOfAttachment(this.attachment);
      }
    }]);
    return ci;
  }(V);
  ci.proxyMethod("attachment.getAttribute"), ci.proxyMethod("attachment.hasAttribute"), ci.proxyMethod("attachment.setAttribute"), ci.proxyMethod("attachment.getAttributes"), ci.proxyMethod("attachment.setAttributes"), ci.proxyMethod("attachment.isPending"), ci.proxyMethod("attachment.isPreviewable"), ci.proxyMethod("attachment.getURL"), ci.proxyMethod("attachment.getHref"), ci.proxyMethod("attachment.getFilename"), ci.proxyMethod("attachment.getFilesize"), ci.proxyMethod("attachment.getFormattedFilesize"), ci.proxyMethod("attachment.getExtension"), ci.proxyMethod("attachment.getContentType"), ci.proxyMethod("attachment.getFile"), ci.proxyMethod("attachment.setFile"), ci.proxyMethod("attachment.releaseFile"), ci.proxyMethod("attachment.getUploadProgress"), ci.proxyMethod("attachment.setUploadProgress");
  var ui = /*#__PURE__*/function (_V10) {
    _inherits(ui, _V10);
    function ui() {
      var _this40;
      _classCallCheck(this, ui);
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      _this40 = _callSuper(this, ui, arguments), _this40.managedAttachments = {}, Array.from(t).forEach(function (t) {
        _this40.manageAttachment(t);
      });
      return _this40;
    }
    _createClass(ui, [{
      key: "getAttachments",
      value: function getAttachments() {
        var t = [];
        for (var _e36 in this.managedAttachments) {
          var _i30 = this.managedAttachments[_e36];
          t.push(_i30);
        }
        return t;
      }
    }, {
      key: "manageAttachment",
      value: function manageAttachment(t) {
        return this.managedAttachments[t.id] || (this.managedAttachments[t.id] = new ci(this, t)), this.managedAttachments[t.id];
      }
    }, {
      key: "attachmentIsManaged",
      value: function attachmentIsManaged(t) {
        return t.id in this.managedAttachments;
      }
    }, {
      key: "requestRemovalOfAttachment",
      value: function requestRemovalOfAttachment(t) {
        var e, i;
        if (this.attachmentIsManaged(t)) return null === (e = this.delegate) || void 0 === e || null === (i = e.attachmentManagerDidRequestRemovalOfAttachment) || void 0 === i ? void 0 : i.call(e, t);
      }
    }, {
      key: "unmanageAttachment",
      value: function unmanageAttachment(t) {
        var e = this.managedAttachments[t.id];
        return delete this.managedAttachments[t.id], e;
      }
    }]);
    return ui;
  }(V);
  var hi = /*#__PURE__*/function () {
    function hi(t) {
      _classCallCheck(this, hi);
      this.composition = t, this.document = this.composition.document;
      var e = this.composition.getSelectedRange();
      this.startPosition = e[0], this.endPosition = e[1], this.startLocation = this.document.locationFromPosition(this.startPosition), this.endLocation = this.document.locationFromPosition(this.endPosition), this.block = this.document.getBlockAtIndex(this.endLocation.index), this.breaksOnReturn = this.block.breaksOnReturn(), this.previousCharacter = this.block.text.getStringAtPosition(this.endLocation.offset - 1), this.nextCharacter = this.block.text.getStringAtPosition(this.endLocation.offset);
    }
    _createClass(hi, [{
      key: "shouldInsertBlockBreak",
      value: function shouldInsertBlockBreak() {
        return this.block.hasAttributes() && this.block.isListItem() && !this.block.isEmpty() ? 0 !== this.startLocation.offset : this.breaksOnReturn && "\n" !== this.nextCharacter;
      }
    }, {
      key: "shouldBreakFormattedBlock",
      value: function shouldBreakFormattedBlock() {
        return this.block.hasAttributes() && !this.block.isListItem() && (this.breaksOnReturn && "\n" === this.nextCharacter || "\n" === this.previousCharacter);
      }
    }, {
      key: "shouldDecreaseListLevel",
      value: function shouldDecreaseListLevel() {
        return this.block.hasAttributes() && this.block.isListItem() && this.block.isEmpty();
      }
    }, {
      key: "shouldPrependListItem",
      value: function shouldPrependListItem() {
        return this.block.isListItem() && 0 === this.startLocation.offset && !this.block.isEmpty();
      }
    }, {
      key: "shouldRemoveLastBlockAttribute",
      value: function shouldRemoveLastBlockAttribute() {
        return this.block.hasAttributes() && !this.block.isListItem() && this.block.isEmpty();
      }
    }]);
    return hi;
  }();
  var di = /*#__PURE__*/function (_V11) {
    _inherits(di, _V11);
    function di() {
      var _this41;
      _classCallCheck(this, di);
      _this41 = _callSuper(this, di, arguments), _this41.document = new qe(), _this41.attachments = [], _this41.currentAttributes = {}, _this41.revision = 0;
      return _this41;
    }
    _createClass(di, [{
      key: "setDocument",
      value: function setDocument(t) {
        var e, i;
        if (!t.isEqualTo(this.document)) return this.document = t, this.refreshAttachments(), this.revision++, null === (e = this.delegate) || void 0 === e || null === (i = e.compositionDidChangeDocument) || void 0 === i ? void 0 : i.call(e, t);
      }
    }, {
      key: "getSnapshot",
      value: function getSnapshot() {
        return {
          document: this.document,
          selectedRange: this.getSelectedRange()
        };
      }
    }, {
      key: "loadSnapshot",
      value: function loadSnapshot(t) {
        var e, i, n, r;
        var o = t.document,
          s = t.selectedRange;
        return null === (e = this.delegate) || void 0 === e || null === (i = e.compositionWillLoadSnapshot) || void 0 === i || i.call(e), this.setDocument(null != o ? o : new qe()), this.setSelection(null != s ? s : [0, 0]), null === (n = this.delegate) || void 0 === n || null === (r = n.compositionDidLoadSnapshot) || void 0 === r ? void 0 : r.call(n);
      }
    }, {
      key: "insertText",
      value: function insertText(t) {
        var _ref12 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            updatePosition: !0
          },
          e = _ref12.updatePosition;
        var i = this.getSelectedRange();
        this.setDocument(this.document.insertTextAtRange(t, i));
        var n = i[0],
          r = n + t.getLength();
        return e && this.setSelection(r), this.notifyDelegateOfInsertionAtRange([n, r]);
      }
    }, {
      key: "insertBlock",
      value: function insertBlock() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Te();
        var e = new qe([t]);
        return this.insertDocument(e);
      }
    }, {
      key: "insertDocument",
      value: function insertDocument() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new qe();
        var e = this.getSelectedRange();
        this.setDocument(this.document.insertDocumentAtRange(t, e));
        var i = e[0],
          n = i + t.getLength();
        return this.setSelection(n), this.notifyDelegateOfInsertionAtRange([i, n]);
      }
    }, {
      key: "insertString",
      value: function insertString(t, e) {
        var i = this.getCurrentTextAttributes(),
          n = we.textForStringWithAttributes(t, i);
        return this.insertText(n, e);
      }
    }, {
      key: "insertBlockBreak",
      value: function insertBlockBreak() {
        var t = this.getSelectedRange();
        this.setDocument(this.document.insertBlockBreakAtRange(t));
        var e = t[0],
          i = e + 1;
        return this.setSelection(i), this.notifyDelegateOfInsertionAtRange([e, i]);
      }
    }, {
      key: "insertLineBreak",
      value: function insertLineBreak() {
        var t = new hi(this);
        if (t.shouldDecreaseListLevel()) return this.decreaseListLevel(), this.setSelection(t.startPosition);
        if (t.shouldPrependListItem()) {
          var _e37 = new qe([t.block.copyWithoutText()]);
          return this.insertDocument(_e37);
        }
        return t.shouldInsertBlockBreak() ? this.insertBlockBreak() : t.shouldRemoveLastBlockAttribute() ? this.removeLastBlockAttribute() : t.shouldBreakFormattedBlock() ? this.breakFormattedBlock(t) : this.insertString("\n");
      }
    }, {
      key: "insertHTML",
      value: function insertHTML(t) {
        var e = $e.parse(t).getDocument(),
          i = this.getSelectedRange();
        this.setDocument(this.document.mergeDocumentAtRange(e, i));
        var n = i[0],
          r = n + e.getLength() - 1;
        return this.setSelection(r), this.notifyDelegateOfInsertionAtRange([n, r]);
      }
    }, {
      key: "replaceHTML",
      value: function replaceHTML(t) {
        var e = $e.parse(t).getDocument().copyUsingObjectsFromDocument(this.document),
          i = this.getLocationRange({
            strict: !1
          }),
          n = this.document.rangeFromLocationRange(i);
        return this.setDocument(e), this.setSelection(n);
      }
    }, {
      key: "insertFile",
      value: function insertFile(t) {
        return this.insertFiles([t]);
      }
    }, {
      key: "insertFiles",
      value: function insertFiles(t) {
        var _this42 = this;
        var e = [];
        return Array.from(t).forEach(function (t) {
          var i;
          if (null !== (i = _this42.delegate) && void 0 !== i && i.compositionShouldAcceptFile(t)) {
            var _i31 = Ce.attachmentForFile(t);
            e.push(_i31);
          }
        }), this.insertAttachments(e);
      }
    }, {
      key: "insertAttachment",
      value: function insertAttachment(t) {
        return this.insertAttachments([t]);
      }
    }, {
      key: "insertAttachments",
      value: function insertAttachments(t) {
        var _this43 = this;
        var e = new we();
        return Array.from(t).forEach(function (t) {
          var n;
          var r = t.getType(),
            o = null === (n = i[r]) || void 0 === n ? void 0 : n.presentation,
            s = _this43.getCurrentTextAttributes();
          o && (s.presentation = o);
          var a = we.textForAttachmentWithAttributes(t, s);
          e = e.appendText(a);
        }), this.insertText(e);
      }
    }, {
      key: "shouldManageDeletingInDirection",
      value: function shouldManageDeletingInDirection(t) {
        var e = this.getLocationRange();
        if (Lt(e)) {
          if ("backward" === t && 0 === e[0].offset) return !0;
          if (this.shouldManageMovingCursorInDirection(t)) return !0;
        } else if (e[0].index !== e[1].index) return !0;
        return !1;
      }
    }, {
      key: "deleteInDirection",
      value: function deleteInDirection(t) {
        var e,
          i,
          n,
          _ref13 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = _ref13.length;
        var o = this.getLocationRange();
        var s = this.getSelectedRange();
        var a = Lt(s);
        if (a ? i = "backward" === t && 0 === o[0].offset : n = o[0].index !== o[1].index, i && this.canDecreaseBlockAttributeLevel()) {
          var _t38 = this.getBlock();
          if (_t38.isListItem() ? this.decreaseListLevel() : this.decreaseBlockAttributeLevel(), this.setSelection(s[0]), _t38.isEmpty()) return !1;
        }
        return a && (s = this.getExpandedRangeInDirection(t, {
          length: r
        }), "backward" === t && (e = this.getAttachmentAtRange(s))), e ? (this.editAttachment(e), !1) : (this.setDocument(this.document.removeTextAtRange(s)), this.setSelection(s[0]), !i && !n && void 0);
      }
    }, {
      key: "moveTextFromRange",
      value: function moveTextFromRange(t) {
        var _Array$from9 = Array.from(this.getSelectedRange()),
          _Array$from10 = _slicedToArray(_Array$from9, 1),
          e = _Array$from10[0];
        return this.setDocument(this.document.moveTextFromRangeToPosition(t, e)), this.setSelection(e);
      }
    }, {
      key: "removeAttachment",
      value: function removeAttachment(t) {
        var e = this.document.getRangeOfAttachment(t);
        if (e) return this.stopEditingAttachment(), this.setDocument(this.document.removeTextAtRange(e)), this.setSelection(e[0]);
      }
    }, {
      key: "removeLastBlockAttribute",
      value: function removeLastBlockAttribute() {
        var _Array$from11 = Array.from(this.getSelectedRange()),
          _Array$from12 = _slicedToArray(_Array$from11, 2),
          t = _Array$from12[0],
          e = _Array$from12[1],
          i = this.document.getBlockAtPosition(e);
        return this.removeCurrentAttribute(i.getLastAttribute()), this.setSelection(t);
      }
    }, {
      key: "insertPlaceholder",
      value: function insertPlaceholder() {
        return this.placeholderPosition = this.getPosition(), this.insertString(" ");
      }
    }, {
      key: "selectPlaceholder",
      value: function selectPlaceholder() {
        if (null != this.placeholderPosition) return this.setSelectedRange([this.placeholderPosition, this.placeholderPosition + " ".length]), this.getSelectedRange();
      }
    }, {
      key: "forgetPlaceholder",
      value: function forgetPlaceholder() {
        this.placeholderPosition = null;
      }
    }, {
      key: "hasCurrentAttribute",
      value: function hasCurrentAttribute(t) {
        var e = this.currentAttributes[t];
        return null != e && !1 !== e;
      }
    }, {
      key: "toggleCurrentAttribute",
      value: function toggleCurrentAttribute(t) {
        var e = !this.currentAttributes[t];
        return e ? this.setCurrentAttribute(t, e) : this.removeCurrentAttribute(t);
      }
    }, {
      key: "canSetCurrentAttribute",
      value: function canSetCurrentAttribute(t) {
        return dt(t) ? this.canSetCurrentBlockAttribute(t) : this.canSetCurrentTextAttribute(t);
      }
    }, {
      key: "canSetCurrentTextAttribute",
      value: function canSetCurrentTextAttribute(t) {
        var e = this.getSelectedDocument();
        if (e) {
          for (var _i32 = 0, _Array$from13 = Array.from(e.getAttachments()); _i32 < _Array$from13.length; _i32++) {
            var _t39 = _Array$from13[_i32];
            if (!_t39.hasContent()) return !1;
          }
          return !0;
        }
      }
    }, {
      key: "canSetCurrentBlockAttribute",
      value: function canSetCurrentBlockAttribute(t) {
        var e = this.getBlock();
        if (e) return !e.isTerminalBlock();
      }
    }, {
      key: "setCurrentAttribute",
      value: function setCurrentAttribute(t, e) {
        return dt(t) ? this.setBlockAttribute(t, e) : (this.setTextAttribute(t, e), this.currentAttributes[t] = e, this.notifyDelegateOfCurrentAttributesChange());
      }
    }, {
      key: "setTextAttribute",
      value: function setTextAttribute(t, e) {
        var i = this.getSelectedRange();
        if (!i) return;
        var _Array$from14 = Array.from(i),
          _Array$from15 = _slicedToArray(_Array$from14, 2),
          n = _Array$from15[0],
          r = _Array$from15[1];
        if (n !== r) return this.setDocument(this.document.addAttributeAtRange(t, e, i));
        if ("href" === t) {
          var _t40 = we.textForStringWithAttributes(e, {
            href: e
          });
          return this.insertText(_t40);
        }
      }
    }, {
      key: "setBlockAttribute",
      value: function setBlockAttribute(t, e) {
        var i = this.getSelectedRange();
        if (this.canSetCurrentAttribute(t)) return this.setDocument(this.document.applyBlockAttributeAtRange(t, e, i)), this.setSelection(i);
      }
    }, {
      key: "removeCurrentAttribute",
      value: function removeCurrentAttribute(t) {
        return dt(t) ? (this.removeBlockAttribute(t), this.updateCurrentAttributes()) : (this.removeTextAttribute(t), delete this.currentAttributes[t], this.notifyDelegateOfCurrentAttributesChange());
      }
    }, {
      key: "removeTextAttribute",
      value: function removeTextAttribute(t) {
        var e = this.getSelectedRange();
        if (e) return this.setDocument(this.document.removeAttributeAtRange(t, e));
      }
    }, {
      key: "removeBlockAttribute",
      value: function removeBlockAttribute(t) {
        var e = this.getSelectedRange();
        if (e) return this.setDocument(this.document.removeAttributeAtRange(t, e));
      }
    }, {
      key: "canDecreaseNestingLevel",
      value: function canDecreaseNestingLevel() {
        var t;
        return (null === (t = this.getBlock()) || void 0 === t ? void 0 : t.getNestingLevel()) > 0;
      }
    }, {
      key: "canIncreaseNestingLevel",
      value: function canIncreaseNestingLevel() {
        var t;
        var e = this.getBlock();
        if (e) {
          if (null === (t = dt(e.getLastNestableAttribute())) || void 0 === t || !t.listAttribute) return e.getNestingLevel() > 0;
          {
            var _t41 = this.getPreviousBlock();
            if (_t41) return function () {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
              return nt((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).slice(0, t.length), t);
            }(_t41.getListItemAttributes(), e.getListItemAttributes());
          }
        }
      }
    }, {
      key: "decreaseNestingLevel",
      value: function decreaseNestingLevel() {
        var t = this.getBlock();
        if (t) return this.setDocument(this.document.replaceBlock(t, t.decreaseNestingLevel()));
      }
    }, {
      key: "increaseNestingLevel",
      value: function increaseNestingLevel() {
        var t = this.getBlock();
        if (t) return this.setDocument(this.document.replaceBlock(t, t.increaseNestingLevel()));
      }
    }, {
      key: "canDecreaseBlockAttributeLevel",
      value: function canDecreaseBlockAttributeLevel() {
        var t;
        return (null === (t = this.getBlock()) || void 0 === t ? void 0 : t.getAttributeLevel()) > 0;
      }
    }, {
      key: "decreaseBlockAttributeLevel",
      value: function decreaseBlockAttributeLevel() {
        var t;
        var e = null === (t = this.getBlock()) || void 0 === t ? void 0 : t.getLastAttribute();
        if (e) return this.removeCurrentAttribute(e);
      }
    }, {
      key: "decreaseListLevel",
      value: function decreaseListLevel() {
        var _Array$from16 = Array.from(this.getSelectedRange()),
          _Array$from17 = _slicedToArray(_Array$from16, 1),
          t = _Array$from17[0];
        var _this$document$locati = this.document.locationFromPosition(t),
          e = _this$document$locati.index;
        var i = e;
        var n = this.getBlock().getAttributeLevel();
        var r = this.document.getBlockAtIndex(i + 1);
        for (; r && r.isListItem() && !(r.getAttributeLevel() <= n);) i++, r = this.document.getBlockAtIndex(i + 1);
        t = this.document.positionFromLocation({
          index: e,
          offset: 0
        });
        var o = this.document.positionFromLocation({
          index: i,
          offset: 0
        });
        return this.setDocument(this.document.removeLastListAttributeAtRange([t, o]));
      }
    }, {
      key: "updateCurrentAttributes",
      value: function updateCurrentAttributes() {
        var _this44 = this;
        var t = this.getSelectedRange({
          ignoreLock: !0
        });
        if (t) {
          var _e38 = this.document.getCommonAttributesAtRange(t);
          if (Array.from(ht()).forEach(function (t) {
            _e38[t] || _this44.canSetCurrentAttribute(t) || (_e38[t] = !1);
          }), !Et(_e38, this.currentAttributes)) return this.currentAttributes = _e38, this.notifyDelegateOfCurrentAttributesChange();
        }
      }
    }, {
      key: "getCurrentAttributes",
      value: function getCurrentAttributes() {
        return h.call({}, this.currentAttributes);
      }
    }, {
      key: "getCurrentTextAttributes",
      value: function getCurrentTextAttributes() {
        var t = {};
        for (var _e39 in this.currentAttributes) {
          var _i33 = this.currentAttributes[_e39];
          !1 !== _i33 && mt(_e39) && (t[_e39] = _i33);
        }
        return t;
      }
    }, {
      key: "freezeSelection",
      value: function freezeSelection() {
        return this.setCurrentAttribute("frozen", !0);
      }
    }, {
      key: "thawSelection",
      value: function thawSelection() {
        return this.removeCurrentAttribute("frozen");
      }
    }, {
      key: "hasFrozenSelection",
      value: function hasFrozenSelection() {
        return this.hasCurrentAttribute("frozen");
      }
    }, {
      key: "setSelection",
      value: function setSelection(t) {
        var e;
        var i = this.document.locationRangeFromRange(t);
        return null === (e = this.delegate) || void 0 === e ? void 0 : e.compositionDidRequestChangingSelectionToLocationRange(i);
      }
    }, {
      key: "getSelectedRange",
      value: function getSelectedRange() {
        var t = this.getLocationRange();
        if (t) return this.document.rangeFromLocationRange(t);
      }
    }, {
      key: "setSelectedRange",
      value: function setSelectedRange(t) {
        var e = this.document.locationRangeFromRange(t);
        return this.getSelectionManager().setLocationRange(e);
      }
    }, {
      key: "getPosition",
      value: function getPosition() {
        var t = this.getLocationRange();
        if (t) return this.document.positionFromLocation(t[0]);
      }
    }, {
      key: "getLocationRange",
      value: function getLocationRange(t) {
        return this.targetLocationRange ? this.targetLocationRange : this.getSelectionManager().getLocationRange(t) || kt({
          index: 0,
          offset: 0
        });
      }
    }, {
      key: "withTargetLocationRange",
      value: function withTargetLocationRange(t, e) {
        var i;
        this.targetLocationRange = t;
        try {
          i = e();
        } finally {
          this.targetLocationRange = null;
        }
        return i;
      }
    }, {
      key: "withTargetRange",
      value: function withTargetRange(t, e) {
        var i = this.document.locationRangeFromRange(t);
        return this.withTargetLocationRange(i, e);
      }
    }, {
      key: "withTargetDOMRange",
      value: function withTargetDOMRange(t, e) {
        var i = this.createLocationRangeFromDOMRange(t, {
          strict: !1
        });
        return this.withTargetLocationRange(i, e);
      }
    }, {
      key: "getExpandedRangeInDirection",
      value: function getExpandedRangeInDirection(t) {
        var _ref14 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          e = _ref14.length,
          _Array$from18 = Array.from(this.getSelectedRange()),
          _Array$from19 = _slicedToArray(_Array$from18, 2),
          i = _Array$from19[0],
          n = _Array$from19[1];
        return "backward" === t ? e ? i -= e : i = this.translateUTF16PositionFromOffset(i, -1) : e ? n += e : n = this.translateUTF16PositionFromOffset(n, 1), kt([i, n]);
      }
    }, {
      key: "shouldManageMovingCursorInDirection",
      value: function shouldManageMovingCursorInDirection(t) {
        if (this.editingAttachment) return !0;
        var e = this.getExpandedRangeInDirection(t);
        return null != this.getAttachmentAtRange(e);
      }
    }, {
      key: "moveCursorInDirection",
      value: function moveCursorInDirection(t) {
        var e, i;
        if (this.editingAttachment) i = this.document.getRangeOfAttachment(this.editingAttachment);else {
          var _n20 = this.getSelectedRange();
          i = this.getExpandedRangeInDirection(t), e = !Dt(_n20, i);
        }
        if ("backward" === t ? this.setSelectedRange(i[0]) : this.setSelectedRange(i[1]), e) {
          var _t42 = this.getAttachmentAtRange(i);
          if (_t42) return this.editAttachment(_t42);
        }
      }
    }, {
      key: "expandSelectionInDirection",
      value: function expandSelectionInDirection(t) {
        var _ref15 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          e = _ref15.length;
        var i = this.getExpandedRangeInDirection(t, {
          length: e
        });
        return this.setSelectedRange(i);
      }
    }, {
      key: "expandSelectionForEditing",
      value: function expandSelectionForEditing() {
        if (this.hasCurrentAttribute("href")) return this.expandSelectionAroundCommonAttribute("href");
      }
    }, {
      key: "expandSelectionAroundCommonAttribute",
      value: function expandSelectionAroundCommonAttribute(t) {
        var e = this.getPosition(),
          i = this.document.getRangeOfCommonAttributeAtPosition(t, e);
        return this.setSelectedRange(i);
      }
    }, {
      key: "selectionContainsAttachments",
      value: function selectionContainsAttachments() {
        var t;
        return (null === (t = this.getSelectedAttachments()) || void 0 === t ? void 0 : t.length) > 0;
      }
    }, {
      key: "selectionIsInCursorTarget",
      value: function selectionIsInCursorTarget() {
        return this.editingAttachment || this.positionIsCursorTarget(this.getPosition());
      }
    }, {
      key: "positionIsCursorTarget",
      value: function positionIsCursorTarget(t) {
        var e = this.document.locationFromPosition(t);
        if (e) return this.locationIsCursorTarget(e);
      }
    }, {
      key: "positionIsBlockBreak",
      value: function positionIsBlockBreak(t) {
        var e;
        return null === (e = this.document.getPieceAtPosition(t)) || void 0 === e ? void 0 : e.isBlockBreak();
      }
    }, {
      key: "getSelectedDocument",
      value: function getSelectedDocument() {
        var t = this.getSelectedRange();
        if (t) return this.document.getDocumentAtRange(t);
      }
    }, {
      key: "getSelectedAttachments",
      value: function getSelectedAttachments() {
        var t;
        return null === (t = this.getSelectedDocument()) || void 0 === t ? void 0 : t.getAttachments();
      }
    }, {
      key: "getAttachments",
      value: function getAttachments() {
        return this.attachments.slice(0);
      }
    }, {
      key: "refreshAttachments",
      value: function refreshAttachments() {
        var _this45 = this;
        var t = this.document.getAttachments(),
          _ref16 = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            var i = [],
              n = [],
              r = new Set();
            t.forEach(function (t) {
              r.add(t);
            });
            var o = new Set();
            return e.forEach(function (t) {
              o.add(t), r.has(t) || i.push(t);
            }), t.forEach(function (t) {
              o.has(t) || n.push(t);
            }), {
              added: i,
              removed: n
            };
          }(this.attachments, t),
          e = _ref16.added,
          i = _ref16.removed;
        return this.attachments = t, Array.from(i).forEach(function (t) {
          var e, i;
          t.delegate = null, null === (e = _this45.delegate) || void 0 === e || null === (i = e.compositionDidRemoveAttachment) || void 0 === i || i.call(e, t);
        }), function () {
          var t = [];
          return Array.from(e).forEach(function (e) {
            var i, n;
            e.delegate = _this45, t.push(null === (i = _this45.delegate) || void 0 === i || null === (n = i.compositionDidAddAttachment) || void 0 === n ? void 0 : n.call(i, e));
          }), t;
        }();
      }
    }, {
      key: "attachmentDidChangeAttributes",
      value: function attachmentDidChangeAttributes(t) {
        var e, i;
        return this.revision++, null === (e = this.delegate) || void 0 === e || null === (i = e.compositionDidEditAttachment) || void 0 === i ? void 0 : i.call(e, t);
      }
    }, {
      key: "attachmentDidChangePreviewURL",
      value: function attachmentDidChangePreviewURL(t) {
        var e, i;
        return this.revision++, null === (e = this.delegate) || void 0 === e || null === (i = e.compositionDidChangeAttachmentPreviewURL) || void 0 === i ? void 0 : i.call(e, t);
      }
    }, {
      key: "editAttachment",
      value: function editAttachment(t, e) {
        var i, n;
        if (t !== this.editingAttachment) return this.stopEditingAttachment(), this.editingAttachment = t, null === (i = this.delegate) || void 0 === i || null === (n = i.compositionDidStartEditingAttachment) || void 0 === n ? void 0 : n.call(i, this.editingAttachment, e);
      }
    }, {
      key: "stopEditingAttachment",
      value: function stopEditingAttachment() {
        var t, e;
        this.editingAttachment && (null === (t = this.delegate) || void 0 === t || null === (e = t.compositionDidStopEditingAttachment) || void 0 === e || e.call(t, this.editingAttachment), this.editingAttachment = null);
      }
    }, {
      key: "updateAttributesForAttachment",
      value: function updateAttributesForAttachment(t, e) {
        return this.setDocument(this.document.updateAttributesForAttachment(t, e));
      }
    }, {
      key: "removeAttributeForAttachment",
      value: function removeAttributeForAttachment(t, e) {
        return this.setDocument(this.document.removeAttributeForAttachment(t, e));
      }
    }, {
      key: "breakFormattedBlock",
      value: function breakFormattedBlock(t) {
        var e = t.document;
        var i = t.block;
        var n = t.startPosition,
          r = [n - 1, n];
        i.getBlockBreakPosition() === t.startLocation.offset ? (i.breaksOnReturn() && "\n" === t.nextCharacter ? n += 1 : e = e.removeTextAtRange(r), r = [n, n]) : "\n" === t.nextCharacter ? "\n" === t.previousCharacter ? r = [n - 1, n + 1] : (r = [n, n + 1], n += 1) : t.startLocation.offset - 1 != 0 && (n += 1);
        var o = new qe([i.removeLastAttribute().copyWithoutText()]);
        return this.setDocument(e.insertDocumentAtRange(o, r)), this.setSelection(n);
      }
    }, {
      key: "getPreviousBlock",
      value: function getPreviousBlock() {
        var t = this.getLocationRange();
        if (t) {
          var _e40 = t[0].index;
          if (_e40 > 0) return this.document.getBlockAtIndex(_e40 - 1);
        }
      }
    }, {
      key: "getBlock",
      value: function getBlock() {
        var t = this.getLocationRange();
        if (t) return this.document.getBlockAtIndex(t[0].index);
      }
    }, {
      key: "getAttachmentAtRange",
      value: function getAttachmentAtRange(t) {
        var e = this.document.getDocumentAtRange(t);
        if (e.toString() === "".concat("￼", "\n")) return e.getAttachments()[0];
      }
    }, {
      key: "notifyDelegateOfCurrentAttributesChange",
      value: function notifyDelegateOfCurrentAttributesChange() {
        var t, e;
        return null === (t = this.delegate) || void 0 === t || null === (e = t.compositionDidChangeCurrentAttributes) || void 0 === e ? void 0 : e.call(t, this.currentAttributes);
      }
    }, {
      key: "notifyDelegateOfInsertionAtRange",
      value: function notifyDelegateOfInsertionAtRange(t) {
        var e, i;
        return null === (e = this.delegate) || void 0 === e || null === (i = e.compositionDidPerformInsertionAtRange) || void 0 === i ? void 0 : i.call(e, t);
      }
    }, {
      key: "translateUTF16PositionFromOffset",
      value: function translateUTF16PositionFromOffset(t, e) {
        var i = this.document.toUTF16String(),
          n = i.offsetFromUCS2Offset(t);
        return i.offsetToUCS2Offset(n + e);
      }
    }]);
    return di;
  }(V);
  di.proxyMethod("getSelectionManager().getPointRange"), di.proxyMethod("getSelectionManager().setLocationRangeFromPointRange"), di.proxyMethod("getSelectionManager().createLocationRangeFromDOMRange"), di.proxyMethod("getSelectionManager().locationIsCursorTarget"), di.proxyMethod("getSelectionManager().selectionIsExpanded"), di.proxyMethod("delegate?.getSelectionManager");
  var gi = /*#__PURE__*/function (_V12) {
    _inherits(gi, _V12);
    function gi(t) {
      var _this46;
      _classCallCheck(this, gi);
      _this46 = _callSuper(this, gi, arguments), _this46.composition = t, _this46.undoEntries = [], _this46.redoEntries = [];
      return _this46;
    }
    _createClass(gi, [{
      key: "recordUndoEntry",
      value: function recordUndoEntry(t) {
        var _ref17 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          e = _ref17.context,
          i = _ref17.consolidatable;
        var n = this.undoEntries.slice(-1)[0];
        if (!i || !mi(n, t, e)) {
          var _i34 = this.createEntry({
            description: t,
            context: e
          });
          this.undoEntries.push(_i34), this.redoEntries = [];
        }
      }
    }, {
      key: "undo",
      value: function undo() {
        var t = this.undoEntries.pop();
        if (t) {
          var _e41 = this.createEntry(t);
          return this.redoEntries.push(_e41), this.composition.loadSnapshot(t.snapshot);
        }
      }
    }, {
      key: "redo",
      value: function redo() {
        var t = this.redoEntries.pop();
        if (t) {
          var _e42 = this.createEntry(t);
          return this.undoEntries.push(_e42), this.composition.loadSnapshot(t.snapshot);
        }
      }
    }, {
      key: "canUndo",
      value: function canUndo() {
        return this.undoEntries.length > 0;
      }
    }, {
      key: "canRedo",
      value: function canRedo() {
        return this.redoEntries.length > 0;
      }
    }, {
      key: "createEntry",
      value: function createEntry() {
        var _ref18 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = _ref18.description,
          e = _ref18.context;
        return {
          description: null == t ? void 0 : t.toString(),
          context: JSON.stringify(e),
          snapshot: this.composition.getSnapshot()
        };
      }
    }]);
    return gi;
  }(V);
  var mi = function mi(t, e, i) {
      return (null == t ? void 0 : t.description) === (null == e ? void 0 : e.toString()) && (null == t ? void 0 : t.context) === JSON.stringify(i);
    },
    pi = "attachmentGallery";
  var fi = /*#__PURE__*/function () {
    function fi(t) {
      _classCallCheck(this, fi);
      this.document = t.document, this.selectedRange = t.selectedRange;
    }
    _createClass(fi, [{
      key: "perform",
      value: function perform() {
        return this.removeBlockAttribute(), this.applyBlockAttribute();
      }
    }, {
      key: "getSnapshot",
      value: function getSnapshot() {
        return {
          document: this.document,
          selectedRange: this.selectedRange
        };
      }
    }, {
      key: "removeBlockAttribute",
      value: function removeBlockAttribute() {
        var _this47 = this;
        return this.findRangesOfBlocks().map(function (t) {
          return _this47.document = _this47.document.removeAttributeAtRange(pi, t);
        });
      }
    }, {
      key: "applyBlockAttribute",
      value: function applyBlockAttribute() {
        var _this48 = this;
        var t = 0;
        this.findRangesOfPieces().forEach(function (e) {
          e[1] - e[0] > 1 && (e[0] += t, e[1] += t, "\n" !== _this48.document.getCharacterAtPosition(e[1]) && (_this48.document = _this48.document.insertBlockBreakAtRange(e[1]), e[1] < _this48.selectedRange[1] && _this48.moveSelectedRangeForward(), e[1]++, t++), 0 !== e[0] && "\n" !== _this48.document.getCharacterAtPosition(e[0] - 1) && (_this48.document = _this48.document.insertBlockBreakAtRange(e[0]), e[0] < _this48.selectedRange[0] && _this48.moveSelectedRangeForward(), e[0]++, t++), _this48.document = _this48.document.applyBlockAttributeAtRange(pi, !0, e));
        });
      }
    }, {
      key: "findRangesOfBlocks",
      value: function findRangesOfBlocks() {
        return this.document.findRangesForBlockAttribute(pi);
      }
    }, {
      key: "findRangesOfPieces",
      value: function findRangesOfPieces() {
        return this.document.findRangesForTextAttribute("presentation", {
          withValue: "gallery"
        });
      }
    }, {
      key: "moveSelectedRangeForward",
      value: function moveSelectedRangeForward() {
        this.selectedRange[0] += 1, this.selectedRange[1] += 1;
      }
    }]);
    return fi;
  }();
  var bi = function bi(t) {
      var e = new fi(t);
      return e.perform(), e.getSnapshot();
    },
    vi = [bi];
  var Ai = /*#__PURE__*/function () {
    function Ai(t, e, i) {
      _classCallCheck(this, Ai);
      this.insertFiles = this.insertFiles.bind(this), this.composition = t, this.selectionManager = e, this.element = i, this.undoManager = new gi(this.composition), this.filters = vi.slice(0);
    }
    _createClass(Ai, [{
      key: "loadDocument",
      value: function loadDocument(t) {
        return this.loadSnapshot({
          document: t,
          selectedRange: [0, 0]
        });
      }
    }, {
      key: "loadHTML",
      value: function loadHTML() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        var e = $e.parse(t, {
          referenceElement: this.element
        }).getDocument();
        return this.loadDocument(e);
      }
    }, {
      key: "loadJSON",
      value: function loadJSON(t) {
        var e = t.document,
          i = t.selectedRange;
        return e = qe.fromJSON(e), this.loadSnapshot({
          document: e,
          selectedRange: i
        });
      }
    }, {
      key: "loadSnapshot",
      value: function loadSnapshot(t) {
        return this.undoManager = new gi(this.composition), this.composition.loadSnapshot(t);
      }
    }, {
      key: "getDocument",
      value: function getDocument() {
        return this.composition.document;
      }
    }, {
      key: "getSelectedDocument",
      value: function getSelectedDocument() {
        return this.composition.getSelectedDocument();
      }
    }, {
      key: "getSnapshot",
      value: function getSnapshot() {
        return this.composition.getSnapshot();
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return this.getSnapshot();
      }
    }, {
      key: "deleteInDirection",
      value: function deleteInDirection(t) {
        return this.composition.deleteInDirection(t);
      }
    }, {
      key: "insertAttachment",
      value: function insertAttachment(t) {
        return this.composition.insertAttachment(t);
      }
    }, {
      key: "insertAttachments",
      value: function insertAttachments(t) {
        return this.composition.insertAttachments(t);
      }
    }, {
      key: "insertDocument",
      value: function insertDocument(t) {
        return this.composition.insertDocument(t);
      }
    }, {
      key: "insertFile",
      value: function insertFile(t) {
        return this.composition.insertFile(t);
      }
    }, {
      key: "insertFiles",
      value: function insertFiles(t) {
        return this.composition.insertFiles(t);
      }
    }, {
      key: "insertHTML",
      value: function insertHTML(t) {
        return this.composition.insertHTML(t);
      }
    }, {
      key: "insertString",
      value: function insertString(t) {
        return this.composition.insertString(t);
      }
    }, {
      key: "insertText",
      value: function insertText(t) {
        return this.composition.insertText(t);
      }
    }, {
      key: "insertLineBreak",
      value: function insertLineBreak() {
        return this.composition.insertLineBreak();
      }
    }, {
      key: "getSelectedRange",
      value: function getSelectedRange() {
        return this.composition.getSelectedRange();
      }
    }, {
      key: "getPosition",
      value: function getPosition() {
        return this.composition.getPosition();
      }
    }, {
      key: "getClientRectAtPosition",
      value: function getClientRectAtPosition(t) {
        var e = this.getDocument().locationRangeFromRange([t, t + 1]);
        return this.selectionManager.getClientRectAtLocationRange(e);
      }
    }, {
      key: "expandSelectionInDirection",
      value: function expandSelectionInDirection(t) {
        return this.composition.expandSelectionInDirection(t);
      }
    }, {
      key: "moveCursorInDirection",
      value: function moveCursorInDirection(t) {
        return this.composition.moveCursorInDirection(t);
      }
    }, {
      key: "setSelectedRange",
      value: function setSelectedRange(t) {
        return this.composition.setSelectedRange(t);
      }
    }, {
      key: "activateAttribute",
      value: function activateAttribute(t) {
        var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.composition.setCurrentAttribute(t, e);
      }
    }, {
      key: "attributeIsActive",
      value: function attributeIsActive(t) {
        return this.composition.hasCurrentAttribute(t);
      }
    }, {
      key: "canActivateAttribute",
      value: function canActivateAttribute(t) {
        return this.composition.canSetCurrentAttribute(t);
      }
    }, {
      key: "deactivateAttribute",
      value: function deactivateAttribute(t) {
        return this.composition.removeCurrentAttribute(t);
      }
    }, {
      key: "canDecreaseNestingLevel",
      value: function canDecreaseNestingLevel() {
        return this.composition.canDecreaseNestingLevel();
      }
    }, {
      key: "canIncreaseNestingLevel",
      value: function canIncreaseNestingLevel() {
        return this.composition.canIncreaseNestingLevel();
      }
    }, {
      key: "decreaseNestingLevel",
      value: function decreaseNestingLevel() {
        if (this.canDecreaseNestingLevel()) return this.composition.decreaseNestingLevel();
      }
    }, {
      key: "increaseNestingLevel",
      value: function increaseNestingLevel() {
        if (this.canIncreaseNestingLevel()) return this.composition.increaseNestingLevel();
      }
    }, {
      key: "canRedo",
      value: function canRedo() {
        return this.undoManager.canRedo();
      }
    }, {
      key: "canUndo",
      value: function canUndo() {
        return this.undoManager.canUndo();
      }
    }, {
      key: "recordUndoEntry",
      value: function recordUndoEntry(t) {
        var _ref19 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          e = _ref19.context,
          i = _ref19.consolidatable;
        return this.undoManager.recordUndoEntry(t, {
          context: e,
          consolidatable: i
        });
      }
    }, {
      key: "redo",
      value: function redo() {
        if (this.canRedo()) return this.undoManager.redo();
      }
    }, {
      key: "undo",
      value: function undo() {
        if (this.canUndo()) return this.undoManager.undo();
      }
    }]);
    return Ai;
  }();
  var xi = /*#__PURE__*/function () {
    function xi(t) {
      _classCallCheck(this, xi);
      this.element = t;
    }
    _createClass(xi, [{
      key: "findLocationFromContainerAndOffset",
      value: function findLocationFromContainerAndOffset(t, e) {
        var _ref20 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
            strict: !0
          },
          i = _ref20.strict,
          n = 0,
          r = !1;
        var o = {
            index: 0,
            offset: 0
          },
          s = this.findAttachmentElementParentForNode(t);
        s && (t = s.parentNode, e = x(s));
        var a = C(this.element, {
          usingFilter: Si
        });
        for (; a.nextNode();) {
          var _s4 = a.currentNode;
          if (_s4 === t && N(t)) {
            B(_s4) || (o.offset += e);
            break;
          }
          if (_s4.parentNode === t) {
            if (n++ === e) break;
          } else if (!A(t, _s4) && n > 0) break;
          w(_s4, {
            strict: i
          }) ? (r && o.index++, o.offset = 0, r = !0) : o.offset += yi(_s4);
        }
        return o;
      }
    }, {
      key: "findContainerAndOffsetFromLocation",
      value: function findContainerAndOffsetFromLocation(t) {
        var e, i;
        if (0 === t.index && 0 === t.offset) {
          for (e = this.element, i = 0; e.firstChild;) if (e = e.firstChild, L(e)) {
            i = 1;
            break;
          }
          return [e, i];
        }
        var _this$findNodeAndOffs = this.findNodeAndOffsetFromLocation(t),
          _this$findNodeAndOffs2 = _slicedToArray(_this$findNodeAndOffs, 2),
          n = _this$findNodeAndOffs2[0],
          r = _this$findNodeAndOffs2[1];
        if (n) {
          if (N(n)) 0 === yi(n) ? (e = n.parentNode.parentNode, i = x(n.parentNode), B(n, {
            name: "right"
          }) && i++) : (e = n, i = t.offset - r);else {
            if (e = n.parentNode, !w(n.previousSibling) && !L(e)) for (; n === e.lastChild && (n = e, e = e.parentNode, !L(e)););
            i = x(n), 0 !== t.offset && i++;
          }
          return [e, i];
        }
      }
    }, {
      key: "findNodeAndOffsetFromLocation",
      value: function findNodeAndOffsetFromLocation(t) {
        var e,
          i,
          n = 0;
        var _iterator6 = _createForOfIteratorHelper(this.getSignificantNodesForIndex(t.index)),
          _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var _r11 = _step6.value;
            var _o8 = yi(_r11);
            if (t.offset <= n + _o8) if (N(_r11)) {
              if (e = _r11, i = n, t.offset === i && B(e)) break;
            } else e || (e = _r11, i = n);
            if (n += _o8, n > t.offset) break;
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
        return [e, i];
      }
    }, {
      key: "findAttachmentElementParentForNode",
      value: function findAttachmentElementParentForNode(t) {
        for (; t && t !== this.element;) {
          if (P(t)) return t;
          t = t.parentNode;
        }
      }
    }, {
      key: "getSignificantNodesForIndex",
      value: function getSignificantNodesForIndex(t) {
        var e = [],
          i = C(this.element, {
            usingFilter: Ci
          });
        var n = !1;
        for (; i.nextNode();) {
          var _o9 = i.currentNode;
          var r;
          if (T(_o9)) {
            if (null != r ? r++ : r = 0, r === t) n = !0;else if (n) break;
          } else n && e.push(_o9);
        }
        return e;
      }
    }]);
    return xi;
  }();
  var yi = function yi(t) {
      if (t.nodeType === Node.TEXT_NODE) {
        if (B(t)) return 0;
        return t.textContent.length;
      }
      return "br" === R(t) || P(t) ? 1 : 0;
    },
    Ci = function Ci(t) {
      return Ri(t) === NodeFilter.FILTER_ACCEPT ? Si(t) : NodeFilter.FILTER_REJECT;
    },
    Ri = function Ri(t) {
      return I(t) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
    },
    Si = function Si(t) {
      return P(t.parentNode) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
    };
  var Ei = /*#__PURE__*/function () {
    function Ei() {
      _classCallCheck(this, Ei);
    }
    _createClass(Ei, [{
      key: "createDOMRangeFromPoint",
      value: function createDOMRangeFromPoint(t) {
        var e,
          i = t.x,
          n = t.y;
        if (document.caretPositionFromPoint) {
          var _document$caretPositi = document.caretPositionFromPoint(i, n),
            _t43 = _document$caretPositi.offsetNode,
            _r12 = _document$caretPositi.offset;
          return e = document.createRange(), e.setStart(_t43, _r12), e;
        }
        if (document.caretRangeFromPoint) return document.caretRangeFromPoint(i, n);
        if (document.body.createTextRange) {
          var _t44 = Nt();
          try {
            var _t45 = document.body.createTextRange();
            _t45.moveToPoint(i, n), _t45.select();
          } catch (t) {}
          return e = Nt(), Ot(_t44), e;
        }
      }
    }, {
      key: "getClientRectsForDOMRange",
      value: function getClientRectsForDOMRange(t) {
        var e = Array.from(t.getClientRects());
        return [e[0], e[e.length - 1]];
      }
    }]);
    return Ei;
  }();
  var ki = /*#__PURE__*/function (_V13) {
    _inherits(ki, _V13);
    function ki(t) {
      var _this49;
      _classCallCheck(this, ki);
      _this49 = _callSuper(this, ki, arguments), _this49.didMouseDown = _this49.didMouseDown.bind(_assertThisInitialized(_this49)), _this49.selectionDidChange = _this49.selectionDidChange.bind(_assertThisInitialized(_this49)), _this49.element = t, _this49.locationMapper = new xi(_this49.element), _this49.pointMapper = new Ei(), _this49.lockCount = 0, m("mousedown", {
        onElement: _this49.element,
        withCallback: _this49.didMouseDown
      });
      return _this49;
    }
    _createClass(ki, [{
      key: "getLocationRange",
      value: function getLocationRange() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return !1 === t.strict ? this.createLocationRangeFromDOMRange(Nt()) : t.ignoreLock ? this.currentLocationRange : this.lockedLocationRange ? this.lockedLocationRange : this.currentLocationRange;
      }
    }, {
      key: "setLocationRange",
      value: function setLocationRange(t) {
        if (this.lockedLocationRange) return;
        t = kt(t);
        var e = this.createDOMRangeFromLocationRange(t);
        e && (Ot(e), this.updateCurrentLocationRange(t));
      }
    }, {
      key: "setLocationRangeFromPointRange",
      value: function setLocationRangeFromPointRange(t) {
        t = kt(t);
        var e = this.getLocationAtPoint(t[0]),
          i = this.getLocationAtPoint(t[1]);
        this.setLocationRange([e, i]);
      }
    }, {
      key: "getClientRectAtLocationRange",
      value: function getClientRectAtLocationRange(t) {
        var e = this.createDOMRangeFromLocationRange(t);
        if (e) return this.getClientRectsForDOMRange(e)[1];
      }
    }, {
      key: "locationIsCursorTarget",
      value: function locationIsCursorTarget(t) {
        var e = Array.from(this.findNodeAndOffsetFromLocation(t))[0];
        return B(e);
      }
    }, {
      key: "lock",
      value: function lock() {
        0 == this.lockCount++ && (this.updateCurrentLocationRange(), this.lockedLocationRange = this.getLocationRange());
      }
    }, {
      key: "unlock",
      value: function unlock() {
        if (0 == --this.lockCount) {
          var _t46 = this.lockedLocationRange;
          if (this.lockedLocationRange = null, null != _t46) return this.setLocationRange(_t46);
        }
      }
    }, {
      key: "clearSelection",
      value: function clearSelection() {
        var t;
        return null === (t = It()) || void 0 === t ? void 0 : t.removeAllRanges();
      }
    }, {
      key: "selectionIsCollapsed",
      value: function selectionIsCollapsed() {
        var t;
        return !0 === (null === (t = Nt()) || void 0 === t ? void 0 : t.collapsed);
      }
    }, {
      key: "selectionIsExpanded",
      value: function selectionIsExpanded() {
        return !this.selectionIsCollapsed();
      }
    }, {
      key: "createLocationRangeFromDOMRange",
      value: function createLocationRangeFromDOMRange(t, e) {
        if (null == t || !this.domRangeWithinElement(t)) return;
        var i = this.findLocationFromContainerAndOffset(t.startContainer, t.startOffset, e);
        if (!i) return;
        var n = t.collapsed ? void 0 : this.findLocationFromContainerAndOffset(t.endContainer, t.endOffset, e);
        return kt([i, n]);
      }
    }, {
      key: "didMouseDown",
      value: function didMouseDown() {
        return this.pauseTemporarily();
      }
    }, {
      key: "pauseTemporarily",
      value: function pauseTemporarily() {
        var _this50 = this;
        var t;
        this.paused = !0;
        var e = function e() {
            if (_this50.paused = !1, clearTimeout(i), Array.from(t).forEach(function (t) {
              t.destroy();
            }), A(document, _this50.element)) return _this50.selectionDidChange();
          },
          i = setTimeout(e, 200);
        t = ["mousemove", "keydown"].map(function (t) {
          return m(t, {
            onElement: document,
            withCallback: e
          });
        });
      }
    }, {
      key: "selectionDidChange",
      value: function selectionDidChange() {
        if (!this.paused && !v(this.element)) return this.updateCurrentLocationRange();
      }
    }, {
      key: "updateCurrentLocationRange",
      value: function updateCurrentLocationRange(t) {
        var e, i;
        if ((null != t ? t : t = this.createLocationRangeFromDOMRange(Nt())) && !Dt(t, this.currentLocationRange)) return this.currentLocationRange = t, null === (e = this.delegate) || void 0 === e || null === (i = e.locationRangeDidChange) || void 0 === i ? void 0 : i.call(e, this.currentLocationRange.slice(0));
      }
    }, {
      key: "createDOMRangeFromLocationRange",
      value: function createDOMRangeFromLocationRange(t) {
        var e = this.findContainerAndOffsetFromLocation(t[0]),
          i = Lt(t) ? e : this.findContainerAndOffsetFromLocation(t[1]) || e;
        if (null != e && null != i) {
          var _t47 = document.createRange();
          return _t47.setStart.apply(_t47, _toConsumableArray(Array.from(e || []))), _t47.setEnd.apply(_t47, _toConsumableArray(Array.from(i || []))), _t47;
        }
      }
    }, {
      key: "getLocationAtPoint",
      value: function getLocationAtPoint(t) {
        var e = this.createDOMRangeFromPoint(t);
        var i;
        if (e) return null === (i = this.createLocationRangeFromDOMRange(e)) || void 0 === i ? void 0 : i[0];
      }
    }, {
      key: "domRangeWithinElement",
      value: function domRangeWithinElement(t) {
        return t.collapsed ? A(this.element, t.startContainer) : A(this.element, t.startContainer) && A(this.element, t.endContainer);
      }
    }]);
    return ki;
  }(V);
  ki.proxyMethod("locationMapper.findLocationFromContainerAndOffset"), ki.proxyMethod("locationMapper.findContainerAndOffsetFromLocation"), ki.proxyMethod("locationMapper.findNodeAndOffsetFromLocation"), ki.proxyMethod("pointMapper.createDOMRangeFromPoint"), ki.proxyMethod("pointMapper.getClientRectsForDOMRange");
  var Li = Object.freeze({
      __proto__: null,
      Attachment: Ce,
      AttachmentManager: ui,
      AttachmentPiece: Re,
      Block: Te,
      Composition: di,
      Document: qe,
      Editor: Ai,
      HTMLParser: $e,
      HTMLSanitizer: He,
      LineBreakInsertion: hi,
      LocationMapper: xi,
      ManagedAttachment: ci,
      Piece: xe,
      PointMapper: Ei,
      SelectionManager: ki,
      SplittableList: Ee,
      StringPiece: Se,
      Text: we,
      UndoManager: gi
    }),
    Di = Object.freeze({
      __proto__: null
    });
  var wi = U.lang,
    Ti = U.css,
    Fi = U.keyNames,
    Bi = function Bi(t) {
      return function () {
        var e = t.apply(this, arguments);
        e["do"](), this.undos || (this.undos = []), this.undos.push(e.undo);
      };
    };
  var Pi = /*#__PURE__*/function (_V14) {
    _inherits(Pi, _V14);
    function Pi(t, e, i) {
      var _this51;
      _classCallCheck(this, Pi);
      var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      _this51 = _callSuper(this, Pi, arguments), Ae(_assertThisInitialized(_this51), "makeElementMutable", Bi(function () {
        return {
          "do": function _do() {
            _this51.element.dataset.trixMutable = !0;
          },
          undo: function undo() {
            return delete _this51.element.dataset.trixMutable;
          }
        };
      })), Ae(_assertThisInitialized(_this51), "addToolbar", Bi(function () {
        var t = S({
          tagName: "div",
          className: Ti.attachmentToolbar,
          data: {
            trixMutable: !0
          },
          childNodes: S({
            tagName: "div",
            className: "trix-button-row",
            childNodes: S({
              tagName: "span",
              className: "trix-button-group trix-button-group--actions",
              childNodes: S({
                tagName: "button",
                className: "trix-button trix-button--remove",
                textContent: wi.remove,
                attributes: {
                  title: wi.remove
                },
                data: {
                  trixAction: "remove"
                }
              })
            })
          })
        });
        return _this51.attachment.isPreviewable() && t.appendChild(S({
          tagName: "div",
          className: Ti.attachmentMetadataContainer,
          childNodes: S({
            tagName: "span",
            className: Ti.attachmentMetadata,
            childNodes: [S({
              tagName: "span",
              className: Ti.attachmentName,
              textContent: _this51.attachment.getFilename(),
              attributes: {
                title: _this51.attachment.getFilename()
              }
            }), S({
              tagName: "span",
              className: Ti.attachmentSize,
              textContent: _this51.attachment.getFormattedFilesize()
            })]
          })
        })), m("click", {
          onElement: t,
          withCallback: _this51.didClickToolbar
        }), m("click", {
          onElement: t,
          matchingSelector: "[data-trix-action]",
          withCallback: _this51.didClickActionButton
        }), p("trix-attachment-before-toolbar", {
          onElement: _this51.element,
          attributes: {
            toolbar: t,
            attachment: _this51.attachment
          }
        }), {
          "do": function _do() {
            return _this51.element.appendChild(t);
          },
          undo: function undo() {
            return y(t);
          }
        };
      })), Ae(_assertThisInitialized(_this51), "installCaptionEditor", Bi(function () {
        var t = S({
          tagName: "textarea",
          className: Ti.attachmentCaptionEditor,
          attributes: {
            placeholder: wi.captionPlaceholder
          },
          data: {
            trixMutable: !0
          }
        });
        t.value = _this51.attachmentPiece.getCaption();
        var e = t.cloneNode();
        e.classList.add("trix-autoresize-clone"), e.tabIndex = -1;
        var i = function i() {
          e.value = t.value, t.style.height = e.scrollHeight + "px";
        };
        m("input", {
          onElement: t,
          withCallback: i
        }), m("input", {
          onElement: t,
          withCallback: _this51.didInputCaption
        }), m("keydown", {
          onElement: t,
          withCallback: _this51.didKeyDownCaption
        }), m("change", {
          onElement: t,
          withCallback: _this51.didChangeCaption
        }), m("blur", {
          onElement: t,
          withCallback: _this51.didBlurCaption
        });
        var n = _this51.element.querySelector("figcaption"),
          r = n.cloneNode();
        return {
          "do": function _do() {
            if (n.style.display = "none", r.appendChild(t), r.appendChild(e), r.classList.add("".concat(Ti.attachmentCaption, "--editing")), n.parentElement.insertBefore(r, n), i(), _this51.options.editCaption) return Rt(function () {
              return t.focus();
            });
          },
          undo: function undo() {
            y(r), n.style.display = null;
          }
        };
      })), _this51.didClickToolbar = _this51.didClickToolbar.bind(_assertThisInitialized(_this51)), _this51.didClickActionButton = _this51.didClickActionButton.bind(_assertThisInitialized(_this51)), _this51.didKeyDownCaption = _this51.didKeyDownCaption.bind(_assertThisInitialized(_this51)), _this51.didInputCaption = _this51.didInputCaption.bind(_assertThisInitialized(_this51)), _this51.didChangeCaption = _this51.didChangeCaption.bind(_assertThisInitialized(_this51)), _this51.didBlurCaption = _this51.didBlurCaption.bind(_assertThisInitialized(_this51)), _this51.attachmentPiece = t, _this51.element = e, _this51.container = i, _this51.options = n, _this51.attachment = _this51.attachmentPiece.attachment, "a" === R(_this51.element) && (_this51.element = _this51.element.firstChild), _this51.install();
      return _this51;
    }
    _createClass(Pi, [{
      key: "install",
      value: function install() {
        this.makeElementMutable(), this.addToolbar(), this.attachment.isPreviewable() && this.installCaptionEditor();
      }
    }, {
      key: "uninstall",
      value: function uninstall() {
        var t;
        var e = this.undos.pop();
        for (this.savePendingCaption(); e;) e(), e = this.undos.pop();
        null === (t = this.delegate) || void 0 === t || t.didUninstallAttachmentEditor(this);
      }
    }, {
      key: "savePendingCaption",
      value: function savePendingCaption() {
        if (this.pendingCaption) {
          var _r13 = this.pendingCaption;
          var t, e, i, n;
          if (this.pendingCaption = null, _r13) null === (t = this.delegate) || void 0 === t || null === (e = t.attachmentEditorDidRequestUpdatingAttributesForAttachment) || void 0 === e || e.call(t, {
            caption: _r13
          }, this.attachment);else null === (i = this.delegate) || void 0 === i || null === (n = i.attachmentEditorDidRequestRemovingAttributeForAttachment) || void 0 === n || n.call(i, "caption", this.attachment);
        }
      }
    }, {
      key: "didClickToolbar",
      value: function didClickToolbar(t) {
        return t.preventDefault(), t.stopPropagation();
      }
    }, {
      key: "didClickActionButton",
      value: function didClickActionButton(t) {
        var e;
        if ("remove" === t.target.getAttribute("data-trix-action")) return null === (e = this.delegate) || void 0 === e ? void 0 : e.attachmentEditorDidRequestRemovalOfAttachment(this.attachment);
      }
    }, {
      key: "didKeyDownCaption",
      value: function didKeyDownCaption(t) {
        var e, i;
        if ("return" === Fi[t.keyCode]) return t.preventDefault(), this.savePendingCaption(), null === (e = this.delegate) || void 0 === e || null === (i = e.attachmentEditorDidRequestDeselectingAttachment) || void 0 === i ? void 0 : i.call(e, this.attachment);
      }
    }, {
      key: "didInputCaption",
      value: function didInputCaption(t) {
        this.pendingCaption = t.target.value.replace(/\s/g, " ").trim();
      }
    }, {
      key: "didChangeCaption",
      value: function didChangeCaption(t) {
        return this.savePendingCaption();
      }
    }, {
      key: "didBlurCaption",
      value: function didBlurCaption(t) {
        return this.savePendingCaption();
      }
    }]);
    return Pi;
  }(V);
  var Ii = /*#__PURE__*/function (_V15) {
    _inherits(Ii, _V15);
    function Ii(t, i) {
      var _this52;
      _classCallCheck(this, Ii);
      _this52 = _callSuper(this, Ii, arguments), _this52.didFocus = _this52.didFocus.bind(_assertThisInitialized(_this52)), _this52.didBlur = _this52.didBlur.bind(_assertThisInitialized(_this52)), _this52.didClickAttachment = _this52.didClickAttachment.bind(_assertThisInitialized(_this52)), _this52.element = t, _this52.composition = i, _this52.documentView = new ge(_this52.composition.document, {
        element: _this52.element
      }), m("focus", {
        onElement: _this52.element,
        withCallback: _this52.didFocus
      }), m("blur", {
        onElement: _this52.element,
        withCallback: _this52.didBlur
      }), m("click", {
        onElement: _this52.element,
        matchingSelector: "a[contenteditable=false]",
        preventDefault: !0
      }), m("mousedown", {
        onElement: _this52.element,
        matchingSelector: e,
        withCallback: _this52.didClickAttachment
      }), m("click", {
        onElement: _this52.element,
        matchingSelector: "a".concat(e),
        preventDefault: !0
      });
      return _this52;
    }
    _createClass(Ii, [{
      key: "didFocus",
      value: function didFocus(t) {
        var _this53 = this;
        var e;
        var i = function i() {
          var t, e;
          if (!_this53.focused) return _this53.focused = !0, null === (t = _this53.delegate) || void 0 === t || null === (e = t.compositionControllerDidFocus) || void 0 === e ? void 0 : e.call(t);
        };
        return (null === (e = this.blurPromise) || void 0 === e ? void 0 : e.then(i)) || i();
      }
    }, {
      key: "didBlur",
      value: function didBlur(t) {
        var _this54 = this;
        this.blurPromise = new Promise(function (t) {
          return Rt(function () {
            var e, i;
            v(_this54.element) || (_this54.focused = null, null === (e = _this54.delegate) || void 0 === e || null === (i = e.compositionControllerDidBlur) || void 0 === i || i.call(e));
            return _this54.blurPromise = null, t();
          });
        });
      }
    }, {
      key: "didClickAttachment",
      value: function didClickAttachment(t, e) {
        var i, n;
        var r = this.findAttachmentForElement(e),
          o = !!b(t.target, {
            matchingSelector: "figcaption"
          });
        return null === (i = this.delegate) || void 0 === i || null === (n = i.compositionControllerDidSelectAttachment) || void 0 === n ? void 0 : n.call(i, r, {
          editCaption: o
        });
      }
    }, {
      key: "getSerializableElement",
      value: function getSerializableElement() {
        return this.isEditingAttachment() ? this.documentView.shadowElement : this.element;
      }
    }, {
      key: "render",
      value: function render() {
        var t, e, i, n, r, o;
        (this.revision !== this.composition.revision && (this.documentView.setDocument(this.composition.document), this.documentView.render(), this.revision = this.composition.revision), this.canSyncDocumentView() && !this.documentView.isSynced()) && (null === (i = this.delegate) || void 0 === i || null === (n = i.compositionControllerWillSyncDocumentView) || void 0 === n || n.call(i), this.documentView.sync(), null === (r = this.delegate) || void 0 === r || null === (o = r.compositionControllerDidSyncDocumentView) || void 0 === o || o.call(r));
        return null === (t = this.delegate) || void 0 === t || null === (e = t.compositionControllerDidRender) || void 0 === e ? void 0 : e.call(t);
      }
    }, {
      key: "rerenderViewForObject",
      value: function rerenderViewForObject(t) {
        return this.invalidateViewForObject(t), this.render();
      }
    }, {
      key: "invalidateViewForObject",
      value: function invalidateViewForObject(t) {
        return this.documentView.invalidateViewForObject(t);
      }
    }, {
      key: "isViewCachingEnabled",
      value: function isViewCachingEnabled() {
        return this.documentView.isViewCachingEnabled();
      }
    }, {
      key: "enableViewCaching",
      value: function enableViewCaching() {
        return this.documentView.enableViewCaching();
      }
    }, {
      key: "disableViewCaching",
      value: function disableViewCaching() {
        return this.documentView.disableViewCaching();
      }
    }, {
      key: "refreshViewCache",
      value: function refreshViewCache() {
        return this.documentView.garbageCollectCachedViews();
      }
    }, {
      key: "isEditingAttachment",
      value: function isEditingAttachment() {
        return !!this.attachmentEditor;
      }
    }, {
      key: "installAttachmentEditorForAttachment",
      value: function installAttachmentEditorForAttachment(t, e) {
        var i;
        if ((null === (i = this.attachmentEditor) || void 0 === i ? void 0 : i.attachment) === t) return;
        var n = this.documentView.findElementForObject(t);
        if (!n) return;
        this.uninstallAttachmentEditor();
        var r = this.composition.document.getAttachmentPieceForAttachment(t);
        this.attachmentEditor = new Pi(r, n, this.element, e), this.attachmentEditor.delegate = this;
      }
    }, {
      key: "uninstallAttachmentEditor",
      value: function uninstallAttachmentEditor() {
        var t;
        return null === (t = this.attachmentEditor) || void 0 === t ? void 0 : t.uninstall();
      }
    }, {
      key: "didUninstallAttachmentEditor",
      value: function didUninstallAttachmentEditor() {
        return this.attachmentEditor = null, this.render();
      }
    }, {
      key: "attachmentEditorDidRequestUpdatingAttributesForAttachment",
      value: function attachmentEditorDidRequestUpdatingAttributesForAttachment(t, e) {
        var i, n;
        return null === (i = this.delegate) || void 0 === i || null === (n = i.compositionControllerWillUpdateAttachment) || void 0 === n || n.call(i, e), this.composition.updateAttributesForAttachment(t, e);
      }
    }, {
      key: "attachmentEditorDidRequestRemovingAttributeForAttachment",
      value: function attachmentEditorDidRequestRemovingAttributeForAttachment(t, e) {
        var i, n;
        return null === (i = this.delegate) || void 0 === i || null === (n = i.compositionControllerWillUpdateAttachment) || void 0 === n || n.call(i, e), this.composition.removeAttributeForAttachment(t, e);
      }
    }, {
      key: "attachmentEditorDidRequestRemovalOfAttachment",
      value: function attachmentEditorDidRequestRemovalOfAttachment(t) {
        var e, i;
        return null === (e = this.delegate) || void 0 === e || null === (i = e.compositionControllerDidRequestRemovalOfAttachment) || void 0 === i ? void 0 : i.call(e, t);
      }
    }, {
      key: "attachmentEditorDidRequestDeselectingAttachment",
      value: function attachmentEditorDidRequestDeselectingAttachment(t) {
        var e, i;
        return null === (e = this.delegate) || void 0 === e || null === (i = e.compositionControllerDidRequestDeselectingAttachment) || void 0 === i ? void 0 : i.call(e, t);
      }
    }, {
      key: "canSyncDocumentView",
      value: function canSyncDocumentView() {
        return !this.isEditingAttachment();
      }
    }, {
      key: "findAttachmentForElement",
      value: function findAttachmentForElement(t) {
        return this.composition.document.getAttachmentById(parseInt(t.dataset.trixId, 10));
      }
    }]);
    return Ii;
  }(V);
  var Ni = /*#__PURE__*/function (_V16) {
    _inherits(Ni, _V16);
    function Ni() {
      _classCallCheck(this, Ni);
      return _callSuper(this, Ni, arguments);
    }
    return _createClass(Ni);
  }(V);
  var Oi = "data-trix-mutable",
    Mi = "[".concat(Oi, "]"),
    ji = {
      attributes: !0,
      childList: !0,
      characterData: !0,
      characterDataOldValue: !0,
      subtree: !0
    };
  var Wi = /*#__PURE__*/function (_V17) {
    _inherits(Wi, _V17);
    function Wi(t) {
      var _this55;
      _classCallCheck(this, Wi);
      _this55 = _callSuper(this, Wi, [t]), _this55.didMutate = _this55.didMutate.bind(_assertThisInitialized(_this55)), _this55.element = t, _this55.observer = new window.MutationObserver(_this55.didMutate), _this55.start();
      return _this55;
    }
    _createClass(Wi, [{
      key: "start",
      value: function start() {
        return this.reset(), this.observer.observe(this.element, ji);
      }
    }, {
      key: "stop",
      value: function stop() {
        return this.observer.disconnect();
      }
    }, {
      key: "didMutate",
      value: function didMutate(t) {
        var _this$mutations;
        var e, i;
        if ((_this$mutations = this.mutations).push.apply(_this$mutations, _toConsumableArray(Array.from(this.findSignificantMutations(t) || []))), this.mutations.length) return null === (e = this.delegate) || void 0 === e || null === (i = e.elementDidMutate) || void 0 === i || i.call(e, this.getMutationSummary()), this.reset();
      }
    }, {
      key: "reset",
      value: function reset() {
        this.mutations = [];
      }
    }, {
      key: "findSignificantMutations",
      value: function findSignificantMutations(t) {
        var _this56 = this;
        return t.filter(function (t) {
          return _this56.mutationIsSignificant(t);
        });
      }
    }, {
      key: "mutationIsSignificant",
      value: function mutationIsSignificant(t) {
        if (this.nodeIsMutable(t.target)) return !1;
        for (var _i35 = 0, _Array$from20 = Array.from(this.nodesModifiedByMutation(t)); _i35 < _Array$from20.length; _i35++) {
          var _e43 = _Array$from20[_i35];
          if (this.nodeIsSignificant(_e43)) return !0;
        }
        return !1;
      }
    }, {
      key: "nodeIsSignificant",
      value: function nodeIsSignificant(t) {
        return t !== this.element && !this.nodeIsMutable(t) && !I(t);
      }
    }, {
      key: "nodeIsMutable",
      value: function nodeIsMutable(t) {
        return b(t, {
          matchingSelector: Mi
        });
      }
    }, {
      key: "nodesModifiedByMutation",
      value: function nodesModifiedByMutation(t) {
        var e = [];
        switch (t.type) {
          case "attributes":
            t.attributeName !== Oi && e.push(t.target);
            break;
          case "characterData":
            e.push(t.target.parentNode), e.push(t.target);
            break;
          case "childList":
            e.push.apply(e, _toConsumableArray(Array.from(t.addedNodes || []))), e.push.apply(e, _toConsumableArray(Array.from(t.removedNodes || [])));
        }
        return e;
      }
    }, {
      key: "getMutationSummary",
      value: function getMutationSummary() {
        return this.getTextMutationSummary();
      }
    }, {
      key: "getTextMutationSummary",
      value: function getTextMutationSummary() {
        var _this$getTextChangesF = this.getTextChangesFromCharacterData(),
          t = _this$getTextChangesF.additions,
          e = _this$getTextChangesF.deletions,
          i = this.getTextChangesFromChildList();
        Array.from(i.additions).forEach(function (e) {
          Array.from(t).includes(e) || t.push(e);
        }), e.push.apply(e, _toConsumableArray(Array.from(i.deletions || [])));
        var n = {},
          r = t.join("");
        r && (n.textAdded = r);
        var o = e.join("");
        return o && (n.textDeleted = o), n;
      }
    }, {
      key: "getMutationsByType",
      value: function getMutationsByType(t) {
        return Array.from(this.mutations).filter(function (e) {
          return e.type === t;
        });
      }
    }, {
      key: "getTextChangesFromChildList",
      value: function getTextChangesFromChildList() {
        var t, e;
        var i = [],
          n = [];
        Array.from(this.getMutationsByType("childList")).forEach(function (t) {
          i.push.apply(i, _toConsumableArray(Array.from(t.addedNodes || []))), n.push.apply(n, _toConsumableArray(Array.from(t.removedNodes || [])));
        });
        0 === i.length && 1 === n.length && T(n[0]) ? (t = [], e = ["\n"]) : (t = qi(i), e = qi(n));
        return {
          additions: t.filter(function (t, i) {
            return t !== e[i];
          }).map(Wt),
          deletions: e.filter(function (e, i) {
            return e !== t[i];
          }).map(Wt)
        };
      }
    }, {
      key: "getTextChangesFromCharacterData",
      value: function getTextChangesFromCharacterData() {
        var t, e;
        var i = this.getMutationsByType("characterData");
        if (i.length) {
          var _n21 = i[0],
            _r14 = i[i.length - 1],
            _o10 = function (t, e, _Vt, _Vt2, _Vt3, _Vt4) {
              var i, n;
              return t = $.box(t), (e = $.box(e)).length < t.length ? (_Vt = Vt(t, e), _Vt2 = _slicedToArray(_Vt, 2), n = _Vt2[0], i = _Vt2[1], _Vt) : (_Vt3 = Vt(e, t), _Vt4 = _slicedToArray(_Vt3, 2), i = _Vt4[0], n = _Vt4[1], _Vt3), {
                added: i,
                removed: n
              };
            }(Wt(_n21.oldValue), Wt(_r14.target.data));
          t = _o10.added, e = _o10.removed;
        }
        return {
          additions: t ? [t] : [],
          deletions: e ? [e] : []
        };
      }
    }]);
    return Wi;
  }(V);
  var qi = function qi() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    var e = [];
    for (var _i36 = 0, _Array$from21 = Array.from(t); _i36 < _Array$from21.length; _i36++) {
      var _i37 = _Array$from21[_i36];
      switch (_i37.nodeType) {
        case Node.TEXT_NODE:
          e.push(_i37.data);
          break;
        case Node.ELEMENT_NODE:
          "br" === R(_i37) ? e.push("\n") : e.push.apply(e, _toConsumableArray(Array.from(qi(_i37.childNodes) || [])));
      }
    }
    return e;
  };
  var Ui = /*#__PURE__*/function (_te2) {
    _inherits(Ui, _te2);
    function Ui(t) {
      var _this57;
      _classCallCheck(this, Ui);
      _this57 = _callSuper(this, Ui, arguments), _this57.file = t;
      return _this57;
    }
    _createClass(Ui, [{
      key: "perform",
      value: function perform(t) {
        var _this58 = this;
        var e = new FileReader();
        return e.onerror = function () {
          return t(!1);
        }, e.onload = function () {
          e.onerror = null;
          try {
            e.abort();
          } catch (t) {}
          return t(!0, _this58.file);
        }, e.readAsArrayBuffer(this.file);
      }
    }]);
    return Ui;
  }(te);
  var Vi = /*#__PURE__*/function (_V18) {
    _inherits(Vi, _V18);
    function Vi(t) {
      var _this59;
      _classCallCheck(this, Vi);
      _this59 = _callSuper(this, Vi, arguments), _this59.element = t, _this59.mutationObserver = new Wi(_this59.element), _this59.mutationObserver.delegate = _assertThisInitialized(_this59);
      for (var _t48 in _this59.constructor.events) m(_t48, {
        onElement: _this59.element,
        withCallback: _this59.handlerFor(_t48)
      });
      return _this59;
    }
    _createClass(Vi, [{
      key: "elementDidMutate",
      value: function elementDidMutate(t) {}
    }, {
      key: "editorWillSyncDocumentView",
      value: function editorWillSyncDocumentView() {
        return this.mutationObserver.stop();
      }
    }, {
      key: "editorDidSyncDocumentView",
      value: function editorDidSyncDocumentView() {
        return this.mutationObserver.start();
      }
    }, {
      key: "requestRender",
      value: function requestRender() {
        var t, e;
        return null === (t = this.delegate) || void 0 === t || null === (e = t.inputControllerDidRequestRender) || void 0 === e ? void 0 : e.call(t);
      }
    }, {
      key: "requestReparse",
      value: function requestReparse() {
        var t, e;
        return null === (t = this.delegate) || void 0 === t || null === (e = t.inputControllerDidRequestReparse) || void 0 === e || e.call(t), this.requestRender();
      }
    }, {
      key: "attachFiles",
      value: function attachFiles(t) {
        var _this60 = this;
        var e = Array.from(t).map(function (t) {
          return new Ui(t);
        });
        return Promise.all(e).then(function (t) {
          _this60.handleInput(function () {
            var e, i;
            return null === (e = this.delegate) || void 0 === e || e.inputControllerWillAttachFiles(), null === (i = this.responder) || void 0 === i || i.insertFiles(t), this.requestRender();
          });
        });
      }
    }, {
      key: "handlerFor",
      value: function handlerFor(t) {
        var _this61 = this;
        return function (e) {
          e.defaultPrevented || _this61.handleInput(function () {
            v(_this61.element) || (_this61.eventName = t, _this61.constructor.events[t].call(_this61, e));
          });
        };
      }
    }, {
      key: "handleInput",
      value: function handleInput(t) {
        try {
          var e;
          null === (e = this.delegate) || void 0 === e || e.inputControllerWillHandleInput(), t.call(this);
        } finally {
          var i;
          null === (i = this.delegate) || void 0 === i || i.inputControllerDidHandleInput();
        }
      }
    }, {
      key: "createLinkHTML",
      value: function createLinkHTML(t, e) {
        var i = document.createElement("a");
        return i.href = t, i.textContent = e || t, i.outerHTML;
      }
    }]);
    return Vi;
  }(V);
  var zi;
  Ae(Vi, "events", {});
  var _i = U.browser,
    Hi = U.keyNames;
  var Ji = 0;
  var Ki = /*#__PURE__*/function (_Vi) {
    _inherits(Ki, _Vi);
    function Ki() {
      var _this62;
      _classCallCheck(this, Ki);
      _this62 = _callSuper(this, Ki, arguments), _this62.resetInputSummary();
      return _this62;
    }
    _createClass(Ki, [{
      key: "setInputSummary",
      value: function setInputSummary() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.inputSummary.eventName = this.eventName;
        for (var _e44 in t) {
          var _i38 = t[_e44];
          this.inputSummary[_e44] = _i38;
        }
        return this.inputSummary;
      }
    }, {
      key: "resetInputSummary",
      value: function resetInputSummary() {
        this.inputSummary = {};
      }
    }, {
      key: "reset",
      value: function reset() {
        return this.resetInputSummary(), Pt.reset();
      }
    }, {
      key: "elementDidMutate",
      value: function elementDidMutate(t) {
        var e, i;
        return this.isComposing() ? null === (e = this.delegate) || void 0 === e || null === (i = e.inputControllerDidAllowUnhandledInput) || void 0 === i ? void 0 : i.call(e) : this.handleInput(function () {
          return this.mutationIsSignificant(t) && (this.mutationIsExpected(t) ? this.requestRender() : this.requestReparse()), this.reset();
        });
      }
    }, {
      key: "mutationIsExpected",
      value: function mutationIsExpected(t) {
        var e = t.textAdded,
          i = t.textDeleted;
        if (this.inputSummary.preferDocument) return !0;
        var n = null != e ? e === this.inputSummary.textAdded : !this.inputSummary.textAdded,
          r = null != i ? this.inputSummary.didDelete : !this.inputSummary.didDelete,
          o = ["\n", " \n"].includes(e) && !n,
          s = "\n" === i && !r;
        if (o && !s || s && !o) {
          var _t49 = this.getSelectedRange();
          if (_t49) {
            var a;
            var _i39 = o ? e.replace(/\n$/, "").length || -1 : (null == e ? void 0 : e.length) || 1;
            if (null !== (a = this.responder) && void 0 !== a && a.positionIsBlockBreak(_t49[1] + _i39)) return !0;
          }
        }
        return n && r;
      }
    }, {
      key: "mutationIsSignificant",
      value: function mutationIsSignificant(t) {
        var e;
        var i = Object.keys(t).length > 0,
          n = "" === (null === (e = this.compositionInput) || void 0 === e ? void 0 : e.getEndData());
        return i || !n;
      }
    }, {
      key: "getCompositionInput",
      value: function getCompositionInput() {
        if (this.isComposing()) return this.compositionInput;
        this.compositionInput = new Qi(this);
      }
    }, {
      key: "isComposing",
      value: function isComposing() {
        return this.compositionInput && !this.compositionInput.isEnded();
      }
    }, {
      key: "deleteInDirection",
      value: function deleteInDirection(t, e) {
        var i;
        return !1 !== (null === (i = this.responder) || void 0 === i ? void 0 : i.deleteInDirection(t)) ? this.setInputSummary({
          didDelete: !0
        }) : e ? (e.preventDefault(), this.requestRender()) : void 0;
      }
    }, {
      key: "serializeSelectionToDataTransfer",
      value: function serializeSelectionToDataTransfer(t) {
        var e;
        if (!function (t) {
          if (null == t || !t.setData) return !1;
          for (var _e45 in xt) {
            var _i40 = xt[_e45];
            try {
              if (t.setData(_e45, _i40), !t.getData(_e45) === _i40) return !1;
            } catch (t) {
              return !1;
            }
          }
          return !0;
        }(t)) return;
        var i = null === (e = this.responder) || void 0 === e ? void 0 : e.getSelectedDocument().toSerializableDocument();
        return t.setData("application/x-trix-document", JSON.stringify(i)), t.setData("text/html", ge.render(i).innerHTML), t.setData("text/plain", i.toString().replace(/\n$/, "")), !0;
      }
    }, {
      key: "canAcceptDataTransfer",
      value: function canAcceptDataTransfer(t) {
        var e = {};
        return Array.from((null == t ? void 0 : t.types) || []).forEach(function (t) {
          e[t] = !0;
        }), e.Files || e["application/x-trix-document"] || e["text/html"] || e["text/plain"];
      }
    }, {
      key: "getPastedHTMLUsingHiddenElement",
      value: function getPastedHTMLUsingHiddenElement(t) {
        var _this63 = this;
        var e = this.getSelectedRange(),
          i = {
            position: "absolute",
            left: "".concat(window.pageXOffset, "px"),
            top: "".concat(window.pageYOffset, "px"),
            opacity: 0
          },
          n = S({
            style: i,
            tagName: "div",
            editable: !0
          });
        return document.body.appendChild(n), n.focus(), requestAnimationFrame(function () {
          var i = n.innerHTML;
          return y(n), _this63.setSelectedRange(e), t(i);
        });
      }
    }]);
    return Ki;
  }(Vi);
  Ae(Ki, "events", {
    keydown: function keydown(t) {
      this.isComposing() || this.resetInputSummary(), this.inputSummary.didInput = !0;
      var e = Hi[t.keyCode];
      if (e) {
        var i;
        var _n22 = this.keys;
        ["ctrl", "alt", "shift", "meta"].forEach(function (e) {
          var i;
          t["".concat(e, "Key")] && ("ctrl" === e && (e = "control"), _n22 = null === (i = _n22) || void 0 === i ? void 0 : i[e]);
        }), null != (null === (i = _n22) || void 0 === i ? void 0 : i[e]) && (this.setInputSummary({
          keyName: e
        }), Pt.reset(), _n22[e].call(this, t));
      }
      if (Ct(t)) {
        var _e46 = String.fromCharCode(t.keyCode).toLowerCase();
        if (_e46) {
          var n;
          var _i41 = ["alt", "shift"].map(function (e) {
            if (t["".concat(e, "Key")]) return e;
          }).filter(function (t) {
            return t;
          });
          _i41.push(_e46), null !== (n = this.delegate) && void 0 !== n && n.inputControllerDidReceiveKeyboardCommand(_i41) && t.preventDefault();
        }
      }
    },
    keypress: function keypress(t) {
      if (null != this.inputSummary.eventName) return;
      if (t.metaKey) return;
      if (t.ctrlKey && !t.altKey) return;
      var e = Xi(t);
      var i, n;
      return e ? (null === (i = this.delegate) || void 0 === i || i.inputControllerWillPerformTyping(), null === (n = this.responder) || void 0 === n || n.insertString(e), this.setInputSummary({
        textAdded: e,
        didDelete: this.selectionIsExpanded()
      })) : void 0;
    },
    textInput: function textInput(t) {
      var e = t.data,
        i = this.inputSummary.textAdded;
      if (i && i !== e && i.toUpperCase() === e) {
        var n;
        var _t50 = this.getSelectedRange();
        return this.setSelectedRange([_t50[0], _t50[1] + i.length]), null === (n = this.responder) || void 0 === n || n.insertString(e), this.setInputSummary({
          textAdded: e
        }), this.setSelectedRange(_t50);
      }
    },
    dragenter: function dragenter(t) {
      t.preventDefault();
    },
    dragstart: function dragstart(t) {
      var e, i;
      return this.serializeSelectionToDataTransfer(t.dataTransfer), this.draggedRange = this.getSelectedRange(), null === (e = this.delegate) || void 0 === e || null === (i = e.inputControllerDidStartDrag) || void 0 === i ? void 0 : i.call(e);
    },
    dragover: function dragover(t) {
      if (this.draggedRange || this.canAcceptDataTransfer(t.dataTransfer)) {
        t.preventDefault();
        var _n23 = {
          x: t.clientX,
          y: t.clientY
        };
        var e, i;
        if (!Et(_n23, this.draggingPoint)) return this.draggingPoint = _n23, null === (e = this.delegate) || void 0 === e || null === (i = e.inputControllerDidReceiveDragOverPoint) || void 0 === i ? void 0 : i.call(e, this.draggingPoint);
      }
    },
    dragend: function dragend(t) {
      var e, i;
      null === (e = this.delegate) || void 0 === e || null === (i = e.inputControllerDidCancelDrag) || void 0 === i || i.call(e), this.draggedRange = null, this.draggingPoint = null;
    },
    drop: function drop(t) {
      var e, i;
      t.preventDefault();
      var n = null === (e = t.dataTransfer) || void 0 === e ? void 0 : e.files,
        r = t.dataTransfer.getData("application/x-trix-document"),
        o = {
          x: t.clientX,
          y: t.clientY
        };
      if (null === (i = this.responder) || void 0 === i || i.setLocationRangeFromPointRange(o), null != n && n.length) this.attachFiles(n);else if (this.draggedRange) {
        var s, a;
        null === (s = this.delegate) || void 0 === s || s.inputControllerWillMoveText(), null === (a = this.responder) || void 0 === a || a.moveTextFromRange(this.draggedRange), this.draggedRange = null, this.requestRender();
      } else if (r) {
        var l;
        var _t51 = qe.fromJSONString(r);
        null === (l = this.responder) || void 0 === l || l.insertDocument(_t51), this.requestRender();
      }
      this.draggedRange = null, this.draggingPoint = null;
    },
    cut: function cut(t) {
      var e, i;
      if (null !== (e = this.responder) && void 0 !== e && e.selectionIsExpanded() && (this.serializeSelectionToDataTransfer(t.clipboardData) && t.preventDefault(), null === (i = this.delegate) || void 0 === i || i.inputControllerWillCutText(), this.deleteInDirection("backward"), t.defaultPrevented)) return this.requestRender();
    },
    copy: function copy(t) {
      var e;
      null !== (e = this.responder) && void 0 !== e && e.selectionIsExpanded() && this.serializeSelectionToDataTransfer(t.clipboardData) && t.preventDefault();
    },
    paste: function paste(t) {
      var _this64 = this;
      var e = t.clipboardData || t.testClipboardData,
        i = {
          clipboard: e
        };
      if (!e || Yi(t)) return void this.getPastedHTMLUsingHiddenElement(function (t) {
        var e, n, r;
        return i.type = "text/html", i.html = t, null === (e = _this64.delegate) || void 0 === e || e.inputControllerWillPaste(i), null === (n = _this64.responder) || void 0 === n || n.insertHTML(i.html), _this64.requestRender(), null === (r = _this64.delegate) || void 0 === r ? void 0 : r.inputControllerDidPaste(i);
      });
      var n = e.getData("URL"),
        r = e.getData("text/html"),
        o = e.getData("public.url-name");
      if (n) {
        var s, a, l;
        var _t52;
        i.type = "text/html", _t52 = o ? Ut(o).trim() : n, i.html = this.createLinkHTML(n, _t52), null === (s = this.delegate) || void 0 === s || s.inputControllerWillPaste(i), this.setInputSummary({
          textAdded: _t52,
          didDelete: this.selectionIsExpanded()
        }), null === (a = this.responder) || void 0 === a || a.insertHTML(i.html), this.requestRender(), null === (l = this.delegate) || void 0 === l || l.inputControllerDidPaste(i);
      } else if (yt(e)) {
        var c, u, h;
        i.type = "text/plain", i.string = e.getData("text/plain"), null === (c = this.delegate) || void 0 === c || c.inputControllerWillPaste(i), this.setInputSummary({
          textAdded: i.string,
          didDelete: this.selectionIsExpanded()
        }), null === (u = this.responder) || void 0 === u || u.insertString(i.string), this.requestRender(), null === (h = this.delegate) || void 0 === h || h.inputControllerDidPaste(i);
      } else if (r) {
        var d, g, m;
        i.type = "text/html", i.html = r, null === (d = this.delegate) || void 0 === d || d.inputControllerWillPaste(i), null === (g = this.responder) || void 0 === g || g.insertHTML(i.html), this.requestRender(), null === (m = this.delegate) || void 0 === m || m.inputControllerDidPaste(i);
      } else if (Array.from(e.types).includes("Files")) {
        var p, f, b;
        var _t53 = null === (p = e.items) || void 0 === p || null === (f = p[0]) || void 0 === f || null === (b = f.getAsFile) || void 0 === b ? void 0 : b.call(f);
        if (_t53) {
          var v, A, x;
          var _e47 = Gi(_t53);
          !_t53.name && _e47 && (_t53.name = "pasted-file-".concat(++Ji, ".").concat(_e47)), i.type = "File", i.file = _t53, null === (v = this.delegate) || void 0 === v || v.inputControllerWillAttachFiles(), null === (A = this.responder) || void 0 === A || A.insertFile(i.file), this.requestRender(), null === (x = this.delegate) || void 0 === x || x.inputControllerDidPaste(i);
        }
      }
      t.preventDefault();
    },
    compositionstart: function compositionstart(t) {
      return this.getCompositionInput().start(t.data);
    },
    compositionupdate: function compositionupdate(t) {
      return this.getCompositionInput().update(t.data);
    },
    compositionend: function compositionend(t) {
      return this.getCompositionInput().end(t.data);
    },
    beforeinput: function beforeinput(t) {
      this.inputSummary.didInput = !0;
    },
    input: function input(t) {
      return this.inputSummary.didInput = !0, t.stopPropagation();
    }
  }), Ae(Ki, "keys", {
    backspace: function backspace(t) {
      var e;
      return null === (e = this.delegate) || void 0 === e || e.inputControllerWillPerformTyping(), this.deleteInDirection("backward", t);
    },
    "delete": function _delete(t) {
      var e;
      return null === (e = this.delegate) || void 0 === e || e.inputControllerWillPerformTyping(), this.deleteInDirection("forward", t);
    },
    "return": function _return(t) {
      var e, i;
      return this.setInputSummary({
        preferDocument: !0
      }), null === (e = this.delegate) || void 0 === e || e.inputControllerWillPerformTyping(), null === (i = this.responder) || void 0 === i ? void 0 : i.insertLineBreak();
    },
    tab: function tab(t) {
      var e, i;
      null !== (e = this.responder) && void 0 !== e && e.canIncreaseNestingLevel() && (null === (i = this.responder) || void 0 === i || i.increaseNestingLevel(), this.requestRender(), t.preventDefault());
    },
    left: function left(t) {
      var e;
      if (this.selectionIsInCursorTarget()) return t.preventDefault(), null === (e = this.responder) || void 0 === e ? void 0 : e.moveCursorInDirection("backward");
    },
    right: function right(t) {
      var e;
      if (this.selectionIsInCursorTarget()) return t.preventDefault(), null === (e = this.responder) || void 0 === e ? void 0 : e.moveCursorInDirection("forward");
    },
    control: {
      d: function d(t) {
        var e;
        return null === (e = this.delegate) || void 0 === e || e.inputControllerWillPerformTyping(), this.deleteInDirection("forward", t);
      },
      h: function h(t) {
        var e;
        return null === (e = this.delegate) || void 0 === e || e.inputControllerWillPerformTyping(), this.deleteInDirection("backward", t);
      },
      o: function o(t) {
        var e, i;
        return t.preventDefault(), null === (e = this.delegate) || void 0 === e || e.inputControllerWillPerformTyping(), null === (i = this.responder) || void 0 === i || i.insertString("\n", {
          updatePosition: !1
        }), this.requestRender();
      }
    },
    shift: {
      "return": function _return(t) {
        var e, i;
        null === (e = this.delegate) || void 0 === e || e.inputControllerWillPerformTyping(), null === (i = this.responder) || void 0 === i || i.insertString("\n"), this.requestRender(), t.preventDefault();
      },
      tab: function tab(t) {
        var e, i;
        null !== (e = this.responder) && void 0 !== e && e.canDecreaseNestingLevel() && (null === (i = this.responder) || void 0 === i || i.decreaseNestingLevel(), this.requestRender(), t.preventDefault());
      },
      left: function left(t) {
        if (this.selectionIsInCursorTarget()) return t.preventDefault(), this.expandSelectionInDirection("backward");
      },
      right: function right(t) {
        if (this.selectionIsInCursorTarget()) return t.preventDefault(), this.expandSelectionInDirection("forward");
      }
    },
    alt: {
      backspace: function backspace(t) {
        var e;
        return this.setInputSummary({
          preferDocument: !1
        }), null === (e = this.delegate) || void 0 === e ? void 0 : e.inputControllerWillPerformTyping();
      }
    },
    meta: {
      backspace: function backspace(t) {
        var e;
        return this.setInputSummary({
          preferDocument: !1
        }), null === (e = this.delegate) || void 0 === e ? void 0 : e.inputControllerWillPerformTyping();
      }
    }
  }), Ki.proxyMethod("responder?.getSelectedRange"), Ki.proxyMethod("responder?.setSelectedRange"), Ki.proxyMethod("responder?.expandSelectionInDirection"), Ki.proxyMethod("responder?.selectionIsInCursorTarget"), Ki.proxyMethod("responder?.selectionIsExpanded");
  var Gi = function Gi(t) {
      var e, i;
      return null === (e = t.type) || void 0 === e || null === (i = e.match(/\/(\w+)$/)) || void 0 === i ? void 0 : i[1];
    },
    $i = !(null === (zi = " ".codePointAt) || void 0 === zi || !zi.call(" ", 0)),
    Xi = function Xi(t) {
      if (t.key && $i && t.key.codePointAt(0) === t.keyCode) return t.key;
      {
        var _e48;
        if (null === t.which ? _e48 = t.keyCode : 0 !== t.which && 0 !== t.charCode && (_e48 = t.charCode), null != _e48 && "escape" !== Hi[_e48]) return $.fromCodepoints([_e48]).toString();
      }
    },
    Yi = function Yi(t) {
      var e = t.clipboardData;
      if (e) {
        if (e.types.includes("text/html")) {
          var _iterator7 = _createForOfIteratorHelper(e.types),
            _step7;
          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var _t54 = _step7.value;
              var _i42 = /^CorePasteboardFlavorType/.test(_t54),
                _n24 = /^dyn\./.test(_t54) && e.getData(_t54);
              if (_i42 || _n24) return !0;
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
          return !1;
        }
        {
          var _t55 = e.types.includes("com.apple.webarchive"),
            _i43 = e.types.includes("com.apple.flat-rtfd");
          return _t55 || _i43;
        }
      }
    };
  var Qi = /*#__PURE__*/function (_V19) {
    _inherits(Qi, _V19);
    function Qi(t) {
      var _this65;
      _classCallCheck(this, Qi);
      _this65 = _callSuper(this, Qi, arguments), _this65.inputController = t, _this65.responder = _this65.inputController.responder, _this65.delegate = _this65.inputController.delegate, _this65.inputSummary = _this65.inputController.inputSummary, _this65.data = {};
      return _this65;
    }
    _createClass(Qi, [{
      key: "start",
      value: function start(t) {
        if (this.data.start = t, this.isSignificant()) {
          var e, i;
          if ("keypress" === this.inputSummary.eventName && this.inputSummary.textAdded) null === (i = this.responder) || void 0 === i || i.deleteInDirection("left");
          this.selectionIsExpanded() || (this.insertPlaceholder(), this.requestRender()), this.range = null === (e = this.responder) || void 0 === e ? void 0 : e.getSelectedRange();
        }
      }
    }, {
      key: "update",
      value: function update(t) {
        if (this.data.update = t, this.isSignificant()) {
          var _t56 = this.selectPlaceholder();
          _t56 && (this.forgetPlaceholder(), this.range = _t56);
        }
      }
    }, {
      key: "end",
      value: function end(t) {
        return this.data.end = t, this.isSignificant() ? (this.forgetPlaceholder(), this.canApplyToDocument() ? (this.setInputSummary({
          preferDocument: !0,
          didInput: !1
        }), null === (e = this.delegate) || void 0 === e || e.inputControllerWillPerformTyping(), null === (i = this.responder) || void 0 === i || i.setSelectedRange(this.range), null === (n = this.responder) || void 0 === n || n.insertString(this.data.end), null === (r = this.responder) || void 0 === r ? void 0 : r.setSelectedRange(this.range[0] + this.data.end.length)) : null != this.data.start || null != this.data.update ? (this.requestReparse(), this.inputController.reset()) : void 0) : this.inputController.reset();
        var e, i, n, r;
      }
    }, {
      key: "getEndData",
      value: function getEndData() {
        return this.data.end;
      }
    }, {
      key: "isEnded",
      value: function isEnded() {
        return null != this.getEndData();
      }
    }, {
      key: "isSignificant",
      value: function isSignificant() {
        return !_i.composesExistingText || this.inputSummary.didInput;
      }
    }, {
      key: "canApplyToDocument",
      value: function canApplyToDocument() {
        var t, e;
        return 0 === (null === (t = this.data.start) || void 0 === t ? void 0 : t.length) && (null === (e = this.data.end) || void 0 === e ? void 0 : e.length) > 0 && this.range;
      }
    }]);
    return Qi;
  }(V);
  Qi.proxyMethod("inputController.setInputSummary"), Qi.proxyMethod("inputController.requestRender"), Qi.proxyMethod("inputController.requestReparse"), Qi.proxyMethod("responder?.selectionIsExpanded"), Qi.proxyMethod("responder?.insertPlaceholder"), Qi.proxyMethod("responder?.selectPlaceholder"), Qi.proxyMethod("responder?.forgetPlaceholder");
  var Zi = /*#__PURE__*/function (_Vi2) {
    _inherits(Zi, _Vi2);
    function Zi() {
      var _this66;
      _classCallCheck(this, Zi);
      _this66 = _callSuper(this, Zi, arguments), _this66.render = _this66.render.bind(_assertThisInitialized(_this66));
      return _this66;
    }
    _createClass(Zi, [{
      key: "elementDidMutate",
      value: function elementDidMutate() {
        return this.scheduledRender ? this.composing ? null === (t = this.delegate) || void 0 === t || null === (e = t.inputControllerDidAllowUnhandledInput) || void 0 === e ? void 0 : e.call(t) : void 0 : this.reparse();
        var t, e;
      }
    }, {
      key: "scheduleRender",
      value: function scheduleRender() {
        return this.scheduledRender ? this.scheduledRender : this.scheduledRender = requestAnimationFrame(this.render);
      }
    }, {
      key: "render",
      value: function render() {
        var t, e;
        (cancelAnimationFrame(this.scheduledRender), this.scheduledRender = null, this.composing) || null === (e = this.delegate) || void 0 === e || e.render();
        null === (t = this.afterRender) || void 0 === t || t.call(this), this.afterRender = null;
      }
    }, {
      key: "reparse",
      value: function reparse() {
        var t;
        return null === (t = this.delegate) || void 0 === t ? void 0 : t.reparse();
      }
    }, {
      key: "insertString",
      value: function insertString() {
        var t;
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          i = arguments.length > 1 ? arguments[1] : void 0;
        return null === (t = this.delegate) || void 0 === t || t.inputControllerWillPerformTyping(), this.withTargetDOMRange(function () {
          var t;
          return null === (t = this.responder) || void 0 === t ? void 0 : t.insertString(e, i);
        });
      }
    }, {
      key: "toggleAttributeIfSupported",
      value: function toggleAttributeIfSupported(t) {
        var e;
        if (ht().includes(t)) return null === (e = this.delegate) || void 0 === e || e.inputControllerWillPerformFormatting(t), this.withTargetDOMRange(function () {
          var e;
          return null === (e = this.responder) || void 0 === e ? void 0 : e.toggleCurrentAttribute(t);
        });
      }
    }, {
      key: "activateAttributeIfSupported",
      value: function activateAttributeIfSupported(t, e) {
        var i;
        if (ht().includes(t)) return null === (i = this.delegate) || void 0 === i || i.inputControllerWillPerformFormatting(t), this.withTargetDOMRange(function () {
          var i;
          return null === (i = this.responder) || void 0 === i ? void 0 : i.setCurrentAttribute(t, e);
        });
      }
    }, {
      key: "deleteInDirection",
      value: function deleteInDirection(t) {
        var _this67 = this;
        var _ref21 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            recordUndoEntry: !0
          },
          e = _ref21.recordUndoEntry;
        var i;
        e && (null === (i = this.delegate) || void 0 === i || i.inputControllerWillPerformTyping());
        var n = function n() {
            var e;
            return null === (e = _this67.responder) || void 0 === e ? void 0 : e.deleteInDirection(t);
          },
          r = this.getTargetDOMRange({
            minLength: 2
          });
        return r ? this.withTargetDOMRange(r, n) : n();
      }
    }, {
      key: "withTargetDOMRange",
      value: function withTargetDOMRange(t, e) {
        var i;
        return "function" == typeof t && (e = t, t = this.getTargetDOMRange()), t ? null === (i = this.responder) || void 0 === i ? void 0 : i.withTargetDOMRange(t, e.bind(this)) : (Pt.reset(), e.call(this));
      }
    }, {
      key: "getTargetDOMRange",
      value: function getTargetDOMRange() {
        var t, e;
        var _ref22 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            minLength: 0
          },
          i = _ref22.minLength;
        var n = null === (t = (e = this.event).getTargetRanges) || void 0 === t ? void 0 : t.call(e);
        if (n && n.length) {
          var _t57 = tn(n[0]);
          if (0 === i || _t57.toString().length >= i) return _t57;
        }
      }
    }, {
      key: "withEvent",
      value: function withEvent(t, e) {
        var i;
        this.event = t;
        try {
          i = e.call(this);
        } finally {
          this.event = null;
        }
        return i;
      }
    }]);
    return Zi;
  }(Vi);
  Ae(Zi, "events", {
    keydown: function keydown(t) {
      if (Ct(t)) {
        var e;
        var _i44 = on(t);
        null !== (e = this.delegate) && void 0 !== e && e.inputControllerDidReceiveKeyboardCommand(_i44) && t.preventDefault();
      } else {
        var _e49 = t.key;
        t.altKey && (_e49 += "+Alt"), t.shiftKey && (_e49 += "+Shift");
        var _i45 = this.constructor.keys[_e49];
        if (_i45) return this.withEvent(t, _i45);
      }
    },
    paste: function paste(t) {
      var e;
      var i;
      var n = null === (e = t.clipboardData) || void 0 === e ? void 0 : e.getData("URL");
      return nn(t) ? (t.preventDefault(), this.attachFiles(t.clipboardData.files)) : rn(t) ? (t.preventDefault(), i = {
        type: "text/plain",
        string: t.clipboardData.getData("text/plain")
      }, null === (r = this.delegate) || void 0 === r || r.inputControllerWillPaste(i), null === (o = this.responder) || void 0 === o || o.insertString(i.string), this.render(), null === (s = this.delegate) || void 0 === s ? void 0 : s.inputControllerDidPaste(i)) : n ? (t.preventDefault(), i = {
        type: "text/html",
        html: this.createLinkHTML(n)
      }, null === (a = this.delegate) || void 0 === a || a.inputControllerWillPaste(i), null === (l = this.responder) || void 0 === l || l.insertHTML(i.html), this.render(), null === (c = this.delegate) || void 0 === c ? void 0 : c.inputControllerDidPaste(i)) : void 0;
      var r, o, s, a, l, c;
    },
    beforeinput: function beforeinput(t) {
      var e = this.constructor.inputTypes[t.inputType];
      if (e) return this.withEvent(t, e), this.scheduleRender();
    },
    input: function input(t) {
      return Pt.reset();
    },
    dragstart: function dragstart(t) {
      var e, i;
      null !== (e = this.responder) && void 0 !== e && e.selectionContainsAttachments() && (t.dataTransfer.setData("application/x-trix-dragging", !0), this.dragging = {
        range: null === (i = this.responder) || void 0 === i ? void 0 : i.getSelectedRange(),
        point: sn(t)
      });
    },
    dragenter: function dragenter(t) {
      en(t) && t.preventDefault();
    },
    dragover: function dragover(t) {
      if (this.dragging) {
        t.preventDefault();
        var _i46 = sn(t);
        var e;
        if (!Et(_i46, this.dragging.point)) return this.dragging.point = _i46, null === (e = this.responder) || void 0 === e ? void 0 : e.setLocationRangeFromPointRange(_i46);
      } else en(t) && t.preventDefault();
    },
    drop: function drop(t) {
      var e, i;
      if (this.dragging) return t.preventDefault(), null === (e = this.delegate) || void 0 === e || e.inputControllerWillMoveText(), null === (i = this.responder) || void 0 === i || i.moveTextFromRange(this.dragging.range), this.dragging = null, this.scheduleRender();
      if (en(t)) {
        var n;
        t.preventDefault();
        var _e50 = sn(t);
        return null === (n = this.responder) || void 0 === n || n.setLocationRangeFromPointRange(_e50), this.attachFiles(t.dataTransfer.files);
      }
    },
    dragend: function dragend() {
      var t;
      this.dragging && (null === (t = this.responder) || void 0 === t || t.setSelectedRange(this.dragging.range), this.dragging = null);
    },
    compositionend: function compositionend(t) {
      if (this.composing) return this.composing = !1, this.scheduleRender();
    }
  }), Ae(Zi, "keys", {
    ArrowLeft: function ArrowLeft() {
      var t, e;
      if (null !== (t = this.responder) && void 0 !== t && t.shouldManageMovingCursorInDirection("backward")) return this.event.preventDefault(), null === (e = this.responder) || void 0 === e ? void 0 : e.moveCursorInDirection("backward");
    },
    ArrowRight: function ArrowRight() {
      var t, e;
      if (null !== (t = this.responder) && void 0 !== t && t.shouldManageMovingCursorInDirection("forward")) return this.event.preventDefault(), null === (e = this.responder) || void 0 === e ? void 0 : e.moveCursorInDirection("forward");
    },
    Backspace: function Backspace() {
      var t, e, i;
      if (null !== (t = this.responder) && void 0 !== t && t.shouldManageDeletingInDirection("backward")) return this.event.preventDefault(), null === (e = this.delegate) || void 0 === e || e.inputControllerWillPerformTyping(), null === (i = this.responder) || void 0 === i || i.deleteInDirection("backward"), this.render();
    },
    Tab: function Tab() {
      var t, e;
      if (null !== (t = this.responder) && void 0 !== t && t.canIncreaseNestingLevel()) return this.event.preventDefault(), null === (e = this.responder) || void 0 === e || e.increaseNestingLevel(), this.render();
    },
    "Tab+Shift": function TabShift() {
      var t, e;
      if (null !== (t = this.responder) && void 0 !== t && t.canDecreaseNestingLevel()) return this.event.preventDefault(), null === (e = this.responder) || void 0 === e || e.decreaseNestingLevel(), this.render();
    }
  }), Ae(Zi, "inputTypes", {
    deleteByComposition: function deleteByComposition() {
      return this.deleteInDirection("backward", {
        recordUndoEntry: !1
      });
    },
    deleteByCut: function deleteByCut() {
      return this.deleteInDirection("backward");
    },
    deleteByDrag: function deleteByDrag() {
      return this.event.preventDefault(), this.withTargetDOMRange(function () {
        var t;
        this.deleteByDragRange = null === (t = this.responder) || void 0 === t ? void 0 : t.getSelectedRange();
      });
    },
    deleteCompositionText: function deleteCompositionText() {
      return this.deleteInDirection("backward", {
        recordUndoEntry: !1
      });
    },
    deleteContent: function deleteContent() {
      return this.deleteInDirection("backward");
    },
    deleteContentBackward: function deleteContentBackward() {
      return this.deleteInDirection("backward");
    },
    deleteContentForward: function deleteContentForward() {
      return this.deleteInDirection("forward");
    },
    deleteEntireSoftLine: function deleteEntireSoftLine() {
      return this.deleteInDirection("forward");
    },
    deleteHardLineBackward: function deleteHardLineBackward() {
      return this.deleteInDirection("backward");
    },
    deleteHardLineForward: function deleteHardLineForward() {
      return this.deleteInDirection("forward");
    },
    deleteSoftLineBackward: function deleteSoftLineBackward() {
      return this.deleteInDirection("backward");
    },
    deleteSoftLineForward: function deleteSoftLineForward() {
      return this.deleteInDirection("forward");
    },
    deleteWordBackward: function deleteWordBackward() {
      return this.deleteInDirection("backward");
    },
    deleteWordForward: function deleteWordForward() {
      return this.deleteInDirection("forward");
    },
    formatBackColor: function formatBackColor() {
      return this.activateAttributeIfSupported("backgroundColor", this.event.data);
    },
    formatBold: function formatBold() {
      return this.toggleAttributeIfSupported("bold");
    },
    formatFontColor: function formatFontColor() {
      return this.activateAttributeIfSupported("color", this.event.data);
    },
    formatFontName: function formatFontName() {
      return this.activateAttributeIfSupported("font", this.event.data);
    },
    formatIndent: function formatIndent() {
      var t;
      if (null !== (t = this.responder) && void 0 !== t && t.canIncreaseNestingLevel()) return this.withTargetDOMRange(function () {
        var t;
        return null === (t = this.responder) || void 0 === t ? void 0 : t.increaseNestingLevel();
      });
    },
    formatItalic: function formatItalic() {
      return this.toggleAttributeIfSupported("italic");
    },
    formatJustifyCenter: function formatJustifyCenter() {
      return this.toggleAttributeIfSupported("justifyCenter");
    },
    formatJustifyFull: function formatJustifyFull() {
      return this.toggleAttributeIfSupported("justifyFull");
    },
    formatJustifyLeft: function formatJustifyLeft() {
      return this.toggleAttributeIfSupported("justifyLeft");
    },
    formatJustifyRight: function formatJustifyRight() {
      return this.toggleAttributeIfSupported("justifyRight");
    },
    formatOutdent: function formatOutdent() {
      var t;
      if (null !== (t = this.responder) && void 0 !== t && t.canDecreaseNestingLevel()) return this.withTargetDOMRange(function () {
        var t;
        return null === (t = this.responder) || void 0 === t ? void 0 : t.decreaseNestingLevel();
      });
    },
    formatRemove: function formatRemove() {
      this.withTargetDOMRange(function () {
        for (var _i47 in null === (t = this.responder) || void 0 === t ? void 0 : t.getCurrentAttributes()) {
          var t, e;
          null === (e = this.responder) || void 0 === e || e.removeCurrentAttribute(_i47);
        }
      });
    },
    formatSetBlockTextDirection: function formatSetBlockTextDirection() {
      return this.activateAttributeIfSupported("blockDir", this.event.data);
    },
    formatSetInlineTextDirection: function formatSetInlineTextDirection() {
      return this.activateAttributeIfSupported("textDir", this.event.data);
    },
    formatStrikeThrough: function formatStrikeThrough() {
      return this.toggleAttributeIfSupported("strike");
    },
    formatSubscript: function formatSubscript() {
      return this.toggleAttributeIfSupported("sub");
    },
    formatSuperscript: function formatSuperscript() {
      return this.toggleAttributeIfSupported("sup");
    },
    formatUnderline: function formatUnderline() {
      return this.toggleAttributeIfSupported("underline");
    },
    historyRedo: function historyRedo() {
      var t;
      return null === (t = this.delegate) || void 0 === t ? void 0 : t.inputControllerWillPerformRedo();
    },
    historyUndo: function historyUndo() {
      var t;
      return null === (t = this.delegate) || void 0 === t ? void 0 : t.inputControllerWillPerformUndo();
    },
    insertCompositionText: function insertCompositionText() {
      return this.composing = !0, this.insertString(this.event.data);
    },
    insertFromComposition: function insertFromComposition() {
      return this.composing = !1, this.insertString(this.event.data);
    },
    insertFromDrop: function insertFromDrop() {
      var t = this.deleteByDragRange;
      var e;
      if (t) return this.deleteByDragRange = null, null === (e = this.delegate) || void 0 === e || e.inputControllerWillMoveText(), this.withTargetDOMRange(function () {
        var e;
        return null === (e = this.responder) || void 0 === e ? void 0 : e.moveTextFromRange(t);
      });
    },
    insertFromPaste: function insertFromPaste() {
      var _this68 = this;
      var t;
      var e = this.event.dataTransfer,
        i = {
          dataTransfer: e
        },
        n = e.getData("URL"),
        r = e.getData("text/html");
      if (n) {
        var o;
        var _t58;
        this.event.preventDefault(), i.type = "text/html";
        var _r15 = e.getData("public.url-name");
        _t58 = _r15 ? Ut(_r15).trim() : n, i.html = this.createLinkHTML(n, _t58), null === (o = this.delegate) || void 0 === o || o.inputControllerWillPaste(i), this.withTargetDOMRange(function () {
          var t;
          return null === (t = this.responder) || void 0 === t ? void 0 : t.insertHTML(i.html);
        }), this.afterRender = function () {
          var t;
          return null === (t = _this68.delegate) || void 0 === t ? void 0 : t.inputControllerDidPaste(i);
        };
      } else if (yt(e)) {
        var s;
        i.type = "text/plain", i.string = e.getData("text/plain"), null === (s = this.delegate) || void 0 === s || s.inputControllerWillPaste(i), this.withTargetDOMRange(function () {
          var t;
          return null === (t = this.responder) || void 0 === t ? void 0 : t.insertString(i.string);
        }), this.afterRender = function () {
          var t;
          return null === (t = _this68.delegate) || void 0 === t ? void 0 : t.inputControllerDidPaste(i);
        };
      } else if (r) {
        var a;
        this.event.preventDefault(), i.type = "text/html", i.html = r, null === (a = this.delegate) || void 0 === a || a.inputControllerWillPaste(i), this.withTargetDOMRange(function () {
          var t;
          return null === (t = this.responder) || void 0 === t ? void 0 : t.insertHTML(i.html);
        }), this.afterRender = function () {
          var t;
          return null === (t = _this68.delegate) || void 0 === t ? void 0 : t.inputControllerDidPaste(i);
        };
      } else if (null !== (t = e.files) && void 0 !== t && t.length) {
        var l;
        i.type = "File", i.file = e.files[0], null === (l = this.delegate) || void 0 === l || l.inputControllerWillPaste(i), this.withTargetDOMRange(function () {
          var t;
          return null === (t = this.responder) || void 0 === t ? void 0 : t.insertFile(i.file);
        }), this.afterRender = function () {
          var t;
          return null === (t = _this68.delegate) || void 0 === t ? void 0 : t.inputControllerDidPaste(i);
        };
      }
    },
    insertFromYank: function insertFromYank() {
      return this.insertString(this.event.data);
    },
    insertLineBreak: function insertLineBreak() {
      return this.insertString("\n");
    },
    insertLink: function insertLink() {
      return this.activateAttributeIfSupported("href", this.event.data);
    },
    insertOrderedList: function insertOrderedList() {
      return this.toggleAttributeIfSupported("number");
    },
    insertParagraph: function insertParagraph() {
      var t;
      return null === (t = this.delegate) || void 0 === t || t.inputControllerWillPerformTyping(), this.withTargetDOMRange(function () {
        var t;
        return null === (t = this.responder) || void 0 === t ? void 0 : t.insertLineBreak();
      });
    },
    insertReplacementText: function insertReplacementText() {
      return this.insertString(this.event.dataTransfer.getData("text/plain"), {
        updatePosition: !1
      });
    },
    insertText: function insertText() {
      var t;
      return this.insertString(this.event.data || (null === (t = this.event.dataTransfer) || void 0 === t ? void 0 : t.getData("text/plain")));
    },
    insertTranspose: function insertTranspose() {
      return this.insertString(this.event.data);
    },
    insertUnorderedList: function insertUnorderedList() {
      return this.toggleAttributeIfSupported("bullet");
    }
  });
  var tn = function tn(t) {
      var e = document.createRange();
      return e.setStart(t.startContainer, t.startOffset), e.setEnd(t.endContainer, t.endOffset), e;
    },
    en = function en(t) {
      var e;
      return Array.from((null === (e = t.dataTransfer) || void 0 === e ? void 0 : e.types) || []).includes("Files");
    },
    nn = function nn(t) {
      var e = t.clipboardData;
      if (e) return e.types.includes("Files") && 1 === e.types.length && e.files.length >= 1;
    },
    rn = function rn(t) {
      var e = t.clipboardData;
      if (e) return e.types.includes("text/plain") && 1 === e.types.length;
    },
    on = function on(t) {
      var e = [];
      return t.altKey && e.push("alt"), t.shiftKey && e.push("shift"), e.push(t.key), e;
    },
    sn = function sn(t) {
      return {
        x: t.clientX,
        y: t.clientY
      };
    },
    an = "[data-trix-attribute]",
    ln = "[data-trix-action]",
    cn = "".concat(an, ", ").concat(ln),
    un = "[data-trix-dialog]",
    hn = "".concat(un, "[data-trix-active]"),
    dn = "".concat(un, " [data-trix-method]"),
    gn = "".concat(un, " [data-trix-input]"),
    mn = function mn(t, e) {
      return e || (e = fn(t)), t.querySelector("[data-trix-input][name='".concat(e, "']"));
    },
    pn = function pn(t) {
      return t.getAttribute("data-trix-action");
    },
    fn = function fn(t) {
      return t.getAttribute("data-trix-attribute") || t.getAttribute("data-trix-dialog-attribute");
    };
  var bn = /*#__PURE__*/function (_V20) {
    _inherits(bn, _V20);
    function bn(t) {
      var _this69;
      _classCallCheck(this, bn);
      _this69 = _callSuper(this, bn, [t]), _this69.didClickActionButton = _this69.didClickActionButton.bind(_assertThisInitialized(_this69)), _this69.didClickAttributeButton = _this69.didClickAttributeButton.bind(_assertThisInitialized(_this69)), _this69.didClickDialogButton = _this69.didClickDialogButton.bind(_assertThisInitialized(_this69)), _this69.didKeyDownDialogInput = _this69.didKeyDownDialogInput.bind(_assertThisInitialized(_this69)), _this69.element = t, _this69.attributes = {}, _this69.actions = {}, _this69.resetDialogInputs(), m("mousedown", {
        onElement: _this69.element,
        matchingSelector: ln,
        withCallback: _this69.didClickActionButton
      }), m("mousedown", {
        onElement: _this69.element,
        matchingSelector: an,
        withCallback: _this69.didClickAttributeButton
      }), m("click", {
        onElement: _this69.element,
        matchingSelector: cn,
        preventDefault: !0
      }), m("click", {
        onElement: _this69.element,
        matchingSelector: dn,
        withCallback: _this69.didClickDialogButton
      }), m("keydown", {
        onElement: _this69.element,
        matchingSelector: gn,
        withCallback: _this69.didKeyDownDialogInput
      });
      return _this69;
    }
    _createClass(bn, [{
      key: "didClickActionButton",
      value: function didClickActionButton(t, e) {
        var i;
        null === (i = this.delegate) || void 0 === i || i.toolbarDidClickButton(), t.preventDefault();
        var n = pn(e);
        return this.getDialog(n) ? this.toggleDialog(n) : null === (r = this.delegate) || void 0 === r ? void 0 : r.toolbarDidInvokeAction(n);
        var r;
      }
    }, {
      key: "didClickAttributeButton",
      value: function didClickAttributeButton(t, e) {
        var i;
        null === (i = this.delegate) || void 0 === i || i.toolbarDidClickButton(), t.preventDefault();
        var n = fn(e);
        var r;
        this.getDialog(n) ? this.toggleDialog(n) : null === (r = this.delegate) || void 0 === r || r.toolbarDidToggleAttribute(n);
        return this.refreshAttributeButtons();
      }
    }, {
      key: "didClickDialogButton",
      value: function didClickDialogButton(t, e) {
        var i = b(e, {
          matchingSelector: un
        });
        return this[e.getAttribute("data-trix-method")].call(this, i);
      }
    }, {
      key: "didKeyDownDialogInput",
      value: function didKeyDownDialogInput(t, e) {
        if (13 === t.keyCode) {
          t.preventDefault();
          var _i48 = e.getAttribute("name"),
            _n25 = this.getDialog(_i48);
          this.setAttribute(_n25);
        }
        if (27 === t.keyCode) return t.preventDefault(), this.hideDialog();
      }
    }, {
      key: "updateActions",
      value: function updateActions(t) {
        return this.actions = t, this.refreshActionButtons();
      }
    }, {
      key: "refreshActionButtons",
      value: function refreshActionButtons() {
        var _this70 = this;
        return this.eachActionButton(function (t, e) {
          t.disabled = !1 === _this70.actions[e];
        });
      }
    }, {
      key: "eachActionButton",
      value: function eachActionButton(t) {
        return Array.from(this.element.querySelectorAll(ln)).map(function (e) {
          return t(e, pn(e));
        });
      }
    }, {
      key: "updateAttributes",
      value: function updateAttributes(t) {
        return this.attributes = t, this.refreshAttributeButtons();
      }
    }, {
      key: "refreshAttributeButtons",
      value: function refreshAttributeButtons() {
        var _this71 = this;
        return this.eachAttributeButton(function (t, e) {
          return t.disabled = !1 === _this71.attributes[e], _this71.attributes[e] || _this71.dialogIsVisible(e) ? (t.setAttribute("data-trix-active", ""), t.classList.add("trix-active")) : (t.removeAttribute("data-trix-active"), t.classList.remove("trix-active"));
        });
      }
    }, {
      key: "eachAttributeButton",
      value: function eachAttributeButton(t) {
        return Array.from(this.element.querySelectorAll(an)).map(function (e) {
          return t(e, fn(e));
        });
      }
    }, {
      key: "applyKeyboardCommand",
      value: function applyKeyboardCommand(t) {
        var e = JSON.stringify(t.sort());
        for (var _i49 = 0, _Array$from22 = Array.from(this.element.querySelectorAll("[data-trix-key]")); _i49 < _Array$from22.length; _i49++) {
          var _t59 = _Array$from22[_i49];
          var _i50 = _t59.getAttribute("data-trix-key").split("+");
          if (JSON.stringify(_i50.sort()) === e) return p("mousedown", {
            onElement: _t59
          }), !0;
        }
        return !1;
      }
    }, {
      key: "dialogIsVisible",
      value: function dialogIsVisible(t) {
        var e = this.getDialog(t);
        if (e) return e.hasAttribute("data-trix-active");
      }
    }, {
      key: "toggleDialog",
      value: function toggleDialog(t) {
        return this.dialogIsVisible(t) ? this.hideDialog() : this.showDialog(t);
      }
    }, {
      key: "showDialog",
      value: function showDialog(t) {
        var e, i;
        this.hideDialog(), null === (e = this.delegate) || void 0 === e || e.toolbarWillShowDialog();
        var n = this.getDialog(t);
        n.setAttribute("data-trix-active", ""), n.classList.add("trix-active"), Array.from(n.querySelectorAll("input[disabled]")).forEach(function (t) {
          t.removeAttribute("disabled");
        });
        var r = fn(n);
        if (r) {
          var _e51 = mn(n, t);
          _e51 && (_e51.value = this.attributes[r] || "", _e51.select());
        }
        return null === (i = this.delegate) || void 0 === i ? void 0 : i.toolbarDidShowDialog(t);
      }
    }, {
      key: "setAttribute",
      value: function setAttribute(t) {
        var e = fn(t),
          i = mn(t, e);
        return i.willValidate && !i.checkValidity() ? (i.setAttribute("data-trix-validate", ""), i.classList.add("trix-validate"), i.focus()) : (null === (n = this.delegate) || void 0 === n || n.toolbarDidUpdateAttribute(e, i.value), this.hideDialog());
        var n;
      }
    }, {
      key: "removeAttribute",
      value: function removeAttribute(t) {
        var e;
        var i = fn(t);
        return null === (e = this.delegate) || void 0 === e || e.toolbarDidRemoveAttribute(i), this.hideDialog();
      }
    }, {
      key: "hideDialog",
      value: function hideDialog() {
        var t = this.element.querySelector(hn);
        var e;
        if (t) return t.removeAttribute("data-trix-active"), t.classList.remove("trix-active"), this.resetDialogInputs(), null === (e = this.delegate) || void 0 === e ? void 0 : e.toolbarDidHideDialog(function (t) {
          return t.getAttribute("data-trix-dialog");
        }(t));
      }
    }, {
      key: "resetDialogInputs",
      value: function resetDialogInputs() {
        Array.from(this.element.querySelectorAll(gn)).forEach(function (t) {
          t.setAttribute("disabled", "disabled"), t.removeAttribute("data-trix-validate"), t.classList.remove("trix-validate");
        });
      }
    }, {
      key: "getDialog",
      value: function getDialog(t) {
        return this.element.querySelector("[data-trix-dialog=".concat(t, "]"));
      }
    }]);
    return bn;
  }(V);
  var vn = /*#__PURE__*/function (_Ni) {
    _inherits(vn, _Ni);
    function vn(t) {
      var _this72;
      _classCallCheck(this, vn);
      var e = t.editorElement,
        i = t.document,
        n = t.html;
      _this72 = _callSuper(this, vn, arguments), _this72.editorElement = e, _this72.selectionManager = new ki(_this72.editorElement), _this72.selectionManager.delegate = _assertThisInitialized(_this72), _this72.composition = new di(), _this72.composition.delegate = _assertThisInitialized(_this72), _this72.attachmentManager = new ui(_this72.composition.getAttachments()), _this72.attachmentManager.delegate = _assertThisInitialized(_this72), _this72.inputController = 2 === O.getLevel() ? new Zi(_this72.editorElement) : new Ki(_this72.editorElement), _this72.inputController.delegate = _assertThisInitialized(_this72), _this72.inputController.responder = _this72.composition, _this72.compositionController = new Ii(_this72.editorElement, _this72.composition), _this72.compositionController.delegate = _assertThisInitialized(_this72), _this72.toolbarController = new bn(_this72.editorElement.toolbarElement), _this72.toolbarController.delegate = _assertThisInitialized(_this72), _this72.editor = new Ai(_this72.composition, _this72.selectionManager, _this72.editorElement), i ? _this72.editor.loadDocument(i) : _this72.editor.loadHTML(n);
      return _this72;
    }
    _createClass(vn, [{
      key: "registerSelectionManager",
      value: function registerSelectionManager() {
        return Pt.registerSelectionManager(this.selectionManager);
      }
    }, {
      key: "unregisterSelectionManager",
      value: function unregisterSelectionManager() {
        return Pt.unregisterSelectionManager(this.selectionManager);
      }
    }, {
      key: "render",
      value: function render() {
        return this.compositionController.render();
      }
    }, {
      key: "reparse",
      value: function reparse() {
        return this.composition.replaceHTML(this.editorElement.innerHTML);
      }
    }, {
      key: "compositionDidChangeDocument",
      value: function compositionDidChangeDocument(t) {
        if (this.notifyEditorElement("document-change"), !this.handlingInput) return this.render();
      }
    }, {
      key: "compositionDidChangeCurrentAttributes",
      value: function compositionDidChangeCurrentAttributes(t) {
        return this.currentAttributes = t, this.toolbarController.updateAttributes(this.currentAttributes), this.updateCurrentActions(), this.notifyEditorElement("attributes-change", {
          attributes: this.currentAttributes
        });
      }
    }, {
      key: "compositionDidPerformInsertionAtRange",
      value: function compositionDidPerformInsertionAtRange(t) {
        this.pasting && (this.pastedRange = t);
      }
    }, {
      key: "compositionShouldAcceptFile",
      value: function compositionShouldAcceptFile(t) {
        return this.notifyEditorElement("file-accept", {
          file: t
        });
      }
    }, {
      key: "compositionDidAddAttachment",
      value: function compositionDidAddAttachment(t) {
        var e = this.attachmentManager.manageAttachment(t);
        return this.notifyEditorElement("attachment-add", {
          attachment: e
        });
      }
    }, {
      key: "compositionDidEditAttachment",
      value: function compositionDidEditAttachment(t) {
        this.compositionController.rerenderViewForObject(t);
        var e = this.attachmentManager.manageAttachment(t);
        return this.notifyEditorElement("attachment-edit", {
          attachment: e
        }), this.notifyEditorElement("change");
      }
    }, {
      key: "compositionDidChangeAttachmentPreviewURL",
      value: function compositionDidChangeAttachmentPreviewURL(t) {
        return this.compositionController.invalidateViewForObject(t), this.notifyEditorElement("change");
      }
    }, {
      key: "compositionDidRemoveAttachment",
      value: function compositionDidRemoveAttachment(t) {
        var e = this.attachmentManager.unmanageAttachment(t);
        return this.notifyEditorElement("attachment-remove", {
          attachment: e
        });
      }
    }, {
      key: "compositionDidStartEditingAttachment",
      value: function compositionDidStartEditingAttachment(t, e) {
        return this.attachmentLocationRange = this.composition.document.getLocationRangeOfAttachment(t), this.compositionController.installAttachmentEditorForAttachment(t, e), this.selectionManager.setLocationRange(this.attachmentLocationRange);
      }
    }, {
      key: "compositionDidStopEditingAttachment",
      value: function compositionDidStopEditingAttachment(t) {
        this.compositionController.uninstallAttachmentEditor(), this.attachmentLocationRange = null;
      }
    }, {
      key: "compositionDidRequestChangingSelectionToLocationRange",
      value: function compositionDidRequestChangingSelectionToLocationRange(t) {
        if (!this.loadingSnapshot || this.isFocused()) return this.requestedLocationRange = t, this.compositionRevisionWhenLocationRangeRequested = this.composition.revision, this.handlingInput ? void 0 : this.render();
      }
    }, {
      key: "compositionWillLoadSnapshot",
      value: function compositionWillLoadSnapshot() {
        this.loadingSnapshot = !0;
      }
    }, {
      key: "compositionDidLoadSnapshot",
      value: function compositionDidLoadSnapshot() {
        this.compositionController.refreshViewCache(), this.render(), this.loadingSnapshot = !1;
      }
    }, {
      key: "getSelectionManager",
      value: function getSelectionManager() {
        return this.selectionManager;
      }
    }, {
      key: "attachmentManagerDidRequestRemovalOfAttachment",
      value: function attachmentManagerDidRequestRemovalOfAttachment(t) {
        return this.removeAttachment(t);
      }
    }, {
      key: "compositionControllerWillSyncDocumentView",
      value: function compositionControllerWillSyncDocumentView() {
        return this.inputController.editorWillSyncDocumentView(), this.selectionManager.lock(), this.selectionManager.clearSelection();
      }
    }, {
      key: "compositionControllerDidSyncDocumentView",
      value: function compositionControllerDidSyncDocumentView() {
        return this.inputController.editorDidSyncDocumentView(), this.selectionManager.unlock(), this.updateCurrentActions(), this.notifyEditorElement("sync");
      }
    }, {
      key: "compositionControllerDidRender",
      value: function compositionControllerDidRender() {
        this.requestedLocationRange && (this.compositionRevisionWhenLocationRangeRequested === this.composition.revision && this.selectionManager.setLocationRange(this.requestedLocationRange), this.requestedLocationRange = null, this.compositionRevisionWhenLocationRangeRequested = null), this.renderedCompositionRevision !== this.composition.revision && (this.runEditorFilters(), this.composition.updateCurrentAttributes(), this.notifyEditorElement("render")), this.renderedCompositionRevision = this.composition.revision;
      }
    }, {
      key: "compositionControllerDidFocus",
      value: function compositionControllerDidFocus() {
        return this.isFocusedInvisibly() && this.setLocationRange({
          index: 0,
          offset: 0
        }), this.toolbarController.hideDialog(), this.notifyEditorElement("focus");
      }
    }, {
      key: "compositionControllerDidBlur",
      value: function compositionControllerDidBlur() {
        return this.notifyEditorElement("blur");
      }
    }, {
      key: "compositionControllerDidSelectAttachment",
      value: function compositionControllerDidSelectAttachment(t, e) {
        return this.toolbarController.hideDialog(), this.composition.editAttachment(t, e);
      }
    }, {
      key: "compositionControllerDidRequestDeselectingAttachment",
      value: function compositionControllerDidRequestDeselectingAttachment(t) {
        var e = this.attachmentLocationRange || this.composition.document.getLocationRangeOfAttachment(t);
        return this.selectionManager.setLocationRange(e[1]);
      }
    }, {
      key: "compositionControllerWillUpdateAttachment",
      value: function compositionControllerWillUpdateAttachment(t) {
        return this.editor.recordUndoEntry("Edit Attachment", {
          context: t.id,
          consolidatable: !0
        });
      }
    }, {
      key: "compositionControllerDidRequestRemovalOfAttachment",
      value: function compositionControllerDidRequestRemovalOfAttachment(t) {
        return this.removeAttachment(t);
      }
    }, {
      key: "inputControllerWillHandleInput",
      value: function inputControllerWillHandleInput() {
        this.handlingInput = !0, this.requestedRender = !1;
      }
    }, {
      key: "inputControllerDidRequestRender",
      value: function inputControllerDidRequestRender() {
        this.requestedRender = !0;
      }
    }, {
      key: "inputControllerDidHandleInput",
      value: function inputControllerDidHandleInput() {
        if (this.handlingInput = !1, this.requestedRender) return this.requestedRender = !1, this.render();
      }
    }, {
      key: "inputControllerDidAllowUnhandledInput",
      value: function inputControllerDidAllowUnhandledInput() {
        return this.notifyEditorElement("change");
      }
    }, {
      key: "inputControllerDidRequestReparse",
      value: function inputControllerDidRequestReparse() {
        return this.reparse();
      }
    }, {
      key: "inputControllerWillPerformTyping",
      value: function inputControllerWillPerformTyping() {
        return this.recordTypingUndoEntry();
      }
    }, {
      key: "inputControllerWillPerformFormatting",
      value: function inputControllerWillPerformFormatting(t) {
        return this.recordFormattingUndoEntry(t);
      }
    }, {
      key: "inputControllerWillCutText",
      value: function inputControllerWillCutText() {
        return this.editor.recordUndoEntry("Cut");
      }
    }, {
      key: "inputControllerWillPaste",
      value: function inputControllerWillPaste(t) {
        return this.editor.recordUndoEntry("Paste"), this.pasting = !0, this.notifyEditorElement("before-paste", {
          paste: t
        });
      }
    }, {
      key: "inputControllerDidPaste",
      value: function inputControllerDidPaste(t) {
        return t.range = this.pastedRange, this.pastedRange = null, this.pasting = null, this.notifyEditorElement("paste", {
          paste: t
        });
      }
    }, {
      key: "inputControllerWillMoveText",
      value: function inputControllerWillMoveText() {
        return this.editor.recordUndoEntry("Move");
      }
    }, {
      key: "inputControllerWillAttachFiles",
      value: function inputControllerWillAttachFiles() {
        return this.editor.recordUndoEntry("Drop Files");
      }
    }, {
      key: "inputControllerWillPerformUndo",
      value: function inputControllerWillPerformUndo() {
        return this.editor.undo();
      }
    }, {
      key: "inputControllerWillPerformRedo",
      value: function inputControllerWillPerformRedo() {
        return this.editor.redo();
      }
    }, {
      key: "inputControllerDidReceiveKeyboardCommand",
      value: function inputControllerDidReceiveKeyboardCommand(t) {
        return this.toolbarController.applyKeyboardCommand(t);
      }
    }, {
      key: "inputControllerDidStartDrag",
      value: function inputControllerDidStartDrag() {
        this.locationRangeBeforeDrag = this.selectionManager.getLocationRange();
      }
    }, {
      key: "inputControllerDidReceiveDragOverPoint",
      value: function inputControllerDidReceiveDragOverPoint(t) {
        return this.selectionManager.setLocationRangeFromPointRange(t);
      }
    }, {
      key: "inputControllerDidCancelDrag",
      value: function inputControllerDidCancelDrag() {
        this.selectionManager.setLocationRange(this.locationRangeBeforeDrag), this.locationRangeBeforeDrag = null;
      }
    }, {
      key: "locationRangeDidChange",
      value: function locationRangeDidChange(t) {
        return this.composition.updateCurrentAttributes(), this.updateCurrentActions(), this.attachmentLocationRange && !Dt(this.attachmentLocationRange, t) && this.composition.stopEditingAttachment(), this.notifyEditorElement("selection-change");
      }
    }, {
      key: "toolbarDidClickButton",
      value: function toolbarDidClickButton() {
        if (!this.getLocationRange()) return this.setLocationRange({
          index: 0,
          offset: 0
        });
      }
    }, {
      key: "toolbarDidInvokeAction",
      value: function toolbarDidInvokeAction(t) {
        return this.invokeAction(t);
      }
    }, {
      key: "toolbarDidToggleAttribute",
      value: function toolbarDidToggleAttribute(t) {
        if (this.recordFormattingUndoEntry(t), this.composition.toggleCurrentAttribute(t), this.render(), !this.selectionFrozen) return this.editorElement.focus();
      }
    }, {
      key: "toolbarDidUpdateAttribute",
      value: function toolbarDidUpdateAttribute(t, e) {
        if (this.recordFormattingUndoEntry(t), this.composition.setCurrentAttribute(t, e), this.render(), !this.selectionFrozen) return this.editorElement.focus();
      }
    }, {
      key: "toolbarDidRemoveAttribute",
      value: function toolbarDidRemoveAttribute(t) {
        if (this.recordFormattingUndoEntry(t), this.composition.removeCurrentAttribute(t), this.render(), !this.selectionFrozen) return this.editorElement.focus();
      }
    }, {
      key: "toolbarWillShowDialog",
      value: function toolbarWillShowDialog(t) {
        return this.composition.expandSelectionForEditing(), this.freezeSelection();
      }
    }, {
      key: "toolbarDidShowDialog",
      value: function toolbarDidShowDialog(t) {
        return this.notifyEditorElement("toolbar-dialog-show", {
          dialogName: t
        });
      }
    }, {
      key: "toolbarDidHideDialog",
      value: function toolbarDidHideDialog(t) {
        return this.thawSelection(), this.editorElement.focus(), this.notifyEditorElement("toolbar-dialog-hide", {
          dialogName: t
        });
      }
    }, {
      key: "freezeSelection",
      value: function freezeSelection() {
        if (!this.selectionFrozen) return this.selectionManager.lock(), this.composition.freezeSelection(), this.selectionFrozen = !0, this.render();
      }
    }, {
      key: "thawSelection",
      value: function thawSelection() {
        if (this.selectionFrozen) return this.composition.thawSelection(), this.selectionManager.unlock(), this.selectionFrozen = !1, this.render();
      }
    }, {
      key: "canInvokeAction",
      value: function canInvokeAction(t) {
        return !!this.actionIsExternal(t) || !(null === (e = this.actions[t]) || void 0 === e || null === (i = e.test) || void 0 === i || !i.call(this));
        var e, i;
      }
    }, {
      key: "invokeAction",
      value: function invokeAction(t) {
        return this.actionIsExternal(t) ? this.notifyEditorElement("action-invoke", {
          actionName: t
        }) : null === (e = this.actions[t]) || void 0 === e || null === (i = e.perform) || void 0 === i ? void 0 : i.call(this);
        var e, i;
      }
    }, {
      key: "actionIsExternal",
      value: function actionIsExternal(t) {
        return /^x-./.test(t);
      }
    }, {
      key: "getCurrentActions",
      value: function getCurrentActions() {
        var t = {};
        for (var _e52 in this.actions) t[_e52] = this.canInvokeAction(_e52);
        return t;
      }
    }, {
      key: "updateCurrentActions",
      value: function updateCurrentActions() {
        var t = this.getCurrentActions();
        if (!Et(t, this.currentActions)) return this.currentActions = t, this.toolbarController.updateActions(this.currentActions), this.notifyEditorElement("actions-change", {
          actions: this.currentActions
        });
      }
    }, {
      key: "runEditorFilters",
      value: function runEditorFilters() {
        var _this73 = this;
        var t = this.composition.getSnapshot();
        if (Array.from(this.editor.filters).forEach(function (e) {
          var _t60 = t,
            i = _t60.document,
            n = _t60.selectedRange;
          t = e.call(_this73.editor, t) || {}, t.document || (t.document = i), t.selectedRange || (t.selectedRange = n);
        }), e = t, i = this.composition.getSnapshot(), !Dt(e.selectedRange, i.selectedRange) || !e.document.isEqualTo(i.document)) return this.composition.loadSnapshot(t);
        var e, i;
      }
    }, {
      key: "updateInputElement",
      value: function updateInputElement() {
        var t = function (t, e) {
          var i = ai[e];
          if (i) return i(t);
          throw new Error("unknown content type: ".concat(e));
        }(this.compositionController.getSerializableElement(), "text/html");
        return this.editorElement.setInputElementValue(t);
      }
    }, {
      key: "notifyEditorElement",
      value: function notifyEditorElement(t, e) {
        switch (t) {
          case "document-change":
            this.documentChangedSinceLastRender = !0;
            break;
          case "render":
            this.documentChangedSinceLastRender && (this.documentChangedSinceLastRender = !1, this.notifyEditorElement("change"));
            break;
          case "change":
          case "attachment-add":
          case "attachment-edit":
          case "attachment-remove":
            this.updateInputElement();
        }
        return this.editorElement.notify(t, e);
      }
    }, {
      key: "removeAttachment",
      value: function removeAttachment(t) {
        return this.editor.recordUndoEntry("Delete Attachment"), this.composition.removeAttachment(t), this.render();
      }
    }, {
      key: "recordFormattingUndoEntry",
      value: function recordFormattingUndoEntry(t) {
        var e = dt(t),
          i = this.selectionManager.getLocationRange();
        if (e || !Lt(i)) return this.editor.recordUndoEntry("Formatting", {
          context: this.getUndoContext(),
          consolidatable: !0
        });
      }
    }, {
      key: "recordTypingUndoEntry",
      value: function recordTypingUndoEntry() {
        return this.editor.recordUndoEntry("Typing", {
          context: this.getUndoContext(this.currentAttributes),
          consolidatable: !0
        });
      }
    }, {
      key: "getUndoContext",
      value: function getUndoContext() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        return [this.getLocationContext(), this.getTimeContext()].concat(_toConsumableArray(Array.from(e)));
      }
    }, {
      key: "getLocationContext",
      value: function getLocationContext() {
        var t = this.selectionManager.getLocationRange();
        return Lt(t) ? t[0].index : t;
      }
    }, {
      key: "getTimeContext",
      value: function getTimeContext() {
        return q.interval > 0 ? Math.floor(new Date().getTime() / q.interval) : 0;
      }
    }, {
      key: "isFocused",
      value: function isFocused() {
        var t;
        return this.editorElement === (null === (t = this.editorElement.ownerDocument) || void 0 === t ? void 0 : t.activeElement);
      }
    }, {
      key: "isFocusedInvisibly",
      value: function isFocusedInvisibly() {
        return this.isFocused() && !this.getLocationRange();
      }
    }, {
      key: "actions",
      get: function get() {
        return this.constructor.actions;
      }
    }]);
    return vn;
  }(Ni);
  Ae(vn, "actions", {
    undo: {
      test: function test() {
        return this.editor.canUndo();
      },
      perform: function perform() {
        return this.editor.undo();
      }
    },
    redo: {
      test: function test() {
        return this.editor.canRedo();
      },
      perform: function perform() {
        return this.editor.redo();
      }
    },
    link: {
      test: function test() {
        return this.editor.canActivateAttribute("href");
      }
    },
    increaseNestingLevel: {
      test: function test() {
        return this.editor.canIncreaseNestingLevel();
      },
      perform: function perform() {
        return this.editor.increaseNestingLevel() && this.render();
      }
    },
    decreaseNestingLevel: {
      test: function test() {
        return this.editor.canDecreaseNestingLevel();
      },
      perform: function perform() {
        return this.editor.decreaseNestingLevel() && this.render();
      }
    },
    attachFiles: {
      test: function test() {
        return !0;
      },
      perform: function perform() {
        return O.pickFiles(this.editor.insertFiles);
      }
    }
  }), vn.proxyMethod("getSelectionManager().setLocationRange"), vn.proxyMethod("getSelectionManager().getLocationRange");
  var An = Object.freeze({
      __proto__: null,
      AttachmentEditorController: Pi,
      CompositionController: Ii,
      Controller: Ni,
      EditorController: vn,
      InputController: Vi,
      Level0InputController: Ki,
      Level2InputController: Zi,
      ToolbarController: bn
    }),
    xn = Object.freeze({
      __proto__: null,
      MutationObserver: Wi,
      SelectionChangeObserver: Ft
    }),
    yn = Object.freeze({
      __proto__: null,
      FileVerificationOperation: Ui,
      ImagePreloadOperation: ye
    });
  ft("trix-toolbar", "%t {\n  display: block;\n}\n\n%t {\n  white-space: nowrap;\n}\n\n%t [data-trix-dialog] {\n  display: none;\n}\n\n%t [data-trix-dialog][data-trix-active] {\n  display: block;\n}\n\n%t [data-trix-dialog] [data-trix-validate]:invalid {\n  background-color: #ffdddd;\n}");
  var Cn = /*#__PURE__*/function (_HTMLElement) {
    _inherits(Cn, _HTMLElement);
    function Cn() {
      _classCallCheck(this, Cn);
      return _callSuper(this, Cn, arguments);
    }
    _createClass(Cn, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        "" === this.innerHTML && (this.innerHTML = W.getDefaultHTML());
      }
    }]);
    return Cn;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
  var Rn = 0;
  var Sn = function Sn(t) {
      if (!t.hasAttribute("contenteditable")) return t.setAttribute("contenteditable", ""), function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return e.times = 1, m(t, e);
      }("focus", {
        onElement: t,
        withCallback: function withCallback() {
          return En(t);
        }
      });
    },
    En = function En(t) {
      return kn(t), Ln(t);
    },
    kn = function kn(t) {
      var e, i;
      if (null !== (e = (i = document).queryCommandSupported) && void 0 !== e && e.call(i, "enableObjectResizing")) return document.execCommand("enableObjectResizing", !1, !1), m("mscontrolselect", {
        onElement: t,
        preventDefault: !0
      });
    },
    Ln = function Ln(t) {
      var e, i;
      if (null !== (e = (i = document).queryCommandSupported) && void 0 !== e && e.call(i, "DefaultParagraphSeparator")) {
        var _t61 = n["default"].tagName;
        if (["div", "p"].includes(_t61)) return document.execCommand("DefaultParagraphSeparator", !1, _t61);
      }
    },
    Dn = o.forcesObjectResizing ? {
      display: "inline",
      width: "auto"
    } : {
      display: "inline-block",
      width: "1px"
    };
  ft("trix-editor", "%t {\n    display: block;\n}\n\n%t:empty:not(:focus)::before {\n    content: attr(placeholder);\n    color: graytext;\n    cursor: text;\n    pointer-events: none;\n    white-space: pre-line;\n}\n\n%t a[contenteditable=false] {\n    cursor: text;\n}\n\n%t img {\n    max-width: 100%;\n    height: auto;\n}\n\n%t ".concat(e, " figcaption textarea {\n    resize: none;\n}\n\n%t ").concat(e, " figcaption textarea.trix-autoresize-clone {\n    position: absolute;\n    left: -9999px;\n    max-height: 0px;\n}\n\n%t ").concat(e, " figcaption[data-trix-placeholder]:empty::before {\n    content: attr(data-trix-placeholder);\n    color: graytext;\n}\n\n%t [data-trix-cursor-target] {\n    display: ").concat(Dn.display, " !important;\n    width: ").concat(Dn.width, " !important;\n    padding: 0 !important;\n    margin: 0 !important;\n    border: none !important;\n}\n\n%t [data-trix-cursor-target=left] {\n    vertical-align: top !important;\n    margin-left: -1px !important;\n}\n\n%t [data-trix-cursor-target=right] {\n    vertical-align: bottom !important;\n    margin-right: -1px !important;\n}"));
  var wn = /*#__PURE__*/function (_HTMLElement2) {
    _inherits(wn, _HTMLElement2);
    function wn() {
      _classCallCheck(this, wn);
      return _callSuper(this, wn, arguments);
    }
    _createClass(wn, [{
      key: "trixId",
      get: function get() {
        return this.hasAttribute("trix-id") ? this.getAttribute("trix-id") : (this.setAttribute("trix-id", ++Rn), this.trixId);
      }
    }, {
      key: "labels",
      get: function get() {
        var t = [];
        this.id && this.ownerDocument && t.push.apply(t, _toConsumableArray(Array.from(this.ownerDocument.querySelectorAll("label[for='".concat(this.id, "']")) || [])));
        var e = b(this, {
          matchingSelector: "label"
        });
        return e && [this, null].includes(e.control) && t.push(e), t;
      }
    }, {
      key: "toolbarElement",
      get: function get() {
        var t;
        if (this.hasAttribute("toolbar")) return null === (t = this.ownerDocument) || void 0 === t ? void 0 : t.getElementById(this.getAttribute("toolbar"));
        if (this.parentNode) {
          var _t62 = "trix-toolbar-".concat(this.trixId);
          this.setAttribute("toolbar", _t62);
          var _e53 = S("trix-toolbar", {
            id: _t62
          });
          return this.parentNode.insertBefore(_e53, this), _e53;
        }
      }
    }, {
      key: "form",
      get: function get() {
        var t;
        return null === (t = this.inputElement) || void 0 === t ? void 0 : t.form;
      }
    }, {
      key: "inputElement",
      get: function get() {
        var t;
        if (this.hasAttribute("input")) return null === (t = this.ownerDocument) || void 0 === t ? void 0 : t.getElementById(this.getAttribute("input"));
        if (this.parentNode) {
          var _t63 = "trix-input-".concat(this.trixId);
          this.setAttribute("input", _t63);
          var _e54 = S("input", {
            type: "hidden",
            id: _t63
          });
          return this.parentNode.insertBefore(_e54, this.nextElementSibling), _e54;
        }
      }
    }, {
      key: "editor",
      get: function get() {
        var t;
        return null === (t = this.editorController) || void 0 === t ? void 0 : t.editor;
      }
    }, {
      key: "name",
      get: function get() {
        var t;
        return null === (t = this.inputElement) || void 0 === t ? void 0 : t.name;
      }
    }, {
      key: "value",
      get: function get() {
        var t;
        return null === (t = this.inputElement) || void 0 === t ? void 0 : t.value;
      },
      set: function set(t) {
        var e;
        this.defaultValue = t, null === (e = this.editor) || void 0 === e || e.loadHTML(this.defaultValue);
      }
    }, {
      key: "notify",
      value: function notify(t, e) {
        if (this.editorController) return p("trix-".concat(t), {
          onElement: this,
          attributes: e
        });
      }
    }, {
      key: "setInputElementValue",
      value: function setInputElementValue(t) {
        this.inputElement && (this.inputElement.value = t);
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this74 = this;
        this.hasAttribute("data-trix-internal") || (Sn(this), function (t) {
          if (!t.hasAttribute("role")) t.setAttribute("role", "textbox");
        }(this), function (t) {
          if (t.hasAttribute("aria-label") || t.hasAttribute("aria-labelledby")) return;
          var e = function e() {
            var e = Array.from(t.labels).map(function (e) {
                if (!e.contains(t)) return e.textContent;
              }).filter(function (t) {
                return t;
              }),
              i = e.join(" ");
            return i ? t.setAttribute("aria-label", i) : t.removeAttribute("aria-label");
          };
          e(), m("focus", {
            onElement: t,
            withCallback: e
          });
        }(this), this.editorController || (p("trix-before-initialize", {
          onElement: this
        }), this.editorController = new vn({
          editorElement: this,
          html: this.defaultValue = this.value
        }), requestAnimationFrame(function () {
          return p("trix-initialize", {
            onElement: _this74
          });
        })), this.editorController.registerSelectionManager(), this.registerResetListener(), this.registerClickListener(), function (t) {
          if (!document.querySelector(":focus") && t.hasAttribute("autofocus") && document.querySelector("[autofocus]") === t) t.focus();
        }(this));
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        var t;
        return null === (t = this.editorController) || void 0 === t || t.unregisterSelectionManager(), this.unregisterResetListener(), this.unregisterClickListener();
      }
    }, {
      key: "registerResetListener",
      value: function registerResetListener() {
        return this.resetListener = this.resetBubbled.bind(this), window.addEventListener("reset", this.resetListener, !1);
      }
    }, {
      key: "unregisterResetListener",
      value: function unregisterResetListener() {
        return window.removeEventListener("reset", this.resetListener, !1);
      }
    }, {
      key: "registerClickListener",
      value: function registerClickListener() {
        return this.clickListener = this.clickBubbled.bind(this), window.addEventListener("click", this.clickListener, !1);
      }
    }, {
      key: "unregisterClickListener",
      value: function unregisterClickListener() {
        return window.removeEventListener("click", this.clickListener, !1);
      }
    }, {
      key: "resetBubbled",
      value: function resetBubbled(t) {
        if (!t.defaultPrevented && t.target === this.form) return this.reset();
      }
    }, {
      key: "clickBubbled",
      value: function clickBubbled(t) {
        if (t.defaultPrevented) return;
        if (this.contains(t.target)) return;
        var e = b(t.target, {
          matchingSelector: "label"
        });
        return e && Array.from(this.labels).includes(e) ? this.focus() : void 0;
      }
    }, {
      key: "reset",
      value: function reset() {
        this.value = this.defaultValue;
      }
    }]);
    return wn;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
  var Tn = {
    VERSION: t,
    config: U,
    core: li,
    models: Li,
    views: Di,
    controllers: An,
    observers: xn,
    operations: yn,
    elements: Object.freeze({
      __proto__: null,
      TrixEditorElement: wn,
      TrixToolbarElement: Cn
    }),
    filters: Object.freeze({
      __proto__: null,
      Filter: fi,
      attachmentGalleryFilter: bi
    })
  };
  return window.Trix = Tn, setTimeout(function () {
    customElements.get("trix-toolbar") || customElements.define("trix-toolbar", Cn), customElements.get("trix-editor") || customElements.define("trix-editor", wn);
  }, 0), Tn;
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/js/trix.js");
/******/ 	
/******/ })()
;