/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Inbuilt*/
import { AtrcSelect } from '../../atoms';

import { FontWeightList } from './options';
import AtrcPanelRow from '../panel-row';
import classNames from 'classnames';
/*Library*/

/*Local Components*/
const FontWeight = ({ value, onChange }) => {
	return (
		<AtrcPanelRow className={classNames('at-m')}>
			<AtrcSelect
				label={__('Font weight', 'atrc-prefix-atrc')}
				wrapProps={{
					className: 'at-flx-grw-1',
				}}
				value={value && value.fntWt}
				options={FontWeightList}
				onChange={(newVal) => onChange(newVal, 'fntWt')}
			/>
		</AtrcPanelRow>
	);
};
export default FontWeight;
