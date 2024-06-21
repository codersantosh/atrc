import React from 'react';

/*WordPress*/
import { MenuGroup } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcMenuGroup = (props) => {
	const { className = '', variant = '', ...defaultProps } = props;

	return (
		<MenuGroup
			className={classnames(
				AtrcPrefix('menu-grp'),
				className,
				variant ? AtrcPrefix('menu-grp') + '-' + variant : ''
			)}
			{...defaultProps}
		/>
	);
};
export default AtrcMenuGroup;
