/*Local*/
var AtrcControlColorCss = function AtrcControlColorCss(value) {
  var property = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '--at-cl';
  var output = {};
  if (value) {
    output.xs = "".concat(property, "      : ").concat(value, ";");
  }
  return output;
};
export default AtrcControlColorCss;
//# sourceMappingURL=css.js.map