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
import { AtrcDropdownDevice, AtrcControlSelectButton } from '../index';

/*Inbuilt Utils*/
import { AtrcAvailableDevices, AtrcMappingDeviceValues } from '../../utils';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const RenderTab = ({ device, value, options, onChange }) => {
	return (
		<AtrcControlSelectButton
			value={AtrcMappingDeviceValues(value, device)}
			onChange={(newVal) => onChange(newVal, device)}
			options={options}
			allowReset={true}
		/>
	);
};

const AtrcControlSelectButtonDevice = (props) => {
	const {
		value = {},
		defaultValue = {},
		label = '',
		options = [],
		onChange = () => {},
		variant = '',
		className = '',
		allowedDevices = true,
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

	return (
		<AtrcDropdownDevice
			className={classnames(
				AtrcPrefix('ctrl-select-btn-device'),
				className,
				variant ? AtrcPrefix('ctrl-select-btn-device') + '-' + variant : ''
			)}
			label={label}
			tabs={Devices()}>
			{(tab) => (
				<RenderTab
					device={tab.name}
					value={value}
					defaultValue={defaultValue}
					options={options}
					onChange={setAttr}
				/>
			)}
		</AtrcDropdownDevice>
	);
};
export default AtrcControlSelectButtonDevice;
