/*Attributes Structure
Type string
**/

/*WordPress*/
import { __ } from '@wordpress/i18n';

import { ToolbarButton } from '@wordpress/components';

import { audio } from '@wordpress/icons';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcButton from '../../atoms/button';
import AtrcIcon from '../../atoms/icon';

/*Controls*/
import AtrcControlAudio from '../control-audio';

/*Molecules*/
import AtrcDropdown from '../../molecules/dropdown';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcControlDropdownAudio = (props) => {
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
						title={__('Select audio', 'atrc-prefix-atrc')}
						onClick={onToggle}
						isActive={false}>
						<AtrcIcon icon={audio} />
					</ToolbarButton>
				) : (
					<AtrcButton
						aria-expanded={isOpen}
						onClick={onToggle}>
						<AtrcIcon icon={audio} />
					</AtrcButton>
				)
			}
			renderContent={() => (
				<AtrcControlAudio
					label={__('Audio', 'atrc-prefix-atrc')}
					value={value}
					onChange={onChange}
					allowSettings={false}
				/>
			)}
			{...defaultProps}
		/>
	);
};
export default AtrcControlDropdownAudio;
