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
var _controlUnitDevice = _interopRequireWildcard(require("../control-unit-device"));
var _objectValuesWithAllowedKeysAndTabs = require("../../utils/object-values-with-allowed-keys-and-tabs");
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
var _excluded = ["label", "disableUnits", "value", "onChange", "tab"],
  _excluded2 = ["value", "label", "onChange", "disableUnits", "variant", "className", "allowedTabs"];
/*Attributes Structure
Type Object
{
========*Normal values*========
    "xs":"",
    "sm":"",
    "md":"",
    "lg":"",
    "xl":"",
    "xxl":"",
    
========*Hover values*========
    "Hover":"",
    "smHover":"",
    "mdHover":"",
    "lgHover":"",
    "xlHover":"",
    "xxlHover":"",
    
========*ParentHover values*========
    "ParentHover":"",
    "smParentHover":"",
    "mdParentHover":"",
    "lgParentHover":"",
    "xlParentHover":"",
    "xxlParentHover":"",

}
* */
/*WordPress*/
/*Library*/
/*Inbuilt*/
/*Inbuilt utils*/
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Local Components*/
var RenderTabPanel = function RenderTabPanel(_ref) {
  var _ref$label = _ref.label,
    label = _ref$label === void 0 ? (0, _i18n.__)('Enter value', 'atrc-prefix-atrc') : _ref$label,
    disableUnits = _ref.disableUnits,
    value = _ref.value,
    onChange = _ref.onChange,
    _ref$tab = _ref.tab,
    tab = _ref$tab === void 0 ? 'normal' : _ref$tab,
    defaultProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(_controlUnitDevice.default, _extends({
    label: label,
    value: (0, _objectValuesWithAllowedKeysAndTabs.AtrcGetTabValues)(value, tab, _controlUnitDevice.AtrcControlUnitDeviceAllowedKeys),
    onChange: onChange,
    disableUnits: disableUnits
  }, defaultProps));
};
var AtrcControlUnitDeviceTab = function AtrcControlUnitDeviceTab(props) {
  var _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$disableUnits = props.disableUnits,
    disableUnits = _props$disableUnits === void 0 ? false : _props$disableUnits,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$allowedTabs = props.allowedTabs,
    allowedTabs = _props$allowedTabs === void 0 ? ['normal', 'hover'] : _props$allowedTabs,
    defaultProps = _objectWithoutProperties(props, _excluded2);
  var setTabAttr = function setTabAttr(newVal, tab) {
    onChange((0, _objectValuesWithAllowedKeysAndTabs.AtrcUpdateTabValues)(newVal, tab, value, _controlUnitDevice.AtrcControlUnitDeviceAllowedKeys));
  };
  var AllTabs = (0, _element.useMemo)(function () {
    var tabs = [];
    if (allowedTabs.includes('normal'.toLowerCase())) {
      tabs.push({
        name: 'normal',
        title: (0, _i18n.__)('Normal', 'atrc-prefix-atrc'),
        hasValue: (0, _objectValuesWithAllowedKeysAndTabs.AtrcHasTabValues)('normal', value, _controlUnitDevice.AtrcControlUnitDeviceAllowedKeys),
        onDeselect: function onDeselect() {
          return onChange((0, _objectValuesWithAllowedKeysAndTabs.AtrcResetTab)('normal', value, _controlUnitDevice.AtrcControlUnitDeviceAllowedKeys));
        }
      });
    }
    if (allowedTabs.includes('hover'.toLowerCase())) {
      tabs.push({
        name: 'Hover',
        title: (0, _i18n.__)('Hover', 'atrc-prefix-atrc'),
        hasValue: (0, _objectValuesWithAllowedKeysAndTabs.AtrcHasTabValues)('Hover', value, _controlUnitDevice.AtrcControlUnitDeviceAllowedKeys),
        onDeselect: function onDeselect() {
          return onChange((0, _objectValuesWithAllowedKeysAndTabs.AtrcResetTab)('Hover', value, _controlUnitDevice.AtrcControlUnitDeviceAllowedKeys));
        }
      });
    }
    if (allowedTabs.includes('parenthover'.toLowerCase())) {
      tabs.push({
        name: 'ParentHover',
        title: (0, _i18n.__)('Parent hover', 'atrc-prefix-atrc'),
        hasValue: (0, _objectValuesWithAllowedKeysAndTabs.AtrcHasTabValues)('ParentHover', value, _controlUnitDevice.AtrcControlUnitDeviceAllowedKeys),
        onDeselect: function onDeselect() {
          return onChange((0, _objectValuesWithAllowedKeysAndTabs.AtrcResetTab)('ParentHover', value, _controlUnitDevice.AtrcControlUnitDeviceAllowedKeys));
        }
      });
    }
    return tabs;
  }, []);
  return /*#__PURE__*/React.createElement(_panelTools.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-unit-device-tab'), className, variant ? (0, _prefixVars.default)('ctrl-unit-device-tab') + '-' + variant : ''),
    label: label,
    rresetAll: function rresetAll() {
      return onChange((0, _objectValuesWithAllowedKeysAndTabs.AtrcResetTabs)(value, _controlUnitDevice.AtrcControlUnitDeviceAllowedKeys));
    },
    allowTabs: true,
    tools: AllTabs
  }, function (activeItems) {
    return (0, _lodash.map)(activeItems, function (tab, iDx) {
      return /*#__PURE__*/React.createElement(RenderTabPanel, _extends({
        value: value,
        disableUnits: disableUnits,
        onChange: function onChange(newVal) {
          return setTabAttr(newVal, tab);
        },
        tab: tab,
        key: iDx
      }, defaultProps));
    });
  });
};
var _default = exports.default = AtrcControlUnitDeviceTab;
//# sourceMappingURL=index.js.map