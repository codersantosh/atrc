function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React from 'react';
import { useEffect, useState } from '@wordpress/element';
import { withSelect, withDispatch } from '@wordpress/data';
import AtrcApis from './api';
import AtrcRegisterStore, { AtrcStore } from './store';
AtrcApis.baseUrl('atrc-prefix-atrc-global', 'http://localhost/atrc-prefix-atrc');
// AtrcApis.baseUrl('posts', 'http://localhost/atrc-prefix-atrc');
AtrcApis.register('posts', 'wp/v2/posts/');
// eslint-disable-next-line no-undef
AtrcApis.xWpNonce(AtomicBuilderGutenbergBlocksLocalize.nonce);
console.log(AtrcApis);
console.log(AtrcStore);
console.log(AtrcRegisterStore('atrc-prefix-atrc'));
function ExampleItems(_ref) {
  var items = _ref.items,
    isLoading = _ref.isLoading,
    totalPages = _ref.totalPages,
    currentPage = _ref.currentPage,
    getItems = _ref.getItems;
  // eslint-disable-next-line no-unused-vars
  var _useState = useState(currentPage || 1),
    _useState2 = _slicedToArray(_useState, 2),
    page = _useState2[0],
    setPage = _useState2[1];
  /* const handlePageChange = (newPage) => {
  	setPage(newPage);
  	fetchItems(newPage);
  }; */
  useEffect(function () {
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
var applyWithSelect = withSelect(function (select) {
  return {
    items: select('atrc-prefix-atrc').getItems('posts'),
    isLoading: select('atrc-prefix-atrc').getItemsIsLoading('posts'),
    totalPages: select('atrc-prefix-atrc').getItemsTotalPages('posts')
  };
});
var applyWithDispatch = withDispatch(function (dispatch) {
  return {
    getItems: function getItems() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      console.log('2');
      // dispatch('atrc-prefix-atrc').getItems('posts', args);
    },
    setError: function setError(error) {
      dispatch('atrc-prefix-atrc').setError('posts', error);
    }
  };
});
export default applyWithSelect(applyWithDispatch(ExampleItems));
//# sourceMappingURL=example.js.map