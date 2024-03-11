/* WordPress */
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/* Library */
import { cloneDeep } from 'lodash';
import classnames from 'classnames';

/* Atrc */
import {
	AtrcControlWidthHeight,
	AtrcText,
	AtrcWireFrameContentSidebar,
	AtrcPreTemplate1,
	AtrcFormatCss,
	AtrcControlWidthHeightCss,
	AtrcGenerateDynamicCss,
} from '../../packages';

export default {
	title: 'Controls/AtrcControlWidthHeight',
};

/* Width height */
export const WidthHeightUnit = () => {
	const [settings, setSettings] = useState({
		wh: {
			minW: '2em',
			w: '5vw',
		},
	});

	const { wh = {} } = settings;

	const updateSetting = (key, val) => {
		const clonedSettings = cloneDeep(settings);
		clonedSettings[key] = val;
		setSettings(clonedSettings);
	};

	const getCss = () => {
		const gotCss = AtrcControlWidthHeightCss({ value: wh });

		const dynamicCss = AtrcGenerateDynamicCss({
			cssObj: gotCss,
			selector: '#atrcUniqueSelector',
		});

		if (dynamicCss) {
			return dynamicCss;
		}
		return __('Empty css', 'atrc-prefix-atrc');
	};
	return (
		<>
			<AtrcWireFrameContentSidebar
				renderContent={
					<>
						<AtrcControlWidthHeight
							label={__('Width & Height Unit only', 'atrc-prefix-atrc')}
							value={wh}
							onChange={(newVal) => {
								updateSetting('wh', newVal);
							}}
							allowMinWidth={true}
							allowWidth={true}
							allowMaxWidth={true}
							allowMinHeight={true}
							allowHeight={true}
							allowMaxHeight={true}
						/>
						<AtrcText
							tag='h3'
							className={classnames('at-m')}>
							{__('Dynamic CSS', 'atrc-prefix-atrc')}
						</AtrcText>
						<AtrcPreTemplate1 content={AtrcFormatCss(getCss())} />
					</>
				}
				renderSidebar={
					<>
						<AtrcText
							tag='h3'
							className={classnames('at-m')}>
							{__('Values', 'atrc-prefix-atrc')}
						</AtrcText>
						<AtrcPreTemplate1 content={JSON.stringify(wh, null, 2)} />
					</>
				}
				sidebarProps={{ sidebarCol: 'at-col-6' }}
				contentProps={{ contentCol: 'at-col-6' }}
			/>
		</>
	);
};

export const WidthHeightUnitDevice = () => {
	const [settings, setSettings] = useState({
		whDevice: {
			h: {
				xs: '1px',
				md: '2px',
				lg: '3px',
				xl: '4px',
			},
			minW: {
				xs: '2px',
				md: '3px',
				lg: '4px',
				xl: '5px',
			},
		},
	});

	const { whDevice = {} } = settings;

	const updateSetting = (key, val) => {
		const clonedSettings = cloneDeep(settings);
		clonedSettings[key] = val;
		setSettings(clonedSettings);
	};

	const getCss = () => {
		const gotCss = AtrcControlWidthHeightCss({
			value: whDevice,
			type: 'device',
		});

		const dynamicCss = AtrcGenerateDynamicCss({
			cssObj: gotCss,
			selector: '#atrcUniqueSelector',
		});

		if (dynamicCss) {
			return dynamicCss;
		}
		return __('Empty css', 'atrc-prefix-atrc');
	};
	return (
		<>
			<AtrcWireFrameContentSidebar
				renderContent={
					<>
						<AtrcControlWidthHeight
							label={__('Width & Height Device', 'atrc-prefix-atrc')}
							type='device'
							value={whDevice}
							onChange={(newVal) => {
								updateSetting('whDevice', newVal);
							}}
							allowMinWidth={true}
							allowWidth={true}
							allowMaxWidth={true}
							allowMinHeight={true}
							allowHeight={true}
							allowMaxHeight={true}
						/>
						<AtrcText
							tag='h3'
							className={classnames('at-m')}>
							{__('Dynamic CSS', 'atrc-prefix-atrc')}
						</AtrcText>
						<AtrcPreTemplate1 content={AtrcFormatCss(getCss())} />
					</>
				}
				renderSidebar={
					<>
						<AtrcText
							tag='h3'
							className={classnames('at-m')}>
							{__('Values', 'atrc-prefix-atrc')}
						</AtrcText>
						<AtrcPreTemplate1 content={JSON.stringify(whDevice, null, 2)} />
					</>
				}
				sidebarProps={{ sidebarCol: 'at-col-6' }}
				contentProps={{ contentCol: 'at-col-6' }}
			/>
		</>
	);
};

export const WidthHeightUnitTab = () => {
	const [settings, setSettings] = useState({
		whTab: {
			h: {
				normal: '1px',
				hover: '2px',
			},
			w: {
				normal: '1px',
				hover: '2px',
			},
		},
	});

	const { whTab = {} } = settings;

	const updateSetting = (key, val) => {
		const clonedSettings = cloneDeep(settings);
		clonedSettings[key] = val;
		setSettings(clonedSettings);
	};

	const getCss = () => {
		const gotCss = AtrcControlWidthHeightCss({
			value: whTab,
			type: 'tab',
		});

		const dynamicCss = AtrcGenerateDynamicCss({
			cssObj: gotCss,
			selector: '#atrcUniqueSelector',
		});

		if (dynamicCss) {
			return dynamicCss;
		}
		return __('Empty css', 'atrc-prefix-atrc');
	};

	return (
		<>
			<AtrcWireFrameContentSidebar
				renderContent={
					<>
						<AtrcControlWidthHeight
							label={__('Width & Height Tab', 'atrc-prefix-atrc')}
							type='tab'
							value={whTab}
							onChange={(newVal) => {
								updateSetting('whTab', newVal);
							}}
							allowMinWidth={true}
							allowWidth={true}
							allowMaxWidth={true}
							allowMinHeight={true}
							allowHeight={true}
							allowMaxHeight={true}
						/>
						<AtrcText
							tag='h3'
							className={classnames('at-m')}>
							{__('Dynamic CSS', 'atrc-prefix-atrc')}
						</AtrcText>
						<AtrcPreTemplate1 content={AtrcFormatCss(getCss())} />
					</>
				}
				renderSidebar={
					<>
						<AtrcText
							tag='h3'
							className={classnames('at-m')}>
							{__('Values', 'atrc-prefix-atrc')}
						</AtrcText>
						<AtrcPreTemplate1 content={JSON.stringify(whTab, null, 2)} />
					</>
				}
				sidebarProps={{ sidebarCol: 'at-col-6' }}
				contentProps={{ contentCol: 'at-col-6' }}
			/>
		</>
	);
};

export const WidthHeightUnitDeviceTab = () => {
	const [settings, setSettings] = useState({
		wh: {
			minW: {
				xs: '10px',
				sm: '11px',
				md: '12px',
				lg: '13px',
				xl: '14px',
				xxl: '15px',

				xsHover: '16px',
				smHover: '17px',
				mdHover: '18px',
				lgHover: '19px',
				xlHover: '20px',
				xxlHover: '21px',
			},
			w: {
				xs: '10px',
				sm: '11px',
				md: '12px',
				lg: '13px',
				xl: '14px',
				xxl: '15px',

				xsHover: '16px',
				smHover: '17px',
				mdHover: '18px',
				lgHover: '19px',
				xlHover: '20px',
				xxlHover: '21px',
			},
		},
	});

	const { wh = {} } = settings;

	const updateSetting = (key, val) => {
		const clonedSettings = cloneDeep(settings);
		clonedSettings[key] = val;
		setSettings(clonedSettings);
	};

	const getCss = () => {
		const gotCss = AtrcControlWidthHeightCss({
			value: wh,
			type: 'deviceTab',
		});

		const dynamicCss = AtrcGenerateDynamicCss({
			cssObj: gotCss,
			selector: '#atrcUniqueSelector',
			hoverParentSelector: '#atrcUniqueParentSelector',
		});

		if (dynamicCss) {
			return dynamicCss;
		}
		return __('Empty css', 'atrc-prefix-atrc');
	};

	return (
		<>
			<AtrcWireFrameContentSidebar
				renderContent={
					<>
						<AtrcControlWidthHeight
							label={__('Width & Height Settings', 'atrc-prefix-atrc')}
							value={wh}
							type='deviceTab'
							onChange={(newVal) => {
								updateSetting('wh', newVal);
							}}
							allowMinWidth={true}
							allowWidth={true}
							allowMaxWidth={true}
							allowMinHeight={true}
							allowHeight={true}
							allowMaxHeight={true}
						/>
						<AtrcText
							tag='h3'
							className={classnames('at-m')}>
							{__('Dynamic CSS', 'atrc-prefix-atrc')}
						</AtrcText>
						<AtrcPreTemplate1 content={AtrcFormatCss(getCss())} />
					</>
				}
				renderSidebar={
					<>
						<AtrcText
							tag='h3'
							className={classnames('at-m')}>
							{__('Values', 'atrc-prefix-atrc')}
						</AtrcText>
						<AtrcPreTemplate1 content={JSON.stringify(wh, null, 2)} />
					</>
				}
				sidebarProps={{ sidebarCol: 'at-col-6' }}
				contentProps={{ contentCol: 'at-col-6' }}
			/>
		</>
	);
};
