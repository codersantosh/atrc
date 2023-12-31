function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*Value Structure
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
import AtrcToggle from '../../atoms/toggle';
import AtrcDropdownDevice from '../dropdown-device';

/*Inbuilt Utils*/
import AtrcAvailableDevices from '../../utils/available-devices';
import { AtrcMappingDeviceValues } from './../../utils/object-values-with-devices';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const RenderTab = ({
  device,
  value,
  onChange,
  inputProps = {}
}) => {
  return /*#__PURE__*/React.createElement(AtrcToggle, _extends({}, inputProps, {
    checked: AtrcMappingDeviceValues(value, device),
    onChange: () => onChange(!AtrcMappingDeviceValues(value, device), device)
  }));
};
const AtrcControlToggleDevice = props => {
  const {
    value = {},
    label = '',
    onChange = () => {},
    variant = '',
    className = '',
    allowedDevices = true,
    inputProps = {}
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
  return /*#__PURE__*/React.createElement(AtrcDropdownDevice, {
    className: classnames(AtrcPrefix('ctrl-tog-device'), className, variant ? AtrcPrefix('ctrl-tog-device') + '-' + variant : ''),
    label: label,
    tabs: Devices()
  }, tab => /*#__PURE__*/React.createElement(RenderTab, {
    device: tab.name,
    value: value,
    onChange: setAttr,
    inputProps: inputProps
  }));
};
export default AtrcControlToggleDevice;
//# sourceMappingURL=index.js.map