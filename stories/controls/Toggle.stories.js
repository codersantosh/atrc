/* WordPress */
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/* Library */
import { action } from '@storybook/addon-actions';

/* Atrc */
import {
	AtrcControlToggle,
	AtrcControlToggleDevice,
	AtrcText,
	AtrcWireFrameContentSidebar,
	AtrcPreTemplate1,
} from '../../packages';

export default {
	title: 'Controls/AtrcControlToggle',
	component: AtrcControlToggle,
	tags: ['autodocs'],
	argTypes: {
		onChange: { action: 'onChange' },
	},
	args: {
		value: false,
	},
};

const Template = (args) => {
	const [value, setValue] = useState(args.value);

	const handleChange = () => {
		setValue(!value);
		args.onChange(!value);
		action('onChange')(!value);
	};

	return (
		<AtrcControlToggle
			checked={value}
			onChange={handleChange}
			label={__('Add logout on menu', 'atrc-prefix-atrc')}
		/>
	);
};

export const Default = Template.bind({});

export const Toggle = () => {
	const [value, setValue] = useState();

	const handleChange = () => {
		setValue(!value);
	};

	return (
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcControlToggle
						checked={value}
						onChange={handleChange}
						label={__('Add logout on menu', 'atrc-prefix-atrc')}
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

export const ToggleDevice = () => {
	const [value, setValue] = useState();

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	return (
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcControlToggleDevice
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
