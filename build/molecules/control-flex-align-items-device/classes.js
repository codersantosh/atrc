"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _lodash = require("lodash");
var _availableDevices = _interopRequireDefault(require("../../utils/available-devices"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*Library*/

/*Inbuilt*/

/*Local*/
var AtrcControlFlexAlignItemsDeviceClasses = function AtrcControlFlexAlignItemsDeviceClasses(abStyle) {
  if (!abStyle || !abStyle.alItms) {
    return '';
  }
  var alItms = abStyle.alItms;
  if (!(0, _lodash.isObject)(alItms)) return '';
  if ((0, _lodash.isEmpty)(alItms)) return '';
  var classes = '';
  for (var i = 0; i < _availableDevices.default.length; i++) {
    var device = _availableDevices.default[i];
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
var _default = exports.default = AtrcControlFlexAlignItemsDeviceClasses;
//# sourceMappingURL=classes.js.map