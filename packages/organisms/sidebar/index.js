/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const Direction = (direction) => {
	switch (direction) {
		case 'right':
			return 'r';
		case 'left':
			return 'l';
		case 'top':
			return 't';
		case 'bottom':
			return 'b';
	}
};

const Variant = (variant) => {
	switch (variant) {
		case 'float':
		case 'floating':
			return 'flt';
	}
	return variant;
};

const AtrcSidebar = (props) => {
	const {
		direction = 'right',
		className = '',
		variant = '' /*over and push*/,
		children = '',
		...defaultProps
	} = props;

	return (
		<AtrcWrap
			tag='aside'
			className={classnames(
				AtrcPrefix('sdbar'),
				className,
				variant ? AtrcPrefix('sdbar') + '-' + Variant(variant) : '',
				direction ? AtrcPrefix('sdbar') + '-' + Direction(direction) : ''
			)}
			{...defaultProps}>
			{children}
		</AtrcWrap>
	);
};
export default AtrcSidebar;
