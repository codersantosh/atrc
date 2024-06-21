import React from 'react';

/* Library */
import { isEmpty } from 'lodash';

/* Local */
var AtrcControlBoxShadowCss = function AtrcControlBoxShadowCss(value) {
  var property = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '--at-box-sdw';
  var output = {
    xs: ''
  };
  if (!isEmpty(value) && value.x && value.y) {
    output.xs += "".concat(property, " : ").concat(value.pos ? value.pos : '', " ").concat(value.x, " ").concat(value.y, " ").concat(value.blr ? value.blr : '', " ").concat(value.sprd ? value.sprd : '', " ").concat(value.cl ? value.cl : '', ";");
  }
  return output;
};
export default AtrcControlBoxShadowCss;
//# sourceMappingURL=css.js.map