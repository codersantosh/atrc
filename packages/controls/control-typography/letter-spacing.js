import React from 'react';

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classNames from 'classnames';

/* Controls */
import AtrcControlUnitDevice from '../control-unit-device';

/* Molecules */

/* Utils */
import { AtrcGetDeviceValues } from '../../utils/object-values-with-devices';

/*Local*/
const LetterSpacing = ({ value, onChange, disableUnits = false }) => {
	return (
		<AtrcControlUnitDevice
			className={classNames('at-flx-grw-1')}
			label={__('Letter spacing', 'atrc-prefix-atrc')}
			value={AtrcGetDeviceValues(value, 'ltrSp')}
			disableUnits={disableUnits}
			onChange={onChange}
		/>
	);
};

export default LetterSpacing;
