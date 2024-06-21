import React from 'react';
var AtrcCssPrefix = 'at-';
export var AtrcVarPrefix = '--at';
export default function AtrcPrefix() {
  var suffix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return AtrcCssPrefix + suffix;
}
//# sourceMappingURL=prefix-vars.js.map