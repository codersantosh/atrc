/* WordPress */
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/* Library */
import { cloneDeep, isEmpty } from 'lodash';
import classnames from 'classnames';

/* Atrc */
import {
	AtrcControlBoxFour,
	AtrcControlBoxFourShorthandCssOnly,
	AtrcControlBoxFourDevice,
	AtrcControlBoxFourDeviceCss,
	AtrcControlBoxFourTab,
	AtrcControlBoxFourTabCss,
	AtrcControlBoxFourDeviceTab,
	AtrcControlBoxFourDeviceTabCss,
	AtrcText,
	AtrcWireFrameContentSidebar,
	AtrcPreTemplate1,
	AtrcFormatCss,
	AtrcGenerateDynamicCss,
} from '../../packages';

/* Local */
export default {
	title: 'Controls/AtrcControlBoxFour',
};

/* BoxFour Settings 1 */
export const BoxFour = () => {
	const [settings, setSettings] = useState({
		boxFour: {
			t: '',
			r: '',
			b: '',
			l: '',
		},
	});

	const { boxFour = {} } = settings;

	const updateSetting = (key, val) => {
		const clonedSettings = cloneDeep(settings);
		clonedSettings[key] = val;
		setSettings(clonedSettings);
	};

	const getCss = () => {
		const gotCss = AtrcControlBoxFourShorthandCssOnly({
			value: boxFour,
			property: '--at-m',
		});

		if (gotCss) {
			return gotCss;
		}
		return __('Empty css', 'atrc-prefix-atrc');
	};

	return (
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcControlBoxFour
						label={__('Control Unit', 'atrc-prefix-atrc')}
						value={boxFour}
						onChange={(newVal) => {
							updateSetting('boxFour', newVal);
						}}
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
						{__('Example value', 'atrc-prefix-atrc')}
					</AtrcText>
					<AtrcPreTemplate1 content={JSON.stringify(boxFour, null, 2)} />
				</>
			}
			sidebarProps={{ sidebarCol: 'at-col-6' }}
			contentProps={{ contentCol: 'at-col-6' }}
		/>
	);
};

export const BoxFourDevice = () => {
	const [settings, setSettings] = useState({
		boxFourDevice: {
			xsT: '',
			xsB: '',
			xsR: '',
			xsL: '',

			smT: '',
			smB: '',
			smR: '',
			smL: '',

			mdT: '',
			mdB: '',
			mdR: '',
			mdL: '',

			lgT: '',
			lgB: '',
			lgR: '',
			lgL: '',

			xlT: '',
			xlB: '',
			xlR: '',
			xlL: '',

			xxlT: '',
			xxlB: '',
			xxlR: '',
			xxlL: '',
		},
	});

	const { boxFourDevice = {} } = settings;

	const updateSetting = (key, val) => {
		const clonedSettings = cloneDeep(settings);
		clonedSettings[key] = val;
		setSettings(clonedSettings);
	};

	const getCss = () => {
		const boxCss = AtrcControlBoxFourDeviceCss({
			value: boxFourDevice,
			property: '--at-m',
		});
		if (!isEmpty(boxCss)) {
			const dynamicCss = AtrcGenerateDynamicCss({
				cssObj: boxCss,
				selector: '#atrcUniqueSelector',
			});

			if (dynamicCss) {
				return dynamicCss;
			}
		}
		return __('Empty css', 'atrc-prefix-atrc');
	};

	return (
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcControlBoxFourDevice
						label={__('Control Unit Device', 'atrc-prefix-atrc')}
						value={boxFourDevice}
						onChange={(newVal) => {
							updateSetting('boxFourDevice', newVal);
						}}
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
					<AtrcPreTemplate1 content={JSON.stringify(boxFourDevice, null, 2)} />
				</>
			}
			sidebarProps={{ sidebarCol: 'at-col-6' }}
			contentProps={{ contentCol: 'at-col-6' }}
		/>
	);
};

export const BoxFourTab = () => {
	const [settings, setSettings] = useState({
		boxFourTab: {
			t: '2px',
			b: '2px',
			r: '2px',
			l: '2px',
			tHover: '3px',
			bHover: '3px',
			rHover: '3px',
			lHover: '3px',
		},
	});

	const { boxFourTab = {} } = settings;

	const updateSetting = (key, val) => {
		const clonedSettings = cloneDeep(settings);
		clonedSettings[key] = val;
		setSettings(clonedSettings);
	};

	const getCss = () => {
		const boxCss = AtrcControlBoxFourTabCss({
			value: boxFourTab,
			property: '--at-m',
		});
		if (!isEmpty(boxCss)) {
			const dynamicCss = AtrcGenerateDynamicCss({
				cssObj: boxCss,
				selector: '#atrcUniqueSelector',
			});

			if (dynamicCss) {
				return dynamicCss;
			}
		}
		return __('Empty css', 'atrc-prefix-atrc');
	};

	return (
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcControlBoxFourTab
						label={__('Control Unit Tab', 'atrc-prefix-atrc')}
						value={boxFourTab}
						onChange={(newVal) => {
							updateSetting('boxFourTab', newVal);
						}}
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
					<AtrcPreTemplate1 content={JSON.stringify(boxFourTab, null, 2)} />
				</>
			}
			sidebarProps={{ sidebarCol: 'at-col-6' }}
			contentProps={{ contentCol: 'at-col-6' }}
		/>
	);
};

export const BoxFourDeviceTab = () => {
	const [settings, setSettings] = useState({
		boxFourDeviceTab: {
			xsT: '1px',
			xsB: '1px',
			xsR: '1px',
			xsL: '1px',
			mdT: '2px',
			mdR: '2px',
			mdB: '2px',
			mdL: '2px',
			lgT: '3px',
			lgR: '3px',
			lgB: '3px',
			lgL: '3px',
			xlT: '4px',
			xlR: '4px',
			xlB: '4px',
			xlL: '4px',
			xlTHover: '8px',
			xlRHover: '8px',
			xlBHover: '8px',
			xlLHover: '8px',
			xsTHover: '5px',
			xsBHover: '5px',
			xsRHover: '5px',
			xsLHover: '5px',
			mdTHover: '6px',
			mdRHover: '6px',
			mdBHover: '6px',
			mdLHover: '6px',
			lgTHover: '7px',
			lgRHover: '7px',
			lgBHover: '7px',
			lgLHover: '7px',
		},
	});

	const { boxFourDeviceTab = {} } = settings;

	const updateSetting = (key, val) => {
		const clonedSettings = cloneDeep(settings);
		clonedSettings[key] = val;
		setSettings(clonedSettings);
	};

	const getCss = () => {
		const boxCss = AtrcControlBoxFourDeviceTabCss({
			value: boxFourDeviceTab,
			property: '--at-m',
		});
		if (!isEmpty(boxCss)) {
			const dynamicCss = AtrcGenerateDynamicCss({
				cssObj: boxCss,
				selector: '#atrcUniqueSelector',
			});

			if (dynamicCss) {
				return dynamicCss;
			}
		}
		return __('Empty css', 'atrc-prefix-atrc');
	};

	return (
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcControlBoxFourDeviceTab
						label={__('Control Unit Device Tab', 'atrc-prefix-atrc')}
						value={boxFourDeviceTab}
						onChange={(newVal) => {
							updateSetting('boxFourDeviceTab', newVal);
						}}
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
					<AtrcPreTemplate1
						content={JSON.stringify(boxFourDeviceTab, null, 2)}
					/>
				</>
			}
			sidebarProps={{ sidebarCol: 'at-col-6' }}
			contentProps={{ contentCol: 'at-col-6' }}
		/>
	);
};
