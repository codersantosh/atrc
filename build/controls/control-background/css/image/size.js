/*Local*/
var BgSz = function BgSz(value, innerOutput, property) {
  if (value.bgSz) {
    if ('custom' !== value.bgSz) {
      innerOutput.xs += "".concat(property, "      : ").concat(value.bgSz, ";");
    } else if (value.bgW && value.bgH) {
      innerOutput.xs += "".concat(property, "      : ").concat(value.bgW, " ").concat(value.bgH, ";");
    }
  }
  if (value.smBgSz) {
    if ('custom' !== value.smBgSz) {
      innerOutput.sm += "".concat(property, "      : ").concat(value.smBgSz, ";");
    } else if (value.smBgW && value.smBgH) {
      innerOutput.sm += "".concat(property, "      : ").concat(value.smBgW, " ").concat(value.smBgH, ";");
    }
  }
  if (value.mdBgSz) {
    if ('custom' !== value.mdBgSz) {
      innerOutput.md += "".concat(property, "      : ").concat(value.mdBgSz, ";");
    } else if (value.mdBgW && value.mdBgH) {
      innerOutput.md += "".concat(property, "      : ").concat(value.mdBgW, " ").concat(value.mdBgH, ";");
    }
  }
  if (value.lgBgSz) {
    if ('custom' !== value.lgBgSz) {
      innerOutput.lg += "".concat(property, "      : ").concat(value.lgBgSz, ";");
    } else if (value.lgBgW && value.lgBgH) {
      innerOutput.lg += "".concat(property, "      : ").concat(value.lgBgW, " ").concat(value.lgBgH, ";");
    }
  }
  if (value.xlBgSz) {
    if ('custom' !== value.xlBgSz) {
      innerOutput.xl += "".concat(property, "      : ").concat(value.xlBgSz, ";");
    } else if (value.xlBgW && value.xlBgH) {
      innerOutput.xl += "".concat(property, "      : ").concat(value.xlBgW, " ").concat(value.xlBgH, ";");
    }
  }
  if (value.xxlBgSz) {
    if ('custom' !== value.xxlBgSz) {
      innerOutput.xxl += "".concat(property, "      : ").concat(value.xxlBgSz, ";");
    } else if (value.xxlBgW && value.xxlBgH) {
      innerOutput.xxl += "".concat(property, "      : ").concat(value.xxlBgW, " ").concat(value.xxlBgH, ";");
    }
  }
  return innerOutput;
};
export default BgSz;
//# sourceMappingURL=size.js.map