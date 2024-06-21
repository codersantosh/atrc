import React from 'react';

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
import { cloneDeep } from 'lodash';

/*Controls*/
import AtrcControlRange from '../control-range';

/* Molecules */
import AtrcDropdownDevice from '../../molecules/dropdown-device';

/*Utils*/
import AtrcAvailableDevices from '../../utils/available-devices';
import { AtrcMappingDeviceValues } from '../../utils/object-values-with-devices';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

//*Local*/
export const AtrcControlRangeDeviceAllowedKeys = [
	'xs',
	'sm',
	'md',
	'lg',
	'xl',
	'xxl',
];
const RenderTab = ({ device, value, onChange, inputProps = {} }) => {
	return (
		<AtrcControlRange
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
		const valueCloned = cloneDeep(value);

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
			tabs={AtrcAvailableDevices()}
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
