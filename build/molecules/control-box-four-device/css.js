"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _lodash = require("lodash");
var _availableDevices = _interopRequireDefault(require("../../utils/available-devices"));
var _string = require("./../../utils/string");
var _css = require("./../control-box-four/css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* Library */

/* Inbuilt */

var AtrcControlBoxFourDeviceCss = function AtrcControlBoxFourDeviceCss(_ref) {
  var value = _ref.value,
    property = _ref.property;
  var output = {};
  var boxFours = ['t', 'r', 'b', 'l'];
  if (!(0, _lodash.isEmpty)(value)) {
    _availableDevices.default.forEach(function (deviceProps) {
      if (deviceProps.on) {
        var device = deviceProps.name;
        var deviceKey;
        var deviceVals = {};
        if (value[device]) {
          deviceVals.all = value[device];
        } else {
          boxFours.forEach(function (box) {
            if (device === 'xs') {
              deviceKey = box;
            } else {
              deviceKey = device + (0, _string.AtrcUcFirst)(box);
            }
            if (value[deviceKey]) {
              deviceVals[box] = value[deviceKey];
            }
          });
        }
        if (!(0, _lodash.isEmpty)(deviceVals)) {
          if (!output[device]) {
            output[device] = '';
          }
          output[device] += (0, _css.AtrcControlBoxFourShorthandCssOnly)(deviceVals, property);
        }
      }
    });
  }
  return output;
};
var _default = exports.default = AtrcControlBoxFourDeviceCss;
//# sourceMappingURL=css.js.map