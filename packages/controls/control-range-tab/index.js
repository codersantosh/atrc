/*Attributes Structure
Type Object
{
    "normal":"",
    "hover":"",
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

import { map, cloneDeep } from 'lodash';

/*Controls*/
import AtrcControlRange from '../control-range';

/* Molecules */
import AtrcPanelTools from '../../molecules/panel-tools';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcControlRangeTab = (props) => {
	const {
		value = {},
		label = '',
		onChange = () => {},
		variant = '',
		className = '',
		allowedTabs = ['normal', 'hover'],
		inputProps = {},
	} = props;

	const setAttr = (type, newVal) => {
		const valueCloned = cloneDeep(value);

		valueCloned[type] = newVal;
		onChange(valueCloned);
	};

	const resetTab = (tab) => {
		const valueCloned = cloneDeep(value);

		delete valueCloned[tab];

		onChange(valueCloned);
	};

	const resetAll = () => {
		onChange({});
	};

	const AllTabs = [];
	if (allowedTabs.includes('normal')) {
		AllTabs.push({
			name: 'normal',
			title: __('Normal', 'atrc-prefix-atrc'),
			hasValue: !!value.normal,
			onDeselect: () => resetTab('normal'),
		});
	}

	if (allowedTabs.includes('hover')) {
		AllTabs.push({
			name: 'hover',
			title: __('Hover', 'atrc-prefix-atrc'),
			hasValue: !!value.hover,
			onDeselect: () => resetTab('hover'),
		});
	}

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
					<AtrcControlRange
						{...inputProps}
						label={__('Enter value', 'atrc-prefix-atrc')}
						value={value && value[tab]}
						onChange={(newVal) => setAttr(tab, newVal)}
						key={iDx}
					/>
				))
			}
		</AtrcPanelTools>
	);
};
export default AtrcControlRangeTab;
