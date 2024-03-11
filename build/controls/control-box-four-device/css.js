/* Library */
import { isEmpty } from 'lodash';

/* Controls */
import { AtrcControlBoxFourShorthandCssOnly } from '../control-box-four/css';

/* Utils */
import AtrcAvailableDevices from '../../utils/available-devices';
import { AtrcUcFirst } from '../../utils/string';

/* Local */
var AtrcControlBoxFourDeviceCss = function AtrcControlBoxFourDeviceCss(_ref) {
  var value = _ref.value,
    property = _ref.property;
  var output = {};
  var boxFours = ['t', 'r', 'b', 'l'];
  if (!isEmpty(value)) {
    var avDevices = AtrcAvailableDevices();
    avDevices.forEach(function (deviceProps) {
      if (deviceProps.on) {
        var device = deviceProps.name;
        var deviceKey;
        var deviceVals = {};
        if (value[device]) {
          deviceVals.all = value[device];
        } else {
          boxFours.forEach(function (box) {
            deviceKey = device + AtrcUcFirst(box);
            if (value[deviceKey]) {
              deviceVals[box] = value[deviceKey];
            }
          });
        }
        if (!isEmpty(deviceVals)) {
          if (!output[device]) {
            output[device] = '';
          }
          output[device] += AtrcControlBoxFourShorthandCssOnly({
            value: deviceVals,
            property: property
          });
        }
      }
    });
  }
  return output;
};
export default AtrcControlBoxFourDeviceCss;
//# sourceMappingURL=css.js.map