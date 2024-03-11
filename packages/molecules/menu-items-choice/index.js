/*WordPress*/
import { MenuItemsChoice } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcMenuItemsChoice = (props) => {
	const { className = '', variant = '', ...defaultProps } = props;

	return (
		<MenuItemsChoice
			className={classnames(
				AtrcPrefix('menu-itms-choice'),
				className,
				variant ? AtrcPrefix('menu-itms-choice') + '-' + variant : ''
			)}
			{...defaultProps}
		/>
	);
};
export default AtrcMenuItemsChoice;
