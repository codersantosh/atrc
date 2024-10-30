var _excluded = ["variant", "className", "url", "frameBorder", "title"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/* WordPress */
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var AtrcIframe = function AtrcIframe(props) {
  var _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$url = props.url,
    url = _props$url === void 0 ? '' : _props$url,
    _props$frameBorder = props.frameBorder,
    frameBorder = _props$frameBorder === void 0 ? 0 : _props$frameBorder,
    _props$title = props.title,
    title = _props$title === void 0 ? __('Atrc Iframe', 'atrc-prefix-atrc') : _props$title,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement("iframe", _extends({
    className: classnames(AtrcPrefix('frame'), className, variant ? AtrcPrefix('frame') + '-' + variant : ''),
    src: url,
    frameBorder: frameBorder,
    title: title
  }, defaultProps));
};
export default AtrcIframe;
//# sourceMappingURL=index.js.map