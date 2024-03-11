/*Library*/
import { forEach, isEmpty } from 'lodash';

/* Controls */
import { AtrcControlBoxShadowAllowedKeys } from '../control-box-shadow';
import AtrcControlBoxShadowCss from '../control-box-shadow/css';

/* Utils */
import AtrcAvailableTabs from '../../utils/available-tabs';
import { AtrcGetTabValues, AtrcHasTabValues } from '../../utils/object-values-with-allowed-keys-and-tabs';
import { AtrcUcFirst } from './../../utils/string';

/*Local*/
var AtrcControlBoxShadowTabCss = function AtrcControlBoxShadowTabCss(value) {
  var property = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '--at-box-sdw';
  var output = {};
  var tabKey;
  if (!isEmpty(value)) {
    AtrcAvailableTabs.forEach(function (tab) {
      if (AtrcHasTabValues(tab, value, AtrcControlBoxShadowAllowedKeys)) {
        var boxVal = AtrcGetTabValues(value, tab, AtrcControlBoxShadowAllowedKeys);
        var boxCss = AtrcControlBoxShadowCss(boxVal, property);
        if (!isEmpty(boxCss)) {
          forEach(boxCss, function (item, itemKey) {
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
export default AtrcControlBoxShadowTabCss;
//# sourceMappingURL=css.js.map