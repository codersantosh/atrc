/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

import AtrcWrap from '../../atoms/wrap';

/*Local*/
const AtrcFooter = (props) => {
	const {
		className = '',
		variant = '',
		children = '',
		...defaultProps
	} = props;

	return (
		<AtrcWrap
			tag='footer'
			className={classnames(
				AtrcPrefix('footer'),
				className,
				variant ? AtrcPrefix('footer') + '-' + variant : ''
			)}
			{...defaultProps}>
			{children}
		</AtrcWrap>
	);
};
export default AtrcFooter;
