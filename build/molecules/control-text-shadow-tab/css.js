"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _lodash = require("lodash");
var _availableTabs = _interopRequireDefault(require("../../utils/available-tabs"));
var _objectValuesWithAllowedKeysAndTabs = require("../../utils/object-values-with-allowed-keys-and-tabs");
var _controlTextShadow = require("../control-text-shadow");
var _css = _interopRequireDefault(require("../control-text-shadow/css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*Library*/

/* Inbuilt */

/*Local*/
var AtrcControlTextShadowTabCss = function AtrcControlTextShadowTabCss(value) {
  var property = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'text-shadow';
  var output = {};
  var tabKey;
  if (!(0, _lodash.isEmpty)(value)) {
    _availableTabs.default.forEach(function (tab) {
      if (_availableTabs.default.includes(tab)) {
        if ((0, _objectValuesWithAllowedKeysAndTabs.AtrcHasTabValues)(tab, value, _controlTextShadow.AtrcControlTextShadowAllowedKeys)) {
          var textVal = (0, _objectValuesWithAllowedKeysAndTabs.AtrcGetTabValues)(value, tab, _controlTextShadow.AtrcControlTextShadowAllowedKeys);
          var textCss = (0, _css.default)(textVal, property);
          if (!(0, _lodash.isEmpty)(textCss)) {
            (0, _lodash.forEach)(textCss, function (item, itemKey) {
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
var _default = exports.default = AtrcControlTextShadowTabCss;
//# sourceMappingURL=css.js.map