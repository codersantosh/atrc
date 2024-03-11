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
	AtrcControlTypography,
	AtrcControlTypographyCss,
	AtrcControlTypographyTab,
	AtrcControlTypographyTabCss,
	AtrcWireFrameContentSidebar,
	AtrcPreTemplate1,
	AtrcGenerateDynamicCss,
} from '../../packages';

export default {
	title: 'Controls/AtrcControlTypography',
	component: AtrcControlTypography,
	tags: ['autodocs'],
	argTypes: {
		onChange: { action: 'onChange' },
	},
	args: {
		value: {
			xsFntSz: '',
			smFntSz: '',
			smFntSz: '',
			lgFntSz: '',
			xlFntSz: '',
			xxlFntSz: '',

			fntFam: '',
			fntWt: '',
			fntSty: '',
			txtTf: '',
			txtDec: '',

			xsLnH: '',
			smLnH: '',
			mdLnH: '',
			lgLnH: '',
			xlLnH: '',
			xxlLnH: '',

			xsLtrSp: '',
			smLtrSp: '',
			mdLtrSp: '',
			lgLtrSp: '',
			xlLtrSp: '',
			xxlLtrSp: '',
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
		<AtrcControlTypography
			value={value}
			onChange={handleChange}
		/>
	);
};

export const Default = Template.bind({});

export const Typography = () => {
	const [value, setValue] = useState({
		xsFntSz: '24px',
		fntFam: 'Arial',
		fntWt: '100',
		fntSty: 'normal',
		txtDec: 'underline',
		txtTf: 'uppercase',
		xsLnH: '5',
		xsLtrSp: '55px',
	});

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	const getCss = () => {
		const gotCss = AtrcControlTypographyCss({ value });
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
					<AtrcControlTypography
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

export const TypographyTab = () => {
	const [value, setValue] = useState({
		xsFntSz: '18px',
		mdFntSz: '24px',
		lgFntSz: '28px',
		xlFntSz: '28px',
		fntFam: 'Arial',
		fntWt: '900',
		fntSty: 'italic',
		txtDec: 'none',
		txtTf: 'uppercase',
		xsLnH: 'normal',
		xsLtrSp: '88px',
		xlFntSzHover: '18px',
		fntFamHover: 'Tahoma',
		fntWtHover: '100',
		fntStyHover: 'normal',
		txtDecHover: 'underline',
		txtTfHover: 'lowercase',
		xsLnHHover: 'normal',
		xsLtrSpHover: '5px',
	});

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	const getCss = () => {
		const gotCss = AtrcControlTypographyTabCss({
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
					<AtrcControlTypographyTab
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
