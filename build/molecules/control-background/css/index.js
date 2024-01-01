/*Library*/
import { isEmpty } from 'lodash';

/*Inbuilt*/
import { AtrcControlDropdownColorGradientTabCss } from './../../control-dropdown-color-gradient-tab/css';
import BgImage from './bg-image';

/*Local*/
var AtrcControlBackgroundCss = function AtrcControlBackgroundCss(value) {
  var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    bgAtch: 'background-attachment',
    bgBlendMode: 'background-blend-mode',
    bgPos: 'background-position',
    bgRpt: 'background-repeat',
    bgSz: 'background-size',
    bgImg: 'background-image',
    bgCl: 'background-color'
  };
  var innerOutput = {
    xs: '',
    xsHover: '',
    xsActive: '',
    sm: '',
    smHover: '',
    smActive: '',
    md: '',
    mdHover: '',
    mdActive: '',
    lg: '',
    lgHover: '',
    lgActive: '',
    xl: '',
    xlHover: '',
    xlActive: '',
    xxl: '',
    xxlHover: '',
    xxlActive: ''
  };
  if (!isEmpty(value)) {
    innerOutput = AtrcControlDropdownColorGradientTabCss({
      value: {
        cl: value.bgCl,
        clHover: value.bgClHover,
        clActive: value.bgClActive,
        grd: value.bgGrd,
        grdHover: value.bgGrdHover,
        grdActive: value.bgGrdActive
      },
      innerOutput: innerOutput,
      property: properties.bgCl,
      propGrd: properties.bgImg
    });
    innerOutput = BgImage(value, innerOutput, properties);
  }
  return innerOutput;
};
export default AtrcControlBackgroundCss;
//# sourceMappingURL=index.js.map