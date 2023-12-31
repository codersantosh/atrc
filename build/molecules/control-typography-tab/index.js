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
var _controlTypography = _interopRequireDefault(require("../control-typography"));
var _objectValuesWithAllowedKeysAndTabs = require("../../utils/object-values-with-allowed-keys-and-tabs");
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
var _controlTypography2 = require("./../control-typography");
var _excluded = ["value", "tab", "onChange"],
  _excluded2 = ["value", "label", "onChange", "variant", "className", "allowedTabs"];
/*Value Structure
Type Object
{
========*Normal values*========
    "fntSz":"",
    "smFntSz":"",
    "mdFntSz":"",
    "lgFntSz":"",
    "xlFntSz":"",
    "xxlFntSz":"",

    "fntFam": "",

    "fntWt": "",

    "fntSty": "",

    "txtTf": "",

    "txtDec": "",

    "lnH":"",
    "smLnH":"",
    "mdLnH":"",
    "lgLnH":"",
    "xlLnH":"",
    "xxlLnH":"",

    "ltrSp":"",
    "smLtrSp":"",
    "mdLtrSp":"",
    "lgLtrSp":"",
    "xlLtrSp":"",
    "xxlLtrSp":"",
    
========*Hover values*========
    "fntSzHover":"",
    "smFntSzHover":"",
    "mdFntSzHover":"",
    "lgFntSzHover":"",
    "xlFntSzHover":"",
    "xxlFntSzHover":"",

    "fntFamHover": "",
    "fntWtHover": "",
    "fntStyHover": "",
    "txtTfHover": "",
    "txtDecHover": "",

    "lnHHover":"",
    "smLnHHover":"",
    "mdLnHHover":"",
    "lgLnHHover":"",
    "xlLnHHover":"",
    "xxlLnHHover":"",

    "ltrSpHover":"",
    "smLtrSpHover":"",
    "mdLtrSpHover":"",
    "lgLtrSpHover":"",
    "xlLtrSpHover":"",
    "xxlLtrSpHover":"",

}
* */
/*WordPress*/
/*Library*/
/*Inbuilt*/
/*Inbuilt utils*/
/*Prefix*/
/*Local Components*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var RenderTabPanel = function RenderTabPanel(props) {
  var value = props.value,
    tab = props.tab,
    _onChange = props.onChange,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(_controlTypography.default, _extends({
    label: (0, _i18n.__)('Add typography options', 'atrc-prefix-atrc'),
    value: (0, _objectValuesWithAllowedKeysAndTabs.AtrcGetTabValues)(value, tab, _controlTypography2.AtrcControlTypographyAllowedKeys),
    onChange: function onChange(newVal) {
      return _onChange(newVal, tab);
    }
  }, defaultProps));
};
var AtrcControlTypographyTab = function AtrcControlTypographyTab(props) {
  var value = props.value,
    label = props.label,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$allowedTabs = props.allowedTabs,
    allowedTabs = _props$allowedTabs === void 0 ? ['normal', 'hover'] : _props$allowedTabs,
    defaultProps = _objectWithoutProperties(props, _excluded2);
  var setTabAttr = function setTabAttr(newVal, tab) {
    onChange((0, _objectValuesWithAllowedKeysAndTabs.AtrcUpdateTabValues)(newVal, tab, value, _controlTypography2.AtrcControlTypographyAllowedKeys));
  };
  var AllTabs = (0, _element.useMemo)(function () {
    var tabs = [];
    if (allowedTabs.includes('normal'.toLowerCase())) {
      tabs.push({
        name: 'normal',
        title: (0, _i18n.__)('Normal', 'atrc-prefix-atrc'),
        hasValue: (0, _objectValuesWithAllowedKeysAndTabs.AtrcHasTabValues)('normal', value, _controlTypography2.AtrcControlTypographyAllowedKeys),
        onDeselect: function onDeselect() {
          return onChange((0, _objectValuesWithAllowedKeysAndTabs.AtrcResetTab)('normal', value, _controlTypography2.AtrcControlTypographyAllowedKeys));
        }
      });
    }
    if (allowedTabs.includes('hover'.toLowerCase())) {
      tabs.push({
        name: 'Hover',
        title: (0, _i18n.__)('Hover', 'atrc-prefix-atrc'),
        hasValue: (0, _objectValuesWithAllowedKeysAndTabs.AtrcHasTabValues)('Hover', value, _controlTypography2.AtrcControlTypographyAllowedKeys),
        onDeselect: function onDeselect() {
          return onChange((0, _objectValuesWithAllowedKeysAndTabs.AtrcResetTab)('Hover', value, _controlTypography2.AtrcControlTypographyAllowedKeys));
        }
      });
    }
    if (allowedTabs.includes('parenthover'.toLowerCase())) {
      tabs.push({
        name: 'ParentHover',
        title: (0, _i18n.__)('Parent hover', 'atrc-prefix-atrc'),
        hasValue: (0, _objectValuesWithAllowedKeysAndTabs.AtrcHasTabValues)('ParentHover', value, _controlTypography2.AtrcControlTypographyAllowedKeys),
        onDeselect: function onDeselect() {
          return onChange((0, _objectValuesWithAllowedKeysAndTabs.AtrcResetTab)('ParentHover', value, _controlTypography2.AtrcControlTypographyAllowedKeys));
        }
      });
    }
    return tabs;
  }, []);
  return /*#__PURE__*/React.createElement(_panelTools.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-typ-tab'), className, variant ? (0, _prefixVars.default)('ctrl-typ-tab') + '-' + variant : ''),
    label: label,
    resetAll: function resetAll() {
      return onChange((0, _objectValuesWithAllowedKeysAndTabs.AtrcResetTabs)(value, _controlTypography2.AtrcControlTypographyAllowedKeys));
    },
    allowTabs: true,
    tools: AllTabs
  }, function (activeItems) {
    return (0, _lodash.map)(activeItems, function (tab, iDx) {
      return /*#__PURE__*/React.createElement(RenderTabPanel, _extends({
        value: value,
        onChange: function onChange(newVal) {
          return setTabAttr(newVal, tab);
        },
        tab: tab,
        key: iDx
      }, defaultProps));
    });
  });
};
var _default = exports.default = AtrcControlTypographyTab;
//# sourceMappingURL=index.js.map