/*Library*/
import { forEach, isEmpty } from 'lodash';
import AtrcAvailableTabs from '../../utils/available-tabs';
import { AtrcGetTabValues, AtrcHasTabValues } from '../../utils/object-values-with-allowed-keys-and-tabs';
import { AtrcControlBorderRadiusAllowedKeys } from '../control-border-radius';
import AtrcControlBorderRadiusCss from '../control-border-radius/css';

/*Local*/
var AtrcControlBorderRadiusTabCss = function AtrcControlBorderRadiusTabCss(value) {
  var property = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'border-radius';
  var output = {};
  var tabKey;
  if (!isEmpty(value)) {
    AtrcAvailableTabs.forEach(function (tab) {
      if (AtrcAvailableTabs.includes(tab)) {
        if (AtrcHasTabValues(tab, value, AtrcControlBorderRadiusAllowedKeys)) {
          var bdrRadVal = AtrcGetTabValues(value, tab, AtrcControlBorderRadiusAllowedKeys);
          var bdrRadCss = AtrcControlBorderRadiusCss(bdrRadVal, property);
          if (!isEmpty(bdrRadCss)) {
            forEach(bdrRadCss, function (item, itemKey) {
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