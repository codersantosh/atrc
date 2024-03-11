var _excluded = ["label", "className", "variant", "value", "onChange"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/* WordPress */
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

/*Controls*/
import AtrcControlSelectButtonDevice from '../control-select-button-device';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/* Internal */
import FlexDirectionOptions from './options';

/*Local*/
var AtrcControlFlexDirectionDevice = function AtrcControlFlexDirectionDevice(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? __('Direction', 'atrc-prefix-atrc') : _props$label,
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
    className: classnames(AtrcPrefix('ctrl-flx-dir-device'), className, variant ? AtrcPrefix('ctrl-flx-dir-device') + '-' + variant : ''),
    options: FlexDirectionOptions(),
    value: value,
    onChange: onChange
  }, defaultProps));
};
export default AtrcControlFlexDirectionDevice;
//# sourceMappingURL=index.js.map