/* WordPress */
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/* Library */
import { action } from '@storybook/addon-actions';
import classnames from 'classnames';

/* Atrc */
import {
	AtrcText,
	AtrcControlDropdownHtml,
	AtrcWireFrameContentSidebar,
	AtrcPreTemplate1,
	AtrcNotice,
} from '../../packages';

export default {
	title: 'Controls/AtrcControlDropdownHtml',
	component: AtrcControlDropdownHtml,
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
		<AtrcControlDropdownHtml
			value={value}
			onChange={setValue}
			options={[
				{
					label: __('Svg 1', 'atrc-prefix-atrc'),
					svg: () => (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 240 40'
							preserveAspectRatio='none'>
							<path d='M204.2 25.6h-98.8c-3.4 0-6.2-2.9-6.2-6.4 0-1 .4-2 1-2.8 1.3-1.7 3.1-2.3 4.6-1.8 1.4.5 2.3 1.8 2.3 3.3 0 1.5-1.3 2.8-2.8 2.8-1.2 0-2.4-.8-2.4-2.1h2v-.1s.2.1.4.1c.4 0 .8-.4.8-.8 0-.7-.4-1.2-1-1.4-.7-.3-1.6.1-2.4 1.1-.4.5-.6 1-.6 1.6 0 2.3 2 4.4 4.2 4.4h98.8c1.9 0 3.5-1.6 3.5-3.5h2c.2 3.1-2.3 5.6-5.4 5.6z'></path>
							<path
								className='st1'
								d='M134.6 25.6H35.8c-3 0-5.5-2.5-5.5-5.5h2c0 1.9 1.6 3.5 3.5 3.5h98.8c2.2 0 4.2-2 4.2-4.4 0-.6-.2-1.1-.6-1.6-.8-1-1.7-1.4-2.4-1.1-.6.2-1 .8-1 1.4 0 .4.4.8.8.8.2 0 .4-.1.4-.1l2 .1c0 1.3-1.2 2.1-2.4 2.1-1.5 0-2.8-1.3-2.8-2.8 0-1.5.9-2.8 2.3-3.3 1.6-.6 3.3.1 4.7 1.8.7.8 1 1.8 1 2.8 0 3.4-2.9 6.3-6.2 6.3z'></path>
							<path
								className='st1'
								d='M120 25.6c-2.6 0-4.8-2.1-4.8-4.8 0-2.6 2.1-4.8 4.8-4.8s4.8 2.1 4.8 4.8c0 2.6-2.2 4.8-4.8 4.8zm0-7.6c-1.5 0-2.8 1.3-2.8 2.8s1.3 2.8 2.8 2.8 2.8-1.3 2.8-2.8-1.3-2.8-2.8-2.8z'></path>
						</svg>
					),
					value: 1,
				},
			]}
		/>
	);
};

export const Default = Template.bind({});

export const Example = () => {
	const [value, setValue] = useState({});

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	if (value && value.svgDefd) {
	}
	return (
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcControlDropdownHtml
						value={value}
						onChange={setValue}
						options={[
							{
								label: __('Svg 1', 'atrc-prefix-atrc'),
								svg: () => (
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 240 40'
										preserveAspectRatio='none'>
										<path d='M204.2 25.6h-98.8c-3.4 0-6.2-2.9-6.2-6.4 0-1 .4-2 1-2.8 1.3-1.7 3.1-2.3 4.6-1.8 1.4.5 2.3 1.8 2.3 3.3 0 1.5-1.3 2.8-2.8 2.8-1.2 0-2.4-.8-2.4-2.1h2v-.1s.2.1.4.1c.4 0 .8-.4.8-.8 0-.7-.4-1.2-1-1.4-.7-.3-1.6.1-2.4 1.1-.4.5-.6 1-.6 1.6 0 2.3 2 4.4 4.2 4.4h98.8c1.9 0 3.5-1.6 3.5-3.5h2c.2 3.1-2.3 5.6-5.4 5.6z'></path>
										<path
											className='st1'
											d='M134.6 25.6H35.8c-3 0-5.5-2.5-5.5-5.5h2c0 1.9 1.6 3.5 3.5 3.5h98.8c2.2 0 4.2-2 4.2-4.4 0-.6-.2-1.1-.6-1.6-.8-1-1.7-1.4-2.4-1.1-.6.2-1 .8-1 1.4 0 .4.4.8.8.8.2 0 .4-.1.4-.1l2 .1c0 1.3-1.2 2.1-2.4 2.1-1.5 0-2.8-1.3-2.8-2.8 0-1.5.9-2.8 2.3-3.3 1.6-.6 3.3.1 4.7 1.8.7.8 1 1.8 1 2.8 0 3.4-2.9 6.3-6.2 6.3z'></path>
										<path
											className='st1'
											d='M120 25.6c-2.6 0-4.8-2.1-4.8-4.8 0-2.6 2.1-4.8 4.8-4.8s4.8 2.1 4.8 4.8c0 2.6-2.2 4.8-4.8 4.8zm0-7.6c-1.5 0-2.8 1.3-2.8 2.8s1.3 2.8 2.8 2.8 2.8-1.3 2.8-2.8-1.3-2.8-2.8-2.8z'></path>
									</svg>
								),
								value: 1,
							},
						]}
					/>
					<AtrcNotice isDismissible={false}>
						{__(
							'Used for image annd svg selector. May add others HTML on future',
							'atrc-prefix-atrc'
						)}
					</AtrcNotice>
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
