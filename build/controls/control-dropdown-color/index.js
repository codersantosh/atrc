var _excluded = ["label", "value", "onChange", "variant", "className"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
import AtrcLabel from '../../atoms/label';
import AtrcResetButtonIcon from '../../atoms/reset-button-icon';

/* Molecules */
import AtrcDropdown from '../../molecules/dropdown';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/* Utils */
import { AtrcUseColorSolids } from '../../utils/use-colors';

/*Local*/
export var AtrcControlDropdownColorAllowedKeys = ['cl'];
var RenderControl = function RenderControl(props) {
  var allSolids = AtrcUseColorSolids();
  var _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label,
    value = props.value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    defaultProps = _objectWithoutProperties(props, _excluded);
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
      }), /*#__PURE__*/React.createElement(AtrcLabel, {
        variant: "color-picker"
      }, label || __('Color', 'atrc-prefix-atrc')));
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
    onChange = props.onChange;
  if (allowReset) {
    return /*#__PURE__*/React.createElement(AtrcWrap, {
      className: classnames(AtrcPrefix('dropdown-cl'), 'at-flx', 'at-al-itm-ctr', 'at-jfy-cont-btw', 'at-gap')
    }, /*#__PURE__*/React.createElement(RenderControl, props), /*#__PURE__*/React.createElement(AtrcResetButtonIcon, {
      value: value,
      onClick: function onClick() {
        return onChange('');
      }
    }));
  }
  return /*#__PURE__*/React.createElement(RenderControl, props);
};
export default AtrcControlDropdownColor;
//# sourceMappingURL=index.js.map