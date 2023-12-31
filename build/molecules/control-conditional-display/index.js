"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _i18n = require("@wordpress/i18n");
var _element = require("@wordpress/element");
var _classnames = _interopRequireDefault(require("classnames"));
var _lodash = require("lodash");
var _select = _interopRequireDefault(require("../../atoms/select"));
var _controlSelectPostType = _interopRequireWildcard(require("../control-select-post-type"));
var _controlSelectTaxonomy = _interopRequireWildcard(require("../control-select-taxonomy"));
var _controlSelectPost = _interopRequireDefault(require("../control-select-post"));
var _controlSelectTerm = _interopRequireDefault(require("../control-select-term"));
var _controlSelectUser = _interopRequireDefault(require("../control-select-user"));
var _notice = _interopRequireDefault(require("../notice"));
var _panelRow = _interopRequireDefault(require("../panel-row"));
var _panelTools = _interopRequireDefault(require("../panel-tools"));
var _repeater = _interopRequireDefault(require("../repeater"));
var _repeaterGroup = _interopRequireDefault(require("../repeater/repeater-group"));
var _repeaterGroupAdd = _interopRequireDefault(require("../repeater/repeater-group-add"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } /*Value Structure
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
* and so on*/ /*WordPress*/ /*Library*/ /*Inbuilt*/ /*Inbuilt*/
/*Local Components*/
var PostTypeGroup = function PostTypeGroup(_ref) {
  var options = _ref.options;
  if (!options) {
    return null;
  }
  return /*#__PURE__*/React.createElement("optgroup", {
    label: (0, _i18n.__)('Post types', 'atrc-prefix-atrc')
  }, (0, _lodash.map)(options, function (_ref2) {
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
    label: (0, _i18n.__)('Taxonomy terms', 'atrc-prefix-atrc')
  }, (0, _lodash.map)(options, function (_ref4) {
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
    return /*#__PURE__*/React.createElement(_panelRow.default, {
      className: (0, _classnames.default)('at-m')
    }, /*#__PURE__*/React.createElement(_select.default, {
      label: (0, _i18n.__)('Value', 'atrc-prefix-atrc'),
      wrapProps: {
        className: 'at-flx-grw-1'
      },
      value: "",
      onChange: function onChange() {},
      options: [{
        value: '',
        label: (0, _i18n.__)('Select field', 'atrc-prefix-atrc')
      }]
    }));
  }
  if (type1.includes(field)) {
    return /*#__PURE__*/React.createElement(_panelRow.default, {
      className: (0, _classnames.default)('at-m')
    }, /*#__PURE__*/React.createElement(_select.default, {
      label: (0, _i18n.__)('Value', 'atrc-prefix-atrc'),
      wrapProps: {
        className: 'at-flx-grw-1'
      },
      value: item.value,
      onChange: function onChange(newVal) {
        return handleChange(newVal, 'value', groupIndex, itemIndex);
      },
      options: [{
        value: '',
        label: (0, _i18n.__)('Select specific page', 'atrc-prefix-atrc')
      }, {
        value: 'is_front_page',
        label: (0, _i18n.__)('Front page', 'atrc-prefix-atrc')
      }, {
        value: 'is_home',
        label: (0, _i18n.__)('Home page', 'atrc-prefix-atrc')
      }, {
        value: 'is_archive',
        label: (0, _i18n.__)('Any archive page', 'atrc-prefix-atrc')
      }, {
        value: 'is_post_type_archive',
        label: (0, _i18n.__)('Any post type archive page', 'atrc-prefix-atrc')
      }, {
        value: 'is_tax',
        label: (0, _i18n.__)('Any taxonomy archive page', 'atrc-prefix-atrc')
      }, {
        value: 'is_author',
        label: (0, _i18n.__)('Any author page', 'atrc-prefix-atrc')
      }, {
        value: 'is_date',
        label: (0, _i18n.__)('Any date-based archive page', 'atrc-prefix-atrc')
      }, {
        value: 'is_singular',
        label: (0, _i18n.__)('Any singular page', 'atrc-prefix-atrc')
      }, {
        value: 'is_search',
        label: (0, _i18n.__)('Search result page', 'atrc-prefix-atrc')
      }, {
        value: 'is_404',
        label: (0, _i18n.__)('404 page', 'atrc-prefix-atrc')
      }]
    }));
  }
  if (type2.includes(field)) {
    return /*#__PURE__*/React.createElement(_panelRow.default, {
      className: (0, _classnames.default)('at-m')
    }, /*#__PURE__*/React.createElement(_controlSelectPostType.default, {
      label: (0, _i18n.__)('Post type', 'atrc-prefix-atrc'),
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
    return /*#__PURE__*/React.createElement(_panelRow.default, {
      className: (0, _classnames.default)('at-m')
    }, /*#__PURE__*/React.createElement(_controlSelectTaxonomy.default, {
      label: (0, _i18n.__)('Taxonomy', 'atrc-prefix-atrc'),
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
    return /*#__PURE__*/React.createElement(_panelRow.default, {
      className: (0, _classnames.default)('at-m')
    }, /*#__PURE__*/React.createElement(_controlSelectUser.default, {
      label: (0, _i18n.__)('Users', 'atrc-prefix-atrc'),
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
    return /*#__PURE__*/React.createElement(_panelRow.default, {
      className: (0, _classnames.default)('at-m')
    }, /*#__PURE__*/React.createElement(_controlSelectPost.default, {
      label: (0, _i18n.__)('Posts', 'atrc-prefix-atrc'),
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
    return /*#__PURE__*/React.createElement(_panelRow.default, {
      className: (0, _classnames.default)('at-m')
    }, /*#__PURE__*/React.createElement(_controlSelectTerm.default, {
      wrapProps: {
        className: 'at-flx-grw-1'
      },
      label: (0, _i18n.__)('Terms', 'atrc-prefix-atrc'),
      value: item.value,
      onChange: function onChange(newVal) {
        return handleChange(newVal, 'value', groupIndex, itemIndex);
      },
      tax: field.replace('&tt&-', '')
    }));
  }
  if ('user' === field) {
    return /*#__PURE__*/React.createElement(_panelRow.default, {
      className: (0, _classnames.default)('at-m')
    }, /*#__PURE__*/React.createElement(_select.default, {
      label: (0, _i18n.__)('Value', 'atrc-prefix-atrc'),
      wrapProps: {
        className: 'at-flx-grw-1'
      },
      value: item.value,
      onChange: function onChange(newVal) {
        return handleChange(newVal, 'value', groupIndex, itemIndex);
      },
      options: [{
        value: '',
        label: (0, _i18n.__)('Select value', 'atrc-prefix-atrc')
      }, {
        value: 'is_user_logged_in',
        label: (0, _i18n.__)('Logged in', 'atrc-prefix-atrc')
      }]
    }));
  }
};
var SelectSingleCondition = function SelectSingleCondition(_ref6) {
  var item = _ref6.item,
    handleChange = _ref6.handleChange,
    groupIndex = _ref6.groupIndex,
    itemIndex = _ref6.itemIndex;
  var postOptions = (0, _controlSelectPostType.AtrcControlGetPostTypeOptions)();
  var taxOptions = (0, _controlSelectTaxonomy.AtrcControlGetTaxonomyOptions)();
  if ((0, _lodash.isEmpty)(postOptions) && (0, _lodash.isEmpty)(taxOptions)) {
    return null;
  }
  return /*#__PURE__*/React.createElement(_panelRow.default, {
    className: (0, _classnames.default)('at-m')
  }, /*#__PURE__*/React.createElement(_select.default, {
    label: (0, _i18n.__)('Field', 'atrc-prefix-atrc'),
    wrapProps: {
      className: 'at-flx-grw-1'
    },
    value: item.field,
    onChange: function onChange(newVal) {
      return handleChange(newVal, 'field', groupIndex, itemIndex);
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, (0, _i18n.__)('Select field', 'atrc-prefix-atrc')), /*#__PURE__*/React.createElement("option", {
    value: "specific-page"
  }, (0, _i18n.__)('Site specific page', 'atrc-prefix-atrc')), /*#__PURE__*/React.createElement("optgroup", {
    label: (0, _i18n.__)('Archive pages', 'atrc-prefix-atrc')
  }, /*#__PURE__*/React.createElement("option", {
    value: "post-type-archive"
  }, (0, _i18n.__)('Post type archive', 'atrc-prefix-atrc')), /*#__PURE__*/React.createElement("option", {
    value: "tax-archive"
  }, (0, _i18n.__)('Taxonomy archive', 'atrc-prefix-atrc')), /*#__PURE__*/React.createElement("option", {
    value: "author-archive"
  }, (0, _i18n.__)('Author archive', 'atrc-prefix-atrc'))), /*#__PURE__*/React.createElement(PostTypeGroup, {
    options: postOptions
  }), /*#__PURE__*/React.createElement(TaxonomyGroup, {
    options: taxOptions
  }), /*#__PURE__*/React.createElement("optgroup", {
    label: (0, _i18n.__)('Users', 'atrc-prefix-atrc')
  }, /*#__PURE__*/React.createElement("option", {
    value: "user"
  }, (0, _i18n.__)('User', 'atrc-prefix-atrc')))));
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
  }), /*#__PURE__*/React.createElement(_panelRow.default, {
    className: (0, _classnames.default)('at-m')
  }, /*#__PURE__*/React.createElement(_select.default, {
    label: (0, _i18n.__)('Condition', 'atrc-prefix-atrc'),
    wrapProps: {
      className: 'at-flx-grw-1'
    },
    value: item.condition,
    onChange: function onChange(newVal) {
      return handleChange(newVal, 'condition', groupIndex, itemIndex);
    },
    options: [{
      value: '',
      label: (0, _i18n.__)('Select condition', 'atrc-prefix-atrc')
    }, {
      value: '==',
      label: (0, _i18n.__)('Equal', 'atrc-prefix-atrc')
    }, {
      value: '!=',
      label: (0, _i18n.__)('Not equal', 'atrc-prefix-atrc')
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
  var _useState = (0, _element.useState)(),
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
    setNotice((0, _i18n.__)('Condition group deleted.', 'atrc-prefix-atrc'));

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
      setNotice((0, _i18n.__)('With the last condition deleted, the conditional group was too deleted.', 'atrc-prefix-atrc'));
    }

    // Set the updated value array as the new state
    onChange(updatedGroups);
  };
  var ConditionTabs = (0, _element.useMemo)(function () {
    return [{
      name: 'conditional-display',
      title: label,
      hasValue: !!(value && value.length),
      onDeselect: function onDeselect() {
        return onChange([]);
      }
    }];
  }, []);
  return /*#__PURE__*/React.createElement(_panelTools.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-conditional-d'), className, variant ? (0, _prefixVars.default)('ctrl-conditional-d') + '-' + variant : ''),
    label: label,
    resetAll: function resetAll() {
      return onChange([]);
    },
    tools: ConditionTabs
  }, function (activeItems) {
    return (0, _lodash.map)(activeItems, function (tab, iDx) {
      return /*#__PURE__*/React.createElement(_element.Fragment, {
        key: iDx
      }, notice && /*#__PURE__*/React.createElement(_notice.default, {
        key: tab,
        isDismissible: false,
        autoDismiss: 5000,
        onRemove: function onRemove() {
          return setNotice('');
        }
      }, notice), /*#__PURE__*/React.createElement(_repeater.default, {
        key: tab,
        groups: function groups() {
          return value.length ? (0, _lodash.map)(value, function (group, groupIndex) {
            return /*#__PURE__*/React.createElement(_repeaterGroup.default, {
              key: groupIndex,
              groupIndex: groupIndex,
              deleteGroup: deleteGroup,
              groupTitle: (0, _i18n.sprintf)(
              // translators: %s: placeholder for idx
              (0, _i18n.__)('Group %d', 'atrc-prefix-atrc'), groupIndex + 1),
              deleteTitle: (0, _i18n.__)('Delete condition group', 'atrc-prefix-atrc')
            }, /*#__PURE__*/React.createElement(_repeater.default, {
              groups: function groups() {
                return (0, _lodash.map)(group, function (item, itemIndex) {
                  return /*#__PURE__*/React.createElement(_repeaterGroup.default, {
                    key: itemIndex,
                    groupIndex: itemIndex,
                    deleteGroup: function deleteGroup(itmIndex) {
                      return deleteItem(groupIndex, itmIndex);
                    },
                    groupTitle: (0, _i18n.sprintf)(
                    // translators: %s: placeholder for idx
                    (0, _i18n.__)('Condition %d', 'atrc-prefix-atrc'), itemIndex + 1),
                    deleteTitle: (0, _i18n.__)('Remove condition', 'atrc-prefix-atrc')
                  }, /*#__PURE__*/React.createElement(SingleCondition, {
                    groupIndex: groupIndex,
                    itemIndex: itemIndex,
                    handleChange: handleChange,
                    item: item
                  }));
                });
              },
              addGroup: function addGroup() {
                return /*#__PURE__*/React.createElement(_repeaterGroupAdd.default, {
                  addGroup: function addGroup() {
                    return addItem(groupIndex);
                  },
                  tooltipText: (0, _i18n.__)('Condition item has && (AND) condition', 'atrc-prefix-atrc'),
                  label: (0, _i18n.__)('AND Add condition', 'atrc-prefix-atrc')
                });
              }
            }));
          }) : null;
        },
        addGroup: function addGroup() {
          return /*#__PURE__*/React.createElement(_repeaterGroupAdd.default, {
            addGroup: _addGroup,
            tooltipText: (0, _i18n.__)('Group has || (OR) condition', 'atrc-prefix-atrc'),
            label: (0, _i18n.__)('OR Add condition group', 'atrc-prefix-atrc')
          });
        }
      }));
    });
  });
};
var _default = exports.default = AtrcControlConditionalDisplay;
//# sourceMappingURL=index.js.map