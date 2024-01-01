/*Library*/
import { isEmpty, isObject } from 'lodash';

/*Inbuilt*/
import AtrcAvailableDevices from '../../utils/available-devices';

/*Local*/
var AtrcControlFlexJustifyContentDeviceClasses = function AtrcControlFlexJustifyContentDeviceClasses(abStyle) {
  if (!abStyle || !abStyle.jfyCont) {
    return '';
  }
  var jfyCont = abStyle.jfyCont;
  if (!isObject(jfyCont)) return '';
  if (isEmpty(jfyCont)) return '';
  var classes = '';
  var avDevices = AtrcAvailableDevices();
  for (var i = 0; i < avDevices.length; i++) {
    var device = avDevices[i];
    if (!device.on) {
      continue;
    }
    if (jfyCont[device.name] && ['st', 'end', 'ctr', 'btw', 'ard', 'evnly'].includes(jfyCont[device.name])) {
      if ('xs' === device.name) {
        classes += ' at-jfy-cont-' + jfyCont[device.name] + ' ';
      } else {
        classes += ' at-jfy-cont-' + device.name + '-' + jfyCont[device.name] + ' ';
      }
    }
  }
  return classes;
};
export default AtrcControlFlexJustifyContentDeviceClasses;
//# sourceMappingURL=classes.js.map