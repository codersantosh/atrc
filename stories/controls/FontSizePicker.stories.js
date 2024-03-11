/* WordPress */
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/* Library */
import { action } from '@storybook/addon-actions';

/* Atrc */
import {
	AtrcControlFontSizePicker,
	AtrcWireFrameContentSidebar,
	AtrcPreTemplate1,
	AtrcText,
} from '../../packages';

export default {
	title: 'Controls/AtrcControlFontSizePicker',
	component: AtrcControlFontSizePicker,
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
		<AtrcControlFontSizePicker
			label={__('Font size', 'atrc-prefix-atrc')}
			value={value}
			onChange={handleChange}
			allowSettings={false}
		/>
	);
};

export const Default = Template.bind({});

export const FontSizePicker = () => {
	const [value, setValue] = useState('');

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	return (
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcControlFontSizePicker
						value={value}
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
