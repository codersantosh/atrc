"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _lodash = require("lodash");
var _top = _interopRequireDefault(require("./top"));
var _right = _interopRequireDefault(require("./right"));
var _bottom = _interopRequireDefault(require("./bottom"));
var _left = _interopRequireDefault(require("./left"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*Library*/

/*Inbuilt*/

/*Local*/
var AtrcControlPositionDeviceCss = function AtrcControlPositionDeviceCss(value, properties) {
  var innerOutput = {
    xs: '',
    sm: '',
    md: '',
    lg: '',
    xl: '',
    xxl: ''
  };
  if (!(0, _lodash.isEmpty)(value)) {
    if (value.pos) {
      innerOutput.xs += "".concat(properties.pos, "      : ").concat(value.pos, ";");
    }
    innerOutput = (0, _top.default)(value, innerOutput, properties.t);
    innerOutput = (0, _right.default)(value, innerOutput, properties.r);
    innerOutput = (0, _bottom.default)(value, innerOutput, properties.b);
    innerOutput = (0, _left.default)(value, innerOutput, properties.l);
  }
  return innerOutput;
};
var _default = exports.default = AtrcControlPositionDeviceCss;
//# sourceMappingURL=index.js.map