import React from 'react';

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

/* Molecules */
import AtrcPanelRow from '../../molecules/panel-row';

/* Controls */
import AtrcControlSelectButton from '../control-select-button';

/* Internal */
import { TextTransformList } from './options';

/*Local*/
const TextTransform = ({ value, onChange }) => {
	return (
		<AtrcPanelRow className={classnames('at-m')}>
			<AtrcControlSelectButton
				label={__('Text transform', 'atrc-prefix-atrc')}
				value={value && value.txtTf}
				options={TextTransformList()}
				onChange={(newVal) => onChange(newVal, 'txtTf')}
				allowReset={true}
			/>
		</AtrcPanelRow>
	);
};
export default TextTransform;
