import React from 'react';

/*WordPress*/

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcWrap from '../wrap';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/*Local*/
function getVariantClass(variant) {
	if (variant.includes('outline')) {
		variant = variant.replace(/outline/, 'outln');
	} else if (variant.includes('link')) {
		variant = variant.replace(/link/, 'lnk');
	}
	return AtrcPrefix('bg') + '-' + variant;
}
function getChildVariantClass(variant) {
	return AtrcPrefix('txt') + '-' + variant;
}

const AtrcBadge = (props) => {
	const {
		className = '',
		variant = 'primary',
		tag = 'span',
		text = '',
		children = '',
		hasIcon = false,
		childVariant = '',
		...defaultProps
	} = props;

	const thisClassName = classnames(
		AtrcPrefix('badge'),
		'at-bg-cl',
		'at-p',
		className,
		variant ? getVariantClass(variant) : '',
		hasIcon ? 'at-al-itm-ctr at-flx at-gap at-badge-icon' : '',
		childVariant ? getChildVariantClass(childVariant) : ''
	);

	return (
		<AtrcWrap
			tag={tag}
			className={thisClassName}
			{...defaultProps}>
			{children || text}
		</AtrcWrap>
	);
};
export default AtrcBadge;
