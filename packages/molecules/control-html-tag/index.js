/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcSelect from '../../atoms/select';

import SelectHtmlOptions from './options';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcControlHtmlTag = (props) => {
	const {
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
		<AtrcSelect
			className={classnames(
				AtrcPrefix('html-tag'),
				className,
				variant ? AtrcPrefix('html-tag') + '-' + variant : ''
			)}
			options={SelectOptions()}
			value={value}
			onChange={onChange}
			allowReset={'div' !== value}
			{...defaultProps}
		/>
	);
};
export default AtrcControlHtmlTag;
