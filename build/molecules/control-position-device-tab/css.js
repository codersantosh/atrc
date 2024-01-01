/*Library*/
import { isEmpty, forEach } from 'lodash';

/*Atrc*/
import { AtrcControlPositionAllowedKeys } from './../control-position-device';
import AtrcControlPositionDeviceCss from './../control-position-device/css';
import AtrcAvailableTabs from '../../utils/available-tabs';
import { AtrcGetTabValues, AtrcHasTabValues } from '../../utils/object-values-with-allowed-keys-and-tabs';

/*Local*/
var AtrcControlPositionDeviceTabCss = function AtrcControlPositionDeviceTabCss(value) {
  var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    pos: 'position',
    b: 'bottom',
    t: 'top',
    r: 'right',
    l: 'left'
  };
  var output = {};
  var tabKey;
  if (!isEmpty(value)) {
    AtrcAvailableTabs.forEach(function (tab) {
      if (AtrcAvailableTabs.includes(tab)) {
        if (AtrcHasTabValues(tab, value, AtrcControlPositionAllowedKeys)) {
          var posVal = AtrcGetTabValues(value, tab, AtrcControlPositionAllowedKeys),
            posCss = AtrcControlPositionDeviceCss(posVal, properties);
          if (!isEmpty(posCss)) {
            forEach(posCss, function (item, itemKey) {
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