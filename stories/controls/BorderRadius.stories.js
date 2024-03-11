/* WordPress */
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/* Library */
import { action } from '@storybook/addon-actions';
import { isEmpty } from 'lodash';
import classnames from 'classnames';

/* Atrc */
import {
	AtrcText,
	AtrcFormatCss,
	AtrcControlBorderRadius,
	AtrcControlBorderRadiusCss,
	AtrcControlBorderRadiusTab,
	AtrcControlBorderRadiusTabCss,
	AtrcWireFrameContentSidebar,
	AtrcPreTemplate1,
	AtrcGenerateDynamicCss,
} from '../../packages';

export default {
	title: 'Controls/AtrcControlBorderRadius',
	component: AtrcControlBorderRadius,
	tags: ['autodocs'],
	argTypes: {
		onChange: { action: 'onChange' },
	},
	args: {
		value: 'center center',
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
		<AtrcControlBorderRadius
			value={value}
			onChange={handleChange}
		/>
	);
};

export const Default = Template.bind({});

export const BorderRadius = () => {
	const [value, setValue] = useState('50px');

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	const getCss = () => {
		const gotCss = AtrcControlBorderRadiusCss(value);
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
					<AtrcControlBorderRadius
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

export const BorderRadiusTab = () => {
	const [value, setValue] = useState({
		normal: '',
		hover: '',
	});

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	const getCss = () => {
		const gotCss = AtrcControlBorderRadiusTabCss(value);
		if (!isEmpty(gotCss)) {
			const dynamicCss = AtrcGenerateDynamicCss({
				cssObj: gotCss,
				selector: '#atrcUniqueSelector',
				hoverParentSelector: '#atrcUniqueParentSelector',
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
					<AtrcControlBorderRadiusTab
						value={value}
						onChange={handleChange}
						allowedTabs={['normal', 'hover']}
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
