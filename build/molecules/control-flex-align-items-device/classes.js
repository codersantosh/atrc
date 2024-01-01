/*Library*/
import { isEmpty, isObject } from 'lodash';

/*Inbuilt*/
import AtrcAvailableDevices from '../../utils/available-devices';

/*Local*/
var AtrcControlFlexAlignItemsDeviceClasses = function AtrcControlFlexAlignItemsDeviceClasses(abStyle) {
  if (!abStyle || !abStyle.alItms) {
    return '';
  }
  var alItms = abStyle.alItms;
  if (!isObject(alItms)) return '';
  if (isEmpty(alItms)) return '';
  var classes = '';
  var avDevices = AtrcAvailableDevices();
  for (var i = 0; i < avDevices.length; i++) {
    var device = avDevices[i];
    if (!device.on) {
      continue;
    }
    if (alItms[device.name] && ['st', 'end', 'ctr', 'bsln', 'strh'].includes(alItms[device.name])) {
      if ('xs' === device.name) {
        classes += ' at-al-itm-' + alItms[device.name] + ' ';
      } else {
        classes += ' at-al-itm-' + device.name + '-' + alItms[device.name] + ' ';
      }
    }
  }
  return classes;
};
export default AtrcControlFlexAlignItemsDeviceClasses;
//# sourceMappingURL=classes.js.map