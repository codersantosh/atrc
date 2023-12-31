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
var ThreeColumnsLayout = function ThreeColumnsLayout(props) {
  var value = props.value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange;
  return /*#__PURE__*/React.createElement(_controlSelectButton.default, {
    label: (0, _i18n.__)('Three columns layout', 'atrc-prefix-atrc'),
    value: value,
    options: _options.ThreeColumnsOptions,
    onChange: onChange,
    allowReset: false
  });
};
var _default = exports.default = ThreeColumnsLayout;
//# sourceMappingURL=three-columns.js.map