var _excluded = ["className", "position"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*Library*/
import { Portal } from 'react-portal';
import classnames from 'classnames';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var Position = function Position(position) {
  switch (position) {
    case 'bottom-left':
      return 'bl';
    case 'top-right':
      return 'tr';
    case 'top-left':
      return 'tl';
    default:
      return 'br';
  }
};
var AtrcWrapFloating = function AtrcWrapFloating(props) {
  var _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$position = props.position,
    position = _props$position === void 0 ? 'bottom-right' : _props$position,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(Portal, null, /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    className: classnames(className, 'at-wrp-flt', 'at-pos', 'at-z-idx', position ? AtrcPrefix('wrp-flt-') + Position(position) : '')
  }, defaultProps)));
};
export default AtrcWrapFloating;
//# sourceMappingURL=index.js.map