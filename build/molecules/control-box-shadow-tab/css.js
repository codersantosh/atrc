/*Library*/
import { forEach, isEmpty } from 'lodash';

/* Inbuilt */
import AtrcAvailableTabs from '../../utils/available-tabs';
import { AtrcGetTabValues, AtrcHasTabValues } from '../../utils/object-values-with-allowed-keys-and-tabs';
import { AtrcControlBoxShadowAllowedKeys } from '../control-box-shadow';
import AtrcControlBoxShadowCss from '../control-box-shadow/css';

/*Local*/
const AtrcControlBoxShadowTabCss = (value, property = 'box-shadow') => {
  const output = {};
  let tabKey;
  if (!isEmpty(value)) {
    AtrcAvailableTabs.forEach(tab => {
      if (AtrcAvailableTabs.includes(tab)) {
        if (AtrcHasTabValues(tab, value, AtrcControlBoxShadowAllowedKeys)) {
          const boxVal = AtrcGetTabValues(value, tab, AtrcControlBoxShadowAllowedKeys);
          const boxCss = AtrcControlBoxShadowCss(boxVal, property);
          if (!isEmpty(boxCss)) {
            forEach(boxCss, (item, itemKey) => {
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
export default AtrcControlBoxShadowTabCss;
//# sourceMappingURL=css.js.map