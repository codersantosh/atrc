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
import { FontStyleList } from './options';

/*Local*/
const FontStyle = ({ value, onChange }) => {
	return (
		<AtrcPanelRow className={classnames('at-m')}>
			<AtrcControlSelect
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
