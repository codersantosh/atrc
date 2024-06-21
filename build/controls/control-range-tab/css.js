import React from 'react';

/*Library*/
import { isEmpty } from 'lodash';

/*Local*/
var AtrcControlRangeTabCss = function AtrcControlRangeTabCss(value, property) {
  var innerOutput = {
    xs: '',
    xsHover: ''
  };
  if (!isEmpty(value)) {
    if (value.normal !== undefined && value.normal !== null) {
      innerOutput.xs += "".concat(property, "      : ").concat(value.normal, ";");
    }
    if (value.hover !== undefined && value.hover !== null) {
      innerOutput.xsHover += "".concat(property, "      : ").concat(value.hover, ";");
    }
  }
  return innerOutput;
};
export default AtrcControlRangeTabCss;
//# sourceMappingURL=css.js.map