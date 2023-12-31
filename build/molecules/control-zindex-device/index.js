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
var _controlTextDevice = _interopRequireDefault(require("../control-text-device"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
var _availableDevices = _interopRequireDefault(require("../../utils/available-devices"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*WordPress*/

/*Library*/

/*Inbuilt*/

/*Inbuilt*/

/*Local Components*/
var AtrcControlZindexDevice = function AtrcControlZindexDevice(props) {
  var _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$allowedDevices = props.allowedDevices,
    allowedDevices = _props$allowedDevices === void 0 ? true : _props$allowedDevices;
  var ZindexTabs = (0, _element.useMemo)(function () {
    return [{
      name: 'zindex',
      title: label,
      hasValue: !(0, _lodash.isEmpty)(value),
      onDeselect: function onDeselect() {
        return onChange({});
      }
    }];
  }, [value]);

  /* Return null since no device */
  if (!allowedDevices) {
    return null;
  }
  var Devices = function Devices() {
    if ((0, _lodash.isArray)(allowedDevices)) {
      return allowedDevices;
    }
    return _availableDevices.default;
  };
  return /*#__PURE__*/React.createElement(_panelTools.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-zidx-device'), className, variant ? (0, _prefixVars.default)('ctrl-zidx-device') + '-' + variant : ''),
    label: label,
    resetAll: function resetAll() {
      return onChange({});
    },
    tools: ZindexTabs
  }, function (activeItems) {
    return (0, _lodash.map)(activeItems, function (tab, iDx) {
      return /*#__PURE__*/React.createElement(_controlTextDevice.default, {
        label: (0, _i18n.__)('Z-Index', 'atrc-prefix-atrc'),
        value: value,
        onChange: onChange,
        inputProps: {
          type: 'number'
        },
        allowedDevices: Devices(),
        key: iDx
      });
    });
  });
};
var _default = exports.default = AtrcControlZindexDevice;
//# sourceMappingURL=index.js.map