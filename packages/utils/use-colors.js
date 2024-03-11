/* WordPress */
import { useState, useEffect } from '@wordpress/element';
import { select } from '@wordpress/data';
import { useSetting } from '@wordpress/block-editor';

/* Library */
import { isEmpty } from 'lodash';

/* Local */
const DefaultColors = () => {
	return {
		colors: [
			{
				color: 'var(#{$varPrefix}-white)fff',
				name: 'Base',
				slug: 'base',
			},
			{
				color: '#000000',
				name: 'Contrast',
				slug: 'contrast',
			},
			{
				color: '#9DFF20',
				name: 'Primary',
				slug: 'primary',
			},
			{
				color: '#345C00',
				name: 'Secondary',
				slug: 'secondary',
			},
			{
				color: '#F6F6F6',
				name: 'Tertiary',
				slug: 'tertiary',
			},
		],
		gradients: [
			{
				slug: 'vertical-secondary-to-tertiary',
				gradient:
					'linear-gradient(to bottom,var(--wp--preset--color--secondary) 0%,var(--wp--preset--color--tertiary) 100%)',
				name: 'Vertical secondary to tertiary',
			},
			{
				slug: 'vertical-secondary-to-background',
				gradient:
					'linear-gradient(to bottom,var(--wp--preset--color--secondary) 0%,var(--wp--preset--color--background) 100%)',
				name: 'Vertical secondary to background',
			},
			{
				slug: 'vertical-tertiary-to-background',
				gradient:
					'linear-gradient(to bottom,var(--wp--preset--color--tertiary) 0%,var(--wp--preset--color--background) 100%)',
				name: 'Vertical tertiary to background',
			},
			{
				slug: 'diagonal-primary-to-foreground',
				gradient:
					'linear-gradient(to bottom right,var(--wp--preset--color--primary) 0%,var(--wp--preset--color--foreground) 100%)',
				name: 'Diagonal primary to foreground',
			},
			{
				slug: 'diagonal-secondary-to-background',
				gradient:
					'linear-gradient(to bottom right,var(--wp--preset--color--secondary) 50%,var(--wp--preset--color--background) 50%)',
				name: 'Diagonal secondary to background',
			},
			{
				slug: 'diagonal-background-to-secondary',
				gradient:
					'linear-gradient(to bottom right,var(--wp--preset--color--background) 50%,var(--wp--preset--color--secondary) 50%)',
				name: 'Diagonal background to secondary',
			},
			{
				slug: 'diagonal-tertiary-to-background',
				gradient:
					'linear-gradient(to bottom right,var(--wp--preset--color--tertiary) 50%,var(--wp--preset--color--background) 50%)',
				name: 'Diagonal tertiary to background',
			},
			{
				slug: 'diagonal-background-to-tertiary',
				gradient:
					'linear-gradient(to bottom right,var(--wp--preset--color--background) 50%,var(--wp--preset--color--tertiary) 50%)',
				name: 'Diagonal background to tertiary',
			},
		],
	};
};

export function AtrcUseColorSolids() {
	const [allSolids, setAllSolids] = useState([]);

	const userPalette = useSetting('color.palette.custom');
	const themePalette = useSetting('color.palette.theme');
	const defaultPalette = useSetting('color.palette.default');

	useEffect(() => {
		let solids = [
			...(userPalette || []),
			...(themePalette || []),
			...(defaultPalette || []),
		];
		if (isEmpty(solids)) {
			solids = select('core/block-editor').getSettings().colors;
		}
		if (isEmpty(solids)) {
			solids = [...DefaultColors().colors];
		}
		setAllSolids(solids);
	}, [userPalette, themePalette, defaultPalette]);

	return allSolids;
}

export function AtrcUseColorGradients() {
	const [allGradients, setAllGradients] = useState([]);

	const userGradientPalette = useSetting('color.gradients.custom');
	const themeGradientPalette = useSetting('color.gradients.theme');
	const defaultGradientPalette = useSetting('color.gradients.default');

	useEffect(() => {
		let gradientsColor = [
			...(userGradientPalette || []),
			...(themeGradientPalette || []),
			...(defaultGradientPalette || []),
		];
		if (isEmpty(gradientsColor)) {
			gradientsColor = select('core/block-editor').getSettings().gradients;
		}
		if (isEmpty(gradientsColor)) {
			gradientsColor = [...DefaultColors().gradients];
		}
		setAllGradients(gradientsColor);
	}, [userGradientPalette, themeGradientPalette, defaultGradientPalette]);

	return allGradients;
}

const AtrcUseColors = () => {
	const allSolids = AtrcUseColorSolids();
	const allGradients = AtrcUseColorGradients();

	return {
		allSolids,
		allGradients,
	};
};

export default AtrcUseColors;
