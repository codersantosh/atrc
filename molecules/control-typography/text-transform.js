/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Inbuilt*/
import { AtrcControlSelectButton, AtrcPanelRow } from '../index';

import { TextTransformList } from './options';
/*Library*/
import classnames from 'classnames';
/*Local Components*/
const TextTransform = ({ value, onChange }) => {
	return (
		<AtrcPanelRow className={classnames('at-m')}>
			<AtrcControlSelectButton
				label={__('Text transform', 'atrc-prefix-atrc')}
				value={value && value.txtTf}
				options={TextTransformList}
				onChange={(newVal) => onChange(newVal, 'txtTf')}
				allowReset={true}
			/>
		</AtrcPanelRow>
	);
};
export default TextTransform;
