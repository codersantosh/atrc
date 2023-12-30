/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPanelRow from '../panel-row';
import AtrcControlUnitDevice from '../control-unit-device';

import { AtrcGetDeviceValues } from '../../utils/object-values-with-devices';

/*Local Components*/
const LetterSpacing = ({ value, onChange, disableUnits = false }) => {
	return (
		<AtrcPanelRow className={classnames('at-m')}>
			<AtrcControlUnitDevice
				label={__('Letter spacing', 'atrc-prefix-atrc')}
				value={AtrcGetDeviceValues(value, 'ltrSp')}
				disableUnits={disableUnits}
				onChange={onChange}
			/>
		</AtrcPanelRow>
	);
};

export default LetterSpacing;
