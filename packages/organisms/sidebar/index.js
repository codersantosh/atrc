/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcSidebar = (props) => {
	const {
		direction = 'right',
		className = '',
		variant = '' /*over and push*/,
		children = '',
		...defaultProps
	} = props;
	const Direction = () => {
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
	const Variant = () => {
		switch (variant) {
			case 'float':
			case 'floating':
				return 'flt';
		}
		return variant;
	};
	return (
		<AtrcWrap
			tag='aside'
			className={classnames(
				AtrcPrefix('sidebar'),
				className,
				variant ? AtrcPrefix('sidebar') + '-' + Variant() : '',
				direction ? AtrcPrefix('sidebar') + '-' + Direction() : ''
			)}
			{...defaultProps}>
			{children}
		</AtrcWrap>
	);
};
export default AtrcSidebar;
