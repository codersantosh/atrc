import React from 'react';

/*Library*/
import { isEmpty } from 'lodash';

/*Controls*/
import { AtrcControlTransformAllowedKeys } from '../control-transform';
import AtrcControlTransformCss from '../control-transform/css';

/* Utils */
import AtrcAvailableTabs from '../../utils/available-tabs';
import {
	AtrcGetTabValues,
	AtrcHasTabValues,
} from '../../utils/object-values-with-allowed-keys-and-tabs';

/*Local*/
const AtrcControlTransformTabCss = ({
	value,
	properties = {
		tf: '--at-tf',
		ppv: '--at-ppv',
		ppvOrg: '--at-ppv-org',
		tfOrg: '--at-tf-org',
		tfSty: '--at-tf-sty',
	},
}) => {
	const output = {
		xs: '',
		xsHover: '',
		sm: '',
		smHover: '',
		md: '',
		mdHover: '',
		lg: '',
		lgHover: '',
		xl: '',
		xlHover: '',
		xxl: '',
		xxlHover: '',
	};
	if (!isEmpty(value)) {
		AtrcAvailableTabs.forEach((tab) => {
			if (AtrcHasTabValues(tab, value, AtrcControlTransformAllowedKeys)) {
				const transform = AtrcGetTabValues(
					value,
					tab,
					AtrcControlTransformAllowedKeys
				);
				if (value.on3D) {
					transform.on3D = value.on3D;
				}
				const css = AtrcControlTransformCss(transform);
				if (css) {
					switch (tab) {
						case 'normal':
							output.xs += `${properties.tf} : ${css};`;
							break;

						case 'hover':
							output.xsHover += `${properties.tf} : ${css};`;
							break;
					}
				}
			}
		});
		if (value.ppv) {
			output.xs += `${properties.ppv} : ${value.ppv};`;
		}
		if (value.orgX || value.orgY || value.orgZ) {
			if (value.on3D) {
				output.xs += `${properties.tfOrg} : ${value.orgX || 0} ${
					value.orgY || 0
				} ${value.orgZ || 0};`;

				output.xs += ``;
			} else {
				output.xs += `${properties.tfOrg} :${value.orgX || 0} ${
					value.orgY || 0
				}`;
			}
		}
	}
	return output;
};

export default AtrcControlTransformTabCss;
