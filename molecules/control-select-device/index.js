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
import { AtrcSelect } from '../../atoms';

import { AtrcDropdownDevice } from '../index';

/*Inbuilt Utils*/
import { AtrcAvailableDevices, AtrcMappingDeviceValues } from '../../utils';

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
	allowReset,
}) => {
	return (
		<AtrcSelect
			value={AtrcMappingDeviceValues(value, device)}
			onChange={(newVal) => onChange(newVal, device)}
			options={options}
			isMulti={isMulti}
			defaultValue={defaultValue}
			allowReset={allowReset}
		/>
	);
};

const AtrcControlSelectDevice = (props) => {
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

	return (
		<AtrcDropdownDevice
			className={classnames(
				AtrcPrefix('ctrl-select-device'),
				className,
				variant ? AtrcPrefix('ctrl-select-device') + '-' + variant : ''
			)}
			label={label}
			tabs={Devices()}
			{...defaultProps}>
			{(tab) => {
				onTabChange(tab.name);
				return (
					<RenderTab
						device={tab.name}
						isMulti={isMulti}
						value={value}
						defaultValue={
							defaultValue && defaultValue[tab.name]
								? defaultValue[tab.name]
								: null
						}
						options={options}
						onChange={setAttr}
						allowReset={allowReset}
					/>
				);
			}}
		</AtrcDropdownDevice>
	);
};
export default AtrcControlSelectDevice;
