function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
import React from 'react';

/* Local */
export default function AtrcGetJsonData(str) {
  try {
    var jsonDta = JSON.parse(str);
    if (['array', 'object'].includes(_typeof(jsonDta))) {
      return jsonDta;
    }
    return false;
  } catch (e) {
    return false;
  }
}
//# sourceMappingURL=get-json-data.js.map