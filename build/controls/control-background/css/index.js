/*Library*/
import { forEach, isEmpty } from 'lodash';

/*Control*/
import { AtrcControlColorGradientTabCssBg } from '../../control-dropdown-color-gradient-tab/css';

/* Internal */
import BgImage from './bg-image';

/*Local*/
var AtrcControlBackgroundCss = function AtrcControlBackgroundCss(_ref) {
  var value = _ref.value,
    _ref$properties = _ref.properties,
    properties = _ref$properties === void 0 ? {
      backgroundAttachment: '--at-bg-atch',
      backgroundBlendMode: '--at-bg-blend-mode',
      backgroundPosition: '--at-bg-pos',
      backgroundRepeat: '--at-bg-rpt',
      backgroundSize: '--at-bg-sz',
      backgroundImage: '--at-bg-img',
      backgroundColor: '--at-bg-cl'
    } : _ref$properties;
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
    var bgCss = AtrcControlColorGradientTabCssBg({
      value: {
        cl: value.bgCl,
        clHover: value.bgClHover,
        clActive: value.bgClActive,
        grd: value.bgGrd,
        grdHover: value.bgGrdHover,
        grdActive: value.bgGrdActive
      },
      properties: {
        color: properties.backgroundColor,
        gradient: properties.backgroundImage
      }
    });
    forEach(bgCss, function (item, itemKey) {
      if (!innerOutput[itemKey]) {
        innerOutput[itemKey] = '';
      }
      innerOutput[itemKey] += item;
    });
    innerOutput = BgImage(value, innerOutput, properties);
  }
  return innerOutput;
};
export default AtrcControlBackgroundCss;
//# sourceMappingURL=index.js.map