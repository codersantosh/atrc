"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _lodash = require("lodash");
var _availableTabs = _interopRequireDefault(require("../../utils/available-tabs"));
var _objectValuesWithAllowedKeysAndTabs = require("../../utils/object-values-with-allowed-keys-and-tabs");
var _controlTypography = require("../control-typography");
var _css = _interopRequireDefault(require("../control-typography/css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*Library*/

/*Local*/
var AtrcControlTypographyTabCss = function AtrcControlTypographyTabCss(value) {
  var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    fntSz: 'font-size',
    fntWt: 'font-weight',
    fntSty: 'font-style',
    txtDec: 'text-decoration',
    txtTf: 'text-transform',
    lnH: 'line-height',
    ltrSp: 'letter-spacing'
  };
  var output = {};
  var tabKey;
  if (!(0, _lodash.isEmpty)(value)) {
    _availableTabs.default.forEach(function (tab) {
      if (_availableTabs.default.includes(tab)) {
        if ((0, _objectValuesWithAllowedKeysAndTabs.AtrcHasTabValues)(tab, value, _controlTypography.AtrcControlTypographyAllowedKeys)) {
          var typVal = (0, _objectValuesWithAllowedKeysAndTabs.AtrcGetTabValues)(value, tab, _controlTypography.AtrcControlTypographyAllowedKeys),
            typCss = (0, _css.default)(typVal, properties);
          if (typCss && !(0, _lodash.isEmpty)(typCss)) {
            (0, _lodash.forEach)(typCss, function (item, itemKey) {
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
var _default = exports.default = AtrcControlTypographyTabCss;
//# sourceMappingURL=css.js.map