/* WordPress */
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/* Library */
import { action } from '@storybook/addon-actions';
import { isEmpty } from 'lodash';
import classnames from 'classnames';

/* Atrc */
import {
	AtrcControlTransform,
	AtrcControlTransformCss,
	AtrcControlTransformTab,
	AtrcText,
	AtrcWireFrameContentSidebar,
	AtrcPreTemplate1,
	AtrcGenerateDynamicCss,
	AtrcFormatCss,
	AtrcControlTransformTabCss,
} from '../../packages';

export default {
	title: 'Controls/AtrcControlTransform',
	component: AtrcControlTransform,
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

	const handleChange = () => {
		setValue(!value);
		args.onChange(!value);
		action('onChange')(!value);
	};

	return (
		<AtrcControlTransform
			checked={value}
			onChange={handleChange}
		/>
	);
};

export const Default = Template.bind({});

export const Transform = () => {
	const [value, setValue] = useState();

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	const getCss = () => {
		const gotCss = AtrcControlTransformCss(value);
		if (!isEmpty(gotCss)) {
			const dynamicCss = AtrcGenerateDynamicCss({
				cssObj: { xs: '--at-tf:' + gotCss },
				selector: '#atrcUniqueSelector',
			});

			if (dynamicCss) {
				return dynamicCss;
			}
		}
		return __('Empty css', 'atrc-prefix-atrc');
	};

	return (
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcControlTransform
						value={value}
						onChange={handleChange}
					/>
					<AtrcText
						tag='h3'
						className={classnames('at-m')}>
						{__('Dynamic CSS', 'atrc-prefix-atrc')}
					</AtrcText>
					<AtrcPreTemplate1 content={AtrcFormatCss(getCss())} />
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

export const TransformTab = () => {
	const [value, setValue] = useState();

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	const getCss = () => {
		const gotCss = AtrcControlTransformTabCss({ value });
		if (!isEmpty(gotCss)) {
			const dynamicCss = AtrcGenerateDynamicCss({
				cssObj: gotCss,
				selector: '#atrcUniqueSelector',
			});

			if (dynamicCss) {
				return dynamicCss;
			}
		}
		return __('Empty css', 'atrc-prefix-atrc');
	};

	return (
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcControlTransformTab
						value={value}
						onChange={handleChange}
					/>
					<AtrcText
						tag='h3'
						className={classnames('at-m')}>
						{__('Dynamic CSS', 'atrc-prefix-atrc')}
					</AtrcText>
					<AtrcPreTemplate1 content={AtrcFormatCss(getCss())} />
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
