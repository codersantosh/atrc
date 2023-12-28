/*Attributes Structure
Type Object
{
    tType = '',
    tSvgFrm = '',
    tSvgDefd = '',
    tSvgCust = '',
    tFlipV = '',
    tFlipH = '',
    tSvgCl = '',
    tImgFrm ='',
    tImgId ='',
    tImgUrl ='',
    tImgSz ='',
    tH ='',
    smTH ='',
    mdTH ='',
    lgTH ='',
    xlTH ='',
    xxlTH ='',
    tW ='',
    smTW ='',
    mdTW ='',
    lgTW ='',
    xlTW ='',
    xxlTW ='',
    tZT,

    bType = '',
    bSvgFrm = '',
    bSvgDefd = '',
    bSvgCust = '',
    bFlipV = '',
    bFlipH = '',
    bSvgCl = '',
    bImgFrm ='',
    bImgId ='',
    bImgUrl ='',
    bImgSz ='',
    bH ='',
    smBH ='',
    mdBH ='',
    lgBH ='',
    xlBH ='',
    xxlBH ='',
    bW ='',
    smBW ='',
    mdBW ='',
    lgBW ='',
    xlBW ='',
    xxlBW ='',
    bZT,
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useMemo } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';

import { isArray, map } from 'lodash';

/*Inbuilt*/
import { AtrcPanelTools, AtrcControlShape } from '../index';

import SvgShapeTopOptions from './options';
import SvgShapeBottomOptions from './bottom-options';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components */
export const AtrcControlBlockShapeTopSelected = (value) => {
	const selectedShape = SvgShapeTopOptions.filter(function (item) {
		return item.value === value;
	});
	if (selectedShape.length) {
		return selectedShape[0];
	}
	return null;
};

export const AtrcControlBlockShapeBottomSelected = (value) => {
	const selectedShape = SvgShapeBottomOptions.filter(function (item) {
		return item.value === value;
	});
	if (selectedShape.length) {
		return selectedShape[0];
	}
	return null;
};

const AtrcControlBlockShape = (props) => {
	const {
		value = {},
		variant = '',
		className = '',
		onChange = () => {},
		allowedOptions = true,
	} = props;

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
		tH = '',
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
		tZT = false,

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
		bH = '',
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
		bZT = false,
	} = value;

	const resetTop = () => {
		const valueCloned = Object.assign({}, value);

		delete valueCloned.tType;
		delete valueCloned.tSvgFrm;
		delete valueCloned.tSvgDefd;
		delete valueCloned.tSvgCust;
		delete valueCloned.tFlipV;
		delete valueCloned.tFlipH;
		delete valueCloned.tSvgCl;
		delete valueCloned.tImgFrm;
		delete valueCloned.tImgId;
		delete valueCloned.tImgUrl;
		delete valueCloned.tImgSz;
		delete valueCloned.tH;
		delete valueCloned.smTH;
		delete valueCloned.mdTH;
		delete valueCloned.lgTH;
		delete valueCloned.xlTH;
		delete valueCloned.xxlTH;
		delete valueCloned.tW;
		delete valueCloned.smTW;
		delete valueCloned.mdTW;
		delete valueCloned.lgTW;
		delete valueCloned.xlTW;
		delete valueCloned.xxlTW;
		delete valueCloned.tZT;

		onChange(valueCloned);
	};

	const setTop = (newVal) => {
		const valueCloned = Object.assign({}, value);

		delete valueCloned.tType;
		delete valueCloned.tSvgFrm;
		delete valueCloned.tSvgDefd;
		delete valueCloned.tSvgCust;
		delete valueCloned.tFlipV;
		delete valueCloned.tFlipH;
		delete valueCloned.tSvgCl;
		delete valueCloned.tImgFrm;
		delete valueCloned.tImgId;
		delete valueCloned.tImgUrl;
		delete valueCloned.tImgSz;
		delete valueCloned.tH;
		delete valueCloned.smTH;
		delete valueCloned.mdTH;
		delete valueCloned.lgTH;
		delete valueCloned.xlTH;
		delete valueCloned.xxlTH;
		delete valueCloned.tW;
		delete valueCloned.smTW;
		delete valueCloned.mdTW;
		delete valueCloned.lgTW;
		delete valueCloned.xlTW;
		delete valueCloned.xxlTW;
		delete valueCloned.tZT;

		if (newVal && newVal.type) {
			valueCloned.tType = newVal.type;
		}
		if (newVal && newVal.svgFrm) {
			valueCloned.tSvgFrm = newVal.svgFrm;
		}
		if (newVal && newVal.svgDefd) {
			valueCloned.tSvgDefd = newVal.svgDefd;
		}
		if (newVal && newVal.svgCust) {
			valueCloned.tSvgCust = newVal.svgCust;
		}
		if (newVal && newVal.svgCl) {
			valueCloned.tSvgCl = newVal.svgCl;
		}
		if (newVal && newVal.flipV) {
			valueCloned.tFlipV = newVal.flipV;
		}
		if (newVal && newVal.flipH) {
			valueCloned.tFlipH = newVal.flipH;
		}
		if (newVal && newVal.imgFrm) {
			valueCloned.tImgFrm = newVal.imgFrm;
		}
		if (newVal && newVal.imgId) {
			valueCloned.tImgId = newVal.imgId;
		}
		if (newVal && newVal.imgUrl) {
			valueCloned.tImgUrl = newVal.imgUrl;
		}
		if (newVal && newVal.imgSz) {
			valueCloned.tImgSz = newVal.imgSz;
		}

		if (newVal && newVal.w) {
			valueCloned.tW = newVal.w;
		}
		if (newVal && newVal.smW) {
			valueCloned.smTW = newVal.smW;
		}
		if (newVal && newVal.mdW) {
			valueCloned.mdTW = newVal.mdW;
		}
		if (newVal && newVal.lgW) {
			valueCloned.lgTW = newVal.lgW;
		}
		if (newVal && newVal.xlW) {
			valueCloned.xlTW = newVal.xlW;
		}
		if (newVal && newVal.xxlW) {
			valueCloned.xxlTW = newVal.xxlW;
		}
		if (newVal && newVal.zT) {
			valueCloned.tZT = newVal.zT;
		}

		if (newVal && newVal.h) {
			valueCloned.tH = newVal.h;
		}
		if (newVal && newVal.smH) {
			valueCloned.smTH = newVal.smH;
		}
		if (newVal && newVal.mdH) {
			valueCloned.mdTH = newVal.mdH;
		}
		if (newVal && newVal.lgH) {
			valueCloned.lgTH = newVal.lgH;
		}
		if (newVal && newVal.xlH) {
			valueCloned.xlTH = newVal.xlH;
		}
		if (newVal && newVal.xxlH) {
			valueCloned.xxlTH = newVal.xxlH;
		}

		onChange(valueCloned);
	};

	const resetBottom = () => {
		const valueCloned = Object.assign({}, value);

		delete valueCloned.bType;
		delete valueCloned.bSvgFrm;
		delete valueCloned.bSvgDefd;
		delete valueCloned.bSvgCust;
		delete valueCloned.bFlipV;
		delete valueCloned.bFlipH;
		delete valueCloned.bSvgCl;
		delete valueCloned.bImgFrm;
		delete valueCloned.bImgId;
		delete valueCloned.bImgUrl;
		delete valueCloned.bImgSz;
		delete valueCloned.bH;
		delete valueCloned.smBH;
		delete valueCloned.mdBH;
		delete valueCloned.lgBH;
		delete valueCloned.xlBH;
		delete valueCloned.xxlBH;
		delete valueCloned.bW;
		delete valueCloned.smBW;
		delete valueCloned.mdBW;
		delete valueCloned.lgBW;
		delete valueCloned.xlBW;
		delete valueCloned.xxlBW;
		delete valueCloned.bZT;

		onChange(valueCloned);
	};

	const setBottom = (newVal) => {
		const valueCloned = Object.assign({}, value);

		delete valueCloned.bType;
		delete valueCloned.bSvgFrm;
		delete valueCloned.bSvgDefd;
		delete valueCloned.bSvgCust;
		delete valueCloned.bFlipV;
		delete valueCloned.bFlipH;
		delete valueCloned.bSvgCl;
		delete valueCloned.bImgFrm;
		delete valueCloned.bImgId;
		delete valueCloned.bImgUrl;
		delete valueCloned.bImgSz;
		delete valueCloned.bH;
		delete valueCloned.smBH;
		delete valueCloned.mdBH;
		delete valueCloned.lgBH;
		delete valueCloned.xlBH;
		delete valueCloned.xxlBH;
		delete valueCloned.bW;
		delete valueCloned.smBW;
		delete valueCloned.mdBW;
		delete valueCloned.lgBW;
		delete valueCloned.xlBW;
		delete valueCloned.xxlBW;
		delete valueCloned.bZT;

		if (newVal && newVal.type) {
			valueCloned.bType = newVal.type;
		}
		if (newVal && newVal.svgFrm) {
			valueCloned.bSvgFrm = newVal.svgFrm;
		}
		if (newVal && newVal.svgDefd) {
			valueCloned.bSvgDefd = newVal.svgDefd;
		}
		if (newVal && newVal.svgCust) {
			valueCloned.bSvgCust = newVal.svgCust;
		}
		if (newVal && newVal.svgCl) {
			valueCloned.bSvgCl = newVal.svgCl;
		}
		if (newVal && newVal.flipV) {
			valueCloned.bFlipV = newVal.flipV;
		}
		if (newVal && newVal.flipH) {
			valueCloned.bFlipH = newVal.flipH;
		}
		if (newVal && newVal.imgFrm) {
			valueCloned.bImgFrm = newVal.imgFrm;
		}
		if (newVal && newVal.imgId) {
			valueCloned.bImgId = newVal.imgId;
		}
		if (newVal && newVal.imgUrl) {
			valueCloned.bImgUrl = newVal.imgUrl;
		}
		if (newVal && newVal.imgSz) {
			valueCloned.bImgSz = newVal.imgSz;
		}

		if (newVal && newVal.w) {
			valueCloned.bW = newVal.w;
		}
		if (newVal && newVal.smW) {
			valueCloned.smBW = newVal.smW;
		}
		if (newVal && newVal.mdW) {
			valueCloned.mdBW = newVal.mdW;
		}
		if (newVal && newVal.lgW) {
			valueCloned.lgBW = newVal.lgW;
		}
		if (newVal && newVal.xlW) {
			valueCloned.xlBW = newVal.xlW;
		}
		if (newVal && newVal.xxlW) {
			valueCloned.xxlBW = newVal.xxlW;
		}
		if (newVal && newVal.zT) {
			valueCloned.bZT = newVal.zT;
		}

		if (newVal && newVal.h) {
			valueCloned.bH = newVal.h;
		}
		if (newVal && newVal.smH) {
			valueCloned.smBH = newVal.smH;
		}
		if (newVal && newVal.mdH) {
			valueCloned.mdBH = newVal.mdH;
		}
		if (newVal && newVal.lgH) {
			valueCloned.lgBH = newVal.lgH;
		}
		if (newVal && newVal.xlH) {
			valueCloned.xlBH = newVal.xlH;
		}
		if (newVal && newVal.xxlH) {
			valueCloned.xxlBH = newVal.xxlH;
		}
		onChange(valueCloned);
	};

	const AllTabs = useMemo(() => {
		const tabsOptions = [];

		if (
			true === allowedOptions ||
			(isArray(allowedOptions) && allowedOptions.includes('top'))
		) {
			tabsOptions.push({
				name: 'top',
				title: __('Top shape', 'atrc-prefix-atrc'),
				hasValue: tSvgDefd || tSvgCust || tImgId || tImgUrl,
				onDeselect: () => resetTop(),
			});
		}
		if (
			true === allowedOptions ||
			(isArray(allowedOptions) && allowedOptions.includes('bottom'))
		) {
			tabsOptions.push({
				name: 'bottom',
				title: __('Bottom shape', 'atrc-prefix-atrc'),
				hasValue: bSvgDefd || bSvgCust || bImgId || bImgUrl,
				onDeselect: () => resetBottom(),
			});
		}
		return tabsOptions;
	}, [value]);

	return (
		<AtrcPanelTools
			className={classnames(
				AtrcPrefix('ctrl-blk-shp'),
				className,
				variant ? AtrcPrefix('ctrl-blk-shp') + '-' + variant : ''
			)}
			label={__('Block shape', 'atrc-prefix-atrc')}
			resetAll={() => onChange({})}
			allowTabs={true}
			tools={AllTabs}>
			{(activeItems) =>
				map(activeItems, function (item, iDx) {
					if ('top' === item) {
						return (
							<AtrcControlShape
								value={{
									type: tType,
									svgFrm: tSvgFrm,
									svgDefd: tSvgDefd,
									svgCust: tSvgCust,
									svgCl: tSvgCl,
									flipV: tFlipV,
									flipH: tFlipH,
									imgFrm: tImgFrm,
									imgId: tImgId,
									imgUrl: tImgUrl,
									imgSz: tImgSz,
									w: tW,
									smW: smTW,
									mdW: mdTW,
									lgW: lgTW,
									xlW: xlTW,
									xxlW: xxlTW,
									zT: tZT,
									h: tH,
									smH: smTH,
									mdH: mdTH,
									lgH: lgTH,
									xlH: xlTH,
									xxlH: xxlTH,
								}}
								onChange={setTop}
								definedOptions={SvgShapeTopOptions}
								key={iDx}
							/>
						);
					}
					if ('bottom' === item) {
						return (
							<AtrcControlShape
								value={{
									type: bType,
									svgFrm: bSvgFrm,
									svgDefd: bSvgDefd,
									svgCust: bSvgCust,
									svgCl: bSvgCl,
									flipV: bFlipV,
									flipH: bFlipH,
									imgFrm: bImgFrm,
									imgId: bImgId,
									imgUrl: bImgUrl,
									imgSz: bImgSz,
									w: bW,
									smW: smBW,
									mdW: mdBW,
									lgW: lgBW,
									xlW: xlBW,
									xxlW: xxlBW,
									zT: bZT,
									h: bH,
									smH: smBH,
									mdH: mdBH,
									lgH: lgBH,
									xlH: xlBH,
									xxlH: xxlBH,
								}}
								onChange={setBottom}
								definedOptions={SvgShapeBottomOptions}
								key={iDx}
							/>
						);
					}
					return null;
				})
			}
		</AtrcPanelTools>
	);
};

export default AtrcControlBlockShape;
