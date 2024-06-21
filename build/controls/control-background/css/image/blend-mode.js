import React from 'react';

/*Local*/
var BgBlendMode = function BgBlendMode(value, innerOutput, property) {
  if (value.bgBlendMode) {
    innerOutput.xs += "".concat(property, "      : ").concat(value.bgBlendMode, ";");
  }
  return innerOutput;
};
export default BgBlendMode;
//# sourceMappingURL=blend-mode.js.map