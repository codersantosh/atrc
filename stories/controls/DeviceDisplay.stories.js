/* WordPress */
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/* Library */
import { action } from '@storybook/addon-actions';

/* Atrc */
import {
	AtrcText,
	AtrcControlDeviceDisplay,
	AtrcWireFrameContentSidebar,
	AtrcPreTemplate1,
} from '../../packages';

export default {
	title: 'Controls/AtrcControlDeviceDisplay',
	component: AtrcControlDeviceDisplay,
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
		<AtrcControlDeviceDisplay
			value={value}
			onChange={setValue}
		/>
	);
};

export const Default = Template.bind({});

export const Example = () => {
	const [value, setValue] = useState({});

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	return (
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcControlDeviceDisplay
						value={value}
						onChange={setValue}
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
