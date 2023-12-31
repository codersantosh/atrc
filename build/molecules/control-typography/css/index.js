/*Library*/
import { forEach, isEmpty } from 'lodash';

/*Inbuilt*/
import { AtrcTabCss } from './../../../utils/object-values-with-allowed-keys-and-tabs';
import { AtrcDeviceCss } from '../../../utils/object-values-with-devices';

/*Local*/
const AtrcControlTypographyCss = (value, properties = {
  fntSz: 'font-size',
  fntFam: 'font-family',
  fntWt: 'font-weight',
  fntSty: 'font-style',
  txtDec: 'text-decoration',
  txtTf: 'text-transform',
  lnH: 'line-height',
  ltrSp: 'letter-spacing'
}) => {
  const output = {
    xs: '',
    sm: '',
    md: '',
    lg: '',
    xl: '',
    xxl: ''
  };
  if (value && !isEmpty(value)) {
    const fntSzCss = AtrcDeviceCss(value, 'fntSz', properties.fntSz);
    if (fntSzCss && !isEmpty(fntSzCss)) {
      forEach(fntSzCss, (item, itemKey) => {
        output[itemKey] += item;
      });
    }
    const fntFamCss = AtrcTabCss(value, 'fntFam', properties.fntFam);
    if (fntFamCss && !isEmpty(fntFamCss)) {
      forEach(fntFamCss, (item, itemKey) => {
        output[itemKey] += item;
      });
    }
    const fntWtCss = AtrcTabCss(value, 'fntWt', properties.fntWt);
    if (fntWtCss && !isEmpty(fntWtCss)) {
      forEach(fntWtCss, (item, itemKey) => {
        output[itemKey] += item;
      });
    }
    const fntStyCss = AtrcTabCss(value, 'fntSty', properties.fntSty);
    if (fntStyCss && !isEmpty(fntStyCss)) {
      forEach(fntStyCss, (item, itemKey) => {
        output[itemKey] += item;
      });
    }
    const txtDecCss = AtrcTabCss(value, 'txtDec', properties.txtDec);
    if (txtDecCss && !isEmpty(txtDecCss)) {
      forEach(txtDecCss, (item, itemKey) => {
        output[itemKey] += item;
      });
    }
    const txtTfCss = AtrcTabCss(value, 'txtTf', properties.txtTf);
    if (txtTfCss && !isEmpty(txtTfCss)) {
      forEach(txtTfCss, (item, itemKey) => {
        output[itemKey] += item;
      });
    }
    const lnHCss = AtrcDeviceCss(value, 'lnH', properties.lnH);
    if (lnHCss && !isEmpty(lnHCss)) {
      forEach(lnHCss, (item, itemKey) => {
        output[itemKey] += item;
      });
    }
    const ltrSpCss = AtrcDeviceCss(value, 'ltrSp', properties.ltrSp);
    if (ltrSpCss && !isEmpty(ltrSpCss)) {
      forEach(ltrSpCss, (item, itemKey) => {
        output[itemKey] += item;
      });
    }
  }
  return output;
};
export default AtrcControlTypographyCss;
//# sourceMappingURL=index.js.map