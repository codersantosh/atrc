/*Attributes Structure
Type Object
{
	't',
	'b',
	'r',
	'l',

    "tHover":"",
    "bHover":"",
    "rHover":"",
    "lHover":"",
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

import { map, cloneDeep } from 'lodash';

/* Controls */
import AtrcControlBoxFour, {
	AtrcControlBoxFourAllowedKeys,
} from '../control-box-four';

/* Molecules */
import AtrcPanelTools from '../../molecules/panel-tools';

/* Utils*/
import {
	AtrcGetTabValues,
	AtrcHasTabValues,
	AtrcUpdateTabValues,
} from '../../utils/object-values-with-allowed-keys-and-tabs';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const RenderTabPanel = ({
	label = __('Enter value', 'atrc-prefix-atrc'),
	value,
	tab,
	onChange,
	...defaultProps
}) => {
	return (
		<AtrcControlBoxFour
			label={label}
			value={AtrcGetTabValues(value, tab, AtrcControlBoxFourAllowedKeys)}
			onChange={onChange}
			{...defaultProps}
		/>
	);
};

const AtrcControlBoxFourTab = (props) => {
	const {
		value = {},
		label = '',
		onChange = () => {},
		variant = '',
		className = '',
		allowedTabs = ['normal', 'hover'],
		...defaultProps
	} = props;

	const resetAttr = (attr) => {
		const valueCloned = cloneDeep(value);
		delete valueCloned[attr];

		onChange(valueCloned);
	};

	const setTabAttr = (tab, newVal) => {
		onChange(
			AtrcUpdateTabValues(newVal, tab, value, AtrcControlBoxFourAllowedKeys)
		);
	};

	const resetAll = () => {
		onChange({});
	};

	const AllTabs = [];
	if (allowedTabs.includes('normal')) {
		AllTabs.push({
			name: 'normal',
			title: __('Normal', 'atrc-prefix-atrc'),
			hasValue: AtrcHasTabValues(
				'normal',
				value,
				AtrcControlBoxFourAllowedKeys
			),
			onDeselect: () => resetAttr('normal'),
		});
	}

	if (allowedTabs.includes('hover')) {
		AllTabs.push({
			name: 'hover',
			title: __('Hover', 'atrc-prefix-atrc'),
			hasValue: AtrcHasTabValues('hover', value, AtrcControlBoxFourAllowedKeys),
			onDeselect: () => resetAttr('hover'),
		});
	}

	return (
		<AtrcPanelTools
			className={classnames(
				AtrcPrefix('ctrl-unit-tab'),
				className,
				variant ? AtrcPrefix('ctrl-unit-tab') + '-' + variant : ''
			)}
			label={label}
			rresetAll={() => resetAll()}
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
export default AtrcControlBoxFourTab;
