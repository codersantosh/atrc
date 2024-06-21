import React from 'react';

/* WordPress */
import { withSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

/* Controls */
import AtrcControlSelect from '../control-select';

/* Local */
const ImageSizeSelect = (props) => {
	const { imageSizes, ...defaultProps } = props;

	const sizeOptions = imageSizes.map((size) => ({
		label: size.name,
		value: size.slug,
	}));

	return (
		<AtrcControlSelect
			label={__('Image size', 'atrc-prefix-atrc')}
			wrapProps={{
				className: 'at-flx-grw-1',
			}}
			options={sizeOptions}
			defaultValue='full'
			{...defaultProps}
		/>
	);
};

// Fetch available image sizes using withSelect and getSettings
const AtrcControlImgSizeSelect = withSelect((select) => {
	const { getSettings } = select('core/block-editor');

	// Get available image sizes using getSettings
	const settings = getSettings();
	const imageSizes = settings.imageSizes || {};

	return {
		imageSizes,
	};
})(ImageSizeSelect);

export default AtrcControlImgSizeSelect;
