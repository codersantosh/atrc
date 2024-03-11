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
import { isArray, cloneDeep } from 'lodash';

/* Controls */
import AtrcControlUnit from '../control-unit';

/* Molecules */
import AtrcDropdownDevice from '../../molecules/dropdown-device';
import AtrcPanelRow from '../../molecules/panel-row';

/* Utils */
import AtrcAvailableDevices from '../../utils/available-devices';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
export const AtrcControlUnitDeviceAllowedKeys = [
	'xs',
	'sm',
	'md',
	'lg',
	'xl',
	'xxl',
];

function mappingDeviceValues(value, device) {
	if (value && value[device]) {
		return value[device];
	}
	return null;
}

function mappingDeviceNewValues(value, device, newVal) {
	let valueCloned = cloneDeep(value);
	if (!valueCloned) {
		valueCloned = {};
	}
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
		return AtrcAvailableDevices();
	};

	return (
		<AtrcPanelRow className={classnames('at-m')}>
			<AtrcDropdownDevice
				label={label}
				tabs={Devices()}
				className={classnames(
					AtrcPrefix('ctrl-unit-device'),
					'at-flx-grw-1',
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
		</AtrcPanelRow>
	);
};
export default AtrcControlUnitDevice;
