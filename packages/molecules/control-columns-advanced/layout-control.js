/*WordPress*/

/*Library*/
import classnames from 'classnames';
import { isArray } from 'lodash';

/*Inbuilt*/
import AtrcDropdownDevice from '../dropdown-device';

import AtrcPrefix from '../../prefix-vars';

import AtrcAvailableDevices from '../../utils/available-devices';

/* Local */
import ColumnLayout from './columns-layout';

const AtrcControlColumnsAdvanced = (props) => {
	const {
		label,
		value,
		columns,
		className = '',
		variant = '',
		onChange = () => {},
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
				AtrcPrefix('ctrl-col-adv-lyt'),
				className,
				variant ? AtrcPrefix('ctrl-col-adv-lyt') + '-' + variant : ''
			)}
			label={label}
			tabs={Devices()}
			{...defaultProps}>
			{(tab) => {
				return (
					<ColumnLayout
						value={value && value[tab.name]}
						onChange={(newVal) => setAttr(newVal, tab.name)}
						columns={columns}
					/>
				);
			}}
		</AtrcDropdownDevice>
	);
};

export default AtrcControlColumnsAdvanced;
