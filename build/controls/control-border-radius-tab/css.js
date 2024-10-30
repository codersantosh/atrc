import React from 'react';

/*Library*/
import { forEach, isEmpty } from 'lodash';

/* Controls */
import { AtrcControlBorderRadiusAllowedKeys } from '../control-border-radius';
import AtrcControlBorderRadiusCss from '../control-border-radius/css';

/* Utils */
import AtrcAvailableTabs from '../../utils/available-tabs';
import { AtrcGetTabValues, AtrcHasTabValues } from '../../utils/object-values-with-allowed-keys-and-tabs';
import { AtrcUcFirst } from '../../utils/string';

/*Local*/
var AtrcControlBorderRadiusTabCss = function AtrcControlBorderRadiusTabCss(value) {
  var property = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '--at-bdr-rad';
  var output = {};
  var tabKey;
  if (!isEmpty(value)) {
    AtrcAvailableTabs.forEach(function (tab) {
      if (AtrcHasTabValues(tab, value, AtrcControlBorderRadiusAllowedKeys)) {
        var bdrRadVal = AtrcGetTabValues(value, tab, AtrcControlBorderRadiusAllowedKeys);
        var bdrRadCss = AtrcControlBorderRadiusCss({
          value: bdrRadVal,
          property: property
        });
        if (!isEmpty(bdrRadCss)) {
          forEach(bdrRadCss, function (item, itemKey) {
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
  console.log(output);
  return output;
};
export default AtrcControlBorderRadiusTabCss;
//# sourceMappingURL=css.js.map