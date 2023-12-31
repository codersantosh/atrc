"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _position = _interopRequireDefault(require("./image/position"));
var _repeat = _interopRequireDefault(require("./image/repeat"));
var _size = _interopRequireDefault(require("./image/size"));
var _attachment = _interopRequireDefault(require("./image/attachment"));
var _blendMode = _interopRequireDefault(require("./image/blend-mode"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*Inbuilt*/

/*Local*/
var BgImage = function BgImage(value, innerOutput, properties) {
  if (value.bgImgUrl) {
    innerOutput.xs += "".concat(properties.bgImg, "      : url(\"").concat(value.bgImgUrl, "\");");

    /*Background position*/
    innerOutput = (0, _position.default)(value, innerOutput, properties.bgPos);

    /*Background repeat*/
    innerOutput = (0, _repeat.default)(value, innerOutput, properties.bgRpt);

    /*Background size*/
    innerOutput = (0, _size.default)(value, innerOutput, properties.bgSz);

    /*Background attachment*/
    innerOutput = (0, _attachment.default)(value, innerOutput, properties.bgAtch);

    /*Blend mod*/
    innerOutput = (0, _blendMode.default)(value, innerOutput, properties.bgBlendMode);
  }
  return innerOutput;
};
var _default = exports.default = BgImage;
//# sourceMappingURL=bg-image.js.map