/*React*/
import { forwardRef } from 'react';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcWrap from '../wrap';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcSpan = (props, ref) => {
	const {
		children = '',
		isNum = false,
		variant = '',
		className = '',
		...defaultProps
	} = props;

	return (
		<AtrcWrap
			tag='span'
			className={classnames(
				AtrcPrefix('span'),
				className,
				isNum ? AtrcPrefix('num') : '',
				variant ? AtrcPrefix('span') + '-' + variant : ''
			)}
			ref={ref}
			{...defaultProps}>
			{children}
		</AtrcWrap>
	);
};
export default forwardRef(AtrcSpan);
