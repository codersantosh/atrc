function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React from 'react';

/*WordPress*/
import { createReduxStore, register } from '@wordpress/data';

/* Internal */
import { actions } from './redux-utils/actions';
import { reducer } from './redux-utils/reducer';
import { controls } from './redux-utils/controls';
import { selectors } from './redux-utils/selectors';
import { resolvers } from './redux-utils/resolvers';

/* Local */
var ClassAtrcStore = /*#__PURE__*/function () {
  function ClassAtrcStore() {
    _classCallCheck(this, ClassAtrcStore);
    if (!ClassAtrcStore.instance) {
      ClassAtrcStore.instance = this;
      this.DEFAULT_STATE = {};
      this.CACHE_STATE = {};
      this.TYPES = {};
    }
    return ClassAtrcStore.instance;
  }
  return _createClass(ClassAtrcStore, [{
    key: "register",
    value: function register(store) {
      this.addDefaults(store.key, store.type, store.queryArgs, store.allowedParams, store.queryParams);
    }

    /* @param {string}        key          key data type eg: item, page, custom type, custom table etc */
  }, {
    key: "addDefaults",
    value: function addDefaults(key) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var queryArgs = arguments.length > 2 ? arguments[2] : undefined;
      var allowedParams = arguments.length > 3 ? arguments[3] : undefined;
      var queryParams = arguments.length > 4 ? arguments[4] : undefined;
      this.TYPES[key] = type;
      if ('settings' === type || 'localStorage' === type) {
        // Register all methods for the key and path
        this.DEFAULT_STATE[key] = {
          isLoading: true,
          canSave: false,
          original: {} /* store original settings */,
          settings: {} /* store state like settings */,
          notices: [],
          extraData: null,
          type: type
        };
      } else {
        // Register all methods for the key and path
        this.DEFAULT_STATE[key] = {
          isLoading: true,
          canSave: false,
          allowedParams: ['page', 'per_page', 'order', 'orderby', 'search', 'author', 'author_exclude'] /* allowed on query params */,
          selectedItems: [],
          // selected item data
          item: {},
          // like a state to  update data
          original: {},
          // a selected item data
          confirmDelete: {
            ids: [],
            open: false
          },
          notices: [],
          extraData: null,
          // store extra data object
          currentCache: null // store extra data object,
        };
        this.CACHE_STATE[key] = {
          queryArgs: {},
          // {
          // 	context: 'edit',
          // 	page: 1,
          // 	per_page: 10,
          // 	order: 'desc',
          // 	orderby: 'created',
          // 	search: null,
          // 	author: null,
          // 	author_exclude: null,
          // 	/* add others from queryArgs when registered*/
          // }
          items: [],
          //lists of items
          countAllItems: null,
          countQueryItems: null,
          totalPages: null,
          notices: [],
          extraData: null // store extra data object
        };
      }
      if (queryArgs) {
        this.CACHE_STATE[key].queryArgs = queryArgs;
      }
      if (allowedParams) {
        this.DEFAULT_STATE[key].allowedParams = allowedParams;
      }
      /* param type if url, param is present in url eg page/2, category/tech */
      if (queryParams) {
        this.DEFAULT_STATE[key].queryParams = queryParams;
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
}();
export var AtrcStore = new ClassAtrcStore();
export default function AtrcRegisterStore(name) {
  var store = createReduxStore(name, {
    reducer: reducer,
    actions: actions,
    controls: controls,
    selectors: selectors,
    resolvers: resolvers
  });
  register(store);
  return store;
}
//# sourceMappingURL=store.js.map