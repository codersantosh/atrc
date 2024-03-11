/* WordPress */
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/* Library */
import { cloneDeep } from 'lodash';
import classnames from 'classnames';

/* Atrc */
import {
	AtrcControlBoundary,
	AtrcText,
	AtrcWireFrameContentSidebar,
	AtrcPreTemplate1,
	AtrcFormatCss,
	AtrcControlBoundaryCss,
	AtrcGenerateDynamicCss,
} from '../../packages';

/* Local */
export default {
	title: 'Controls/AtrcControlBoundary',
};

/* Boundary */
export const Boundary = () => {
	const [settings, setSettings] = useState({
		bd: {
			bdr: {},
			bdrRad: {},
			boxSdw: {},
		},
	});

	const { bd = {} } = settings;

	const updateSetting = (key, val) => {
		const clonedSettings = cloneDeep(settings);
		clonedSettings[key] = val;
		setSettings(clonedSettings);
	};

	const getCss = () => {
		const gotCss = AtrcControlBoundaryCss({ value: bd });

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
						<AtrcControlBoundary
							label={__('Boundary', 'atrc-prefix-atrc')}
							value={bd}
							onChange={(newVal) => {
								updateSetting('bd', newVal);
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
						<AtrcPreTemplate1 content={JSON.stringify(bd, null, 2)} />
					</>
				}
				sidebarProps={{ sidebarCol: 'at-col-6' }}
				contentProps={{ contentCol: 'at-col-6' }}
			/>
		</>
	);
};

export const BoundaryTab = () => {
	const [settings, setSettings] = useState({
		bdTab: {
			bdr: {},
			bdrRad: {},
			boxSdw: {},
		},
	});

	const { bdTab = {} } = settings;

	const updateSetting = (key, val) => {
		const clonedSettings = cloneDeep(settings);
		clonedSettings[key] = val;
		setSettings(clonedSettings);
	};

	const getCss = () => {
		const gotCss = AtrcControlBoundaryCss({
			value: bdTab,
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
						<AtrcControlBoundary
							label={__('Boundary Tab', 'atrc-prefix-atrc')}
							type='tab'
							value={bdTab}
							onChange={(newVal) => {
								updateSetting('bdTab', newVal);
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
						<AtrcPreTemplate1 content={JSON.stringify(bdTab, null, 2)} />
					</>
				}
				sidebarProps={{ sidebarCol: 'at-col-6' }}
				contentProps={{ contentCol: 'at-col-6' }}
			/>
		</>
	);
};
