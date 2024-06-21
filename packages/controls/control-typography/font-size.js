import React from 'react';

/*Attributes Structure
Type Object
{
    "fntSz":"",
    "smFntSz":"",
    "smFntSz":"",
    "lgFntSz":"",
    "xlFntSz":"",
    "xxlFntSz":"",
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';

/* Library */
import classNames from 'classnames';

/* Controls */
import AtrcControlFontSizePicker from '../control-font-size-picker';

/* Molecules */
import AtrcDropdownDevice from '../../molecules/dropdown-device';
import AtrcPanelRow from '../../molecules/panel-row';

/* Utils */
import AtrcAvailableDevices from '../../utils/available-devices';

import {
	AtrcMappingDeviceKey,
	AtrcMappingDeviceKeyValues,
} from '../../utils/object-values-with-devices';

/* Internal */
import { FontSizeList } from './options';

/*Local*/
const RenderTab = ({ device, value, onChange }) => {
	return (
		<AtrcControlFontSizePicker
			fontSizes={FontSizeList()}
			fallbackFontSize={18}
			value={AtrcMappingDeviceKeyValues(value, device, 'fntSz')}
			onChange={(newVal) =>
				onChange(newVal, AtrcMappingDeviceKey(device, 'fntSz'))
			}
		/>
	);
};

const FontSize = ({ value, onChange }) => {
	return (
		<AtrcPanelRow className={classNames('at-m')}>
			<AtrcDropdownDevice
				label={__('Font size', 'atrc-prefix-atrc')}
				tabs={AtrcAvailableDevices()}>
				{(tab) => (
					<RenderTab
						device={tab.name}
						value={value}
						onChange={onChange}
					/>
				)}
			</AtrcDropdownDevice>
		</AtrcPanelRow>
	);
};

export default FontSize;
