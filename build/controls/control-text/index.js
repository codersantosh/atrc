var _excluded = ["className", "variant", "value", "allowReset", "wrapProps", "resetProps"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*WordPress*/
import { TextControl } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcResetButtonIcon, { AtrcResetWrap } from '../../atoms/reset-button-icon';
import AtrcWrapLib from '../../atoms/wrap-lib';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var RenderComponent = function RenderComponent(props) {
  var _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$value = props.value,
    value = _props$value === void 0 ? '' : _props$value,
    _props$allowReset = props.allowReset,
    allowReset = _props$allowReset === void 0 ? '' : _props$allowReset,
    _props$wrapProps = props.wrapProps,
    wrapProps = _props$wrapProps === void 0 ? {} : _props$wrapProps,
    _props$resetProps = props.resetProps,
    resetProps = _props$resetProps === void 0 ? {} : _props$resetProps,
    defaultProps = _objectWithoutProperties(props, _excluded);
  if (value === null || value === undefined) {
    value = '';
  }
  return /*#__PURE__*/React.createElement(TextControl, _extends({
    className: classnames(AtrcPrefix('ctrl-txt'), className, variant ? AtrcPrefix('ctrl-txt') + '-' + variant : ''),
    value: value
  }, defaultProps));
};
var AtrcControlText = function AtrcControlText(props) {
  var _props$allowReset2 = props.allowReset,
    allowReset = _props$allowReset2 === void 0 ? true : _props$allowReset2,
    _props$value2 = props.value,
    value = _props$value2 === void 0 ? '' : _props$value2,
    _props$wrapProps2 = props.wrapProps,
    wrapProps = _props$wrapProps2 === void 0 ? {} : _props$wrapProps2,
    _props$resetWrapProps = props.resetWrapProps,
    resetWrapProps = _props$resetWrapProps === void 0 ? {} : _props$resetWrapProps,
    onChange = props.onChange,
    readOnly = props.readOnly;
  return /*#__PURE__*/React.createElement(AtrcWrapLib, _extends({
    className: classnames('at-flx-grw-1')
  }, wrapProps), allowReset && !readOnly ? /*#__PURE__*/React.createElement(AtrcResetWrap, _extends({}, resetWrapProps, {
    className: classnames(AtrcPrefix('ctrl-txt-rst'), resetWrapProps.className ? resetWrapProps.className : '')
  }), /*#__PURE__*/React.createElement(RenderComponent, props), /*#__PURE__*/React.createElement(AtrcResetButtonIcon, {
    className: classnames('at-flx'),
    value: value,
    onClick: function onClick() {
      return onChange('');
    }
  })) : /*#__PURE__*/React.createElement(RenderComponent, props));
};
export default AtrcControlText;
//# sourceMappingURL=index.js.map