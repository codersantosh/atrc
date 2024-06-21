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
import FlexDirectionOptions from './options';

/*Local*/
const AtrcControlFlexDirectionDevice = (props) => {
	const {
		label = __('Direction', 'atrc-prefix-atrc'),
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
				AtrcPrefix('ctrl-flx-dir-device'),
				className,
				variant ? AtrcPrefix('ctrl-flx-dir-device') + '-' + variant : ''
			)}
			options={FlexDirectionOptions()}
			value={value}
			onChange={onChange}
			{...defaultProps}
		/>
	);
};
export default AtrcControlFlexDirectionDevice;
