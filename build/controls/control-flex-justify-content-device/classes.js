/*Library*/
import { isEmpty, isObject } from 'lodash';

/*Utils*/
import AtrcAvailableDevices from '../../utils/available-devices';

/*Local*/
var AtrcControlFlexJustifyContentDeviceClasses = function AtrcControlFlexJustifyContentDeviceClasses(value) {
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
    if (value[device.name] && ['st', 'end', 'ctr', 'btw', 'ard', 'evnly'].includes(value[device.name])) {
      if ('xs' === device.name) {
        classes += ' at-jfy-cont-' + value[device.name] + ' ';
      } else {
        classes += ' at-jfy-cont-' + device.name + '-' + value[device.name] + ' ';
      }
    }
  }
  return classes;
};
export default AtrcControlFlexJustifyContentDeviceClasses;
//# sourceMappingURL=classes.js.map