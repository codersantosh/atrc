function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/*Value Structure
Type Object

[
    [
        {
            field:'',
            condition:'',
            value:''
        },
        {
            field:'',
            condition:'',
            value:''
        },
    ],
    [
        {
            field:'',
            condition:'',
            value:''
        },
        {
            field:'',
            condition:'',
            value:''
        },
    ]
]
* and so on*/

/*WordPress*/
import { __, sprintf } from '@wordpress/i18n';
import { useMemo, useState, Fragment } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';
import { isEmpty, map } from 'lodash';

/*Inbuilt*/
import AtrcSelect from '../../atoms/select';
import { AtrcControlGetPostTypeOptions } from '../control-select-post-type';
import { AtrcControlGetTaxonomyOptions } from '../control-select-taxonomy';
import AtrcControlSelectPost from '../control-select-post';
import AtrcControlSelectPostType from '../control-select-post-type';
import AtrcControlSelectTaxonomy from '../control-select-taxonomy';
import AtrcControlSelectTerm from '../control-select-term';
import AtrcControlSelectUser from '../control-select-user';
import AtrcNotice from '../notice';
import AtrcPanelRow from '../panel-row';
import AtrcPanelTools from '../panel-tools';
import AtrcRepeater from '../repeater';
import AtrcRepeaterGroup from '../repeater/repeater-group';
import AtrcRepeaterGroupAdd from '../repeater/repeater-group-add';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
var PostTypeGroup = function PostTypeGroup(_ref) {
  var options = _ref.options;
  if (!options) {
    return null;
  }
  return /*#__PURE__*/React.createElement("optgroup", {
    label: __('Post types', 'atrc-prefix-atrc')
  }, map(options, function (_ref2) {
    var label = _ref2.label,
      value = _ref2.value;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: "&pt&-".concat(value)
    }, label);
  }));
};
var TaxonomyGroup = function TaxonomyGroup(_ref3) {
  var options = _ref3.options;
  if (!options) {
    return null;
  }
  return /*#__PURE__*/React.createElement("optgroup", {
    label: __('Taxonomy terms', 'atrc-prefix-atrc')
  }, map(options, function (_ref4) {
    var label = _ref4.label,
      value = _ref4.value;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: "&tt&-".concat(value)
    }, label);
  }));
};
var SelectSingleConditionValue = function SelectSingleConditionValue(_ref5) {
  var item = _ref5.item,
    handleChange = _ref5.handleChange,
    groupIndex = _ref5.groupIndex,
    itemIndex = _ref5.itemIndex,
    field = _ref5.field;
  var type1 = ['specific-page'];
  var type2 = ['post-type-archive'];
  var type3 = ['tax-archive'];
  var type4 = ['author-archive'];
  if (!field) {
    return /*#__PURE__*/React.createElement(AtrcPanelRow, {
      className: classnames('at-m')
    }, /*#__PURE__*/React.createElement(AtrcSelect, {
      label: __('Value', 'atrc-prefix-atrc'),
      wrapProps: {
        className: 'at-flx-grw-1'
      },
      value: "",
      onChange: function onChange() {},
      options: [{
        value: '',
        label: __('Select field', 'atrc-prefix-atrc')
      }]
    }));
  }
  if (type1.includes(field)) {
    return /*#__PURE__*/React.createElement(AtrcPanelRow, {
      className: classnames('at-m')
    }, /*#__PURE__*/React.createElement(AtrcSelect, {
      label: __('Value', 'atrc-prefix-atrc'),
      wrapProps: {
        className: 'at-flx-grw-1'
      },
      value: item.value,
      onChange: function onChange(newVal) {
        return handleChange(newVal, 'value', groupIndex, itemIndex);
      },
      options: [{
        value: '',
        label: __('Select specific page', 'atrc-prefix-atrc')
      }, {
        value: 'is_front_page',
        label: __('Front page', 'atrc-prefix-atrc')
      }, {
        value: 'is_home',
        label: __('Home page', 'atrc-prefix-atrc')
      }, {
        value: 'is_archive',
        label: __('Any archive page', 'atrc-prefix-atrc')
      }, {
        value: 'is_post_type_archive',
        label: __('Any post type archive page', 'atrc-prefix-atrc')
      }, {
        value: 'is_tax',
        label: __('Any taxonomy archive page', 'atrc-prefix-atrc')
      }, {
        value: 'is_author',
        label: __('Any author page', 'atrc-prefix-atrc')
      }, {
        value: 'is_date',
        label: __('Any date-based archive page', 'atrc-prefix-atrc')
      }, {
        value: 'is_singular',
        label: __('Any singular page', 'atrc-prefix-atrc')
      }, {
        value: 'is_search',
        label: __('Search result page', 'atrc-prefix-atrc')
      }, {
        value: 'is_404',
        label: __('404 page', 'atrc-prefix-atrc')
      }]
    }));
  }
  if (type2.includes(field)) {
    return /*#__PURE__*/React.createElement(AtrcPanelRow, {
      className: classnames('at-m')
    }, /*#__PURE__*/React.createElement(AtrcControlSelectPostType, {
      label: __('Post type', 'atrc-prefix-atrc'),
      wrapProps: {
        className: 'at-flx-grw-1'
      },
      value: item.value,
      onChange: function onChange(newVal) {
        return handleChange(newVal, 'value', groupIndex, itemIndex);
      }
    }));
  }
  if (type3.includes(field)) {
    return /*#__PURE__*/React.createElement(AtrcPanelRow, {
      className: classnames('at-m')
    }, /*#__PURE__*/React.createElement(AtrcControlSelectTaxonomy, {
      label: __('Taxonomy', 'atrc-prefix-atrc'),
      wrapProps: {
        className: 'at-flx-grw-1'
      },
      value: item.value,
      onChange: function onChange(newVal) {
        return handleChange(newVal, 'value', groupIndex, itemIndex);
      }
    }));
  }
  if (type4.includes(field)) {
    return /*#__PURE__*/React.createElement(AtrcPanelRow, {
      className: classnames('at-m')
    }, /*#__PURE__*/React.createElement(AtrcControlSelectUser, {
      label: __('Users', 'atrc-prefix-atrc'),
      wrapProps: {
        className: 'at-flx-grw-1'
      },
      value: item.value,
      onChange: function onChange(newVal) {
        return handleChange(newVal, 'value', groupIndex, itemIndex);
      }
    }));
  }
  if (field.includes('&pt&-')) {
    return /*#__PURE__*/React.createElement(AtrcPanelRow, {
      className: classnames('at-m')
    }, /*#__PURE__*/React.createElement(AtrcControlSelectPost, {
      label: __('Posts', 'atrc-prefix-atrc'),
      wrapProps: {
        className: 'at-flx-grw-1'
      },
      value: item.value,
      onChange: function onChange(newVal) {
        return handleChange(newVal, 'value', groupIndex, itemIndex);
      },
      postType: field.replace('&pt&-', '')
    }));
  }
  if (field.includes('&tt&-')) {
    return /*#__PURE__*/React.createElement(AtrcPanelRow, {
      className: classnames('at-m')
    }, /*#__PURE__*/React.createElement(AtrcControlSelectTerm, {
      wrapProps: {
        className: 'at-flx-grw-1'
      },
      label: __('Terms', 'atrc-prefix-atrc'),
      value: item.value,
      onChange: function onChange(newVal) {
        return handleChange(newVal, 'value', groupIndex, itemIndex);
      },
      tax: field.replace('&tt&-', '')
    }));
  }
  if ('user' === field) {
    return /*#__PURE__*/React.createElement(AtrcPanelRow, {
      className: classnames('at-m')
    }, /*#__PURE__*/React.createElement(AtrcSelect, {
      label: __('Value', 'atrc-prefix-atrc'),
      wrapProps: {
        className: 'at-flx-grw-1'
      },
      value: item.value,
      onChange: function onChange(newVal) {
        return handleChange(newVal, 'value', groupIndex, itemIndex);
      },
      options: [{
        value: '',
        label: __('Select value', 'atrc-prefix-atrc')
      }, {
        value: 'is_user_logged_in',
        label: __('Logged in', 'atrc-prefix-atrc')
      }]
    }));
  }
};
var SelectSingleCondition = function SelectSingleCondition(_ref6) {
  var item = _ref6.item,
    handleChange = _ref6.handleChange,
    groupIndex = _ref6.groupIndex,
    itemIndex = _ref6.itemIndex;
  var postOptions = AtrcControlGetPostTypeOptions();
  var taxOptions = AtrcControlGetTaxonomyOptions();
  if (isEmpty(postOptions) && isEmpty(taxOptions)) {
    return null;
  }
  return /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcSelect, {
    label: __('Field', 'atrc-prefix-atrc'),
    wrapProps: {
      className: 'at-flx-grw-1'
    },
    value: item.field,
    onChange: function onChange(newVal) {
      return handleChange(newVal, 'field', groupIndex, itemIndex);
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, __('Select field', 'atrc-prefix-atrc')), /*#__PURE__*/React.createElement("option", {
    value: "specific-page"
  }, __('Site specific page', 'atrc-prefix-atrc')), /*#__PURE__*/React.createElement("optgroup", {
    label: __('Archive pages', 'atrc-prefix-atrc')
  }, /*#__PURE__*/React.createElement("option", {
    value: "post-type-archive"
  }, __('Post type archive', 'atrc-prefix-atrc')), /*#__PURE__*/React.createElement("option", {
    value: "tax-archive"
  }, __('Taxonomy archive', 'atrc-prefix-atrc')), /*#__PURE__*/React.createElement("option", {
    value: "author-archive"
  }, __('Author archive', 'atrc-prefix-atrc'))), /*#__PURE__*/React.createElement(PostTypeGroup, {
    options: postOptions
  }), /*#__PURE__*/React.createElement(TaxonomyGroup, {
    options: taxOptions
  }), /*#__PURE__*/React.createElement("optgroup", {
    label: __('Users', 'atrc-prefix-atrc')
  }, /*#__PURE__*/React.createElement("option", {
    value: "user"
  }, __('User', 'atrc-prefix-atrc')))));
};
var SingleCondition = function SingleCondition(_ref7) {
  var groupIndex = _ref7.groupIndex,
    itemIndex = _ref7.itemIndex,
    handleChange = _ref7.handleChange,
    item = _ref7.item;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SelectSingleCondition, {
    item: item,
    handleChange: handleChange,
    groupIndex: groupIndex,
    itemIndex: itemIndex
  }), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcSelect, {
    label: __('Condition', 'atrc-prefix-atrc'),
    wrapProps: {
      className: 'at-flx-grw-1'
    },
    value: item.condition,
    onChange: function onChange(newVal) {
      return handleChange(newVal, 'condition', groupIndex, itemIndex);
    },
    options: [{
      value: '',
      label: __('Select condition', 'atrc-prefix-atrc')
    }, {
      value: '==',
      label: __('Equal', 'atrc-prefix-atrc')
    }, {
      value: '!=',
      label: __('Not equal', 'atrc-prefix-atrc')
    }]
  })), /*#__PURE__*/React.createElement(SelectSingleConditionValue, {
    item: item,
    handleChange: handleChange,
    groupIndex: groupIndex,
    itemIndex: itemIndex,
    field: item.field
  }));
};
var AtrcControlConditionalDisplay = function AtrcControlConditionalDisplay(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label,
    _props$value = props.value,
    value = _props$value === void 0 ? [] : _props$value,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange;

  // Initialize the state with an empty array
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    notice = _useState2[0],
    setNotice = _useState2[1];

  // Function to add a new group
  var _addGroup = function addGroup() {
    var valueCloned;
    if (!value || !Array.isArray(value)) {
      valueCloned = [];
    } else {
      valueCloned = _toConsumableArray(value);
    }
    // Append a new group with a single item to the value array;

    var newValue = [].concat(_toConsumableArray(valueCloned), [[{
      field: '',
      condition: '',
      value: ''
    }]]);
    onChange(newValue);
  };

  // Function to add a new item to a group
  var addItem = function addItem(groupIndex) {
    // Make a copy of the value array
    var updatedGroups = _toConsumableArray(value);

    // Append a new item with empty values to the group at the specified idx
    updatedGroups[groupIndex] = [].concat(_toConsumableArray(updatedGroups[groupIndex]), [{
      field: '',
      condition: '',
      value: ''
    }]);

    // Set the updated value array as the new state
    onChange(updatedGroups);
  };

  // Function to handle changes to the select fields for an item
  var handleChange = function handleChange(itemVal, itemName, groupIndex, itemIndex) {
    // Make a copy of the value array
    var updatedGroups = _toConsumableArray(value);

    // Update the value of the corresponding property in the item object
    updatedGroups[groupIndex][itemIndex][itemName] = itemVal;

    // Set the updated value array as the new state
    onChange(updatedGroups);
  };

  // Function to delete a group
  var deleteGroup = function deleteGroup(groupIndex) {
    // Make a copy of the value array
    var updatedGroups = _toConsumableArray(value);

    // Remove the group at the specified idx
    updatedGroups.splice(groupIndex, 1);

    //Add notice to user
    setNotice(__('Condition group deleted.', 'atrc-prefix-atrc'));

    // Set the updated value array as the new state
    onChange(updatedGroups);
  };

  // Function to delete an item
  var deleteItem = function deleteItem(groupIndex, itemIndex) {
    // Make a copy of the value array
    var updatedGroups = _toConsumableArray(value);

    // Remove the item at the specified idx from the group
    updatedGroups[groupIndex].splice(itemIndex, 1);

    // Check if the group is now empty
    if (updatedGroups[groupIndex].length === 0) {
      // If the group is empty, delete the group
      updatedGroups.splice(groupIndex, 1);

      //Add notice to user
      setNotice(__('With the last condition deleted, the conditional group was too deleted.', 'atrc-prefix-atrc'));
    }

    // Set the updated value array as the new state
    onChange(updatedGroups);
  };
  var ConditionTabs = useMemo(function () {
    return [{
      name: 'conditional-display',
      title: label,
      hasValue: !!(value && value.length),
      onDeselect: function onDeselect() {
        return onChange([]);
      }
    }];
  }, []);
  return /*#__PURE__*/React.createElement(AtrcPanelTools, {
    className: classnames(AtrcPrefix('ctrl-conditional-d'), className, variant ? AtrcPrefix('ctrl-conditional-d') + '-' + variant : ''),
    label: label,
    resetAll: function resetAll() {
      return onChange([]);
    },
    tools: ConditionTabs
  }, function (activeItems) {
    return map(activeItems, function (tab, iDx) {
      return /*#__PURE__*/React.createElement(Fragment, {
        key: iDx
      }, notice && /*#__PURE__*/React.createElement(AtrcNotice, {
        key: tab,
        isDismissible: false,
        autoDismiss: 5000,
        onRemove: function onRemove() {
          return setNotice('');
        }
      }, notice), /*#__PURE__*/React.createElement(AtrcRepeater, {
        key: tab,
        groups: function groups() {
          return value.length ? map(value, function (group, groupIndex) {
            return /*#__PURE__*/React.createElement(AtrcRepeaterGroup, {
              key: groupIndex,
              groupIndex: groupIndex,
              deleteGroup: deleteGroup,
              groupTitle: sprintf(
              // translators: %s: placeholder for idx
              __('Group %d', 'atrc-prefix-atrc'), groupIndex + 1),
              deleteTitle: __('Delete condition group', 'atrc-prefix-atrc')
            }, /*#__PURE__*/React.createElement(AtrcRepeater, {
              groups: function groups() {
                return map(group, function (item, itemIndex) {
                  return /*#__PURE__*/React.createElement(AtrcRepeaterGroup, {
                    key: itemIndex,
                    groupIndex: itemIndex,
                    deleteGroup: function deleteGroup(itmIndex) {
                      return deleteItem(groupIndex, itmIndex);
                    },
                    groupTitle: sprintf(
                    // translators: %s: placeholder for idx
                    __('Condition %d', 'atrc-prefix-atrc'), itemIndex + 1),
                    deleteTitle: __('Remove condition', 'atrc-prefix-atrc')
                  }, /*#__PURE__*/React.createElement(SingleCondition, {
                    groupIndex: groupIndex,
                    itemIndex: itemIndex,
                    handleChange: handleChange,
                    item: item
                  }));
                });
              },
              addGroup: function addGroup() {
                return /*#__PURE__*/React.createElement(AtrcRepeaterGroupAdd, {
                  addGroup: function addGroup() {
                    return addItem(groupIndex);
                  },
                  tooltipText: __('Condition item has && (AND) condition', 'atrc-prefix-atrc'),
                  label: __('AND Add condition', 'atrc-prefix-atrc')
                });
              }
            }));
          }) : null;
        },
        addGroup: function addGroup() {
          return /*#__PURE__*/React.createElement(AtrcRepeaterGroupAdd, {
            addGroup: _addGroup,
            tooltipText: __('Group has || (OR) condition', 'atrc-prefix-atrc'),
            label: __('OR Add condition group', 'atrc-prefix-atrc')
          });
        }
      }));
    });
  });
};
export default AtrcControlConditionalDisplay;
//# sourceMappingURL=index.js.map