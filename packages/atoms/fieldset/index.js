import React from 'react';

/*React*/
import { forwardRef } from 'react';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcWrap from '../wrap';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcFieldset = (props, ref) => {
	const {
		children = '',
		isNum = false,
		variant = '',
		className = '',
		...defaultProps
	} = props;

	return (
		<AtrcWrap
			tag='fieldset'
			className={classnames(
				AtrcPrefix('fieldset'),
				className,
				variant ? AtrcPrefix('fieldset') + '-' + variant : ''
			)}
			ref={ref}
			{...defaultProps}>
			{children}
		</AtrcWrap>
	);
};
export default forwardRef(AtrcFieldset);
