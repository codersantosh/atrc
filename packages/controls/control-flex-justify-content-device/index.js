import React from 'react';

/* WordPress */
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

/*Controls*/
import AtrcControlSelectButtonDevice from '../control-select-button-device';

/* Internal */
import JustifyContentOptions from './options';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcControlFlexJustifyContentDevice = (props) => {
	const {
		label = __('Justify content', 'atrc-prefix-atrc'),
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
				AtrcPrefix('ctrl-flx-jfy-cont-device'),
				className,
				variant ? AtrcPrefix('ctrl-flx-jfy-cont-device') + '-' + variant : ''
			)}
			options={JustifyContentOptions()}
			value={value}
			onChange={onChange}
			{...defaultProps}
		/>
	);
};
export default AtrcControlFlexJustifyContentDevice;
