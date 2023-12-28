/*Attributes Structure
Type object{
    xs:'',
    sm:'',
    md:'',
    lg:'',
    xl:'',
    xxl:'',
}
**/

/*WordPress*/
import { __, sprintf } from '@wordpress/i18n';

import { useMemo } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';

import { isArray, isEmpty, map } from 'lodash';

/*Inbuilt*/
import { AtrcToggle } from '../../atoms';

import { AtrcPanelRow, AtrcPanelTools } from '../index';

/*Inbuilt Utils*/
import { AtrcAvailableDevices } from '../../utils';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const getNewVal = (value, key) => {
	if (!value) {
		return true;
	}
	return !value[key];
};

const RenderToggle = ({ value, onChange, allowedDevices }) => {
	const Devices = () => {
		if (isArray(allowedDevices)) {
			return allowedDevices;
		}
		return AtrcAvailableDevices;
	};

	const dev = Devices();

	return dev.map(function (tab, iDx) {
		if (!tab.on) {
			return false;
		}
		return (
			<AtrcPanelRow
				className={classnames('at-m')}
				key={iDx}>
				<AtrcToggle
					key={tab.name}
					label={sprintf(
						// translators: %s: placeholder for title
						__('Hide on %s.', 'atrc-prefix-atrc'),
						tab.title
					)}
					checked={value && value[tab.name]}
					onChange={() => onChange(getNewVal(value, tab.name), tab.name)}
				/>
			</AtrcPanelRow>
		);
	});
};

const AtrcControlDeviceDisplay = (props) => {
	const {
		label = '',
		className = '',
		variant = '',
		value = {},
		onChange = () => {},
		allowedDevices = true,
		...defaultProps
	} = props;

	const setAttr = (newVal, type) => {
		const valueCloned = Object.assign({}, value);
		valueCloned[type] = newVal;
		onChange(valueCloned);
	};

	const DisplayTabs = useMemo(() => {
		return [
			{
				name: 'display',
				title: label,
				hasValue: !isEmpty(value),
				onDeselect: () => onChange({}),
			},
		];
	}, []);

	/* Return null since no device */
	if (!allowedDevices) {
		return null;
	}

	return (
		<AtrcPanelTools
			className={classnames(
				AtrcPrefix('ctrl-device-d'),
				className,
				variant ? AtrcPrefix('ctrl-device-d') + '-' + variant : ''
			)}
			label={label}
			resetAll={() => onChange({})}
			tools={DisplayTabs}
			{...defaultProps}>
			{(activeItems) =>
				map(activeItems, (tab, iDx) => (
					<RenderToggle
						key={iDx}
						value={value}
						onChange={setAttr}
						allowedDevices={allowedDevices}
					/>
				))
			}
		</AtrcPanelTools>
	);
};
export default AtrcControlDeviceDisplay;
