/*Local*/
var Left = function Left(value, innerOutput, property) {
  if (value.l) {
    innerOutput.xs += "".concat(property, " : ").concat(value.l, ";");
  }
  if (value.smL) {
    innerOutput.sm += "".concat(property, " : ").concat(value.smL, ";");
  }
  if (value.mdL) {
    innerOutput.md += "".concat(property, " : ").concat(value.mdL, ";");
  }
  if (value.lgL) {
    innerOutput.lg += "".concat(property, " : ").concat(value.lgL, ";");
  }
  if (value.xlL) {
    innerOutput.xl += "".concat(property, " : ").concat(value.xlL, ";");
  }
  if (value.xxlL) {
    innerOutput.xxl += "".concat(property, " : ").concat(value.xxlL, ";");
  }
  return innerOutput;
};
export default Left;
//# sourceMappingURL=left.js.map