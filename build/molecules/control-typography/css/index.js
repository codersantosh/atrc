/*Library*/
import { forEach, isEmpty } from 'lodash';

/*Inbuilt*/
import { AtrcTabCss } from './../../../utils/object-values-with-allowed-keys-and-tabs';
import { AtrcDeviceCss } from '../../../utils/object-values-with-devices';

/*Local*/
var AtrcControlTypographyCss = function AtrcControlTypographyCss(value) {
  var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    fntSz: 'font-size',
    fntFam: 'font-family',
    fntWt: 'font-weight',
    fntSty: 'font-style',
    txtDec: 'text-decoration',
    txtTf: 'text-transform',
    lnH: 'line-height',
    ltrSp: 'letter-spacing'
  };
  var output = {
    xs: '',
    sm: '',
    md: '',
    lg: '',
    xl: '',
    xxl: ''
  };
  if (value && !isEmpty(value)) {
    var fntSzCss = AtrcDeviceCss(value, 'fntSz', properties.fntSz);
    if (fntSzCss && !isEmpty(fntSzCss)) {
      forEach(fntSzCss, function (item, itemKey) {
        output[itemKey] += item;
      });
    }
    var fntFamCss = AtrcTabCss(value, 'fntFam', properties.fntFam);
    if (fntFamCss && !isEmpty(fntFamCss)) {
      forEach(fntFamCss, function (item, itemKey) {
        output[itemKey] += item;
      });
    }
    var fntWtCss = AtrcTabCss(value, 'fntWt', properties.fntWt);
    if (fntWtCss && !isEmpty(fntWtCss)) {
      forEach(fntWtCss, function (item, itemKey) {
        output[itemKey] += item;
      });
    }
    var fntStyCss = AtrcTabCss(value, 'fntSty', properties.fntSty);
    if (fntStyCss && !isEmpty(fntStyCss)) {
      forEach(fntStyCss, function (item, itemKey) {
        output[itemKey] += item;
      });
    }
    var txtDecCss = AtrcTabCss(value, 'txtDec', properties.txtDec);
    if (txtDecCss && !isEmpty(txtDecCss)) {
      forEach(txtDecCss, function (item, itemKey) {
        output[itemKey] += item;
      });
    }
    var txtTfCss = AtrcTabCss(value, 'txtTf', properties.txtTf);
    if (txtTfCss && !isEmpty(txtTfCss)) {
      forEach(txtTfCss, function (item, itemKey) {
        output[itemKey] += item;
      });
    }
    var lnHCss = AtrcDeviceCss(value, 'lnH', properties.lnH);
    if (lnHCss && !isEmpty(lnHCss)) {
      forEach(lnHCss, function (item, itemKey) {
        output[itemKey] += item;
      });
    }
    var ltrSpCss = AtrcDeviceCss(value, 'ltrSp', properties.ltrSp);
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