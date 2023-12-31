"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _lodash = require("lodash");
/* Library */

/* Local */
var AtrcControlBoxShadowCss = function AtrcControlBoxShadowCss(value) {
  var property = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'box-shadow';
  var output = {
    xs: ''
  };
  if (!(0, _lodash.isEmpty)(value) && value.x && value.y) {
    output.xs += "".concat(property, " :\n\t\t").concat(value.pos ? value.pos : '', "\n\t\t").concat(value.x, " ").concat(value.y, " \n\t\t").concat(value.blr ? value.blr : '', "\n\t\t").concat(value.sprd ? value.sprd : '', " \n\t\t").concat(value.cl ? value.cl : '', ";");
  }
  return output;
};
var _default = exports.default = AtrcControlBoxShadowCss;
//# sourceMappingURL=css.js.map