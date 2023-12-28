/*WordPress*/
import { __ } from '@wordpress/i18n';

/* Position Options*/
const TimingFunctionsOptions = [
	{
		label: __('Default', 'atrc-prefix-atrc'),
		value: '',
	},
	{
		label: __('Ease', 'atrc-prefix-atrc'),
		value: 'ease',
	},
	{
		label: __('Linear', 'atrc-prefix-atrc'),
		value: 'linear',
	},
	{
		label: __('Ease in', 'atrc-prefix-atrc'),
		value: 'ease-in',
	},
	{
		label: __('Ease out', 'atrc-prefix-atrc'),
		value: 'ease-out',
	},
	{
		label: __('Ease in out', 'atrc-prefix-atrc'),
		value: 'ease-in-out',
	},
];
export default TimingFunctionsOptions;
