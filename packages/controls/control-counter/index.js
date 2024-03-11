/*Attributes Structure
Type Object
{
from = num, 
to = num
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
const AtrcControlCounter = (props) => {
	const {
		label = '',
		className = '',
		variant = '',
		value = {},
		onChange = () => {},
		...defaultProps
	} = props;

	const { frm = 32, to = 100 } = value;

	const setAttr = (type, newVal) => {
		const valueCloned = cloneDeep(value);
		valueCloned[type] = newVal;
		onChange(valueCloned);
	};

	return (
		<>
			<AtrcPanelRow className={classnames('at-m')}>
				<AtrcControlText
					label={__('Initial value', 'atrc-prefix-atrc')}
					type='number'
					value={frm}
					onChange={(newVal) => {
						setAttr('frm', newVal);
					}}
				/>
			</AtrcPanelRow>
			<AtrcPanelRow className={classnames('at-m')}>
				<AtrcControlText
					label={__('Final value', 'atrc-prefix-atrc')}
					type='number'
					value={to}
					onChange={(newVal) => {
						setAttr('to', newVal);
					}}
				/>
			</AtrcPanelRow>
		</>
	);
};
export default AtrcControlCounter;
