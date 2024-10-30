function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
import React from 'react';

/* WordPress */
import { __, sprintf } from '@wordpress/i18n';

/* Library */
import { cloneDeep, isEqual, isObject } from 'lodash';

/* Internal */
import { AtrcStore } from '../store';
import { AtrcFlushCache, AtrcGetQueryParts } from '../utils';

/* Local */
/* Error Notice */
var getItemErrorNotice = function getItemErrorNotice(_ref) {
  var error = _ref.error;
  var message, code;
  if (error.message) {
    message = error.message;
  } else {
    message = sprintf(
    // translators: %s: action type
    __('Error while data store process for %s.', 'atrc-prefix-atrc'), action.type);
  }
  return {
    type: 'error',
    code: code || 'GENERAL',
    message: message
  };
};

/**
 * Reducer function for managing state updates based on dispatched actions.
 *
 * @param {Object|null} state - The previous state.
 * @param {Object}      act   - The action object.
 * @return {Object} The updated state.
 */
export var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : AtrcStore.DEFAULT_STATE;
  var act = arguments.length > 1 ? arguments[1] : undefined;
  if (!('key' in act)) {
    return state;
  }
  var action = cloneDeep(act);
  var key = action.key;
  var newState = {};
  if (null === state) {
    newState[key] = {};
  } else {
    newState = cloneDeep(state);
  }
  switch (action.type) {
    /* set isLoading true and and canSave false, if state is not set for the provided key, also selectedItems to empty since api will start for new data*/
    case 'BEFORE_DATA_API':
      {
        var queryKey = action.queryKey;
        if (!newState[key]) {
          newState[key] = null;
        }
        var result = cloneDeep(newState[key]);

        /* Set default if state is not defined yet */
        if (!isObject(result)) {
          result[queryKey] = AtrcStore.CACHE_STATE[key];
        }
        result.isLoading = true;
        result.canSave = false;
        result.selectedItems = [];
        newState[key] = result;
        return newState;
      }

    /* set cachedData and current data to cachedData, cachedData is used specially on SET_QUERY_ARGS to set cached data to current data according to querykey, also selectedItems to empty since setting new data*/
    case 'SET_DATA':
      {
        var data = action.data,
          queryArgs = action.queryArgs,
          _queryKey = action.queryKey;
        if (!newState[key]) {
          newState[key] = {};
        }
        var _result = cloneDeep(newState[key]);

        /* Set default if state is not defined yet */
        if (!isObject(_result)) {
          _result[_queryKey] = AtrcStore.CACHE_STATE;
        }
        _result.isLoading = false;
        var cachedData = {};
        if (data.error) {
          var newNotices = _toConsumableArray(_result.notices);
          newNotices.push(getItemErrorNotice({
            error: data.error
          }));
          cachedData.notices = newNotices;
        } else {
          cachedData.items = data.items;
          cachedData.countQueryItems = data.countQueryItems;
          cachedData.totalPages = data.totalPages;
          cachedData.countAllItems = data.countAllItems;
          cachedData.queryArgs = cloneDeep(queryArgs) || {};
        }
        _result[_queryKey] = cachedData;
        _result.currentCache = _queryKey;
        _result.selectedItems = [];
        _result = _objectSpread(_objectSpread({}, _result), cachedData);
        newState[key] = _result;
        return newState;
      }

    /* set state of queryArgs to provided queryArgs and if cached data is available set cached data to current data according to querykey,also selectedItems to empty since fetching new data or settings new data from cached*/
    case 'SET_QUERY_ARGS':
      {
        var _result2 = cloneDeep(newState[key]);
        var _queryArgs = action.queryArgs;
        var queryParts = AtrcGetQueryParts(_queryArgs);
        var _queryKey2 = queryParts.queryKey;

        /* Set default if state is not defined yet */
        if (!isObject(_result2)) {
          _result2[_queryKey2] = AtrcStore.CACHE_STATE[key];
        }
        _result2.currentCache = _queryKey2;
        if (_result2[_queryKey2]) {
          var _cachedData = _result2[_queryKey2];
          _result2 = _objectSpread(_objectSpread({}, _result2), _cachedData);
        }
        _result2.queryArgs = _queryArgs;
        _result2.selectedItems = [];
        newState[key] = _result2;
        return newState;
      }

    /* toggle state of all selected items to empty array or all items*/
    case 'TOGGLE_SELECT_ALL':
      {
        var _result3 = cloneDeep(newState[key]);
        if (_result3.selectedItems.length === _result3.items.length) {
          _result3.selectedItems = [];
        } else {
          _result3.selectedItems = cloneDeep(_result3.items);
        }
        newState[key] = _result3;
        return newState;
      }

    /* toggle state of a selected item*/
    case 'TOGGLE_SELECT':
      {
        var _result4 = cloneDeep(newState[key]);

        // eslint-disable-next-line eqeqeq
        if (_result4.selectedItems.find(function (item) {
          return item.id == action.item.id;
        })) {
          _result4.selectedItems = _result4.selectedItems.filter(
          // eslint-disable-next-line eqeqeq
          function (item) {
            return item.id != action.item.id;
          });
        } else {
          _result4.selectedItems = [].concat(_toConsumableArray(_result4.selectedItems), [_result4.items.find(function (item) {
            return item.id === action.item.id;
          })]);
        }
        newState[key] = _result4;
        return newState;
      }

    /* Add/Edit Item */
    /* set isLoading true and and canSave false*/
    case 'BEFORE_ITEM_API':
      {
        var _result5 = cloneDeep(newState[key]);
        _result5.isLoading = true;
        _result5.canSave = false;
        newState[key] = _result5;
        return newState;
      }

    /* set currently edit/view single item, set isLoading false and and canSave false since loading is completed and use need to update item data before it can be save*/
    case 'SET_ITEM':
      {
        var _result6 = cloneDeep(newState[key]);
        _result6.item = cloneDeep(action.data);
        _result6.isLoading = false;
        _result6.canSave = false;
        newState[key] = _result6;
        return newState;
      }

    /* set item properties to user changed data, after setting item data if it is equal to original data no need to save it again*/
    case 'UPDATE_ITEM_DATA':
      {
        var _result7 = cloneDeep(newState[key]);
        _result7.item[action.dataKey] = action.dataVal;
        if (isEqual(_result7.original, _result7.item)) {
          _result7.canSave = false;
        } else {
          _result7.canSave = true;
        }
        newState[key] = _result7;
        return newState;
      }

    /* add notice, updating a item data by id, and flush cache */
    case 'UPDATE_ITEM':
      {
        var _data = action.data;
        var _result8 = cloneDeep(newState[key]);
        var _newNotices = _toConsumableArray(_result8.notices);
        if (_data.error) {
          _newNotices.push(getItemErrorNotice({
            error: _data.error
          }));
        } else {
          var updatedItem = _result8.items.find(function (item) {
            return item.id === _data.id;
          });
          if (updatedItem) {
            _result8.items = _result8.items.map(function (item) {
              return item.id === _data.id ? _data : item;
            });
          } else {
            _result8.items = [].concat(_toConsumableArray(_result8.items), [cloneDeep(_data)]);
          }
          _result8.item = cloneDeep(_data);
          _result8.original = cloneDeep(_data);

          /* Set success notice */
          _newNotices.push({
            type: 'success',
            code: 'GENERAL',
            message: sprintf(
            // translators: %s: item id
            __('The item with id %s is updated successfully', 'atrc-prefix-atrc'), _result8.item.id)
          });
        }
        _result8.notices = _newNotices;
        _result8.isLoading = false;
        _result8.canSave = false;

        /* flush all cache */
        AtrcFlushCache(_result8);
        newState[key] = _result8;
        return newState;
      }

    /* add notice, add a new item, and flush cache */
    case 'INSERT_ITEM':
      {
        var _data2 = action.data;
        var _result9 = cloneDeep(newState[key]);
        var _newNotices2 = _toConsumableArray(_result9.notices);
        if (_data2.error) {
          _newNotices2.push(getItemErrorNotice({
            error: _data2.error
          }));
        } else {
          _result9.items = [].concat(_toConsumableArray(_result9.items), [cloneDeep(_data2)]);
          _result9.item = cloneDeep(_data2);
          _result9.original = cloneDeep(_data2);

          /* Set success notice */
          _newNotices2.push({
            type: 'success',
            code: 'GENERAL',
            message: sprintf(
            // translators: %s: item id
            __('The item with id %s is added successfully', 'atrc-prefix-atrc'), _result9.item.id)
          });
        }
        _result9.notices = _newNotices2;
        _result9.isLoading = false;
        _result9.canSave = false;

        /* flush all cache */
        AtrcFlushCache(_result9);
        newState[key] = _result9;
        return newState;
      }

    /* Delete Item/s */
    /* set array of ids to delete and is iopen in and object on confirmDelete key to delete item/s */
    case 'SET_CONFIRM_DELETE':
      {
        var _result10 = cloneDeep(newState[key]);
        _result10.confirmDelete = action.data;
        newState[key] = _result10;
        return newState;
      }

    /* adding notice, deleting the item data, and flush cache */
    case 'DELETE_ITEMS':
      {
        var _data3 = action.data;
        var _result11 = cloneDeep(newState[key]);
        var _newNotices3 = _toConsumableArray(_result11.notices);
        _data3.forEach(function (item) {
          if (item.error) {
            _newNotices3.push(getItemErrorNotice({
              error: item.error
            }));
          } else {
            _newNotices3.push({
              type: 'success',
              code: 'GENERAL',
              message: __('Deleted successfully', 'atrc-prefix-atrc')
            });
          }
        });
        _result11.notices = _newNotices3;
        var dataWithoutError = _data3.filter(function (data) {
          return !data.error;
        });
        _result11.items = _result11.items.filter(function (item1) {
          return !dataWithoutError.some(function (item2) {
            return item1.id === item2.id;
          });
        });
        _result11.isLoading = false;
        _result11.confirmDelete = {};

        /* flush all cache */
        AtrcFlushCache(_result11);
        newState[key] = _result11;
        return newState;
      }

    /* Notice */
    /* Add notice to existing notices */
    case 'SET_NOTICE':
      {
        var _result12 = cloneDeep(newState[key]);
        var _newNotices4 = _toConsumableArray(_result12.notices);
        _newNotices4.push(action.notice);
        _result12.notices = _newNotices4;
        newState[key] = _result12;
        return newState;
      }

    /* Remove notice*/
    case 'REMOVE_NOTICE':
      {
        var _result13 = cloneDeep(newState[key]);
        var existingNotices = _toConsumableArray(_result13.notices);

        // Using action.index instead of action.id
        var indexToDelete = action.id;
        if (indexToDelete >= 0 && indexToDelete < existingNotices.length) {
          existingNotices.splice(indexToDelete, 1);
        }
        _result13.notices = existingNotices;
        newState[key] = _result13;
        return newState;
      }

    /* replacing notices to new provided notices */
    case 'SET_NOTICES':
      {
        var _result14 = cloneDeep(newState[key]);
        _result14.notices = cloneDeep(action.notices);
        newState[key] = _result14;
        return newState;
      }

    /* sometimes need extra data for some logic, called to reducer.js for adding extraData to new provided data */
    case 'SET_EXTRA_DATA':
      {
        var _result15 = cloneDeep(newState[key]);
        _result15.extraData = cloneDeep(action.data);
        newState[key] = _result15;
        return newState;
      }

    /* Settings */
    /* set isLoading true and and canSave false, if state is not set for the provided key, add global default data to state*/
    case 'BEFORE_SETTINGS_API':
      {
        var _result16 = cloneDeep(newState[key]);
        if (!isObject(_result16)) {
          _result16 = AtrcStore.DEFAULT_STATE[key];
        }
        _result16.isLoading = true;
        _result16.canSave = false;
        newState[key] = _result16;
        return newState;
      }

    /* set new settings data to original and settings, original is for comparing and settings is changing on UPDATE_SETTING*/
    case 'SET_SETTINGS':
      {
        var _data4 = action.data,
          _action$setNotice = action.setNotice,
          setNotice = _action$setNotice === void 0 ? false : _action$setNotice;
        var _result17 = cloneDeep(newState[key]);
        var _newNotices5 = _toConsumableArray(_result17.notices);
        if (_data4.error) {
          _newNotices5.push(getItemErrorNotice({
            error: _data4.error
          }));
          _result17.notices = _newNotices5;
        } else {
          _result17.original = _data4.settings;
          _result17.settings = cloneDeep(_data4.settings);
          if (setNotice) {
            /* Set success notice */
            _newNotices5.push({
              type: 'success',
              code: 'GENERAL',
              message: __('Updated successfully', 'atrc-prefix-atrc')
            });
            _result17.notices = _newNotices5;
          }
        }
        _result17.canSave = false;
        _result17.isLoading = false;
        newState[key] = _result17;
        return newState;
      }

    /* set a setting properties to user changed data, after setting setting data if it is equal to original data no need to save it again*/
    case 'UPDATE_SETTING':
      {
        var _result18 = cloneDeep(newState[key]);
        _result18.settings[action.dataKey] = action.dataVal;
        if (isEqual(_result18.original, _result18.settings)) {
          _result18.canSave = false;
        } else {
          _result18.canSave = true;
        }
        newState[key] = _result18;
        return newState;
      }

    /* Internally used by actions from actions.js*/
    case 'SET_IS_LOADING':
      {
        var _result19 = cloneDeep(newState[key]);
        _result19.isLoading = action.isLoading;
        _result19.canSave = !action.isLoading;
        newState[key] = _result19;
        return newState;
      }
  }
  return newState;
};
//# sourceMappingURL=reducer.js.map