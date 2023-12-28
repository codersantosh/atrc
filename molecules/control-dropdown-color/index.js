/*Attributes Structure
Type string
**/

/*WordPress*/
import { __ } from '@wordpress/i18n';

import { ColorIndicator, ColorPalette } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import { AtrcWrap, AtrcLabel, AtrcResetButtonIcon } from '../../atoms';

import { AtrcDropdown } from '../index';

import AtrcPrefix from '../../prefix-vars';

import { AtrcUseColorSolids } from '../../utils';

/*Local Components*/
export const AtrcControlDropdownColorAllowedKeys = ['cl'];

const RenderControl = (props) => {
	const allSolids = AtrcUseColorSolids();

	const {
		label = '',
		value,
		onChange = () => {},
		variant = '',
		className = '',
		...defaultProps
	} = props;

	return (
		<AtrcDropdown
			className={classnames(
				AtrcPrefix('ctrl-dropdown-cl'),
				className,
				variant ? AtrcPrefix('ctrl-dropdown-cl') + '-' + variant : ''
			)}
			renderToggle={({ isOpen, onToggle }) => (
				<AtrcWrap
					className='at-flx at-al-itm-ctr at-gap'
					onClick={onToggle}>
					<ColorIndicator colorValue={value} />
					<AtrcLabel variant='color-picker'>
						{label || __('Color', 'atrc-prefix-atrc')}
					</AtrcLabel>
				</AtrcWrap>
			)}
			renderContent={() => (
				<ColorPalette
					value={value}
					onChange={onChange}
					colors={allSolids}
					clearable
					enableAlpha
				/>
			)}
			{...defaultProps}
		/>
	);
};

const AtrcControlDropdownColor = (props) => {
	const { allowReset = true, value = '', onChange } = props;

	if (allowReset) {
		return (
			<AtrcWrap
				className={classnames(
					AtrcPrefix('dropdown-cl'),
					'at-flx',
					'at-al-itm-ctr',
					'at-jfy-cont-btw',
					'at-gap'
				)}>
				<RenderControl {...props} />
				<AtrcResetButtonIcon
					value={value}
					onClick={() => onChange('')}
				/>
			</AtrcWrap>
		);
	}

	return <RenderControl {...props} />;
};
export default AtrcControlDropdownColor;
