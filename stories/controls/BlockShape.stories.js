/* WordPress */
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/* Library */
import { action } from '@storybook/addon-actions';
import classnames from 'classnames';

/* Atrc */
import {
	AtrcText,
	AtrcBlockShape,
	AtrcControlBlockShape,
	AtrcControlBlockShapeCss,
	AtrcGenerateDynamicCss,
	AtrcWireFrameContentSidebar,
	AtrcPreTemplate1,
	AtrcFormatCss,
	AtrcWrap,
} from '../../packages';

/* Local */
export default {
	title: 'Controls/AtrcControlBlockShape',
	component: AtrcControlBlockShape,
	tags: ['autodocs'],
	argTypes: {
		onChange: { action: 'onChange' },
	},
	args: {
		value: {
			tType: 'svg',
			tSvgFrm: 'def',
			tSvgDefd: '',
			tSvgCust: '',
			tFlipV: '',
			tFlipH: '',
			tSvgCl: '',
			tImgFrm: '',
			tImgId: '',
			tImgUrl: '',
			tImgSz: '',
			xsTH: '',
			smTH: '',
			mdTH: '',
			lgTH: '',
			xlTH: '',
			xxlTH: '',
			tW: '',
			smTW: '',
			mdTW: '',
			lgTW: '',
			xlTW: '',
			xxlTW: '',
			tZT: '',

			bType: 'svg',
			bSvgFrm: 'def',
			bSvgDefd: '',
			bSvgCust: '',
			bFlipV: '',
			bFlipH: '',
			bSvgCl: '',
			bImgFrm: '',
			bImgId: '',
			bImgUrl: '',
			bImgSz: '',
			xsBH: '',
			smBH: '',
			mdBH: '',
			lgBH: '',
			xlBH: '',
			xxlBH: '',
			bW: '',
			smBW: '',
			mdBW: '',
			lgBW: '',
			xlBW: '',
			xxlBW: '',
			bZT: '',
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
		<AtrcControlBlockShape
			value={value}
			onChange={handleChange}
		/>
	);
};

export const Default = Template.bind({});

export const Example = () => {
	const [value, setValue] = useState({
		tType: 'svg',
		tSvgFrm: 'def',
		tSvgDefd: '',
		tSvgCust: '',
		tFlipV: '',
		tFlipH: '',
		tSvgCl: '',
		tImgFrm: '',
		tImgId: '',
		tImgUrl: '',
		tImgSz: '',

		xsTH: '',
		smTH: '',
		mdTH: '',
		lgTH: '',
		xlTH: '',
		xxlTH: '',
		xsTW: '',
		smTW: '',
		mdTW: '',
		lgTW: '',
		xlTW: '',
		xxlTW: '',

		tZIdx: '',

		bType: 'svg',
		bSvgFrm: 'def',
		bSvgDefd: '',
		bSvgCust: '',
		bFlipV: '',
		bFlipH: '',
		bSvgCl: '',
		bImgFrm: '',
		bImgId: '',
		bImgUrl: '',
		bImgSz: '',

		xsBH: '',
		smBH: '',
		mdBH: '',
		lgBH: '',
		xlBH: '',
		xxlBH: '',
		xsBW: '',
		smBW: '',
		mdBW: '',
		lgBW: '',
		xlBW: '',
		xxlBW: '',
		bZIdx: '',
	});

	const {
		tType = 'svg',
		tSvgFrm = 'def',
		tSvgDefd = '',
		tSvgCust = '',
		tFlipV = '',
		tFlipH = '',
		tSvgCl = '',
		tImgFrm = '',
		tImgId = '',
		tImgUrl = '',
		tImgSz = '',
		xsTH = '',
		smTH = '',
		mdTH = '',
		lgTH = '',
		xlTH = '',
		xxlTH = '',
		tW = '',
		smTW = '',
		mdTW = '',
		lgTW = '',
		xlTW = '',
		xxlTW = '',
		tZT = '',

		bType = 'svg',
		bSvgFrm = 'def',
		bSvgDefd = '',
		bSvgCust = '',
		bFlipV = '',
		bFlipH = '',
		bSvgCl = '',
		bImgFrm = '',
		bImgId = '',
		bImgUrl = '',
		bImgSz = '',
		xsBH = '',
		smBH = '',
		mdBH = '',
		lgBH = '',
		xlBH = '',
		xxlBH = '',
		bW = '',
		smBW = '',
		mdBW = '',
		lgBW = '',
		xlBW = '',
		xxlBW = '',
		bZT = '',
	} = value;

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
		const gotCss = AtrcControlBlockShapeCss({ value });
		console.log(gotCss);
		if (gotCss) {
			const { topCss, bottomCss } = gotCss;
			let dynamicCss = AtrcGenerateDynamicCss({
				cssObj: topCss,
				selector: '#atrcUniqueSelector .at-shp-t',
			});
			dynamicCss += AtrcGenerateDynamicCss({
				cssObj: bottomCss,
				selector: '#atrcUniqueSelector .at-shp-b',
			});
			if (dynamicCss) {
				return dynamicCss;
			}
		}

		return __('Empty css', 'atrc-prefix-atrc');
	};
	return (
		<>
			<AtrcWireFrameContentSidebar
				renderContent={
					<>
						<AtrcControlBlockShape
							value={value}
							onChange={handleChange}
						/>
						<AtrcText
							tag='h3'
							className={classnames('at-m')}>
							{__('Shape', 'atrc-prefix-atrc')}
						</AtrcText>
						<AtrcWrap
							style={{
								position: 'relative',
								height: '250px',
							}}>
							<AtrcBlockShape
								type={tType}
								svgFrm={tSvgFrm}
								svgDefd={tSvgDefd}
								svgCust={tSvgCust}
								svgCl={tSvgCl}
								flipV={tFlipV}
								flipH={tFlipH}
								imgUrl={tImgUrl}
								xsH={xsTH}
								smH={smTH}
								mdH={mdTH}
								lgH={lgTH}
								xlH={xlTH}
								xxlH={xxlTH}
								zT={tZT}
								className='at-shp-t'
							/>
							<AtrcBlockShape
								type={bType}
								svgFrm={bSvgFrm}
								svgDefd={bSvgDefd}
								svgCust={bSvgCust}
								svgCl={bSvgCl}
								flipV={bFlipV}
								flipH={bFlipH}
								imgUrl={bImgUrl}
								xsH={xsBH}
								smH={smBH}
								mdH={mdBH}
								lgH={lgBH}
								xlH={xlBH}
								xxlH={xxlBH}
								zT={bZT}
								className='at-shp-t'
							/>
						</AtrcWrap>

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
		</>
	);
};
