var _excluded = ["className", "value"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*Library*/
import classnames from 'classnames';

/* Atoms */
import AtrcText from '../text';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var AtrcCounter = function AtrcCounter(props) {
  var _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(AtrcText, _extends({
    className: classnames(AtrcPrefix('cntr'), className),
    dataFrom: value.frm,
    dataTo: value.to
  }, defaultProps), value.frm);
};
export default AtrcCounter;
//# sourceMappingURL=index.js.map