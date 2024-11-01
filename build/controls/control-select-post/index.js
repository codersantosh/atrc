function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["label", "variant", "value", "onChange", "showOptionNone", "optionNoneValue", "postType", "className", "relation", "relationId", "tax", "termId", "userId"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
import React from 'react';

/* WordPress*/
import { useMemo, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';

/*Library*/
import { clone, debounce, isArray, isNumber, isString } from 'lodash';
import classnames from 'classnames';

/*Controls */
import { AtrcDynamicSelect } from '../control-select';

/* Molecules */
import AtrcNotice from '../../molecules/notice';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/* API */
import AtrcGetPosts from '../../api/get-posts';

/* Local*/
var perPage = 100;
var getPostsOptions = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
    var postType, restBase, restNamespace, _ref$queryArgs, queryArgs, getPostTypesPosts, options;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          postType = _ref.postType, restBase = _ref.restBase, restNamespace = _ref.restNamespace, _ref$queryArgs = _ref.queryArgs, queryArgs = _ref$queryArgs === void 0 ? null : _ref$queryArgs;
          _context.next = 3;
          return AtrcGetPosts({
            postType: postType,
            restBase: restBase,
            restNamespace: restNamespace,
            queryArgs: queryArgs
          });
        case 3:
          getPostTypesPosts = _context.sent;
          options = [];
          if (getPostTypesPosts) {
            options = getPostTypesPosts.map(function (item) {
              return {
                value: item.id,
                label: item.title.rendered || __('Untitled', 'atrc-prefix-atrc')
              };
            });
          }
          return _context.abrupt("return", options);
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getPostsOptions(_x) {
    return _ref2.apply(this, arguments);
  };
}();

/*Select Post*/
function AtrcControlSelectPost(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? __('Posts', 'atrc-prefix-atrc') : _props$label,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    value = props.value,
    onChange = props.onChange,
    _props$showOptionNone = props.showOptionNone,
    showOptionNone = _props$showOptionNone === void 0 ? true : _props$showOptionNone,
    _props$optionNoneValu = props.optionNoneValue,
    optionNoneValue = _props$optionNoneValu === void 0 ? 0 : _props$optionNoneValu,
    _props$postType = props.postType,
    postType = _props$postType === void 0 ? '' : _props$postType,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$relation = props.relation,
    relation = _props$relation === void 0 ? '' : _props$relation,
    _props$relationId = props.relationId,
    relationId = _props$relationId === void 0 ? 0 : _props$relationId,
    _props$tax = props.tax,
    tax = _props$tax === void 0 ? '' : _props$tax,
    _props$termId = props.termId,
    termId = _props$termId === void 0 ? '' : _props$termId,
    _props$userId = props.userId,
    userId = _props$userId === void 0 ? 0 : _props$userId,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var _useState = useState(true),
    _useState2 = _slicedToArray(_useState, 2),
    hasFixNotice = _useState2[0],
    setHasFixNotice = _useState2[1];
  var queryArgs = useSelect(function (select) {
    var newQueryArgs = {
      per_page: perPage,
      order: 'asc',
      _fields: 'id,title',
      context: 'view'
    };
    var _select = select(coreStore),
      getEntityRecord = _select.getEntityRecord,
      getTaxonomy = _select.getTaxonomy;

    /* Post child and parent */
    if (relation) {
      if ('postChild' === relation && relationId) {
        /*get children by relation id*/
        newQueryArgs.parent = [relationId];
      } else if ('postParent' === relation) {
        /*get parent by relation id*/
        var gotItem = getEntityRecord('postType', postType, relationId);
        if (gotItem && gotItem.parent) {
          newQueryArgs.include = [gotItem.parent];
        }
      }
    }

    /* Get posts types in taxonomy terms */
    if (tax && termId) {
      var taxonomy = getTaxonomy('category');
      if (taxonomy && taxonomy.rest_base) {
        newQueryArgs[taxonomy.rest_base] = [termId];
      }
    }

    /* Post author */
    if (userId) {
      newQueryArgs.author = [userId];
    }
    return newQueryArgs;
  }, [postType, relation, relationId, userId]);
  var _useSelect = useSelect(function (select) {
      var _select2 = select(coreStore),
        getEntityRecords = _select2.getEntityRecords;
      var gotItems = getEntityRecords('postType', postType, queryArgs);
      return {
        posts: gotItems,
        totalItems: gotItems && gotItems.length
      };
    }, [queryArgs, postType]),
    posts = _useSelect.posts,
    totalItems = _useSelect.totalItems;
  var options = useMemo(function () {
    return (posts !== null && posts !== void 0 ? posts : []).map(function (post) {
      return {
        value: post.id,
        label: post.title.rendered || post.title.raw || __('Untitled', 'atrc-prefix-atrc')
      };
    });
  }, [posts]);
  var isAsync = useMemo(function () {
    return totalItems && totalItems >= perPage;
  }, [totalItems]);
  var defaultValue = useSelect(function (select) {
    var newQueryArgs = {
      _fields: 'id,title',
      context: 'view'
    };
    if (isAsync && value) {
      if (isArray(value)) {
        newQueryArgs.include = value;
      } else if (isNumber(value)) {
        newQueryArgs.include = [value];
      } else if (isString(value)) {
        var valArray = value.split(',');
        newQueryArgs.include = [valArray];
      }
      if (newQueryArgs.include) {
        var _select3 = select(coreStore),
          getEntityRecords = _select3.getEntityRecords;
        var gotItems = getEntityRecords('postType', postType, newQueryArgs);
        if (gotItems && isArray(gotItems) && gotItems.length) {
          if (gotItems.length > 1) {
            return gotItems.map(function (post) {
              return {
                value: post.id,
                label: post.title.rendered || __('Untitled', 'atrc-prefix-atrc')
              };
            });
          }
          return {
            value: gotItems[0].id,
            label: gotItems[0].title.rendered
          };
        }
      }
    }
    return null;
  }, [isAsync, value]);
  if (isAsync) {
    if (hasFixNotice) {
      return /*#__PURE__*/React.createElement(AtrcNotice, {
        autoDismiss: 5000,
        isDismissible: false,
        onAutoRemove: function onAutoRemove() {
          setHasFixNotice(false);
        }
      }, __('Loading…', 'atrc-prefix-atrc'));
    }
    var asyncOptions = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(inputValue) {
        var query, newQueryArgs;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              query = {
                postType: postType
              };
              newQueryArgs = clone(queryArgs);
              query.queryArgs = newQueryArgs;
              if (inputValue) {
                query.queryArgs.search = inputValue;
              }
              _context2.next = 7;
              return getPostsOptions(query);
            case 7:
              return _context2.abrupt("return", _context2.sent);
            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](0);
              console.error('Error fetching WordPress posts:', _context2.t0);
              return _context2.abrupt("return", []);
            case 14:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 10]]);
      }));
      return function asyncOptions(_x2) {
        return _ref3.apply(this, arguments);
      };
    }();
    // Debounce the loadOptions function with a 300ms delay
    var debouncedLoadOptions = debounce(asyncOptions, 300);
    return /*#__PURE__*/React.createElement(AtrcDynamicSelect, _extends({
      label: label,
      className: classnames(AtrcPrefix('ctrl-select-post'), className, variant ? AtrcPrefix('ctrl-select-post') + '-' + variant : ''),
      defaultValue: defaultValue,
      onChange: onChange,
      showOptionNone: showOptionNone,
      optionNoneValue: optionNoneValue,
      options: options,
      loadOptions: debouncedLoadOptions,
      isAsync: isAsync
    }, defaultProps));
  }
  return /*#__PURE__*/React.createElement(AtrcDynamicSelect, _extends({
    label: label,
    className: classnames(AtrcPrefix('ctrl-select-post'), className, variant ? AtrcPrefix('ctrl-select-post') + '-' + variant : ''),
    value: value,
    onChange: onChange,
    showOptionNone: showOptionNone,
    optionNoneValue: optionNoneValue,
    options: options
  }, defaultProps));
}
export default AtrcControlSelectPost;
//# sourceMappingURL=index.js.map