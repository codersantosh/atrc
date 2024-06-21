import React from 'react';

/* WordPress */
import { __ } from '@wordpress/i18n';

/* Controls */
import AtrcControlSelectButton from '../../control-select-button';

/* Internal */
import { OneColumnOptions } from '../options';

/* Local */
const OneColumnLayout = (props) => {
	const { value, onChange = () => {} } = props;

	return (
		<AtrcControlSelectButton
			label={__('Single column layout', 'atrc-prefix-atrc')}
			value={value}
			options={OneColumnOptions()}
			onChange={onChange}
			allowReset={false}
		/>
	);
};

export default OneColumnLayout;
