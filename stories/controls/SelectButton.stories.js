/* WordPress */
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/* Library */
import { action } from '@storybook/addon-actions';

/* Atrc */
import {
	AtrcControlSelectButton,
	AtrcControlSelectButtonDevice,
	AtrcControlSelectButtonDeviceTab,
	AtrcWireFrameContentSidebar,
	AtrcPreTemplate1,
	AtrcText,
} from '../../packages';

export default {
	title: 'Controls/AtrcControlSelectButton',
	component: AtrcControlSelectButton,
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
		<AtrcControlSelectButton
			label={__('Select button', 'atrc-prefix-atrc')}
			value={value}
			options={[
				{
					label: __('Default', 'atrc-prefix-atrc'),

					value: '',
					icon: () => (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='16'
							fill='currentColor'
							class='bi bi-0-circle'
							viewBox='0 0 16 16'>
							<path d='M7.988 12.158c-1.851 0-2.941-1.57-2.941-3.99V7.84c0-2.408 1.101-3.996 2.965-3.996 1.857 0 2.935 1.57 2.935 3.996v.328c0 2.408-1.101 3.99-2.959 3.99M8 4.951c-1.008 0-1.629 1.09-1.629 2.895v.31c0 1.81.627 2.895 1.629 2.895s1.623-1.09 1.623-2.895v-.31c0-1.8-.621-2.895-1.623-2.895' />
							<path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8' />
						</svg>
					),
				},
				{
					label: __('Inset', 'atrc-prefix-atrc'),
					value: 'inset',
					icon: () => (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='16'
							fill='currentColor'
							class='bi bi-1-circle'
							viewBox='0 0 16 16'>
							<path d='M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383z' />
						</svg>
					),
				},
			]}
			onChange={handleChange}
		/>
	);
};

export const Default = Template.bind({});

export const SelectButton = () => {
	const [value, setValue] = useState();

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	return (
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcControlSelectButton
						label={__('Select button', 'atrc-prefix-atrc')}
						value={value}
						options={[
							{
								label: __('Default', 'atrc-prefix-atrc'),

								value: '',
								icon: () => (
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='16'
										height='16'
										fill='currentColor'
										class='bi bi-0-circle'
										viewBox='0 0 16 16'>
										<path d='M7.988 12.158c-1.851 0-2.941-1.57-2.941-3.99V7.84c0-2.408 1.101-3.996 2.965-3.996 1.857 0 2.935 1.57 2.935 3.996v.328c0 2.408-1.101 3.99-2.959 3.99M8 4.951c-1.008 0-1.629 1.09-1.629 2.895v.31c0 1.81.627 2.895 1.629 2.895s1.623-1.09 1.623-2.895v-.31c0-1.8-.621-2.895-1.623-2.895' />
										<path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8' />
									</svg>
								),
							},
							{
								label: __('Inset', 'atrc-prefix-atrc'),
								value: 'inset',
								icon: () => (
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='16'
										height='16'
										fill='currentColor'
										class='bi bi-1-circle'
										viewBox='0 0 16 16'>
										<path d='M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383z' />
									</svg>
								),
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

export const SelectButtonDevice = () => {
	const [value, setValue] = useState();

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	return (
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcControlSelectButtonDevice
						label={__('Select button', 'atrc-prefix-atrc')}
						value={value}
						options={[
							{
								label: __('Default', 'atrc-prefix-atrc'),

								value: '',
								icon: () => (
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='16'
										height='16'
										fill='currentColor'
										class='bi bi-0-circle'
										viewBox='0 0 16 16'>
										<path d='M7.988 12.158c-1.851 0-2.941-1.57-2.941-3.99V7.84c0-2.408 1.101-3.996 2.965-3.996 1.857 0 2.935 1.57 2.935 3.996v.328c0 2.408-1.101 3.99-2.959 3.99M8 4.951c-1.008 0-1.629 1.09-1.629 2.895v.31c0 1.81.627 2.895 1.629 2.895s1.623-1.09 1.623-2.895v-.31c0-1.8-.621-2.895-1.623-2.895' />
										<path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8' />
									</svg>
								),
							},
							{
								label: __('Inset', 'atrc-prefix-atrc'),
								value: 'inset',
								icon: () => (
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='16'
										height='16'
										fill='currentColor'
										class='bi bi-1-circle'
										viewBox='0 0 16 16'>
										<path d='M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383z' />
									</svg>
								),
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

export const SelectButtonDeviceTab = () => {
	const [value, setValue] = useState();

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	return (
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcControlSelectButtonDeviceTab
						label={__('Select button', 'atrc-prefix-atrc')}
						value={value}
						options={[
							{
								label: __('Default', 'atrc-prefix-atrc'),

								value: '',
								icon: () => (
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='16'
										height='16'
										fill='currentColor'
										class='bi bi-0-circle'
										viewBox='0 0 16 16'>
										<path d='M7.988 12.158c-1.851 0-2.941-1.57-2.941-3.99V7.84c0-2.408 1.101-3.996 2.965-3.996 1.857 0 2.935 1.57 2.935 3.996v.328c0 2.408-1.101 3.99-2.959 3.99M8 4.951c-1.008 0-1.629 1.09-1.629 2.895v.31c0 1.81.627 2.895 1.629 2.895s1.623-1.09 1.623-2.895v-.31c0-1.8-.621-2.895-1.623-2.895' />
										<path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8' />
									</svg>
								),
							},
							{
								label: __('Inset', 'atrc-prefix-atrc'),
								value: 'inset',
								icon: () => (
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='16'
										height='16'
										fill='currentColor'
										class='bi bi-1-circle'
										viewBox='0 0 16 16'>
										<path d='M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383z' />
									</svg>
								),
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
