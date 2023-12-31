"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _lodash = require("lodash");
/*Library*/

/*Local*/
var AtrcControlTransitionCss = function AtrcControlTransitionCss(value, property) {
  var innerOutput = {
    xs: '',
    xsHover: ''
  };
  if (!(0, _lodash.isEmpty)(value)) {
    if (value.dur || 0 === value.dur) {
      innerOutput.xs += "".concat(property, "      : all ").concat(value.dur, "s ").concat(value.tmgFn || 'ease', " ").concat(value.dla || 0, "s;");
    }
  }
  return innerOutput;
};
var _default = exports.default = AtrcControlTransitionCss;
//# sourceMappingURL=css.js.map