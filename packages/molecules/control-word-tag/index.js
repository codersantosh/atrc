/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import { AtrcControlSelectButton } from '../index';

import SelectHtmlOptions from './options';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcControlWordTag = (props) => {
	const {
		label = '',
		className = '',
		variant = '',
		value = '',
		options,
		onChange,
		...defaultProps
	} = props;

	const SelectOptions = () => {
		if (options && options.length) {
			return options;
		}
		return SelectHtmlOptions;
	};

	return (
		<AtrcControlSelectButton
			className={classnames(
				AtrcPrefix('ctrl-txt-tag'),
				className,
				variant ? AtrcPrefix('ctrl-txt-tag') + '-' + variant : ''
			)}
			label={label}
			options={SelectOptions()}
			value={value}
			onChange={onChange}
			defaultValue={'p'}
			{...defaultProps}
		/>
	);
};
export default AtrcControlWordTag;
