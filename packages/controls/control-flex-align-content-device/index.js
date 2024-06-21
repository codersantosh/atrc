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
import AlignContentOptions from './options';

/*Local*/
const AtrcControlFlexAlignContentDevice = (props) => {
	const {
		label = __('Align content', 'atrc-prefix-atrc'),
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
				AtrcPrefix('ctrl-flx-al-cont-device'),
				className,
				variant ? AtrcPrefix('ctrl-flx-al-cont-device') + '-' + variant : ''
			)}
			options={AlignContentOptions()}
			value={value}
			onChange={onChange}
			{...defaultProps}
		/>
	);
};
export default AtrcControlFlexAlignContentDevice;
