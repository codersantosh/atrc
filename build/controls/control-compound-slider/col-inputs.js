import React from 'react';

/* Local */
var ColInputs = function ColInputs(_ref) {
  var value = _ref.value;
  return /*#__PURE__*/React.createElement("div", {
    className: "at-cpd-slider-col-input at-flx at-m at-gap"
  }, value && value.map(function (col, i) {
    return /*#__PURE__*/React.createElement("input", {
      key: i,
      className: "at-cpd-slider-col-input-field",
      type: "number",
      min: 1,
      max: 100,
      value: col ? col : '',
      readOnly: true
    });
  }));
};
export default ColInputs;
//# sourceMappingURL=col-inputs.js.map