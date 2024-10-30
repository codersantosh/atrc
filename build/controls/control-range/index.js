var _excluded = ["variant", "className", "defaultValue"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*WordPress*/
import { RangeControl } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcResetButtonIcon from '../../atoms/reset-button-icon';
import { AtrcResetWrap } from '../../atoms/reset-button-icon';
import AtrcWrapLib from '../../atoms/wrap-lib';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var RenderRange = function RenderRange(props) {
  var _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    defaultValue = props.defaultValue,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(RangeControl, _extends({
    className: classnames(AtrcPrefix('range'), className, variant ? AtrcPrefix('range') + '-' + variant : ''),
    allowReset: false
  }, defaultProps));
};
var AtrcControlRange = function AtrcControlRange(props) {
  var _props$allowReset = props.allowReset,
    allowReset = _props$allowReset === void 0 ? true : _props$allowReset,
    value = props.value,
    onChange = props.onChange,
    _props$defaultValue = props.defaultValue,
    defaultValue = _props$defaultValue === void 0 ? null : _props$defaultValue,
    _props$wrapProps = props.wrapProps,
    wrapProps = _props$wrapProps === void 0 ? {} : _props$wrapProps,
    _props$resetWrapProps = props.resetWrapProps,
    resetWrapProps = _props$resetWrapProps === void 0 ? {} : _props$resetWrapProps;
  if (allowReset) {
    return /*#__PURE__*/React.createElement(AtrcWrapLib, _extends({
      className: classnames('at-flx-grw-1')
    }, wrapProps), /*#__PURE__*/React.createElement(AtrcResetWrap, _extends({}, resetWrapProps, {
      className: classnames(AtrcPrefix('range-rst'), 'at-flx-grw-1', resetWrapProps.className ? resetWrapProps.className : '')
    }), /*#__PURE__*/React.createElement(RenderRange, props), /*#__PURE__*/React.createElement(AtrcResetButtonIcon, {
      value: value,
      defaultValue: defaultValue,
      onClick: function onClick() {
        return onChange(defaultValue);
      }
    })));
  }
  return /*#__PURE__*/React.createElement(RenderRange, props);
};
export default AtrcControlRange;
//# sourceMappingURL=index.js.map