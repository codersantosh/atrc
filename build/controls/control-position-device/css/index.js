import React from 'react';

/*Library*/
import { forEach, isEmpty } from 'lodash';

/*Utils*/
import { AtrcDeviceCss, AtrcGetDeviceValues, AtrcHasDeviceValues } from '../../../utils/object-values-with-devices';

/*Local*/
var AtrcControlPositionDeviceCss = function AtrcControlPositionDeviceCss(_ref) {
  var value = _ref.value,
    _ref$properties = _ref.properties,
    properties = _ref$properties === void 0 ? {
      position: '--at-pos',
      bottom: '--at-b',
      top: '--at-t',
      right: '--at-r',
      left: '--at-l'
    } : _ref$properties;
  var innerOutput = {
    xs: '',
    sm: '',
    md: '',
    lg: '',
    xl: '',
    xxl: ''
  };
  if (!isEmpty(value)) {
    /* Position */
    if (AtrcHasDeviceValues(value, 'pos')) {
      var pos = AtrcGetDeviceValues(value, 'pos');
      var getCss = AtrcDeviceCss(pos, '', properties.position);
      forEach(getCss, function (item, itemKey) {
        if (!innerOutput[itemKey]) {
          innerOutput[itemKey] = '';
        }
        innerOutput[itemKey] += item;
      });
    }
    /* Top */
    if (AtrcHasDeviceValues(value, 't')) {
      var deviceVal = AtrcGetDeviceValues(value, 't');
      var _getCss = AtrcDeviceCss(deviceVal, '', properties.top);
      forEach(_getCss, function (item, itemKey) {
        if (!innerOutput[itemKey]) {
          innerOutput[itemKey] = '';
        }
        innerOutput[itemKey] += item;
      });
    }
    /* Right */
    if (AtrcHasDeviceValues(value, 'r')) {
      var _deviceVal = AtrcGetDeviceValues(value, 'r');
      var _getCss2 = AtrcDeviceCss(_deviceVal, '', properties.right);
      forEach(_getCss2, function (item, itemKey) {
        if (!innerOutput[itemKey]) {
          innerOutput[itemKey] = '';
        }
        innerOutput[itemKey] += item;
      });
    }

    /* Bottom */
    if (AtrcHasDeviceValues(value, 'b')) {
      var _deviceVal2 = AtrcGetDeviceValues(value, 'b');
      var _getCss3 = AtrcDeviceCss(_deviceVal2, '', properties.bottom);
      forEach(_getCss3, function (item, itemKey) {
        if (!innerOutput[itemKey]) {
          innerOutput[itemKey] = '';
        }
        innerOutput[itemKey] += item;
      });
    }

    /* Left */
    if (AtrcHasDeviceValues(value, 'l')) {
      var _deviceVal3 = AtrcGetDeviceValues(value, 'l');
      var _getCss4 = AtrcDeviceCss(_deviceVal3, '', properties.left);
      forEach(_getCss4, function (item, itemKey) {
        if (!innerOutput[itemKey]) {
          innerOutput[itemKey] = '';
        }
        innerOutput[itemKey] += item;
      });
    }
  }
  return innerOutput;
};
export default AtrcControlPositionDeviceCss;
//# sourceMappingURL=index.js.map