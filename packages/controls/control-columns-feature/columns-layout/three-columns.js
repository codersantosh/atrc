import React from 'react';

/* WordPress */
import { __ } from '@wordpress/i18n';

/* Controls */
import AtrcControlSelectButton from '../../control-select-button';

/* Internal */
import { ThreeColumnsOptions } from '../options';

/* Local */
const ThreeColumnsLayout = (props) => {
	const { value, onChange = () => {} } = props;

	return (
		<AtrcControlSelectButton
			label={__('Three columns layout', 'atrc-prefix-atrc')}
			value={value}
			options={ThreeColumnsOptions()}
			onChange={onChange}
			allowReset={false}
		/>
	);
};

export default ThreeColumnsLayout;
