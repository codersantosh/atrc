import React from 'react';

/*WordPress*/
import { DropdownMenu } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcDropdownMenu = (props) => {
	const { variant = '', className = '', ...defaultProps } = props;

	return (
		<DropdownMenu
			className={classnames(
				AtrcPrefix('ctrl-dropdown-menu'),
				className,
				variant ? AtrcPrefix('ctrl-dropdown-menu') + '-' + variant : ''
			)}
			{...defaultProps}
		/>
	);
};

export default AtrcDropdownMenu;
