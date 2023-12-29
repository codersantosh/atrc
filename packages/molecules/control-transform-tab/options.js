/*WordPress*/
import { __ } from '@wordpress/i18n';

/* Origin Options*/
const OriginOptions = [
	{
		label: __('Default', 'atrc-prefix-atrc'),
		value: '',
	},
	{
		label: __('Top left', 'atrc-prefix-atrc'),
		value: 'top left',
	},
	{
		label: __('Top center', 'atrc-prefix-atrc'),
		value: 'top center',
	},
	{
		label: __('Top right', 'atrc-prefix-atrc'),
		value: 'top right',
	},
	{
		label: __('Center left', 'atrc-prefix-atrc'),
		value: 'center left',
	},
	{
		label: __('Center center', 'atrc-prefix-atrc'),
		value: 'center center',
	},
	{
		label: __('Center right', 'atrc-prefix-atrc'),
		value: 'center right',
	},
	{
		label: __('Bottom left', 'atrc-prefix-atrc'),
		value: 'bottom left',
	},
	{
		label: __('Bottom center', 'atrc-prefix-atrc'),
		value: 'bottom center',
	},
	{
		label: __('Bottom right', 'atrc-prefix-atrc'),
		value: 'bottom right',
	},
	{
		label: __('Custom', 'atrc-prefix-atrc'),
		value: 'custom',
	},
];
export default OriginOptions;
