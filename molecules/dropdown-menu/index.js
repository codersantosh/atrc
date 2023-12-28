/*WordPress*/
import { DropdownMenu } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Component*/
const AtrcControlDropdownMenu = (props) => {
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

export default AtrcControlDropdownMenu;
