/* WordPress */
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/* Library */
import { action } from '@storybook/addon-actions';
import classnames from 'classnames';

/* Atrc */
import {
	AtrcControlDropdownImg,
	AtrcControlImg,
	AtrcWireFrameContentSidebar,
	AtrcPreTemplate1,
	AtrcImg,
	AtrcNotice,
	AtrcText,
} from '../../packages';

export default {
	title: 'Controls/AtrcControlImg',
	component: AtrcControlImg,
	tags: ['autodocs'],
	argTypes: {
		onChange: { action: 'onChange' },
	},
	args: {
		value: {
			frm: '',
			id: 0,
			url: '',
			alt: '',
			ttl: '',
			sz: '',
			w: '',
			h: '',
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
		<AtrcControlImg
			label={__('Image', 'atrc-prefix-atrc')}
			value={value}
			onChange={handleChange}
			allowSettings={false}
		/>
	);
};

export const Default = Template.bind({});

export const Img = () => {
	const [value, setValue] = useState({
		frm: '',
		id: 0,
		url: '',
		alt: '',
		ttl: '',
		sz: '',
		w: '',
		h: '',
	});

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	return (
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcControlImg
						value={value}
						onChange={handleChange}
					/>
					<AtrcText
						tag='h3'
						className={classnames('at-m')}>
						{__('Img', 'atrc-prefix-atrc')}
					</AtrcText>
					<AtrcImg src={value.url} />
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

export const DropdownImg = () => {
	const [value, setValue] = useState({
		frm: '',
		id: 0,
		url: '',
		alt: '',
		ttl: '',
		sz: '',
		w: '',
		h: '',
	});

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	return (
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcControlDropdownImg
						value={value}
						onChange={handleChange}
					/>
					<AtrcNotice isDismissible={false}>
						{__('Used on Block Editor', 'atrc-prefix-atrc')}
					</AtrcNotice>
					<AtrcText tag='h3'>{__('Img', 'atrc-prefix-atrc')}</AtrcText>
					<AtrcImg src={value.url} />
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
