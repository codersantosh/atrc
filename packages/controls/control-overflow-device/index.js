import React from 'react';

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

import { isEmpty, map } from 'lodash';

/*Controls*/
import AtrcControlSelectDevice from '../control-select-device';

/* Molecules */
import AtrcPanelTools from '../../molecules/panel-tools';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/* Internal */
import OverflowOptions from './options';

/*Local*/
const AtrcControlOverflowDevice = (props) => {
	const {
		label = __('Overflow', 'atrc-prefix-atrc'),
		className = '',
		variant = '',
		value = {},
		onChange = () => {},
		...defaultProps
	} = props;

	const OverflowTabs = [
		{
			name: 'ovf',
			title: label,
			hasValue: !isEmpty(value),
			onDeselect: () => onChange({}),
		},
	];

	return (
		<AtrcPanelTools
			className={classnames(
				AtrcPrefix('ctrl-ovf'),
				className,
				variant ? AtrcPrefix('ctrl-ovf') + '-' + variant : ''
			)}
			label={label}
			resetAll={() => onChange({})}
			tools={OverflowTabs}>
			{(activeItems) =>
				map(activeItems, (item, iDx) => (
					<AtrcControlSelectDevice
						label={__('Overflow', 'atrc-prefix-atrc')}
						options={OverflowOptions()}
						value={value}
						onChange={onChange}
						key={iDx}
						{...defaultProps}
					/>
				))
			}
		</AtrcPanelTools>
	);
};
export default AtrcControlOverflowDevice;
