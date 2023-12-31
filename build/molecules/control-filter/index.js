"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AtrcControlFilterAllowedKeys = void 0;
var _i18n = require("@wordpress/i18n");
var _element = require("@wordpress/element");
var _classnames = _interopRequireDefault(require("classnames"));
var _lodash = require("lodash");
var _label = _interopRequireDefault(require("../../atoms/label"));
var _resetButtonIcon = require("../../atoms/reset-button-icon");
var _range = _interopRequireDefault(require("../../atoms/range"));
var _panelTools = _interopRequireDefault(require("../panel-tools"));
var _panelRow = _interopRequireDefault(require("../panel-row"));
var _controlDropdownColor = _interopRequireDefault(require("../control-dropdown-color"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
var _objectValuesWithDevices = require("./../../utils/object-values-with-devices");
var _objectValuesWithDevices2 = require("../../utils/object-values-with-devices");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*Attributes Structure
Type Object
{
    blr : '',
    brgtNess : '',
    ctrs : '',
    grayScl : '',
    hueRot : '',
    inv : '',
    opa : '',
    sart : '',
    sepia : '',

    hSdw : '',
    vSdw : '',
    sdwBlr : '',
    sdwSprd : '',
    sdwCl : ''
}
*/

/*WordPress*/

/*Library*/

/*Inbuilt*/

/*Inbuilt*/

/*Local*/
var AtrcControlFilterAllowedKeys = exports.AtrcControlFilterAllowedKeys = ['blr', 'brgtNess', 'ctrs', 'grayScl', 'hueRot', 'inv', 'opa', 'sart', 'sepia', 'hSdw', 'vSdw', 'sdwBlr', 'sdwSprd', 'sdwCl'];
var AtrcControlFilter = function AtrcControlFilter(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label,
    _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$allowedOptions = props.allowedOptions,
    allowedOptions = _props$allowedOptions === void 0 ? true : _props$allowedOptions;
  var hSdw = value.hSdw,
    vSdw = value.vSdw,
    sdwBlr = value.sdwBlr,
    sdwSprd = value.sdwSprd,
    sdwCl = value.sdwCl;
  var setAttr = function setAttr(newVal, type) {
    var valueCloned = Object.assign({}, value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  var resetDropShadow = function resetDropShadow() {
    var valueCloned = Object.assign({}, value);
    delete valueCloned.hSdw;
    delete valueCloned.vSdw;
    delete valueCloned.sdwBlr;
    delete valueCloned.sdwSprd;
    delete valueCloned.sdwCl;
    onChange(valueCloned);
  };
  var hasDropShadow = function hasDropShadow() {
    if (!value || (0, _lodash.isEmpty)(value)) {
      return false;
    }
    return !!(hSdw || vSdw || sdwBlr || sdwSprd || sdwCl);
  };
  var AllTabs = (0, _element.useMemo)(function () {
    var tabsOptions = [];
    if (true === allowedOptions || (0, _lodash.isArray)(allowedOptions) && allowedOptions.includes('blur')) {
      tabsOptions.push({
        name: 'blr',
        title: (0, _i18n.__)('Blur', 'atrc-prefix-atrc'),
        hasValue: (0, _objectValuesWithDevices.AtrcHasValueKey)(value, 'blr'),
        onDeselect: function onDeselect() {
          return onChange((0, _objectValuesWithDevices2.AtrcResetValueKey)(value, 'blr'));
        }
      });
    }
    if (true === allowedOptions || (0, _lodash.isArray)(allowedOptions) && allowedOptions.includes('brightness')) {
      tabsOptions.push({
        name: 'brgtNess',
        title: (0, _i18n.__)('Brightness', 'atrc-prefix-atrc'),
        hasValue: (0, _objectValuesWithDevices.AtrcHasValueKey)(value, 'brgtNess'),
        onDeselect: function onDeselect() {
          return onChange((0, _objectValuesWithDevices2.AtrcResetValueKey)(value, 'brgtNess'));
        }
      });
    }
    if (true === allowedOptions || (0, _lodash.isArray)(allowedOptions) && allowedOptions.includes('contrast')) {
      tabsOptions.push({
        name: 'ctrs',
        title: (0, _i18n.__)('Contrast', 'atrc-prefix-atrc'),
        hasValue: (0, _objectValuesWithDevices.AtrcHasValueKey)(value, 'ctrs'),
        onDeselect: function onDeselect() {
          return onChange((0, _objectValuesWithDevices2.AtrcResetValueKey)(value, 'ctrs'));
        }
      });
    }
    if (true === allowedOptions || (0, _lodash.isArray)(allowedOptions) && allowedOptions.includes('grayscale')) {
      tabsOptions.push({
        name: 'grayScl',
        title: (0, _i18n.__)('Grayscale', 'atrc-prefix-atrc'),
        hasValue: (0, _objectValuesWithDevices.AtrcHasValueKey)(value, 'grayScl'),
        onDeselect: function onDeselect() {
          return onChange((0, _objectValuesWithDevices2.AtrcResetValueKey)(value, 'grayScl'));
        }
      });
    }
    if (true === allowedOptions || (0, _lodash.isArray)(allowedOptions) && allowedOptions.includes('hueRotate')) {
      tabsOptions.push({
        name: 'hueRot',
        title: (0, _i18n.__)('Hue rotate', 'atrc-prefix-atrc'),
        hasValue: (0, _objectValuesWithDevices.AtrcHasValueKey)(value, 'hueRot'),
        onDeselect: function onDeselect() {
          return onChange((0, _objectValuesWithDevices2.AtrcResetValueKey)(value, 'hueRot'));
        }
      });
    }
    if (true === allowedOptions || (0, _lodash.isArray)(allowedOptions) && allowedOptions.includes('invert')) {
      tabsOptions.push({
        name: 'inv',
        title: (0, _i18n.__)('Invert', 'atrc-prefix-atrc'),
        hasValue: (0, _objectValuesWithDevices.AtrcHasValueKey)(value, 'inv'),
        onDeselect: function onDeselect() {
          return onChange((0, _objectValuesWithDevices2.AtrcResetValueKey)(value, 'inv'));
        }
      });
    }
    if (true === allowedOptions || (0, _lodash.isArray)(allowedOptions) && allowedOptions.includes('opacity')) {
      tabsOptions.push({
        name: 'opa',
        title: (0, _i18n.__)('Opacity', 'atrc-prefix-atrc'),
        hasValue: (0, _objectValuesWithDevices.AtrcHasValueKey)(value, 'opa'),
        onDeselect: function onDeselect() {
          return onChange((0, _objectValuesWithDevices2.AtrcResetValueKey)(value, 'opa'));
        }
      });
    }
    if (true === allowedOptions || (0, _lodash.isArray)(allowedOptions) && allowedOptions.includes('saturate')) {
      tabsOptions.push({
        name: 'sart',
        title: (0, _i18n.__)('Saturate', 'atrc-prefix-atrc'),
        hasValue: (0, _objectValuesWithDevices.AtrcHasValueKey)(value, 'sart'),
        onDeselect: function onDeselect() {
          return onChange((0, _objectValuesWithDevices2.AtrcResetValueKey)(value, 'sart'));
        }
      });
    }
    if (true === allowedOptions || (0, _lodash.isArray)(allowedOptions) && allowedOptions.includes('sepia')) {
      tabsOptions.push({
        name: 'sepia',
        title: (0, _i18n.__)('Sepia', 'atrc-prefix-atrc'),
        hasValue: (0, _objectValuesWithDevices.AtrcHasValueKey)(value, 'sepia'),
        onDeselect: function onDeselect() {
          return onChange((0, _objectValuesWithDevices2.AtrcResetValueKey)(value, 'sepia'));
        }
      });
    }
    if (true === allowedOptions || (0, _lodash.isArray)(allowedOptions) && allowedOptions.includes('dropShadow')) {
      tabsOptions.push({
        name: 'dropSdw',
        title: (0, _i18n.__)('Drop shadow', 'atrc-prefix-atrc'),
        hasValue: hasDropShadow(),
        onDeselect: function onDeselect() {
          return resetDropShadow();
        }
      });
    }
    return tabsOptions;
  }, []);
  var resetAll = function resetAll() {
    onChange({});
  };
  if (!AllTabs.length) {
    return null;
  }
  return /*#__PURE__*/React.createElement(_panelTools.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-fl'), className, variant ? (0, _prefixVars.default)('ctrl-fl') + '-' + variant : ''),
    label: label,
    resetAll: resetAll,
    tools: AllTabs
  }, function (activeItems) {
    return (0, _lodash.map)(activeItems, function (tab, iDx) {
      if ('dropSdw' === tab) {
        return /*#__PURE__*/React.createElement(_panelRow.default, {
          className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-fl-drop-sdw'), 'at-m', 'at-flx-col', 'at-al-itm-st', 'at-jfy-cont-st '),
          key: iDx
        }, /*#__PURE__*/React.createElement(_label.default, null, (0, _i18n.__)('Drop shadow', 'atrc-prefix-atrc')), /*#__PURE__*/React.createElement(_panelRow.default, {
          className: (0, _classnames.default)('at-m')
        }, /*#__PURE__*/React.createElement(_range.default, {
          label: (0, _i18n.__)('H-shadow', 'atrc-prefix-atrc'),
          help: (0, _i18n.__)('px', 'atrc-prefix-atrc'),
          value: hSdw,
          onChange: function onChange(newVal) {
            return setAttr(newVal, 'hSdw');
          }
        })), /*#__PURE__*/React.createElement(_panelRow.default, {
          className: (0, _classnames.default)('at-m')
        }, /*#__PURE__*/React.createElement(_range.default, {
          label: (0, _i18n.__)('V-shadow', 'atrc-prefix-atrc'),
          help: (0, _i18n.__)('px', 'atrc-prefix-atrc'),
          value: vSdw,
          onChange: function onChange(newVal) {
            return setAttr(newVal, 'vSdw');
          }
        })), /*#__PURE__*/React.createElement(_panelRow.default, {
          className: (0, _classnames.default)('at-m')
        }, /*#__PURE__*/React.createElement(_range.default, {
          label: (0, _i18n.__)('Shadow blur', 'atrc-prefix-atrc'),
          help: (0, _i18n.__)('px', 'atrc-prefix-atrc'),
          value: sdwBlr,
          onChange: function onChange(newVal) {
            return setAttr(newVal, 'sdwBlr');
          }
        })), /*#__PURE__*/React.createElement(_panelRow.default, {
          className: (0, _classnames.default)('at-m')
        }, /*#__PURE__*/React.createElement(_resetButtonIcon.AtrcResetWrap, {
          className: (0, _classnames.default)((0, _prefixVars.default)('lbl-rst'))
        }, /*#__PURE__*/React.createElement(_controlDropdownColor.default, {
          label: (0, _i18n.__)('Shadow color', 'atrc-prefix-atrc'),
          value: sdwCl,
          onChange: function onChange(newVal) {
            return setAttr(newVal, 'sdwCl');
          }
        }))));
      }
      var tabLabel = '';
      var helpTxt = '';
      switch (tab) {
        case 'blr':
          tabLabel = (0, _i18n.__)('Blur', 'atrc-prefix-atrc');
          helpTxt = (0, _i18n.__)('px', 'atrc-prefix-atrc');
          break;
        case 'brgtNess':
          tabLabel = (0, _i18n.__)('Brightness', 'atrc-prefix-atrc');
          break;
        case 'ctrs':
          tabLabel = (0, _i18n.__)('Contrast', 'atrc-prefix-atrc');
          break;
        case 'grayScl':
          tabLabel = (0, _i18n.__)('Grayscale', 'atrc-prefix-atrc');
          break;
        case 'hueRot':
          tabLabel = (0, _i18n.__)('Hue rotate', 'atrc-prefix-atrc');
          helpTxt = (0, _i18n.__)('deg', 'atrc-prefix-atrc');
          break;
        case 'inv':
          tabLabel = (0, _i18n.__)('Invert', 'atrc-prefix-atrc');
          break;
        case 'opa':
          tabLabel = (0, _i18n.__)('Opacity', 'atrc-prefix-atrc');
          break;
        case 'sart':
          tabLabel = (0, _i18n.__)('Saturate', 'atrc-prefix-atrc');
          break;
        case 'sepia':
          tabLabel = (0, _i18n.__)('Sepia', 'atrc-prefix-atrc');
          break;
        default:
          break;
      }
      if (tabLabel) {
        return /*#__PURE__*/React.createElement(_panelRow.default, {
          className: (0, _classnames.default)('at-m'),
          key: iDx
        }, /*#__PURE__*/React.createElement(_range.default, {
          label: tabLabel,
          help: helpTxt || (0, _i18n.__)('%', 'atrc-prefix-atrc'),
          value: value[tab],
          onChange: function onChange(newVal) {
            return setAttr(newVal, tab);
          }
        }));
      }
      return null;
    });
  });
};
var _default = exports.default = AtrcControlFilter;
//# sourceMappingURL=index.js.map