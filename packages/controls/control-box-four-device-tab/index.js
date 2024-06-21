import React from 'react';

/*Value Structure
Per tab: 30 values
Type Object
{
========*Normal values*========
	'xs',TODO
	"xsT":"",
    "xsB":"",
    "xsR":"",
    "xsL":"",

	'sm',
	'smT',
	'smR',
	'smB',
	'smL',

	'md',
	'mdT',
	'mdR',
	'mdB',
	'mdL',

	'lg',
	'lgT',
	'lgR',
	'lgB',
	'lgL',

	'xl',
	'xlT',
	'xlR',
	'xlB',
	'xlL',

	'xxl',
	'xxlT',
	'xxlR',
	'xxlB',
	'xxlL',

========*Hover values*========

    "tHover":"",
    "bHover":"",
    "rHover":"",
    "lHover":"",
    "Hover":"",

    "smTHover":"",
    "smBHover":"",
    "smRHover":"",
    "smLHover":"",
    "smHover":"",

    "mdTHover": "",
    "mdBHover": "",
    "mdRHover": "",
    "mdLHover": "",
    "mdHover": "",

    "lgTHover":"",
    "lgBHover":"",
    "lgRHover":"",
    "lgLHover":"",
    "lgHover":"",

    "xlTHover":"",
    "xlBHover":"",
    "xlRHover":"",
    "xlLHover":"",
    "xlHover":"",

    "xxlTHover":"",
    "xxlBHover":"",
    "xxlRHover":"",
    "xxlLHover":"",
    "xxlHover":"",
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import { map } from 'lodash';

import classnames from 'classnames';

/*Controls*/
import AtrcControlBoxFourDevice from '../control-box-four-device';
import { AtrcControlBoxFourDeviceAllowedKeys } from '../control-box-four-device';

/* Molecules */
import AtrcPanelTools from '../../molecules/panel-tools';

/*Utils*/
import {
	AtrcGetTabValues,
	AtrcHasTabValues,
	AtrcUpdateTabValues,
	AtrcResetTab,
	AtrcResetTabs,
} from '../../utils/object-values-with-allowed-keys-and-tabs';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local */
/*Generate per tab 30 conditional variables
 *
 * @return String || Object
 * String single value
 * Object {
 *  t:'',
 *  r:'',
 *  b:'',
 *  l:''
 *  }
 * */
const RenderTabPanel = ({
	label = __('Enter value', 'atrc-prefix-atrc'),
	value,
	onChange,
	tab = 'normal',
	...defaultProps
}) => {
	return (
		<AtrcControlBoxFourDevice
			label={label}
			value={AtrcGetTabValues(value, tab, AtrcControlBoxFourDeviceAllowedKeys)}
			onChange={onChange}
			{...defaultProps}
		/>
	);
};

const AtrcControlBoxFourDeviceTab = (props) => {
	const {
		value = {},
		label = '',
		onChange = () => {},
		variant = '',
		className = '',
		allowedTabs = ['normal', 'hover'],
		...defaultProps
	} = props;

	const setTabAttr = (tab, newVal) => {
		const getVal = AtrcUpdateTabValues(
			newVal,
			tab,
			value,
			AtrcControlBoxFourDeviceAllowedKeys
		);
		console.log(getVal);
		onChange(getVal);
	};

	const AllTabs = [];
	if (allowedTabs.includes('normal')) {
		AllTabs.push({
			name: 'normal',
			title: __('Normal', 'atrc-prefix-atrc'),
			hasValue: AtrcHasTabValues(
				'normal',
				value,
				AtrcControlBoxFourDeviceAllowedKeys
			),
			onDeselect: () =>
				onChange(
					AtrcResetTab('normal', value, AtrcControlBoxFourDeviceAllowedKeys)
				),
		});
	}

	if (allowedTabs.includes('hover')) {
		AllTabs.push({
			name: 'hover',
			title: __('Hover', 'atrc-prefix-atrc'),
			hasValue: AtrcHasTabValues(
				'hover',
				value,
				AtrcControlBoxFourDeviceAllowedKeys
			),
			onDeselect: () =>
				onChange(
					AtrcResetTab('hover', value, AtrcControlBoxFourDeviceAllowedKeys)
				),
		});
	}

	return (
		<AtrcPanelTools
			className={classnames(
				AtrcPrefix('ctrl-box-four-device-tab'),
				className,
				variant ? AtrcPrefix('ctrl-box-four-device-tab') + '-' + variant : ''
			)}
			label={label}
			resetAll={() =>
				onChange(AtrcResetTabs(value, AtrcControlBoxFourDeviceAllowedKeys))
			}
			allowTabs={true}
			tools={AllTabs}>
			{(activeItems) =>
				map(activeItems, (tab, iDx) => (
					<RenderTabPanel
						value={value}
						onChange={(newVal) => setTabAttr(tab, newVal)}
						tab={tab}
						key={iDx}
						{...defaultProps}
					/>
				))
			}
		</AtrcPanelTools>
	);
};
export default AtrcControlBoxFourDeviceTab;
