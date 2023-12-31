"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _data = require("@wordpress/data");
/*WordPress*/

/*Local*/
var AtrcApplyWithItems = function AtrcApplyWithItems(WrappedComponent) {
  return (0, _data.withSelect)(function (select, ownProps) {
    if (!ownProps || !ownProps.atrcStore || !ownProps.atrcStoreKey) {
      return null;
    }
    var _ownProps$atrcStore = ownProps.atrcStore,
      atrcStore = _ownProps$atrcStore === void 0 ? '' : _ownProps$atrcStore,
      _ownProps$atrcStoreKe = ownProps.atrcStoreKey,
      atrcStoreKey = _ownProps$atrcStoreKe === void 0 ? '' : _ownProps$atrcStoreKe;
    var itemsData = select(atrcStore).getItems(atrcStoreKey);
    var isLoading = false;
    var canSave = false;
    var queryArgs = {};
    var items = null;
    var countAllItem = null;
    var countQueryItems = null;
    var totalPages = null;
    var item = null;
    var selectItems = null;
    var confirmDelete = null;
    var notices = [];
    var updateData = null;
    var extraData = null;
    if (itemsData && itemsData.items) {
      isLoading = itemsData.isLoading;
      canSave = itemsData.canSave;
      queryArgs = itemsData.queryArgs;
      items = itemsData.items;
      countAllItem = itemsData.countAllItem;
      countQueryItems = itemsData.countQueryItems;
      totalPages = itemsData.totalPages;
      item = itemsData.item;
      selectItems = itemsData.selectItems;
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
      countAllItem: countAllItem,
      countQueryItems: countQueryItems,
      totalPages: totalPages,
      item: item,
      selectItems: selectItems,
      confirmDelete: confirmDelete,
      notices: notices,
      updateData: updateData,
      extraData: extraData,
      getItem: function getItem(id) {
        return select(atrcStore).getItem(atrcStoreKey, id);
      }
    };
  })((0, _data.withDispatch)(function (dispatch, ownProps) {
    if (!ownProps || !ownProps.atrcStore || !ownProps.atrcStoreKey) {
      return null;
    }
    var _ownProps$atrcStore2 = ownProps.atrcStore,
      atrcStore = _ownProps$atrcStore2 === void 0 ? '' : _ownProps$atrcStore2,
      _ownProps$atrcStoreKe2 = ownProps.atrcStoreKey,
      atrcStoreKey = _ownProps$atrcStoreKe2 === void 0 ? '' : _ownProps$atrcStoreKe2;
    return {
      setQueryArgs: function setQueryArgs(args) {
        return dispatch(atrcStore).setQueryArgs(atrcStoreKey, args);
      },
      toggleSelectAll: function toggleSelectAll() {
        return dispatch(atrcStore).toggleSelectAll(atrcStoreKey);
      },
      toggleSelect: function toggleSelect(item) {
        return dispatch(atrcStore).toggleSelect(atrcStoreKey, item);
      },
      setConfirmDelete: function setConfirmDelete(val) {
        return dispatch(ownProps.atrcStore).setConfirmDelete(atrcStoreKey, val);
      },
      deleteItems: function deleteItems(ids) {
        return dispatch(ownProps.atrcStore).deleteItems(atrcStoreKey, ids);
      },
      updateItem: function updateItem(item) {
        return dispatch(ownProps.atrcStore).updateItem(atrcStoreKey, item);
      },
      insertItem: function insertItem(item) {
        return dispatch(ownProps.atrcStore).insertItem(atrcStoreKey, item);
      },
      setItem: function setItem(item) {
        return dispatch(ownProps.atrcStore).setItem(atrcStoreKey, item);
      },
      updateItemData: function updateItemData(key, val) {
        return dispatch(ownProps.atrcStore).updateItemData(atrcStoreKey, key, val);
      },
      setExtraData: function setExtraData(data) {
        return dispatch(ownProps.atrcStore).setExtraData(atrcStoreKey, data);
      },
      setNotice: function setNotice(notice) {
        return dispatch(ownProps.atrcStore).setNotice(atrcStoreKey, notice);
      },
      removeNotice: function removeNotice(id) {
        return dispatch(ownProps.atrcStore).removeNotice(atrcStoreKey, id);
      }
    };
  })(WrappedComponent));
};
var _default = exports.default = AtrcApplyWithItems;
//# sourceMappingURL=hoc-items.js.map