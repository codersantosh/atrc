/*Library*/
import { isEmpty, isObject } from 'lodash';

/*Inbuilt*/
import AtrcAvailableDevices from '../../utils/available-devices';

/*Local*/
var AtrcControlTextAlignClasses = function AtrcControlTextAlignClasses(abStyle) {
  if (!abStyle || !abStyle.txtAl) {
    return '';
  }
  var textAlign = abStyle.txtAl;
  if (!isObject(textAlign)) return '';
  if (isEmpty(textAlign)) return '';
  var avDevices = AtrcAvailableDevices();
  for (var i = 0; i < avDevices.length; i++) {
    var device = avDevices[i];
    if (!device.on) {
      continue;
    }
    if (textAlign[device.name]) {
      return 'at-txt-al';
    }
  }
  return '';
};
export default AtrcControlTextAlignClasses;
//# sourceMappingURL=classes.js.map