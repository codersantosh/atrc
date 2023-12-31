"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _oneColumn = _interopRequireDefault(require("./one-column"));
var _twoColumns = _interopRequireDefault(require("./two-columns"));
var _threeColumns = _interopRequireDefault(require("./three-columns"));
var _fourColumns = _interopRequireDefault(require("./four-columns"));
var _fiveColumns = _interopRequireDefault(require("./five-columns"));
var _sixColumns = _interopRequireDefault(require("./six-columns"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* Inbuilt */

/* Local */
var ColumnLayout = function ColumnLayout(props) {
  var columns = props.columns,
    value = props.value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange;
  columns = parseInt(columns);
  if (1 === columns) {
    return /*#__PURE__*/React.createElement(_oneColumn.default, {
      value: value,
      onChange: onChange
    });
  } else if (2 === columns) {
    return /*#__PURE__*/React.createElement(_twoColumns.default, {
      value: value,
      onChange: onChange
    });
  } else if (3 === columns) {
    return /*#__PURE__*/React.createElement(_threeColumns.default, {
      value: value,
      onChange: onChange
    });
  } else if (4 === columns) {
    return /*#__PURE__*/React.createElement(_fourColumns.default, {
      value: value,
      onChange: onChange
    });
  } else if (5 === columns) {
    return /*#__PURE__*/React.createElement(_fiveColumns.default, {
      value: value,
      onChange: onChange
    });
  } else if (6 === columns) {
    return /*#__PURE__*/React.createElement(_sixColumns.default, {
      value: value,
      onChange: onChange
    });
  }
  return null;
};
var _default = exports.default = ColumnLayout;
//# sourceMappingURL=index.js.map