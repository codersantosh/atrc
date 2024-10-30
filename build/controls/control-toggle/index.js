var _excluded = ["variant", "wrapProps", "className", "label", "onChange", "checked"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*WordPress*/
import { ToggleControl } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcWrapLib from '../../atoms/wrap-lib';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var AtrcControlToggle = function AtrcControlToggle(props) {
  var _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$wrapProps = props.wrapProps,
    wrapProps = _props$wrapProps === void 0 ? {} : _props$wrapProps,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$checked = props.checked,
    checked = _props$checked === void 0 ? false : _props$checked,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(AtrcWrapLib, wrapProps, /*#__PURE__*/React.createElement(ToggleControl, _extends({
    className: classnames(AtrcPrefix('tog'), className, variant ? AtrcPrefix('tog') + '-' + variant : ''),
    label: label,
    checked: checked,
    onChange: onChange
  }, defaultProps)));
};
export default AtrcControlToggle;
//# sourceMappingURL=index.js.map