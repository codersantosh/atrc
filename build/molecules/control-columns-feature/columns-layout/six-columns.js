"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _i18n = require("@wordpress/i18n");
var _controlSelectButton = _interopRequireDefault(require("../../control-select-button"));
var _options = require("../options");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* WordPress */

/* Inbuilt */

/* Local */
var SixColumnsLayout = function SixColumnsLayout(props) {
  var value = props.value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange;
  return /*#__PURE__*/React.createElement(_controlSelectButton.default, {
    label: (0, _i18n.__)('Six columns layout', 'atrc-prefix-atrc'),
    value: value,
    options: _options.SixColumnsOptions,
    onChange: onChange,
    allowReset: false
  });
};
var _default = exports.default = SixColumnsLayout;
//# sourceMappingURL=six-columns.js.map