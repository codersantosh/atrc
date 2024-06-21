import React from 'react';

/*React*/
import { forwardRef } from 'react';

/*WordPress*/
import { __ } from '@wordpress/i18n';

import { decodeEntities } from '@wordpress/html-entities';

/* Atoms */
import AtrcSpan from '../../atoms/span';
import AtrcWrap from '../../atoms/wrap';
import AtrcLink from '../../atoms/link';
import AtrcSpinner from '../../atoms/spinner';

/* Internal */
import AtrcUsePostTerms from './use-post-terms';

/* Local */
const AtrcPostTerms = (props, ref) => {
	const {
		postType,
		postId,
		htmlTag = 'div',
		taxonomy = 'category',
		separator,
		...defaultProps
	} = props;

	const { postTerms, hasPostTerms, isLoading } = AtrcUsePostTerms({
		postId,
		taxonomy,
	});

	const hasPost = postType;

	const TermTag = htmlTag;

	return (
		<AtrcWrap
			{...defaultProps}
			ref={ref}>
			{isLoading && hasPost && <AtrcSpinner />}
			{hasPost &&
				!isLoading &&
				hasPostTerms &&
				postTerms
					.map((postTerm) => (
						<TermTag
							key={postTerm.id}
							className='at-txt'>
							<AtrcLink
								prefix={false}
								href={postTerm.link}
								onClick={(event) => event.preventDefault()}>
								{decodeEntities(postTerm.name)}
							</AtrcLink>
						</TermTag>
					))
					.reduce((prev, curr) => (
						<>
							{prev}
							<AtrcSpan
								dangerouslySetInnerHTML={{
									__html: separator || ' ',
								}}
							/>
							{curr}
						</>
					))}
			{hasPost &&
				!isLoading &&
				!hasPostTerms &&
				(selectedTerm?.labels?.no_terms ||
					__('Term items not found.', 'atrc-prefix-atrc'))}
		</AtrcWrap>
	);
};
export default forwardRef(AtrcPostTerms);
