"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AtrcControlDropdownColorGradientTabCss = void 0;
var _lodash = require("lodash");
var _availableTabs = _interopRequireDefault(require("../../utils/available-tabs"));
var _objectValuesWithAllowedKeysAndTabs = require("../../utils/object-values-with-allowed-keys-and-tabs");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*Library*/

/* Inbuilt */

/*Local*/

var AtrcControlDropdownColorGradientTabCss = exports.AtrcControlDropdownColorGradientTabCss = function AtrcControlDropdownColorGradientTabCss(_ref) {
  var value = _ref.value,
    innerOutput = _ref.innerOutput,
    property = _ref.property,
    propGrd = _ref.propGrd;
  if (value.cl) {
    innerOutput.xs += "".concat(property, "      : ").concat(value.cl, ";");
  }
  if (value.clHover) {
    innerOutput.xsHover += "".concat(property, "      : ").concat(value.clHover, ";");
  }
  if (value.clActive) {
    innerOutput.xsActive += "".concat(property, "      : ").concat(value.clActive, ";");
  }
  if (value.grd) {
    innerOutput.xs += "".concat(propGrd, "      : ").concat(value.grd, ";");
  }
  if (value.grdHover) {
    innerOutput.xsHover += "".concat(propGrd, "      : ").concat(value.grdHover, ";");
  }
  if (value.grdActive) {
    innerOutput.xsActive += "".concat(propGrd, "      : ").concat(value.grdActive, ";");
  }
  return innerOutput;
};
var AtrcControlColorCSS = function AtrcControlColorCSS(value, property) {
  if (!value || !property) {
    return null;
  }
  var color = '';
  if (value.cl) {
    color += "".concat(property, "      : ").concat(value.cl, ";");
  } else if (value.grd) {
    color += "background      : ".concat(value.grd, ";");
    color += "text-fill-color      : transparent;";
    color += "background-clip      : text;";
  }
  return color;
};
var AtrcControlDropdownColorGradientTabCssText = function AtrcControlDropdownColorGradientTabCssText(value) {
  var property = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'color';
  var output = {};
  if (!(0, _lodash.isEmpty)(value)) {
    _availableTabs.default.forEach(function (tab) {
      if (_availableTabs.default.includes(tab)) {
        if ((0, _objectValuesWithAllowedKeysAndTabs.AtrcHasTabValues)(tab, value, ['cl', 'grd'])) {
          var color = (0, _objectValuesWithAllowedKeysAndTabs.AtrcGetTabValues)(value, tab, ['cl', 'grd']),
            css = AtrcControlColorCSS(color, property);
          switch (tab) {
            case 'normal':
              output.xs = css;
              break;
            default:
              output['xs' + tab] = css;
              break;
          }
        }
      }
    });
  }
  return output;
};
var _default = exports.default = AtrcControlDropdownColorGradientTabCssText;
//# sourceMappingURL=css.js.map