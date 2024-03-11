/*React*/
import { forwardRef } from 'react';

/*WordPress*/
import { __ } from '@wordpress/i18n';

import { useEntityProp } from '@wordpress/core-data';

import {
	// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
	__experimentalUseHasRecursion as useHasRecursion,
} from '@wordpress/block-editor';

/* Atoms */
import AtrcWrap from '../../atoms/wrap';

/* Molecules */
import AtrcNotice from './../../molecules/notice';

/* Local */
const AtrcPostContent = (props, ref) => {
	const { postType, postId, htmlTag, ...defaultProps } = props;

	const hasAlreadyRendered = useHasRecursion(postId);

	const [, , content] = useEntityProp('postType', postType, 'content', postId);

	if (postId && postType && hasAlreadyRendered) {
		return (
			<AtrcWrap
				{...defaultProps}
				ref={ref}>
				<AtrcNotice
					isDismissible={false}
					autoDismiss={false}>
					{__('Block cannot be rendered inside itself.', 'atrc-prefix-atrc')}
				</AtrcNotice>
			</AtrcWrap>
		);
	}

	return content?.protected ? (
		<AtrcWrap
			{...defaultProps}
			ref={ref}>
			<AtrcNotice
				isDismissible={false}
				autoDismiss={false}>
				{__('This content is password protected.', 'atrc-prefix-atrc')}
			</AtrcNotice>
		</AtrcWrap>
	) : (
		<AtrcWrap
			{...defaultProps}
			ref={ref}
			tag={htmlTag}
			dangerouslySetInnerHTML={{ __html: content?.rendered }}
		/>
	);
};

export default forwardRef(AtrcPostContent);
