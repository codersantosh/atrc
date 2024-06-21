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
import AlignSelfOptions from './options';

/*Local*/
const AtrcControlFlexAlignSelfDevice = (props) => {
	const {
		label = __('Align self', 'atrc-prefix-atrc'),
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
				AtrcPrefix('ctrl-flx-al-slf-device'),
				className,
				variant ? AtrcPrefix('ctrl-flx-al-slf-device') + '-' + variant : ''
			)}
			options={AlignSelfOptions()}
			value={value}
			onChange={onChange}
			{...defaultProps}
		/>
	);
};
export default AtrcControlFlexAlignSelfDevice;
