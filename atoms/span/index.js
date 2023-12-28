/*WordPress*/
import { forwardRef } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local components*/
const AtrcSpan = (props, ref) => {
	const {
		children = '',
		isNum = false,
		variant = '',
		className = '',
		...defaultProps
	} = props;

	return (
		<span
			className={classnames(
				AtrcPrefix('span'),
				className,
				isNum ? AtrcPrefix('num') : '',
				variant ? AtrcPrefix('span') + '-' + variant : ''
			)}
			ref={ref}
			{...defaultProps}>
			{children}
		</span>
	);
};
export default forwardRef(AtrcSpan);
