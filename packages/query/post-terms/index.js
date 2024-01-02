/*React*/
import { forwardRef } from 'react';
/*WordPress*/
import { __ } from '@wordpress/i18n';

import { decodeEntities } from '@wordpress/html-entities';

/* Inbuilt */
import AtrcWrap from '../../atoms/wrap';
import AtrcLink from '../../atoms/link';
import AtrcSpinner from '../../atoms/spinner';

/* Local */
import AtrcUsePostTerms from './use-post-terms';

const AtrcPostTerms = (props, ref) => {
	const {
		postType,
		postId,
		htmlTag,
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
							<span
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
