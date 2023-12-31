/*Local*/
const Left = (value, innerOutput, property) => {
  if (value.l) {
    innerOutput.xs += `${property} : ${value.l};`;
  }
  if (value.smL) {
    innerOutput.sm += `${property} : ${value.smL};`;
  }
  if (value.mdL) {
    innerOutput.md += `${property} : ${value.mdL};`;
  }
  if (value.lgL) {
    innerOutput.lg += `${property} : ${value.lgL};`;
  }
  if (value.xlL) {
    innerOutput.xl += `${property} : ${value.xlL};`;
  }
  if (value.xxlL) {
    innerOutput.xxl += `${property} : ${value.xxlL};`;
  }
  return innerOutput;
};
export default Left;
//# sourceMappingURL=left.js.map