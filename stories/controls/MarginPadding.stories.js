/* WordPress */
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/* Library */
import { cloneDeep } from 'lodash';
import classnames from 'classnames';

/* Atrc */
import {
	AtrcControlMarginPadding,
	AtrcText,
	AtrcWireFrameContentSidebar,
	AtrcPreTemplate1,
	AtrcFormatCss,
	AtrcControlMarginPaddingCss,
	AtrcGenerateDynamicCss,
} from '../../packages';

/* Local */
export default {
	title: 'Controls/AtrcControlMarginPadding',
};

/* Margin padding*/
export const MarginPadding = () => {
	const [settings, setSettings] = useState({
		mp: {
			m: {
				t: '1px',
				r: '1px',
				b: '1px',
				l: '1px',
			},
			p: {
				t: '2px',
				r: '2px',
				b: '2px',
				l: '2px',
			},
		},
	});

	const { mp = {} } = settings;

	const updateSetting = (key, val) => {
		const clonedSettings = cloneDeep(settings);
		clonedSettings[key] = val;
		setSettings(clonedSettings);
	};

	const getCss = () => {
		const gotCss = AtrcControlMarginPaddingCss({ value: mp });

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
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcControlMarginPadding
						label={__('Margin & Padding', 'atrc-prefix-atrc')}
						value={mp}
						onChange={(newVal) => {
							updateSetting('mp', newVal);
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
					<AtrcPreTemplate1 content={JSON.stringify(mp, null, 2)} />
				</>
			}
			sidebarProps={{ sidebarCol: 'at-col-6' }}
			contentProps={{ contentCol: 'at-col-6' }}
		/>
	);
};

export const MarginPaddingDevice = () => {
	const [settings, setSettings] = useState({
		mpDevice: {
			m: {
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
			p: {
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
		},
	});

	const { mpDevice = {} } = settings;

	const updateSetting = (key, val) => {
		const clonedSettings = cloneDeep(settings);
		clonedSettings[key] = val;
		setSettings(clonedSettings);
	};

	const getCss = () => {
		const gotCss = AtrcControlMarginPaddingCss({
			value: mpDevice,
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
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcControlMarginPadding
						label={__('Margin & Padding Device', 'atrc-prefix-atrc')}
						type='device'
						value={mpDevice}
						onChange={(newVal) => {
							updateSetting('mpDevice', newVal);
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
						tag='h2'
						className={classnames('at-m')}>
						{__('Values', 'atrc-prefix-atrc')}
					</AtrcText>
					<AtrcPreTemplate1 content={JSON.stringify(mpDevice, null, 2)} />
				</>
			}
			sidebarProps={{ sidebarCol: 'at-col-6' }}
			contentProps={{ contentCol: 'at-col-6' }}
		/>
	);
};

export const MarginPaddingTab = () => {
	const [settings, setSettings] = useState({
		mpTab: {
			m: {
				t: '1px',
				r: '1px',
				b: '1px',
				l: '1px',
				tHover: '2px',
				rHover: '2px',
				bHover: '2px',
				lHover: '2px',
			},
			p: {
				t: '3px',
				r: '3px',
				b: '3px',
				l: '3px',
				tHover: '4px',
				rHover: '4px',
				bHover: '4px',
				lHover: '4px',
			},
		},
	});

	const { mpTab = {} } = settings;

	const updateSetting = (key, val) => {
		const clonedSettings = cloneDeep(settings);
		clonedSettings[key] = val;
		setSettings(clonedSettings);
	};

	const getCss = () => {
		const gotCss = AtrcControlMarginPaddingCss({
			value: mpTab,
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
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcControlMarginPadding
						label={__('Margin & Padding Tab', 'atrc-prefix-atrc')}
						type='tab'
						value={mpTab}
						onChange={(newVal) => {
							updateSetting('mpTab', newVal);
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
					<AtrcPreTemplate1 content={JSON.stringify(mpTab, null, 2)} />
				</>
			}
			sidebarProps={{ sidebarCol: 'at-col-6' }}
			contentProps={{ contentCol: 'at-col-6' }}
		/>
	);
};

export const MarginPaddingDeviceTab = () => {
	const [settings, setSettings] = useState({
		wh: {
			m: {
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
				tHover: '5px',
				bHover: '5px',
				rHover: '5px',
				lHover: '5px',
				mdTHover: '6px',
				mdRHover: '6px',
				mdBHover: '6px',
				mdLHover: '6px',
				lgTHover: '7px',
				lgRHover: '7px',
				lgBHover: '7px',
				lgLHover: '7px',
			},
			p: {
				xsT: '1px',
				xsB: '1px',
				xsR: '1px',
				xsL: '1px',
				mdT: '10px',
				mdR: '10px',
				mdB: '10px',
				mdL: '10px',
				lgT: '11px',
				lgR: '11px',
				lgB: '11px',
				lgL: '11px',
				xlT: '12px',
				xlR: '12px',
				xlB: '12px',
				xlL: '12px',
				xsTHover: '13px',
				xsBHover: '13px',
				xsRHover: '13px',
				xsLHover: '13px',
				mdTHover: '14px',
				mdRHover: '14px',
				mdBHover: '14px',
				mdLHover: '14px',
				lgTHover: '15px',
				lgRHover: '15px',
				lgBHover: '15px',
				lgLHover: '15px',
				xlTHover: '16px',
				xlRHover: '16px',
				xlBHover: '16px',
				xlLHover: '16px',
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
		const gotCss = AtrcControlMarginPaddingCss({
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
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcControlMarginPadding
						label={__('Margin & Padding Settings', 'atrc-prefix-atrc')}
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
	);
};
