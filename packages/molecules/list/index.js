import React from 'react';

/*Library*/
import classnames from 'classnames';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/* Local */
const AtrcList = ({
	className,
	variant = '',
	column = '',
	type = 'ul',
	children,
}) => {
	const Tag = 'ol' === type ? 'ol' : 'ul';
	return (
		<Tag
			className={classnames(
				AtrcPrefix('ls'),
				className,
				column ? AtrcPrefix('ls-col') + '-' + column : '',
				variant ? AtrcPrefix('ls') + '-' + variant : ''
			)}>
			{children}
		</Tag>
	);
};
export default AtrcList;
