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
const AtrcCode = (props, ref) => {
	const {
		className = '',
		variant = '',
		children = '',
		...defaultProps
	} = props;

	return (
		<AtrcWrap
			tag='code'
			className={classnames(
				AtrcPrefix('code'),
				className,
				variant ? AtrcPrefix('code') + '-' + variant : ''
			)}
			ref={ref}
			{...defaultProps}>
			{children}
		</AtrcWrap>
	);
};

export default forwardRef(AtrcCode);
