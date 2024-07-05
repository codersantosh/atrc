function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
import React from 'react';

/* Internal */
import AtrcApis from '../api';
import { AtrcDataLocalStorageSaveSettings } from '../local-storage';
import { AtrcStore } from '../store';
import { AtrcGetQueryParts, AtrcGetandSetQueryParams, AtrcIsFlushed } from '../utils';

/* Local */
// The actions object should describe all action creators available for your store.
export var actions = {
  /* CURD Start
  most of actions for CURD, only two below are for SETTINGS
  */
  /**
   * Action called before making a data API request. Updates state, especially isLoading to true and canSave to false.
   * Called mainly from resolvers.js.
   *
   * @param {Object} params           - Parameters for the action.
   * @param {string} params.key       - The data key, e.g., fonts, icons, posts, page, etc.
   * @param {Object} params.queryArgs - Object containing query arguments.
   * @param {string} params.queryKey  - The query key.
   * @return {Object} Action object.
   */
  beforeDataApi: function beforeDataApi(_ref) {
    var key = _ref.key,
      queryArgs = _ref.queryArgs,
      queryKey = _ref.queryKey;
    return {
      type: 'BEFORE_DATA_API',
      key: key,
      queryArgs: queryArgs,
      queryKey: queryKey
    };
  },
  /**
   * Action to initiate a data retrieval from the API. Called mainly from resolvers.js.
   *
   * @param {Object} params                - Parameters for the action.
   * @param {string} params.key            - The data key, e.g., fonts, icons, posts, page, etc.
   * @param {Object} params.queryArgs      - Object containing query arguments.
   * @param {Object} params.hiddenQueryArgsData - Additional data passed to the API (optional).
   * @return {Object} Action object.
   */
  getData: function getData(_ref2) {
    var key = _ref2.key,
      queryArgs = _ref2.queryArgs,
      _ref2$hiddenQueryArgs = _ref2.hiddenQueryArgsData,
      hiddenQueryArgsData = _ref2$hiddenQueryArgs === void 0 ? null : _ref2$hiddenQueryArgs;
    return {
      type: 'GET_DATA',
      key: key,
      queryArgs: queryArgs,
      hiddenQueryArgsData: hiddenQueryArgsData
    };
  },
  /**
   * Action called after successful data retrieval from the API. Updates state with data from the API.
   * Called mainly from resolvers.js.
   *
   * @param {Object} params           - Parameters for the action.
   * @param {string} params.key       - The data key, e.g., fonts, icons, posts, page, etc.
   * @param {Object} params.data      - Data obtained from the API.
   * @param {Object} params.queryArgs - Object containing query arguments (optional).
   * @param {string} params.queryKey  - The query key.
   * @return {Object} Action object.
   */
  setData: function setData(_ref3) {
    var key = _ref3.key,
      data = _ref3.data,
      _ref3$queryArgs = _ref3.queryArgs,
      queryArgs = _ref3$queryArgs === void 0 ? null : _ref3$queryArgs,
      queryKey = _ref3.queryKey;
    return {
      type: 'SET_DATA',
      key: key,
      data: data,
      queryArgs: queryArgs,
      queryKey: queryKey
    };
  },
  /**
   * Action to update the state of query arguments (`queryArgs`), query key (`queryKey`),
   * and cached data that matches the specified query.
   * Called mainly from hoc-items.js.
   *
   * @param {Object}  params                       - Parameters for the action.
   * @param {string}  params.key                   - The data key, e.g., fonts, icons, posts, page, etc.
   * @param {Object}  params.queryArgs             - Object containing query arguments.
   * @param {boolean} [params.update=true]         - Whether to update the query arguments.
   * @param {Object}  [params.hiddenQueryArgsData=null] - Additional hidden data for the query.
   * @return {Function} Async function representing the action.
   */
  setQueryArgs: function setQueryArgs(_ref4) {
    var key = _ref4.key,
      queryArgs = _ref4.queryArgs,
      _ref4$update = _ref4.update,
      update = _ref4$update === void 0 ? true : _ref4$update,
      _ref4$hiddenQueryArgs = _ref4.hiddenQueryArgsData,
      hiddenQueryArgsData = _ref4$hiddenQueryArgs === void 0 ? null : _ref4$hiddenQueryArgs,
      _ref4$refresh = _ref4.refresh,
      refresh = _ref4$refresh === void 0 ? false : _ref4$refresh;
    return (
      /*#__PURE__*/
      // eslint-disable-next-line no-unused-vars
      function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref5) {
          var select, resolveSelect, dispatch, queryParts, queryKey, data, result;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                select = _ref5.select, resolveSelect = _ref5.resolveSelect, dispatch = _ref5.dispatch;
                if (update) {
                  queryArgs = AtrcGetandSetQueryParams(key, queryArgs);
                }
                queryParts = AtrcGetQueryParts(queryArgs);
                queryKey = queryParts.queryKey;
                _context.next = 6;
                return resolveSelect.getCachedData(key, queryKey);
              case 6:
                data = _context.sent;
                if (!(AtrcIsFlushed(data) || refresh)) {
                  _context.next = 15;
                  break;
                }
                dispatch({
                  type: 'SET_IS_LOADING',
                  key: key,
                  isLoading: true
                });
                _context.next = 11;
                return AtrcApis.doApi({
                  key: key,
                  type: 'getItems',
                  data: queryArgs,
                  hiddenQueryArgsData: hiddenQueryArgsData
                });
              case 11:
                result = _context.sent;
                dispatch({
                  type: 'SET_DATA',
                  key: key,
                  data: result,
                  queryArgs: queryArgs,
                  queryKey: queryKey
                });
                _context.next = 16;
                break;
              case 15:
                dispatch({
                  type: 'SET_QUERY_ARGS',
                  key: key,
                  queryArgs: queryArgs
                });
              case 16:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function (_x) {
          return _ref6.apply(this, arguments);
        };
      }()
    );
  },
  /**
   * Action to update the state of all selected items in the specified data key.
   * Called mainly from hoc-items.js.
   *
   * @param {Object} params     - Parameters for the action.
   * @param {string} params.key - The data key, e.g., fonts, icons, posts, page, etc.
   * @return {Object} Action object.
   */
  toggleSelectAll: function toggleSelectAll(_ref7) {
    var key = _ref7.key;
    return {
      type: 'TOGGLE_SELECT_ALL',
      key: key
    };
  },
  /**
   * Action to update the state of a selected item in the specified data key.
   * Called mainly from hoc-items.js.
   *
   * @param {Object} params      - Parameters for the action.
   * @param {string} params.key  - The data key, e.g., fonts, icons, posts, page, etc.
   * @param {Object} params.item - The item to toggle.
   * @return {Object} Action object.
   */
  toggleSelect: function toggleSelect(_ref8) {
    var key = _ref8.key,
      item = _ref8.item;
    return {
      type: 'TOGGLE_SELECT',
      key: key,
      item: item
    };
  },
  /**
   * Action to indicate that an item API request is about to be made.
   * Updates the state, especially setting isLoading to true and canSave to false.
   * Called mainly from resolvers.js.
   *
   * @param {Object} params     - Parameters for the action.
   * @param {string} params.key - The data key, e.g., fonts, icons, posts, page, etc.
   * @return {Object} Action object.
   */
  beforeItemApi: function beforeItemApi(_ref9) {
    var key = _ref9.key;
    return {
      type: 'BEFORE_ITEM_API',
      key: key
    };
  },
  /**
   * Action to request an item from the API.
   * Called mainly from resolvers.js. This function may not always be called
   * since resolver.js tries to get items for already available items, but it's
   * called when directly accessing an item on 2nd or greater pages.
   *
   * @param {Object} params     - Parameters for the action.
   * @param {string} params.key - The data key, e.g., fonts, icons, posts, page, etc.
   * @param {string} params.id  - The identifier of the item to get.
   * @return {Object} Action object.
   */
  getItem: function getItem(_ref10) {
    var key = _ref10.key,
      id = _ref10.id;
    return {
      type: 'GET_ITEM',
      key: key,
      id: id
    };
  },
  /**
   * Action to update the state to an item obtained from the API or existing items.
   * The item is currently an edit/view single item.
   *
   * @param {Object} params      - Parameters for the action.
   * @param {string} params.key  - The data key, e.g., fonts, icons, posts, page, etc.
   * @param {Object} params.data - The item data to set in the state.
   * @return {Object} Action object.
   */
  setItem: function setItem(_ref11) {
    var key = _ref11.key,
      data = _ref11.data;
    return {
      type: 'SET_ITEM',
      key: key,
      data: data
    };
  },
  /**
   * Action to update the state to item properties obtained from user input.
   *
   * @param {Object} params         - Parameters for the action.
   * @param {string} params.key     - The data key, e.g., fonts, icons, posts, page, etc.
   * @param {string} params.dataKey - The key of the item property to update.
   * @param {string} params.dataVal - The new value of the item property.
   * @return {Object} Action object.
   */
  updateItemData: function updateItemData(_ref12) {
    var key = _ref12.key,
      dataKey = _ref12.dataKey,
      dataVal = _ref12.dataVal;
    return {
      type: 'UPDATE_ITEM_DATA',
      key: key,
      dataKey: dataKey,
      dataVal: dataVal
    };
  },
  /**
   * Action to update an item via API. First, sets loading to true and canSave to false (!loading).
   * Sends data to the API, and the result to reducer.js for updating notice, updating the item data, and flushing the cache.
   *
   * @param {Object} params      - Parameters for the action.
   * @param {string} params.key  - The data key, e.g., fonts, icons, posts, page, etc.
   * @param {Object} params.data - The item data to update via API.
   * @return {Function} Async function representing the action.
   */
  updateItem: function updateItem(_ref13) {
    var key = _ref13.key,
      data = _ref13.data;
    // eslint-disable-next-line no-unused-vars
    return /*#__PURE__*/function () {
      var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_ref14) {
        var select, resolveSelect, dispatch, result;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              select = _ref14.select, resolveSelect = _ref14.resolveSelect, dispatch = _ref14.dispatch;
              dispatch({
                type: 'SET_IS_LOADING',
                key: key,
                isLoading: true
              });
              _context2.next = 4;
              return AtrcApis.doApi({
                key: key,
                type: 'updateItem',
                data: data,
                rowId: data.id
              });
            case 4:
              result = _context2.sent;
              dispatch({
                type: 'UPDATE_ITEM',
                key: key,
                data: result
              });
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function (_x2) {
        return _ref15.apply(this, arguments);
      };
    }();
  },
  /**
   * Action to add an item via API. First, sets loading to true and canSave to false (!loading).
   * Sends data to the API, and the result to reducer.js for adding notice, adding the item data, and flushing the cache.
   *
   * @param {Object} params      - Parameters for the action.
   * @param {string} params.key  - The data key, e.g., fonts, icons, posts, page, etc.
   * @param {Object} params.data - The item data to add via API.
   * @return {Function} Async function representing the action.
   */
  insertItem: function insertItem(_ref16) {
    var key = _ref16.key,
      data = _ref16.data;
    // eslint-disable-next-line no-unused-vars
    return /*#__PURE__*/function () {
      var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(_ref17) {
        var select, resolveSelect, dispatch, result;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              select = _ref17.select, resolveSelect = _ref17.resolveSelect, dispatch = _ref17.dispatch;
              dispatch({
                type: 'SET_IS_LOADING',
                key: key,
                isLoading: true
              });
              _context3.next = 4;
              return AtrcApis.doApi({
                key: key,
                type: 'insertItem',
                data: data
              });
            case 4:
              result = _context3.sent;
              dispatch({
                type: 'INSERT_ITEM',
                key: key,
                data: result
              });
            case 6:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      return function (_x3) {
        return _ref18.apply(this, arguments);
      };
    }();
  },
  /**
   * Action to set an array of item IDs to delete and an object on the `confirmDelete` key to manage deleting items.
   *
   * @param {Object} params      - Parameters for the action.
   * @param {string} params.key  - The data key, e.g., fonts, icons, posts, page, etc.
   * @param {Object} params.data - Data containing an array of item IDs and an object for confirming deletion.
   * @return {Object} Action object.
   */
  setConfirmDelete: function setConfirmDelete(_ref19) {
    var key = _ref19.key,
      data = _ref19.data;
    return {
      type: 'SET_CONFIRM_DELETE',
      key: key,
      data: data
    };
  },
  /**
   * Action to delete an item or items via API.
   * First, sets loading to true, and can save to false (!loading).
   * Sends data to the API, and the result to reducer.js for adding notice, deleting the item(s), and flushing the cache.
   *
   * @param {Object} params     - Parameters for the action.
   * @param {string} params.key - The data key, e.g., fonts, icons, posts, page, etc.
   * @param {Array}  params.ids - An array of item IDs to delete.
   * @return {Function} Async function representing the action.
   */
  deleteItems: function deleteItems(_ref20) {
    var key = _ref20.key,
      ids = _ref20.ids;
    return /*#__PURE__*/function () {
      var _ref22 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(_ref21) {
        var select, resolveSelect, dispatch, promises, result;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              select = _ref21.select, resolveSelect = _ref21.resolveSelect, dispatch = _ref21.dispatch;
              dispatch({
                type: 'SET_IS_LOADING',
                key: key,
                isLoading: true
              });
              promises = ids.map( /*#__PURE__*/function () {
                var _ref23 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(id) {
                  return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.next = 2;
                        return AtrcApis.doApi({
                          key: key,
                          type: 'deleteItem',
                          rowId: id
                        });
                      case 2:
                        return _context4.abrupt("return", _context4.sent);
                      case 3:
                      case "end":
                        return _context4.stop();
                    }
                  }, _callee4);
                }));
                return function (_x5) {
                  return _ref23.apply(this, arguments);
                };
              }());
              _context5.next = 5;
              return Promise.all(promises);
            case 5:
              result = _context5.sent;
              dispatch({
                type: 'DELETE_ITEMS',
                key: key,
                data: result
              });
            case 7:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      return function (_x4) {
        return _ref22.apply(this, arguments);
      };
    }();
  },
  /* Notice */
  /**
   * Action to add a notice. Called mainly from hoc.
   *
   * @param {Object} params        - Parameters for the action.
   * @param {string} params.key    - The data key, e.g., fonts, icons, posts, page, etc.
   * @param {Object} params.notice - The notice object to add.
   * @return {Object} Action object.
   */
  setNotice: function setNotice(_ref24) {
    var key = _ref24.key,
      notice = _ref24.notice;
    return {
      type: 'SET_NOTICE',
      key: key,
      notice: notice
    };
  },
  /**
   * Action to remove a notice. Called mainly from hoc.
   *
   * @param {Object} params     - Parameters for the action.
   * @param {string} params.key - The data key, e.g., fonts, icons, posts, page, etc.
   * @param {string} params.id  - The identifier of the notice to remove.
   * @return {Object} Action object.
   */
  removeNotice: function removeNotice(_ref25) {
    var key = _ref25.key,
      id = _ref25.id;
    return {
      type: 'REMOVE_NOTICE',
      key: key,
      id: id
    };
  },
  /**
   * Action to replace notices with new provided notices. Called mainly from hoc.
   *
   * @param {Object} params         - Parameters for the action.
   * @param {string} params.key     - The data key, e.g., fonts, icons, posts, page, etc.
   * @param {Array}  params.notices - An array of notice objects to set.
   * @return {Object} Action object.
   */
  setNotices: function setNotices(_ref26) {
    var key = _ref26.key,
      notices = _ref26.notices;
    return {
      type: 'SET_NOTICES',
      key: key,
      notices: notices
    };
  },
  /**
   * Action to add extra data for some logic. Called mainly from hoc-items.js, rarely used.
   *
   * @param {Object} params      - Parameters for the action.
   * @param {string} params.key  - The data key, e.g., fonts, icons, posts, page, etc.
   * @param {Object} params.data - The extra data to add.
   * @return {Object} Action object.
   */
  setExtraData: function setExtraData(_ref27) {
    var key = _ref27.key,
      data = _ref27.data;
    return {
      type: 'SET_EXTRA_DATA',
      key: key,
      data: data
    };
  },
  /**
   * Settings actions
   */
  /**
   * Action to indicate that a settings API request is about to be made.
   * Updates the state, especially setting isLoading to true and canSave to false.
   * Called mainly from resolvers.js.
   *
   * @param {Object} params     - Parameters for the action.
   * @param {string} params.key - The settings key.
   * @return {Object} Action object.
   */
  beforeSettingsApi: function beforeSettingsApi(_ref28) {
    var key = _ref28.key;
    return {
      type: 'BEFORE_SETTINGS_API',
      key: key
    };
  },
  /**
   * Action to request settings from API or local storage.
   * Called mainly from resolvers.js.
   *
   * @param {Object} params     - Parameters for the action.
   * @param {string} params.key - The settings key.
   * @return {Object} Action object.
   */
  getSettings: function getSettings(_ref29) {
    var key = _ref29.key;
    return {
      type: 'GET_SETTINGS',
      key: key
    };
  },
  /**
   * Action to update the state with all settings data obtained from API.
   * Sets notice if setNotice is true (sometimes notice not needed).
   * Called mainly from resolvers.js.
   *
   * @param {Object}  params                  - Parameters for the action.
   * @param {string}  params.key              - The settings key.
   * @param {Object}  params.data             - The settings data to set in the state.
   * @param {boolean} [params.setNotice=true] - Whether to set a notice.
   * @return {Object} Action object.
   */
  setSettings: function setSettings(_ref30) {
    var key = _ref30.key,
      data = _ref30.data,
      _ref30$setNotice = _ref30.setNotice,
      setNotice = _ref30$setNotice === void 0 ? true : _ref30$setNotice;
    return {
      type: 'SET_SETTINGS',
      key: key,
      data: data,
      setNotice: setNotice
    };
  },
  /**
   * Action to update the state with item properties obtained from user input.
   *
   * @param {Object} params         - Parameters for the action.
   * @param {string} params.key     - The data key, e.g., fonts, icons, posts, page, etc.
   * @param {string} params.dataKey - The key of the data property to update.
   * @param {any}    params.dataVal - The value to set for the data property.
   * @return {Object} Action object.
   */
  updateSetting: function updateSetting(_ref31) {
    var key = _ref31.key,
      dataKey = _ref31.dataKey,
      dataVal = _ref31.dataVal;
    return {
      type: 'UPDATE_SETTING',
      key: key,
      dataKey: dataKey,
      dataVal: dataVal
    };
  },
  /**
   * Action to update settings via API or local storage.
   * First, sets loading to true, and can save to false (!loading).
   * Sends data to the API or local storage and the result to reducer.js for updating notice and updating the settings data.
   *
   * @param {string}  key               - The settings key.
   * @param {Object}  data              - The settings data to save.
   * @param {boolean} [setNotice=false] - Whether to set a notice.
   * @return {Function} Async function representing the action.
   */
  saveSettings: function saveSettings(_ref32) {
    var key = _ref32.key,
      data = _ref32.data,
      _ref32$setNotice = _ref32.setNotice,
      setNotice = _ref32$setNotice === void 0 ? false : _ref32$setNotice;
    // eslint-disable-next-line no-unused-vars
    return /*#__PURE__*/function () {
      var _ref34 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(_ref33) {
        var select, resolveSelect, dispatch, result;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              select = _ref33.select, resolveSelect = _ref33.resolveSelect, dispatch = _ref33.dispatch;
              dispatch({
                type: 'SET_IS_LOADING',
                key: key,
                isLoading: true
              });
              if (!('localStorage' === AtrcStore.TYPES[key])) {
                _context6.next = 6;
                break;
              }
              result = AtrcDataLocalStorageSaveSettings(key, data);
              _context6.next = 9;
              break;
            case 6:
              _context6.next = 8;
              return AtrcApis.doApi({
                key: key,
                type: 'saveSettings',
                data: data
              });
            case 8:
              result = _context6.sent;
            case 9:
              dispatch({
                type: 'SET_SETTINGS',
                key: key,
                data: result,
                setNotice: setNotice
              });
            case 10:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      return function (_x6) {
        return _ref34.apply(this, arguments);
      };
    }();
  },
  /**
   * Action to delete settings via API.
   * First, sets loading to true, and can save to false (!loading).
   * If there is data, Sends data to the API, and the result to reducer.js for adding notice, deleting the item(s), and flushing the cache.
   *
   * @param {string}  key               - The settings key.
   * @param {Object}  data              - The settings data to save.
   * @param {boolean} [setNotice=false] - Whether to set a notice.
   * @return {Function} Async function representing the action.
   */
  deleteSettings: function deleteSettings(_ref35) {
    var key = _ref35.key,
      _ref35$data = _ref35.data,
      data = _ref35$data === void 0 ? null : _ref35$data,
      _ref35$setNotice = _ref35.setNotice,
      setNotice = _ref35$setNotice === void 0 ? false : _ref35$setNotice;
    return /*#__PURE__*/function () {
      var _ref37 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(_ref36) {
        var select, resolveSelect, dispatch, result;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              select = _ref36.select, resolveSelect = _ref36.resolveSelect, dispatch = _ref36.dispatch;
              dispatch({
                type: 'SET_IS_LOADING',
                key: key,
                isLoading: true
              });
              if (!('localStorage' === AtrcStore.TYPES[key])) {
                _context7.next = 6;
                break;
              }
              result = AtrcDataLocalStorageSaveSettings(key, data);
              _context7.next = 9;
              break;
            case 6:
              _context7.next = 8;
              return AtrcApis.doApi({
                key: key,
                type: 'deleteSettings',
                data: data
              });
            case 8:
              result = _context7.sent;
            case 9:
              dispatch({
                type: 'SET_SETTINGS',
                key: key,
                data: result,
                setNotice: setNotice
              });
            case 10:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }));
      return function (_x7) {
        return _ref37.apply(this, arguments);
      };
    }();
  },
  /**
   * Custom Dispatch action.
   * Allows using this store with custom solutions by providing a callback function.
   *
   * @param {Function} callback - The callback function to be executed.
   * @return {Function} Function representing the custom dispatch action.
   */
  customDispatch: function customDispatch(callback) {
    return function (_ref38) {
      var select = _ref38.select,
        resolveSelect = _ref38.resolveSelect,
        dispatch = _ref38.dispatch,
        registry = _ref38.registry;
      callback(select, resolveSelect, dispatch, AtrcStore, AtrcApis, registry);
    };
  }
};
//# sourceMappingURL=actions.js.map