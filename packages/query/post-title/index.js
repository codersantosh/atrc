/*WordPress*/
import { __ } from '@wordpress/i18n';

import { useEntityProp } from '@wordpress/core-data';

import { forwardRef } from '@wordpress/element';

/* Inbuilt */
import AtrcWrap from '../../atoms/wrap';
import AtrcLink from '../../atoms/link';

/* Local */
const AtrcPostTitle = (props, ref) => {
	const { postType, postId, htmlTag, linkOptions, ...defaultProps } = props;

	// eslint-disable-next-line no-unused-vars
	const [rawTitle = '', setTitle, fullTitle] = useEntityProp(
		'postType',
		postType,
		'title',
		postId
	);

	const [link] = useEntityProp('postType', postType, 'link', postId);
	let titleElement = (
		<AtrcWrap
			{...defaultProps}
			ref={ref}
			tag={htmlTag}>
			{__('Title', 'atrc-prefix-atrc')}
		</AtrcWrap>
	);

	if (postType && postId) {
		if (linkOptions && linkOptions.on && postType && postId) {
			titleElement = (
				<AtrcWrap
					{...defaultProps}
					ref={ref}
					tag={htmlTag}>
					<AtrcLink
						prefix={false}
						href={link}
						target={linkOptions.tgt || null}
						rel={linkOptions.rel || null}
						onClick={(event) => event.preventDefault()}
						dangerouslySetInnerHTML={{
							__html: fullTitle?.rendered,
						}}
					/>
				</AtrcWrap>
			);
		} else {
			titleElement = (
				<AtrcWrap
					{...defaultProps}
					ref={ref}
					tag={htmlTag}
					dangerouslySetInnerHTML={{
						__html: fullTitle?.rendered,
					}}
				/>
			);
		}
	}
	return titleElement;
};

export default forwardRef(AtrcPostTitle);
