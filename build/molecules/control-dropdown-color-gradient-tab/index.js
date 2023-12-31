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
var _panelTools = _interopRequireDefault(require("../panel-tools"));
var _controlDropdownColorGradient = _interopRequireWildcard(require("../control-dropdown-color-gradient"));
var _objectValuesWithAllowedKeysAndTabs = require("../../utils/object-values-with-allowed-keys-and-tabs");
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
var _excluded = ["value", "label", "onChange", "variant", "className", "allowedTabs"];
/*Value Structure
Type object
{
========*Normal values*========
    cl:'',
    grd:'',

========*Hover values*========
    "clHover":"",
    "grdHover":"",

========*Active values*========
"clActive":"",
"grdActive":"",

========*Focus values*========
"clFocus":"",
"grdFocus":"",

========*Visited values*========
"clVisited":"",
"grdVisited":"",

========*Active values*========
"clActive":"",
"grdActive":"",

========*ParentHover values*========
    "clParentHover":"",
    "grdParentHover":"",
}

**/
/*WordPress*/
/*Library*/
/*Inbuilt*/
/*Inbuilt utils*/
/*Prefix*/
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Local Components*/
var RenderTabPanel = function RenderTabPanel(_ref) {
  var value = _ref.value,
    tab = _ref.tab,
    _onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement(_controlDropdownColorGradient.default, {
    label: '',
    value: (0, _objectValuesWithAllowedKeysAndTabs.AtrcGetTabValues)(value, tab, _controlDropdownColorGradient.AtrcControlDropdownColorGradientAllowedKeys),
    onChange: function onChange(newVal) {
      return _onChange(newVal, tab);
    }
  });
};
var AtrcControlDropdownColorGradientTab = function AtrcControlDropdownColorGradientTab(props) {
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
    allowedTabs = _props$allowedTabs === void 0 ? ['normal', 'hover'] : _props$allowedTabs,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var setTabAttr = function setTabAttr(newVal, tab) {
    onChange((0, _objectValuesWithAllowedKeysAndTabs.AtrcUpdateTabValues)(newVal, tab, value, _controlDropdownColorGradient.AtrcControlDropdownColorGradientAllowedKeys));
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
        hasValue: (0, _objectValuesWithAllowedKeysAndTabs.AtrcHasTabValues)('normal', value, _controlDropdownColorGradient.AtrcControlDropdownColorGradientAllowedKeys),
        onDeselect: function onDeselect() {
          return onChange((0, _objectValuesWithAllowedKeysAndTabs.AtrcResetTab)('normal', value, _controlDropdownColorGradient.AtrcControlDropdownColorGradientAllowedKeys));
        }
      });
    }
    if (allowedTabs.includes('hover'.toLowerCase())) {
      tabs.push({
        name: 'Hover',
        title: (0, _i18n.__)('Hover', 'atrc-prefix-atrc'),
        hasValue: (0, _objectValuesWithAllowedKeysAndTabs.AtrcHasTabValues)('Hover', value, _controlDropdownColorGradient.AtrcControlDropdownColorGradientAllowedKeys),
        onDeselect: function onDeselect() {
          return onChange((0, _objectValuesWithAllowedKeysAndTabs.AtrcResetTab)('Hover', value, _controlDropdownColorGradient.AtrcControlDropdownColorGradientAllowedKeys));
        }
      });
    }
    if (allowedTabs.includes('active'.toLowerCase())) {
      tabs.push({
        name: 'Active',
        title: (0, _i18n.__)('Active', 'atrc-prefix-atrc'),
        hasValue: (0, _objectValuesWithAllowedKeysAndTabs.AtrcHasTabValues)('Active', value, _controlDropdownColorGradient.AtrcControlDropdownColorGradientAllowedKeys),
        onDeselect: function onDeselect() {
          return onChange((0, _objectValuesWithAllowedKeysAndTabs.AtrcResetTab)('Active', value, _controlDropdownColorGradient.AtrcControlDropdownColorGradientAllowedKeys));
        }
      });
    }
    if (allowedTabs.includes('focus'.toLowerCase())) {
      tabs.push({
        name: 'Focus',
        title: (0, _i18n.__)('Focus', 'atrc-prefix-atrc'),
        hasValue: (0, _objectValuesWithAllowedKeysAndTabs.AtrcHasTabValues)('Focus', value, _controlDropdownColorGradient.AtrcControlDropdownColorGradientAllowedKeys),
        onDeselect: function onDeselect() {
          return onChange((0, _objectValuesWithAllowedKeysAndTabs.AtrcResetTab)('Focus', value, _controlDropdownColorGradient.AtrcControlDropdownColorGradientAllowedKeys));
        }
      });
    }
    if (allowedTabs.includes('visited'.toLowerCase())) {
      tabs.push({
        name: 'Visited',
        title: (0, _i18n.__)('Visited', 'atrc-prefix-atrc'),
        hasValue: (0, _objectValuesWithAllowedKeysAndTabs.AtrcHasTabValues)('Visited', value, _controlDropdownColorGradient.AtrcControlDropdownColorGradientAllowedKeys),
        onDeselect: function onDeselect() {
          return onChange((0, _objectValuesWithAllowedKeysAndTabs.AtrcResetTab)('Visited', value, _controlDropdownColorGradient.AtrcControlDropdownColorGradientAllowedKeys));
        }
      });
    }
    if (allowedTabs.includes('parenthover'.toLowerCase())) {
      tabs.push({
        name: 'ParentHover',
        title: (0, _i18n.__)('Parent hover', 'atrc-prefix-atrc'),
        hasValue: (0, _objectValuesWithAllowedKeysAndTabs.AtrcHasTabValues)('ParentHover', value, _controlDropdownColorGradient.AtrcControlDropdownColorGradientAllowedKeys),
        onDeselect: function onDeselect() {
          return onChange((0, _objectValuesWithAllowedKeysAndTabs.AtrcResetTab)('ParentHover', value, _controlDropdownColorGradient.AtrcControlDropdownColorGradientAllowedKeys));
        }
      });
    }
    return tabs;
  }, [value]);
  return /*#__PURE__*/React.createElement(_panelTools.default, _extends({
    className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-dropdown-cl-grd-tab'), className, variant ? (0, _prefixVars.default)('ctrl-dropdown-cl-grd-tab') + '-' + variant : ''),
    label: label,
    resetAll: resetAll,
    allowTabs: true,
    tools: AllTabs
  }, defaultProps), function (activeItems) {
    return (0, _lodash.map)(activeItems, function (tab, iDx) {
      return /*#__PURE__*/React.createElement(RenderTabPanel, {
        value: value,
        onChange: function onChange(newVal) {
          return setTabAttr(newVal, tab);
        },
        tab: tab,
        key: iDx
      });
    });
  });
};
var _default = exports.default = AtrcControlDropdownColorGradientTab;
//# sourceMappingURL=index.js.map