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
var _panelRow = _interopRequireDefault(require("../panel-row"));
var _select = _interopRequireDefault(require("../../atoms/select"));
var _range = _interopRequireDefault(require("../../atoms/range"));
var _options = _interopRequireDefault(require("./options"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*Value Structure
Type Object
{
dur : 0,
tmgFn : '',
dla : 0,
}
* */

/*WordPress*/

/*Library*/

/*Inbuilt*/

/*Inbuilt*/

/*Local Components*/
var AtrcControlTransition = function AtrcControlTransition(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$allowedOptions = props.allowedOptions,
    allowedOptions = _props$allowedOptions === void 0 ? true : _props$allowedOptions;
  var dur = value.dur,
    _value$tmgFn = value.tmgFn,
    tmgFn = _value$tmgFn === void 0 ? '' : _value$tmgFn,
    dla = value.dla;
  var setAttr = function setAttr(newVal, type) {
    var valueCloned = Object.assign({}, value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  var resetAttr = function resetAttr(type) {
    var valueCloned = Object.assign({}, value);
    delete valueCloned[type];
    onChange(valueCloned);
  };
  var resetAll = function resetAll() {
    onChange({});
  };
  var hasTabValue = function hasTabValue(tab) {
    if (!value || (0, _lodash.isEmpty)(value)) {
      return false;
    }
    return !!value[tab];
  };
  var AllTabs = (0, _element.useMemo)(function () {
    var tabsOptions = [];
    if (true === allowedOptions || (0, _lodash.isArray)(allowedOptions) && allowedOptions.includes('duration')) {
      tabsOptions.push({
        name: 'dur',
        title: (0, _i18n.__)('Duration', 'atrc-prefix-atrc'),
        hasValue: hasTabValue('dur'),
        onDeselect: function onDeselect() {
          return resetAttr('dur');
        }
      });
    }
    if (true === allowedOptions || (0, _lodash.isArray)(allowedOptions) && allowedOptions.includes('timingFunction')) {
      tabsOptions.push({
        name: 'tmgFn',
        title: (0, _i18n.__)('Timing function', 'atrc-prefix-atrc'),
        hasValue: hasTabValue('tmgFn'),
        onDeselect: function onDeselect() {
          return resetAttr('tmgFn');
        }
      });
    }
    if (true === allowedOptions || (0, _lodash.isArray)(allowedOptions) && allowedOptions.includes('delay')) {
      tabsOptions.push({
        name: 'dla',
        title: (0, _i18n.__)('Delay', 'atrc-prefix-atrc'),
        hasValue: hasTabValue('dla'),
        onDeselect: function onDeselect() {
          return resetAttr('dla');
        }
      });
    }
    return tabsOptions;
  }, [value]);
  return /*#__PURE__*/React.createElement(_panelTools.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-trs'), className, variant ? (0, _prefixVars.default)('ctrl-trs') + '-' + variant : ''),
    label: label,
    resetAll: resetAll,
    tools: AllTabs
  }, function (activeItems) {
    return (0, _lodash.map)(activeItems, function (tab, iDx) {
      if ('dur' === tab) {
        return /*#__PURE__*/React.createElement(_panelRow.default, {
          className: (0, _classnames.default)('at-m'),
          key: iDx
        }, /*#__PURE__*/React.createElement(_range.default, {
          label: (0, _i18n.__)('Duration', 'atrc-prefix-atrc'),
          help: (0, _i18n.__)('In seconds', 'atrc-prefix-atrc'),
          value: dur,
          onChange: function onChange(newVal) {
            return setAttr(newVal, tab);
          },
          min: 0,
          max: 10,
          step: 0.1
        }));
      }
      if ('tmgFn' === tab) {
        return /*#__PURE__*/React.createElement(_panelRow.default, {
          className: (0, _classnames.default)('at-m'),
          key: iDx
        }, /*#__PURE__*/React.createElement(_select.default, {
          label: (0, _i18n.__)('Timing function', 'atrc-prefix-atrc'),
          wrapProps: {
            className: 'at-flx-grw-1'
          },
          value: tmgFn,
          options: _options.default,
          onChange: function onChange(newVal) {
            return setAttr(newVal, tab);
          }
        }));
      }
      if ('dla' === tab) {
        return /*#__PURE__*/React.createElement(_panelRow.default, {
          className: (0, _classnames.default)('at-m'),
          key: iDx
        }, /*#__PURE__*/React.createElement(_range.default, {
          label: (0, _i18n.__)('Delay', 'atrc-prefix-atrc'),
          help: (0, _i18n.__)('In seconds', 'atrc-prefix-atrc'),
          value: dla,
          onChange: function onChange(newVal) {
            return setAttr(newVal, tab);
          },
          min: 0,
          max: 10,
          step: 0.1
        }));
      }
      return null;
    });
  });
};
var _default = exports.default = AtrcControlTransition;
//# sourceMappingURL=index.js.map