import React from 'react';

/* WordPress */
import { __ } from '@wordpress/i18n';

/* Controls */
import AtrcControlSelectButton from '../../control-select-button';

/* Internal */
import { SixColumnsOptions } from '../options';

/* Local */
const SixColumnsLayout = (props) => {
	const { value, onChange = () => {} } = props;

	return (
		<AtrcControlSelectButton
			label={__('Six columns layout', 'atrc-prefix-atrc')}
			value={value}
			options={SixColumnsOptions()}
			onChange={onChange}
			allowReset={false}
		/>
	);
};

export default SixColumnsLayout;
