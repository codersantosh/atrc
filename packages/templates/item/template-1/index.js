import React from 'react';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../../prefix-vars';

/*Local*/
const AtrcItemTemplate1 = (props) => {
	const {
		className,
		tag = 'div',
		role = null,
		size = '',
		isBordered = false,
		isRounded = false,
		isSeparated = false,
		isSuccess = false,
		isFail = false,
		isNew = false,
		isBadge = false,
		visibility = '',
		priority = '',
		variant = '',
		children,
		onClick = () => {},
		...defaultProps
	} = props;

	const ItemTag = tag;

	return (
		<ItemTag
			role={role}
			className={classnames(
				className,
				AtrcPrefix('itm'),
				size ? AtrcPrefix('itm') + '-' + size : '',
				isBordered ? AtrcPrefix('bdr') : '',
				isRounded ? AtrcPrefix('rounded') : '',
				isSeparated ? AtrcPrefix('sep') : '',
				isSuccess ? AtrcPrefix('success') : '',
				isFail ? AtrcPrefix('fail') : '',
				isNew ? AtrcPrefix('new') : '',
				isBadge ? AtrcPrefix('badge') : '',
				// variant?'atrc-'+variant:'',
				variant ? AtrcPrefix('') + variant : ''
			)}
			onClick={onClick}
			{...defaultProps}>
			{children}
		</ItemTag>
	);
};
export default AtrcItemTemplate1;
