/*Attributes Structure
Type Object
{
    "normal":'',
    "hover":'',
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

import { map, cloneDeep } from 'lodash';

/* Controls */
import AtrcControlUnit from '../control-unit';

/* Molecules */
import AtrcPanelTools from '../../molecules/panel-tools';

/* Utils*/

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const RenderTabPanel = ({
	label = __('Enter value', 'atrc-prefix-atrc'),
	disableUnits,
	value,
	onChange,
	...defaultProps
}) => {
	return (
		<AtrcControlUnit
			label={label}
			value={value}
			onChange={onChange}
			disableUnits={disableUnits}
			{...defaultProps}
		/>
	);
};

const AtrcControlUnitTab = (props) => {
	const {
		value = {},
		label = '',
		onChange = () => {},
		disableUnits = false,
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

	const setAttr = (attr, newVal) => {
		const valueCloned = cloneDeep(value);
		valueCloned[attr] = newVal;

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
			onDeselect: () => resetAttr('normal'),
		});
	}

	if (allowedTabs.includes('hover')) {
		AllTabs.push({
			name: 'hover',
			title: __('Hover', 'atrc-prefix-atrc'),
			hasValue: !!value.hover,
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
						value={value && value[tab]}
						disableUnits={disableUnits}
						onChange={(newVal) => setAttr(tab, newVal)}
						tab={tab}
						key={iDx}
						{...defaultProps}
					/>
				))
			}
		</AtrcPanelTools>
	);
};
export default AtrcControlUnitTab;
