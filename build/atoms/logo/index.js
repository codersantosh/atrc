var _excluded = ["variant", "className", "src", "imgProps"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/* Library */
import classnames from 'classnames';

/*Atoms*/
import AtrcWrap from '../wrap';
import AtrcImg from '../img';
import AtrcLink from '../link';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var AtrcLogo = function AtrcLogo(props) {
  var _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$src = props.src,
    src = _props$src === void 0 ? '' : _props$src,
    _props$imgProps = props.imgProps,
    imgProps = _props$imgProps === void 0 ? {} : _props$imgProps,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    className: classnames(AtrcPrefix('logo'), className, variant ? AtrcPrefix('logo') + '-' + variant : '')
  }, defaultProps), /*#__PURE__*/React.createElement(AtrcLink, {
    type: "nav-lnk",
    to: '/',
    end: true
  }, /*#__PURE__*/React.createElement(AtrcImg, _extends({
    variant: "logo",
    src: src
  }, imgProps))));
};
export default AtrcLogo;
//# sourceMappingURL=index.js.map