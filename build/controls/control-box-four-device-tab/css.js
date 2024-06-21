import React from 'react';

/*Library*/
import { forEach, isEmpty } from 'lodash';

/* Controls */
import { AtrcControlBoxFourDeviceAllowedKeys } from '../control-box-four-device';
import AtrcControlBoxFourDeviceCss from '../control-box-four-device/css';

/* Utils */
import AtrcAvailableTabs from '../../utils/available-tabs';
import { AtrcUcFirst } from './../../utils/string';
import { AtrcGetTabValues, AtrcHasTabValues } from '../../utils/object-values-with-allowed-keys-and-tabs';

/*Local*/
var AtrcControlBoxFourDeviceTabCss = function AtrcControlBoxFourDeviceTabCss(_ref) {
  var value = _ref.value,
    _ref$property = _ref.property,
    property = _ref$property === void 0 ? '' : _ref$property,
    _ref$direction = _ref.direction,
    direction = _ref$direction === void 0 ? true : _ref$direction;
  var output = {};
  var tabKey;
  if (!isEmpty(value)) {
    AtrcAvailableTabs.forEach(function (tab) {
      if (AtrcAvailableTabs.includes(tab)) {
        if (AtrcHasTabValues(tab, value, AtrcControlBoxFourDeviceAllowedKeys)) {
          var boxVal = AtrcGetTabValues(value, tab, AtrcControlBoxFourDeviceAllowedKeys);
          var boxCss = AtrcControlBoxFourDeviceCss({
            value: boxVal,
            property: property,
            direction: direction
          });
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
      }
    });
  }
  return output;
};
export default AtrcControlBoxFourDeviceTabCss;
//# sourceMappingURL=css.js.map