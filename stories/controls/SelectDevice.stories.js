/* WordPress */
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/* Library */
import { action } from '@storybook/addon-actions';

/* Atrc */
import {
	AtrcControlSelectDevice,
	AtrcControlSelectDeviceTab,
	AtrcWireFrameContentSidebar,
	AtrcPreTemplate1,
	AtrcText,
} from '../../packages';

export default {
	title: 'Controls/AtrcControlSelectDevice',
	component: AtrcControlSelectDevice,
	tags: ['autodocs'],
	argTypes: {
		onChange: { action: 'onChange' },
	},
	args: {
		value: '',
		options: [],
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
		<AtrcControlSelectDevice
			label={__('Background position', 'atrc-prefix-atrc')}
			wrapProps={{
				className: 'at-flx-grw-1',
			}}
			value={value}
			options={[
				{
					label: __('Default', 'atrc-prefix-atrc'),
					value: '',
				},
				{
					label: __('Auto', 'atrc-prefix-atrc'),
					value: 'auto',
				},
				{
					label: __('Cover', 'atrc-prefix-atrc'),
					value: 'cover',
				},
				{
					label: __('Contain', 'atrc-prefix-atrc'),
					value: 'contain',
				},
				{
					label: __('Custom', 'atrc-prefix-atrc'),
					value: 'custom',
				},
			]}
			onChange={handleChange}
		/>
	);
};

export const Default = Template.bind({});

export const SelectDevice = () => {
	const [value, setValue] = useState();

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	return (
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcControlSelectDevice
						label={__('Background position', 'atrc-prefix-atrc')}
						wrapProps={{
							className: 'at-flx-grw-1',
						}}
						value={value}
						options={[
							{
								label: __('Default', 'atrc-prefix-atrc'),
								value: '',
							},
							{
								label: __('Auto', 'atrc-prefix-atrc'),
								value: 'auto',
							},
							{
								label: __('Cover', 'atrc-prefix-atrc'),
								value: 'cover',
							},
							{
								label: __('Contain', 'atrc-prefix-atrc'),
								value: 'contain',
							},
							{
								label: __('Custom', 'atrc-prefix-atrc'),
								value: 'custom',
							},
						]}
						onChange={handleChange}
					/>
				</>
			}
			renderSidebar={
				<>
					<AtrcText tag='h3'>{__('Value', 'atrc-prefix-atrc')}</AtrcText>
					<AtrcPreTemplate1 content={JSON.stringify(value, null, 2)} />
				</>
			}
			sidebarProps={{ sidebarCol: 'at-col-6' }}
			contentProps={{ contentCol: 'at-col-6' }}
		/>
	);
};

export const SelectDeviceTab = () => {
	const [value, setValue] = useState();

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	return (
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcControlSelectDeviceTab
						label={__('Background position', 'atrc-prefix-atrc')}
						wrapProps={{
							className: 'at-flx-grw-1',
						}}
						value={value}
						options={[
							{
								label: __('Default', 'atrc-prefix-atrc'),
								value: '',
							},
							{
								label: __('Auto', 'atrc-prefix-atrc'),
								value: 'auto',
							},
							{
								label: __('Cover', 'atrc-prefix-atrc'),
								value: 'cover',
							},
							{
								label: __('Contain', 'atrc-prefix-atrc'),
								value: 'contain',
							},
							{
								label: __('Custom', 'atrc-prefix-atrc'),
								value: 'custom',
							},
						]}
						onChange={handleChange}
					/>
				</>
			}
			renderSidebar={
				<>
					<AtrcText tag='h3'>{__('Value', 'atrc-prefix-atrc')}</AtrcText>
					<AtrcPreTemplate1 content={JSON.stringify(value, null, 2)} />
				</>
			}
			sidebarProps={{ sidebarCol: 'at-col-6' }}
			contentProps={{ contentCol: 'at-col-6' }}
		/>
	);
};
