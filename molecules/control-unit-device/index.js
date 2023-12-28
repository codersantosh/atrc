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
import { AtrcControlUnit } from '../../atoms';

import { AtrcDropdownDevice } from '../index';

/*Inbuilt Utils*/
import { AtrcAvailableDevices } from '../../utils';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
export const AtrcControlUnitDeviceAllowedKeys = [
	'xs',
	'sm',
	'md',
	'lg',
	'xl',
	'xxl',
	'xxl',
];

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

const RenderTab = ({ device, disableUnits, value, onChange }) => {
	return (
		<AtrcControlUnit
			label=''
			value={mappingDeviceValues(value, device)}
			onChange={(newVal) => onChange(newVal, device)}
			disableUnits={disableUnits}
		/>
	);
};

const AtrcControlUnitDevice = (props) => {
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

	return (
		<AtrcDropdownDevice
			label={label}
			tabs={Devices()}
			className={classnames(
				AtrcPrefix('ctrl-unit-device'),
				className,
				variant ? AtrcPrefix('ctrl-unit-device-') + '-' + variant : ''
			)}
			{...defaultProps}>
			{(tab) => (
				<RenderTab
					device={tab.name}
					disableUnits={disableUnits}
					value={value}
					onChange={(newVal, device) =>
						onChange(mappingDeviceNewValues(value, device, newVal))
					}
				/>
			)}
		</AtrcDropdownDevice>
	);
};
export default AtrcControlUnitDevice;
