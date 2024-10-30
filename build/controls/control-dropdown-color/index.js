var _excluded = ["label", "value", "onChange", "variant", "className", "useCSSVariables"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*Attributes Structure
Type string
**/

/*WordPress*/
import { __ } from '@wordpress/i18n';
import { ColorIndicator, ColorPalette } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';
import AtrcWrapLib from '../../atoms/wrap-lib';
import AtrcLabel from '../../atoms/label';
import AtrcResetButtonIcon from '../../atoms/reset-button-icon';
import { AtrcResetWrap } from '../../atoms/reset-button-icon';

/* Molecules */
import AtrcDropdown from '../../molecules/dropdown';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/* Utils */
import { AtrcUseColorSolids } from '../../utils/use-colors';

/*Local*/
export var AtrcControlDropdownColorAllowedKeys = ['cl'];
var RenderControl = function RenderControl(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? __('Color', 'atrc-prefix-atrc') : _props$label,
    value = props.value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$useCSSVariable = props.useCSSVariables,
    useCSSVariables = _props$useCSSVariable === void 0 ? true : _props$useCSSVariable,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var allSolids = AtrcUseColorSolids({
    useCSSVariables: useCSSVariables
  });
  return /*#__PURE__*/React.createElement(AtrcDropdown, _extends({
    className: classnames(AtrcPrefix('ctrl-dropdown-cl'), className, variant ? AtrcPrefix('ctrl-dropdown-cl') + '-' + variant : ''),
    renderToggle: function renderToggle(_ref) {
      var isOpen = _ref.isOpen,
        onToggle = _ref.onToggle;
      return /*#__PURE__*/React.createElement(AtrcWrap, {
        className: "at-flx at-al-itm-ctr at-gap",
        onClick: onToggle
      }, /*#__PURE__*/React.createElement(ColorIndicator, {
        colorValue: value
      }), label ? /*#__PURE__*/React.createElement(AtrcLabel, {
        variant: "color-picker"
      }, label) : null);
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement(ColorPalette, {
        className: classnames(AtrcPrefix('cl-palette')),
        value: value,
        onChange: onChange,
        colors: allSolids,
        clearable: true,
        enableAlpha: true
      });
    }
  }, defaultProps));
};
var AtrcControlDropdownColor = function AtrcControlDropdownColor(props) {
  var _props$allowReset = props.allowReset,
    allowReset = _props$allowReset === void 0 ? true : _props$allowReset,
    _props$value = props.value,
    value = _props$value === void 0 ? '' : _props$value,
    _props$defaultValue = props.defaultValue,
    defaultValue = _props$defaultValue === void 0 ? '' : _props$defaultValue,
    onChange = props.onChange,
    _props$wrapProps = props.wrapProps,
    wrapProps = _props$wrapProps === void 0 ? {} : _props$wrapProps,
    _props$resetWrapProps = props.resetWrapProps,
    resetWrapProps = _props$resetWrapProps === void 0 ? {} : _props$resetWrapProps;
  return /*#__PURE__*/React.createElement(AtrcWrapLib, _extends({
    className: classnames('at-flx-grw-1', AtrcPrefix('dropdown-cl'))
  }, wrapProps), allowReset ? /*#__PURE__*/React.createElement(AtrcResetWrap, _extends({}, resetWrapProps, {
    className: classnames(AtrcPrefix('dropdown-cl-rst'), resetWrapProps.className ? resetWrapProps.className : '')
  }), /*#__PURE__*/React.createElement(RenderControl, props), /*#__PURE__*/React.createElement(AtrcResetButtonIcon, {
    value: value,
    defaultValue: defaultValue,
    onClick: function onClick() {
      return onChange(defaultValue);
    }
  })) : /*#__PURE__*/React.createElement(RenderControl, props));
};
export default AtrcControlDropdownColor;
//# sourceMappingURL=index.js.map