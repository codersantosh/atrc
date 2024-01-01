/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Inbuilt*/
import AtrcSelect from '../../atoms/select';

import { FontStyleList } from './options';
import AtrcPanelRow from '../panel-row';
/*Library*/
import classnames from 'classnames';
/*Local Components*/
const FontStyle = ({ value, onChange }) => {
	return (
		<AtrcPanelRow className={classnames('at-m')}>
			<AtrcSelect
				label={__('Font style', 'atrc-prefix-atrc')}
				wrapProps={{
					className: 'at-flx-grw-1',
				}}
				value={value && value.fntSty}
				options={FontStyleList()}
				onChange={(newVal) => onChange(newVal, 'fntSty')}
			/>
		</AtrcPanelRow>
	);
};
export default FontStyle;
