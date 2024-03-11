/* WordPress */
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/* Library */
import { cloneDeep } from 'lodash';
import classnames from 'classnames';

/* Atrc */
import {
	AtrcControlUnit,
	AtrcControlUnitDevice,
	AtrcControlUnitTab,
	AtrcControlUnitDeviceTab,
	AtrcText,
	AtrcPreTemplate1,
	AtrcWireFrameContentSidebar,
} from '../../packages';

export default {
	title: 'Controls/AtrcControlUnit',
};

/* Unit Settings 1 */
export const Unit = () => {
	const [settings, setSettings] = useState({
		unit: '5px',
	});

	const { unit = {} } = settings;

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
						<AtrcControlUnit
							label={__('Control Unit', 'atrc-prefix-atrc')}
							value={unit}
							onChange={(newVal) => {
								updateSetting('unit', newVal);
							}}
							allowSettings={false}
						/>
					</>
				}
				renderSidebar={
					<>
						<AtrcText
							tag='h3'
							className={classnames('at-m')}>
							{__('Example values', 'atrc-prefix-atrc')}
						</AtrcText>

						<AtrcPreTemplate1 content={JSON.stringify(unit, null, 2)} />
					</>
				}
				sidebarProps={{ sidebarCol: 'at-col-6' }}
				contentProps={{ contentCol: 'at-col-6' }}
			/>
		</>
	);
};

export const UnitDevice = () => {
	const [settings, setSettings] = useState({
		unitDevice: {
			xs: '1px',
			sm: '2x',
			md: '3px',
			lg: '4px',
			xl: '5px',
			xxl: '6px',
		},
	});

	const { unitDevice = {} } = settings;

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
						<AtrcControlUnitDevice
							label={__('Control Unit Device', 'atrc-prefix-atrc')}
							value={unitDevice}
							onChange={(newVal) => {
								updateSetting('unitDevice', newVal);
							}}
						/>
					</>
				}
				renderSidebar={
					<>
						<AtrcText
							tag='h3'
							className={classnames('at-m')}>
							{__('Example values', 'atrc-prefix-atrc')}
						</AtrcText>

						<AtrcPreTemplate1 content={JSON.stringify(unitDevice, null, 2)} />
					</>
				}
				sidebarProps={{ sidebarCol: 'at-col-6' }}
				contentProps={{ contentCol: 'at-col-6' }}
			/>
		</>
	);
};

export const UnitTab = () => {
	const [settings, setSettings] = useState({
		unitTab: {
			normal: '7px',
			hover: '8px',
		},
	});

	const { unitTab = {} } = settings;

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
						<AtrcControlUnitTab
							label={__('Control Unit Tab', 'atrc-prefix-atrc')}
							value={unitTab}
							onChange={(newVal) => {
								updateSetting('unitTab', newVal);
							}}
							allowSettings={false}
						/>
					</>
				}
				renderSidebar={
					<>
						<AtrcText
							tag='h3'
							className={classnames('at-m')}>
							{__('Example values', 'atrc-prefix-atrc')}
						</AtrcText>

						<AtrcPreTemplate1 content={JSON.stringify(unitTab, null, 2)} />
					</>
				}
				sidebarProps={{ sidebarCol: 'at-col-6' }}
				contentProps={{ contentCol: 'at-col-6' }}
			/>
		</>
	);
};

export const UnitDeviceTab = () => {
	const [settings, setSettings] = useState({
		unitDeviceTab: {
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
	});

	const { unitDeviceTab = {} } = settings;

	const updateSetting = (key, val) => {
		const clonedSettings = cloneDeep(settings);
		clonedSettings[key] = val;
		setSettings(clonedSettings);
	};

	return (
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcControlUnitDeviceTab
						label={__('Control Unit Device Tab', 'atrc-prefix-atrc')}
						value={unitDeviceTab}
						onChange={(newVal) => {
							updateSetting('unitDeviceTab', newVal);
						}}
					/>
				</>
			}
			renderSidebar={
				<>
					<AtrcText
						tag='h3'
						className={classnames('at-m')}>
						{__('Example values', 'atrc-prefix-atrc')}
					</AtrcText>

					<AtrcPreTemplate1 content={JSON.stringify(unitDeviceTab, null, 2)} />
				</>
			}
			sidebarProps={{ sidebarCol: 'at-col-6' }}
			contentProps={{ contentCol: 'at-col-6' }}
		/>
	);
};
