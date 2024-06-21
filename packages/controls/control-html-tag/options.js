import React from 'react';

/*WordPress*/
import { __ } from '@wordpress/i18n';

/* Align Options*/
const SelectHtmlOptions = () => {
	return [
		{
			label: __('div', 'atrc-prefix-atrc'),
			value: 'div',
		},
		{
			label: __('section', 'atrc-prefix-atrc'),
			value: 'section',
		},
		{
			label: __('article', 'atrc-prefix-atrc'),
			value: 'article',
		},
		{
			label: __('aside', 'atrc-prefix-atrc'),
			value: 'aside',
		},
		{
			label: __('footer', 'atrc-prefix-atrc'),
			value: 'footer',
		},
		{
			label: __('header', 'atrc-prefix-atrc'),
			value: 'header',
		},
		{
			label: __('address', 'atrc-prefix-atrc'),
			value: 'address',
		},
		{
			label: __('main', 'atrc-prefix-atrc'),
			value: 'main',
		},
		{
			label: __('nav', 'atrc-prefix-atrc'),
			value: 'nav',
		},
		{
			label: __('blockquote', 'atrc-prefix-atrc'),
			value: 'blockquote',
		},
		{
			label: __('details', 'atrc-prefix-atrc'),
			value: 'details',
		},
		{
			label: __('summary', 'atrc-prefix-atrc'),
			value: 'summary',
		},
		{
			label: __('hgroup', 'atrc-prefix-atrc'),
			value: 'hgroup',
		},
	];
};
export default SelectHtmlOptions;
