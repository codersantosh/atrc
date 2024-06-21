import React from 'react';

/*Library*/
import { isEmpty, isObject } from 'lodash';

/*Utils*/
import AtrcAvailableDevices from '../../utils/available-devices';

/*Local*/
var AtrcControlFlexDirectionDeviceClasses = function AtrcControlFlexDirectionDeviceClasses(value) {
  if (!isObject(value) || isEmpty(value)) {
    return '';
  }
  var classes = '';
  var avDevices = AtrcAvailableDevices();
  for (var i = 0; i < avDevices.length; i++) {
    var device = avDevices[i];

    /* cannot disable xs, its global css/classes */
    if ('xs' === device.name) {
      if (value[device.name]) {
        switch (value[device.name]) {
          case 'row':
            classes += ' at-flx-row ';
            break;
          case 'col':
            classes += ' at-flx-col ';
            break;
          case 'rowRev':
            classes += ' at-flx-row-rev ';
            break;
          case 'colRev':
            classes += ' at-flx-col-rev ';
            break;
          default:
            break;
        }
      }
    } else {
      if (!device.on) {
        continue;
      }
      if (value[device.name]) {
        switch (value[device.name]) {
          case 'row':
            classes += ' at-flx-' + device.name + '-row ';
            break;
          case 'col':
            classes += ' at-flx-' + device.name + '-col ';
            break;
          case 'rowRev':
            classes += ' at-flx-' + device.name + '-row-rev ';
            break;
          case 'colRev':
            classes += ' at-flx-' + device.name + '-col-rev ';
            break;
          default:
            break;
        }
      }
    }
  }
  return classes;
};
export default AtrcControlFlexDirectionDeviceClasses;
//# sourceMappingURL=classes.js.map