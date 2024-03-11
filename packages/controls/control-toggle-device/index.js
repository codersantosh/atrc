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
import { isArray, cloneDeep } from 'lodash';

/*Controls*/
import AtrcControlToggle from '../control-toggle';

/* Molecules */
import AtrcDropdownDevice from '../../molecules/dropdown-device';

/*Utils*/
import AtrcAvailableDevices from '../../utils/available-devices';
import { AtrcMappingDeviceValues } from '../../utils/object-values-with-devices';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const RenderTab = ({ device, value, onChange, inputProps = {} }) => {
	return (
		<AtrcControlToggle
			{...inputProps}
			checked={AtrcMappingDeviceValues(value, device)}
			onChange={() => onChange(!AtrcMappingDeviceValues(value, device), device)}
		/>
	);
};

const AtrcControlToggleDevice = (props) => {
	const {
		value = {},
		label = '',
		onChange = () => {},
		variant = '',
		className = '',
		allowedDevices = true,
		inputProps = {},
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
		const valueCloned = cloneDeep(value);

		valueCloned[type] = newVal;
		onChange(valueCloned);
	};

	return (
		<AtrcDropdownDevice
			className={classnames(
				AtrcPrefix('ctrl-tog-device'),
				className,
				variant ? AtrcPrefix('ctrl-tog-device') + '-' + variant : ''
			)}
			label={label}
			tabs={Devices()}>
			{(tab) => (
				<RenderTab
					device={tab.name}
					value={value}
					onChange={setAttr}
					inputProps={inputProps}
				/>
			)}
		</AtrcDropdownDevice>
	);
};
export default AtrcControlToggleDevice;
