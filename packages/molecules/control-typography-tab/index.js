/*Value Structure
Type Object
{
========*Normal values*========
    "fntSz":"",
    "smFntSz":"",
    "mdFntSz":"",
    "lgFntSz":"",
    "xlFntSz":"",
    "xxlFntSz":"",

    "fntFam": "",

    "fntWt": "",

    "fntSty": "",

    "txtTf": "",

    "txtDec": "",

    "lnH":"",
    "smLnH":"",
    "mdLnH":"",
    "lgLnH":"",
    "xlLnH":"",
    "xxlLnH":"",

    "ltrSp":"",
    "smLtrSp":"",
    "mdLtrSp":"",
    "lgLtrSp":"",
    "xlLtrSp":"",
    "xxlLtrSp":"",
    
========*Hover values*========
    "fntSzHover":"",
    "smFntSzHover":"",
    "mdFntSzHover":"",
    "lgFntSzHover":"",
    "xlFntSzHover":"",
    "xxlFntSzHover":"",

    "fntFamHover": "",
    "fntWtHover": "",
    "fntStyHover": "",
    "txtTfHover": "",
    "txtDecHover": "",

    "lnHHover":"",
    "smLnHHover":"",
    "mdLnHHover":"",
    "lgLnHHover":"",
    "xlLnHHover":"",
    "xxlLnHHover":"",

    "ltrSpHover":"",
    "smLtrSpHover":"",
    "mdLtrSpHover":"",
    "lgLtrSpHover":"",
    "xlLtrSpHover":"",
    "xxlLtrSpHover":"",

}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';

import { useMemo } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';

import { map } from 'lodash';

/*Inbuilt*/
import { AtrcPanelTools, AtrcControlTypography } from '../index';

/*Inbuilt utils*/
import {
	AtrcGetTabValues,
	AtrcUpdateTabValues,
	AtrcHasTabValues,
	AtrcResetTab,
	AtrcResetTabs,
} from '../../utils';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
import { AtrcControlTypographyAllowedKeys } from './../control-typography/index';

const RenderTabPanel = (props) => {
	const { value, tab, onChange, ...defaultProps } = props;

	return (
		<AtrcControlTypography
			label={__('Add typography options', 'atrc-prefix-atrc')}
			value={AtrcGetTabValues(value, tab, AtrcControlTypographyAllowedKeys)}
			onChange={(newVal) => onChange(newVal, tab)}
			{...defaultProps}
		/>
	);
};

const AtrcControlTypographyTab = (props) => {
	const {
		value,
		label,
		onChange = () => {},
		variant = '',
		className = '',
		allowedTabs = ['normal', 'hover'],
		...defaultProps
	} = props;

	const setTabAttr = (newVal, tab) => {
		onChange(
			AtrcUpdateTabValues(newVal, tab, value, AtrcControlTypographyAllowedKeys)
		);
	};

	const AllTabs = useMemo(() => {
		const tabs = [];
		if (allowedTabs.includes('normal'.toLowerCase())) {
			tabs.push({
				name: 'normal',
				title: __('Normal', 'atrc-prefix-atrc'),
				hasValue: AtrcHasTabValues(
					'normal',
					value,
					AtrcControlTypographyAllowedKeys
				),
				onDeselect: () =>
					onChange(
						AtrcResetTab('normal', value, AtrcControlTypographyAllowedKeys)
					),
			});
		}

		if (allowedTabs.includes('hover'.toLowerCase())) {
			tabs.push({
				name: 'Hover',
				title: __('Hover', 'atrc-prefix-atrc'),
				hasValue: AtrcHasTabValues(
					'Hover',
					value,
					AtrcControlTypographyAllowedKeys
				),
				onDeselect: () =>
					onChange(
						AtrcResetTab('Hover', value, AtrcControlTypographyAllowedKeys)
					),
			});
		}

		if (allowedTabs.includes('parenthover'.toLowerCase())) {
			tabs.push({
				name: 'ParentHover',
				title: __('Parent hover', 'atrc-prefix-atrc'),
				hasValue: AtrcHasTabValues(
					'ParentHover',
					value,
					AtrcControlTypographyAllowedKeys
				),
				onDeselect: () =>
					onChange(
						AtrcResetTab('ParentHover', value, AtrcControlTypographyAllowedKeys)
					),
			});
		}
		return tabs;
	}, []);

	return (
		<AtrcPanelTools
			className={classnames(
				AtrcPrefix('ctrl-typ-tab'),
				className,
				variant ? AtrcPrefix('ctrl-typ-tab') + '-' + variant : ''
			)}
			label={label}
			resetAll={() =>
				onChange(AtrcResetTabs(value, AtrcControlTypographyAllowedKeys))
			}
			allowTabs={true}
			tools={AllTabs}>
			{(activeItems) =>
				map(activeItems, (tab, iDx) => (
					<RenderTabPanel
						value={value}
						onChange={(newVal) => setTabAttr(newVal, tab)}
						tab={tab}
						key={iDx}
						{...defaultProps}
					/>
				))
			}
		</AtrcPanelTools>
	);
};
export default AtrcControlTypographyTab;
