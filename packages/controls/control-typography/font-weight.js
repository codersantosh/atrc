/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classNames from 'classnames';

/* Controls */
import AtrcControlSelect from '../control-select';

/* Molecules */
import AtrcPanelRow from '../../molecules/panel-row';

/* Internal */
import { FontWeightList } from './options';

/*Local*/
const FontWeight = ({ value, onChange }) => {
	return (
		<AtrcPanelRow className={classNames('at-m')}>
			<AtrcControlSelect
				label={__('Font weight', 'atrc-prefix-atrc')}
				wrapProps={{
					className: 'at-flx-grw-1',
				}}
				value={value && value.fntWt}
				options={FontWeightList()}
				onChange={(newVal) => onChange(newVal, 'fntWt')}
			/>
		</AtrcPanelRow>
	);
};
export default FontWeight;
