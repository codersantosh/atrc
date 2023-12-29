/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Local Components*/
const AnimationOptions = [
	{
		label: __('None', 'atrc-prefix-atrc'),
		value: 'none',
	},
	{
		label: __('BounceIn', 'atrc-prefix-atrc'),
		value: 'bounceIn',
	},
	{
		label: __('FadeIn', 'atrc-prefix-atrc'),
		value: 'fadeIn',
	},
	{
		label: __('FadeOut', 'atrc-prefix-atrc'),
		value: 'fadeOut',
	},
	{
		label: __('Flip', 'atrc-prefix-atrc'),
		value: 'flip',
	},
	{
		label: __('RotateIn', 'atrc-prefix-atrc'),
		value: 'rotateIn',
	},
	{
		label: __('RotateOut', 'atrc-prefix-atrc'),
		value: 'rotateOut',
	},
	{
		label: __('SlideInLeft', 'atrc-prefix-atrc'),
		value: 'slideInLeft',
	},
	{
		label: __('SlideInRight', 'atrc-prefix-atrc'),
		value: 'slideInRight',
	},
	{
		label: __('SlideInUp', 'atrc-prefix-atrc'),
		value: 'slideInUp',
	},
	{
		label: __('SlideInDown', 'atrc-prefix-atrc'),
		value: 'slideInDown',
	},
	{
		label: __('ZoomIn', 'atrc-prefix-atrc'),
		value: 'zoomIn',
	},
	{
		label: __('HeartBeat', 'atrc-prefix-atrc'),
		value: 'heartBeat',
	},
];

const IterationType = [
	{
		label: __('Once', 'atrc-prefix-atrc'),
		value: '1',
	},
	{
		label: __('Infinite Loop', 'atrc-prefix-atrc'),
		value: 'infinite',
	},
];

export { AnimationOptions, IterationType };
