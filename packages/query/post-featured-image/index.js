import React from 'react';

/*React*/
import { forwardRef } from 'react';

/*WordPress*/
import { useEntityProp, store as coreStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import { __, sprintf } from '@wordpress/i18n';

/* Atoms */
import AtrcWrap from '../../atoms/wrap';
import AtrcImg from '../../atoms/img';

/* Local */
function getMediaSourceUrlBySizeSlug(media, slug) {
	return media?.media_details?.sizes?.[slug]?.source_url || media?.source_url;
}

const AtrcPostFeaturedImage = (props, ref) => {
	const {
		postType,
		postId,
		htmlTag,
		linkOptions,
		size = 'full',
		...defaultProps
	} = props;

	// eslint-disable-next-line no-unused-vars
	const [featuredImage, setFeaturedImage] = useEntityProp(
		'postType',
		postType,
		'featured_media',
		postId
	);

	const media = useSelect(
		(select) => {
			const { getMedia } = select(coreStore);
			if (featuredImage) {
				return getMedia(featuredImage, {
					context: 'view',
				});
			}
			return {};
		},
		[featuredImage]
	);

	const mediaUrl = getMediaSourceUrlBySizeSlug(media, size);

	return (
		<AtrcWrap
			{...defaultProps}
			ref={ref}
			tag='figure'>
			{mediaUrl ? (
				<AtrcImg
					src={mediaUrl}
					alt={
						media && media.alt_text
							? sprintf(
									// translators: %s: The image's alt text.
									__('Featured image: %s', 'atrc-prefix-atrc'),
									media.alt_text
							  )
							: __('Featured image', 'atrc-prefix-atrc')
					}
				/>
			) : (
				__('Not featured image found!', 'atrc-prefix-atrc')
			)}
		</AtrcWrap>
	);
};

export default forwardRef(AtrcPostFeaturedImage);
