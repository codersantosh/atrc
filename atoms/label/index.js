/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcLabel = (props) => {
	const {
		className = '',
		variant = '',
		children = '',
		htmlFor = '#',
		...defaultProps
	} = props;

	return (
		<label
			className={classnames(
				AtrcPrefix('lbl'),
				'at-m',
				className,
				variant ? AtrcPrefix('lbl') + '-' + variant : ''
			)}
			htmlFor={htmlFor}
			{...defaultProps}>
			{children}
		</label>
	);
};
export default AtrcLabel;
