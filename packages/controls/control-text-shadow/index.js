import React from 'react';

/*Attributes Structure
Type Object
{
    cl : '',
    x : '',
    y " '',
    blr : '',
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
import AtrcControlUnit from '../control-unit';
import AtrcControlDropdownColor from '../control-dropdown-color';

/* Molecules */
import AtrcPanelRow from '../../molecules/panel-row';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
export const AtrcControlTextShadowAllowedKeys = ['cl', 'x', 'y', 'blr'];

const AtrcControlTextShadow = (props) => {
	const {
		label = __('Text shadow', 'atrc-prefix-atrc'),
		value = {},
		variant = '',
		className = '',
		disableUnits = false,
		onChange = () => {},
		...defaultProps
	} = props;

	const { cl = '', x = '', y = '', blr = '' } = value;

	const setAttr = (newVal, type) => {
		const valueCloned = cloneDeep(value);
		valueCloned[type] = newVal;
		onChange(valueCloned);
	};

	return (
		<AtrcWrap
			className={classnames(
				AtrcPrefix('ctrl-txt-sdw'),
				className,
				variant ? AtrcPrefix('ctrl-txt-sdw') + '-' + variant : ''
			)}
			{...defaultProps}>
			{label ? <AtrcLabel>{label}</AtrcLabel> : ''}
			<AtrcPanelRow className={classnames('at-m')}>
				<AtrcControlDropdownColor
					value={cl}
					onChange={(newVal) => setAttr(newVal, 'cl')}
				/>
			</AtrcPanelRow>
			<AtrcPanelRow className={classnames('at-m')}>
				<AtrcControlUnit
					label={__('H shadow', 'atrc-prefix-atrc')}
					value={x}
					onChange={(newVal) => setAttr(newVal, 'x')}
					disableUnits={disableUnits}
				/>
			</AtrcPanelRow>
			<AtrcPanelRow className={classnames('at-m')}>
				<AtrcControlUnit
					label={__('V shadow', 'atrc-prefix-atrc')}
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
		</AtrcWrap>
	);
};
export default AtrcControlTextShadow;
