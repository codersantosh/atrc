import React from 'react';

/* Library */
import { isEmpty } from 'lodash';

/* Inbuilt */
import { AtrcControlBorderColorShorthand, AtrcControlBorderStyleShorthand, AtrcControlBorderWidthShorthand } from '../control-border';

/* Local */
var AtrcControlBorderCss = function AtrcControlBorderCss(_ref) {
  var value = _ref.value,
    _ref$properties = _ref.properties,
    properties = _ref$properties === void 0 ? {
      borderColor: '--at-bdr-cl',
      borderStyle: '--at-bdr-sty',
      borderWidth: '--at-bdr-w'
    } : _ref$properties;
  var output = {
    xs: ''
  };
  if (!isEmpty(value)) {
    /* Color */
    if (value.cl) {
      output.xs += "".concat(properties.borderColor, " : ").concat(value.cl, ";");
    } else if (value.tCl || value.rCl || value.bCl || value.lCl) {
      output.xs += "".concat(properties.borderColor, ":").concat(AtrcControlBorderColorShorthand(value.tCl, value.rCl, value.bCl, value.lCl), ";");
    }

    /*Style*/
    if (value.sty) {
      output.xs += "".concat(properties.borderStyle, " : ").concat(value.sty, ";");
    } else if (value.tSty || value.rSty || value.bSty || value.lSty) {
      output.xs += "".concat(properties.borderStyle, ":").concat(AtrcControlBorderStyleShorthand(value.tSty, value.rSty, value.bSty, value.lSty), ";");
    }

    /*Width*/
    if (value.w) {
      output.xs += "".concat(properties.borderWidth, " : ").concat(value.w, ";");
    } else if (value.tW || value.rW || value.bW || value.lW) {
      output.xs += "".concat(properties.borderWidth, ":").concat(AtrcControlBorderWidthShorthand(value.tW, value.rW, value.bW, value.lW), ";");
    }
  }
  return output;
};
export default AtrcControlBorderCss;
//# sourceMappingURL=css.js.map