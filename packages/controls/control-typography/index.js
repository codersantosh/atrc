import React from 'react';

/*Attributes Structure
Type Object
{
    "xsFntSz":"",
    "smFntSz":"",
    "smFntSz":"",
    "lgFntSz":"",
    "xlFntSz":"",
    "xxlFntSz":"",

    "fntFam": "",
    "fntWt": "",
    "fntSty": "",
    "txtTf": "",
    "txtDec": "",

    "xsLnH":"",
    "smLnH":"",
    "mdLnH":"",
    "lgLnH":"",
    "xlLnH":"",
    "xxlLnH":"",

    "xsLtrSp":"",
    "smLtrSp":"",
    "mdLtrSp":"",
    "lgLtrSp":"",
    "xlLtrSp":"",
    "xxlLtrSp":"",
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

import { forEach, isArray, isEmpty, map, cloneDeep } from 'lodash';

/* Molecules */
import AtrcPanelTools from '../../molecules/panel-tools';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/* Utils */
import { AtrcUcFirst } from '../../utils/string';

import {
	AtrcHasDeviceValues,
	AtrcHasValueKey,
	AtrcResetDevices,
	AtrcResetValueKey,
} from '../../utils/object-values-with-devices';

/*Internal*/
import FontSize from './font-size';
import FontFamily from './font-family';
import FontWeight from './font-weight';
import FontStyle from './font-style';
import TextDecoration from './text-decoration';
import TextTransform from './text-transform';
import LineHeight from './line-height';
import LetterSpacing from './letter-spacing';

/* Local */
export const AtrcControlTypographyAllowedKeys = [
	'xsFntSz',
	'smFntSz',
	'mdFntSz',
	'lgFntSz',
	'xlFntSz',
	'xxlFntSz',
	'fntFam',
	'fntWt',
	'fntSty',
	'txtDec',
	'txtTf',
	'xsLnH',
	'smLnH',
	'mdLnH',
	'lgLnH',
	'xlLnH',
	'xxlLnH',
	'xsLtrSp',
	'smLtrSp',
	'mdLtrSp',
	'lgLtrSp',
	'xlLtrSp',
	'xxlLtrSp',
];

const AtrcControlTypography = (props) => {
	const {
		value,
		label = __('Typography', 'atrc-prefix-atrc'),
		onChange = () => {},
		variant = '',
		className = '',
		google,
		custom,
		allowedOptions = true, //true means all options allowed
		...defaultProps
	} = props;

	const resetAll = () => {
		onChange({});
	};

	const AllTabs = [];
	if (
		true === allowedOptions ||
		(isArray(allowedOptions) && allowedOptions.includes('fontSize'))
	) {
		AllTabs.push({
			name: 'fntSz',
			title: __('Font size', 'atrc-prefix-atrc'),
			hasValue: AtrcHasDeviceValues(value, 'fntSz'),
			onDeselect: () => onChange(AtrcResetDevices(value, 'fntSz')),
		});
	}

	if (
		true === allowedOptions ||
		(isArray(allowedOptions) && allowedOptions.includes('fontFamily'))
	) {
		AllTabs.push({
			name: 'fntFam',
			title: __('Font family', 'atrc-prefix-atrc'),
			hasValue: AtrcHasValueKey(value, 'fntFam'),
			onDeselect: () => onChange(AtrcResetValueKey(value, 'fntFam')),
		});
	}

	if (
		true === allowedOptions ||
		(isArray(allowedOptions) && allowedOptions.includes('fontWeight'))
	) {
		AllTabs.push({
			name: 'fntWt',
			title: __('Font weight', 'atrc-prefix-atrc'),
			hasValue: AtrcHasValueKey(value, 'fntWt'),
			onDeselect: () => onChange(AtrcResetValueKey(value, 'fntWt')),
		});
	}

	if (
		true === allowedOptions ||
		(isArray(allowedOptions) && allowedOptions.includes('fontStyle'))
	) {
		AllTabs.push({
			name: 'fntSty',
			title: __('Font style', 'atrc-prefix-atrc'),
			hasValue: AtrcHasValueKey(value, 'fntSty'),
			onDeselect: () => onChange(AtrcResetValueKey(value, 'fntSty')),
		});
	}

	if (
		true === allowedOptions ||
		(isArray(allowedOptions) && allowedOptions.includes('textDecoration'))
	) {
		AllTabs.push({
			name: 'txtDec',
			title: __('Text decoration', 'atrc-prefix-atrc'),
			hasValue: AtrcHasValueKey(value, 'txtDec'),
			onDeselect: () => onChange(AtrcResetValueKey(value, 'txtDec')),
		});
	}

	if (
		true === allowedOptions ||
		(isArray(allowedOptions) && allowedOptions.includes('textTransform'))
	) {
		AllTabs.push({
			name: 'txtTf',
			title: __('Text transform', 'atrc-prefix-atrc'),
			hasValue: AtrcHasValueKey(value, 'txtTf'),
			onDeselect: () => onChange(AtrcResetValueKey(value, 'txtTf')),
		});
	}

	if (
		true === allowedOptions ||
		(isArray(allowedOptions) && allowedOptions.includes('lineHeight'))
	) {
		AllTabs.push({
			name: 'lnH',
			title: __('Line height', 'atrc-prefix-atrc'),
			hasValue: AtrcHasDeviceValues(value, 'lnH'),
			onDeselect: () => onChange(AtrcResetDevices(value, 'lnH')),
		});
	}

	if (
		true === allowedOptions ||
		(isArray(allowedOptions) && allowedOptions.includes('letterSpacing'))
	) {
		AllTabs.push({
			name: 'ltrSp',
			title: __('Letter spacing', 'atrc-prefix-atrc'),
			hasValue: AtrcHasDeviceValues(value, 'ltrSp'),
			onDeselect: () => onChange(AtrcResetDevices(value, 'ltrSp')),
		});
	}

	const setAttr = (newVal, type) => {
		let valueCloned = cloneDeep(value);
		if (!valueCloned) {
			valueCloned = {};
		}
		valueCloned[type] = newVal;
		onChange(valueCloned);
	};

	return (
		<AtrcPanelTools
			className={classnames(
				AtrcPrefix('ctrl-typ'),
				className,
				variant ? AtrcPrefix('ctrl-typ') + '-' + variant : ''
			)}
			label={label}
			resetAll={resetAll}
			tools={AllTabs}
			{...defaultProps}>
			{(activeItems) =>
				map(activeItems, (tab, iDx) => {
					if ('fntSz' === tab) {
						return (
							<FontSize
								value={value}
								onChange={setAttr}
								key={iDx}
							/>
						);
					}
					if ('fntFam' === tab) {
						return (
							<FontFamily
								value={value}
								onChange={setAttr}
								google={google}
								custom={custom}
								key={iDx}
							/>
						);
					}
					if ('fntWt' === tab) {
						return (
							<FontWeight
								value={value}
								onChange={setAttr}
								key={iDx}
							/>
						);
					}
					if ('fntSty' === tab) {
						return (
							<FontStyle
								value={value}
								onChange={setAttr}
								key={iDx}
							/>
						);
					}
					if ('txtDec' === tab) {
						return (
							<TextDecoration
								value={value}
								onChange={setAttr}
								key={iDx}
							/>
						);
					}
					if ('txtTf' === tab) {
						return (
							<TextTransform
								value={value}
								onChange={setAttr}
								key={iDx}
							/>
						);
					}
					if ('lnH' === tab) {
						return (
							<LineHeight
								value={value}
								onChange={setAttr}
								key={iDx}
							/>
						);
					}
					if ('ltrSp' === tab) {
						return (
							<LetterSpacing
								value={value}
								onChange={(newVal) => {
									let valueCloned = cloneDeep(value);
									if (!valueCloned) {
										valueCloned = {};
									}
									const key = 'ltrSp';
									if (newVal && !isEmpty(newVal)) {
										forEach(newVal, (item, itemKey) => {
											let deviceKey;
											deviceKey = itemKey + AtrcUcFirst(key);
											valueCloned[deviceKey] = item;
										});
									}
									onChange(valueCloned);
								}}
								key={iDx}
							/>
						);
					}
				})
			}
		</AtrcPanelTools>
	);
};
export default AtrcControlTypography;
