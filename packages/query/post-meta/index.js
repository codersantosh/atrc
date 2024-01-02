/*React*/
import { forwardRef } from 'react';
/*WordPress*/
import { __ } from '@wordpress/i18n';

import { useEntityProp } from '@wordpress/core-data';

/* Inbuilt */
import AtrcWrap from '../../atoms/wrap';
import AtrcNotice from './../../molecules/notice';
import AtrcIsScalar from '../../utils/is-scalar';

/* Local */
const AtrcPostMeta = (props, ref) => {
	const { postType, postId, htmlTag, metaKey, ...defaultProps } = props;

	// eslint-disable-next-line @wordpress/no-unused-vars-before-return, no-unused-vars
	const [meta, updateMeta] = useEntityProp(
		'postType',
		postType,
		'meta',
		postId
	);
	const metaValue = meta?.[metaKey] || null;
	if (null === metaValue) {
		return (
			<AtrcWrap
				{...defaultProps}
				ref={ref}>
				<AtrcNotice
					isDismissible={false}
					autoDismiss={false}>
					{__(
						'Meta value not found for the provided meta key and it should be accessible through the REST API.',
						'atrc-prefix-atrc'
					)}
				</AtrcNotice>
			</AtrcWrap>
		);
	}
	if (!AtrcIsScalar(metaValue)) {
		return (
			<AtrcWrap
				{...defaultProps}
				ref={ref}>
				<AtrcNotice
					isDismissible={false}
					autoDismiss={false}>
					{__(
						'Supported values are limited to strings, numbers, or scalar values only.',
						'atrc-prefix-atrc'
					)}
				</AtrcNotice>
			</AtrcWrap>
		);
	}
	return (
		<AtrcWrap
			{...defaultProps}
			ref={ref}
			tag={htmlTag}>
			{metaValue}
		</AtrcWrap>
	);
};
export default forwardRef(AtrcPostMeta);
