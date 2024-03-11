/* WordPress */
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/* Library */
import { cloneDeep } from 'lodash';

/* Atrc */
import {
	AtrcControlRange,
	AtrcControlRangeDevice,
	AtrcControlRangeTab,
	AtrcControlRangeDeviceTab,
	AtrcText,
	AtrcWrap,
	AtrcWireFrameContentSidebar,
} from '../../packages';

export default {
	title: 'Controls/AtrcControlRange',
};

/* Unit Settings 1 */
export const Range = () => {
	const [settings, setSettings] = useState({
		num: 5,
	});

	const { num = {} } = settings;

	const updateSetting = (key, val) => {
		const clonedSettings = cloneDeep(settings);
		clonedSettings[key] = val;
		setSettings(clonedSettings);
	};

	return (
		<>
			<AtrcWireFrameContentSidebar
				renderContent={
					<>
						<AtrcControlRange
							label={__('Control Range', 'atrc-prefix-atrc')}
							value={num}
							onChange={(newVal) => {
								updateSetting('num', newVal);
							}}
						/>
					</>
				}
				renderSidebar={
					<>
						<AtrcText tag='h2'>
							{__('Example values', 'atrc-prefix-atrc')}
						</AtrcText>
						<AtrcWrap tag='pre'>{JSON.stringify(num, null, 2)}</AtrcWrap>
					</>
				}
				sidebarProps={{ sidebarCol: 'at-col-6' }}
				contentProps={{ contentCol: 'at-col-6' }}
			/>
		</>
	);
};

export const RangeDevice = () => {
	const [settings, setSettings] = useState({
		numDevice: {
			xs: 1,
			sm: 2,
			md: 3,
			lg: 4,
			xl: 5,
			xxl: 6,
		},
	});

	const { numDevice = {} } = settings;

	const updateSetting = (key, val) => {
		const clonedSettings = cloneDeep(settings);
		clonedSettings[key] = val;
		setSettings(clonedSettings);
	};

	return (
		<>
			<AtrcWireFrameContentSidebar
				renderContent={
					<>
						<AtrcControlRangeDevice
							label={__('Control Range Device', 'atrc-prefix-atrc')}
							value={numDevice}
							onChange={(newVal) => {
								updateSetting('numDevice', newVal);
							}}
						/>
					</>
				}
				renderSidebar={
					<>
						<AtrcText tag='h2'>
							{__('Example values', 'atrc-prefix-atrc')}
						</AtrcText>
						<AtrcWrap tag='pre'>{JSON.stringify(numDevice, null, 2)}</AtrcWrap>
					</>
				}
				sidebarProps={{ sidebarCol: 'at-col-6' }}
				contentProps={{ contentCol: 'at-col-6' }}
			/>
		</>
	);
};

export const RangeTab = () => {
	const [settings, setSettings] = useState({
		numTab: {
			normal: 7,
			hover: 8,
		},
	});

	const { numTab = {} } = settings;

	const updateSetting = (key, val) => {
		const clonedSettings = cloneDeep(settings);
		clonedSettings[key] = val;
		setSettings(clonedSettings);
	};

	return (
		<>
			<AtrcWireFrameContentSidebar
				renderContent={
					<>
						<AtrcControlRangeTab
							label={__('Control Range Tab', 'atrc-prefix-atrc')}
							value={numTab}
							onChange={(newVal) => {
								updateSetting('numTab', newVal);
							}}
						/>
					</>
				}
				renderSidebar={
					<>
						<AtrcText tag='h2'>
							{__('Example values', 'atrc-prefix-atrc')}
						</AtrcText>
						<AtrcWrap tag='pre'>{JSON.stringify(numTab, null, 2)}</AtrcWrap>
					</>
				}
				sidebarProps={{ sidebarCol: 'at-col-6' }}
				contentProps={{ contentCol: 'at-col-6' }}
			/>
		</>
	);
};

export const RangeDeviceTab = () => {
	const [settings, setSettings] = useState({
		numDeviceTab: {
			xs: 10,
			sm: 11,
			md: 12,
			lg: 13,
			xl: 14,
			xxl: 15,

			xsHover: 16,
			smHover: 17,
			mdHover: 18,
			lgHover: 19,
			xlHover: 20,
			xxlHover: 21,
		},
	});

	const { numDeviceTab = {} } = settings;

	const updateSetting = (key, val) => {
		const clonedSettings = cloneDeep(settings);
		clonedSettings[key] = val;
		setSettings(clonedSettings);
	};

	return (
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcControlRangeDeviceTab
						label={__('Control Range Device Tab', 'atrc-prefix-atrc')}
						value={numDeviceTab}
						onChange={(newVal) => {
							updateSetting('numDeviceTab', newVal);
						}}
					/>
				</>
			}
			renderSidebar={
				<>
					<AtrcText tag='h2'>
						{__('Example values', 'atrc-prefix-atrc')}
					</AtrcText>
					<AtrcWrap tag='pre'>{JSON.stringify(numDeviceTab, null, 2)}</AtrcWrap>
				</>
			}
			sidebarProps={{ sidebarCol: 'at-col-6' }}
			contentProps={{ contentCol: 'at-col-6' }}
		/>
	);
};
