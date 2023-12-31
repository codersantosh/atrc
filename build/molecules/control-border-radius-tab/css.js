"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _lodash = require("lodash");
var _availableTabs = _interopRequireDefault(require("../../utils/available-tabs"));
var _objectValuesWithAllowedKeysAndTabs = require("../../utils/object-values-with-allowed-keys-and-tabs");
var _controlBorderRadius = require("../control-border-radius");
var _css = _interopRequireDefault(require("../control-border-radius/css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*Library*/

/*Local*/
var AtrcControlBorderRadiusTabCss = function AtrcControlBorderRadiusTabCss(value) {
  var property = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'border-radius';
  var output = {};
  var tabKey;
  if (!(0, _lodash.isEmpty)(value)) {
    _availableTabs.default.forEach(function (tab) {
      if (_availableTabs.default.includes(tab)) {
        if ((0, _objectValuesWithAllowedKeysAndTabs.AtrcHasTabValues)(tab, value, _controlBorderRadius.AtrcControlBorderRadiusAllowedKeys)) {
          var bdrRadVal = (0, _objectValuesWithAllowedKeysAndTabs.AtrcGetTabValues)(value, tab, _controlBorderRadius.AtrcControlBorderRadiusAllowedKeys);
          var bdrRadCss = (0, _css.default)(bdrRadVal, property);
          if (!(0, _lodash.isEmpty)(bdrRadCss)) {
            (0, _lodash.forEach)(bdrRadCss, function (item, itemKey) {
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
var _default = exports.default = AtrcControlBorderRadiusTabCss;
//# sourceMappingURL=css.js.map