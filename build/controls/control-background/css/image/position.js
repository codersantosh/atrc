import React from 'react';

/*Local*/
var BgPos = function BgPos(value, innerOutput, property) {
  if (value.bgPosX || value.bgPosY) {
    var x = value.bgPosX ? value.bgPosX : 0;
    var y = value.bgPosY ? value.bgPosY : 0;
    innerOutput.xs += "".concat(property, "      : ").concat(x, " ").concat(y, ";");
  }
  if (value.smBgPosX || value.smBgPosY) {
    var _x = value.smBgPosX ? value.smBgPosX : 0;
    var _y = value.smBgPosY ? value.smBgPosY : 0;
    innerOutput.sm += "".concat(property, "      : ").concat(_x, " ").concat(_y, ";");
  }
  if (value.mdBgPosX || value.mdBgPosY) {
    var _x2 = value.mdBgPosX ? value.mdBgPosX : 0;
    var _y2 = value.mdBgPosY ? value.mdBgPosY : 0;
    innerOutput.md += "".concat(property, "      : ").concat(_x2, " ").concat(_y2, ";");
  }
  if (value.lgBgPosX || value.lgBgPosY) {
    var _x3 = value.lgBgPosX ? value.lgBgPosX : 0;
    var _y3 = value.lgBgPosY ? value.lgBgPosY : 0;
    innerOutput.lg += "".concat(property, "      : ").concat(_x3, " ").concat(_y3, ";");
  }
  if (value.xlBgPosX || value.xlBgPosY) {
    var _x4 = value.xlBgPosX ? value.xlBgPosX : 0;
    var _y4 = value.xlBgPosY ? value.xlBgPosY : 0;
    innerOutput.xl += "".concat(property, "      : ").concat(_x4, " ").concat(_y4, ";");
  }
  if (value.xxlBgPosX || value.xxlBgPosY) {
    var _x5 = value.xxlBgPosX ? value.xxlBgPosX : 0;
    var _y5 = value.xxlBgPosY ? value.xxlBgPosY : 0;
    innerOutput.xxl += "".concat(property, "      : ").concat(_x5, " ").concat(_y5, ";");
  }
  return innerOutput;
};
export default BgPos;
//# sourceMappingURL=position.js.map