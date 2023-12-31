/*Library*/
import { isEmpty, forEach } from 'lodash';

/*Atrc*/
import { AtrcControlPositionAllowedKeys } from './../control-position-device';
import AtrcControlPositionDeviceCss from './../control-position-device/css';
import AtrcAvailableTabs from '../../utils/available-tabs';
import { AtrcGetTabValues, AtrcHasTabValues } from '../../utils/object-values-with-allowed-keys-and-tabs';

/*Local*/
const AtrcControlPositionDeviceTabCss = (value, properties = {
  pos: 'position',
  b: 'bottom',
  t: 'top',
  r: 'right',
  l: 'left'
}) => {
  const output = {};
  let tabKey;
  if (!isEmpty(value)) {
    AtrcAvailableTabs.forEach(tab => {
      if (AtrcAvailableTabs.includes(tab)) {
        if (AtrcHasTabValues(tab, value, AtrcControlPositionAllowedKeys)) {
          const posVal = AtrcGetTabValues(value, tab, AtrcControlPositionAllowedKeys),
            posCss = AtrcControlPositionDeviceCss(posVal, properties);
          if (!isEmpty(posCss)) {
            forEach(posCss, (item, itemKey) => {
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
export default AtrcControlPositionDeviceTabCss;
//# sourceMappingURL=css.js.map