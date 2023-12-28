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

/*Inbuilt*/
import { AtrcWrap, AtrcSelect, AtrcControlUnit } from '../../atoms';

import { AtrcControlDropdownColor, AtrcPanelRow } from '../index';

/*Inbuilt*/
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
		value = {},
		variant = '',
		className = '',
		onChange = () => {},
		disableUnits = false,
		...defaultProps
	} = props;

	const { cl = '', x = '', y = '', blr = '', sprd = '', pos = '' } = value;

	const setAttr = (newVal, type) => {
		const valueCloned = Object.assign({}, value);
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
			<AtrcPanelRow className={classnames('at-m')}>
				<AtrcControlDropdownColor
					value={cl}
					onChange={(newVal) => setAttr(newVal, 'cl')}
				/>
			</AtrcPanelRow>
			<AtrcPanelRow className={classnames('at-m')}>
				<AtrcSelect
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
