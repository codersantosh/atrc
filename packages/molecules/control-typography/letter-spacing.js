/*WordPress*/
import { __ } from '@wordpress/i18n';
import { AtrcGetDeviceValues } from '../../utils';

/*Inbuilt*/
import { AtrcControlUnitDevice, AtrcPanelRow } from '../index';
/*Library*/
import classnames from 'classnames';

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
