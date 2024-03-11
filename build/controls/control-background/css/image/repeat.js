/*Local*/
var BgRpt = function BgRpt(value, innerOutput, property) {
  if (value.bgRpt) {
    innerOutput.xs += "".concat(property, "      : ").concat(value.bgRpt, ";");
  }
  if (value.smBgRpt) {
    innerOutput.sm += "".concat(property, "      : ").concat(value.smBgRpt, ";");
  }
  if (value.mdBgRpt) {
    innerOutput.md += "".concat(property, "      : ").concat(value.mdBgRpt, ";");
  }
  if (value.lgBgRpt) {
    innerOutput.lg += "".concat(property, "      : ").concat(value.lgBgRpt, ";");
  }
  if (value.xlBgRpt) {
    innerOutput.xl += "".concat(property, "      : ").concat(value.xlBgRpt, ";");
  }
  if (value.xxlBgRpt) {
    innerOutput.xxl += "".concat(property, "      : ").concat(value.xxlBgRpt, ";");
  }
  return innerOutput;
};
export default BgRpt;
//# sourceMappingURL=repeat.js.map