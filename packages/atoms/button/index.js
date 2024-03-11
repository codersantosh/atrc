/*WordPress*/

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcLink from '../link';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/*Local*/
function getVariantClass(variant) {
	if (variant.includes('outline')) {
		variant = variant.replace(/outline/, 'outln');
	} else if (variant.includes('link')) {
		variant = variant.replace(/link/, 'lnk');
	}
	return AtrcPrefix('btn') + '-' + variant;
}

const AtrcButton = (props) => {
	const {
		className = '',
		variant = 'primary',
		isActive = false,
		text = '',
		children = '',
		hasIcon = false,
		isLink = false,
		...defaultProps
	} = props;

	const thisClassName = classnames(
		AtrcPrefix('btn'),
		className,
		isActive ? AtrcPrefix('btn-active') : '',
		variant ? getVariantClass(variant) : '',
		hasIcon ? 'at-al-itm-ctr at-flx at-jfy-cont-ctr at-gap at-btn-icon' : ''
	);

	if (isLink) {
		return (
			<AtrcLink
				className={thisClassName}
				isButton={true}
				children={children || text}
				{...defaultProps}
			/>
		);
	}

	return (
		<button
			className={thisClassName}
			{...defaultProps}>
			{children || text}
		</button>
	);
};
export default AtrcButton;
