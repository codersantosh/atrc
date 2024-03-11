/* WordPress */
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/* Library */
import { action } from '@storybook/addon-actions';
import { isEmpty } from 'lodash';

/* Atrc */
import {
	AtrcText,
	AtrcFormatCss,
	AtrcControlBorder,
	AtrcControlBorderCss,
	AtrcControlBorderTab,
	AtrcControlBorderTabCss,
	AtrcWireFrameContentSidebar,
	AtrcPreTemplate1,
	AtrcGenerateDynamicCss,
} from '../../packages';

export default {
	title: 'Controls/AtrcControlBorder',
	component: AtrcControlBorder,
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
		<AtrcControlBorder
			value={value}
			onChange={handleChange}
		/>
	);
};

export const Default = Template.bind({});

export const Border = () => {
	const [value, setValue] = useState({
		cl: '#b86868',
		sty: 'dotted',
		w: '34px',
	});

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	const getCss = () => {
		const gotCss = AtrcControlBorderCss({
			value: value,
		});
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
					<AtrcControlBorder
						value={value}
						onChange={handleChange}
					/>
					<AtrcText
						tag='h3'
						className='at-m'>
						{__('Dynamic CSS', 'atrc-prefix-atrc')}
					</AtrcText>
					<AtrcPreTemplate1 content={AtrcFormatCss(getCss())} />
				</>
			}
			renderSidebar={
				<>
					<AtrcText
						tag='h3'
						className='at-m'>
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

export const BorderTab = () => {
	const [value, setValue] = useState({
		cl: '#72aee6',
		sty: 'solid',
		w: '1px',
		clHover: '#72aee6',
		styHover: 'solid',
		wHover: '1px',
	});

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	const getCss = () => {
		const gotCss = AtrcControlBorderTabCss({
			value: value,
		});
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
					<AtrcControlBorderTab
						value={value}
						onChange={handleChange}
					/>
					<AtrcText
						tag='h3'
						className='at-m'>
						{__('Dynamic CSS', 'atrc-prefix-atrc')}
					</AtrcText>
					<AtrcPreTemplate1 content={AtrcFormatCss(getCss())} />
				</>
			}
			renderSidebar={
				<>
					<AtrcText
						tag='h3'
						className='at-m'>
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
