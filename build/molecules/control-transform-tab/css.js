"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _lodash = require("lodash");
var _controlTransform = require("./../control-transform");
var _css = _interopRequireDefault(require("./../control-transform/css"));
var _availableTabs = _interopRequireDefault(require("../../utils/available-tabs"));
var _objectValuesWithAllowedKeysAndTabs = require("../../utils/object-values-with-allowed-keys-and-tabs");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*Library*/

/*Atrc*/

/*Local*/
var AtrcControlTransformTabCss = function AtrcControlTransformTabCss(value) {
  var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    tf: '--at-tf',
    ppv: '--at-ppv',
    ppvOrg: '--at-ppv-org',
    tfOrg: '--at-tf-org',
    tfSty: '--at-tf-sty'
  };
  var output = {
    xs: '',
    xsHover: '',
    sm: '',
    smHover: '',
    md: '',
    mdHover: '',
    lg: '',
    lgHover: '',
    xl: '',
    xlHover: '',
    xxl: '',
    xxlHover: ''
  };
  if (!(0, _lodash.isEmpty)(value)) {
    _availableTabs.default.forEach(function (tab) {
      if (_availableTabs.default.includes(tab)) {
        if ((0, _objectValuesWithAllowedKeysAndTabs.AtrcHasTabValues)(tab, value, _controlTransform.AtrcControlTransformAllowedKeys)) {
          var transform = (0, _objectValuesWithAllowedKeysAndTabs.AtrcGetTabValues)(value, tab, _controlTransform.AtrcControlTransformAllowedKeys),
            css = (0, _css.default)(transform);
          switch (tab) {
            case 'normal':
              output.xs += "".concat(properties.tf, " : ").concat(css, ";");
              break;
            case 'Hover':
              output.xsHover += "".concat(properties.tf, " : ").concat(css, ";");
              break;
            case 'ParentHover':
              output.xsParentHover += "".concat(properties.tf, " : ").concat(css, ";");
              break;
          }
        }
      }
    });
    if (value.ppv) {
      output.xs += "".concat(properties.ppv, " : ").concat(value.ppv, ";");
    }
    if (value.orgX || value.orgY || value.orgZ) {
      if (value.on3D) {
        output.xs += "".concat(properties.tfOrg, " : ").concat(value.orgX || 0, " ").concat(value.orgY || 0, " ").concat(value.orgZ || 0, ";");
        output.xs += "";
      } else {
        output.xs += "".concat(properties.tfOrg, " :").concat(value.orgX || 0, " ").concat(value.orgY || 0);
      }
    }
  }
  return output;
};
var _default = exports.default = AtrcControlTransformTabCss;
//# sourceMappingURL=css.js.map