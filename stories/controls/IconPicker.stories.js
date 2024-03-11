/* WordPress */
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/* Library */
import { action } from '@storybook/addon-actions';
import classnames from 'classnames';

/* Atrc */
import {
	AtrcControlIconPickerDefaultIcons,
	AtrcControlIconPicker,
	AtrcWireFrameContentSidebar,
	AtrcPreTemplate1,
	AtrcText,
} from '../../packages';

export default {
	title: 'Controls/AtrcControlIconPicker',
	component: AtrcControlIconPicker,
	tags: ['autodocs'],
	argTypes: {
		onChange: { action: 'onChange' },
	},
	args: {
		value: '',
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
		<AtrcControlIconPicker
			value={value}
			onChange={handleChange}
			options={AtrcControlIconPickerDefaultIcons()}
		/>
	);
};

export const Default = Template.bind({});

export const IconPicker = () => {
	const [value, setValue] = useState('');

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	return (
		<AtrcWireFrameContentSidebar
			renderContent={
				<AtrcControlIconPicker
					value={value}
					onChange={handleChange}
					options={AtrcControlIconPickerDefaultIcons()}
				/>
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

export const IconPickerMultiple = () => {
	const [value, setValue] = useState([]);

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	return (
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcControlIconPicker
						isMulti={true}
						closeOnIconSelect={false}
						value={value}
						onChange={handleChange}
						options={AtrcControlIconPickerDefaultIcons()}
					/>
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
