/* WordPress */
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/* Library */
import { action } from '@storybook/addon-actions';
import classnames from 'classnames';

/* Atrc */
import {
	AtrcText,
	AtrcControlCompoundSlider,
	AtrcControlCompoundSliderGetWidth,
	AtrcWireFrameContentSidebar,
	AtrcPreTemplate1,
} from '../../packages';

export default {
	title: 'Controls/AtrcControlCompoundSlider',
	component: AtrcControlCompoundSlider,
	tags: ['autodocs'],
	argTypes: {
		onChange: { action: 'onChange' },
	},
	args: {
		value: [25, 50],
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
		<AtrcControlCompoundSlider
			label={__('Compound slider', 'atrc-prefix-atrc')}
			value={value}
			onChange={setValue}
		/>
	);
};

export const Default = Template.bind({});

export const Example = () => {
	const [value, setValue] = useState([25, 50]);

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	return (
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcControlCompoundSlider
						label={__('Compound slider', 'atrc-prefix-atrc')}
						value={value}
						onChange={setValue}
					/>
					<AtrcText
						tag='h3'
						className={classnames('at-m')}>
						{__('Width value', 'atrc-prefix-atrc')}
					</AtrcText>
					<AtrcPreTemplate1
						content={JSON.stringify(
							AtrcControlCompoundSliderGetWidth(value),
							null,
							2
						)}
					/>
				</>
			}
			renderSidebar={
				<>
					<AtrcText
						tag='h3'
						className={classnames('at-m')}>
						{__('Slider value', 'atrc-prefix-atrc')}
					</AtrcText>
					<AtrcPreTemplate1 content={JSON.stringify(value, null, 2)} />
				</>
			}
			sidebarProps={{ sidebarCol: 'at-col-6' }}
			contentProps={{ contentCol: 'at-col-6' }}
		/>
	);
};
