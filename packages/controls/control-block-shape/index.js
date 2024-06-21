import React from 'react';

/*Attributes Structure
Type Object
{
    tType : '',
    tSvgFrm : '',
    tSvgDefd : '',
    tSvgCust : '',
    tFlipV : '',
    tFlipH : '',
    tSvgCl : '',
    tImgFrm :'',
    tImgId :'',
    tImgUrl :'',
    tImgSz :'',

    xsTH :'',xs top height
    smTH :'',
    mdTH :'',
    lgTH :'',
    xlTH :'',
    xxlTH :'',
    xsTW :'', xs top width
    smTW :'',
    mdTW :'',
    lgTW :'',
    xlTW :'',
    xxlTW :'',

    tZIdx:'',

    bType : '',
    bSvgFrm : '',
    bSvgDefd : '',
    bSvgCust : '',
    bFlipV : '',
    bFlipH : '',
    bSvgCl : '',
    bImgFrm :'',
    bImgId :'',
    bImgUrl :'',
    bImgSz :'',

    xsBH :'',xs bottom height
    smBH :'',
    mdBH :'',
    lgBH :'',
    xlBH :'',
    xxlBH :'',
    xsBW :'', xs bottom width
    smBW :'',
    mdBW :'',
    lgBW :'',
    xlBW :'',
    xxlBW :'',
    bZIdx:'',
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

import { isArray, map, cloneDeep } from 'lodash';

/*Controls*/
import AtrcControlShape from '../control-shape';

/* Molecules */
import AtrcPanelTools from '../../molecules/panel-tools';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/* Internal */
import SvgShapeTopOptions from './options';
import SvgShapeBottomOptions from './bottom-options';

/*Local */
export const AtrcControlBlockShapeTopSelected = (value) => {
	const selectedShape = SvgShapeTopOptions().filter(function (item) {
		return item.value === value;
	});
	if (selectedShape.length) {
		return selectedShape[0];
	}
	return null;
};

export const AtrcControlBlockShapeBottomSelected = (value) => {
	const selectedShape = SvgShapeBottomOptions().filter(function (item) {
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
		...defaultProps
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
		xsTH = '',
		smTH = '',
		mdTH = '',
		lgTH = '',
		xlTH = '',
		xxlTH = '',
		xsTW = '',
		smTW = '',
		mdTW = '',
		lgTW = '',
		xlTW = '',
		xxlTW = '',
		tZIdx = false,

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
		xsBW = '',
		smBW = '',
		mdBW = '',
		lgBW = '',
		xlBW = '',
		xxlBW = '',
		bZIdx = false,
	} = value;

	const resetTop = () => {
		const valueCloned = cloneDeep(value);

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
		delete valueCloned.xsTH;
		delete valueCloned.smTH;
		delete valueCloned.mdTH;
		delete valueCloned.lgTH;
		delete valueCloned.xlTH;
		delete valueCloned.xxlTH;
		delete valueCloned.xsTW;
		delete valueCloned.smTW;
		delete valueCloned.mdTW;
		delete valueCloned.lgTW;
		delete valueCloned.xlTW;
		delete valueCloned.xxlTW;
		delete valueCloned.tZIdx;

		onChange(valueCloned);
	};

	const setTop = (newVal) => {
		const valueCloned = cloneDeep(value);

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
		delete valueCloned.xsTH;
		delete valueCloned.smTH;
		delete valueCloned.mdTH;
		delete valueCloned.lgTH;
		delete valueCloned.xlTH;
		delete valueCloned.xxlTH;
		delete valueCloned.xsTW;
		delete valueCloned.smTW;
		delete valueCloned.mdTW;
		delete valueCloned.lgTW;
		delete valueCloned.xlTW;
		delete valueCloned.xxlTW;
		delete valueCloned.tZIdx;

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

		if (newVal && newVal.xsW) {
			valueCloned.xsTW = newVal.xsW;
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
		if (newVal && newVal.zIdx) {
			valueCloned.tZIdx = newVal.zIdx;
		}

		if (newVal && newVal.xsH) {
			valueCloned.xsTH = newVal.xsH;
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
		const valueCloned = cloneDeep(value);

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
		delete valueCloned.xsBH;
		delete valueCloned.smBH;
		delete valueCloned.mdBH;
		delete valueCloned.lgBH;
		delete valueCloned.xlBH;
		delete valueCloned.xxlBH;
		delete valueCloned.xsBW;
		delete valueCloned.smBW;
		delete valueCloned.mdBW;
		delete valueCloned.lgBW;
		delete valueCloned.xlBW;
		delete valueCloned.xxlBW;
		delete valueCloned.bZIdx;

		onChange(valueCloned);
	};

	const setBottom = (newVal) => {
		const valueCloned = cloneDeep(value);

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
		delete valueCloned.xsBH;
		delete valueCloned.smBH;
		delete valueCloned.mdBH;
		delete valueCloned.lgBH;
		delete valueCloned.xlBH;
		delete valueCloned.xxlBH;
		delete valueCloned.xsBW;
		delete valueCloned.smBW;
		delete valueCloned.mdBW;
		delete valueCloned.lgBW;
		delete valueCloned.xlBW;
		delete valueCloned.xxlBW;
		delete valueCloned.bZIdx;

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

		if (newVal && newVal.xsW) {
			valueCloned.xsBW = newVal.xsW;
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
		if (newVal && newVal.zIdx) {
			valueCloned.bZIdx = newVal.zIdx;
		}

		if (newVal && newVal.xsH) {
			valueCloned.xsBH = newVal.xsH;
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

	const AllTabs = [];

	if (
		true === allowedOptions ||
		(isArray(allowedOptions) && allowedOptions.includes('top'))
	) {
		AllTabs.push({
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
		AllTabs.push({
			name: 'bottom',
			title: __('Bottom shape', 'atrc-prefix-atrc'),
			hasValue: bSvgDefd || bSvgCust || bImgId || bImgUrl,
			onDeselect: () => resetBottom(),
		});
	}

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
			tools={AllTabs}
			{...defaultProps}>
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
									xsW: xsTW,
									smW: smTW,
									mdW: mdTW,
									lgW: lgTW,
									xlW: xlTW,
									xxlW: xxlTW,
									zIdx: tZIdx,
									xsH: xsTH,
									smH: smTH,
									mdH: mdTH,
									lgH: lgTH,
									xlH: xlTH,
									xxlH: xxlTH,
								}}
								onChange={setTop}
								definedOptions={SvgShapeTopOptions()}
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
									xsW: xsBW,
									smW: smBW,
									mdW: mdBW,
									lgW: lgBW,
									xlW: xlBW,
									xxlW: xxlBW,
									zIdx: bZIdx,
									xsH: xsBH,
									smH: smBH,
									mdH: mdBH,
									lgH: lgBH,
									xlH: xlBH,
									xxlH: xxlBH,
								}}
								onChange={setBottom}
								definedOptions={SvgShapeBottomOptions()}
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
