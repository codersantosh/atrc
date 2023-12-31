"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _lodash = require("lodash");
var _availableTabs = _interopRequireDefault(require("../../utils/available-tabs"));
var _objectValuesWithAllowedKeysAndTabs = require("../../utils/object-values-with-allowed-keys-and-tabs");
var _controlBoxShadow = require("../control-box-shadow");
var _css = _interopRequireDefault(require("../control-box-shadow/css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*Library*/

/* Inbuilt */

/*Local*/
var AtrcControlBoxShadowTabCss = function AtrcControlBoxShadowTabCss(value) {
  var property = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'box-shadow';
  var output = {};
  var tabKey;
  if (!(0, _lodash.isEmpty)(value)) {
    _availableTabs.default.forEach(function (tab) {
      if (_availableTabs.default.includes(tab)) {
        if ((0, _objectValuesWithAllowedKeysAndTabs.AtrcHasTabValues)(tab, value, _controlBoxShadow.AtrcControlBoxShadowAllowedKeys)) {
          var boxVal = (0, _objectValuesWithAllowedKeysAndTabs.AtrcGetTabValues)(value, tab, _controlBoxShadow.AtrcControlBoxShadowAllowedKeys);
          var boxCss = (0, _css.default)(boxVal, property);
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
var _default = exports.default = AtrcControlBoxShadowTabCss;
//# sourceMappingURL=css.js.map