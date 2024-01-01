import { __ } from '@wordpress/i18n';

/* Align Options*/
const AlignItemsOptions = () => {
	return [
		{
			label: __('Align items start', 'atrc-prefix-atrc'),
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
			label: __('Align items end', 'atrc-prefix-atrc'),
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
			label: __('Align items center', 'atrc-prefix-atrc'),
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
			label: __('Align items baseline', 'atrc-prefix-atrc'),
			value: 'bsln',
			icon: () => (
				<svg
					className='at-svg at-w at-h'
					xmlns='http://www.w3.org/2000/svg'
					height='48'
					viewBox='0 -960 960 960'
					width='48'>
					<path d='M64-64v-73h832v73H64Zm220-160v-672h113v672H284Zm280 0v-432h113v432H564Z' />
				</svg>
			),
		},
		{
			label: __('Align items stretch', 'atrc-prefix-atrc'),
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
};
export default AlignItemsOptions;
