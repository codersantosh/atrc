import React from 'react';

/*Library*/
import classnames from 'classnames';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcHr = (props) => {
	const { className = '', variant = '', ...defaultProps } = props;

	return (
		<hr
			className={classnames(
				AtrcPrefix('hr'),
				className,
				variant ? AtrcPrefix('hr') + '-' + variant : ''
			)}
			{...defaultProps}
		/>
	);
};
export default AtrcHr;
