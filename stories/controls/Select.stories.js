/* WordPress */
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/* Library */
import { action } from '@storybook/addon-actions';

/* Atrc */
import {
	AtrcControlSelect,
	AtrcWireFrameContentSidebar,
	AtrcPreTemplate1,
	AtrcText,
} from '../../packages';

export default {
	title: 'Controls/AtrcControlSelect',
	component: AtrcControlSelect,
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
		<AtrcControlSelect
			label={__('Select', 'atrc-prefix-atrc')}
			value={value}
			options={[
				{
					label: __('Default', 'atrc-prefix-atrc'),
					value: '',
				},
				{
					label: __('Inset', 'atrc-prefix-atrc'),
					value: 'inset',
				},
			]}
			onChange={handleChange}
		/>
	);
};

export const Default = Template.bind({});

export const Select = () => {
	const [value, setValue] = useState();

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	return (
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcControlSelect
						label={__('Select', 'atrc-prefix-atrc')}
						value={value}
						options={[
							{
								label: __('Default', 'atrc-prefix-atrc'),
								value: '',
							},
							{
								label: __('Inset', 'atrc-prefix-atrc'),
								value: 'inset',
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

export const SelectMultiValTypeString = () => {
	const [value, setValue] = useState();

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	return (
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcControlSelect
						label={__('Controlslist', 'atrc-prefix-atrc')}
						value={value}
						multiValType='string'
						options={[
							{
								label: __('nodownload', 'atrc-prefix-atrc'),
								value: 'nodownload',
							},
							{
								label: __('nofullscreen', 'atrc-prefix-atrc'),
								value: 'nofullscreen',
							},
							{
								label: __('noremoteplayback', 'atrc-prefix-atrc'),
								value: 'noremoteplayback',
							},
						]}
						onChange={handleChange}
						isMulti
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

export const SelectMultiValTypeArray = () => {
	const [value, setValue] = useState();

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	return (
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcControlSelect
						label={__('Controlslist', 'atrc-prefix-atrc')}
						value={value}
						multiValType='array'
						options={[
							{
								label: __('nodownload', 'atrc-prefix-atrc'),
								value: 'nodownload',
							},
							{
								label: __('nofullscreen', 'atrc-prefix-atrc'),
								value: 'nofullscreen',
							},
							{
								label: __('noremoteplayback', 'atrc-prefix-atrc'),
								value: 'noremoteplayback',
							},
						]}
						onChange={handleChange}
						isMulti
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
