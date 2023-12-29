/*WordPress*/
import { withInstanceId } from '@wordpress/compose';

/*Library*/
import classnames from 'classnames';
import { isArray } from 'lodash';

/*Inbuilt*/
import { AtrcDropdownDevice } from '../';
import AtrcPrefix from '../../prefix-vars';
import { AtrcAvailableDevices } from '../../utils';

/* Local */
import ColumnLayout from './columns-layout';

const AtrcControlColumnsAdvanced = (props) => {
	const {
		label,
		instanceId,
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
		return AtrcAvailableDevices;
	};

	const setAttr = (newVal, type) => {
		const valueCloned = Object.assign({}, value);
		valueCloned[type] = newVal;
		onChange(valueCloned);
	};

	const id = `control-advanced-columns-${instanceId}`;

	return (
		<AtrcDropdownDevice
			id={id}
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

export default withInstanceId(AtrcControlColumnsAdvanced);