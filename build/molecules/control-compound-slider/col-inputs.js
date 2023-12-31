"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var ColInputs = function ColInputs(_ref) {
  var values = _ref.values;
  return /*#__PURE__*/React.createElement("div", {
    className: "g-r-col-inputs"
  }, values.map(function (col, i) {
    return /*#__PURE__*/React.createElement("input", {
      key: i,
      className: "g-r-col-input-field",
      type: "number",
      min: 1,
      max: 100,
      value: col ? col : '',
      readOnly: true
    });
  }));
};
var _default = exports.default = ColInputs;
//# sourceMappingURL=col-inputs.js.map