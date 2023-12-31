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
var _controlBorderRadius = _interopRequireWildcard(require("../control-border-radius"));
var _panelTools = _interopRequireDefault(require("../panel-tools"));
var _objectValuesWithAllowedKeysAndTabs = require("../../utils/object-values-with-allowed-keys-and-tabs");
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*Attributes Structure
Type Object
{

========*Single values*========
    "normal":"",
    "Hover":"",
    "ParentHover":"",

========*Normal values*========
    tL : '',
    tR : '',
    bL : '',
    bR : '',

========*Hover values*========
    tLHover : '',
    tRHover : '',
    bLHover : '',
    bRHover : '',

========*ParentHover values*========
    "tLParentHover":"",
    "tRParentHover":"",
    "bLParentHover":"",
    "bRParentHover":"",
}
* */

/*WordPress*/

/*Library*/

/*Inbuilt*/

/*Inbuilt utils*/

/*Prefix*/

/*Local Components*/
var RenderTabPanel = function RenderTabPanel(_ref) {
  var value = _ref.value,
    tab = _ref.tab,
    _onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement(_controlBorderRadius.default, {
    label: '',
    values: (0, _objectValuesWithAllowedKeysAndTabs.AtrcGetTabValues)(value, tab, _controlBorderRadius.AtrcControlBorderRadiusAllowedKeys),
    onChange: function onChange(newVal) {
      return _onChange(newVal, tab);
    }
  });
};
var AtrcControlBorderRadiusTab = function AtrcControlBorderRadiusTab(props) {
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
  var setTabAttr = function setTabAttr(newVal, tab) {
    onChange((0, _objectValuesWithAllowedKeysAndTabs.AtrcUpdateTabValues)(newVal, tab, value, _controlBorderRadius.AtrcControlBorderRadiusAllowedKeys));
  };
  var AllTabs = (0, _element.useMemo)(function () {
    var tabs = [];
    if (allowedTabs.includes('normal'.toLowerCase())) {
      tabs.push({
        name: 'normal',
        title: (0, _i18n.__)('Normal', 'atrc-prefix-atrc'),
        hasValue: (0, _objectValuesWithAllowedKeysAndTabs.AtrcHasTabValues)('normal', value, _controlBorderRadius.AtrcControlBorderRadiusAllowedKeys),
        onDeselect: function onDeselect() {
          return onChange((0, _objectValuesWithAllowedKeysAndTabs.AtrcResetTab)('normal', value, _controlBorderRadius.AtrcControlBorderRadiusAllowedKeys));
        }
      });
    }
    if (allowedTabs.includes('hover'.toLowerCase())) {
      tabs.push({
        name: 'Hover',
        title: (0, _i18n.__)('Hover', 'atrc-prefix-atrc'),
        hasValue: (0, _objectValuesWithAllowedKeysAndTabs.AtrcHasTabValues)('Hover', value, _controlBorderRadius.AtrcControlBorderRadiusAllowedKeys),
        onDeselect: function onDeselect() {
          return onChange((0, _objectValuesWithAllowedKeysAndTabs.AtrcResetTab)('Hover', value, _controlBorderRadius.AtrcControlBorderRadiusAllowedKeys));
        }
      });
    }
    if (allowedTabs.includes('parenthover'.toLowerCase())) {
      tabs.push({
        name: 'ParentHover',
        title: (0, _i18n.__)('Parent hover', 'atrc-prefix-atrc'),
        hasValue: (0, _objectValuesWithAllowedKeysAndTabs.AtrcHasTabValues)('ParentHover', value, _controlBorderRadius.AtrcControlBorderRadiusAllowedKeys),
        onDeselect: function onDeselect() {
          return onChange((0, _objectValuesWithAllowedKeysAndTabs.AtrcResetTab)('ParentHover', value, _controlBorderRadius.AtrcControlBorderRadiusAllowedKeys));
        }
      });
    }
    return tabs;
  }, []);
  return /*#__PURE__*/React.createElement(_panelTools.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-bdr-rad-tab'), className, variant ? (0, _prefixVars.default)('ctrl-bdr-rad-tab') + '-' + variant : ''),
    label: label,
    resetAll: function resetAll() {
      return onChange((0, _objectValuesWithAllowedKeysAndTabs.AtrcResetTabs)(value, _controlBorderRadius.AtrcControlBorderRadiusAllowedKeys));
    },
    allowTabs: true,
    tools: AllTabs
  }, function (activeItems) {
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
var _default = exports.default = AtrcControlBorderRadiusTab;
//# sourceMappingURL=index.js.map