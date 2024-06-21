import React from 'react';

/* WordPress */
import { __ } from '@wordpress/i18n';

/*Local*/
const AtrcBlocksGetTabs = (props = {}) => {
	const {
		basic = {
			on: true,
			props: {
				title: __('Basic', 'atomic-builder-gutenberg-blocks'),
				className: 'basic',
			},
		},
		style = {
			on: true,
			props: {
				title: __('Style', 'atomic-builder-gutenberg-blocks'),
				className: 'style',
			},
		},
		advanced = {
			on: true,
			props: {
				title: __('Expert', 'atomic-builder-gutenberg-blocks'),
				className: 'advanced',
			},
		},
	} = props;

	const tabs = [];
	if (basic.on) {
		tabs.push({
			...basic.props,
			name: 'basic',
		});
	}

	if (style.on) {
		tabs.push({
			...style.props,
			name: 'style',
		});
	}

	if (advanced.on) {
		tabs.push({
			...advanced.props,
			name: 'advanced',
		});
	}
	return tabs;
};

export default AtrcBlocksGetTabs;
