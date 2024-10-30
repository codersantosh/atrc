var _excluded = ["label", "className", "variant", "value", "options", "onChange"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*Library*/
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';

/* Controls */
import AtrcControlSelectButton from '../control-select-button';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/* Internal */
import SelectHtmlOptions from './options';

/*Local*/
var AtrcControlTextTag = function AtrcControlTextTag(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? __('Text tag', 'atrc-prefix-atrc') : _props$label,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$value = props.value,
    value = _props$value === void 0 ? '' : _props$value,
    options = props.options,
    onChange = props.onChange,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var SelectOptions = function SelectOptions() {
    if (options && options.length) {
      return options;
    }
    return SelectHtmlOptions();
  };
  return /*#__PURE__*/React.createElement(AtrcControlSelectButton, _extends({
    className: classnames(AtrcPrefix('ctrl-txt-tag'), className, variant ? AtrcPrefix('ctrl-txt-tag') + '-' + variant : ''),
    label: label,
    options: SelectOptions(),
    value: value,
    onChange: onChange,
    defaultValue: 'p'
  }, defaultProps));
};
export default AtrcControlTextTag;
//# sourceMappingURL=index.js.map