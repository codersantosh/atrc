/* WordPress */
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/* Library */
import { action } from '@storybook/addon-actions';
import classnames from 'classnames';

/* Atrc */
import {
	AtrcText,
	AtrcControlCombobox,
	AtrcWireFrameContentSidebar,
	AtrcPreTemplate1,
} from '../../packages';

export default {
	title: 'Controls/AtrcControlCombobox',
	component: AtrcControlCombobox,
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
		<AtrcControlCombobox
			label={__('Combobox', 'atrc-prefix-atrc')}
			value={value}
			options={[
				{
					label: __('Label 1', 'atrc-prefix-atrc'),
					value: 'val-1',
				},
			]}
			onFilterValueChange={(inputValue) =>
				setFilteredOptions(
					fontOptions.filter((option) =>
						option.label.toLowerCase().startsWith(inputValue.toLowerCase())
					)
				)
			}
			value={value}
			onChange={handleChange}
		/>
	);
};

export const Default = Template.bind({});

export const Example = () => {
	const [value, setValue] = useState();

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	return (
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcControlCombobox
						label={__('Combobox', 'atrc-prefix-atrc')}
						value={value}
						options={[
							{
								label: __('Label 1', 'atrc-prefix-atrc'),
								value: 'val-1',
							},
							{
								label: __('Label 2', 'atrc-prefix-atrc'),
								value: 'val-2',
							},
						]}
						onFilterValueChange={(inputValue) =>
							setFilteredOptions(
								fontOptions.filter((option) =>
									option.label
										.toLowerCase()
										.startsWith(inputValue.toLowerCase())
								)
							)
						}
						value={value}
						onChange={handleChange}
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
