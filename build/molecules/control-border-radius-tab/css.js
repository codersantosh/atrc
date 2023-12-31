/*Library*/
import { forEach, isEmpty } from 'lodash';
import AtrcAvailableTabs from '../../utils/available-tabs';
import { AtrcGetTabValues, AtrcHasTabValues } from '../../utils/object-values-with-allowed-keys-and-tabs';
import { AtrcControlBorderRadiusAllowedKeys } from '../control-border-radius';
import AtrcControlBorderRadiusCss from '../control-border-radius/css';

/*Local*/
const AtrcControlBorderRadiusTabCss = (value, property = 'border-radius') => {
  const output = {};
  let tabKey;
  if (!isEmpty(value)) {
    AtrcAvailableTabs.forEach(tab => {
      if (AtrcAvailableTabs.includes(tab)) {
        if (AtrcHasTabValues(tab, value, AtrcControlBorderRadiusAllowedKeys)) {
          const bdrRadVal = AtrcGetTabValues(value, tab, AtrcControlBorderRadiusAllowedKeys);
          const bdrRadCss = AtrcControlBorderRadiusCss(bdrRadVal, property);
          if (!isEmpty(bdrRadCss)) {
            forEach(bdrRadCss, (item, itemKey) => {
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
export default AtrcControlBorderRadiusTabCss;
//# sourceMappingURL=css.js.map