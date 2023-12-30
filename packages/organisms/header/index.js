/*WordPress*/
import { useEffect } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';

import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcHeader = (props) => {
	const {
		isSticky = false,
		className = '',
		variant = '',
		children = '',
		...defaultProps
	} = props;

	useEffect(() => {
		if (isSticky) {
			document.body.classList.add(AtrcPrefix('has-sticky'));
			return () => {
				document.body.classList.remove(AtrcPrefix('has-sticky'));
			};
		}
	}, []);

	return (
		<AtrcWrap
			tag='header'
			className={classnames(
				AtrcPrefix('header'),
				'at-bg-cl',
				className,
				isSticky ? AtrcPrefix('header-sticky') : ''
			)}
			{...defaultProps}>
			{children}
		</AtrcWrap>
	);
};
export default AtrcHeader;
