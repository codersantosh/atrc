/*Library*/
import { isEmpty, forEach } from 'lodash';

/*Controls*/
import { AtrcControlPositionAllowedKeys } from '../control-position-device';
import AtrcControlPositionDeviceCss from '../control-position-device/css';

/* Utils */
import AtrcAvailableTabs from '../../utils/available-tabs';
import { AtrcGetTabValues, AtrcHasTabValues } from '../../utils/object-values-with-allowed-keys-and-tabs';
import { AtrcUcFirst } from './../../utils/string';

/*Local*/
var AtrcControlPositionDeviceTabCss = function AtrcControlPositionDeviceTabCss(_ref) {
  var value = _ref.value,
    _ref$properties = _ref.properties,
    properties = _ref$properties === void 0 ? {
      position: '--at-pos',
      bottom: '--at-b',
      top: '--at-t',
      right: '--at-r',
      left: '--at-l'
    } : _ref$properties;
  var output = {};
  var tabKey;
  if (!isEmpty(value)) {
    AtrcAvailableTabs.forEach(function (tab) {
      if (AtrcHasTabValues(tab, value, AtrcControlPositionAllowedKeys)) {
        var posVal = AtrcGetTabValues(value, tab, AtrcControlPositionAllowedKeys),
          posCss = AtrcControlPositionDeviceCss({
            value: posVal,
            properties: properties
          });
        if (!isEmpty(posCss)) {
          forEach(posCss, function (item, itemKey) {
            if (tab === 'normal') {
              tabKey = itemKey;
            } else {
              tabKey = itemKey + AtrcUcFirst(tab);
            }
            if (!output[tabKey]) {
              output[tabKey] = '';
            }
            output[tabKey] += item;
          });
        }
      }
    });
  }
  return output;
};
export default AtrcControlPositionDeviceTabCss;
//# sourceMappingURL=css.js.map