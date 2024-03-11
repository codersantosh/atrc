function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/*WordPress*/
import { withSelect, withDispatch, dispatch } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';

/* Library */
import { isObject } from 'lodash';
import { useLocation } from 'react-router-dom';

/* Internal */
import { AtrcGetQueryParams } from './utils';

/*Local*/

// This HOC takes a component as an argument and returns a new component
var withUrlChanged = function withUrlChanged(WrappedComponent) {
  return function (props) {
    var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      queryArgs = _useState2[0],
      setQueryArgs = _useState2[1];
    var _props$atrcStore = props.atrcStore,
      atrcStore = _props$atrcStore === void 0 ? '' : _props$atrcStore,
      _props$atrcStoreKey = props.atrcStoreKey,
      atrcStoreKey = _props$atrcStoreKey === void 0 ? '' : _props$atrcStoreKey,
      _props$refreshOnUrlCh = props.refreshOnUrlChange,
      refreshOnUrlChange = _props$refreshOnUrlCh === void 0 ? false : _props$refreshOnUrlCh;
    if (!refreshOnUrlChange) {
      return /*#__PURE__*/React.createElement(WrappedComponent, props);
    }
    var currentPath;
    try {
      // Attempt to use useLocation()
      var location = useLocation();
      currentPath = location.pathname;
    } catch (error) {
      console.error('Component is not inside a <Router>.', error);
      return /*#__PURE__*/React.createElement(WrappedComponent, props);
    }
    useEffect(function () {
      if (currentPath) {
        var newQueryArgs = AtrcGetQueryParams(atrcStoreKey);
        setQueryArgs(newQueryArgs);
        dispatch(atrcStore).setQueryArgs({
          key: atrcStoreKey,
          queryArgs: newQueryArgs,
          update: false
        });
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPath]);

    /* queryArgs shoulbe be object either empty or not */
    if (null === queryArgs) {
      return null;
    }
    return /*#__PURE__*/React.createElement(WrappedComponent, props);
  };
};

// Creating the HOC using withSelect
var withSelectData = withSelect(function (select, ownProps) {
  if (!ownProps || !ownProps.atrcStore || !ownProps.atrcStoreKey) {
    return null;
  }
  var _ownProps$atrcStore = ownProps.atrcStore,
    atrcStore = _ownProps$atrcStore === void 0 ? '' : _ownProps$atrcStore,
    _ownProps$atrcStoreKe = ownProps.atrcStoreKey,
    atrcStoreKey = _ownProps$atrcStoreKe === void 0 ? '' : _ownProps$atrcStoreKe,
    _ownProps$hiddenQuery = ownProps.hiddenQueryArgsData,
    hiddenQueryArgsData = _ownProps$hiddenQuery === void 0 ? {} : _ownProps$hiddenQuery;
  var queryArgs = AtrcGetQueryParams(atrcStoreKey);

  /* select called selectors */
  var itemsData = select(atrcStore).getData(atrcStoreKey, queryArgs, hiddenQueryArgsData, atrcStore);
  var isLoading = false;
  var canSave = false;
  var items = null;
  var countAllItems = null;
  var countQueryItems = null;
  var totalPages = null;
  var item = null;
  var selectedItems = null;
  var confirmDelete = null;
  var notices = [];
  var updateData = null;
  var extraData = null;
  if (itemsData && isObject(itemsData)) {
    isLoading = itemsData.isLoading;
    canSave = itemsData.canSave;
    queryArgs = itemsData.queryArgs;
    items = itemsData.items;
    countAllItems = itemsData.countAllItems;
    countQueryItems = itemsData.countQueryItems;
    totalPages = itemsData.totalPages;
    item = itemsData.item;
    selectedItems = itemsData.selectedItems;
    confirmDelete = itemsData.confirmDelete;
    notices = itemsData.notices;
    updateData = itemsData.updateData;
    extraData = itemsData.extraData;
  }
  return {
    isLoading: isLoading,
    canSave: canSave,
    queryArgs: queryArgs,
    items: items,
    countAllItems: countAllItems,
    countQueryItems: countQueryItems,
    totalPages: totalPages,
    item: item,
    selectedItems: selectedItems,
    confirmDelete: confirmDelete,
    notices: notices,
    updateData: updateData,
    extraData: extraData,
    getItem: function getItem(id) {
      return select(atrcStore).getItem(atrcStoreKey, id, atrcStore);
    }
  };
});

// Creating the HOC using withDispatch
// eslint-disable-next-line no-shadow
var withDispatchActions = withDispatch(function (dispatch, ownProps) {
  if (!ownProps || !ownProps.atrcStore || !ownProps.atrcStoreKey) {
    return null;
  }
  var _ownProps$atrcStore2 = ownProps.atrcStore,
    atrcStore = _ownProps$atrcStore2 === void 0 ? '' : _ownProps$atrcStore2,
    _ownProps$atrcStoreKe2 = ownProps.atrcStoreKey,
    atrcStoreKey = _ownProps$atrcStoreKe2 === void 0 ? '' : _ownProps$atrcStoreKe2,
    _ownProps$hiddenQuery2 = ownProps.hiddenQueryArgsData,
    hiddenQueryArgsData = _ownProps$hiddenQuery2 === void 0 ? {} : _ownProps$hiddenQuery2;

  /* dispatch called actions */
  return {
    setQueryArgs: function setQueryArgs() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var update = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      return dispatch(atrcStore).setQueryArgs({
        key: atrcStoreKey,
        queryArgs: args,
        update: update,
        hiddenQueryArgsData: hiddenQueryArgsData
      });
    },
    toggleSelectAll: function toggleSelectAll() {
      return dispatch(atrcStore).toggleSelectAll({
        key: atrcStoreKey
      });
    },
    toggleSelect: function toggleSelect(item) {
      return dispatch(atrcStore).toggleSelect({
        key: atrcStoreKey,
        item: item
      });
    },
    setConfirmDelete: function setConfirmDelete(data) {
      return dispatch(ownProps.atrcStore).setConfirmDelete({
        key: atrcStoreKey,
        data: data
      });
    },
    deleteItems: function deleteItems(ids) {
      return dispatch(ownProps.atrcStore).deleteItems({
        key: atrcStoreKey,
        ids: ids
      });
    },
    updateItem: function updateItem(item) {
      return dispatch(ownProps.atrcStore).updateItem({
        key: atrcStoreKey,
        data: item
      });
    },
    insertItem: function insertItem(item) {
      return dispatch(ownProps.atrcStore).insertItem({
        key: atrcStoreKey,
        data: item
      });
    },
    setItem: function setItem(item) {
      return dispatch(ownProps.atrcStore).setItem({
        key: atrcStoreKey,
        data: item
      });
    },
    updateItemData: function updateItemData(key, val) {
      return dispatch(ownProps.atrcStore).updateItemData({
        key: atrcStoreKey,
        dataKey: key,
        dataVal: val
      });
    },
    setExtraData: function setExtraData(data) {
      return dispatch(ownProps.atrcStore).setExtraData({
        key: atrcStoreKey,
        data: data
      });
    },
    setNotice: function setNotice(notice) {
      return dispatch(ownProps.atrcStore).setNotice({
        key: atrcStoreKey,
        notice: notice
      });
    },
    setNotices: function setNotices(notices) {
      return dispatch(ownProps.atrcStore).setNotice({
        key: atrcStoreKey,
        notices: notices
      });
    },
    removeNotice: function removeNotice(id) {
      return dispatch(ownProps.atrcStore).removeNotice({
        key: atrcStoreKey,
        id: id
      });
    }
  };
});

// Combining both HOCs into a single HOC
var AtrcApplyWithItems = function AtrcApplyWithItems(WrappedComponent) {
  var WithCombinedFunctionality = withUrlChanged(withSelectData(withDispatchActions(WrappedComponent)));
  return WithCombinedFunctionality;
};
export default AtrcApplyWithItems;
//# sourceMappingURL=hoc-items.js.map