var _excluded = ["iconPos", "iconProps", "children", "text"];
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/* Atoms */
import AtrcButton from '../../../../atoms/button';
import AtrcIcon from '../../../../atoms/icon';

/* Local */
var AtrcButtonIconTemplate1 = function AtrcButtonIconTemplate1(props) {
  var _props$iconPos = props.iconPos,
    iconPos = _props$iconPos === void 0 ? 'before' : _props$iconPos,
    _props$iconProps = props.iconProps,
    iconProps = _props$iconProps === void 0 ? null : _props$iconProps,
    children = props.children,
    _props$text = props.text,
    text = _props$text === void 0 ? '' : _props$text,
    buttonDefaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(AtrcButton, buttonDefaultProps, iconProps && 'after' !== iconPos ? /*#__PURE__*/React.createElement(AtrcIcon, iconProps) : null, children || text, iconProps && 'after' === iconPos ? /*#__PURE__*/React.createElement(AtrcIcon, iconProps) : null);
};
export default AtrcButtonIconTemplate1;
//# sourceMappingURL=index.js.map