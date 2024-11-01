import React from 'react';

/* WordPress */
import { store as blockEditorStore } from '@wordpress/block-editor';
import { store as coreStore } from '@wordpress/core-data';
import { __, sprintf } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';

/* Local */
function getAvatarSizes(sizes) {
	const minSize = sizes ? sizes[0] : 24;
	const maxSize = sizes ? sizes[sizes.length - 1] : 96;
	const maxSizeBuffer = Math.floor(maxSize * 2.5);
	return {
		minSize,
		maxSize: maxSizeBuffer,
	};
}

function useDefaultAvatar() {
	const { avatarURL: defaultAvatarUrl } = useSelect((select) => {
		const { getSettings } = select(blockEditorStore);
		const { __experimentalDiscussionSettings } = getSettings();
		return __experimentalDiscussionSettings;
	});
	return defaultAvatarUrl;
}

export default function AtrcUseUserAvatar({ userId, postId, postType }) {
	const { authorDetails } = useSelect(
		(select) => {
			const { getEditedEntityRecord, getUser } = select(coreStore);
			if (userId) {
				return {
					authorDetails: getUser(userId),
				};
			}
			const _authorId = getEditedEntityRecord(
				'postType',
				postType,
				postId
			)?.author;

			return {
				authorDetails: _authorId ? getUser(_authorId) : null,
			};
		},
		[postType, postId, userId]
	);
	const avatarUrls = authorDetails?.avatar_urls
		? Object.values(authorDetails.avatar_urls)
		: null;
	const sizes = authorDetails?.avatar_urls
		? Object.keys(authorDetails.avatar_urls)
		: null;
	const { minSize, maxSize } = getAvatarSizes(sizes);
	const defaultAvatar = useDefaultAvatar();
	return {
		src: avatarUrls ? avatarUrls[avatarUrls.length - 1] : defaultAvatar,
		minSize,
		maxSize,
		alt: authorDetails
			? // translators: %s is the Author name.
			  sprintf(__('%s Avatar'), authorDetails?.name)
			: __('Default Avatar'),
	};
}
