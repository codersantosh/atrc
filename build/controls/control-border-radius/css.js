function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
import React from 'react';

/* Inbuilt */
import { AtrcControlBoxFourShorthandCssOnly } from '../control-box-four/css';

/* Local */
var AtrcControlBorderRadiusCss = function AtrcControlBorderRadiusCss(_ref) {
  var value = _ref.value,
    _ref$property = _ref.property,
    property = _ref$property === void 0 ? '--at-bdr-rad' : _ref$property;
  var output = {
    xs: ''
  };
  if (value) {
    if (_typeof(value) === 'object') {
      output.xs += "".concat(property, ":").concat(AtrcControlBoxFourShorthandCssOnly({
        value: {
          t: value.tL,
          r: value.tR,
          b: value.bR,
          l: value.bL
        }
      }), ";");
    } else {
      output.xs += "".concat(property, " : ").concat(value, ";");
    }
  }
  return output;
};
export default AtrcControlBorderRadiusCss;
//# sourceMappingURL=css.js.map