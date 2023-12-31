"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _element = require("@wordpress/element");
var _data = require("@wordpress/data");
var _api = _interopRequireDefault(require("./api"));
var _store = _interopRequireWildcard(require("./store"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
_api.default.baseUrl('atrc-prefix-atrc-global', 'http://localhost/atrc-prefix-atrc');
// AtrcApis.baseUrl('posts', 'http://localhost/atrc-prefix-atrc');
_api.default.register('posts', 'wp/v2/posts/');
// eslint-disable-next-line no-undef
_api.default.xWpNonce(AtomicBuilderGutenbergBlocksLocalize.nonce);
console.log(_api.default);
console.log(_store.AtrcStore);
console.log((0, _store.default)('atrc-prefix-atrc'));
function ExampleItems(_ref) {
  var items = _ref.items,
    isLoading = _ref.isLoading,
    totalPages = _ref.totalPages,
    currentPage = _ref.currentPage,
    getItems = _ref.getItems;
  // eslint-disable-next-line no-unused-vars
  var _useState = (0, _element.useState)(currentPage || 1),
    _useState2 = _slicedToArray(_useState, 2),
    page = _useState2[0],
    setPage = _useState2[1];
  /* const handlePageChange = (newPage) => {
  	setPage(newPage);
  	fetchItems(newPage);
  }; */
  (0, _element.useEffect)(function () {
    console.log('1');
    getItems();
  }, []);
  if (isLoading) {
    return /*#__PURE__*/React.createElement("div", null, "Loading...");
  }
  if (!items || !items.items) {
    return null;
  }
  return /*#__PURE__*/React.createElement("div", null, "Hello", /*#__PURE__*/React.createElement("ul", null, items.items.map(function (item) {
    return /*#__PURE__*/React.createElement("li", {
      key: item.id
    }, item.title.rendered);
  })));
}
var applyWithSelect = (0, _data.withSelect)(function (select) {
  return {
    items: select('atrc-prefix-atrc').getItems('posts'),
    isLoading: select('atrc-prefix-atrc').getItemsIsLoading('posts'),
    totalPages: select('atrc-prefix-atrc').getItemsTotalPages('posts')
  };
});
var applyWithDispatch = (0, _data.withDispatch)(function (dispatch) {
  return {
    getItems: function getItems() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      console.log('2');
      // dispatch('atrc-prefix-atrc').getItems('posts', args);
    },
    setIsLoading: function setIsLoading(isLoading) {
      dispatch('atrc-prefix-atrc').setIsLoading('posts', isLoading);
    },
    setError: function setError(error) {
      dispatch('atrc-prefix-atrc').setError('posts', error);
    }
  };
});
var _default = exports.default = applyWithSelect(applyWithDispatch(ExampleItems));
//# sourceMappingURL=example.js.map