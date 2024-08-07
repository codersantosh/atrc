import React from 'react';

/* WordPress */
import { __ } from '@wordpress/i18n';

/* Controls */
import AtrcControlSelectButton from '../../control-select-button';

/* Internal */
import { FiveColumnsOptions } from '../options';

/* Local */
const FiveColumnsLayout = (props) => {
	const { value, onChange = () => {} } = props;

	return (
		<AtrcControlSelectButton
			label={__('Five columns layout', 'atrc-prefix-atrc')}
			value={value}
			options={FiveColumnsOptions()}
			onChange={onChange}
			allowReset={false}
		/>
	);
};

export default FiveColumnsLayout;
