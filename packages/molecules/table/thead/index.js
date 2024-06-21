import React from 'react';

/*Library*/
import classnames from 'classnames';

/*Prefix*/
import AtrcPrefix from '../../../prefix-vars';

/*Local*/
const AtrcThead = (props) => {
	const {
		className = '',
		variant = '',
		children = '',
		...defaultProps
	} = props;

	return (
		<thead
			className={classnames(
				AtrcPrefix('thead'),
				className,
				variant ? AtrcPrefix('thead') + '-' + variant : ''
			)}
			{...defaultProps}>
			{children}
		</thead>
	);
};
export default AtrcThead;
