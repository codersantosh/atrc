/*Library*/
import classnames from 'classnames';
import { isArray, cloneDeep } from 'lodash';

/*Molecules*/
import AtrcDropdownDevice from '../../molecules/dropdown-device';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/* Utils */
import AtrcAvailableDevices from '../../utils/available-devices';

import AtrcUseInstanceId from '../../utils/use-instance-id';

/* Internal */
import ColumnLayout from './columns-layout';

/* Local */
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

	const instanceId = AtrcUseInstanceId(
		AtrcControlColumnsAdvanced,
		'atrc-dropdown-device'
	);

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
			id={instanceId}
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
