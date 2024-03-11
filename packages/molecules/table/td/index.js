/*Library*/
import classnames from 'classnames';

/*Prefix*/
import AtrcPrefix from '../../../prefix-vars';

/*Local*/
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
				'at-p',
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
