/* Local */
export function AtrcControlBoxFourShorthandCssOnly(_ref) {
  var value = _ref.value,
    _ref$property = _ref.property,
    property = _ref$property === void 0 ? '' : _ref$property,
    _ref$emptyVal = _ref.emptyVal,
    emptyVal = _ref$emptyVal === void 0 ? 0 : _ref$emptyVal;
  var shorthandStr = '';
  if (value.all) {
    var splitedValues = value.all.split(' ');
    var countValues = splitedValues.length;
    switch (countValues) {
      case 1:
        value.t = splitedValues[0];
        value.r = splitedValues[0];
        value.b = splitedValues[0];
        value.l = splitedValues[0];
        break;
      case 2:
        value.t = splitedValues[0];
        value.r = splitedValues[1];
        value.b = splitedValues[0];
        value.l = splitedValues[1];
        break;
      case 3 /* css shorthand */:
        value.t = splitedValues[0];
        value.r = splitedValues[1];
        value.b = splitedValues[3];
        value.l = splitedValues[1];
        break;
      case 4:
        value.t = splitedValues[0];
        value.r = splitedValues[1];
        value.b = splitedValues[2];
        value.l = splitedValues[3];
        break;
      default:
        break;
    }
  }

  // Check if all four value are equal
  if (value.t === value.r && value.r === value.b && value.b === value.l) {
    shorthandStr = value.t || emptyVal;
  }
  // Check if top and bottom value are equal and right and left value are equal
  else if (value.t === value.b && value.r === value.l) {
    shorthandStr = "".concat(value.t || emptyVal, " ").concat(value.r || emptyVal);
  }

  // Check if right and left value are equal
  else if (value.r === value.l) {
    shorthandStr = "".concat(value.t ? value.t : emptyVal, " ").concat(value.r || emptyVal, " ").concat(value.b || emptyVal);
  }
  // Use all four value
  else {
    shorthandStr = "".concat(value.t || emptyVal, " ").concat(value.r || emptyVal, " ").concat(value.b || emptyVal, " ").concat(value.l || emptyVal);
  }
  if (!property) {
    return shorthandStr;
  }
  return "".concat(property, "      : ").concat(shorthandStr, ";");
}
//# sourceMappingURL=css.js.map