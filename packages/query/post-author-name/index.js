/*WordPress*/
import { __ } from '@wordpress/i18n';

import { useSelect } from '@wordpress/data';

import { store as coreStore } from '@wordpress/core-data';

import { forwardRef } from '@wordpress/element';

/* Inbuilt */
import AtrcWrap from '../../atoms/wrap';
import AtrcLink from '../../atoms/link';

/* Local */
const AtrcPostAuthorName = (props, ref) => {
	const { postType, postId, htmlTag, linkOptions, ...defaultProps } = props;

	const { authorName } = useSelect(
		(select) => {
			const { getEditedEntityRecord, getUser } = select(coreStore);
			const _authorId = getEditedEntityRecord(
				'postType',
				postType,
				postId
			)?.author;

			return {
				authorName: _authorId ? getUser(_authorId) : null,
			};
		},
		[postType, postId]
	);

	const displayName = authorName?.name || __('Author Name', 'atrc=prefix-atrc');

	const displayAuthor =
		linkOptions && linkOptions.on ? (
			<AtrcLink
				prefix={false}
				href='#author-pseudo-link'
				onClick={(event) => event.preventDefault()}>
				{displayName}
			</AtrcLink>
		) : (
			displayName
		);

	return (
		<AtrcWrap
			{...defaultProps}
			ref={ref}
			tag={htmlTag}>
			{displayAuthor}
		</AtrcWrap>
	);
};

export default forwardRef(AtrcPostAuthorName);
