var _excluded = ["value", "label", "onChange", "variant", "className"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

/* Controls */
import AtrcControlSelectButton from '../control-select-button';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/* Internal */
import ButtonStyleList from './options';

/*Local*/
var AtrcControlSelectButtonStyle = function AtrcControlSelectButtonStyle(props) {
  var _props$value = props.value,
    value = _props$value === void 0 ? '' : _props$value,
    _props$label = props.label,
    label = _props$label === void 0 ? __('Button style', 'atrc-prefix-atrc') : _props$label,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(AtrcControlSelectButton, _extends({
    className: classnames(AtrcPrefix('ctrl-select-btn-sty'), className, variant ? AtrcPrefix('ctrl-select-btn-sty') + '-' + variant : ''),
    label: label,
    value: value,
    options: ButtonStyleList(),
    onChange: onChange,
    allowReset: true
  }, defaultProps));
};
export default AtrcControlSelectButtonStyle;
//# sourceMappingURL=index.js.map