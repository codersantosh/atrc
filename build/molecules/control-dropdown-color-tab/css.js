"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _lodash = require("lodash");
/*Library*/

/*Local*/
var AtrcControlDropdownColorTabCss = function AtrcControlDropdownColorTabCss(_ref) {
  var value = _ref.value,
    property = _ref.property;
  var innerOutput = {
    xs: '',
    xsHover: ''
  };
  if (!(0, _lodash.isEmpty)(value)) {
    if (value.normal !== undefined && value.normal !== null) {
      innerOutput.xs += "".concat(property, "      : ").concat(value.normal, ";");
    }
    if (value.hover !== undefined && value.hover !== null) {
      innerOutput.xsHover += "".concat(property, "      : ").concat(value.hover, ";");
    }
  }
  return innerOutput;
};
var _default = exports.default = AtrcControlDropdownColorTabCss;
//# sourceMappingURL=css.js.map