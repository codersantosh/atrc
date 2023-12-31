"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _lodash = require("lodash");
var _availableTabs = _interopRequireDefault(require("../../utils/available-tabs"));
var _objectValuesWithAllowedKeysAndTabs = require("../../utils/object-values-with-allowed-keys-and-tabs");
var _controlBorder = require("../control-border");
var _css = _interopRequireDefault(require("../control-border/css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*Library*/

/* Inbuilt */

/*Local*/
var AtrcControlBorderTabCss = function AtrcControlBorderTabCss(value) {
  var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    bdrCl: 'border-color',
    bdrSty: 'border-style',
    bdrW: 'border-width'
  };
  var output = {};
  var tabKey;
  if (!(0, _lodash.isEmpty)(value)) {
    _availableTabs.default.forEach(function (tab) {
      if (_availableTabs.default.includes(tab)) {
        if ((0, _objectValuesWithAllowedKeysAndTabs.AtrcHasTabValues)(tab, value, _controlBorder.AtrcControlBorderAllowedKeys)) {
          var boxVal = (0, _objectValuesWithAllowedKeysAndTabs.AtrcGetTabValues)(value, tab, _controlBorder.AtrcControlBorderAllowedKeys);
          var boxCss = (0, _css.default)(boxVal, properties);
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
var _default = exports.default = AtrcControlBorderTabCss;
//# sourceMappingURL=css.js.map