/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Inbuilt*/
import { AtrcSelect } from '../../atoms';

import { TextDecorationList } from './options';
import AtrcPanelRow from '../panel-row';

/*Library*/
import classnames from 'classnames';

/*Local Components*/
const TextDecoration = ({ value, onChange }) => {
	return (
		<AtrcPanelRow className={classnames('at-m')}>
			<AtrcSelect
				label={__('Text decoration', 'atrc-prefix-atrc')}
				wrapProps={{
					className: 'at-flx-grw-1',
				}}
				value={value && value.txtDec}
				options={TextDecorationList}
				onChange={(newVal) => onChange(newVal, 'txtDec')}
			/>
		</AtrcPanelRow>
	);
};
export default TextDecoration;
