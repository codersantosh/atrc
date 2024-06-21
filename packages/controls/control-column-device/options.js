import React from 'react';

/*WordPress*/
import { __ } from '@wordpress/i18n';

/* Column Options*/
const ColumnOptions = () => {
	return [
		{
			label: __('Select', 'atrc-prefix-atrc'),
			value: null,
		},
		{
			label: __('1', 'atrc-prefix-atrc'),
			value: 1,
		},
		{
			label: __('2', 'atrc-prefix-atrc'),
			value: 2,
		},
		{
			label: __('3', 'atrc-prefix-atrc'),
			value: 3,
		},
		{
			label: __('4', 'atrc-prefix-atrc'),
			value: 4,
		},
		{
			label: __('5', 'atrc-prefix-atrc'),
			value: 5,
		},
		{
			label: __('6', 'atrc-prefix-atrc'),
			value: 6,
		},
	];
};
export default ColumnOptions;
