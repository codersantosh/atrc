"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _i18n = require("@wordpress/i18n");
var _element = require("@wordpress/element");
var _classnames = _interopRequireDefault(require("classnames"));
var _lodash = require("lodash");
var _panelTools = _interopRequireDefault(require("../panel-tools"));
var _controlDropdownColor = _interopRequireDefault(require("../control-dropdown-color"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*Value Structure

Type Object
{
    "normal":"",
    "hover":"",
}

**/

/*WordPress*/

/*Library*/

/*Inbuilt*/

/*Inbuilt utils*/

/*Prefix*/

/*Local Components*/
var AtrcControlDropdownColorTab = function AtrcControlDropdownColorTab(props) {
  var _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$allowedTabs = props.allowedTabs,
    allowedTabs = _props$allowedTabs === void 0 ? ['normal', 'hover'] : _props$allowedTabs;
  var setAttr = function setAttr(newVal, type) {
    var valueCloned = Object.assign({}, value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  var hasTabValue = function hasTabValue(tab) {
    if (!value || (0, _lodash.isEmpty)(value)) {
      return false;
    }
    return !!value[tab];
  };
  var resetTab = function resetTab(tab) {
    var valueCloned = Object.assign({}, value);
    delete valueCloned[tab];
    onChange(valueCloned);
  };
  var resetAll = function resetAll() {
    onChange({});
  };
  var AllTabs = (0, _element.useMemo)(function () {
    var tabs = [];
    if (allowedTabs.includes('normal'.toLowerCase())) {
      tabs.push({
        name: 'normal',
        title: (0, _i18n.__)('Normal', 'atrc-prefix-atrc'),
        hasValue: hasTabValue('normal'),
        onDeselect: function onDeselect() {
          return resetTab('normal');
        }
      });
    }
    if (allowedTabs.includes('hover'.toLowerCase())) {
      tabs.push({
        name: 'hover',
        title: (0, _i18n.__)('Hover', 'atrc-prefix-atrc'),
        hasValue: hasTabValue('hover'),
        onDeselect: function onDeselect() {
          return resetTab('hover');
        }
      });
    }
    if (allowedTabs.includes('parenthover'.toLowerCase())) {
      tabs.push({
        name: 'parentHover',
        title: (0, _i18n.__)('Parent hover', 'atrc-prefix-atrc'),
        hasValue: hasTabValue('parentHover'),
        onDeselect: function onDeselect() {
          return resetTab('parentHover');
        }
      });
    }
    return tabs;
  }, []);
  return /*#__PURE__*/React.createElement(_panelTools.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-range-tab'), className, variant ? (0, _prefixVars.default)('ctrl-range-tab') + '-' + variant : ''),
    label: label,
    resetAll: resetAll,
    allowTabs: true,
    tools: AllTabs
  }, function (activeItems) {
    return (0, _lodash.map)(activeItems, function (tab, iDx) {
      return /*#__PURE__*/React.createElement(_controlDropdownColor.default, {
        label: '',
        value: value && value[tab],
        onChange: function onChange(newVal) {
          return setAttr(newVal, tab);
        },
        key: iDx
      });
    });
  });
};
var _default = exports.default = AtrcControlDropdownColorTab;
//# sourceMappingURL=index.js.map