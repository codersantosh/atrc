/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcTable = (props) => {
	const {
		className = '',
		variant = '',
		isRounded = false,
		isBordered = false,
		children,
		...defaultProps
	} = props;

	return (
		<table
			className={classnames(
				AtrcPrefix('tbl'),
				className,
				isBordered ? AtrcPrefix('bordered') : '',
				isRounded ? AtrcPrefix('rounded') : '',
				variant ? AtrcPrefix('tbl') + '-' + variant : ''
			)}
			{...defaultProps}>
			{children}
		</table>
	);
};

export default AtrcTable;
