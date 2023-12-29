/*Attributes Structure
Type Object
{
    svgFrm = '',
    svgDefd = '',
    svgCust = '',
    svgCl = '',
    flipV = '',
    flipH = '',

    w = '',
    smW = '',
    mdW = '',
    lgW = '',
    xlW = '',
    xxlW = '',
    h = '',
    smH = '',
    mdH= '',
    lgH = '',
    xlH = '',
    xxlH = ''
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';

import { useMemo } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import {
	AtrcSelect,
	AtrcLabel,
	AtrcTextarea,
	AtrcToggle,
	AtrcWrap,
} from '../../atoms';

import {
	AtrcControlDropdownHtml,
	AtrcControlDropdownColor,
	AtrcControlResponsiveWidthHeight,
	AtrcPanelTools,
	AtrcIconPreview,
	AtrcPanelRow,
} from '../index';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';
import { isEmpty, map } from 'lodash';

/*Local Components */
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
		<AtrcPanelRow className={classnames('at-m')}>
			<AtrcControlDropdownHtml
				label={
					<>
						<AtrcLabel>{__('Choose svg', 'atrc-prefix-atrc')}</AtrcLabel>
						<AtrcIconPreview icon={icon} />
					</>
				}
				value={value}
				onChange={onChange}
				options={options}
			/>
		</AtrcPanelRow>
	);
};

const SvgShape = ({ from, def, cust, definedOptions, onChange }) => {
	return (
		<>
			<AtrcPanelRow className={classnames('at-m')}>
				<AtrcSelect
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
				<AtrcTextarea
					value={cust}
					onChange={(newVal) => onChange(newVal, 'svgCust')}
				/>
			)}
		</>
	);
};

const ShapeSettings = (props) => {
	const { value, onChange = () => {} } = props;

	const { flipV = false, flipH = false, ...imgProps } = value;

	const setAttr = (newVal, type) => {
		const valueCloned = Object.assign({}, value);
		valueCloned[type] = newVal;
		onChange(valueCloned);
	};

	const setWidthHeight = (newVal) => {
		let valueCloned = Object.assign({}, value);

		delete valueCloned.w;
		delete valueCloned.smW;
		delete valueCloned.mdW;
		delete valueCloned.lgW;
		delete valueCloned.xlW;
		delete valueCloned.xxlW;
		delete valueCloned.h;
		delete valueCloned.smH;
		delete valueCloned.mdH;
		delete valueCloned.lgH;
		delete valueCloned.xlH;
		delete valueCloned.xxlH;

		valueCloned = {
			...valueCloned,
			...newVal,
		};
		onChange(valueCloned);
	};

	const AllTabs = useMemo(() => {
		return [
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
				hasValue: !isEmpty(imgProps),
				onDeselect: () => setWidthHeight({}),
			},
		];
	}, []);

	return (
		<>
			<AtrcPanelTools
				label={__('Shape options', 'atrc-prefix-atrc')}
				resetAll={() => onChange({})}
				tools={AllTabs}>
				{(activeItems) =>
					map(activeItems, function (item, iDx) {
						if ('flipV' === item) {
							return (
								<AtrcToggle
									label={__('Flip vertically', 'atrc-prefix-atrc')}
									checked={flipV}
									onChange={() => setAttr(!flipV, 'flipV')}
									key={iDx}
								/>
							);
						}
						if ('flipH' === item) {
							return (
								<AtrcToggle
									label={__('Flip horizontally', 'atrc-prefix-atrc')}
									checked={flipH}
									onChange={() => setAttr(!flipH, 'flipH')}
									key={iDx}
								/>
							);
						}
						if ('sz' === item) {
							return (
								<AtrcControlResponsiveWidthHeight
									label={__('Size', 'atrc-prefix-atrc')}
									value={{
										...imgProps,
									}}
									onChange={setWidthHeight}
									key={iDx}
								/>
							);
						}
						return null;
					})
				}
			</AtrcPanelTools>
		</>
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
		w = '',
		smW = '',
		mdW = '',
		lgW = '',
		xlW = '',
		xxlW = '',
		h = '',
		smH = '',
		mdH = '',
		lgH = '',
		xlH = '',
		xxlH = '',
	} = value;

	const setAttr = (newVal, tp) => {
		const valueCloned = Object.assign({}, value);
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
		onChange(valueCloned);
	};

	const setShapeSettings = (newVal) => {
		let valueCloned = Object.assign({}, value);

		delete valueCloned.flipV;
		delete valueCloned.flipH;
		delete valueCloned.w;
		delete valueCloned.smW;
		delete valueCloned.mdW;
		delete valueCloned.lgW;
		delete valueCloned.xlW;
		delete valueCloned.xxlW;
		delete valueCloned.h;
		delete valueCloned.smH;
		delete valueCloned.mdH;
		delete valueCloned.lgH;
		delete valueCloned.xlH;
		delete valueCloned.xxlH;

		valueCloned = {
			...valueCloned,
			...newVal,
		};
		onChange(valueCloned);
	};

	return (
		<AtrcWrap
			className={classnames(
				AtrcPrefix('ctrl-shp'),
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
				<AtrcControlDropdownColor
					label={__('Color', 'atrc-prefix-atrc')}
					value={svgCl}
					onChange={(newVal) => onChange(newVal, 'svgCl')}
				/>
			) : null}
			{alloweSettings && svgDefd ? (
				<ShapeSettings
					value={{
						flipV,
						flipH,
						w,
						smW,
						mdW,
						lgW,
						xlW,
						xxlW,
						h,
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
