/* WordPress */
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/* Library */
import classnames from 'classnames';

/* Atrc */
import {
	AtrcControlFile,
	AtrcWireFrameContentSidebar,
	AtrcPreTemplate1,
	AtrcPreviewFile,
	AtrcText,
} from '../../packages';

export default {
	title: 'Controls/AtrcControlFile',
	component: AtrcControlFile,
	tags: ['autodocs'],
	argTypes: {
		onChange: { action: 'onChange' },
	},
	args: {
		value: {
			frm: '',
			data: [
				{
					id: '',
					url: '',
				},
				{
					id: '',
					url: '',
				},
			],
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
		<AtrcControlFile
			label={__('Image', 'atrc-prefix-atrc')}
			value={value}
			onChange={handleChange}
			allowSettings={false}
		/>
	);
};

export const Default = Template.bind({});

export const File = () => {
	const [value, setValue] = useState({
		frm: '',
		data: [
			{
				id: '',
				url: '',
			},
			{
				id: '',
				url: '',
			},
		],
	});

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	return (
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcControlFile
						value={value}
						onChange={handleChange}
					/>
					<AtrcText
						tag='h3'
						className={classnames('at-m')}>
						{__('File', 'atrc-prefix-atrc')}
					</AtrcText>
					<AtrcPreviewFile fileName={value.url} />
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
