/*Attributes Structure
Type string
**/

/*WordPress*/
import { __ } from '@wordpress/i18n';

import { ToolbarButton } from '@wordpress/components';

import { video } from '@wordpress/icons';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcButton from '../../atoms/button';
import AtrcIcon from '../../atoms/icon';

import AtrcDropdown from '../dropdown';
import AtrcControlVideo from '../control-video';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/

const AtrcControlDropdownVideo = (props) => {
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
						title={__('Select video', 'atrc-prefix-atrc')}
						onClick={onToggle}
						isActive={false}>
						<AtrcIcon icon={video} />
					</ToolbarButton>
				) : (
					<AtrcButton
						aria-expanded={isOpen}
						onClick={onToggle}>
						<AtrcIcon icon={video} />
					</AtrcButton>
				)
			}
			renderContent={() => (
				<AtrcControlVideo
					label={__('Video', 'atrc-prefix-atrc')}
					value={value}
					onChange={onChange}
					allowSettings={false}
				/>
			)}
			{...defaultProps}
		/>
	);
};
export default AtrcControlDropdownVideo;
