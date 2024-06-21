function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
import React from 'react';

/* Inbuilt */
import { AtrcControlBoxFourShorthandCssOnly } from '../control-box-four/css';

/* Local */
var AtrcControlBorderRadiusCss = function AtrcControlBorderRadiusCss(value) {
  var property = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '--at-bdr-rad';
  var output = {
    xs: ''
  };
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
  return output;
};
export default AtrcControlBorderRadiusCss;
//# sourceMappingURL=css.js.map