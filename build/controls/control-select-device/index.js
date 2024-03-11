var _excluded = ["value", "defaultValue", "label", "options", "onChange", "onTabChange", "variant", "className", "isMulti", "allowedDevices", "allowReset"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Attributes Structure
Type Object
{
    "sm":"",
    "md":"",
    "lg":"",
    "xl":"",
}
**/

/*Library*/
import classnames from 'classnames';
import { isArray, cloneDeep } from 'lodash';

/*Controls*/
import AtrcControlSelect from '../control-select';

/* Molecules */
import AtrcDropdownDevice from '../../molecules/dropdown-device';

/*Utils*/
import AtrcAvailableDevices from '../../utils/available-devices';
import { AtrcMappingDeviceValues } from '../../utils/object-values-with-devices';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var RenderTab = function RenderTab(_ref) {
  var device = _ref.device,
    isMulti = _ref.isMulti,
    value = _ref.value,
    options = _ref.options,
    _onChange = _ref.onChange,
    defaultValue = _ref.defaultValue,
    allowReset = _ref.allowReset;
  return /*#__PURE__*/React.createElement(AtrcControlSelect, {
    value: AtrcMappingDeviceValues(value, device),
    onChange: function onChange(newVal) {
      return _onChange(newVal, device);
    },
    options: options,
    isMulti: isMulti,
    defaultValue: defaultValue,
    allowReset: allowReset
  });
};
var AtrcControlSelectDevice = function AtrcControlSelectDevice(props) {
  var _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$defaultValue = props.defaultValue,
    defaultValue = _props$defaultValue === void 0 ? {} : _props$defaultValue,
    _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label,
    _props$options = props.options,
    options = _props$options === void 0 ? [] : _props$options,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$onTabChange = props.onTabChange,
    onTabChange = _props$onTabChange === void 0 ? function () {} : _props$onTabChange,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$isMulti = props.isMulti,
    isMulti = _props$isMulti === void 0 ? false : _props$isMulti,
    _props$allowedDevices = props.allowedDevices,
    allowedDevices = _props$allowedDevices === void 0 ? true : _props$allowedDevices,
    _props$allowReset = props.allowReset,
    allowReset = _props$allowReset === void 0 ? true : _props$allowReset,
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
    var valueCloned = cloneDeep(value);
    if (!valueCloned) {
      valueCloned = {};
    }
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  return /*#__PURE__*/React.createElement(AtrcDropdownDevice, _extends({
    className: classnames(AtrcPrefix('ctrl-select-device'), className, variant ? AtrcPrefix('ctrl-select-device') + '-' + variant : ''),
    label: label,
    tabs: Devices()
  }, defaultProps), function (tab) {
    onTabChange(tab.name);
    return /*#__PURE__*/React.createElement(RenderTab, {
      device: tab.name,
      isMulti: isMulti,
      value: value,
      defaultValue: defaultValue && defaultValue[tab.name] ? defaultValue[tab.name] : null,
      options: options,
      onChange: setAttr,
      allowReset: allowReset
    });
  });
};
export default AtrcControlSelectDevice;
//# sourceMappingURL=index.js.map