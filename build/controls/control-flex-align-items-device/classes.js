/*Library*/
import { isEmpty, isObject } from 'lodash';

/*Inbuilt*/
import AtrcAvailableDevices from '../../utils/available-devices';

/*Local*/
var AtrcControlFlexAlignItemsDeviceClasses = function AtrcControlFlexAlignItemsDeviceClasses(value) {
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
    if (value[device.name] && ['st', 'end', 'ctr', 'bsln', 'strh'].includes(value[device.name])) {
      if ('xs' === device.name) {
        classes += ' at-al-itm-' + value[device.name] + ' ';
      } else {
        classes += ' at-al-itm-' + device.name + '-' + value[device.name] + ' ';
      }
    }
  }
  return classes;
};
export default AtrcControlFlexAlignItemsDeviceClasses;
//# sourceMappingURL=classes.js.map