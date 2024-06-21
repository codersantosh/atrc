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
const AtrcWrapLib = (props, ref) => {
	const {
		className = '',
		variant = '',
		children = '',
		...defaultProps
	} = props;

	return (
		<AtrcWrap
			className={classnames(
				AtrcPrefix('wrp-lib'),
				className,
				variant ? AtrcPrefix('wrp-lib') + '-' + variant : ''
			)}
			ref={ref}
			{...defaultProps}>
			{children}
		</AtrcWrap>
	);
};

export default forwardRef(AtrcWrapLib);
