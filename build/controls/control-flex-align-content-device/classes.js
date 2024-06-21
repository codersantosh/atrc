import React from 'react';

/*Library*/
import { isEmpty, isObject } from 'lodash';

/*Utils*/
import AtrcAvailableDevices from '../../utils/available-devices';

/*Local*/
var AtrcControlFlexAlignContentDeviceClasses = function AtrcControlFlexAlignContentDeviceClasses(value) {
  if (!isObject(value) || isEmpty(value)) {
    return '';
  }
  var classes = '';
  var avDevices = AtrcAvailableDevices();
  for (var i = 0; i < avDevices.length; i++) {
    var device = avDevices[i];
    if (!device.on) {
      continue;
    }
    if (value[device.name] && ['st', 'end', 'ctr', 'btw', 'ard', 'strh'].includes(value[device.name])) {
      if ('xs' === device.name) {
        classes += ' at-al-cont-' + value[device.name] + ' ';
      } else {
        classes += ' at-al-cont-' + device.name + '-' + value[device.name] + ' ';
      }
    }
  }
  return classes;
};
export default AtrcControlFlexAlignContentDeviceClasses;
//# sourceMappingURL=classes.js.map