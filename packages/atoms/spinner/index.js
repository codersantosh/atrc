import React from 'react';

/*WordPress*/
import { Spinner } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcSpinner = (props = {}) => {
	const { className = '', variant = '', ...defaultProps } = props;

	return (
		<Spinner
			className={classnames(
				AtrcPrefix('spinner'),
				className,
				variant ? AtrcPrefix('spinner') + '-' + variant : ''
			)}
			{...defaultProps}
		/>
	);
};
export default AtrcSpinner;
