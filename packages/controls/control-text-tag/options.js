import React from 'react';

/*WordPress*/
import { __ } from '@wordpress/i18n';

/* Options*/
const SelectHtmlOptions = () => {
	return [
		{
			label: __('H1', 'atrc-prefix-atrc'),
			value: 'h1',
		},
		{
			label: __('H2', 'atrc-prefix-atrc'),
			value: 'h2',
		},
		{
			label: __('H3', 'atrc-prefix-atrc'),
			value: 'h3',
		},
		{
			label: __('H4', 'atrc-prefix-atrc'),
			value: 'h4',
		},
		{
			label: __('H5', 'atrc-prefix-atrc'),
			value: 'h5',
		},
		{
			label: __('H6', 'atrc-prefix-atrc'),
			value: 'h6',
		},
		{
			label: __('p', 'atrc-prefix-atrc'),
			value: 'p',
		},
		{
			label: __('div', 'atrc-prefix-atrc'),
			value: 'div',
		},
		{
			label: __('span', 'atrc-prefix-atrc'),
			value: 'span',
		},
	];
};
export default SelectHtmlOptions;
