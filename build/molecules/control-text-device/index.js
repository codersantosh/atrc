var _excluded = ["value", "label", "onChange", "variant", "className", "inputProps", "allowedDevices"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*Attributes Structure
Type Object
{
    "sm":"",
    "md":"",
    "lg":"",
    "xl":"",
}
* */

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcText from '../../atoms/text';
import AtrcDropdownDevice from '../dropdown-device';

/*Inbuilt Utils*/
import AtrcAvailableDevices from '../../utils/available-devices';
import { AtrcMappingDeviceValues } from './../../utils/object-values-with-devices';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';
import { isArray } from 'lodash';

/*Local Components*/
var RenderTab = function RenderTab(_ref) {
  var device = _ref.device,
    value = _ref.value,
    _onChange = _ref.onChange,
    _ref$inputProps = _ref.inputProps,
    inputProps = _ref$inputProps === void 0 ? {} : _ref$inputProps;
  return /*#__PURE__*/React.createElement(AtrcText, _extends({}, inputProps, {
    value: AtrcMappingDeviceValues(value, device),
    onChange: function onChange(newVal) {
      return _onChange(newVal, device);
    }
  }));
};
var AtrcControlTextDevice = function AtrcControlTextDevice(props) {
  var _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$inputProps = props.inputProps,
    inputProps = _props$inputProps === void 0 ? {} : _props$inputProps,
    _props$allowedDevices = props.allowedDevices,
    allowedDevices = _props$allowedDevices === void 0 ? true : _props$allowedDevices,
    defaultProps = _objectWithoutProperties(props, _excluded);

  /* Return null since no device */
  if (!allowedDevices) {
    return null;
  }
  var Devices = function Devices() {
    if (isArray(allowedDevices)) {
      return allowedDevices;
    }
    return AtrcAvailableDevices();
  };
  var setAttr = function setAttr(newVal, type) {
    var valueCloned = Object.assign({}, value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  return /*#__PURE__*/React.createElement(AtrcDropdownDevice, _extends({
    className: classnames(AtrcPrefix('ctrl-txt-device'), className, variant ? AtrcPrefix('ctrl-txt-device') + '-' + variant : ''),
    label: label,
    tabs: Devices()
  }, defaultProps), function (tab) {
    return /*#__PURE__*/React.createElement(RenderTab, {
      device: tab.name,
      value: value,
      onChange: setAttr,
      inputProps: inputProps
    });
  });
};
export default AtrcControlTextDevice;
//# sourceMappingURL=index.js.map