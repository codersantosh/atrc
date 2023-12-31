/*Library*/
import { forEach, isEmpty } from 'lodash';

/* Inbuilt */
import AtrcAvailableTabs from '../../utils/available-tabs';
import { AtrcGetTabValues, AtrcHasTabValues } from '../../utils/object-values-with-allowed-keys-and-tabs';
import { AtrcControlBorderAllowedKeys } from '../control-border';
import AtrcControlBorderCss from '../control-border/css';

/*Local*/
const AtrcControlBorderTabCss = (value, properties = {
  bdrCl: 'border-color',
  bdrSty: 'border-style',
  bdrW: 'border-width'
}) => {
  const output = {};
  let tabKey;
  if (!isEmpty(value)) {
    AtrcAvailableTabs.forEach(tab => {
      if (AtrcAvailableTabs.includes(tab)) {
        if (AtrcHasTabValues(tab, value, AtrcControlBorderAllowedKeys)) {
          const boxVal = AtrcGetTabValues(value, tab, AtrcControlBorderAllowedKeys);
          const boxCss = AtrcControlBorderCss(boxVal, properties);
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
export default AtrcControlBorderTabCss;
//# sourceMappingURL=css.js.map