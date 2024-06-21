import React from 'react';

/*Library*/
import classnames from 'classnames';

/*Prefix*/
import AtrcPrefix from '../../../prefix-vars';

/*Local*/
const AtrcTbody = (props) => {
	const {
		className = '',
		variant = '',
		children = '',
		...defaultProps
	} = props;

	return (
		<tbody
			className={classnames(
				AtrcPrefix('tbody'),
				className,
				variant ? AtrcPrefix('tbody') + '-' + variant : ''
			)}
			{...defaultProps}>
			{children}
		</tbody>
	);
};

export default AtrcTbody;
