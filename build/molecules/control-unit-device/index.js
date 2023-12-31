function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*Attributes Structure
Type Object
{
    "xs":"",
    "sm":"",
    "md":"",
    "lg":"",
    "xl":"",
    "xxl":"",
}
* */

/*Library*/
import classnames from 'classnames';
import { isArray } from 'lodash';

/*Inbuilt*/
import AtrcControlUnit from '../../atoms/control-unit';
import AtrcDropdownDevice from '../dropdown-device';

/*Inbuilt Utils*/
import AtrcAvailableDevices from '../../utils/available-devices';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
export const AtrcControlUnitDeviceAllowedKeys = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxl'];
function mappingDeviceValues(value, device) {
  if (value && value[device]) {
    return value[device];
  }
  return null;
}
function mappingDeviceNewValues(value, device, newVal) {
  const valueCloned = Object.assign({}, value);
  valueCloned[device] = newVal;
  return valueCloned;
}
const RenderTab = ({
  device,
  disableUnits,
  value,
  onChange
}) => {
  return /*#__PURE__*/React.createElement(AtrcControlUnit, {
    label: "",
    value: mappingDeviceValues(value, device),
    onChange: newVal => onChange(newVal, device),
    disableUnits: disableUnits
  });
};
const AtrcControlUnitDevice = props => {
  const {
    value = {},
    label = '',
    onChange = () => {},
    disableUnits = false,
    variant = '',
    className = '',
    allowedDevices = true,
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
  return /*#__PURE__*/React.createElement(AtrcDropdownDevice, _extends({
    label: label,
    tabs: Devices(),
    className: classnames(AtrcPrefix('ctrl-unit-device'), className, variant ? AtrcPrefix('ctrl-unit-device-') + '-' + variant : '')
  }, defaultProps), tab => /*#__PURE__*/React.createElement(RenderTab, {
    device: tab.name,
    disableUnits: disableUnits,
    value: value,
    onChange: (newVal, device) => onChange(mappingDeviceNewValues(value, device, newVal))
  }));
};
export default AtrcControlUnitDevice;
//# sourceMappingURL=index.js.map