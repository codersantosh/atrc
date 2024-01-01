/*Library*/
import { isEmpty, isObject } from 'lodash';

/*Inbuilt*/
import AtrcAvailableDevices from '../../utils/available-devices';

/*Local*/
var AtrcControlFlexAlignSelfDeviceClasses = function AtrcControlFlexAlignSelfDeviceClasses(abStyle) {
  if (!abStyle || !abStyle.alSlf) {
    return '';
  }
  var alSlf = abStyle.alSlf;
  if (!isObject(alSlf)) return '';
  if (isEmpty(alSlf)) return '';
  var classes = '';
  var avDevices = AtrcAvailableDevices();
  for (var i = 0; i < avDevices.length; i++) {
    var device = avDevices[i];
    if (!device.on) {
      continue;
    }
    if (alSlf[device.name] && ['st', 'end', 'ctr', 'bsln', 'strh'].includes(alSlf[device.name])) {
      if ('xs' === device.name) {
        classes += ' at-al-slf-' + alSlf[device.name] + ' ';
      } else {
        classes += ' at-al-slf-' + device.name + '-' + alSlf[device.name] + ' ';
      }
    }
  }
  return classes;
};
export default AtrcControlFlexAlignSelfDeviceClasses;
//# sourceMappingURL=classes.js.map