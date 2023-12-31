"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AtrcGetQuantityAndUnitFromString;
function AtrcGetQuantityAndUnitFromString(value) {
  var allowedUnits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var defaultQuantity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var defaultUnit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  if (typeof value !== 'string') {
    console.error("The 'value' parameter must be a string");
    return [defaultQuantity, defaultUnit];
  }
  var quantityMatch = value.match(/^-?\d*\.?\d+/);
  var quantity = quantityMatch && isFinite(Number(quantityMatch[0])) ? Number(quantityMatch[0]) : defaultQuantity;
  var unitMatch = value.match(/[a-z]+$/i);
  var unit = unitMatch && allowedUnits.includes(unitMatch[0]) ? unitMatch[0] : defaultUnit;
  return [quantity, unit];
}
//# sourceMappingURL=get-quanty-and-unit.js.map