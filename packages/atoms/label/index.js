import React from 'react';

/*React*/
import { forwardRef } from 'react';

/*Library*/
import classnames from 'classnames';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcLabel = (props, ref) => {
	const {
		className = '',
		variant = '',
		children = '',
		htmlFor = '#',
		...defaultProps
	} = props;

	return (
		<label
			className={classnames(
				AtrcPrefix('lbl'),
				'at-m',
				className,
				variant ? AtrcPrefix('lbl') + '-' + variant : ''
			)}
			htmlFor={htmlFor}
			ref={ref}
			{...defaultProps}>
			{children}
		</label>
	);
};
export default forwardRef(AtrcLabel);
