import React from 'react';

/*Attributes Structure
Type Object
{
    "lnH":"",
    "smLnH":"",
    "mdLnH":"",
    "lgLnH":"",
    "xlLnH":"",
    "xxlLnH":"",
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';

import { useEffect, useState } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';

/* Controls */
import AtrcControlSelect from '../control-select';
import AtrcControlText from '../control-text';
import AtrcControlUnit from '../control-unit';

/* Molecules */
import AtrcPanelRow from '../../molecules/panel-row';

import AtrcDropdownDevice from '../../molecules/dropdown-device';

/* Utils */
import AtrcAvailableDevices from '../../utils/available-devices';

import {
    AtrcMappingDeviceKey,
    AtrcMappingDeviceKeyValues,
} from '../../utils/object-values-with-devices';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const RenderTab = ({ device, disableUnits, value, onChange }) => {
	const [type, setType] = useState(undefined);
	const deviceValue = AtrcMappingDeviceKeyValues(value, device, 'lnH');

	useEffect(() => {
		if (!deviceValue) {
			setType('');
		} else if ('normal' === deviceValue) {
			setType('normal');
		} else if (/^\d+$/.test(deviceValue)) {
			setType('number');
		} else {
			setType('length');
		}
	}, [deviceValue]);

	if (type === undefined) {
		return null;
	}

	return (
		<>
			<AtrcPanelRow className={classnames('at-m')}>
				<AtrcControlSelect
					wrapProps={{
						className: 'at-flx-grw-1',
					}}
					value={type}
					options={[
						{
							label: __('Default', 'atrc-prefix-atrc'),
							value: '',
						},
						{
							label: __('Normal', 'atrc-prefix-atrc'),
							value: 'normal',
						},
						{
							label: __('Number', 'atrc-prefix-atrc'),
							value: 'number',
						},
						{
							label: __('Length unit', 'atrc-prefix-atrc'),
							value: 'length',
						},
					]}
					onChange={(newVal) => {
						switch (newVal) {
							case '':
							case 'normal':
								onChange(newVal, AtrcMappingDeviceKey(device, 'lnH'));
								break;

							case 'number':
								onChange(1, AtrcMappingDeviceKey(device, 'lnH'));
								break;

							case 'length':
								onChange('1px', AtrcMappingDeviceKey(device, 'lnH'));

								break;
						}
					}}
				/>
			</AtrcPanelRow>
			{'number' === type ? (
				<AtrcPanelRow className={classnames('at-m')}>
					<AtrcControlText
						label=''
						value={deviceValue}
						onChange={(newVal) =>
							onChange(newVal, AtrcMappingDeviceKey(device, 'lnH'))
						}
						type='number'
					/>
				</AtrcPanelRow>
			) : null}
			{'length' === type ? (
				<AtrcPanelRow className={classnames('at-m')}>
					<AtrcControlUnit
						label=''
						value={deviceValue}
						onChange={(newVal) =>
							onChange(newVal, AtrcMappingDeviceKey(device, 'lnH'))
						}
						disableUnits={disableUnits}
					/>
				</AtrcPanelRow>
			) : null}
		</>
	);
};

const LineHeight = ({ value, onChange, disableUnits = false }) => {
	return (
		<AtrcPanelRow className={classnames('at-m')}>
			<AtrcDropdownDevice
				className={classnames(AtrcPrefix('typ-ln-h'), 'at-flx-grw-1')}
				label={__('Line height', 'atrc-prefix-atrc')}
				tabs={AtrcAvailableDevices()}>
				{(tab) => (
					<RenderTab
						device={tab.name}
						value={value}
						disableUnits={disableUnits}
						onChange={onChange}
					/>
				)}
			</AtrcDropdownDevice>
		</AtrcPanelRow>
	);
};

export default LineHeight;
