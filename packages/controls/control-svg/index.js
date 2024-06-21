import React from 'react';

/*Attributes Structure
Type Object
{
    svgFrm = '',
    svgDefd = '',
    svgCust = '',
    svgCl = '',
    flipV = '',
    flipH = '',

    xsW = '',
    smW = '',
    mdW = '',
    lgW = '',
    xlW = '',
    xxlW = '',
    xsH = '',
    smH = '',
    mdH= '',
    lgH = '',
    xlH = '',
    xxlH = ''
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';
import { map, cloneDeep } from 'lodash';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';
import AtrcIcon from '../../atoms/icon';
import AtrcText from '../../atoms/text';

/* Controls */
import AtrcControlSelect from '../control-select';
import AtrcControlToggle from '../control-toggle';
import AtrcControlTextarea from '../control-textarea';
import AtrcControlDropdownHtml from '../control-dropdown-html';
import AtrcControlDropdownColor from '../control-dropdown-color';
import AtrcControlWidthHeight from '../control-width-height';

/* Molecules */
import AtrcPanelTools from '../../molecules/panel-tools';
import AtrcPanelRow from '../../molecules/panel-row';

/* Utils */
import AtrcObjDeleteEmptyKey from '../../utils/object-delete-empty-key';
import { AtrcHasDeviceValues } from '../../utils/object-values-with-devices';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/* Local */
const SelectedShape = (value, options) => {
	const selectedShape = options.filter(function (item) {
		return item.value === value;
	});
	if (selectedShape.length) {
		return selectedShape[0];
	}
	return null;
};

const SvgShapeDefined = ({ value, onChange, options }) => {
	const selectedShape = SelectedShape(value, options);
	const icon = selectedShape && selectedShape.svg;
	return (
		<>
			<AtrcPanelRow className={classnames('at-flx-grw-1 at-m')}>
				<AtrcLabel>{__('Choose svg', 'atrc-prefix-atrc')}</AtrcLabel>
			</AtrcPanelRow>
			<AtrcPanelRow className={classnames('at-flx-grw-1 at-m')}>
				<AtrcControlDropdownHtml
					label={
						<>
							{icon ? (
								<AtrcIcon icon={icon} />
							) : (
								<AtrcText>{__('Choose svg', 'atrc-prefix-atrc')}</AtrcText>
							)}
						</>
					}
					value={value}
					onChange={onChange}
					options={options}
				/>
			</AtrcPanelRow>
		</>
	);
};

const SvgShape = ({ from, def, cust, definedOptions, onChange }) => {
	return (
		<>
			<AtrcPanelRow className={classnames('at-m')}>
				<AtrcControlSelect
					label={__('Source', 'atrc-prefix-atrc')}
					value={from}
					options={[
						{
							label: __('Defined', 'atrc-prefix-atrc'),
							value: 'def',
						},
						{
							label: __('Custom', 'atrc-prefix-atrc'),
							value: 'cust',
						},
					]}
					onChange={(newVal) => onChange(newVal, 'svgFrm')}
				/>
			</AtrcPanelRow>
			{'def' === from ? (
				<SvgShapeDefined
					value={def}
					onChange={(newVal) => onChange(newVal, 'svgDefd')}
					options={definedOptions}
				/>
			) : (
				<AtrcPanelRow className={classnames('at-m')}>
					<AtrcControlTextarea
						className={classnames('at-flx-grw-1')}
						value={cust}
						onChange={(newVal) => onChange(newVal, 'svgCust')}
					/>
				</AtrcPanelRow>
			)}
		</>
	);
};

const ShapeSettings = (props) => {
	const { value, onChange = () => {} } = props;

	const {
		flipV = false,
		flipH = false,
		xsW,
		smW,
		mdW,
		lgW,
		xlW,
		xxlW,
		xsH,
		smH,
		mdH,
		lgH,
		xlH,
		xxlH,
	} = value;

	const setAttr = (newVal, type) => {
		const valueCloned = cloneDeep(value);
		valueCloned[type] = newVal;
		onChange(valueCloned);
	};

	const setWidthHeight = (newVal) => {
		let valueCloned = cloneDeep(value);

		delete valueCloned.xsW;
		delete valueCloned.smW;
		delete valueCloned.mdW;
		delete valueCloned.lgW;
		delete valueCloned.xlW;
		delete valueCloned.xxlW;
		delete valueCloned.xsH;
		delete valueCloned.smH;
		delete valueCloned.mdH;
		delete valueCloned.lgH;
		delete valueCloned.xlH;
		delete valueCloned.xxlH;
		if (newVal.h) {
			valueCloned.xsH = newVal.h.xs;
			valueCloned.smH = newVal.h.sm;
			valueCloned.mdH = newVal.h.md;
			valueCloned.lgH = newVal.h.lg;
			valueCloned.xlH = newVal.h.xl;
			valueCloned.xxlH = newVal.h.xxl;
		}
		if (newVal.w) {
			valueCloned.xsW = newVal.w.xs;
			valueCloned.smW = newVal.w.sm;
			valueCloned.mdW = newVal.w.md;
			valueCloned.lgW = newVal.w.lg;
			valueCloned.xlW = newVal.w.xl;
			valueCloned.xxlW = newVal.w.xxl;
		}
		onChange(valueCloned);
	};

	const AllTabs = [
		{
			name: 'flipV',
			title: __('Flip vertically', 'atrc-prefix-atrc'),
			hasValue: flipV,
			onDeselect: () => setAttr(false, 'flipV'),
		},
		{
			name: 'flipH',
			title: __('Flip horizontally', 'atrc-prefix-atrc'),
			hasValue: flipH,
			onDeselect: () => setAttr(false, 'flipH'),
		},
		{
			name: 'sz',
			title: __('Size', 'atrc-prefix-atrc'),
			hasValue:
				AtrcHasDeviceValues(value, 'w') || AtrcHasDeviceValues(value, 'h'),
			onDeselect: () => setWidthHeight({}),
		},
	];

	return (
		<AtrcPanelTools
			label={__('Shape options', 'atrc-prefix-atrc')}
			resetAll={() => onChange({})}
			tools={AllTabs}>
			{(activeItems) =>
				map(activeItems, function (item, iDx) {
					if ('flipV' === item) {
						return (
							<AtrcControlToggle
								label={__('Flip vertically', 'atrc-prefix-atrc')}
								checked={flipV}
								onChange={() => setAttr(!flipV, 'flipV')}
								key={iDx}
							/>
						);
					}
					if ('flipH' === item) {
						return (
							<AtrcControlToggle
								label={__('Flip horizontally', 'atrc-prefix-atrc')}
								checked={flipH}
								onChange={() => setAttr(!flipH, 'flipH')}
								key={iDx}
							/>
						);
					}
					if ('sz' === item) {
						return (
							<AtrcControlWidthHeight
								label={__('Size', 'atrc-prefix-atrc')}
								allowHeight={true}
								allowWidth={true}
								type={'device'}
								value={{
									h: {
										xs: xsH,
										sm: smH,
										md: mdH,
										lg: lgH,
										xl: xlH,
										xxl: xxlH,
									},
									w: {
										xs: xsW,
										sm: smW,
										md: mdW,
										lg: lgW,
										xl: xlW,
										xxl: xxlW,
									},
								}}
								onChange={setWidthHeight}
								className={classnames('at-flx-grw-1')}
								key={iDx}
							/>
						);
					}
					return null;
				})
			}
		</AtrcPanelTools>
	);
};

const AtrcControlSvg = (props) => {
	const {
		value = {},
		definedOptions = [],
		variant = '',
		className = '',
		alloweColor = true,
		alloweSettings = true,
		onChange = () => {},
	} = props;

	const {
		svgFrm = 'def',
		svgDefd = '',
		svgCust = '',
		svgCl = '',
		flipV = false,
		flipH = false,
		xsW = '',
		smW = '',
		mdW = '',
		lgW = '',
		xlW = '',
		xxlW = '',
		xsH = '',
		smH = '',
		mdH = '',
		lgH = '',
		xlH = '',
		xxlH = '',
	} = value;

	const doOnchange = (newValues) => {
		onChange(AtrcObjDeleteEmptyKey(newValues));
	};

	const setAttr = (newVal, tp) => {
		const valueCloned = cloneDeep(value);

		switch (tp) {
			case 'svgDefd':
				delete valueCloned.svgCust;
				break;

			case 'svgCust':
				delete valueCloned.svgDefd;
				break;

			default:
				break;
		}
		valueCloned[tp] = newVal;
		doOnchange(valueCloned);
	};

	const setShapeSettings = (newVal) => {
		let valueCloned = cloneDeep(value);

		delete valueCloned.flipV;
		delete valueCloned.flipH;
		delete valueCloned.xsW;
		delete valueCloned.smW;
		delete valueCloned.mdW;
		delete valueCloned.lgW;
		delete valueCloned.xlW;
		delete valueCloned.xxlW;
		delete valueCloned.xsH;
		delete valueCloned.smH;
		delete valueCloned.mdH;
		delete valueCloned.lgH;
		delete valueCloned.xlH;
		delete valueCloned.xxlH;

		valueCloned = {
			...valueCloned,
			...newVal,
		};

		doOnchange(valueCloned);
	};

	return (
		<AtrcWrap
			className={classnames(
				AtrcPrefix('ctrl-shp'),
				'at-flx-grw-1',
				className,
				variant ? AtrcPrefix('ctrl-shp') + '-' + variant : ''
			)}>
			<SvgShape
				from={svgFrm}
				def={svgDefd}
				cust={svgCust}
				onChange={setAttr}
				definedOptions={definedOptions}
			/>
			{alloweColor && 'def' === svgFrm ? (
				<AtrcPanelRow className={classnames('at-flx-grw-1 at-m')}>
					<AtrcControlDropdownColor
						label={__('Color', 'atrc-prefix-atrc')}
						value={svgCl}
						onChange={(newVal) => setAttr(newVal, 'svgCl')}
					/>
				</AtrcPanelRow>
			) : null}

			{alloweSettings && svgDefd ? (
				<ShapeSettings
					value={{
						flipV,
						flipH,
						xsW,
						smW,
						mdW,
						lgW,
						xlW,
						xxlW,
						xsH,
						smH,
						mdH,
						lgH,
						xlH,
						xxlH,
					}}
					onChange={setShapeSettings}
				/>
			) : null}
		</AtrcWrap>
	);
};

export default AtrcControlSvg;
