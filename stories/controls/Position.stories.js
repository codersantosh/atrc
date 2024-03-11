/* WordPress */
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/* Library */
import classnames from 'classnames';
import { action } from '@storybook/addon-actions';

/* Atrc */
import {
	AtrcControlPositionDevice,
	AtrcControlPositionDeviceCss,
	AtrcControlPositionDeviceTab,
	AtrcControlPositionDeviceTabCss,
	AtrcWireFrameContentSidebar,
	AtrcPreTemplate1,
	AtrcText,
	AtrcFormatCss,
	AtrcGenerateDynamicCss,
} from '../../packages';

export default {
	title: 'Controls/AtrcControlPosition',
	component: AtrcControlPositionDevice,
	tags: ['autodocs'],
	argTypes: {
		onChange: { action: 'onChange' },
	},
	args: {
		value: {},
	},
};

const Template = (args) => {
	const [value, setValue] = useState(args.value);

	const handleChange = (newValue) => {
		setValue(newValue);
		args.onChange(newValue);
		action('onChange')(newValue);
	};

	return (
		<AtrcControlPositionDevice
			value={value}
			onChange={handleChange}
		/>
	);
};

export const Default = Template.bind({});

export const ControlPositionDevice = () => {
	const [value, setValue] = useState({});

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	const getCss = () => {
		const gotCss = AtrcControlPositionDeviceCss({ value });

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
					<AtrcControlPositionDevice
						value={value}
						onChange={handleChange}
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
						{__('Value', 'atrc-prefix-atrc')}
					</AtrcText>
					<AtrcPreTemplate1 content={JSON.stringify(value, null, 2)} />
				</>
			}
			sidebarProps={{ sidebarCol: 'at-col-6' }}
			contentProps={{ contentCol: 'at-col-6' }}
		/>
	);
};

export const ControlPositionDeviceTab = () => {
	const [value, setValue] = useState({});

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	const getCss = () => {
		const gotCss = AtrcControlPositionDeviceTabCss({ value });

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
					<AtrcControlPositionDeviceTab
						value={value}
						onChange={handleChange}
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
						{__('Value', 'atrc-prefix-atrc')}
					</AtrcText>
					<AtrcPreTemplate1 content={JSON.stringify(value, null, 2)} />
				</>
			}
			sidebarProps={{ sidebarCol: 'at-col-6' }}
			contentProps={{ contentCol: 'at-col-6' }}
		/>
	);
};
