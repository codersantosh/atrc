/*Local*/
var Bottom = function Bottom(value, innerOutput, property) {
  if (value.b) {
    innerOutput.xs += "".concat(property, " : ").concat(value.b, ";");
  }
  if (value.smB) {
    innerOutput.sm += "".concat(property, " : ").concat(value.smB, ";");
  }
  if (value.mdB) {
    innerOutput.md += "".concat(property, " : ").concat(value.mdB, ";");
  }
  if (value.lgB) {
    innerOutput.lg += "".concat(property, " : ").concat(value.lgB, ";");
  }
  if (value.xlB) {
    innerOutput.xl += "".concat(property, " : ").concat(value.xlB, ";");
  }
  if (value.xxlB) {
    innerOutput.xxl += "".concat(property, " : ").concat(value.xxlB, ";");
  }
  return innerOutput;
};
export default Bottom;
//# sourceMappingURL=bottom.js.map