import React from 'react';

/* WordPress */
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

/*Controls*/
import AtrcControlSelectButtonDevice from '../control-select-button-device';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/* Internal */
import AlignItemsOptions from './options';

/*Local*/
const AtrcControlFlexAlignItemsDevice = (props) => {
	const {
		label = __('Align items', 'atrc-prefix-atrc'),
		className = '',
		variant = '',
		value = {},
		onChange = () => {},
		...defaultProps
	} = props;

	return (
		<AtrcControlSelectButtonDevice
			label={label}
			className={classnames(
				AtrcPrefix('ctrl-flx-al-itms-device'),
				className,
				variant ? AtrcPrefix('ctrl-flx-al-itms-device') + '-' + variant : ''
			)}
			options={AlignItemsOptions()}
			value={value}
			onChange={onChange}
			{...defaultProps}
		/>
	);
};
export default AtrcControlFlexAlignItemsDevice;
