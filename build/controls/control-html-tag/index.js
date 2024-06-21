var _excluded = ["label", "className", "variant", "value", "options", "onChange"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/* WordPress */
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

/*Controls*/
import AtrcControlSelect from '../control-select';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/* Internal */
import SelectHtmlOptions from './options';

/*Local*/
var AtrcControlHtmlTag = function AtrcControlHtmlTag(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? __('HTML Tag', 'atrc-prefix-atrc') : _props$label,
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
  return /*#__PURE__*/React.createElement(AtrcControlSelect, _extends({
    label: label,
    className: classnames(AtrcPrefix('html-tag'), className, variant ? AtrcPrefix('html-tag') + '-' + variant : ''),
    options: SelectOptions(),
    value: value,
    onChange: onChange,
    allowReset: 'div' !== value
  }, defaultProps));
};
export default AtrcControlHtmlTag;
//# sourceMappingURL=index.js.map