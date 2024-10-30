var _excluded = ["children"];
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/* Library */
/*STYLIS : https://www.npmjs.com/package/stylis*/
import { compile, serialize, stringify, middleware, prefixer } from 'stylis';

/* Local */
/*Process the Raw CSS*/
export var AtrcGetProcessedCss = function AtrcGetProcessedCss(rawCss) {
  if (!rawCss) {
    return null;
  }
  return serialize(compile(rawCss), middleware([prefixer, stringify]));
};

/*Render CSS inside style tag*/
var AtrcInternalCss = function AtrcInternalCss(props) {
  var children = props.children,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement("style", defaultProps, AtrcGetProcessedCss(children));
};
export default AtrcInternalCss;
//# sourceMappingURL=internal-css.js.map