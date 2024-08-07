var _excluded = ["variant", "className"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/*WordPress*/
import { FontSizePicker } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcResetButtonIcon from '../../atoms/reset-button-icon';
import { AtrcResetWrap } from '../../atoms/reset-button-icon';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var RenderFontSizePicker = function RenderFontSizePicker(props) {
  var _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(FontSizePicker, _extends({
    className: classnames(AtrcPrefix('ctrl-fnt-sz-picker'), className, variant ? AtrcPrefix('ctrl-fnt-sz-picker') + '-' + variant : '')
  }, defaultProps, {
    __nextHasNoMarginBottom: true
  }));
};
var AtrcControlFontSizePicker = function AtrcControlFontSizePicker(props) {
  var _props$value = props.value,
    value = _props$value === void 0 ? '' : _props$value,
    _props$allowReset = props.allowReset,
    allowReset = _props$allowReset === void 0 ? true : _props$allowReset,
    onChange = props.onChange;
  if (allowReset) {
    return /*#__PURE__*/React.createElement(AtrcResetWrap, null, /*#__PURE__*/React.createElement(RenderFontSizePicker, props), /*#__PURE__*/React.createElement(AtrcResetButtonIcon, {
      value: value,
      onClick: function onClick() {
        return onChange('');
      }
    }));
  }
  return /*#__PURE__*/React.createElement(RenderFontSizePicker, props);
};
export default AtrcControlFontSizePicker;
//# sourceMappingURL=index.js.map