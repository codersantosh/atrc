/* WordPress */
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/* Library */
import { action } from '@storybook/addon-actions';

/* Atrc */
import {
	AtrcControlPopup,
	AtrcWireFrameContentSidebar,
	AtrcPreTemplate1,
	AtrcText,
} from '../../packages';

export default {
	title: 'Controls/AtrcControlPopup',
	component: AtrcControlPopup,
	tags: ['autodocs'],
	argTypes: {
		onChange: { action: 'onChange' },
	},
	args: {
		value: {
			ppSrc: '',
			ppUrl: '',
			ppTarget: '',
			ppTtl: '',
			ppRel: '',

			ppImgFrm: '',
			ppImgId: '',
			ppImgUrl: '',
			ppImgSz: '',

			ppVidFrm: '',
			ppVidId: '',
			ppVidUrl: '',
			ppVidOnSet: '',
			ppVidLoop: '',
			ppVidMuted: '',
			onBgVidMb: '',
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
		<AtrcControlPopup
			value={value}
			onChange={handleChange}
		/>
	);
};

export const Default = Template.bind({});

export const Popup = () => {
	const [value, setValue] = useState({});

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	return (
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcControlPopup
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
