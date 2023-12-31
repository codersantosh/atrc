"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _lodash = require("lodash");
var _controlPositionDevice = require("./../control-position-device");
var _css = _interopRequireDefault(require("./../control-position-device/css"));
var _availableTabs = _interopRequireDefault(require("../../utils/available-tabs"));
var _objectValuesWithAllowedKeysAndTabs = require("../../utils/object-values-with-allowed-keys-and-tabs");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*Library*/

/*Atrc*/

/*Local*/
var AtrcControlPositionDeviceTabCss = function AtrcControlPositionDeviceTabCss(value) {
  var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    pos: 'position',
    b: 'bottom',
    t: 'top',
    r: 'right',
    l: 'left'
  };
  var output = {};
  var tabKey;
  if (!(0, _lodash.isEmpty)(value)) {
    _availableTabs.default.forEach(function (tab) {
      if (_availableTabs.default.includes(tab)) {
        if ((0, _objectValuesWithAllowedKeysAndTabs.AtrcHasTabValues)(tab, value, _controlPositionDevice.AtrcControlPositionAllowedKeys)) {
          var posVal = (0, _objectValuesWithAllowedKeysAndTabs.AtrcGetTabValues)(value, tab, _controlPositionDevice.AtrcControlPositionAllowedKeys),
            posCss = (0, _css.default)(posVal, properties);
          if (!(0, _lodash.isEmpty)(posCss)) {
            (0, _lodash.forEach)(posCss, function (item, itemKey) {
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
var _default = exports.default = AtrcControlPositionDeviceTabCss;
//# sourceMappingURL=css.js.map