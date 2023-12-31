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
import { isArray } from 'lodash';

/*Inbuilt*/
import AtrcSelect from '../../atoms/select';
import AtrcDropdownDevice from '../dropdown-device';

/*Inbuilt Utils*/
import AtrcAvailableDevices from '../../utils/available-devices';
import { AtrcMappingDeviceValues } from './../../utils/object-values-with-devices';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const RenderTab = ({
  device,
  isMulti,
  value,
  options,
  onChange,
  defaultValue,
  allowReset
}) => {
  return /*#__PURE__*/React.createElement(AtrcSelect, {
    value: AtrcMappingDeviceValues(value, device),
    onChange: newVal => onChange(newVal, device),
    options: options,
    isMulti: isMulti,
    defaultValue: defaultValue,
    allowReset: allowReset
  });
};
const AtrcControlSelectDevice = props => {
  const {
    value = {},
    defaultValue = {},
    label = '',
    options = [],
    onChange = () => {},
    onTabChange = () => {},
    variant = '',
    className = '',
    isMulti = false,
    allowedDevices = true,
    allowReset = true,
    ...defaultProps
  } = props;

  /* Return null since no device */
  if (!allowedDevices) {
    return null;
  }
  const Devices = () => {
    if (isArray(allowedDevices)) {
      return allowedDevices;
    }
    return AtrcAvailableDevices;
  };
  const setAttr = (newVal, type) => {
    const valueCloned = Object.assign({}, value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  return /*#__PURE__*/React.createElement(AtrcDropdownDevice, _extends({
    className: classnames(AtrcPrefix('ctrl-select-device'), className, variant ? AtrcPrefix('ctrl-select-device') + '-' + variant : ''),
    label: label,
    tabs: Devices()
  }, defaultProps), tab => {
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