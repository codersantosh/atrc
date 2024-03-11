var _excluded = ["value", "label", "onChange", "variant", "className"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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