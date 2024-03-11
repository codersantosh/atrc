/*Library*/
import classnames from 'classnames';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcTable = (props) => {
	const {
		className = '',
		variant = '',
		isRounded = false,
		isBordered = false,
		children,
		...defaultProps
	} = props;
	console.log(props);
	return (
		<table
			className={classnames(
				AtrcPrefix('tbl'),
				'at-w',
				className,
				isBordered ? AtrcPrefix('tbl-bordered') : '',
				isRounded ? AtrcPrefix('tbl-rounded') : '',
				variant ? AtrcPrefix('tbl') + '-' + variant : ''
			)}
			{...defaultProps}>
			{children}
		</table>
	);
};

export default AtrcTable;
