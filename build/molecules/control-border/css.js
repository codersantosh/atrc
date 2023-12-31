"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _lodash = require("lodash");
var _controlBorder = require("./../control-border");
/* Library */

/* Inbuilt */

/* Local */
var AtrcControlBorderCss = function AtrcControlBorderCss(value) {
  var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    bdrCl: 'border-color',
    bdrSty: 'border-style',
    bdrW: 'border-width'
  };
  var output = {
    xs: ''
  };
  if (!(0, _lodash.isEmpty)(value)) {
    /* Color */
    if (value.cl) {
      output.xs += "".concat(properties.bdrCl, " : ").concat(value.cl, ";");
    } else if (value.tCl || value.rCl || value.bCl || value.lCl) {
      output.xs += "".concat(properties.bdrCl, ":").concat((0, _controlBorder.AtrcControlBorderColorShorthand)(value.tCl, value.rCl, value.bCl, value.lCl), ";");
    }

    /*Style*/
    if (value.sty) {
      output.xs += "".concat(properties.bdrSty, " : ").concat(value.sty, ";");
    } else if (value.tSty || value.rSty || value.bSty || value.lSty) {
      output.xs += "".concat(properties.bdrSty, ":").concat((0, _controlBorder.AtrcControlBorderStyleShorthand)(value.tSty, value.rSty, value.bSty, value.lSty), ";");
    }

    /*Width*/
    if (value.w) {
      output.xs += "".concat(properties.bdrW, " : ").concat(value.w, ";");
    } else if (value.tW || value.rW || value.bW || value.lW) {
      output.xs += "".concat(properties.bdrW, ":").concat((0, _controlBorder.AtrcControlBorderWidthShorthand)(value.tW, value.rW, value.bW, value.lW), ";");
    }
  }
  return output;
};
var _default = exports.default = AtrcControlBorderCss;
//# sourceMappingURL=css.js.map