import React from 'react';

/*Attributes Structure
Type Object
{
    cl : '',
    x : '',
    y " '',
    blr : '',
    sprd : '',
    pos : '',
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';
import { cloneDeep } from 'lodash';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';

/* Controls */
import AtrcControlSelect from '../control-select';
import AtrcControlUnit from '../control-unit';
import AtrcControlDropdownColor from '../control-dropdown-color';

/* Molecules */
import AtrcPanelRow from '../../molecules/panel-row';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/*Local*/
export const AtrcControlBoxShadowAllowedKeys = [
	'cl',
	'x',
	'y',
	'blr',
	'sprd',
	'pos',
];

const AtrcControlBoxShadow = (props) => {
	const {
		label = __('Box shadow', 'atrc-prefix-atrc'),
		value = {},
		variant = '',
		className = '',
		onChange = () => {},
		disableUnits = false,
		...defaultProps
	} = props;

	const { cl = '', x = '', y = '', blr = '', sprd = '', pos = '' } = value;

	const setAttr = (newVal, type) => {
		const valueCloned = cloneDeep(value);
		valueCloned[type] = newVal;
		onChange(valueCloned);
	};

	return (
		<AtrcWrap
			className={classnames(
				AtrcPrefix('ctrl-box-sdw'),
				className,
				variant ? AtrcPrefix('ctrl-box-sdw') + '-' + variant : ''
			)}
			{...defaultProps}>
			{label ? <AtrcLabel>{label}</AtrcLabel> : null}

			<AtrcPanelRow className={classnames('at-m')}>
				<AtrcControlDropdownColor
					value={cl}
					onChange={(newVal) => setAttr(newVal, 'cl')}
				/>
			</AtrcPanelRow>
			<AtrcPanelRow className={classnames('at-m')}>
				<AtrcControlSelect
					label={__('Position', 'atrc-prefix-atrc')}
					wrapProps={{
						className: 'at-flx-grw-1',
					}}
					value={pos}
					options={[
						{
							label: __('Default', 'atrc-prefix-atrc'),
							value: '',
						},
						{
							label: __('Inset', 'atrc-prefix-atrc'),
							value: 'inset',
						},
					]}
					onChange={(newVal) => setAttr(newVal, 'pos')}
				/>
			</AtrcPanelRow>
			<AtrcPanelRow className={classnames('at-m')}>
				<AtrcControlUnit
					label={__('X', 'atrc-prefix-atrc')}
					value={x}
					onChange={(newVal) => setAttr(newVal, 'x')}
					disableUnits={disableUnits}
				/>
			</AtrcPanelRow>
			<AtrcPanelRow className={classnames('at-m')}>
				<AtrcControlUnit
					label={__('Y', 'atrc-prefix-atrc')}
					value={y}
					onChange={(newVal) => setAttr(newVal, 'y')}
					disableUnits={disableUnits}
				/>
			</AtrcPanelRow>

			<AtrcPanelRow className={classnames('at-m')}>
				<AtrcControlUnit
					label={__('Blur', 'atrc-prefix-atrc')}
					value={blr}
					onChange={(newVal) => setAttr(newVal, 'blr')}
					disableUnits={disableUnits}
				/>
			</AtrcPanelRow>
			<AtrcPanelRow className={classnames('at-m')}>
				<AtrcControlUnit
					label={__('Spread', 'atrc-prefix-atrc')}
					value={sprd}
					onChange={(newVal) => setAttr(newVal, 'sprd')}
					disableUnits={disableUnits}
				/>
			</AtrcPanelRow>
		</AtrcWrap>
	);
};
export default AtrcControlBoxShadow;
