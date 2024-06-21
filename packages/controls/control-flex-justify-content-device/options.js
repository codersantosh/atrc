import React from 'react';

/*WordPress*/
import { __ } from '@wordpress/i18n';

/* Library */
import classnames from 'classnames';

/* Options*/
const JustifyContentOptions = () => {
	return [
		{
			label: __('Justify content start', 'atrc-prefix-atrc'),
			value: 'st',
			icon: ({ className = '' }) => (
				<svg
					className={classnames('at-svg at-w at-h', className)}
					xmlns='http://www.w3.org/2000/svg'
					height='48'
					viewBox='0 -960 960 960'
					width='48'>
					<path d='M64-67v-827h73v827H64Zm459-217v-393h113v393H523Zm-240 0v-393h113v393H283Z' />
				</svg>
			),
		},
		{
			label: __('Justify content end', 'atrc-prefix-atrc'),
			value: 'end',
			icon: ({ className = '' }) => (
				<svg
					className={classnames('at-svg at-w at-h', className)}
					xmlns='http://www.w3.org/2000/svg'
					height='48'
					viewBox='0 -960 960 960'
					width='48'>
					<path d='M823-67v-827h73v827h-73ZM563-284v-393h113v393H563Zm-240 0v-393h113v393H323Z' />
				</svg>
			),
		},
		{
			label: __('Justify content center', 'atrc-prefix-atrc'),
			value: 'ctr',
			icon: ({ className = '' }) => (
				<svg
					className={classnames('at-svg at-w at-h', className)}
					xmlns='http://www.w3.org/2000/svg'
					height='48'
					viewBox='0 -960 960 960'
					width='48'>
					<path d='M443-67v-827h73v827h-73Zm114-217v-393h113v393H557Zm-267 0v-393h113v393H290Z' />
				</svg>
			),
		},
		{
			label: __('Justify content between', 'atrc-prefix-atrc'),
			value: 'btw',
			icon: ({ className = '' }) => (
				<svg
					className={classnames('at-svg at-w at-h', className)}
					xmlns='http://www.w3.org/2000/svg'
					height='48'
					viewBox='0 -960 960 960'
					width='48'>
					<path d='M823-67v-217H710v-393h113v-217h73v827h-73ZM64-67v-827h73v217h113v393H137v217H64Z' />
				</svg>
			),
		},
		{
			label: __('Justify content around', 'atrc-prefix-atrc'),
			value: 'ard',
			icon: ({ className = '' }) => (
				<svg
					className={classnames('at-svg at-w at-h', className)}
					xmlns='http://www.w3.org/2000/svg'
					height='48'
					viewBox='0 -960 960 960'
					width='48'>
					<path d='M823-67v-827h73v827h-73ZM64-67v-827h73v827H64Zm539-217v-393h113v393H603Zm-360 0v-393h113v393H243Z' />
				</svg>
			),
		},
		{
			label: __('Justify content evenly', 'atrc-prefix-atrc'),
			value: 'evnly',
			icon: ({ className = '' }) => (
				<svg
					className={classnames('at-svg at-w at-h', className)}
					xmlns='http://www.w3.org/2000/svg'
					height='48'
					viewBox='0 -960 960 960'
					width='48'>
					<path d='M823-67v-827h73v827h-73ZM64-67v-827h73v827H64Zm499-217v-393h113v393H563Zm-280 0v-393h113v393H283Z' />
				</svg>
			),
		},
	];
};
export default JustifyContentOptions;
