import React from 'react';

/*React*/
import { forwardRef } from 'react';

/*Library*/
import classnames from 'classnames';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcForm = (props, ref) => {
	const {
		className = '',
		variant = '',
		children = '',
		...defaultProps
	} = props;

	return (
		<form
			ref={ref}
			className={classnames(
				AtrcPrefix('form'),
				className,
				variant ? AtrcPrefix('form') + '-' + variant : ''
			)}
			{...defaultProps}>
			{children}
		</form>
	);
};

export default forwardRef(AtrcForm);
