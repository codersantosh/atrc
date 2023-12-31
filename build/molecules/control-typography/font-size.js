"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _i18n = require("@wordpress/i18n");
var _classnames = _interopRequireDefault(require("classnames"));
var _panelRow = _interopRequireDefault(require("../panel-row"));
var _dropdownDevice = _interopRequireDefault(require("../dropdown-device"));
var _controlFontSizePicker = _interopRequireDefault(require("../control-font-size-picker"));
var _options = require("./options");
var _availableDevices = _interopRequireDefault(require("../../utils/available-devices"));
var _objectValuesWithDevices = require("./../../utils/object-values-with-devices");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*Attributes Structure
Type Object
{
    "fntSz":"",
    "smFntSz":"",
    "smFntSz":"",
    "lgFntSz":"",
    "xlFntSz":"",
    "xxlFntSz":"",
}
* */

/*WordPress*/

/* Library */

/*Inbuilt*/

/*Local Components*/
var RenderTab = function RenderTab(_ref) {
  var device = _ref.device,
    value = _ref.value,
    _onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement(_controlFontSizePicker.default, {
    fontSizes: _options.FontSizeList,
    fallbackFontSize: 18,
    value: (0, _objectValuesWithDevices.AtrcMappingDeviceKeyValues)(value, device, 'fntSz'),
    onChange: function onChange(newVal) {
      return _onChange(newVal, (0, _objectValuesWithDevices.AtrcMappingDeviceKey)(device, 'fntSz'));
    }
  });
};
var FontSize = function FontSize(_ref2) {
  var value = _ref2.value,
    onChange = _ref2.onChange;
  return /*#__PURE__*/React.createElement(_panelRow.default, {
    className: (0, _classnames.default)('at-m')
  }, /*#__PURE__*/React.createElement(_dropdownDevice.default, {
    label: (0, _i18n.__)('Font size', 'atrc-prefix-atrc'),
    tabs: _availableDevices.default
  }, function (tab) {
    return /*#__PURE__*/React.createElement(RenderTab, {
      device: tab.name,
      value: value,
      onChange: onChange
    });
  }));
};
var _default = exports.default = FontSize;
//# sourceMappingURL=font-size.js.map