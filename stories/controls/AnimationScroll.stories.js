/* WordPress */
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/* Library */
import { action } from '@storybook/addon-actions';
import classnames from 'classnames';

/* Atrc */
import {
	AtrcText,
	AtrcControlAnimationScroll,
	AtrcWireFrameContentSidebar,
	AtrcPreTemplate1,
} from '../../packages';

export default {
	title: 'Controls/AtrcControlAnimationScroll',
	component: AtrcControlAnimationScroll,
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

			type: '',
			on3D: '',
			ppv: '',

			translX: '',
			translY: '',
			rotX: '',
			rotY: '',
			sclX: '',
			sclY: '',
			skewX: '',
			skewY: '',
			orgX: '',
			orgY: '',
			opa: '',
			blr: '',
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
		<AtrcControlAnimationScroll
			value={value}
			onChange={handleChange}
		/>
	);
};

export const Default = Template.bind({});

export const Example = () => {
	const [value, setValue] = useState({
		ani: '',
		dla: '',
		dur: '',
		iter: '',

		type: '',
		on3D: '',
		ppv: '',

		translX: '',
		translY: '',
		rotX: '',
		rotY: '',
		sclX: '',
		sclY: '',
		skewX: '',
		skewY: '',
		orgX: '',
		orgY: '',
		opa: '',
		blr: '',
	});

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	return (
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcControlAnimationScroll
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
