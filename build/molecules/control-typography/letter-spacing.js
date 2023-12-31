"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _i18n = require("@wordpress/i18n");
var _classnames = _interopRequireDefault(require("classnames"));
var _panelRow = _interopRequireDefault(require("../panel-row"));
var _controlUnitDevice = _interopRequireDefault(require("../control-unit-device"));
var _objectValuesWithDevices = require("../../utils/object-values-with-devices");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*WordPress*/

/*Library*/

/*Inbuilt*/

/*Local Components*/
var LetterSpacing = function LetterSpacing(_ref) {
  var value = _ref.value,
    onChange = _ref.onChange,
    _ref$disableUnits = _ref.disableUnits,
    disableUnits = _ref$disableUnits === void 0 ? false : _ref$disableUnits;
  return /*#__PURE__*/React.createElement(_panelRow.default, {
    className: (0, _classnames.default)('at-m')
  }, /*#__PURE__*/React.createElement(_controlUnitDevice.default, {
    label: (0, _i18n.__)('Letter spacing', 'atrc-prefix-atrc'),
    value: (0, _objectValuesWithDevices.AtrcGetDeviceValues)(value, 'ltrSp'),
    disableUnits: disableUnits,
    onChange: onChange
  }));
};
var _default = exports.default = LetterSpacing;
//# sourceMappingURL=letter-spacing.js.map