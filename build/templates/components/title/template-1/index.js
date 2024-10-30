var _excluded = ["title", "buttons", "className"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/* Library */
import classnames from 'classnames';

/* Atoms */
import AtrcWrap from '../../../../atoms/wrap';
import AtrcText from '../../../../atoms/text';
import AtrcHr from '../../../../atoms/hr';

/* Local */
var AtrcTitleTemplate1 = function AtrcTitleTemplate1(props) {
  var title = props.title,
    _props$buttons = props.buttons,
    buttons = _props$buttons === void 0 ? [] : _props$buttons,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    className: classnames('at-p', className ? className : '')
  }, defaultProps), /*#__PURE__*/React.createElement(AtrcText, {
    tag: "h5",
    className: classnames('at-m')
  }, title)), /*#__PURE__*/React.createElement(AtrcHr, {
    className: classnames('at-m')
  }));
};
export default AtrcTitleTemplate1;
//# sourceMappingURL=index.js.map