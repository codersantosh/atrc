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
const RenderTab = ({ device, value, onChange, inputProps = {} }) => {
	return (
		<AtrcText
			{...inputProps}
			value={AtrcMappingDeviceValues(value, device)}
			onChange={(newVal) => onChange(newVal, device)}
		/>
	);
};

const AtrcControlTextDevice = (props) => {
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
		return AtrcAvailableDevices();
	};

	const setAttr = (newVal, type) => {
		const valueCloned = Object.assign({}, value);
		valueCloned[type] = newVal;
		onChange(valueCloned);
	};

	return (
		<AtrcDropdownDevice
			className={classnames(
				AtrcPrefix('ctrl-txt-device'),
				className,
				variant ? AtrcPrefix('ctrl-txt-device') + '-' + variant : ''
			)}
			label={label}
			tabs={Devices()}
			{...defaultProps}>
			{(tab) => {
				return (
					<RenderTab
						device={tab.name}
						value={value}
						onChange={setAttr}
						inputProps={inputProps}
					/>
				);
			}}
		</AtrcDropdownDevice>
	);
};
export default AtrcControlTextDevice;
