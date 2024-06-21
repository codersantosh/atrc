import React from 'react';

/*Library*/
import classnames from 'classnames';

/*Prefix*/
import AtrcPrefix from '../../../prefix-vars';

/*Local*/
const AtrcTr = (props) => {
	const {
		variant = '',
		className = '',
		children = '',
		isSticky = false,
		isLocked = false,
		isEven = false,
		isOdd = false,
		...defaultProps
	} = props;

	return (
		<tr
			className={classnames(
				AtrcPrefix('tr'),
				className,
				variant ? AtrcPrefix('tr') + '-' + variant : '',
				isSticky ? 'at-stky' : '',
				isLocked ? AtrcPrefix('locked') + ' at-opa at-cur at-pos at-z-idx' : '',
				isEven ? AtrcPrefix('even') + ' at-bg-cl' : '',
				isOdd ? AtrcPrefix('odd') + ' at-bg-cl' : ''
			)}
			{...defaultProps}>
			{children}
		</tr>
	);
};
export default AtrcTr;
