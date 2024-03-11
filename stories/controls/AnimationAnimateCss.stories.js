/* WordPress */
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/* Library */
import { action } from '@storybook/addon-actions';
import classnames from 'classnames';

/* Atrc */
import {
	AtrcText,
	AtrcControlAnimationAnimateCss,
	AtrcWireFrameContentSidebar,
	AtrcPreTemplate1,
} from '../../packages';

export default {
	title: 'Controls/AtrcControlAnimationAnimateCss',
	component: AtrcControlAnimationAnimateCss,
	tags: ['autodocs'],
	argTypes: {
		onChange: { action: 'onChange' },
	},
	args: {
		value: {
			ani: '',
			dla: '',
			dur: '',
			iter: '',
		},
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
		<AtrcControlAnimationAnimateCss
			value={value}
			onChange={handleChange}
		/>
	);
};

export const Default = Template.bind({});

export const Example = () => {
	const [value, setValue] = useState({ ani: '', dla: '', dur: '', iter: '' });

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	return (
		<>
			<AtrcWireFrameContentSidebar
				renderContent={
					<>
						<AtrcControlAnimationAnimateCss
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
		</>
	);
};
