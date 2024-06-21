function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
import React from 'react';

/* Local */
export default function AtrcIsScalar(value) {
  var type = _typeof(value);
  if (type === 'string' || type === 'number' || type === 'boolean') return true;
  return false;
}
//# sourceMappingURL=is-scalar.js.map