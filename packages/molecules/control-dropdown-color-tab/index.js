/*Value Structure

Type Object
{
    "normal":"",
    "hover":"",
}

**/

/*WordPress*/
import { __ } from '@wordpress/i18n';

import { useMemo } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';

import { isEmpty, map } from 'lodash';

/*Inbuilt*/
import { AtrcControlDropdownColor, AtrcPanelTools } from '../index';

/*Inbuilt utils*/

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcControlDropdownColorTab = (props) => {
	const {
		value = {},
		label = '',
		onChange = () => {},
		variant = '',
		className = '',
		allowedTabs = ['normal', 'hover'],
	} = props;

	const setAttr = (newVal, type) => {
		const valueCloned = Object.assign({}, value);
		valueCloned[type] = newVal;
		onChange(valueCloned);
	};

	const hasTabValue = (tab) => {
		if (!value || isEmpty(value)) {
			return false;
		}

		return !!value[tab];
	};

	const resetTab = (tab) => {
		const valueCloned = Object.assign({}, value);
		delete valueCloned[tab];

		onChange(valueCloned);
	};

	const resetAll = () => {
		onChange({});
	};

	const AllTabs = useMemo(() => {
		const tabs = [];
		if (allowedTabs.includes('normal'.toLowerCase())) {
			tabs.push({
				name: 'normal',
				title: __('Normal', 'atrc-prefix-atrc'),
				hasValue: hasTabValue('normal'),
				onDeselect: () => resetTab('normal'),
			});
		}

		if (allowedTabs.includes('hover'.toLowerCase())) {
			tabs.push({
				name: 'hover',
				title: __('Hover', 'atrc-prefix-atrc'),
				hasValue: hasTabValue('hover'),
				onDeselect: () => resetTab('hover'),
			});
		}

		if (allowedTabs.includes('parenthover'.toLowerCase())) {
			tabs.push({
				name: 'parentHover',
				title: __('Parent hover', 'atrc-prefix-atrc'),
				hasValue: hasTabValue('parentHover'),
				onDeselect: () => resetTab('parentHover'),
			});
		}
		return tabs;
	}, []);

	return (
		<AtrcPanelTools
			className={classnames(
				AtrcPrefix('ctrl-range-tab'),
				className,
				variant ? AtrcPrefix('ctrl-range-tab') + '-' + variant : ''
			)}
			label={label}
			resetAll={resetAll}
			allowTabs={true}
			tools={AllTabs}>
			{(activeItems) =>
				map(activeItems, (tab, iDx) => (
					<AtrcControlDropdownColor
						label={''}
						value={value && value[tab]}
						onChange={(newVal) => setAttr(newVal, tab)}
						key={iDx}
					/>
				))
			}
		</AtrcPanelTools>
	);
};
export default AtrcControlDropdownColorTab;
