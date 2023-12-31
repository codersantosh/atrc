/*Library*/
import { forEach, isEmpty } from 'lodash';
import AtrcAvailableTabs from '../../utils/available-tabs';
import { AtrcGetTabValues, AtrcHasTabValues } from '../../utils/object-values-with-allowed-keys-and-tabs';
import { AtrcControlTypographyAllowedKeys } from '../control-typography';
import AtrcControlTypographyCss from '../control-typography/css';

/*Local*/
const AtrcControlTypographyTabCss = (value, properties = {
  fntSz: 'font-size',
  fntWt: 'font-weight',
  fntSty: 'font-style',
  txtDec: 'text-decoration',
  txtTf: 'text-transform',
  lnH: 'line-height',
  ltrSp: 'letter-spacing'
}) => {
  const output = {};
  let tabKey;
  if (!isEmpty(value)) {
    AtrcAvailableTabs.forEach(tab => {
      if (AtrcAvailableTabs.includes(tab)) {
        if (AtrcHasTabValues(tab, value, AtrcControlTypographyAllowedKeys)) {
          const typVal = AtrcGetTabValues(value, tab, AtrcControlTypographyAllowedKeys),
            typCss = AtrcControlTypographyCss(typVal, properties);
          if (typCss && !isEmpty(typCss)) {
            forEach(typCss, (item, itemKey) => {
              if (tab === 'normal') {
                tabKey = itemKey;
              } else {
                tabKey = itemKey + tab;
              }
              if (!output[tabKey]) {
                output[tabKey] = '';
              }
              output[tabKey] += item;
            });
          }
        }
      }
    });
  }
  return output;
};
export default AtrcControlTypographyTabCss;
//# sourceMappingURL=css.js.map