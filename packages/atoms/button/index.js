/*WordPress*/

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcButton = (props) => {
	const {
		className = '',
		variant = '',
		isActive = false,
		text = '',
		children = '',
		isPrimary = '',
		...defaultProps
	} = props;

	return (
		<button
			className={classnames(
				'at-btn',
				className,
				isActive ? AtrcPrefix('btn-active') : '',
				variant ? AtrcPrefix('btn') + '-' + variant : ''
			)}
			{...defaultProps}>
			{children || text}
		</button>
	);
};
export default AtrcButton;
