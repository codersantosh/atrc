import React from 'react';

/*Attributes Structure
Type Object
{
val = num, 
max = num
}
 * */

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';
import { cloneDeep } from 'lodash';

/*Atoms*/

/* Controls */
import AtrcControlText from '../control-text';

/* Molecules */
import AtrcPanelRow from '../../molecules/panel-row';

/* Prefix */

/*Local*/
const AtrcControlProgress = (props) => {
	const {
		label = '',
		className = '',
		variant = '',
		value = {},
		onChange = () => {},
		...defaultProps
	} = props;

	const { val = 32, max = 100 } = value;

	const setAttr = (type, newVal) => {
		const valueCloned = cloneDeep(value);
		valueCloned[type] = newVal;
		onChange(valueCloned);
	};

	return (
		<>
			<AtrcPanelRow className={classnames('at-m')}>
				<AtrcControlText
					label={__('Progress value', 'atrc-prefix-atrc')}
					help={__(
						'The progress value should be less or equal to the maximum value.',
						'atrc-prefix-atrc'
					)}
					type='number'
					value={val}
					onChange={(newVal) => {
						setAttr('val', newVal);
					}}
				/>
			</AtrcPanelRow>
			<AtrcPanelRow className={classnames('at-m')}>
				<AtrcControlText
					label={__('Progress maximum value', 'atrc-prefix-atrc')}
					type='number'
					value={max}
					onChange={(newVal) => {
						setAttr('max', newVal);
					}}
				/>
			</AtrcPanelRow>
		</>
	);
};
export default AtrcControlProgress;
