/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcTh = (props) => {
	const {
		colSpan = 1,
		isSorting = false,
		isSortActive = false,
		onMouseEnter = () => {},
		onMouseLeave = () => {},
		className = '',
		variant = '',
		children = '',
		...defaultProps
	} = props;

	return (
		<th
			className={classnames(
				AtrcPrefix('th'),
				className,
				isSorting ? AtrcPrefix('sorting') : '',
				isSortActive ? AtrcPrefix('sorting-active') : '',
				variant ? AtrcPrefix('th') + '-' + variant : ''
			)}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			colSpan={colSpan}
			{...defaultProps}>
			{children}
		</th>
	);
};

export default AtrcTh;
