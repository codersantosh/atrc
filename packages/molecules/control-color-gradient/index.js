/* Library */
import classnames from 'classnames';
import { isEmpty } from 'lodash';

/* WordPress */
import {
	BaseControl,
	// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
	__experimentalVStack as VStack,
	TabPanel,
	ColorPalette,
	GradientPicker,
} from '@wordpress/components';

/* Internal */
import AtrcUseColors from '../../utils/use-colors';

import AtrcPrefix from '../../prefix-vars';

/* Local */
const colorsAndGradientKeys = [
	'colors',
	'disableCustomColors',
	'gradients',
	'disableCustomGradients',
];

const TAB_COLOR = {
	name: 'color',
	title: 'Solid',
	value: 'color',
};
const TAB_GRADIENT = {
	name: 'gradient',
	title: 'Gradient',
	value: 'gradient',
};

const TABS_SETTINGS = [TAB_COLOR, TAB_GRADIENT];

function ColorGradientControlInner({
	colors,
	gradients,
	disableCustomColors,
	disableCustomGradients,
	__experimentalIsRenderedInSidebar,
	className,
	label,
	onColorChange,
	onGradientChange,
	colorValue,
	gradientValue,
	clearable,
	showTitle = true,
	enableAlpha,
	headingLevel,
	variant = '',
}) {
	const canChooseAColor =
		onColorChange && (!isEmpty(colors) || !disableCustomColors);
	const canChooseAGradient =
		onGradientChange && (!isEmpty(gradients) || !disableCustomGradients);

	if (!canChooseAColor && !canChooseAGradient) {
		return null;
	}

	const tabPanels = {
		[TAB_COLOR.value]: (
			<ColorPalette
				value={colorValue}
				onChange={
					canChooseAGradient
						? (newColor) => {
								onColorChange(newColor);
								onGradientChange();
							}
						: onColorChange
				}
				{...{ colors, disableCustomColors }}
				__experimentalIsRenderedInSidebar={__experimentalIsRenderedInSidebar}
				clearable={clearable}
				enableAlpha={enableAlpha}
				headingLevel={headingLevel}
			/>
		),
		[TAB_GRADIENT.value]: (
			<GradientPicker
				__nextHasNoMargin
				value={gradientValue}
				onChange={
					canChooseAColor
						? (newGradient) => {
								onGradientChange(newGradient);
								onColorChange();
							}
						: onGradientChange
				}
				{...{ gradients, disableCustomGradients }}
				__experimentalIsRenderedInSidebar={__experimentalIsRenderedInSidebar}
				clearable={clearable}
				headingLevel={headingLevel}
			/>
		),
	};

	const renderPanelType = (type) => (
		<div className='blk-ed-cl-grd-ctrl__pnl'>{tabPanels[type]}</div>
	);

	return (
		<BaseControl
			__nextHasNoMarginBottom
			className={classnames(
				'blk-ed-cl-grd-ctrl',
				className,
				variant ? AtrcPrefix('cl-grd') + '-' + variant : ''
			)}>
			<fieldset className='blk-ed-cl-grd-ctrl__fieldset'>
				<VStack spacing={1}>
					{showTitle && (
						<legend>
							<div className='blk-ed-cl-grd-ctrl__cl-ind'>
								<BaseControl.VisualLabel>{label}</BaseControl.VisualLabel>
							</div>
						</legend>
					)}
					{canChooseAColor && canChooseAGradient && (
						<TabPanel
							className='blk-ed-cl-grd-control__tabs'
							tabs={TABS_SETTINGS}
							initialTabName={
								gradientValue
									? TAB_GRADIENT.value
									: !!canChooseAColor && TAB_COLOR.value
							}>
							{(tab) => renderPanelType(tab.value)}
						</TabPanel>
					)}
					{!canChooseAGradient && renderPanelType(TAB_COLOR.value)}
					{!canChooseAColor && renderPanelType(TAB_GRADIENT.value)}
				</VStack>
			</fieldset>
		</BaseControl>
	);
}

function ColorGradientControlSelect(props) {
	const colorGradientSettings = {};
	const { allSolids, allGradients } = AtrcUseColors();

	colorGradientSettings.colors = allSolids;
	colorGradientSettings.gradients = allGradients;
	colorGradientSettings.disableCustomColors =
		props.disableCustomColors || false;
	colorGradientSettings.disableCustomGradients =
		props.disableCustomGradients || false;

	return (
		<ColorGradientControlInner {...{ ...colorGradientSettings, ...props }} />
	);
}

function AtrcColorGradientControl(props) {
	if (
		colorsAndGradientKeys.every((key) =>
			Object.prototype.hasOwnProperty.call(props, key)
		)
	) {
		return <ColorGradientControlInner {...props} />;
	}
	return <ColorGradientControlSelect {...props} />;
}

export default AtrcColorGradientControl;
