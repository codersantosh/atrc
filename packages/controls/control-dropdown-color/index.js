import React from 'react';

/*Attributes Structure
Type string
**/

/*WordPress*/
import { __ } from '@wordpress/i18n';

import { ColorIndicator, ColorPalette } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';
import AtrcWrapLib from '../../atoms/wrap-lib';
import AtrcLabel from '../../atoms/label';
import AtrcResetButtonIcon from '../../atoms/reset-button-icon';
import { AtrcResetWrap } from '../../atoms/reset-button-icon';

/* Molecules */
import AtrcDropdown from '../../molecules/dropdown';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/* Utils */
import { AtrcUseColorSolids } from '../../utils/use-colors';

/*Local*/
export const AtrcControlDropdownColorAllowedKeys = ['cl'];

const RenderControl = (props) => {
	const {
		label = __('Color', 'atrc-prefix-atrc'),
		value,
		onChange = () => {},
		variant = '',
		className = '',
		useCSSVariables = true,
		...defaultProps
	} = props;

	const allSolids = AtrcUseColorSolids({ useCSSVariables: useCSSVariables });

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
					{label ? <AtrcLabel variant='color-picker'>{label}</AtrcLabel> : null}
				</AtrcWrap>
			)}
			renderContent={() => (
				<ColorPalette
					className={classnames(AtrcPrefix('cl-palette'))}
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
	const {
		allowReset = true,
		value = '',
		defaultValue = '',
		onChange,
		wrapProps = {},
		resetWrapProps = {},
	} = props;

	return (
		<AtrcWrapLib
			className={classnames('at-flx-grw-1', AtrcPrefix('dropdown-cl'))}
			{...wrapProps}>
			{allowReset ? (
				<AtrcResetWrap
					{...resetWrapProps}
					className={classnames(
						AtrcPrefix('dropdown-cl-rst'),
						resetWrapProps.className ? resetWrapProps.className : ''
					)}>
					<RenderControl {...props} />
					<AtrcResetButtonIcon
						value={value}
						defaultValue={defaultValue}
						onClick={() => onChange(defaultValue)}
					/>
				</AtrcResetWrap>
			) : (
				<RenderControl {...props} />
			)}
		</AtrcWrapLib>
	);
};
export default AtrcControlDropdownColor;
