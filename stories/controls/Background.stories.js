/* WordPress */
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/* Library */
import { action } from '@storybook/addon-actions';
import { forEach, isEmpty } from 'lodash';

/* Atrc */
import {
	AtrcText,
	AtrcControlBackground,
	AtrcControlBackgroundCss,
	AtrcGenerateDynamicCss,
	AtrcWireFrameContentSidebar,
	AtrcPreTemplate1,
	AtrcFormatCss,
	AtrcPrefix,
} from '../../packages';

import classNames from 'classnames';

/* Local */
export default {
	title: 'Controls/AtrcControlBackground',
	component: AtrcControlBackground,
	tags: ['autodocs'],
	argTypes: {
		onChange: { action: 'onChange' },
	},
	args: {
		value: {
			bgCl: '',
			bgClHover: '',
			bgClActive: '',
			bgGrd: '',
			bgGrdHover: '',
			bgGrdActive: '',
			bgImgFrm: '',
			bgImgId: '',
			bgImgUrl: '',
			bgImgSz: '',

			xsBgPosX: '',
			smBgPosX: '',
			mdBgPosX: '',
			lgBgPosX: '',
			xlBgPosX: '',
			xxlBgPosX: '',
			xsBgPosY: '',
			smBgPosY: '',
			mdBgPosY: '',
			lgBgPosY: '',
			xlBgPosY: '',
			xxlBgPosY: '',

			xsBgSz: '',
			smBgSz: '',
			mdBgSz: '',
			lgBgSz: '',
			xlBgSz: '',
			xxlBgSz: '',
			xsBgW: '',
			smBgW: '',
			mdBgW: '',
			lgBgW: '',
			xlBgW: '',
			xxlBgW: '',
			xsBgH: '',
			smBgH: '',
			mdBgH: '',
			lgBgH: '',
			xlBgH: '',
			xxlBgH: '',

			xsBgRpt: '',
			smBgRpt: '',
			mdBgRpt: '',
			lgBgRpt: '',
			xlBgRpt: '',
			xxlBgRpt: '',

			bgAtch: '',
			mdBgAtch: '',
			lgBgAtch: '',
			bgAtch: '',

			bgBlendMode: '',

			bgVidFrm: '',
			bgVidId: '',
			bgVidUrl: '',
			bgVidOnSet: '',
			bgVidLoop: '',
			bgVidMuted: '',
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
		<AtrcControlBackground
			value={value}
			onChange={(newVal) => {
				handleChange(newVal);
			}}
		/>
	);
};

export const Default = Template.bind({});

export const Example = () => {
	const [value, setValue] = useState({
		bgCl: '',
		bgClHover: '',
		bgClActive: '',
		bgGrd: '',
		bgGrdHover: '',
		bgGrdActive: '',
		bgImgFrm: '',
		bgImgId: '',
		bgImgUrl: '',
		bgImgSz: '',

		xsBgPosX: '',
		smBgPosX: '',
		mdBgPosX: '',
		lgBgPosX: '',
		xlBgPosX: '',
		xxlBgPosX: '',
		xsBgPosY: '',
		smBgPosY: '',
		mdBgPosY: '',
		lgBgPosY: '',
		xlBgPosY: '',
		xxlBgPosY: '',

		xsBgSz: '',
		smBgSz: '',
		mdBgSz: '',
		lgBgSz: '',
		xlBgSz: '',
		xxlBgSz: '',
		xsBgW: '',
		smBgW: '',
		mdBgW: '',
		lgBgW: '',
		xlBgW: '',
		xxlBgW: '',
		xsBgH: '',
		smBgH: '',
		mdBgH: '',
		lgBgH: '',
		xlBgH: '',
		xxlBgH: '',

		xsBgRpt: '',
		smBgRpt: '',
		mdBgRpt: '',
		lgBgRpt: '',
		xlBgRpt: '',
		xxlBgRpt: '',

		bgAtch: '',
		mdBgAtch: '',
		lgBgAtch: '',
		bgAtch: '',

		bgBlendMode: '',

		bgVidFrm: '',
		bgVidId: '',
		bgVidUrl: '',
		bgVidOnSet: '',
		bgVidLoop: '',
		bgVidMuted: '',
		onBgVidMb: '',
	});

	const handleChange = (newValue) => {
		setValue((prevValue) => {
			// Filter out keys with empty values and keys not present in the new value
			const filteredValue = Object.fromEntries(
				Object.entries({
					...prevValue,
					...newValue,
				}).filter(([key, value]) => value !== '' && key in newValue)
			);

			return filteredValue;
		});
	};

	const getCss = () => {
		let normalCssObj = {
			xs: '',
			xsHover: '',
			xsActive: '',
			sm: '',
			smHover: '',
			smActive: '',
			md: '',
			mdHover: '',
			mdActive: '',
			lg: '',
			lgHover: '',
			lgActive: '',
			xl: '',
			xlHover: '',
			xlActive: '',
			xxl: '',
			xxlHover: '',
			xxlActive: '',
		};

		const bgCss = AtrcControlBackgroundCss({ value });
		if (bgCss && !isEmpty(bgCss)) {
			forEach(bgCss, (item, itemKey) => {
				normalCssObj[itemKey] += item;
			});
		}
		const dynamicCss = AtrcGenerateDynamicCss({
			cssObj: normalCssObj,
			selector: '#atrcUniqueSelector',
		});

		if (dynamicCss) {
			return dynamicCss;
		}
		return __('Empty css', 'atrc-prefix-atrc');
	};
	return (
		<>
			<AtrcWireFrameContentSidebar
				renderContent={
					<>
						<AtrcControlBackground
							value={value}
							onChange={handleChange}
						/>

						<AtrcText
							tag='h3'
							className={classNames(AtrcPrefix('m'))}>
							{__('Dynamic CSS', 'atrc-prefix-atrc')}
						</AtrcText>
						<AtrcPreTemplate1 content={AtrcFormatCss(getCss())} />
					</>
				}
				renderSidebar={
					<>
						<AtrcText
							tag='h3'
							className={classNames(AtrcPrefix('m'))}>
							{__('Value', 'atrc-prefix-atrc')}
						</AtrcText>
						<AtrcPreTemplate1 content={JSON.stringify(value, null, 2)} />
					</>
				}
				sidebarProps={{ sidebarCol: 'at-col-6' }}
				contentProps={{ contentCol: 'at-col-6' }}
			/>
		</>
	);
};
