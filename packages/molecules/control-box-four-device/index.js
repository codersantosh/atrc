/*Attributes Structure
Type Object
{
    "t":"",
    "b":"",
    "r":"",
    "l":"",
    "xs":"",

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
import { isArray, isString } from 'lodash';
import classnames from 'classnames';

/*Inbuilt*/
import { AtrcControlBoxFour, AtrcDropdownDevice } from '../index';

/*Inbuilt Utils*/
import { AtrcAvailableDevices } from '../../utils';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
export const AtrcControlBoxFourDeviceAllowedKeys = [
	'xs',
	't',
	'b',
	'r',
	'l',

	'sm',
	'smT',
	'smR',
	'smB',
	'smL',

	'md',
	'mdT',
	'mdR',
	'mdB',
	'mdL',

	'lg',
	'lgT',
	'lgR',
	'lgB',
	'lgL',

	'xl',
	'xlT',
	'xlR',
	'xlB',
	'xlL',

	'xxl',
	'xxlT',
	'xxlR',
	'xxlB',
	'xxlL',
];

function mappingDeviceBoxFourValues({ value, device, valueType, splitOnAxis }) {
	if (value && value[device]) {
		if ('string' === valueType) {
			return value[device];
		}
		return {
			t: value[device],
			r: value[device],
			b: value[device],
			l: value[device],
		};
	}
	if ('xs' === device) {
		if ('string' === valueType) {
			return value && value.t;
		}
		return {
			t: value && value.t,
			r: value && value.r,
			b: value && value.b,
			l: value && value.l,
		};
	}
	if ('string' === valueType) {
		return value && value[device + 'T'];
	}
	return {
		t: value && value[device + 'T'],
		r: value && value[device + 'R'],
		b: value && value[device + 'B'],
		l: value && value[device + 'L'],
	};
}

const RenderTab = ({ device, value, onChange, boxFourProps = {} }) => {
	const { valueType = '', splitOnAxis = false } = boxFourProps;

	return (
		<AtrcControlBoxFour
			label=''
			values={mappingDeviceBoxFourValues({
				value,
				device,
				valueType,
				splitOnAxis,
			})}
			onChange={(newVal) => onChange(newVal, device)}
			{...boxFourProps}
		/>
	);
};

/*XS*/
const mappingNormalNewXsValues = (value) => {
	if (value && ((value.t === value.r) === value.b) === value.l) {
		return {
			xs: value.t,
		};
	}
	/*string check done below*/
	return {
		t: value && value.t,
		r: value && value.r,
		b: value && value.b,
		l: value && value.l,
	};
};

/*Other responsive devices*/
const mappingNormalNewResponsiveValues = (value, device) => {
	if (value && ((value.t === value.r) === value.b) === value.l) {
		return {
			[device]: value.t,
		};
	}
	/*string check done below*/
	return {
		[device + 'T']: value && value.t,
		[device + 'R']: value && value.r,
		[device + 'B']: value && value.b,
		[device + 'L']: value && value.l,
	};
};

function mappingDeviceNewValues({ value, device, newVal }) {
	const valueCloned = Object.assign({}, value);
	let newValues = {};

	if ('xs' === device) {
		delete valueCloned.t;
		delete valueCloned.r;
		delete valueCloned.b;
		delete valueCloned.l;
		delete valueCloned.xs;

		if (isString(newVal)) {
			valueCloned.xs = newVal;
			newValues = valueCloned;
		} else {
			const changedValues = mappingNormalNewXsValues(newVal);
			newValues = {
				...valueCloned,
				...changedValues,
			};
		}
	} else {
		delete valueCloned[device + 'T'];
		delete valueCloned[device + 'R'];
		delete valueCloned[device + 'B'];
		delete valueCloned[device + 'L'];
		delete valueCloned[device];

		if (isString(newVal)) {
			valueCloned[device] = newVal;
			newValues = valueCloned;
		} else {
			const changedValues = mappingNormalNewResponsiveValues(newVal, device);
			newValues = {
				...valueCloned,
				...changedValues,
			};
		}
	}
	return newValues;
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
		return AtrcAvailableDevices;
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
