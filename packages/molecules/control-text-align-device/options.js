/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import {
	BsJustify,
	BsTextCenter,
	BsTextLeft,
	BsTextRight,
} from 'react-icons/bs';

/* Align Options*/
const TextAlignOptions = () => {
	return [
		{
			label: __('Left', 'atrc-prefix-atrc'),
			value: 'l',
			icon: BsTextLeft,
			iconType: 'bootstrap',
		},
		{
			label: __('Justify', 'atrc-prefix-atrc'),
			value: 'jfy',
			icon: BsJustify,
			iconType: 'bootstrap',
		},
		{
			label: __('Center', 'atrc-prefix-atrc'),
			value: 'ctr',
			icon: BsTextCenter,
			iconType: 'bootstrap',
		},
		{
			label: __('Right', 'atrc-prefix-atrc'),
			value: 'r',
			icon: BsTextRight,
			iconType: 'bootstrap',
		},
	];
};
export default TextAlignOptions;
