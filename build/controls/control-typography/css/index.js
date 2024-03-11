/*Library*/
import { forEach, isEmpty } from 'lodash';

/*Utils*/
import { AtrcTabCss } from '../../../utils/object-values-with-allowed-keys-and-tabs';
import { AtrcDeviceCss } from '../../../utils/object-values-with-devices';

/*Local*/
var AtrcControlTypographyCss = function AtrcControlTypographyCss(_ref) {
  var value = _ref.value,
    _ref$properties = _ref.properties,
    properties = _ref$properties === void 0 ? {
      fontSize: '--at-fnt-sz',
      fontFamily: '--at-fnt-wt',
      fontWeight: '--at-fnt-fam',
      fontStyle: '--at-fnt-sty',
      textDecoration: '--at-txt-tf',
      textTransform: '--at-txt-dec',
      lineHeight: '--at-ln-h',
      letterSpacing: '--at-ltr-sp'
    } : _ref$properties;
  var output = {
    xs: '',
    sm: '',
    md: '',
    lg: '',
    xl: '',
    xxl: '',
    xsHover: '',
    smHover: '',
    mdHover: '',
    lgHover: '',
    xlHover: '',
    xxlHover: ''
  };
  if (value && !isEmpty(value)) {
    var fntSzCss = AtrcDeviceCss(value, 'fntSz', properties.fontSize);
    if (fntSzCss && !isEmpty(fntSzCss)) {
      forEach(fntSzCss, function (item, itemKey) {
        output[itemKey] += item;
      });
    }
    var fntFamCss = AtrcTabCss(value, 'fntFam', properties.fontFamily);
    if (fntFamCss && !isEmpty(fntFamCss)) {
      forEach(fntFamCss, function (item, itemKey) {
        output[itemKey] += item;
      });
    }
    var fntWtCss = AtrcTabCss(value, 'fntWt', properties.fontWeight);
    if (fntWtCss && !isEmpty(fntWtCss)) {
      forEach(fntWtCss, function (item, itemKey) {
        output[itemKey] += item;
      });
    }
    var fntStyCss = AtrcTabCss(value, 'fntSty', properties.fontStyle);
    if (fntStyCss && !isEmpty(fntStyCss)) {
      forEach(fntStyCss, function (item, itemKey) {
        output[itemKey] += item;
      });
    }
    var txtDecCss = AtrcTabCss(value, 'txtDec', properties.textDecoration);
    if (txtDecCss && !isEmpty(txtDecCss)) {
      forEach(txtDecCss, function (item, itemKey) {
        output[itemKey] += item;
      });
    }
    var txtTfCss = AtrcTabCss(value, 'txtTf', properties.textTransform);
    if (txtTfCss && !isEmpty(txtTfCss)) {
      forEach(txtTfCss, function (item, itemKey) {
        output[itemKey] += item;
      });
    }
    var lnHCss = AtrcDeviceCss(value, 'lnH', properties.lineHeight);
    if (lnHCss && !isEmpty(lnHCss)) {
      forEach(lnHCss, function (item, itemKey) {
        output[itemKey] += item;
      });
    }
    var ltrSpCss = AtrcDeviceCss(value, 'ltrSp', properties.letterSpacing);
    if (ltrSpCss && !isEmpty(ltrSpCss)) {
      forEach(ltrSpCss, function (item, itemKey) {
        output[itemKey] += item;
      });
    }
  }
  return output;
};
export default AtrcControlTypographyCss;
//# sourceMappingURL=index.js.map