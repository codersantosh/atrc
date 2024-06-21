import React from 'react';

/*Library*/
import classnames from 'classnames';

/*Prefix*/
import AtrcPrefix from '../../../prefix-vars';

/*Local*/
const AtrcLi = (props) => {
	const {
		className = '',
		variant = '',
		hasIcon = false,
		children = '',
		...defaultProps
	} = props;

	return (
		<li
			className={classnames(
				AtrcPrefix('li'),
				className,
				variant ? AtrcPrefix('li') + '-' + variant : '',
				hasIcon ? AtrcPrefix('li-has-icon') : ''
			)}
			{...defaultProps}>
			{children}
		</li>
	);
};
export default AtrcLi;
