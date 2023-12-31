"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _lodash = require("lodash");
var _css = require("./../../control-dropdown-color-gradient-tab/css");
var _bgImage = _interopRequireDefault(require("./bg-image"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*Library*/

/*Inbuilt*/

/*Local*/
var AtrcControlBackgroundCss = function AtrcControlBackgroundCss(value) {
  var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    bgAtch: 'background-attachment',
    bgBlendMode: 'background-blend-mode',
    bgPos: 'background-position',
    bgRpt: 'background-repeat',
    bgSz: 'background-size',
    bgImg: 'background-image',
    bgCl: 'background-color'
  };
  var innerOutput = {
    xs: '',
    xsHover: '',
    xsActive: '',
    sm: '',
    smHover: '',
    smActive: '',
    md: '',
    mdHover: '',
    mdActive: '',
    lg: '',
    lgHover: '',
    lgActive: '',
    xl: '',
    xlHover: '',
    xlActive: '',
    xxl: '',
    xxlHover: '',
    xxlActive: ''
  };
  if (!(0, _lodash.isEmpty)(value)) {
    innerOutput = (0, _css.AtrcControlDropdownColorGradientTabCss)({
      value: {
        cl: value.bgCl,
        clHover: value.bgClHover,
        clActive: value.bgClActive,
        grd: value.bgGrd,
        grdHover: value.bgGrdHover,
        grdActive: value.bgGrdActive
      },
      innerOutput: innerOutput,
      property: properties.bgCl,
      propGrd: properties.bgImg
    });
    innerOutput = (0, _bgImage.default)(value, innerOutput, properties);
  }
  return innerOutput;
};
var _default = exports.default = AtrcControlBackgroundCss;
//# sourceMappingURL=index.js.map