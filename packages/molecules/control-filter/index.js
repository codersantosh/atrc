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

import { useMemo } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';

import { isArray, isEmpty, map } from 'lodash';

/*Inbuilt*/
import { AtrcRange, AtrcLabel, AtrcResetWrap } from '../../atoms';

import {
    AtrcPanelTools,
    AtrcControlDropdownColor,
    AtrcPanelRow,
} from '../index';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';
import { AtrcHasValueKey, AtrcResetValueKey } from '../../utils';

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
		label = '',
		value = {},
		variant = '',
		className = '',
		onChange = () => {},
		allowedOptions = true, //true means all options allowed
	} = props;

	const { hSdw, vSdw, sdwBlr, sdwSprd, sdwCl } = value;

	const setAttr = (newVal, type) => {
		const valueCloned = Object.assign({}, value);
		valueCloned[type] = newVal;
		onChange(valueCloned);
	};

	const resetDropShadow = () => {
		const valueCloned = Object.assign({}, value);
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

	const AllTabs = useMemo(() => {
		const tabsOptions = [];
		if (
			true === allowedOptions ||
			(isArray(allowedOptions) && allowedOptions.includes('blur'))
		) {
			tabsOptions.push({
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
			tabsOptions.push({
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
			tabsOptions.push({
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
			tabsOptions.push({
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
			tabsOptions.push({
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
			tabsOptions.push({
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
			tabsOptions.push({
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
			tabsOptions.push({
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
			tabsOptions.push({
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
			tabsOptions.push({
				name: 'dropSdw',
				title: __('Drop shadow', 'atrc-prefix-atrc'),
				hasValue: hasDropShadow(),
				onDeselect: () => resetDropShadow(),
			});
		}

		return tabsOptions;
	}, []);

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
								<AtrcLabel>
									{__('Drop shadow', 'atrc-prefix-atrc')}
								</AtrcLabel>
								<AtrcPanelRow className={classnames('at-m')}>
									<AtrcRange
										label={__('H-shadow', 'atrc-prefix-atrc')}
										help={__('px', 'atrc-prefix-atrc')}
										value={hSdw}
										onChange={(newVal) => setAttr(newVal, 'hSdw')}
									/>
								</AtrcPanelRow>
								<AtrcPanelRow className={classnames('at-m')}>
									<AtrcRange
										label={__('V-shadow', 'atrc-prefix-atrc')}
										help={__('px', 'atrc-prefix-atrc')}
										value={vSdw}
										onChange={(newVal) => setAttr(newVal, 'vSdw')}
									/>
								</AtrcPanelRow>
								<AtrcPanelRow className={classnames('at-m')}>
									<AtrcRange
										label={__('Shadow blur', 'atrc-prefix-atrc')}
										help={__('px', 'atrc-prefix-atrc')}
										value={sdwBlr}
										onChange={(newVal) => setAttr(newVal, 'sdwBlr')}
									/>
								</AtrcPanelRow>
								{/* Not supported */}
								{/* <AtrcRange
                                    label={__('Shadow spread', 'atrc-prefix-atrc')}
                                    help={__('px', 'atrc-prefix-atrc')}
                                    value={sdwSprd}
                                    onChange={(newVal) => setAttr(newVal, 'sdwSprd')}
                                /> */}
								<AtrcPanelRow className={classnames('at-m')}>
									<AtrcResetWrap className={classnames(AtrcPrefix('lbl-rst'))}>
										<AtrcControlDropdownColor
											label={__(
												'Shadow color',
												'atrc-prefix-atrc'
											)}
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
								<AtrcRange
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
