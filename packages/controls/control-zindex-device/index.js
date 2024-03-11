/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

import { isArray, isEmpty, map } from 'lodash';

/* Controls */
import AtrcControlTextDevice from '../control-text-device';

/* Molecules */
import AtrcPanelTools from '../../molecules/panel-tools';

/* Utils */
import AtrcAvailableDevices from '../../utils/available-devices';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcControlZindexDevice = (props) => {
	const {
		value = {},
		className = '',
		variant = '',
		label = __('Z-Index', 'atrc-prefix-atrc'),
		onChange = () => {},
		allowedDevices = true,
	} = props;

	const ZindexTabs = [
		{
			name: 'zindex',
			title: label,
			hasValue: !isEmpty(value),
			onDeselect: () => onChange({}),
		},
	];

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
		<AtrcPanelTools
			className={classnames(
				AtrcPrefix('ctrl-zidx-device'),
				className,
				variant ? AtrcPrefix('ctrl-zidx-device') + '-' + variant : ''
			)}
			label={label}
			resetAll={() => onChange({})}
			tools={ZindexTabs}>
			{(activeItems) =>
				map(activeItems, (tab, iDx) => (
					<AtrcControlTextDevice
						label={__('Z-Index', 'atrc-prefix-atrc')}
						value={value}
						onChange={onChange}
						inputProps={{
							type: 'number',
						}}
						allowedDevices={Devices()}
						key={iDx}
					/>
				))
			}
		</AtrcPanelTools>
	);
};

export default AtrcControlZindexDevice;
