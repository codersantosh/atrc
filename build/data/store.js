"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AtrcGetandSetQueryParams = AtrcGetandSetQueryParams;
exports.AtrcStore = void 0;
exports.default = AtrcRegisterStore;
var _i18n = require("@wordpress/i18n");
var _data = require("@wordpress/data");
var _lodash = require("lodash");
var _api = _interopRequireDefault(require("./api"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /*WordPress*/ /* Library */ /* API */
/* Local */
/* For local storage */
var AtrcDataLocalStorageGetSettings = function AtrcDataLocalStorageGetSettings(localStorageKey) {
  var data = null;
  if (typeof window !== 'undefined' && 'localStorage' in window) {
    // Try to get the settings from local storage
    data = localStorage.getItem(localStorageKey);
  } else {
    // If local storage is not available, try to get the settings from a cookie
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var cookieName = cookie.substring(0, cookie.indexOf('='));
      var cookieValue = cookie.substring(cookie.indexOf('=') + 1);
      if (cookieName.trim() === localStorageKey) {
        data = cookieValue;
        break;
      }
    }
  }
  try {
    return {
      settings: JSON.parse(data)
    };
  } catch (err) {
    return {
      settings: data
    };
  }
};
var AtrcDataLocalStorageSaveSettings = function AtrcDataLocalStorageSaveSettings(localStorageKey, data) {
  var expires = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 365;
  var stringifiedData = JSON.stringify(data);
  if (!stringifiedData) {
    return AtrcDataLocalStorageRemoveSettings(localStorageKey);
  } else if (typeof window !== 'undefined' && 'localStorage' in window) {
    // Try to save the settings to local storage
    localStorage.setItem(localStorageKey, stringifiedData);
  } else {
    // If local storage is not available, try to save the settings to a cookie
    var date = new Date();
    date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1000); // expire after the specified number of days
    var expiresStr = '; expires=' + date.toUTCString();
    document.cookie = localStorageKey + '=' + stringifiedData + expiresStr + '; path=/';
  }
  return AtrcDataLocalStorageGetSettings(localStorageKey);
};
var AtrcDataLocalStorageRemoveSettings = function AtrcDataLocalStorageRemoveSettings(key) {
  if (typeof window !== 'undefined' && 'localStorage' in window) {
    localStorage.removeItem(key);
  } else {
    var date = new Date();
    date.setTime(date.getTime() - 1);
    var expires = '; expires=' + date.toUTCString();
    document.cookie = key + '=' + '' + expires + '; path=/';
  }
  return {};
};
function AtrcGetandSetQueryParams(key) {
  var updateParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var search;
  if (location.hash) {
    search = location.hash.indexOf('?') === -1 ? '' : location.hash.substring(location.hash.indexOf('?') + 1);
  } else {
    var _location = location;
    search = _location.search;
  }
  var params = new URLSearchParams(search);
  var allowedParams = AtrcStore.DEFAULT_STATE[key].allowedParams;
  var allowedParamsObject = {};
  if (allowedParams) {
    allowedParams.forEach(function (param) {
      if (params.has(param)) {
        allowedParamsObject[param] = params.getAll(param)[1] || params.get(param);
      }
    });
  }
  var queryArgs = _objectSpread(_objectSpread({}, allowedParamsObject), updateParams);
  if (queryArgs && Object.keys(queryArgs).length > 0) {
    allowedParams.forEach(function (param) {
      if (param in queryArgs) {
        if (queryArgs[param]) {
          params.set(param, queryArgs[param]);
        } else {
          params.delete(param);
        }
      }
    });
    var newUrl = location.href;
    if (location.hash) {
      if (location.hash.indexOf('?') === -1) {
        newUrl += "?" + params.toString();
      } else {
        var newHash = location.hash.split('?')[0];
        newUrl = newUrl.replace(location.hash, "".concat(newHash, "?").concat(params.toString()));
      }
    } else {
      newUrl = newUrl.replace(location.search, "?".concat(params.toString()));
    }
    window.history.replaceState({}, document.title, decodeURI(newUrl));
    return queryArgs;
  }
  return null;
}
var ClassAtrcStore = /*#__PURE__*/function () {
  function ClassAtrcStore() {
    _classCallCheck(this, ClassAtrcStore);
    if (!ClassAtrcStore.instance) {
      ClassAtrcStore.instance = this;
      this.DEFAULT_STATE = {};
      this.TYPES = {};
    }
    return ClassAtrcStore.instance;
  }
  _createClass(ClassAtrcStore, [{
    key: "register",
    value: function register(store) {
      this.addDefaults(store.key, store.type, store.queryArgs, store.allowedParams);
    }

    /* @param {string}        key          key data type eg: item, page, custom type, custom table etc */
  }, {
    key: "addDefaults",
    value: function addDefaults(key) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var queryArgs = arguments.length > 2 ? arguments[2] : undefined;
      var allowedParams = arguments.length > 3 ? arguments[3] : undefined;
      this.TYPES[key] = type;
      if ('settings' === type || 'localStorage' === type) {
        // Register all methods for the key and path
        this.DEFAULT_STATE[key] = {
          isLoading: false,
          canSave: false,
          original: null /* store original settings */,
          settings: {} /* store state like settings */,
          notices: {},
          extraData: null,
          type: type
        };
      } else {
        // Register all methods for the key and path
        this.DEFAULT_STATE[key] = {
          isLoading: false,
          canSave: false,
          queryArgs: {
            context: 'edit',
            page: 1,
            per_page: 10,
            order: 'desc',
            orderby: 'created',
            search: null,
            author: null,
            author_exclude: null
            /* add others from queryArgs when registered*/
          },
          allowedParams: ['page', 'per_page', 'order', 'orderby', 'search', 'author', 'author_exclude'] /* allowed on query params */,
          items: [],
          //lists of items
          countAllItems: null,
          countQueryItems: null,
          totalPages: null,
          selectItems: [],
          // selected item data
          item: {},
          // like a state to  update data
          original: {},
          // a selected item data
          confirmDelete: {
            ids: [],
            open: false
          },
          notices: {},
          extraData: null // store extra data object
        };
      }
      if (queryArgs) {
        this.DEFAULT_STATE[key].queryArgs = queryArgs;
      }
      if (allowedParams) {
        this.DEFAULT_STATE[key].allowedParams = allowedParams;
      }
    }
  }, {
    key: "getDefaults",
    value: function getDefaults() {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      if (key) {
        return this.DEFAULT_STATE[key] || null;
      }
      return this.DEFAULT_STATE;
    }
  }, {
    key: "setDefaults",
    value: function setDefaults(key, defaults) {
      this.DEFAULT_STATE[key] = defaults;
    }
  }]);
  return ClassAtrcStore;
}();
var AtrcStore = exports.AtrcStore = new ClassAtrcStore();
// The actions object should describe all action creators available for your store.
var actions = {
  /* CURD Start
  most of actions for CURD, only two below are for SETTINGS
  */
  /* getItems:
  	(key, queryArgs) =>
  	// eslint-disable-next-line no-unused-vars
  	async ({ select, resolveSelect, dispatch }) => {
  		console.log('Hello world');
  		dispatch({
  			type: 'SET_IS_LOADING',
  			key,
  			isLoading: true,
  		});
  		console.log(queryArgs);
  
  		dispatch({
  			type: 'GET_ITEMS',
  			key,
  			queryArgs,
  		});
  	}, */
  getItems: function getItems(key, queryArgs) {
    return {
      type: 'GET_ITEMS',
      key: key,
      queryArgs: queryArgs
    };
  },
  getItem: function getItem(key, id) {
    return {
      type: 'GET_ITEM',
      key: key,
      id: id
    };
  },
  /* Set/update state data of item/s*/setItems: function setItems(key, data) {
    var queryArgs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    return {
      type: 'SET_ITEMS',
      key: key,
      data: data,
      queryArgs: queryArgs
    };
  },
  setItemsItems: function setItemsItems(key, items) {
    return {
      type: 'SET_ITEMS_ITEMS',
      key: key,
      items: items
    };
  },
  setItem: function setItem(key, item) {
    return {
      type: 'SET_ITEM',
      key: key,
      item: item
    };
  },
  updateItemDatas: function updateItemDatas(key, data) {
    return {
      type: 'UPDATE_ITEM_DATAS',
      key: key,
      data: data
    };
  },
  updateItemData: function updateItemData(key, dataKey, dataVal) {
    return {
      type: 'UPDATE_ITEM_DATA',
      key: key,
      dataKey: dataKey,
      dataVal: dataVal
    };
  },
  /* Insert item */
  insertItem: function insertItem(key, data) {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line no-unused-vars
      function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
          var select, resolveSelect, dispatch, result;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                select = _ref.select, resolveSelect = _ref.resolveSelect, dispatch = _ref.dispatch;
                dispatch({
                  type: 'SET_IS_LOADING',
                  key: key,
                  isLoading: true
                });
                _context.next = 4;
                return _api.default.doApi(key, 'insertItem', data);
              case 4:
                result = _context.sent;
                dispatch({
                  type: 'INSERT_ITEM',
                  key: key,
                  data: result
                });
              case 6:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }()
    );
  },
  insertItems: function insertItems(key, data) {
    return {
      type: 'INSERT_ITEMS',
      key: key,
      data: data
    };
  },
  /* Update Item */
  updateItem: function updateItem(key, data) {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line no-unused-vars
      function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_ref3) {
          var select, resolveSelect, dispatch, result;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                select = _ref3.select, resolveSelect = _ref3.resolveSelect, dispatch = _ref3.dispatch;
                dispatch({
                  type: 'SET_IS_LOADING',
                  key: key,
                  isLoading: true
                });
                _context2.next = 4;
                return _api.default.doApi(key, 'updateItem', data, data.id);
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
          return _ref4.apply(this, arguments);
        };
      }()
    );
  },
  updateItems: function updateItems(key, data) {
    return {
      type: 'UPDATE_ITEMS',
      key: key,
      data: data
    };
  },
  /* Delete item/s */setConfirmDelete: function setConfirmDelete(key, confirmDelete) {
    return {
      type: 'SET_CONFIRM_DELETE',
      key: key,
      confirmDelete: confirmDelete
    };
  },
  deleteItems: function deleteItems(key, ids) {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line no-unused-vars
      function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(_ref5) {
          var select, resolveSelect, dispatch, promises, result;
          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                select = _ref5.select, resolveSelect = _ref5.resolveSelect, dispatch = _ref5.dispatch;
                dispatch({
                  type: 'SET_IS_LOADING',
                  key: key,
                  isLoading: true
                });
                promises = ids.map( /*#__PURE__*/function () {
                  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(id) {
                    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                      while (1) switch (_context3.prev = _context3.next) {
                        case 0:
                          _context3.next = 2;
                          return _api.default.doApi(key, 'deleteItem', null, id);
                        case 2:
                          return _context3.abrupt("return", _context3.sent);
                        case 3:
                        case "end":
                          return _context3.stop();
                      }
                    }, _callee3);
                  }));
                  return function (_x4) {
                    return _ref7.apply(this, arguments);
                  };
                }());
                _context4.next = 5;
                return Promise.all(promises);
              case 5:
                result = _context4.sent;
                dispatch({
                  type: 'DELETE_ITEMS',
                  key: key,
                  data: result
                });
              case 7:
              case "end":
                return _context4.stop();
            }
          }, _callee4);
        }));
        return function (_x3) {
          return _ref6.apply(this, arguments);
        };
      }()
    );
  },
  setQueryArgs: function setQueryArgs(key, queryArgs) {
    var doFetch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    return doFetch ? (
    /*#__PURE__*/
    // eslint-disable-next-line no-unused-vars
    function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(_ref8) {
        var select, resolveSelect, dispatch, result;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              select = _ref8.select, resolveSelect = _ref8.resolveSelect, dispatch = _ref8.dispatch;
              queryArgs = AtrcGetandSetQueryParams(key, queryArgs);
              dispatch({
                type: 'GET_ITEMS',
                key: key,
                queryArgs: queryArgs
              });
              _context5.next = 5;
              return _api.default.doApi(key, 'getItems', queryArgs);
            case 5:
              result = _context5.sent;
              dispatch({
                type: 'SET_ITEMS',
                key: key,
                data: result
              });
            case 7:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      return function (_x5) {
        return _ref9.apply(this, arguments);
      };
    }()) : {
      type: 'SET_QUERY_ARGS',
      key: key,
      queryArgs: queryArgs
    };
  },
  setQueryArg: function setQueryArg(key, dataKey, dataVal) {
    var doFetch = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    return doFetch ? (
    /*#__PURE__*/
    // eslint-disable-next-line no-unused-vars
    function () {
      var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(_ref10) {
        var select, resolveSelect, dispatch, queryArgs, result;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              select = _ref10.select, resolveSelect = _ref10.resolveSelect, dispatch = _ref10.dispatch;
              queryArgs = AtrcGetandSetQueryParams(key, queryArgs);
              queryArgs[dataKey] = dataVal;
              dispatch({
                type: 'GET_ITEMS',
                key: key,
                queryArgs: queryArgs
              });
              _context6.next = 6;
              return _api.default.doApi(key, 'getItems', queryArgs);
            case 6:
              result = _context6.sent;
              dispatch({
                type: 'SET_ITEMS',
                key: key,
                data: result
              });
            case 8:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      return function (_x6) {
        return _ref11.apply(this, arguments);
      };
    }()) : {
      type: 'SET_QUERY_ARG',
      key: key,
      dataKey: dataKey,
      dataVal: dataVal
    };
  },
  setIsLoading: function setIsLoading(key, isLoading) {
    return {
      type: 'SET_IS_LOADING',
      key: key,
      isLoading: isLoading
    };
  },
  setCountAllItems: function setCountAllItems(key, countAllItems) {
    return {
      type: 'SET_COUNT_ALL_ITEMS',
      key: key,
      countAllItems: countAllItems
    };
  },
  setCountQueryItems: function setCountQueryItems(key, countQueryItems) {
    return {
      type: 'SET_COUNT_QUERY_ITEMS',
      key: key,
      countQueryItems: countQueryItems
    };
  },
  setTotalPages: function setTotalPages(key, totalPages) {
    return {
      type: 'SET_TOTAL_PAGES',
      key: key,
      totalPages: totalPages
    };
  },
  /* select itmes */toggleSelectAll: function toggleSelectAll(key) {
    return {
      type: 'TOGGLE_SELECT_ALL',
      key: key
    };
  },
  toggleSelect: function toggleSelect(key, item) {
    return {
      type: 'TOGGLE_SELECT',
      key: key,
      item: item
    };
  },
  setCanSave: function setCanSave(key, canSave) {
    return {
      type: 'SET_CAN_SAVE',
      key: key,
      canSave: canSave
    };
  },
  /* Notice */setNotice: function setNotice(key, notice) {
    return {
      type: 'SET_NOTICE',
      key: key,
      notice: notice
    };
  },
  removeNotice: function removeNotice(key, id) {
    return {
      type: 'REMOVE_NOTICE',
      key: key,
      id: id
    };
  },
  setNotices: function setNotices(key, notices) {
    return {
      type: 'SET_NOTICES',
      key: key,
      notices: notices
    };
  },
  setExtraData: function setExtraData(key, data) {
    return {
      type: 'SET_EXTRA_DATA',
      key: key,
      data: data
    };
  },
  /* Settings */getSettings: function getSettings(key) {
    return {
      type: 'GET_SETTINGS',
      key: key
    };
  },
  setSettings: function setSettings(key, data) {
    return {
      type: 'SET_SETTINGS',
      key: key,
      data: data
    };
  },
  updateSetting: function updateSetting(key, dataKey, dataVal) {
    return {
      type: 'UPDATE_SETTING',
      key: key,
      dataKey: dataKey,
      dataVal: dataVal
    };
  },
  saveSettings: function saveSettings(key, data) {
    var setNotice = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    return (
      /*#__PURE__*/
      // eslint-disable-next-line no-unused-vars
      function () {
        var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(_ref12) {
          var select, resolveSelect, dispatch, result;
          return _regeneratorRuntime().wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
              case 0:
                select = _ref12.select, resolveSelect = _ref12.resolveSelect, dispatch = _ref12.dispatch;
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
                return _api.default.doApi(key, 'saveSettings', data);
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
          return _ref13.apply(this, arguments);
        };
      }()
    );
  },
  /* 
  Wanna use this store but need custom solutions use following
  Custom Dispatch*/
  customDispatch: function customDispatch(callback) {
    return (
      // eslint-disable-next-line no-unused-vars
      function (_ref14) {
        var select = _ref14.select,
          resolveSelect = _ref14.resolveSelect,
          dispatch = _ref14.dispatch,
          registry = _ref14.registry;
        callback(select, resolveSelect, dispatch, AtrcStore, _api.default, registry);
      }
    );
  }
};

/* Error Notice */
var getItemErrorNotice = function getItemErrorNotice(result, action) {
  var message, code;
  var error = result.error;
  if (error.message) {
    message = error.message;
  } else {
    message = (0, _i18n.sprintf)(
    // translators: %s: action type
    (0, _i18n.__)('Error while data store process for %s.', 'atrc-prefix-atrc'), action.type);
  }
  return {
    type: 'error',
    code: code || 'GENERAL',
    message: message
  };
};

// Controls are used to handle side-effects that are triggered by the dispatch of an action.
var controls = {
  GET_ITEMS: function GET_ITEMS(action) {
    return _api.default.doApi(action.key, 'getItems', action.queryArgs);
  },
  GET_ITEM: function GET_ITEM(action) {
    return _api.default.doApi(action.key, 'getItem', null, action.id);
  },
  GET_SETTINGS: function GET_SETTINGS(action) {
    if ('localStorage' === AtrcStore.TYPES[action.key]) {
      return AtrcDataLocalStorageGetSettings(action.key);
    }
    return _api.default.doApi(action.key, 'getSettings');
  }
};
// The selectors object includes a set of functions for accessing and deriving state values.
var selectors = {
  getItems: function getItems(state, key) {
    var all = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    return all ? state[key] : state[key].items;
  },
  getItem: function getItem(state, key) {
    return state[key].item;
  },
  getSelectedItems: function getSelectedItems(state, key) {
    return state[key].selectItems;
  },
  getQueryArgs: function getQueryArgs(state, key) {
    return state[key].queryArgs;
  },
  getIsLoading: function getIsLoading(state, key) {
    return state[key].isLoading;
  },
  getCountAllItems: function getCountAllItems(state, key) {
    return state[key].countAllItems;
  },
  getCountQueryItems: function getCountQueryItems(state, key) {
    return state[key].countQueryItems;
  },
  getTotalPages: function getTotalPages(state, key) {
    return state[key].totalPages;
  },
  getCanSave: function getCanSave(state, key) {
    return state[key].canSave;
  },
  getConfirmDelete: function getConfirmDelete(state, key) {
    return state[key].confirmDelete;
  },
  getItemsNotices: function getItemsNotices(state, key) {
    return state[key].notices;
  },
  getSettings: function getSettings(state, key) {
    var all = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var innerOptName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    if (all) {
      return state[key];
    }
    if (!innerOptName) {
      return state[key].settings;
    }
    var settings = state[key].settings;
    return settings && settings[innerOptName] ? settings[innerOptName] : null;
  }
};

// A resolver is a side-effect for a selector.
var resolvers = {
  getItems: /*#__PURE__*/_regeneratorRuntime().mark(function getItems(key, all, queryArgs) {
    var result;
    return _regeneratorRuntime().wrap(function getItems$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          queryArgs = AtrcGetandSetQueryParams(key, queryArgs);
          _context8.next = 3;
          return actions.getItems(key, queryArgs);
        case 3:
          result = _context8.sent;
          return _context8.abrupt("return", actions.setItems(key, result, queryArgs));
        case 5:
        case "end":
          return _context8.stop();
      }
    }, getItems);
  }),
  getItem: /*#__PURE__*/_regeneratorRuntime().mark(function getItem(key, id) {
    var result;
    return _regeneratorRuntime().wrap(function getItem$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return actions.getItem(key, id);
        case 2:
          result = _context9.sent;
          return _context9.abrupt("return", actions.setItem(key, result));
        case 4:
        case "end":
          return _context9.stop();
      }
    }, getItem);
  }),
  getSettings: /*#__PURE__*/_regeneratorRuntime().mark(function getSettings(key) {
    var result;
    return _regeneratorRuntime().wrap(function getSettings$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return actions.getSettings(key);
        case 2:
          result = _context10.sent;
          return _context10.abrupt("return", actions.setSettings(key, result));
        case 4:
        case "end":
          return _context10.stop();
      }
    }, getSettings);
  })
};

// A reducer is a function accepting the previous state and action as arguments and returns an updated state value.
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : AtrcStore.DEFAULT_STATE;
  var act = arguments.length > 1 ? arguments[1] : undefined;
  if (!('key' in act)) {
    return state;
  }
  var newState = (0, _lodash.cloneDeep)(state);
  var action = (0, _lodash.cloneDeep)(act);
  var key = action.key;
  var items = (0, _lodash.cloneDeep)(newState[key]);
  switch (action.type) {
    case 'GET_ITEMS':
      {
        items.queryArgs = (0, _lodash.cloneDeep)(action.queryArgs) || {};
        items.isLoading = true;
        items.canSave = false;
        break;
      }
    case 'GET_ITEM':
      items.isLoading = true;
      items.canSave = false;
      break;
    case 'SET_ITEMS':
      items.isLoading = false;
      items.canSave = false;
      if (action.data.error) {
        var newNotices = items.notices;
        var newKey = 'abc-' + Object.keys(newNotices).length;
        newNotices[newKey] = getItemErrorNotice();
        items.notices = newNotices;
      } else {
        items.items = action.data.items;
        items.countQueryItems = action.data.countQueryItems;
        items.totalPages = action.data.totalPages;
        items.countAllItems = action.data.countAllItems;
        if (action.queryArgs) {
          items.queryArgs = (0, _lodash.cloneDeep)(action.queryArgs) || {};
        }
      }
      break;

    /* Query args */
    case 'SET_QUERY_ARGS':
      items.queryArgs = _objectSpread(_objectSpread({}, items.queryArgs), action.queryArgs);
      break;
    case 'SET_QUERY_ARG':
      items.queryArgs[action.dataKey] = action.dataVal;
      break;
    case 'SET_IS_LOADING':
      items.isLoading = action.isLoading;
      break;
    case 'SET_ITEMS_ITEMS':
      items.items = action.items;
      break;
    case 'SET_COUNT_ALL_ITEMS':
      items.countAllItems = action.countAllItems;
      break;
    case 'SET_COUNT_QUERY_ITEMS':
      items.countQueryItems = action.countQueryItems;
      break;
    case 'SET_TOTAL_PAGES':
      items.totalPages = action.totalPages;
      break;
    case 'TOGGLE_SELECT_ALL':
      if (items.selectItems.length === items.items.length) {
        items.selectItems = [];
      } else {
        items.selectItems = (0, _lodash.cloneDeep)(items.items);
      }
      break;
    case 'TOGGLE_SELECT':
      // eslint-disable-next-line eqeqeq
      if (items.selectItems.find(function (item) {
        return item.id == action.item.id;
      })) {
        items.selectItems = items.selectItems.filter(
        // eslint-disable-next-line eqeqeq
        function (item) {
          return item.id != action.item.id;
        });
      } else {
        items.selectItems = [].concat(_toConsumableArray(items.selectItems), [items.items.find(function (item) {
          return item.id === action.item.id;
        })]);
      }
      break;
    case 'SET_CAN_SAVE':
      items.canSave = action.canSave;
      break;

    /* Notice */
    case 'SET_NOTICE':
      {
        var _newNotices = (0, _lodash.cloneDeep)(items.notices);
        var _newKey = 'abc-' + Object.keys(_newNotices).length;
        _newNotices[_newKey] = (0, _lodash.cloneDeep)(action.notice);
        items.notices = _newNotices;
        break;
      }
    case 'REMOVE_NOTICE':
      {
        var _newNotices2 = (0, _lodash.cloneDeep)(items.notices);
        var _newKey2 = action.id;
        delete _newNotices2[_newKey2];
        items.notices = _newNotices2;
        break;
      }
    case 'SET_NOTICES':
      items.notices = (0, _lodash.cloneDeep)(action.notices);
      break;
    case 'INSERT_ITEM':
      {
        var _newNotices3 = items.notices;
        var _newKey3 = 'abc-' + Object.keys(_newNotices3).length;
        if (action.data.error) {
          _newNotices3[_newKey3] = getItemErrorNotice();
        } else {
          items.items = [].concat(_toConsumableArray(items.items), [(0, _lodash.cloneDeep)(action.data)]);
          items.item = (0, _lodash.cloneDeep)(action.data);

          /* Set success notice */
          _newNotices3[_newKey3] = {
            type: 'success',
            code: 'GENERAL',
            message: (0, _i18n.sprintf)(
            // translators: %s: item id
            (0, _i18n.__)('The item with id %s is added successfully', 'atrc-prefix-atrc'), items.item.id)
          };
        }
        items.notices = _newNotices3;
        items.isLoading = false;
        items.canSave = false;
        break;
      }
    case 'INSERT_ITEMS':
      if (action.data.error) {
        var _newNotices4 = items.notices;
        var _newKey4 = 'abc-' + Object.keys(_newNotices4).length;
        _newNotices4[_newKey4] = getItemErrorNotice();
        items.notices = _newNotices4;
      } else {
        items.isLoading = false;
        items.items = [].concat(_toConsumableArray(items.items), _toConsumableArray(action.data));
      }
      items.isLoading = false;
      items.canSave = false;
      break;

    /* Delete Item/s */
    case 'SET_CONFIRM_DELETE':
      items.confirmDelete = action.confirmDelete;
      break;
    case 'DELETE_ITEMS':
      {
        var _newNotices5 = items.notices;
        action.data.forEach(function (item) {
          var newKey = 'abc-' + Object.keys(_newNotices5).length;
          if (item.error) {
            _newNotices5[newKey] = getItemErrorNotice(item);
            items.notices = _newNotices5;
          } else {
            _newNotices5[newKey] = {
              type: 'success',
              code: 'GENERAL',
              message: (0, _i18n.__)('Deleted successfully', 'atrc-prefix-atrc')
            };
            items.notices = _newNotices5;
          }
        });
        var dataWithoutError = action.data.filter(function (data) {
          return !data.error;
        });
        items.items = items.items.filter(function (item1) {
          return !dataWithoutError.some(function (item2) {
            return item1.id === item2.id;
          });
        });
        items.isLoading = false;
        items.confirmDelete = {};
        break;
      }

    /* Add/Edit Item */
    case 'SET_ITEM':
      items.item = (0, _lodash.cloneDeep)(action.item);
      items.original = action.item;
      break;
    case 'UPDATE_ITEM':
      {
        var _newNotices6 = items.notices;
        var _newKey5 = 'abc-' + Object.keys(_newNotices6).length;
        if (action.data.error) {
          _newNotices6[_newKey5] = getItemErrorNotice();
        } else {
          var updatedItem = items.items.find(function (item) {
            return item.id === action.data.id;
          });
          if (updatedItem) {
            items.items = items.items.map(function (item) {
              return item.id === action.data.id ? action.data : item;
            });
          } else {
            items.items = [].concat(_toConsumableArray(items.items), [(0, _lodash.cloneDeep)(action.data)]);
          }
          items.item = (0, _lodash.cloneDeep)(action.data);
          items.original = action.data;

          /* Set success notice */
          _newNotices6[_newKey5] = {
            type: 'success',
            code: 'GENERAL',
            message: (0, _i18n.sprintf)(
            // translators: %s: item id
            (0, _i18n.__)('The item with id %s is updated successfully', 'atrc-prefix-atrc'), items.item.id)
          };
        }
        items.notices = _newNotices6;
        items.isLoading = false;
        items.canSave = false;
        break;
      }
    case 'UPDATE_ITEMS':
      {
        var _newNotices7 = items.notices;
        var _newKey6 = 'abc-' + Object.keys(_newNotices7).length;
        if (action.data.error) {
          _newNotices7[_newKey6] = getItemErrorNotice();
          items.notices = _newNotices7;
        } else {
          items.isLoading = false;
          items.items = [].concat(_toConsumableArray(items.items), _toConsumableArray(action.data));
        }
        items.isLoading = false;
        items.canSave = false;
        break;
      }
    case 'UPDATE_ITEM_DATAS':
      {
        items.items = action.data;
        if ((0, _lodash.isEqual)(items.original, items.item)) {
          items.canSave = false;
        } else {
          items.canSave = true;
        }
        break;
      }
    case 'UPDATE_ITEM_DATA':
      {
        items.item[action.dataKey] = action.dataVal;
        if ((0, _lodash.isEqual)(items.original, items.item)) {
          items.canSave = false;
        } else {
          items.canSave = true;
        }
        break;
      }

    /* Settings */
    case 'GET_SETTINGS':
      {
        items.canSave = false;
        items.isLoading = true;
        break;
      }
    case 'SET_SETTINGS':
      {
        var _newNotices8 = items.notices;
        var _newKey7 = 'abc-' + Object.keys(_newNotices8).length;
        if (action.data.error) {
          _newNotices8[_newKey7] = getItemErrorNotice();
          items.notices = _newNotices8;
        } else {
          items.original = action.data.settings;
          items.settings = (0, _lodash.cloneDeep)(action.data.settings);
          if (action.setNotice) {
            /* Set success notice */
            _newNotices8[_newKey7] = {
              type: 'success',
              code: 'GENERAL',
              message: (0, _i18n.__)('Updated successfully', 'atrc-prefix-atrc')
            };
            items.notices = _newNotices8;
          }
        }
        items.canSave = false;
        items.isLoading = false;
        break;
      }
    case 'UPDATE_SETTING':
      {
        items.settings[action.dataKey] = action.dataVal;
        if ((0, _lodash.isEqual)(items.original, items.settings)) {
          items.canSave = false;
        } else {
          items.canSave = true;
        }
        break;
      }
  }
  newState[key] = items;
  return newState;
};
function AtrcRegisterStore(name) {
  var store = (0, _data.createReduxStore)(name, {
    reducer: reducer,
    actions: actions,
    controls: controls,
    selectors: selectors,
    resolvers: resolvers
  });
  return (0, _data.register)(store);
}
//# sourceMappingURL=store.js.map