import React from 'react';

/*Local*/
var AtrcControlColorGradientCss = function AtrcControlColorGradientCss(value) {
  var property = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '--at-cl';
  var output = {};
  if (value) {
    output.xs = '';
    if (value.cl) {
      output.xs += "".concat(property, "      : ").concat(value.cl, ";");
    } else if (value.grd) {
      output.xs += "background      : ".concat(value.grd, ";");
      output.xs += "text-fill-color      : transparent;";
      output.xs += "background-clip      : text;";
    }
  }
  return output;
};
export default AtrcControlColorGradientCss;
//# sourceMappingURL=css.js.map