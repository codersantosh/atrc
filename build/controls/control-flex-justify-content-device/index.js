var _excluded = ["label", "className", "variant", "value", "onChange"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/* WordPress */
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

/*Controls*/
import AtrcControlSelectButtonDevice from '../control-select-button-device';

/* Internal */
import JustifyContentOptions from './options';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var AtrcControlFlexJustifyContentDevice = function AtrcControlFlexJustifyContentDevice(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? __('Justify content', 'atrc-prefix-atrc') : _props$label,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(AtrcControlSelectButtonDevice, _extends({
    label: label,
    className: classnames(AtrcPrefix('ctrl-flx-jfy-cont-device'), className, variant ? AtrcPrefix('ctrl-flx-jfy-cont-device') + '-' + variant : ''),
    options: JustifyContentOptions(),
    value: value,
    onChange: onChange
  }, defaultProps));
};
export default AtrcControlFlexJustifyContentDevice;
//# sourceMappingURL=index.js.map