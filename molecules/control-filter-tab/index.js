/*Attributes Structure
Type Object
{
========*Normal values*========
    blr : '',
    brgtNess : '',
    ctrs : '',
    grayScl : '',
    hueRot : '',
    inv : '',
    opa : '',
    sart : '',
    sepia : '',

    hSdw : '',
    vSdw : '',
    sdwBlr : '',
    sdwSprd : '',
    sdwCl : ''

========*Hover values*========
    blrHover : '',
    brgtNessHover : '',
    ctrsHover : '',
    graySclHover : '',
    hueRotHover : '',
    invHover : '',
    opaHover : '',
    sartHover : '',
    sepiaHover : '',

    hSdwHover : '',
    vSdwHover : '',
    sdwBlrHover : '',
    sdwSprdHover : '',
    sdwClHover : ''

========*ParentHover values*========
    blrParentHover : '',
    brgtNessParentHover : '',
    ctrsParentHover : '',
    graySclParentHover : '',
    hueRotParentHover : '',
    invParentHover : '',
    opaParentHover : '',
    sartParentHover : '',
    sepiaParentHover : '',

    hSdwParentHover : '',
    vSdwParentHover : '',
    sdwBlrParentHover : '',
    sdwSprdParentHover : '',
    sdwClParentHover : ''
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';

import { useMemo } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';

import { map } from 'lodash';

/*Inbuilt*/
import {
	AtrcControlFilter,
	AtrcPanelTools,
	AtrcControlFilterAllowedKeys,
} from '../index';

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
const RenderTabPanel = (props) => {
	const { value, tab, onChange, ...defaultProps } = props;
	return (
		<AtrcControlFilter
			label={__('Add filter options', 'atrc-prefix-atrc')}
			value={AtrcGetTabValues(value, tab, AtrcControlFilterAllowedKeys)}
			onChange={(newVal) => onChange(newVal, tab)}
			{...defaultProps}
		/>
	);
};

const AtrcControlFilterTab = (props) => {
	const {
		value = {},
		label = '',
		onChange = () => {},
		variant = '',
		className = '',
		allowedTabs = ['normal', 'hover'],
		...defaultProps
	} = props;

	const setTabAttr = (newVal, tab) => {
		onChange(
			AtrcUpdateTabValues(newVal, tab, value, AtrcControlFilterAllowedKeys)
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
					AtrcControlFilterAllowedKeys
				),
				onDeselect: () =>
					onChange(AtrcResetTab('normal', value, AtrcControlFilterAllowedKeys)),
			});
		}

		if (allowedTabs.includes('hover'.toLowerCase())) {
			tabs.push({
				name: 'Hover',
				title: __('Hover', 'atrc-prefix-atrc'),
				hasValue: AtrcHasTabValues(
					'Hover',
					value,
					AtrcControlFilterAllowedKeys
				),
				onDeselect: () =>
					onChange(AtrcResetTab('Hover', value, AtrcControlFilterAllowedKeys)),
			});
		}

		if (allowedTabs.includes('parenthover'.toLowerCase())) {
			tabs.push({
				name: 'ParentHover',
				title: __('Parent hover', 'atrc-prefix-atrc'),
				hasValue: AtrcHasTabValues(
					'ParentHover',
					value,
					AtrcControlFilterAllowedKeys
				),
				onDeselect: () =>
					onChange(
						AtrcResetTab('ParentHover', value, AtrcControlFilterAllowedKeys)
					),
			});
		}
		return tabs;
	}, []);

	return (
		<AtrcPanelTools
			className={classnames(
				AtrcPrefix('ctrl-fl-tab'),
				className,
				variant ? AtrcPrefix('ctrl-fl-tab') + '-' + variant : ''
			)}
			label={label}
			resetAll={() =>
				onChange(AtrcResetTabs(value, AtrcControlFilterAllowedKeys))
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
export default AtrcControlFilterTab;
