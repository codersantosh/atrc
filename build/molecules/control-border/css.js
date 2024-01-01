/* Library */
import { isEmpty } from 'lodash';

/* Inbuilt */
import { AtrcControlBorderColorShorthand, AtrcControlBorderStyleShorthand, AtrcControlBorderWidthShorthand } from './../control-border';

/* Local */
var AtrcControlBorderCss = function AtrcControlBorderCss(value) {
  var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    bdrCl: 'border-color',
    bdrSty: 'border-style',
    bdrW: 'border-width'
  };
  var output = {
    xs: ''
  };
  if (!isEmpty(value)) {
    /* Color */
    if (value.cl) {
      output.xs += "".concat(properties.bdrCl, " : ").concat(value.cl, ";");
    } else if (value.tCl || value.rCl || value.bCl || value.lCl) {
      output.xs += "".concat(properties.bdrCl, ":").concat(AtrcControlBorderColorShorthand(value.tCl, value.rCl, value.bCl, value.lCl), ";");
    }

    /*Style*/
    if (value.sty) {
      output.xs += "".concat(properties.bdrSty, " : ").concat(value.sty, ";");
    } else if (value.tSty || value.rSty || value.bSty || value.lSty) {
      output.xs += "".concat(properties.bdrSty, ":").concat(AtrcControlBorderStyleShorthand(value.tSty, value.rSty, value.bSty, value.lSty), ";");
    }

    /*Width*/
    if (value.w) {
      output.xs += "".concat(properties.bdrW, " : ").concat(value.w, ";");
    } else if (value.tW || value.rW || value.bW || value.lW) {
      output.xs += "".concat(properties.bdrW, ":").concat(AtrcControlBorderWidthShorthand(value.tW, value.rW, value.bW, value.lW), ";");
    }
  }
  return output;
};
export default AtrcControlBorderCss;
//# sourceMappingURL=css.js.map