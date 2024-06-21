import React from 'react';

/*Attributes Structure
Type Object
{
    "xsT":"",
    "xsB":"",
    "xsR":"",
    "xsL":"",
    "xs":"", just for future ref

    "smT":"",
    "smB":"",
    "smR":"",
    "smL":"",
    "sm":"",

    "mdT": "",
    "mdB": "",
    "mdR": "",
    "mdL": "",
    "md": "",

    "lgT":"",
    "lgB":"",
    "lgR":"",
    "lgL":"",
    "lg":"",

    "xlT":"",
    "xlB":"",
    "xlR":"",
    "xlL":"",
    "xl":"",

    "xxlT":"",
    "xxlB":"",
    "xxlR":"",
    "xxlL":"",
    "xxl":"",
}
* */

/*Library*/
import { isArray, cloneDeep } from 'lodash';
import classnames from 'classnames';

/*Controls*/
import AtrcControlBoxFour from '../control-box-four';

/* Molecules */
import AtrcDropdownDevice from '../../molecules/dropdown-device';

/*Utils*/
import AtrcAvailableDevices from '../../utils/available-devices';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
export const AtrcControlBoxFourDeviceAllowedKeys = [
	'xsT',
	'xsB',
	'xsR',
	'xsL',

	'smT',
	'smR',
	'smB',
	'smL',

	'mdT',
	'mdR',
	'mdB',
	'mdL',

	'lgT',
	'lgR',
	'lgB',
	'lgL',

	'xlT',
	'xlR',
	'xlB',
	'xlL',

	'xxlT',
	'xxlR',
	'xxlB',
	'xxlL',
];

function mappingDeviceBoxFourValues({ value, device }) {
	return {
		t: value && value[device + 'T'],
		r: value && value[device + 'R'],
		b: value && value[device + 'B'],
		l: value && value[device + 'L'],
	};
}

const RenderTab = ({ device, value, onChange, boxFourProps = {} }) => {
	return (
		<AtrcControlBoxFour
			label=''
			value={mappingDeviceBoxFourValues({
				value,
				device,
			})}
			onChange={(newVal) => onChange(newVal, device)}
			{...boxFourProps}
		/>
	);
};

/*Mapping devices*/
const mappingNormalNewResponsiveValues = (value, device) => {
	return {
		[device + 'T']: value && value.t,
		[device + 'R']: value && value.r,
		[device + 'B']: value && value.b,
		[device + 'L']: value && value.l,
	};
};

function mappingDeviceNewValues({ value, device, newVal }) {
	const valueCloned = cloneDeep(value);
	let newValues = {};

	delete valueCloned[device + 'T'];
	delete valueCloned[device + 'R'];
	delete valueCloned[device + 'B'];
	delete valueCloned[device + 'L'];

	const changedValues = mappingNormalNewResponsiveValues(newVal, device);
	return {
		...valueCloned,
		...changedValues,
	};
}

const AtrcControlBoxFourDevice = (props) => {
	const {
		value = {},
		label = '',
		onChange = () => {},
		variant = '',
		className = '',
		allowedDevices = true,
		boxFourProps = {},
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
		<AtrcDropdownDevice
			label={label}
			tabs={Devices()}
			className={classnames(
				AtrcPrefix('ctrl-box-four-device'),
				className,
				variant ? AtrcPrefix('ctrl-box-four-device') + '-' + variant : ''
			)}>
			{(tab) => (
				<RenderTab
					device={tab.name}
					value={value}
					onChange={(newVal, device) =>
						onChange(
							mappingDeviceNewValues({
								value,
								device,
								newVal,
							})
						)
					}
					boxFourProps={boxFourProps}
				/>
			)}
		</AtrcDropdownDevice>
	);
};
export default AtrcControlBoxFourDevice;
