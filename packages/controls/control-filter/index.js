import React from 'react';

/*Attributes Structure
Type Object
{
    blr : '',
    brgtNess : '',
    ctrs : '',
    grayScl : '',
    hueRot : '',
    inv : '',
    opa : '',
    sart : '',
    sepia : '',

    hSdw : '',
    vSdw : '',
    sdwBlr : '',
    sdwSprd : '',
    sdwCl : ''
}
*/

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

import { isArray, isEmpty, map, cloneDeep } from 'lodash';

/*Atoms*/
import AtrcLabel from '../../atoms/label';
import { AtrcResetWrap } from '../../atoms/reset-button-icon';

/* Controls */
import AtrcControlRange from '../control-range';
import AtrcControlDropdownColor from '../control-dropdown-color';

/* Molecules */
import AtrcPanelTools from '../../molecules/panel-tools';
import AtrcPanelRow from '../../molecules/panel-row';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/* Utils */
import { AtrcHasValueKey } from '../../utils/object-values-with-devices';
import { AtrcResetValueKey } from '../../utils/object-values-with-devices';

/*Local*/
export const AtrcControlFilterAllowedKeys = [
	'blr',
	'brgtNess',
	'ctrs',
	'grayScl',
	'hueRot',
	'inv',
	'opa',
	'sart',
	'sepia',
	'hSdw',
	'vSdw',
	'sdwBlr',
	'sdwSprd',
	'sdwCl',
];

const AtrcControlFilter = (props) => {
	const {
		label = __('Filter', 'atrc-prefix-atrc'),
		value = {},
		variant = '',
		className = '',
		onChange = () => {},
		allowedOptions = true, //true means all options allowed
	} = props;

	const { hSdw, vSdw, sdwBlr, sdwSprd, sdwCl } = value;

	const setAttr = (newVal, type) => {
		const valueCloned = cloneDeep(value);

		valueCloned[type] = newVal;
		onChange(valueCloned);
	};

	const resetDropShadow = () => {
		const valueCloned = cloneDeep(value);

		delete valueCloned.hSdw;
		delete valueCloned.vSdw;
		delete valueCloned.sdwBlr;
		delete valueCloned.sdwSprd;
		delete valueCloned.sdwCl;
		onChange(valueCloned);
	};

	const hasDropShadow = () => {
		if (!value || isEmpty(value)) {
			return false;
		}

		return !!(hSdw || vSdw || sdwBlr || sdwSprd || sdwCl);
	};

    const AllTabs = [];
	if (
		true === allowedOptions ||
		(isArray(allowedOptions) && allowedOptions.includes('blur'))
	) {
		AllTabs.push({
			name: 'blr',
			title: __('Blur', 'atrc-prefix-atrc'),
			hasValue: AtrcHasValueKey(value, 'blr'),
			onDeselect: () => onChange(AtrcResetValueKey(value, 'blr')),
		});
	}

	if (
		true === allowedOptions ||
		(isArray(allowedOptions) && allowedOptions.includes('brightness'))
	) {
		AllTabs.push({
			name: 'brgtNess',
			title: __('Brightness', 'atrc-prefix-atrc'),
			hasValue: AtrcHasValueKey(value, 'brgtNess'),
			onDeselect: () => onChange(AtrcResetValueKey(value, 'brgtNess')),
		});
	}

	if (
		true === allowedOptions ||
		(isArray(allowedOptions) && allowedOptions.includes('contrast'))
	) {
		AllTabs.push({
			name: 'ctrs',
			title: __('Contrast', 'atrc-prefix-atrc'),
			hasValue: AtrcHasValueKey(value, 'ctrs'),
			onDeselect: () => onChange(AtrcResetValueKey(value, 'ctrs')),
		});
	}

	if (
		true === allowedOptions ||
		(isArray(allowedOptions) && allowedOptions.includes('grayscale'))
	) {
		AllTabs.push({
			name: 'grayScl',
			title: __('Grayscale', 'atrc-prefix-atrc'),
			hasValue: AtrcHasValueKey(value, 'grayScl'),
			onDeselect: () => onChange(AtrcResetValueKey(value, 'grayScl')),
		});
	}

	if (
		true === allowedOptions ||
		(isArray(allowedOptions) && allowedOptions.includes('hueRotate'))
	) {
		AllTabs.push({
			name: 'hueRot',
			title: __('Hue rotate', 'atrc-prefix-atrc'),
			hasValue: AtrcHasValueKey(value, 'hueRot'),
			onDeselect: () => onChange(AtrcResetValueKey(value, 'hueRot')),
		});
	}

	if (
		true === allowedOptions ||
		(isArray(allowedOptions) && allowedOptions.includes('invert'))
	) {
		AllTabs.push({
			name: 'inv',
			title: __('Invert', 'atrc-prefix-atrc'),
			hasValue: AtrcHasValueKey(value, 'inv'),
			onDeselect: () => onChange(AtrcResetValueKey(value, 'inv')),
		});
	}

	if (
		true === allowedOptions ||
		(isArray(allowedOptions) && allowedOptions.includes('opacity'))
	) {
		AllTabs.push({
			name: 'opa',
			title: __('Opacity', 'atrc-prefix-atrc'),
			hasValue: AtrcHasValueKey(value, 'opa'),
			onDeselect: () => onChange(AtrcResetValueKey(value, 'opa')),
		});
	}

	if (
		true === allowedOptions ||
		(isArray(allowedOptions) && allowedOptions.includes('saturate'))
	) {
		AllTabs.push({
			name: 'sart',
			title: __('Saturate', 'atrc-prefix-atrc'),
			hasValue: AtrcHasValueKey(value, 'sart'),
			onDeselect: () => onChange(AtrcResetValueKey(value, 'sart')),
		});
	}

	if (
		true === allowedOptions ||
		(isArray(allowedOptions) && allowedOptions.includes('sepia'))
	) {
		AllTabs.push({
			name: 'sepia',
			title: __('Sepia', 'atrc-prefix-atrc'),
			hasValue: AtrcHasValueKey(value, 'sepia'),
			onDeselect: () => onChange(AtrcResetValueKey(value, 'sepia')),
		});
	}

	if (
		true === allowedOptions ||
		(isArray(allowedOptions) && allowedOptions.includes('dropShadow'))
	) {
		AllTabs.push({
			name: 'dropSdw',
			title: __('Drop shadow', 'atrc-prefix-atrc'),
			hasValue: hasDropShadow(),
			onDeselect: () => resetDropShadow(),
		});
	}

	const resetAll = () => {
		onChange({});
	};

	if (!AllTabs.length) {
		return null;
	}

	return (
		<AtrcPanelTools
			className={classnames(
				AtrcPrefix('ctrl-fl'),
				className,
				variant ? AtrcPrefix('ctrl-fl') + '-' + variant : ''
			)}
			label={label}
			resetAll={resetAll}
			tools={AllTabs}>
			{(activeItems) =>
				map(activeItems, (tab, iDx) => {
					if ('dropSdw' === tab) {
						return (
							<AtrcPanelRow
								className={classnames(
									AtrcPrefix('ctrl-fl-drop-sdw'),
									'at-m',
									'at-flx-col',
									'at-al-itm-st',
									'at-jfy-cont-st '
								)}
								key={iDx}>
								<AtrcLabel>{__('Drop shadow', 'atrc-prefix-atrc')}</AtrcLabel>
								<AtrcPanelRow className={classnames('at-m')}>
									<AtrcControlRange
										label={__('H-shadow', 'atrc-prefix-atrc')}
										help={__('px', 'atrc-prefix-atrc')}
										value={hSdw}
										onChange={(newVal) => setAttr(newVal, 'hSdw')}
									/>
								</AtrcPanelRow>
								<AtrcPanelRow className={classnames('at-m')}>
									<AtrcControlRange
										label={__('V-shadow', 'atrc-prefix-atrc')}
										help={__('px', 'atrc-prefix-atrc')}
										value={vSdw}
										onChange={(newVal) => setAttr(newVal, 'vSdw')}
									/>
								</AtrcPanelRow>
								<AtrcPanelRow className={classnames('at-m')}>
									<AtrcControlRange
										label={__('Shadow blur', 'atrc-prefix-atrc')}
										help={__('px', 'atrc-prefix-atrc')}
										value={sdwBlr}
										onChange={(newVal) => setAttr(newVal, 'sdwBlr')}
									/>
								</AtrcPanelRow>
								{/* Not supported */}
								{/* <AtrcControlRange
                                    label={__('Shadow spread', 'atrc-prefix-atrc')}
                                    help={__('px', 'atrc-prefix-atrc')}
                                    value={sdwSprd}
                                    onChange={(newVal) => setAttr(newVal, 'sdwSprd')}
                                /> */}
								<AtrcPanelRow className={classnames('at-m')}>
									<AtrcResetWrap className={classnames(AtrcPrefix('lbl-rst'))}>
										<AtrcControlDropdownColor
											label={__('Shadow color', 'atrc-prefix-atrc')}
											value={sdwCl}
											onChange={(newVal) => setAttr(newVal, 'sdwCl')}
										/>
									</AtrcResetWrap>
								</AtrcPanelRow>
							</AtrcPanelRow>
						);
					}

					let tabLabel = '';
					let helpTxt = '';
					switch (tab) {
						case 'blr':
							tabLabel = __('Blur', 'atrc-prefix-atrc');
							helpTxt = __('px', 'atrc-prefix-atrc');

							break;

						case 'brgtNess':
							tabLabel = __('Brightness', 'atrc-prefix-atrc');
							break;

						case 'ctrs':
							tabLabel = __('Contrast', 'atrc-prefix-atrc');
							break;

						case 'grayScl':
							tabLabel = __('Grayscale', 'atrc-prefix-atrc');
							break;

						case 'hueRot':
							tabLabel = __('Hue rotate', 'atrc-prefix-atrc');
							helpTxt = __('deg', 'atrc-prefix-atrc');
							break;

						case 'inv':
							tabLabel = __('Invert', 'atrc-prefix-atrc');
							break;

						case 'opa':
							tabLabel = __('Opacity', 'atrc-prefix-atrc');
							break;

						case 'sart':
							tabLabel = __('Saturate', 'atrc-prefix-atrc');
							break;

						case 'sepia':
							tabLabel = __('Sepia', 'atrc-prefix-atrc');
							break;

						default:
							break;
					}
					if (tabLabel) {
						return (
							<AtrcPanelRow
								className={classnames('at-m')}
								key={iDx}>
								<AtrcControlRange
									label={tabLabel}
									help={helpTxt || __('%', 'atrc-prefix-atrc')}
									value={value[tab]}
									onChange={(newVal) => setAttr(newVal, tab)}
								/>
							</AtrcPanelRow>
						);
					}

					return null;
				})
			}
		</AtrcPanelTools>
	);
};
export default AtrcControlFilter;
