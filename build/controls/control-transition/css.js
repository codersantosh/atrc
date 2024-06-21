import React from 'react';

/*Library*/
import { isEmpty } from 'lodash';

/*Local*/
var AtrcControlTransitionCss = function AtrcControlTransitionCss(value) {
  var property = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '--at-trs';
  var innerOutput = {
    xs: '',
    xsHover: ''
  };
  if (!isEmpty(value)) {
    if (value.dur || 0 === value.dur) {
      innerOutput.xs += "".concat(property, "      : all ").concat(value.dur, "s ").concat(value.tmgFn || 'ease', " ").concat(value.dla || 0, "s;");
    }
  }
  return innerOutput;
};
export default AtrcControlTransitionCss;
//# sourceMappingURL=css.js.map