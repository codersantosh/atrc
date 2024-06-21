import React from 'react';

/*Local*/
var BgAtch = function BgAtch(value, innerOutput, property) {
  if (value.bgAtch) {
    innerOutput.xs += "".concat(property, "      : ").concat(value.bgAtch, ";");
  }
  if (value.smBgAtch) {
    innerOutput.sm += "".concat(property, "      : ").concat(value.smBgAtch, ";");
  }
  if (value.mdBgAtch) {
    innerOutput.md += "".concat(property, "      : ").concat(value.mdBgAtch, ";");
  }
  if (value.lgBgAtch) {
    innerOutput.lg += "".concat(property, "      : ").concat(value.lgBgAtch, ";");
  }
  if (value.xlBgAtch) {
    innerOutput.xl += "".concat(property, "      : ").concat(value.xlBgAtch, ";");
  }
  if (value.xxlBgAtch) {
    innerOutput.xxl += "".concat(property, "      : ").concat(value.xxlBgAtch, ";");
  }
  return innerOutput;
};
export default BgAtch;
//# sourceMappingURL=attachment.js.map