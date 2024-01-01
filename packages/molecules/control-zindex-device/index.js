/*WordPress*/
import { __ } from '@wordpress/i18n';

import { useMemo } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';

import { isArray, isEmpty, map } from 'lodash';

/*Inbuilt*/
import AtrcPanelTools from '../panel-tools';
import AtrcControlTextDevice from '../control-text-device';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

import AtrcAvailableDevices from '../../utils/available-devices';

/*Local Components*/
const AtrcControlZindexDevice = (props) => {
	const {
		value = {},
		className = '',
		variant = '',
		label = '',
		onChange = () => {},
		allowedDevices = true,
	} = props;

	const ZindexTabs = useMemo(() => {
		return [
			{
				name: 'zindex',
				title: label,
				hasValue: !isEmpty(value),
				onDeselect: () => onChange({}),
			},
		];
	}, [value]);

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
