"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AtrcControlTypographyAllowedKeys = void 0;
var _i18n = require("@wordpress/i18n");
var _element = require("@wordpress/element");
var _classnames = _interopRequireDefault(require("classnames"));
var _lodash = require("lodash");
var _panelTools = _interopRequireDefault(require("../panel-tools"));
var _fontSize = _interopRequireDefault(require("./font-size"));
var _fontFamily = _interopRequireDefault(require("./font-family"));
var _fontWeight = _interopRequireDefault(require("./font-weight"));
var _fontStyle = _interopRequireDefault(require("./font-style"));
var _textDecoration = _interopRequireDefault(require("./text-decoration"));
var _textTransform = _interopRequireDefault(require("./text-transform"));
var _lineHeight = _interopRequireDefault(require("./line-height"));
var _letterSpacing = _interopRequireDefault(require("./letter-spacing"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
var _string = require("./../../utils/string");
var _objectValuesWithDevices = require("./../../utils/object-values-with-devices");
var _excluded = ["value", "label", "onChange", "variant", "className", "google", "custom", "allowedOptions"];
/*Attributes Structure
Type Object
{
    "fntSz":"",
    "smFntSz":"",
    "smFntSz":"",
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
}
* */
/*WordPress*/
/*Library*/
/*Inbuilt*/
/*Inbuilt*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Local Components*/
var AtrcControlTypographyAllowedKeys = exports.AtrcControlTypographyAllowedKeys = ['fntSz', 'smFntSz', 'mdFntSz', 'lgFntSz', 'xlFntSz', 'xxlFntSz', 'fntFam', 'fntWt', 'fntSty', 'txtDec', 'txtTf', 'lnH', 'smLnH', 'mdLnH', 'lgLnH', 'xlLnH', 'xxlLnH', 'ltrSp', 'smLtrSp', 'mdLtrSp', 'lgLtrSp', 'xlLtrSp', 'xxlLtrSp'];
var AtrcControlTypography = function AtrcControlTypography(props) {
  var value = props.value,
    label = props.label,
    _props$onChange = props.onChange,
    _onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    google = props.google,
    custom = props.custom,
    _props$allowedOptions = props.allowedOptions,
    allowedOptions = _props$allowedOptions === void 0 ? true : _props$allowedOptions,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var resetAll = function resetAll() {
    _onChange({});
  };
  var AllTabs = (0, _element.useMemo)(function () {
    var tabsOptions = [];
    if (true === allowedOptions || (0, _lodash.isArray)(allowedOptions) && allowedOptions.includes('fontSize')) {
      tabsOptions.push({
        name: 'fntSz',
        title: (0, _i18n.__)('Font size', 'atrc-prefix-atrc'),
        hasValue: (0, _objectValuesWithDevices.AtrcHasDeviceValues)(value, 'fntSz'),
        onDeselect: function onDeselect() {
          return _onChange((0, _objectValuesWithDevices.AtrcResetDevices)(value, 'fntSz'));
        }
      });
    }
    if (true === allowedOptions || (0, _lodash.isArray)(allowedOptions) && allowedOptions.includes('fontFamily')) {
      tabsOptions.push({
        name: 'fntFam',
        title: (0, _i18n.__)('Font family', 'atrc-prefix-atrc'),
        hasValue: (0, _objectValuesWithDevices.AtrcHasValueKey)(value, 'fntFam'),
        onDeselect: function onDeselect() {
          return _onChange((0, _objectValuesWithDevices.AtrcResetValueKey)(value, 'fntFam'));
        }
      });
    }
    if (true === allowedOptions || (0, _lodash.isArray)(allowedOptions) && allowedOptions.includes('fontWeight')) {
      tabsOptions.push({
        name: 'fntWt',
        title: (0, _i18n.__)('Font weight', 'atrc-prefix-atrc'),
        hasValue: (0, _objectValuesWithDevices.AtrcHasValueKey)(value, 'fntWt'),
        onDeselect: function onDeselect() {
          return _onChange((0, _objectValuesWithDevices.AtrcResetValueKey)(value, 'fntWt'));
        }
      });
    }
    if (true === allowedOptions || (0, _lodash.isArray)(allowedOptions) && allowedOptions.includes('fontStyle')) {
      tabsOptions.push({
        name: 'fntSty',
        title: (0, _i18n.__)('Font style', 'atrc-prefix-atrc'),
        hasValue: (0, _objectValuesWithDevices.AtrcHasValueKey)(value, 'fntSty'),
        onDeselect: function onDeselect() {
          return _onChange((0, _objectValuesWithDevices.AtrcResetValueKey)(value, 'fntSty'));
        }
      });
    }
    if (true === allowedOptions || (0, _lodash.isArray)(allowedOptions) && allowedOptions.includes('textDecoration')) {
      tabsOptions.push({
        name: 'txtDec',
        title: (0, _i18n.__)('Text decoration', 'atrc-prefix-atrc'),
        hasValue: (0, _objectValuesWithDevices.AtrcHasValueKey)(value, 'txtDec'),
        onDeselect: function onDeselect() {
          return _onChange((0, _objectValuesWithDevices.AtrcResetValueKey)(value, 'txtDec'));
        }
      });
    }
    if (true === allowedOptions || (0, _lodash.isArray)(allowedOptions) && allowedOptions.includes('textTransform')) {
      tabsOptions.push({
        name: 'txtTf',
        title: (0, _i18n.__)('Text transform', 'atrc-prefix-atrc'),
        hasValue: (0, _objectValuesWithDevices.AtrcHasValueKey)(value, 'txtTf'),
        onDeselect: function onDeselect() {
          return _onChange((0, _objectValuesWithDevices.AtrcResetValueKey)(value, 'txtTf'));
        }
      });
    }
    if (true === allowedOptions || (0, _lodash.isArray)(allowedOptions) && allowedOptions.includes('lineHeight')) {
      tabsOptions.push({
        name: 'lnH',
        title: (0, _i18n.__)('Line height', 'atrc-prefix-atrc'),
        hasValue: (0, _objectValuesWithDevices.AtrcHasDeviceValues)(value, 'lnH'),
        onDeselect: function onDeselect() {
          return _onChange((0, _objectValuesWithDevices.AtrcResetDevices)(value, 'lnH'));
        }
      });
    }
    if (true === allowedOptions || (0, _lodash.isArray)(allowedOptions) && allowedOptions.includes('letterSpacing')) {
      tabsOptions.push({
        name: 'ltrSp',
        title: (0, _i18n.__)('Letter spacing', 'atrc-prefix-atrc'),
        hasValue: (0, _objectValuesWithDevices.AtrcHasDeviceValues)(value, 'ltrSp'),
        onDeselect: function onDeselect() {
          return _onChange((0, _objectValuesWithDevices.AtrcResetDevices)(value, 'ltrSp'));
        }
      });
    }
    return tabsOptions;
  }, []);
  var setAttr = function setAttr(newVal, type) {
    var valueCloned = Object.assign({}, value);
    valueCloned[type] = newVal;
    _onChange(valueCloned);
  };
  return /*#__PURE__*/React.createElement(_panelTools.default, _extends({
    className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-typ'), className, variant ? (0, _prefixVars.default)('ctrl-typ') + '-' + variant : ''),
    label: label,
    resetAll: resetAll,
    tools: AllTabs
  }, defaultProps), function (activeItems) {
    return (0, _lodash.map)(activeItems, function (tab, iDx) {
      if ('fntSz' === tab) {
        return /*#__PURE__*/React.createElement(_fontSize.default, {
          value: value,
          onChange: setAttr,
          key: iDx
        });
      }
      if ('fntFam' === tab) {
        return /*#__PURE__*/React.createElement(_fontFamily.default, {
          value: value,
          onChange: setAttr,
          google: google,
          custom: custom,
          key: iDx
        });
      }
      if ('fntWt' === tab) {
        return /*#__PURE__*/React.createElement(_fontWeight.default, {
          value: value,
          onChange: setAttr,
          key: iDx
        });
      }
      if ('fntSty' === tab) {
        return /*#__PURE__*/React.createElement(_fontStyle.default, {
          value: value,
          onChange: setAttr,
          key: iDx
        });
      }
      if ('txtDec' === tab) {
        return /*#__PURE__*/React.createElement(_textDecoration.default, {
          value: value,
          onChange: setAttr,
          key: iDx
        });
      }
      if ('txtTf' === tab) {
        return /*#__PURE__*/React.createElement(_textTransform.default, {
          value: value,
          onChange: setAttr,
          key: iDx
        });
      }
      if ('lnH' === tab) {
        return /*#__PURE__*/React.createElement(_lineHeight.default, {
          value: value,
          onChange: setAttr,
          key: iDx
        });
      }
      if ('ltrSp' === tab) {
        return /*#__PURE__*/React.createElement(_letterSpacing.default, {
          value: value,
          onChange: function onChange(newVal) {
            var valueCloned = Object.assign({}, value);
            var key = 'ltrSp';
            if (newVal && !(0, _lodash.isEmpty)(newVal)) {
              (0, _lodash.forEach)(newVal, function (item, itemKey) {
                var deviceKey;
                if (itemKey === 'xs') {
                  deviceKey = key;
                } else {
                  deviceKey = itemKey + (0, _string.AtrcUcFirst)(key);
                }
                valueCloned[deviceKey] = item;
              });
            }
            _onChange(valueCloned);
          },
          key: iDx
        });
      }
    });
  });
};
var _default = exports.default = AtrcControlTypography;
//# sourceMappingURL=index.js.map