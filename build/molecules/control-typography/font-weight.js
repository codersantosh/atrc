"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _i18n = require("@wordpress/i18n");
var _select = _interopRequireDefault(require("../../atoms/select"));
var _options = require("./options");
var _panelRow = _interopRequireDefault(require("../panel-row"));
var _classnames = _interopRequireDefault(require("classnames"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*WordPress*/

/*Inbuilt*/

/*Library*/

/*Local Components*/
var FontWeight = function FontWeight(_ref) {
  var value = _ref.value,
    _onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement(_panelRow.default, {
    className: (0, _classnames.default)('at-m')
  }, /*#__PURE__*/React.createElement(_select.default, {
    label: (0, _i18n.__)('Font weight', 'atrc-prefix-atrc'),
    wrapProps: {
      className: 'at-flx-grw-1'
    },
    value: value && value.fntWt,
    options: _options.FontWeightList,
    onChange: function onChange(newVal) {
      return _onChange(newVal, 'fntWt');
    }
  }));
};
var _default = exports.default = FontWeight;
//# sourceMappingURL=font-weight.js.map