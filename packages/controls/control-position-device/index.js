/*Attributes Structure
Type Object
{
========*Position values*========
    "xsPos":"",
    "smPos":"",
    "mdPos":"",
    "lgPos":"",
    "xlPos":"",
    "xxlPos":""

========*Position directions values*========
    "xsT":"",
    "xsB":"",
    "xsR":"",
    "xsL":"",

    "smT":"",
    "smB":"",
    "smR":"",
    "smL":"",

    "mdT": "",
    "mdB": "",
    "mdR": "",
    "mdL": "",

    "lgT":"",
    "lgB":"",
    "lgR":"",
    "lgL":"",

    "xlT":"",
    "xlB":"",
    "xlR":"",
    "xlL":"",

    "xxlT":"",
    "xxlB":"",
    "xxlR":"",
    "xxlL":"",

}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

import { isArray, isEmpty, map, cloneDeep } from 'lodash';

/*Molecules*/
import AtrcPanelTools from '../../molecules/panel-tools';
import AtrcPanelRow from '../../molecules/panel-row';

/* Controls */
import AtrcControlBoxFourDevice from '../control-box-four-device';
import AtrcControlSelectDevice from '../control-select-device';
import { AtrcControlBoxFourDeviceAllowedKeys } from '../control-box-four-device';

/*Utils*/
import AtrcAvailableDevices from '../../utils/available-devices';
import {
	AtrcGetDeviceValues,
	AtrcHasDeviceValues,
	AtrcResetDevices,
	AtrcSetDeviceValues,
} from '../../utils/object-values-with-devices';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/* Internal */
import PositionOptions from './options';

/*Local*/
const getPositionDirectionValue = (value) => {
	const newValue = {};
	AtrcControlBoxFourDeviceAllowedKeys.forEach((key) => {
		if (Object.prototype.hasOwnProperty.call(value, key)) {
			newValue[key] = value[key];
		}
	});
	return newValue;
};

export const AtrcControlPositionAllowedKeys = [
	'xsPos',
	'smPos',
	'mdPos',
	'lgPos',
	'xlPos',
	'xxlPos',

	'xsT',
	'xsB',
	'xsR',
	'xsL',

	'smT',
	'smB',
	'smR',
	'smL',

	'mdT',
	'mdB',
	'mdR',
	'mdL',

	'lgT',
	'lgB',
	'lgR',
	'lgL',

	'xlT',
	'xlB',
	'xlR',
	'xlL',

	'xxlT',
	'xxlB',
	'xxlR',
	'xxlL',
];

const AtrcControlPositionDevice = (props) => {
	const {
		className = '',
		variant = '',
		label = __('Position', 'atrc-prefix-atrc'),
		value = {},
		onChange = () => {},
		allowedDevices = true,
		boxFourProps = {},
		...defaultProps
	} = props;

	const hasPositionValue = () => {
		if (!value || isEmpty(value)) {
			return false;
		}

		return AtrcHasDeviceValues(value, 'pos');
	};

	const hasDirectionValue = () => {
		if (!value || isEmpty(value)) {
			return false;
		}
		return (
			AtrcHasDeviceValues(value, 't') ||
			AtrcHasDeviceValues(value, 'r') ||
			AtrcHasDeviceValues(value, 'b') ||
			AtrcHasDeviceValues(value, 'l')
		);
	};

	const doResetPosition = (valueCloned) => {
		return AtrcResetDevices(valueCloned, 'pos');
	};

	const doResetDirection = (valueCloned) => {
		valueCloned = AtrcResetDevices(valueCloned, 't');
		valueCloned = AtrcResetDevices(valueCloned, 'r');
		valueCloned = AtrcResetDevices(valueCloned, 'b');
		valueCloned = AtrcResetDevices(valueCloned, 'l');

		return valueCloned;
	};

	const resetPosition = () => {
		const valueCloned = cloneDeep(value);
		onChange(doResetPosition(valueCloned));
	};

	const resetDirection = () => {
		const valueCloned = cloneDeep(value);

		onChange(doResetDirection(valueCloned));
	};

	const resetAll = () => {
		onChange({});
	};

	const setPosition = (newVal) => {
		let valueCloned = cloneDeep(value);
		if (!valueCloned) {
			valueCloned = {};
		}
		valueCloned = doResetPosition(valueCloned);

		const posNewVal = AtrcSetDeviceValues(newVal, 'pos');
		valueCloned = {
			...valueCloned,
			...posNewVal,
		};
		onChange(valueCloned);
	};

	const setDirection = (newVal) => {
		let valueCloned = cloneDeep(value);

		valueCloned = doResetDirection(valueCloned);
		valueCloned = {
			...valueCloned,
			...newVal,
		};
		onChange(valueCloned);
	};

	const AllTabs = [
		{
			name: 'pos',
			title: __('Position', 'atrc-prefix-atrc'),
			hasValue: hasPositionValue(),
			onDeselect: () => resetPosition(),
		},
		{
			name: 'dir',
			title: __('Position direction', 'atrc-prefix-atrc'),
			hasValue: hasDirectionValue(),
			onDeselect: () => resetDirection(),
		},
	];

	/* Return null since no device */
	if (!allowedDevices) {
		return null;
	}

	const Devices = () => {
		if (isArray(allowedDevices)) {
			return allowedDevices;
		}
		return AtrcAvailableDevices();
	};

	return (
		<AtrcPanelTools
			className={classnames(
				AtrcPrefix('ctrl-pos-device'),
				className,
				variant ? AtrcPrefix('ctrl-pos-device') + '-' + variant : ''
			)}
			label={label}
			resetAll={resetAll}
			tools={AllTabs}
			{...defaultProps}>
			{(activeItems) =>
				map(activeItems, (tab, iDx) => {
					if ('pos' === tab) {
						return (
							<AtrcPanelRow
								className={classnames('at-m')}
								key={iDx}>
								<AtrcControlSelectDevice
									className={classnames('at-flx-grw-1')}
									label={__('Position', 'atrc-prefix-atrc')}
									options={PositionOptions()}
									value={AtrcGetDeviceValues(value, tab)}
									onChange={setPosition}
									allowedDevices={Devices()}
								/>
							</AtrcPanelRow>
						);
					}
					/* No boxFourProps, it is needed as object */
					return (
						<AtrcPanelRow
							className={classnames('at-m')}
							key={iDx}>
							<AtrcControlBoxFourDevice
								label={__('Position direction', 'atrc-prefix-atrc')}
								className={classnames(
									AtrcPrefix('ctrl-pos'),
									'at-flx-grw-1',
									className,
									variant ? AtrcPrefix('ctrl-pos') + '-' + variant : ''
								)}
								value={getPositionDirectionValue(value)}
								onChange={setDirection}
								allowedDevices={Devices()}
								boxFourProps={boxFourProps}
							/>
						</AtrcPanelRow>
					);
				})
			}
		</AtrcPanelTools>
	);
};
export default AtrcControlPositionDevice;
