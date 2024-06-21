import React from 'react';

/*Library*/
import { forEach, isEmpty } from 'lodash';

/*Utils*/
import { AtrcTabCss } from '../../../utils/object-values-with-allowed-keys-and-tabs';
import { AtrcDeviceCss } from '../../../utils/object-values-with-devices';

/*Local*/
const AtrcControlTypographyCss = ({
	value,
	properties = {
		fontSize: '--at-fnt-sz',
		fontFamily: '--at-fnt-wt',
		fontWeight: '--at-fnt-fam',
		fontStyle: '--at-fnt-sty',
		textDecoration: '--at-txt-tf',
		textTransform: '--at-txt-dec',
		lineHeight: '--at-ln-h',
		letterSpacing: '--at-ltr-sp',
	},
}) => {
	const output = {
		xs: '',
		sm: '',
		md: '',
		lg: '',
		xl: '',
		xxl: '',
		xsHover: '',
		smHover: '',
		mdHover: '',
		lgHover: '',
		xlHover: '',
		xxlHover: '',
	};
	if (value && !isEmpty(value)) {
		const fntSzCss = AtrcDeviceCss(value, 'fntSz', properties.fontSize);
		if (fntSzCss && !isEmpty(fntSzCss)) {
			forEach(fntSzCss, (item, itemKey) => {
				output[itemKey] += item;
			});
		}

		const fntFamCss = AtrcTabCss(value, 'fntFam', properties.fontFamily);
		if (fntFamCss && !isEmpty(fntFamCss)) {
			forEach(fntFamCss, (item, itemKey) => {
				output[itemKey] += item;
			});
		}

		const fntWtCss = AtrcTabCss(value, 'fntWt', properties.fontWeight);
		if (fntWtCss && !isEmpty(fntWtCss)) {
			forEach(fntWtCss, (item, itemKey) => {
				output[itemKey] += item;
			});
		}

		const fntStyCss = AtrcTabCss(value, 'fntSty', properties.fontStyle);
		if (fntStyCss && !isEmpty(fntStyCss)) {
			forEach(fntStyCss, (item, itemKey) => {
				output[itemKey] += item;
			});
		}

		const txtDecCss = AtrcTabCss(value, 'txtDec', properties.textDecoration);
		if (txtDecCss && !isEmpty(txtDecCss)) {
			forEach(txtDecCss, (item, itemKey) => {
				output[itemKey] += item;
			});
		}

		const txtTfCss = AtrcTabCss(value, 'txtTf', properties.textTransform);
		if (txtTfCss && !isEmpty(txtTfCss)) {
			forEach(txtTfCss, (item, itemKey) => {
				output[itemKey] += item;
			});
		}

		const lnHCss = AtrcDeviceCss(value, 'lnH', properties.lineHeight);
		if (lnHCss && !isEmpty(lnHCss)) {
			forEach(lnHCss, (item, itemKey) => {
				output[itemKey] += item;
			});
		}

		const ltrSpCss = AtrcDeviceCss(value, 'ltrSp', properties.letterSpacing);
		if (ltrSpCss && !isEmpty(ltrSpCss)) {
			forEach(ltrSpCss, (item, itemKey) => {
				output[itemKey] += item;
			});
		}
	}
	return output;
};

export default AtrcControlTypographyCss;
