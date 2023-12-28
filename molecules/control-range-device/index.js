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
import { AtrcRange } from '../../atoms';

import { AtrcDropdownDevice } from '../index';

/*Inbuilt Utils*/
import { AtrcAvailableDevices, AtrcMappingDeviceValues } from '../../utils';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

//*Local Components*/
const RenderTab = ({ device, value, onChange, inputProps = {} }) => {
	return (
		<AtrcRange
			{...inputProps}
			label={__('Enter value', 'atrc-prefix-atrc')}
			value={AtrcMappingDeviceValues(value, device)}
			onChange={(newVal) => onChange(newVal, device)}
		/>
	);
};

const AtrcControlRangeDevice = (props) => {
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

	return (
		<AtrcDropdownDevice
			className={classnames(
				AtrcPrefix('ctrl-range-device'),
				className,
				variant ? AtrcPrefix('ctrl-range-device') + '-' + variant : ''
			)}
			label={label}
			tabs={AtrcAvailableDevices}
			{...defaultProps}>
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
export default AtrcControlRangeDevice;
