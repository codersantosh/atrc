"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _i18n = require("@wordpress/i18n");
var _element = require("@wordpress/element");
var _classnames = _interopRequireDefault(require("classnames"));
var _wrap = _interopRequireDefault(require("../../atoms/wrap"));
var _label = _interopRequireDefault(require("../../atoms/label"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
var _colSlider = _interopRequireDefault(require("./col-slider"));
var _colInputs = _interopRequireDefault(require("./col-inputs"));
var _panelRow = _interopRequireDefault(require("../panel-row"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* WordPress */

/*Library*/

/* Inbuilt */

/* Internal */

/* Local */
function createNewArray(arr, total) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (i === 0) {
      result.push(parseFloat(arr[i].toFixed(1))); // Parse and format the first element
    } else {
      var diff = parseFloat((arr[i] - arr[i - 1]).toFixed(1)); // Calculate and format the difference
      result.push(diff);
    }
  }
  // Add the last value (total - last element of the original array)
  result.push(parseFloat((total - arr[arr.length - 1]).toFixed(1)));
  return result;
}
var AtrcControlCompoundSlider = function AtrcControlCompoundSlider(props) {
  var values = props.values,
    onChange = props.onChange,
    _props$label = props.label,
    label = _props$label === void 0 ? (0, _i18n.__)('Custom widths', 'atrc-prefix-atrc') : _props$label,
    className = props.className,
    variant = props.variant,
    _props$total = props.total,
    total = _props$total === void 0 ? 100 : _props$total;
  var InputsWidth = (0, _element.useMemo)(function () {
    if (values && values.length) {
      return createNewArray(values, total);
    }
  }, [values, total]);
  return /*#__PURE__*/React.createElement(_panelRow.default, {
    className: (0, _classnames.default)('at-m')
  }, /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-compound-slider'), className, variant ? (0, _prefixVars.default)('ctrl-compound-slider') + '-' + variant : '')
  }, label ? /*#__PURE__*/React.createElement(_label.default, null, label) : null, /*#__PURE__*/React.createElement(_colSlider.default, {
    values: values,
    onChange: onChange
  }), /*#__PURE__*/React.createElement(_colInputs.default, {
    values: InputsWidth
  })));
};
var _default = exports.default = AtrcControlCompoundSlider;
//# sourceMappingURL=index.js.map