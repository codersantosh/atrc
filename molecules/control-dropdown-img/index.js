/*Attributes Structure
Type string
**/

/*WordPress*/
import { __ } from '@wordpress/i18n';

import { ToolbarButton } from '@wordpress/components';

import { image } from '@wordpress/icons';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import { AtrcButton, AtrcIcon } from '../../atoms';

import { AtrcControlImg, AtrcDropdown } from '../index';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/

const AtrcControlDropdownImg = (props) => {
	const {
		isToolbar = false,
		value,
		onChange = () => {},
		variant = '',
		className = '',
		...defaultProps
	} = props;

	return (
		<AtrcDropdown
			className={classnames(
				AtrcPrefix('ctrl-dropdown-img'),
				className,
				variant ? AtrcPrefix('ctrl-dropdown-img') + '-' + variant : ''
			)}
			renderToggle={({ isOpen, onToggle }) =>
				isToolbar ? (
					<ToolbarButton
						name='img'
						title={__('Select image', 'atrc-prefix-atrc')}
						onClick={onToggle}
						isActive={false}>
						<AtrcIcon icon={image} />
					</ToolbarButton>
				) : (
					<AtrcButton
						aria-expanded={isOpen}
						onClick={onToggle}>
						<AtrcIcon icon={image} />
					</AtrcButton>
				)
			}
			renderContent={() => (
				<AtrcControlImg
					label={__('Image', 'atrc-prefix-atrc')}
					value={value}
					onChange={onChange}
					allowSettings={false}
				/>
			)}
			{...defaultProps}
		/>
	);
};
export default AtrcControlDropdownImg;
