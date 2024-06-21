import React from 'react';

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

/* Controls */
import AtrcControlSelect from '../control-select';

/* Molecules */
import AtrcPanelRow from '../../molecules/panel-row';

/* Internal */
import { TextDecorationList } from './options';

/*Local*/
const TextDecoration = ({ value, onChange }) => {
	return (
		<AtrcPanelRow className={classnames('at-m')}>
			<AtrcControlSelect
				label={__('Text decoration', 'atrc-prefix-atrc')}
				wrapProps={{
					className: 'at-flx-grw-1',
				}}
				value={value && value.txtDec}
				options={TextDecorationList()}
				onChange={(newVal) => onChange(newVal, 'txtDec')}
			/>
		</AtrcPanelRow>
	);
};
export default TextDecoration;
