function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* WordPress */
import { addQueryArgs } from '@wordpress/url';

/* Library */
import axios from 'axios';

/* Internal */
import { AtrcStore } from './store';

/* Local */
/* AtrcApis is a utility class that can be used to register and perform CRUD operations on different types of APIs. It allows for registering different types of APIs for a particular data type, such as posts, pages, and custom types, and also allows for registering custom types of APIs. The class utilizes the @wordpress/api-fetch and @wordpress/url libraries to handle the API calls and add query arguments to the URLs, and it allows for additional actions to be performed on the data before or after the API call is made. It also allows for adding store using @wordpress/data library.*/

export var AtrcAxios = function AtrcAxios(axiosConfig) {
  return axios(_objectSpread({}, axiosConfig));
};
function axiosFetch(options) {
  var key = options.key,
    path = options.path,
    data = options.data,
    method = options.method;
  if (!path.startsWith('http')) {
    if (!path.startsWith('wp-json')) {
      path = "wp-json/".concat(path);
    }
    if (AtrcApis.baseUrls[key]) {
      path = AtrcApis.baseUrls[key] + "/".concat(path);
    } else if (AtrcApis.baseUrls['atrc-global-api-base-url']) {
      path = AtrcApis.baseUrls['atrc-global-api-base-url'] + "/".concat(path);
    }
    path = path.replace(/([^:]\/)\/+/g, '$1');
    path = path.replace(/wp-json\/wp-json\//, 'wp-json/');
  }
  var axiosConfig = {};
  if (AtrcApis.axiosConfig[key]) {
    axiosConfig = AtrcApis.axiosConfig[key];
  } else if (AtrcApis.axiosConfig['atrc-global-axios-config']) {
    axiosConfig = AtrcApis.axiosConfig['atrc-global-axios-config'];
  }
  return AtrcAxios(_objectSpread({
    url: path,
    method: method,
    data: data
  }, axiosConfig));
}
var ClassAtrcApis = /*#__PURE__*/function () {
  function ClassAtrcApis() {
    _classCallCheck(this, ClassAtrcApis);
    if (!ClassAtrcApis.instance) {
      ClassAtrcApis.instance = this;
      this.types = [];
      this.baseUrls = {};
      this.XWPNonce = '';
      this.axiosConfig = {};
    }
    return ClassAtrcApis.instance;
  }
  return _createClass(ClassAtrcApis, [{
    key: "xWpNonce",
    value: function xWpNonce(val) {
      this.XWPNonce = val;
    }
  }, {
    key: "baseUrl",
    value: function baseUrl(_ref) {
      var key = _ref.key,
        url = _ref.url;
      this.baseUrls[key] = url;
    }

    /* https://www.npmjs.com/package/axios#request-config */
  }, {
    key: "setAxiosConfig",
    value: function setAxiosConfig(_ref2) {
      var key = _ref2.key,
        config = _ref2.config;
      this.axiosConfig[key] = config;
    }
  }, {
    key: "register",
    value: function register(props) {
      /**
       * @param {string}        key             key data type eg: post, page, custom type, custom table etc
       * @param {string}        path            rest api respective or full path eg:/wp/v2/posts/ or http://example.com/wp-json/wp/v2/posts/
       * @param {Object}        callbacks       a set of callback function for respective type or types eg: { getItems: () => {}, getItem: () => {}, insertItem: () => {}, deleteItem: () => {}}
       * @param {function(...)} filterQueryArgs optional filter query args to filter/add additional queries.
       * @param {function(...)} filterResult    optional filter result to add additional data on result
       * @param {boolean}       addStore        add store using @wordpress/data
       */
      var key = props.key,
        path = props.path,
        _props$callbacks = props.callbacks,
        callbacks = _props$callbacks === void 0 ? {} : _props$callbacks,
        _props$filterQueryArg = props.filterQueryArgs,
        filterQueryArgs = _props$filterQueryArg === void 0 ? null : _props$filterQueryArg,
        _props$filterResult = props.filterResult,
        filterResult = _props$filterResult === void 0 ? null : _props$filterResult,
        _props$filterData = props.filterData,
        filterData = _props$filterData === void 0 ? null : _props$filterData,
        _props$addStore = props.addStore,
        addStore = _props$addStore === void 0 ? true : _props$addStore,
        type = props.type,
        optionName = props.optionName,
        queryArgs = props.queryArgs,
        allowedParams = props.allowedParams,
        queryParams = props.queryParams,
        _props$axiosConfig = props.axiosConfig,
        axiosConfig = _props$axiosConfig === void 0 ? {} : _props$axiosConfig;
      if ('settings' === type) {
        this.types.push({
          key: key,
          path: path,
          type: 'getSettings',
          callbacks: callbacks.getSettings || null,
          filterResult: filterResult,
          filterData: filterData,
          optionName: optionName,
          axiosConfig: axiosConfig
        });
        this.types.push({
          key: key,
          path: path,
          type: 'saveSettings',
          callbacks: callbacks.saveSettings || null,
          filterResult: filterResult,
          filterData: filterData,
          optionName: optionName,
          axiosConfig: axiosConfig
        });
        this.types.push({
          key: key,
          path: path,
          type: 'deleteSettings',
          callbacks: callbacks.deleteSettings || null,
          filterResult: filterResult,
          filterData: filterData,
          axiosConfig: axiosConfig
        });
      } else {
        // Register all methods for the key and path
        this.types.push({
          key: key,
          path: path,
          type: 'getItems',
          callbacks: callbacks.getItems || null,
          filterResult: filterResult,
          filterData: filterData,
          filterQueryArgs: filterQueryArgs,
          axiosConfig: axiosConfig
        });
        this.types.push({
          key: key,
          path: path,
          type: 'getItem',
          callbacks: callbacks.getItem || null,
          filterResult: filterResult,
          filterData: filterData,
          axiosConfig: axiosConfig
        });
        this.types.push({
          key: key,
          path: path,
          type: 'insertItem',
          callbacks: callbacks.insertItem || null,
          filterResult: filterResult,
          filterData: filterData,
          axiosConfig: axiosConfig
        });
        this.types.push({
          key: key,
          path: path,
          type: 'updateItem',
          callbacks: callbacks.updateItem || null,
          filterResult: filterResult,
          filterData: filterData,
          axiosConfig: axiosConfig
        });
        this.types.push({
          key: key,
          path: path,
          type: 'deleteItem',
          callbacks: callbacks.deleteItem || null,
          filterResult: filterResult,
          filterData: filterData,
          axiosConfig: axiosConfig
        });
      }
      if (addStore) {
        AtrcStore.register({
          key: key,
          type: type,
          queryArgs: queryArgs,
          allowedParams: allowedParams,
          queryParams: queryParams
        });
      }
    }

    /**
     *
     * @param {string}        key      key data type eg: post, page, custom type, custom table etc
     * @param {string}        path     rest api respective or full path eg:/wp/v2/posts/ or http://example.com/wp-json/wp/v2/posts/
     * @param {string}        type     custom type expect CURD operations
     * @param {function(...)} callback custom type callback function eg: doSomething: () => {}
     */
  }, {
    key: "registerType",
    value: function registerType(_ref3) {
      var key = _ref3.key,
        path = _ref3.path,
        type = _ref3.type,
        callback = _ref3.callback;
      this.types.push({
        key: key,
        path: path,
        type: type,
        callback: callback
      });
    }

    /**
     *
     * @param {string} key   key data type eg: post, page, custom type, custom table etc
     * @param {string} type  type of api
     * @param {Object} data  optional either query args or insert/update data
     * @param {number} rowId optional either query args or insert/update data
     */
  }, {
    key: "doApi",
    value: (function () {
      var _doApi = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref4) {
        var key, type, data, _ref4$rowId, rowId, hiddenQueryArgsData, api, result, response, path, getItemsAxiosConfig, getItemAxiosConfig, insertItemAxiosConfig, updateItemAxiosConfig, deleteItemAxiosConfig, getSettingsAxiosConfig, newData, saveSettingsAxiosConfig, deleteSettingsAxiosConfig;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              key = _ref4.key, type = _ref4.type, data = _ref4.data, _ref4$rowId = _ref4.rowId, rowId = _ref4$rowId === void 0 ? 0 : _ref4$rowId, hiddenQueryArgsData = _ref4.hiddenQueryArgsData;
              // Find the API endpoint based on the key and type provided
              api = this.types.find(function (item) {
                return item.key === key && item.type === type;
              });
              if (api) {
                _context.next = 5;
                break;
              }
              console.error("API for key ".concat(key, " and type ").concat(type, " not found."));
              return _context.abrupt("return");
            case 5:
              // Perform the API call based on the type
              result = {};
              response = {};
              _context.prev = 7;
              if (this.XWPNonce) {
                axios.defaults.headers.common['X-WP-Nonce'] = this.XWPNonce;
              }
              _context.t0 = api.type;
              _context.next = _context.t0 === 'getItems' ? 12 : _context.t0 === 'getItem' ? 23 : _context.t0 === 'insertItem' ? 30 : _context.t0 === 'updateItem' ? 38 : _context.t0 === 'deleteItem' ? 46 : _context.t0 === 'getSettings' ? 53 : _context.t0 === 'saveSettings' ? 60 : _context.t0 === 'deleteSettings' ? 68 : 75;
              break;
            case 12:
              path = api.path;
              if (api.filterQueryArgs) {
                data = api.filterQueryArgs({
                  data: data,
                  api: api,
                  hiddenQueryArgsData: hiddenQueryArgsData
                });
              }
              if (data) {
                path = addQueryArgs(path, data);
              }
              getItemsAxiosConfig = {
                key: key,
                path: path,
                method: 'GET'
              };
              if (api.axiosConfig.getItems) {
                getItemsAxiosConfig = api.axiosConfig.getItems(getItemsAxiosConfig);
              }
              _context.next = 19;
              return axiosFetch(getItemsAxiosConfig);
            case 19:
              response = _context.sent;
              if (response.headers) {
                if (response.headers.get('X-WP-Count-All')) {
                  result.countAllItems = parseInt(response.headers.get('X-WP-Count-All'));
                }
                if (response.headers.get('X-WP-TotalPages')) {
                  result.totalPages = parseInt(response.headers.get('X-WP-TotalPages'));
                }
                if (response.headers.get('X-WP-Total')) {
                  result.countQueryItems = parseInt(response.headers.get('X-WP-Total'));
                }
              }
              result.items = response.data;
              return _context.abrupt("break", 77);
            case 23:
              getItemAxiosConfig = {
                key: key,
                path: "".concat(api.path, "/").concat(rowId),
                method: 'GET'
              };
              if (api.axiosConfig.getItem) {
                getItemAxiosConfig = api.axiosConfig.getItem(getItemAxiosConfig);
              }
              _context.next = 27;
              return axiosFetch(getItemAxiosConfig);
            case 27:
              response = _context.sent;
              result = response.data;
              return _context.abrupt("break", 77);
            case 30:
              if (api.filterData) {
                data = api.filterData({
                  data: data,
                  api: api
                });
              }
              insertItemAxiosConfig = {
                key: key,
                path: api.path,
                method: 'POST',
                data: data
              };
              if (api.axiosConfig.insertItem) {
                insertItemAxiosConfig = api.axiosConfig.insertItem(insertItemAxiosConfig);
              }
              _context.next = 35;
              return axiosFetch(insertItemAxiosConfig);
            case 35:
              response = _context.sent;
              result = response.data;
              return _context.abrupt("break", 77);
            case 38:
              if (api.filterData) {
                data = api.filterData({
                  data: data,
                  api: api
                });
              }
              updateItemAxiosConfig = {
                key: key,
                path: "".concat(api.path, "/").concat(rowId),
                method: 'POST',
                data: data
              };
              if (api.axiosConfig.updateItem) {
                updateItemAxiosConfig = api.axiosConfig.updateItem(updateItemAxiosConfig);
              }
              _context.next = 43;
              return axiosFetch(updateItemAxiosConfig);
            case 43:
              response = _context.sent;
              result = response.data;
              return _context.abrupt("break", 77);
            case 46:
              deleteItemAxiosConfig = {
                key: key,
                path: "".concat(api.path, "/").concat(rowId),
                method: 'DELETE'
              };
              if (api.axiosConfig.deleteItem) {
                deleteItemAxiosConfig = api.axiosConfig.deleteItem(deleteItemAxiosConfig);
              }
              _context.next = 50;
              return axiosFetch(deleteItemAxiosConfig);
            case 50:
              response = _context.sent;
              result = response.data;
              return _context.abrupt("break", 77);
            case 53:
              getSettingsAxiosConfig = {
                key: key,
                path: api.path,
                method: 'GET'
              };
              if (api.axiosConfig.getSettings) {
                getSettingsAxiosConfig = api.axiosConfig.getSettings(getSettingsAxiosConfig);
              }
              _context.next = 57;
              return axiosFetch(getSettingsAxiosConfig);
            case 57:
              response = _context.sent;
              if (api.optionName) {
                if (response.data[api.optionName]) {
                  result.settings = response.data[api.optionName];
                } else {
                  result.settings = null;
                }
              } else {
                result.settings = response.data;
              }
              return _context.abrupt("break", 77);
            case 60:
              if (api.optionName) {
                newData = {};
                newData[api.optionName] = data;
              } else {
                newData = data;
              }
              saveSettingsAxiosConfig = {
                key: key,
                path: api.path,
                method: 'POST',
                data: newData
              };
              if (api.axiosConfig.saveSettings) {
                saveSettingsAxiosConfig = api.axiosConfig.saveSettings(saveSettingsAxiosConfig);
              }
              _context.next = 65;
              return axiosFetch(saveSettingsAxiosConfig);
            case 65:
              response = _context.sent;
              if (api.optionName) {
                if (response.data[api.optionName]) {
                  result.settings = response.data[api.optionName];
                } else {
                  result.settings = null;
                }
              } else {
                result.settings = response.data;
              }
              return _context.abrupt("break", 77);
            case 68:
              deleteSettingsAxiosConfig = {
                key: key,
                path: api.path,
                method: 'DELETE',
                data: data
              };
              if (api.axiosConfig.deleteSettings) {
                deleteSettingsAxiosConfig = api.axiosConfig.deleteSettings(deleteSettingsAxiosConfig);
              }
              _context.next = 72;
              return axiosFetch(deleteSettingsAxiosConfig);
            case 72:
              response = _context.sent;
              if (api.optionName) {
                if (response.data[api.optionName]) {
                  result.settings = response.data[api.optionName];
                } else {
                  result.settings = null;
                }
              } else {
                result.settings = response.data;
              }
              return _context.abrupt("break", 77);
            case 75:
              if (api.callbacks) {
                result = api.callbacks(key, type, data, rowId);
              } else {
                console.error("Invalid type ".concat(api.type, " provided."));
              }
              return _context.abrupt("break", 77);
            case 77:
              if (api.filterResult) {
                result = api.filterResult({
                  result: result,
                  response: response
                });
              }
              _context.next = 84;
              break;
            case 80:
              _context.prev = 80;
              _context.t1 = _context["catch"](7);
              // eslint-disable-next-line no-console
              console.log("Error while performing AtrcApis call. API details :".concat(api, "  Error: ").concat(_context.t1));
              result.error = _context.t1;
            case 84:
              return _context.abrupt("return", result);
            case 85:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[7, 80]]);
      }));
      function doApi(_x) {
        return _doApi.apply(this, arguments);
      }
      return doApi;
    }())
  }]);
}();
var AtrcApis = new ClassAtrcApis();
export default AtrcApis;
//# sourceMappingURL=api.js.map