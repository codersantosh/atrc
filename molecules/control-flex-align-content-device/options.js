/*WordPress*/
import { __ } from '@wordpress/i18n';

/* Align Options*/
const AlignContentOptions = [
	{
		label: __('Align content start', 'atrc-prefix-atrc'),
		value: 'st',
		icon: () => (
			<svg
				className='at-svg at-w at-h'
				xmlns='http://www.w3.org/2000/svg'
				height='48'
				viewBox='0 -960 960 960'
				width='48'>
				<path d='M64-64v-832h73v832H64Zm160-220v-113h432v113H224Zm0-280v-113h672v113H224Z' />
			</svg>
		),
	},
	{
		label: __('Align content end', 'atrc-prefix-atrc'),
		value: 'end',
		icon: () => (
			<svg
				className='at-svg at-w at-h'
				xmlns='http://www.w3.org/2000/svg'
				height='48'
				viewBox='0 -960 960 960'
				width='48'>
				<path d='M823-64v-832h73v832h-73ZM304-284v-113h433v113H304ZM64-564v-113h673v113H64Z' />
			</svg>
		),
	},
	{
		label: __('Align content center', 'atrc-prefix-atrc'),
		value: 'ctr',
		icon: () => (
			<svg
				className='at-svg at-w at-h'
				xmlns='http://www.w3.org/2000/svg'
				height='48'
				viewBox='0 -960 960 960'
				width='48'>
				<path d='M284-104v-340H64v-73h220v-339h113v339h167v-219h113v219h219v73H677v220H564v-220H397v340H284Z' />
			</svg>
		),
	},
	{
		label: __('Align content between', 'atrc-prefix-atrc'),
		value: 'btw',
		icon: () => (
			<svg
				className='at-svg at-w at-h'
				xmlns='http://www.w3.org/2000/svg'
				height='48'
				viewBox='0 -960 960 960'
				width='48'>
				<path d='M823-67v-827h73v827h-73ZM64-67v-827h73v827H64Zm499-217v-393h113v393H563Zm-280 0v-393h113v393H283Z' />
			</svg>
		),
	},
	{
		label: __('Align content around', 'atrc-prefix-atrc'),
		value: 'ard',
		icon: () => (
			<svg
				className='at-svg at-w at-h'
				xmlns='http://www.w3.org/2000/svg'
				height='48'
				viewBox='0 -960 960 960'
				width='48'>
				<path d='M823-67v-827h73v827h-73ZM64-67v-827h73v827H64Zm539-217v-393h113v393H603Zm-360 0v-393h113v393H243Z' />
			</svg>
		),
	},
	{
		label: __('Align content stretch', 'atrc-prefix-atrc'),
		value: 'strh',
		icon: () => (
			<svg
				className='at-svg at-w at-h'
				xmlns='http://www.w3.org/2000/svg'
				height='48'
				viewBox='0 -960 960 960'
				width='48'>
				<path d='M284-244v-473h113v473H284Zm280 0v-473h113v473H564ZM67-824v-73h826v73H67Zm0 760v-73h826v73H67Z' />
			</svg>
		),
	},
];
export default AlignContentOptions;
