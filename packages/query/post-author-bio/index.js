import React from 'react';

/*React*/
import { forwardRef } from 'react';

/*WordPress*/
import { __ } from '@wordpress/i18n';

import { useSelect } from '@wordpress/data';

import { store as coreStore } from '@wordpress/core-data';

/* Atoms */
import AtrcWrap from '../../atoms/wrap';

/* Local */
const AtrcPostAuthorBio = (props, ref) => {
	const { postType, postId, htmlTag, ...defaultProps } = props;

	const { authorDetails } = useSelect(
		(select) => {
			const { getEditedEntityRecord, getUser } = select(coreStore);
			const _authorId = getEditedEntityRecord(
				'postType',
				postType,
				postId
			)?.author;

			return {
				authorDetails: _authorId ? getUser(_authorId) : null,
			};
		},
		[postType, postId]
	);

	const displayAuthorBiography =
		authorDetails?.description || __('Author Biography', 'atrc-prefix-atrc');

	return (
		<AtrcWrap
			{...defaultProps}
			ref={ref}
			tag={htmlTag}
			dangerouslySetInnerHTML={{ __html: displayAuthorBiography }}
		/>
	);
};

export default forwardRef(AtrcPostAuthorBio);
