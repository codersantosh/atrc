/*Attributes Structure
Type Object
{
========*Position values*========
    "pos":"",
    "smPos":"",
    "mdPos":"",
    "lgPos":"",
    "xlPos":"",
    "xxlPos":""

========*Position directions values*========
    "t":"",
    "b":"",
    "r":"",
    "l":"",
    "xs":"",

    "smT":"",
    "smB":"",
    "smR":"",
    "smL":"",
    "sm":"",

    "mdT": "",
    "mdB": "",
    "mdR": "",
    "mdL": "",
    "md": "",

    "lgT":"",
    "lgB":"",
    "lgR":"",
    "lgL":"",
    "lg":"",

    "xlT":"",
    "xlB":"",
    "xlR":"",
    "xlL":"",
    "xl":"",

    "xxlT":"",
    "xxlB":"",
    "xxlR":"",
    "xxlL":"",
    "xxl":"",

}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';

import { useMemo } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';

import { isArray, isEmpty, map } from 'lodash';

/*Inbuilt*/
import AtrcPanelTools from '../panel-tools';
import AtrcPanelRow from '../panel-row';
import AtrcControlBoxFourDevice from '../control-box-four-device';
import AtrcControlSelectDevice from '../control-select-device';
import { AtrcControlBoxFourDeviceAllowedKeys } from './../control-box-four-device';

import PositionOptions from './options';

/*Inbuilt Utils*/
import AtrcAvailableDevices from '../../utils/available-devices';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
export const AtrcControlPositionAllowedKeys = [
	'pos',
	'smPos',
	'mdPos',
	'lgPos',
	'xlPos',
	'xxlPos',

	't',
	'b',
	'r',
	'l',
	'xs',

	'smT',
	'smB',
	'smR',
	'smL',
	'sm',

	'mdT',
	'mdB',
	'mdR',
	'mdL',
	'md',

	'lgT',
	'lgB',
	'lgR',
	'lgL',
	'lg',

	'xlT',
	'xlB',
	'xlR',
	'xlL',
	'xl',

	'xxlT',
	'xxlB',
	'xxlR',
	'xxlL',
	'xxl',
];

const AtrcControlPositionDevice = (props) => {
	const {
		className = '',
		variant = '',
		label = '',
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

		return !!(
			value.pos ||
			value.smPos ||
			value.mdPos ||
			value.lgPos ||
			value.xlPos ||
			value.xxlPos
		);
	};

	const hasDirectionValue = () => {
		if (!value || isEmpty(value)) {
			return false;
		}
		return !!(
			value.xs ||
			value.sm ||
			value.md ||
			value.lg ||
			value.xl ||
			value.xxl ||
			value.t ||
			value.r ||
			value.b ||
			value.l ||
			value.smT ||
			value.smR ||
			value.smB ||
			value.smL ||
			value.mdT ||
			value.mdR ||
			value.mdB ||
			value.mdL ||
			value.lgT ||
			value.lgR ||
			value.lgB ||
			value.lgL ||
			value.xlT ||
			value.xlR ||
			value.xlB ||
			value.xlL ||
			value.xxlT ||
			value.xxlR ||
			value.xxlB ||
			value.xxlL
		);
	};

	const doResetPosition = (valueCloned) => {
		delete valueCloned.pos;
		delete valueCloned.smPos;
		delete valueCloned.mdPos;
		delete valueCloned.lgPos;
		delete valueCloned.xlPos;
		delete valueCloned.xxlPos;

		return valueCloned;
	};

	const doResetDirection = (valueCloned) => {
		delete valueCloned.t;
		delete valueCloned.r;
		delete valueCloned.b;
		delete valueCloned.l;
		delete valueCloned.xs;

		delete valueCloned.smT;
		delete valueCloned.smR;
		delete valueCloned.smB;
		delete valueCloned.smL;
		delete valueCloned.sm;

		delete valueCloned.mdT;
		delete valueCloned.mdR;
		delete valueCloned.mdB;
		delete valueCloned.mdL;
		delete valueCloned.md;

		delete valueCloned.lgT;
		delete valueCloned.lgR;
		delete valueCloned.lgB;
		delete valueCloned.lgL;
		delete valueCloned.lg;

		delete valueCloned.xlT;
		delete valueCloned.xlR;
		delete valueCloned.xlB;
		delete valueCloned.xlL;
		delete valueCloned.xl;

		delete valueCloned.xxlT;
		delete valueCloned.xxlR;
		delete valueCloned.xxlB;
		delete valueCloned.xxlL;
		delete valueCloned.xxl;

		return valueCloned;
	};

	const resetPosition = () => {
		const valueCloned = Object.assign({}, value);
		onChange(doResetPosition(valueCloned));
	};

	const resetDirection = () => {
		const valueCloned = Object.assign({}, value);
		onChange(doResetDirection(valueCloned));
	};

	const resetAll = () => {
		onChange({});
	};

	const setPosition = (newVal) => {
		let valueCloned = Object.assign({}, value);
		valueCloned = doResetPosition(valueCloned);

		if (newVal.xs) {
			valueCloned.pos = newVal.xs;
		}
		if (newVal.sm) {
			valueCloned.smPos = newVal.sm;
		}
		if (newVal.md) {
			valueCloned.mdPos = newVal.md;
		}
		if (newVal.lg) {
			valueCloned.lgPos = newVal.lg;
		}
		if (newVal.xl) {
			valueCloned.xlPos = newVal.xl;
		}
		if (newVal.xxl) {
			valueCloned.xxlPos = newVal.xxl;
		}
		onChange(valueCloned);
	};

	const setDirection = (newVal) => {
		let valueCloned = Object.assign({}, value);
		valueCloned = doResetDirection(valueCloned);
		valueCloned = {
			...valueCloned,
			...newVal,
		};
		onChange(valueCloned);
	};
	const AllTabs = useMemo(() => {
		return [
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
	}, []);

	const newValue = {};
	AtrcControlBoxFourDeviceAllowedKeys.forEach((key) => {
		if (Object.prototype.hasOwnProperty.call(value, key)) {
			newValue[key] = value[key];
		} else {
			newValue[key] = null;
		}
	});

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
									value={{
										xs: value && value.pos,
										sm: value && value.smPos,
										md: value && value.mdPos,
										lg: value && value.lgPos,
										xl: value && value.xlPos,
										xxl: value && value.xxlPos,
									}}
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
								value={newValue}
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
