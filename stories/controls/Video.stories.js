/* WordPress */
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/* Library */
import { action } from '@storybook/addon-actions';
import classnames from 'classnames';

/* Atrc */
import {
	AtrcControlDropdownVideo,
	AtrcControlVideo,
	AtrcWireFrameContentSidebar,
	AtrcPreTemplate1,
	AtrcVideo,
	AtrcNotice,
	AtrcText,
} from '../../packages';

export default {
	title: 'Controls/AtrcControlVideo',
	component: AtrcControlVideo,
	tags: ['autodocs'],
	argTypes: {
		onChange: { action: 'onChange' },
	},
	args: {
		value: {
			frm: '',
			id: 0,
			url: '',
			onSettings: false,
			autoplay: '',
			ctrl: '',
			loop: '',
			muted: '',
			playsInline: '',
			preload: '',
			psrFrm: '',
			psrId: '',
			psrSz: '',
			psrUrl: '',
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
		<AtrcControlVideo
			label={__('Image', 'atrc-prefix-atrc')}
			value={value}
			onChange={handleChange}
			allowSettings={false}
		/>
	);
};

export const Default = Template.bind({});

export const Video = () => {
	const [value, setValue] = useState({
		frm: '',
		id: 0,
		url: '',
		onSettings: false,
		autoplay: '',
		ctrl: '',
		loop: '',
		muted: '',
		playsInline: '',
		preload: '',
		psrFrm: '',
		psrId: '',
		psrSz: '',
		psrUrl: '',
	});

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	return (
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcControlVideo
						value={value}
						onChange={handleChange}
					/>
					<AtrcText
						tag='h3'
						className={classnames('at-m')}>
						{__('Video', 'atrc-prefix-atrc')}
					</AtrcText>
					<AtrcVideo url={value.url} />
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

export const DropdownVideo = () => {
	const [value, setValue] = useState({
		frm: '',
		id: 0,
		url: '',
		onSettings: false,
		autoplay: '',
		ctrl: '',
		loop: '',
		muted: '',
		playsInline: '',
		preload: '',
		psrFrm: '',
		psrId: '',
		psrSz: '',
		psrUrl: '',
	});

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	return (
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcControlDropdownVideo
						value={value}
						onChange={handleChange}
					/>
					<AtrcNotice isDismissible={false}>
						{__('Used on Block Editor', 'atrc-prefix-atrc')}
					</AtrcNotice>
					<AtrcText
						tag='h3'
						className={classnames('at-m')}>
						{__('Video', 'atrc-prefix-atrc')}
					</AtrcText>
					<AtrcVideo url={value.url} />
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
