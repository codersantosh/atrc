/*Value Structure
Type Object
{
    "xs":"",
    "sm":"",
    "md":"",
    "lg":"",
    "xl":"",
    "xxl":"",
}
* */
/*Library*/
import classnames from 'classnames';

import { map } from 'lodash';

/*Controls*/
import AtrcControlSelectDevice from '../control-select-device';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/* Internal */
import ColumnOptions from './options';

/*Local*/
const AtrcControlColumnDevice = (props) => {
	const {
		value = {},
		onChange = () => {},
		variant = '',
		className = '',
		...defaultProps
	} = props;

	return (
		<AtrcControlSelectDevice
			className={classnames(
				AtrcPrefix('ctrl-col-device'),
				className,
				variant ? AtrcPrefix('ctrl-col-device') + '-' + variant : ''
			)}
			options={ColumnOptions()}
			onChange={(newValue) => {
				if (!newValue) {
					onChange(newValue);
				} else {
					const intValues = {};
					map(newValue, function (item, iDx) {
						intValues[iDx] = parseInt(item);
					});
					onChange(intValues);
				}
			}}
			value={
				value || {
					xs: 1,
					sm: 2,
					md: 3,
					lg: 3,
					xl: 4,
					xxl: 4,
				}
			}
			{...defaultProps}
		/>
	);
};
export default AtrcControlColumnDevice;
