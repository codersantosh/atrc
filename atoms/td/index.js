/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcTd = (props) => {
	const {
		className = '',
		variant = '',
		children = '',
		colSpan = 1,
		...defaultProps
	} = props;

	return (
		<td
			className={classnames(
				AtrcPrefix('td'),
				className,
				variant ? AtrcPrefix('td') + '-' + variant : ''
			)}
			colSpan={colSpan}
			{...defaultProps}>
			{children}
		</td>
	);
};

export default AtrcTd;
