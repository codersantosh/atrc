import React from 'react';

/*Library*/
import classnames from 'classnames';

/*Prefix*/
import AtrcPrefix from '../../../prefix-vars';

/*Local*/
const AtrcTfoot = (props) => {
	const {
		className = '',
		variant = '',
		children = '',
		...defaultProps
	} = props;

	return (
		<tfoot
			className={classnames(
				AtrcPrefix('tfoot'),
				className,
				variant ? AtrcPrefix('tfoot') + '-' + variant : ''
			)}
			{...defaultProps}>
			{children}
		</tfoot>
	);
};
export default AtrcTfoot;
