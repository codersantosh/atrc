/* WordPress */
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/* Library */
import { action } from '@storybook/addon-actions';

/* Atrc */
import {
	AtrcControlRadio,
	AtrcWireFrameContentSidebar,
	AtrcPreTemplate1,
	AtrcText,
} from '../../packages';

export default {
	title: 'Controls/AtrcControlRadio',
	component: AtrcControlRadio,
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

	const handleChange = (newValue) => {
		setValue(newValue);
		args.onChange(newValue);
		action('onChange')(newValue);
	};

	return (
		<AtrcControlRadio
			id={'hello'}
			name={'hello'}
			value='hello'
			checked={'hello' === value}
			onClick={() => handleChange('hello')}
		/>
	);
};

export const Default = Template.bind({});

export const Radio = () => {
	const [value, setValue] = useState(false);

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	return (
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcControlRadio
						id={'hello'}
						name={'hello'}
						value='hello'
						checked={'hello' === value}
						onClick={() => handleChange('hello')}
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
