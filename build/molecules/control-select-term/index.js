"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _element = require("@wordpress/element");
var _i18n = require("@wordpress/i18n");
var _htmlEntities = require("@wordpress/html-entities");
var _data = require("@wordpress/data");
var _coreData = require("@wordpress/core-data");
var _classnames = _interopRequireDefault(require("classnames"));
var _lodash = require("lodash");
var _select4 = require("../../atoms/select");
var _notice = _interopRequireDefault(require("../notice"));
var _getTerms = _interopRequireDefault(require("../../api/get-terms"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
var _excluded = ["label", "value", "onChange", "showOptionNone", "optionNoneValue", "tax", "variant", "className", "relation", "relationId"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; } /* WordPress*/ /* WordPress*/ /*Library*/ /*Inbuilt */ /*Inbuilt*/
/* Local*/
var perPage = 100;
var getTermsOptions = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
    var tax, restBase, restNamespace, _ref$queryArgs, queryArgs, gotItems, options;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          tax = _ref.tax, restBase = _ref.restBase, restNamespace = _ref.restNamespace, _ref$queryArgs = _ref.queryArgs, queryArgs = _ref$queryArgs === void 0 ? null : _ref$queryArgs;
          _context.next = 3;
          return (0, _getTerms.default)({
            tax: tax,
            restBase: restBase,
            restNamespace: restNamespace,
            queryArgs: queryArgs
          });
        case 3:
          gotItems = _context.sent;
          options = [];
          if (gotItems) {
            gotItems.forEach(function (item) {
              options.push({
                value: item.id,
                label: item.name || (0, _i18n.__)('Untitled', 'atrc-prefix-atrc')
              });
            });
          }
          return _context.abrupt("return", options);
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getTermsOptions(_x) {
    return _ref2.apply(this, arguments);
  };
}();

/*Select Term*/
function AtrcControlSelectTerm(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? (0, _i18n.__)('Terms', 'atrc-prefix-atrc') : _props$label,
    value = props.value,
    onChange = props.onChange,
    _props$showOptionNone = props.showOptionNone,
    showOptionNone = _props$showOptionNone === void 0 ? true : _props$showOptionNone,
    _props$optionNoneValu = props.optionNoneValue,
    optionNoneValue = _props$optionNoneValu === void 0 ? 0 : _props$optionNoneValu,
    _props$tax = props.tax,
    tax = _props$tax === void 0 ? '' : _props$tax,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$relation = props.relation,
    relation = _props$relation === void 0 ? '' : _props$relation,
    _props$relationId = props.relationId,
    relationId = _props$relationId === void 0 ? 0 : _props$relationId,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var _useState = (0, _element.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    hasFixNotice = _useState2[0],
    setHasFixNotice = _useState2[1];
  var queryArgs = (0, _data.useSelect)(function (select) {
    var newQueryArgs = {
      per_page: perPage,
      _fields: 'id,name',
      context: 'view'
    };
    if (relation) {
      if ('child' === relation) {
        /*get children by relation id*/
        newQueryArgs.parent = [relationId];
      } else if ('termParent' === relation) {
        var _select = select(_coreData.store),
          getEntityRecord = _select.getEntityRecord;
        var gotItem = getEntityRecord('taxonomy', tax, relationId);
        if (gotItem && gotItem.parent) {
          /*get parent by relation id*/
          newQueryArgs.include = [gotItem.parent];
        }
      }
    }
    return newQueryArgs;
  }, [relation, relationId]);
  var _useSelect = (0, _data.useSelect)(function (select) {
      var _select2 = select(_coreData.store),
        getEntityRecords = _select2.getEntityRecords;
      var gotItems = getEntityRecords('taxonomy', tax, queryArgs);
      return {
        terms: gotItems,
        totalItems: gotItems && gotItems.length
      };
    }, [tax, queryArgs]),
    terms = _useSelect.terms,
    totalItems = _useSelect.totalItems;
  var options = (0, _element.useMemo)(function () {
    return (terms !== null && terms !== void 0 ? terms : []).map(function (term) {
      return {
        value: term.id,
        label: (0, _htmlEntities.decodeEntities)(term.name)
      };
    });
  }, [terms]);
  var isAsync = (0, _element.useMemo)(function () {
    return totalItems && totalItems >= perPage;
  }, [totalItems]);
  var defaultValue = (0, _data.useSelect)(function (select) {
    var newQueryArgs = {
      _fields: 'id,name',
      context: 'view'
    };
    if (isAsync && value) {
      if ((0, _lodash.isArray)(value)) {
        newQueryArgs.include = value;
      } else if ((0, _lodash.isNumber)(value)) {
        newQueryArgs.include = [value];
      } else if ((0, _lodash.isString)(value)) {
        var valArray = value.split(',');
        newQueryArgs.include = [valArray];
      }
      if (newQueryArgs.include) {
        var _select3 = select(_coreData.store),
          getEntityRecords = _select3.getEntityRecords;
        var gotItems = getEntityRecords('taxonomy', tax, newQueryArgs);
        if (gotItems && (0, _lodash.isArray)(gotItems) && gotItems.length) {
          if (gotItems.length > 1) {
            return gotItems.map(function (term) {
              return {
                value: term.id,
                label: (0, _htmlEntities.decodeEntities)(term.name)
              };
            });
          }
          return {
            value: gotItems[0].id,
            label: (0, _htmlEntities.decodeEntities)(gotItems[0].name)
          };
        }
      }
    }
    return null;
  }, [isAsync, value]);
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement(_notice.default, {
      autoDismiss: false,
      isDismissible: false
    }, (0, _i18n.__)('No terms found!', 'atrc-prefix-atrc'));
  }
  if (isAsync) {
    if (hasFixNotice) {
      return /*#__PURE__*/React.createElement(_notice.default, {
        autoDismiss: 5000,
        isDismissible: false,
        onAutoRemove: function onAutoRemove() {
          setHasFixNotice(false);
        }
      }, (0, _i18n.__)('Loading…', 'atrc-prefix-atrc'));
    }
    var asyncOptions = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(inputValue) {
        var query;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              query = {
                tax: tax
              };
              if (inputValue) {
                query.queryArgs = {
                  search: inputValue
                };
              }
              _context2.next = 5;
              return getTermsOptions(query);
            case 5:
              return _context2.abrupt("return", _context2.sent);
            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              console.error('Error fetching WordPress terms:', _context2.t0);
              return _context2.abrupt("return", []);
            case 12:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 8]]);
      }));
      return function asyncOptions(_x2) {
        return _ref3.apply(this, arguments);
      };
    }();
    // Debounce the loadOptions function with a 300ms delay
    var debouncedLoadOptions = (0, _lodash.debounce)(asyncOptions, 300);
    return /*#__PURE__*/React.createElement(_select4.AtrcDynamicSelect, _extends({
      label: label,
      className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-select-term'), className, variant ? (0, _prefixVars.default)('ctrl-select-term') + '-' + variant : ''),
      defaultValue: defaultValue,
      onChange: onChange,
      showOptionNone: showOptionNone,
      optionNoneValue: optionNoneValue,
      options: options,
      loadOptions: debouncedLoadOptions,
      isAsync: isAsync
    }, defaultProps));
  }
  return /*#__PURE__*/React.createElement(_select4.AtrcDynamicSelect, _extends({
    label: label,
    className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-select-term'), className, variant ? (0, _prefixVars.default)('ctrl-select-term') + '-' + variant : ''),
    value: value,
    onChange: onChange,
    showOptionNone: showOptionNone,
    optionNoneValue: optionNoneValue,
    options: options
  }, defaultProps));
}
var _default = exports.default = AtrcControlSelectTerm;
//# sourceMappingURL=index.js.map