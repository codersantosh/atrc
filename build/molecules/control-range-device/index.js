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

import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcRange from '../../atoms/range';
import AtrcDropdownDevice from '../dropdown-device';

/*Inbuilt Utils*/
import AtrcAvailableDevices from '../../utils/available-devices';
import { AtrcMappingDeviceValues } from './../../utils/object-values-with-devices';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

//*Local Components*/
const RenderTab = ({
  device,
  value,
  onChange,
  inputProps = {}
}) => {
  return /*#__PURE__*/React.createElement(AtrcRange, _extends({}, inputProps, {
    label: __('Enter value', 'atrc-prefix-atrc'),
    value: AtrcMappingDeviceValues(value, device),
    onChange: newVal => onChange(newVal, device)
  }));
};
const AtrcControlRangeDevice = props => {
  const {
    value = {},
    label = '',
    onChange = () => {},
    variant = '',
    className = '',
    inputProps = {},
    ...defaultProps
  } = props;
  const setAttr = (newVal, type) => {
    const valueCloned = Object.assign({}, value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  return /*#__PURE__*/React.createElement(AtrcDropdownDevice, _extends({
    className: classnames(AtrcPrefix('ctrl-range-device'), className, variant ? AtrcPrefix('ctrl-range-device') + '-' + variant : ''),
    label: label,
    tabs: AtrcAvailableDevices
  }, defaultProps), tab => /*#__PURE__*/React.createElement(RenderTab, {
    device: tab.name,
    value: value,
    onChange: setAttr,
    inputProps: inputProps
  }));
};
export default AtrcControlRangeDevice;
//# sourceMappingURL=index.js.map