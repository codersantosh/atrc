/* WordPress */
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/* Library */
import classnames from 'classnames';
import { isEmpty } from 'lodash';
import { action } from '@storybook/addon-actions';

/* Atrc */
import {
	AtrcControlImgShape,
	AtrcControlImgShapeCss,
	AtrcWireFrameContentSidebar,
	AtrcPreTemplate1,
	AtrcGenerateDynamicCss,
	AtrcText,
	AtrcFormatCss,
} from '../../packages';

export default {
	title: 'Controls/AtrcControlImgShape',
	component: AtrcControlImgShape,
	tags: ['autodocs'],
	argTypes: {
		onChange: { action: 'onChange' },
	},
	args: {
		value: {
			type: '',
			svgFrm: '',
			svgDefd: '',
			svgCust: '',
			imgFrm: '',
			imgId: '',
			imgUrl: '',
			imgSz: '',
			flipV: '',
			flipH: '',

			w: '',
			smW: '',
			mdW: '',
			lgW: '',
			xlW: '',
			xxlW: '',
			h: '',
			smH: '',
			mdH: '',
			lgH: '',
			xlH: '',
			xxlH: '',
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
		<AtrcControlImgShape
			value={value}
			onChange={handleChange}
			allowSettings={false}
		/>
	);
};

export const Default = Template.bind({});

export const ImgShape = () => {
	const [value, setValue] = useState();

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	const getCss = () => {
		const gotCss = AtrcControlImgShapeCss({ value });
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
					<AtrcControlImgShape
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
					<AtrcText tag='h3'>{__('Value', 'atrc-prefix-atrc')}</AtrcText>
					<AtrcPreTemplate1 content={JSON.stringify(value, null, 2)} />
				</>
			}
			sidebarProps={{ sidebarCol: 'at-col-6' }}
			contentProps={{ contentCol: 'at-col-6' }}
		/>
	);
};
