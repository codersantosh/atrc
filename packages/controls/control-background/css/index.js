import React from 'react';

/*Library*/
import { forEach, isEmpty } from 'lodash';

/*Control*/
import { AtrcControlColorGradientTabCssBg } from '../../control-dropdown-color-gradient-tab/css';

/* Internal */
import BgImage from './bg-image';

/*Local*/
const AtrcControlBackgroundCss = ({
	value,
	properties = {
		backgroundAttachment: '--at-bg-atch',
		backgroundBlendMode: '--at-bg-blend-mode',
		backgroundPosition: '--at-bg-pos',
		backgroundRepeat: '--at-bg-rpt',
		backgroundSize: '--at-bg-sz',
		backgroundImage: '--at-bg-img',
		backgroundColor: '--at-bg-cl',
	},
}) => {
	let innerOutput = {
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

	if (!isEmpty(value)) {
		const bgCss = AtrcControlColorGradientTabCssBg({
			value: {
				cl: value.bgCl,
				clHover: value.bgClHover,
				clActive: value.bgClActive,
				grd: value.bgGrd,
				grdHover: value.bgGrdHover,
				grdActive: value.bgGrdActive,
			},
			properties: {
				color: properties.backgroundColor,
				gradient: properties.backgroundImage,
			},
		});
		forEach(bgCss, (item, itemKey) => {
			if (!innerOutput[itemKey]) {
				innerOutput[itemKey] = '';
			}

			innerOutput[itemKey] += item;
		});

		innerOutput = BgImage(value, innerOutput, properties);
	}

	return innerOutput;
};

export default AtrcControlBackgroundCss;
