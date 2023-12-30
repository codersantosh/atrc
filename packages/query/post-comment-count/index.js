/*WordPress*/
import { __ } from '@wordpress/i18n';

import { forwardRef, useEffect, useState } from '@wordpress/element';

import apiFetch from '@wordpress/api-fetch';

import { addQueryArgs } from '@wordpress/url';

/* Inbuilt */
import AtrcWrap from '../../atoms/wrap';

import AtrcNotice from './../../molecules/notice';

/* Local */
const AtrcPostCommentCount = (props, ref) => {
	const { postId, htmlTag, ...defaultProps } = props;

	const [commentsCount, setCommentsCount] = useState();
	useEffect(() => {
		if (!postId) {
			return;
		}
		const currentPostId = postId;
		apiFetch({
			path: addQueryArgs('/wp/v2/comments', {
				post: postId,
			}),
			parse: false,
		}).then((res) => {
			// Stale requests will have the `currentPostId` of an older closure.
			if (currentPostId === postId) {
				setCommentsCount(res.headers.get('X-WP-Total'));
			}
		});
	}, [postId]);

	const hasPostAndComments = postId && commentsCount !== undefined;

	if (!hasPostAndComments) {
		return <AtrcNotice>{__('Post not found.', 'atrc-prefix-atrc')}</AtrcNotice>;
	}
	return (
		<AtrcWrap
			{...defaultProps}
			ref={ref}
			tag={htmlTag}>
			{commentsCount}
		</AtrcWrap>
	);
};

export default forwardRef(AtrcPostCommentCount);
