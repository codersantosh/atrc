"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _lodash = require("lodash");
var _availableTabs = _interopRequireDefault(require("../../utils/available-tabs"));
var _objectValuesWithAllowedKeysAndTabs = require("../../utils/object-values-with-allowed-keys-and-tabs");
var _controlBoxFourDevice = require("../control-box-four-device");
var _css = _interopRequireDefault(require("../control-box-four-device/css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*Library*/

/* Inbuilt */

/*Local*/
var AtrcControlBoxFourTabCss = function AtrcControlBoxFourTabCss(_ref) {
  var value = _ref.value,
    _ref$property = _ref.property,
    property = _ref$property === void 0 ? '' : _ref$property,
    _ref$direction = _ref.direction,
    direction = _ref$direction === void 0 ? true : _ref$direction;
  var output = {};
  var tabKey;
  if (!(0, _lodash.isEmpty)(value)) {
    _availableTabs.default.forEach(function (tab) {
      if (_availableTabs.default.includes(tab)) {
        if ((0, _objectValuesWithAllowedKeysAndTabs.AtrcHasTabValues)(tab, value, _controlBoxFourDevice.AtrcControlBoxFourDeviceAllowedKeys)) {
          var boxVal = (0, _objectValuesWithAllowedKeysAndTabs.AtrcGetTabValues)(value, tab, _controlBoxFourDevice.AtrcControlBoxFourDeviceAllowedKeys);
          var boxCss = (0, _css.default)({
            value: boxVal,
            property: property,
            direction: direction
          });
          if (!(0, _lodash.isEmpty)(boxCss)) {
            (0, _lodash.forEach)(boxCss, function (item, itemKey) {
              if (tab === 'normal') {
                tabKey = itemKey;
              } else {
                tabKey = itemKey + tab;
              }
              if (!output[tabKey]) {
                output[tabKey] = '';
              }
              output[tabKey] += item;
            });
          }
        }
      }
    });
  }
  return output;
};
var _default = exports.default = AtrcControlBoxFourTabCss;
//# sourceMappingURL=css.js.map