import React from 'react';

/*React*/
import { forwardRef } from 'react';

/*WordPress*/
import { store as coreStore } from '@wordpress/core-data';

import { useSelect } from '@wordpress/data';

import { __ } from '@wordpress/i18n';

import { addQueryArgs, removeQueryArgs } from '@wordpress/url';

/* Atoms */
import AtrcWrap from '../../atoms/wrap';
import AtrcImg from '../../atoms/img';

/* Internal */
import AtrcUseUserAvatar from './use-user-avatar';

/* Local */
const AtrcPostAuthorImage = (props, ref) => {
	const {
		postType,
		postId,
		htmlTag,
		linkOptions,
		size = 24,
		...defaultProps
	} = props;

	const authorId = useSelect(
		(select) => {
			const { getEditedEntityRecord } = select(coreStore);
			const _authorId = getEditedEntityRecord(
				'postType',
				postType,
				postId
			)?.author;

			return _authorId;
		},
		[postType, postId]
	);

	const avatar = AtrcUseUserAvatar({
		userId: authorId,
		postId,
		postType,
	});

	const doubledSizedSrc = addQueryArgs(removeQueryArgs(avatar?.src, ['s']), {
		s: size * 2,
	});

	return (
		<AtrcWrap
			{...defaultProps}
			ref={ref}
			tag='figure'>
			{doubledSizedSrc ? (
				<AtrcImg
					src={doubledSizedSrc}
					alt={__('Author image', 'atrc-prefix-atrc')}
				/>
			) : (
				__('Not author image found!', 'atrc-prefix-atrc')
			)}
		</AtrcWrap>
	);
};

export default forwardRef(AtrcPostAuthorImage);
