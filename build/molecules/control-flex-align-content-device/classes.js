/*Library*/
import { isEmpty, isObject } from 'lodash';

/*Inbuilt*/
import AtrcAvailableDevices from '../../utils/available-devices';

/*Local*/
var AtrcControlFlexAlignContentDeviceClasses = function AtrcControlFlexAlignContentDeviceClasses(abStyle) {
  if (!abStyle || !abStyle.alCont) {
    return '';
  }
  var alCont = abStyle.alCont;
  if (!isObject(alCont)) return '';
  if (isEmpty(alCont)) return '';
  var classes = '';
  var avDevices = AtrcAvailableDevices();
  for (var i = 0; i < avDevices.length; i++) {
    var device = avDevices[i];
    if (!device.on) {
      continue;
    }
    if (alCont[device.name] && ['st', 'end', 'ctr', 'btw', 'ard', 'strh'].includes(alCont[device.name])) {
      if ('xs' === device.name) {
        classes += ' at-al-cont-' + alCont[device.name] + ' ';
      } else {
        classes += ' at-al-cont-' + device.name + '-' + alCont[device.name] + ' ';
      }
    }
  }
  return classes;
};
export default AtrcControlFlexAlignContentDeviceClasses;
//# sourceMappingURL=classes.js.map