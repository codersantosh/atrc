/* Library */
import { isEmpty } from 'lodash';

/* Inbuilt */
import { AtrcControlBorderColorShorthand, AtrcControlBorderStyleShorthand, AtrcControlBorderWidthShorthand } from './../control-border';

/* Local */
const AtrcControlBorderCss = (value, properties = {
  bdrCl: 'border-color',
  bdrSty: 'border-style',
  bdrW: 'border-width'
}) => {
  const output = {
    xs: ''
  };
  if (!isEmpty(value)) {
    /* Color */
    if (value.cl) {
      output.xs += `${properties.bdrCl} : ${value.cl};`;
    } else if (value.tCl || value.rCl || value.bCl || value.lCl) {
      output.xs += `${properties.bdrCl}:${AtrcControlBorderColorShorthand(value.tCl, value.rCl, value.bCl, value.lCl)};`;
    }

    /*Style*/
    if (value.sty) {
      output.xs += `${properties.bdrSty} : ${value.sty};`;
    } else if (value.tSty || value.rSty || value.bSty || value.lSty) {
      output.xs += `${properties.bdrSty}:${AtrcControlBorderStyleShorthand(value.tSty, value.rSty, value.bSty, value.lSty)};`;
    }

    /*Width*/
    if (value.w) {
      output.xs += `${properties.bdrW} : ${value.w};`;
    } else if (value.tW || value.rW || value.bW || value.lW) {
      output.xs += `${properties.bdrW}:${AtrcControlBorderWidthShorthand(value.tW, value.rW, value.bW, value.lW)};`;
    }
  }
  return output;
};
export default AtrcControlBorderCss;
//# sourceMappingURL=css.js.map