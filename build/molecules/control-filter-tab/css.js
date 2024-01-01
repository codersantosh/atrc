/*Library*/
import { forEach, isEmpty } from 'lodash';

/* Inbuilt */

import AtrcAvailableTabs from '../../utils/available-tabs';
import { AtrcGetTabValues, AtrcHasTabValues } from '../../utils/object-values-with-allowed-keys-and-tabs';
import { AtrcControlFilterAllowedKeys } from '../control-filter';
import AtrcControlFilterCss from '../control-filter/css';

/*Local*/
var AtrcControlFilterTabCss = function AtrcControlFilterTabCss(value) {
  var property = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'filter';
  var output = {};
  var tabKey;
  if (!isEmpty(value)) {
    AtrcAvailableTabs.forEach(function (tab) {
      if (AtrcAvailableTabs.includes(tab)) {
        if (AtrcHasTabValues(tab, value, AtrcControlFilterAllowedKeys)) {
          var typVal = AtrcGetTabValues(value, tab, AtrcControlFilterAllowedKeys),
            typCss = AtrcControlFilterCss(typVal, property);
          if (typCss && !isEmpty(typCss)) {
            forEach(typCss, function (item, itemKey) {
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
export default AtrcControlFilterTabCss;
//# sourceMappingURL=css.js.map