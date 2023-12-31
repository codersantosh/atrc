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
const RenderTab = ({
  device,
  value,
  onChange,
  inputProps = {}
}) => {
  return /*#__PURE__*/React.createElement(AtrcText, _extends({}, inputProps, {
    value: AtrcMappingDeviceValues(value, device),
    onChange: newVal => onChange(newVal, device)
  }));
};
const AtrcControlTextDevice = props => {
  const {
    value = {},
    label = '',
    onChange = () => {},
    variant = '',
    className = '',
    inputProps = {},
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
  const setAttr = (newVal, type) => {
    const valueCloned = Object.assign({}, value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  return /*#__PURE__*/React.createElement(AtrcDropdownDevice, _extends({
    className: classnames(AtrcPrefix('ctrl-txt-device'), className, variant ? AtrcPrefix('ctrl-txt-device') + '-' + variant : ''),
    label: label,
    tabs: Devices()
  }, defaultProps), tab => {
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