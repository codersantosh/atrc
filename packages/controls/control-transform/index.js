import React from 'react';

/*Attributes Structure
Type Object
{
"translX":"",
"translY":"",
"translZ":"",
"rotA":"",
"rotX":"",
"rotY":"",
"rotZ":"",
"sclX":"",
"sclY":"",
"sclZ":"",
"skewX":"",
"skewY":"",
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

import { isEmpty, map, cloneDeep } from 'lodash';

/*Atoms*/
import AtrcLabel from '../../atoms/label';

/* Controls */
import AtrcControlUnit from '../control-unit';
import AtrcControlRange from '../control-range';

/* Molecules */
import AtrcPanelTools from '../../molecules/panel-tools';
import AtrcPanelRow from '../../molecules/panel-row';

/* Utils */
import { AtrcIsKeyWithValueNotEmpty } from '../../utils/object-values-with-allowed-keys-and-tabs';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/*Local*/
export const AtrcControlTransformAllowedKeys = [
	'on3D',
	'translX',
	'translY',
	'translZ',
	'rotA',
	'rotX',
	'rotY',
	'rotZ',
	'sclX',
	'sclY',
	'sclZ',
	'skewX',
	'skewY',
];

const RenderTabPanel = ({
	label = '',
	value,
	setAttr,
	allow3D = false,
	tab = 'translate',
}) => {
	if ('translate' === tab) {
		return (
			<>
				{label ? <AtrcLabel>{label}</AtrcLabel> : null}
				<AtrcPanelRow className={classnames('at-m')}>
					<AtrcControlUnit
						label={__('TranslateX', 'atrc-prefix-atrc')}
						value={value && value.translX}
						onChange={(newVal) => setAttr(newVal, 'translX')}
					/>
				</AtrcPanelRow>
				<AtrcPanelRow className={classnames('at-m')}>
					<AtrcControlUnit
						label={__('TranslateY', 'atrc-prefix-atrc')}
						value={value && value.translY}
						onChange={(newVal) => setAttr(newVal, 'translY')}
					/>
				</AtrcPanelRow>
				{allow3D && (
					<AtrcPanelRow className={classnames('at-m')}>
						<AtrcControlUnit
							label={__('TranslateZ', 'atrc-prefix-atrc')}
							value={value && value.translZ}
							onChange={(newVal) => setAttr(newVal, 'translZ')}
						/>
					</AtrcPanelRow>
				)}
			</>
		);
	}
	if ('rotate' === tab) {
		return (
			<>
				{label ? <AtrcLabel>{label}</AtrcLabel> : null}
				<AtrcPanelRow className={classnames('at-m')}>
					<AtrcControlRange
						label={__('Rotate angle', 'atrc-prefix-atrc')}
						help={__('Unit: deg', 'atrc-prefix-atrc')}
						value={value && value.rotA}
						onChange={(newVal) => setAttr(newVal, 'rotA')}
						min={-360}
						max={360}
					/>
				</AtrcPanelRow>
				{allow3D && (
					<>
						<AtrcPanelRow className={classnames('at-m')}>
							<AtrcControlRange
								label={__('RotateX', 'atrc-prefix-atrc')}
								value={value && value.rotX}
								onChange={(newVal) => setAttr(newVal, 'rotX')}
								min={-360}
								max={360}
							/>
						</AtrcPanelRow>
						<AtrcPanelRow className={classnames('at-m')}>
							<AtrcControlRange
								label={__('RotateY', 'atrc-prefix-atrc')}
								value={value && value.rotY}
								onChange={(newVal) => setAttr(newVal, 'rotY')}
								min={-360}
								max={360}
							/>
						</AtrcPanelRow>
						<AtrcPanelRow className={classnames('at-m')}>
							<AtrcControlRange
								label={__('RotateZ', 'atrc-prefix-atrc')}
								value={value && value.rotZ}
								onChange={(newVal) => setAttr(newVal, 'rotZ')}
								min={-360}
								max={360}
							/>
						</AtrcPanelRow>
					</>
				)}
			</>
		);
	}
	if ('scale' === tab) {
		return (
			<>
				{label ? <AtrcLabel>{label}</AtrcLabel> : null}
				<AtrcPanelRow className={classnames('at-m')}>
					<AtrcControlRange
						label={__('ScaleX', 'atrc-prefix-atrc')}
						help={__('Allowed max 5 and min -5', 'atrc-prefix-atrc')}
						value={value && value.sclX}
						onChange={(newVal) => setAttr(newVal, 'sclX')}
						min={-5}
						max={5}
						step={0.1}
					/>
				</AtrcPanelRow>
				<AtrcPanelRow className={classnames('at-m')}>
					<AtrcControlRange
						label={__('ScaleY', 'atrc-prefix-atrc')}
						help={__('Allowed max 5 and min -5', 'atrc-prefix-atrc')}
						value={value && value.sclY}
						onChange={(newVal) => setAttr(newVal, 'sclY')}
						min={-5}
						max={5}
						step={0.1}
					/>
				</AtrcPanelRow>
				{allow3D && (
					<AtrcPanelRow className={classnames('at-m')}>
						<AtrcControlRange
							label={__('ScaleZ', 'atrc-prefix-atrc')}
							help={__('Allowed max 5 and min -5', 'atrc-prefix-atrc')}
							value={value && value.sclZ}
							onChange={(newVal) => setAttr(newVal, 'sclZ')}
							min={-5}
							max={5}
							step={0.1}
						/>
					</AtrcPanelRow>
				)}
			</>
		);
	}
	if ('skew' === tab) {
		return (
			<>
				{label ? <AtrcLabel>{label}</AtrcLabel> : null}
				<AtrcPanelRow className={classnames('at-m')}>
					<AtrcControlRange
						label={__('SkewX', 'atrc-prefix-atrc')}
						help={__('Unit: deg', 'atrc-prefix-atrc')}
						value={value && value.skewX}
						onChange={(newVal) => setAttr(newVal, 'skewX')}
						min={-360}
						max={360}
					/>
				</AtrcPanelRow>
				<AtrcPanelRow className={classnames('at-m')}>
					<AtrcControlRange
						label={__('SkewY', 'atrc-prefix-atrc')}
						help={__('Unit: deg', 'atrc-prefix-atrc')}
						value={value && value.skewY}
						onChange={(newVal) => setAttr(newVal, 'skewY')}
						min={-360}
						max={360}
					/>
				</AtrcPanelRow>
			</>
		);
	}

	return null;
};

const AtrcControlTransform = (props) => {
	const {
		label = __('Transform', 'atrc-prefix-atrc'),
		className = '',
		variant = '',
		value = {},
		onChange = () => {},
		allow3D = false,
	} = props;

	const setAttr = (newVal, type) => {
		const valueCloned = cloneDeep(value);

		valueCloned[type] = newVal;
		onChange(valueCloned);
	};

	const resetTranslate = () => {
		const valueCloned = cloneDeep(value);

		delete valueCloned.translX;
		delete valueCloned.translY;
		delete valueCloned.translZ;
		onChange(valueCloned);
	};

	const resetRotate = () => {
		const valueCloned = cloneDeep(value);

		delete valueCloned.rotA;
		delete valueCloned.rotX;
		delete valueCloned.rotY;
		delete valueCloned.rotZ;
		onChange(valueCloned);
	};

	const resetScale = () => {
		const valueCloned = cloneDeep(value);

		delete valueCloned.sclX;
		delete valueCloned.sclY;
		delete valueCloned.sclZ;
		onChange(valueCloned);
	};

	const resetSkew = () => {
		const valueCloned = cloneDeep(value);

		delete valueCloned.skewX;
		delete valueCloned.skewY;
		onChange(valueCloned);
	};

	const resetAll = () => {
		onChange({});
	};

	const hasTabValue = (tab) => {
		if (!value || isEmpty(value)) {
			return false;
		}

		if (tab === 'translate') {
			return !!(
				AtrcIsKeyWithValueNotEmpty(value, 'translX') ||
				AtrcIsKeyWithValueNotEmpty(value, 'translY') ||
				AtrcIsKeyWithValueNotEmpty(value, 'translZ')
			);
		}

		if (tab === 'rotate') {
			return !!(
				AtrcIsKeyWithValueNotEmpty(value, 'rotX') ||
				AtrcIsKeyWithValueNotEmpty(value, 'rotY') ||
				AtrcIsKeyWithValueNotEmpty(value, 'rotZ') ||
				AtrcIsKeyWithValueNotEmpty(value, 'rotA')
			);
		}

		if (tab === 'scale') {
			return !!(
				AtrcIsKeyWithValueNotEmpty(value, 'sclX') ||
				AtrcIsKeyWithValueNotEmpty(value, 'sclY ') ||
				AtrcIsKeyWithValueNotEmpty(value, 'sclZ')
			);
		}

		if (tab === 'skew') {
			return !!(
				AtrcIsKeyWithValueNotEmpty(value, 'skewX') ||
				AtrcIsKeyWithValueNotEmpty(value, 'skewY')
			);
		}

		return false;
	};

	const AllTabs = [
		{
			name: 'translate',
			title: __('Translate', 'atrc-prefix-atrc'),
			hasValue: hasTabValue('translate'),
			onDeselect: () => resetTranslate(),
		},
		{
			name: 'rotate',
			title: __('Rotate', 'atrc-prefix-atrc'),
			hasValue: hasTabValue('rotate'),
			onDeselect: () => resetRotate(),
		},
		{
			name: 'scale',
			title: __('Scale', 'atrc-prefix-atrc'),
			hasValue: hasTabValue('scale'),
			onDeselect: () => resetScale(),
		},
		{
			name: 'skew',
			title: __('Skew', 'atrc-prefix-atrc'),
			hasValue: hasTabValue('skew'),
			onDeselect: () => resetSkew(),
		},
	];

	return (
		<AtrcPanelTools
			className={classnames(
				AtrcPrefix('ctrl-tf'),
				className,
				variant ? AtrcPrefix('ctrl-tf') + '-' + variant : ''
			)}
			label={label}
			resetAll={resetAll}
			tools={AllTabs}>
			{(activeItems) =>
				map(activeItems, (tab, iDx) => (
					<RenderTabPanel
						value={value}
						tab={tab}
						setAttr={setAttr}
						allow3D={allow3D}
						key={iDx}
					/>
				))
			}
		</AtrcPanelTools>
	);
};
export default AtrcControlTransform;
