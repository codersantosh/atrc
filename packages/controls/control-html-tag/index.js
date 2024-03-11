/* WordPress */
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

/*Controls*/
import AtrcControlSelect from '../control-select';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/* Internal */
import SelectHtmlOptions from './options';

/*Local*/
const AtrcControlHtmlTag = (props) => {
	const {
		label = __('HTML Tag', 'atrc-prefix-atrc'),
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
		return SelectHtmlOptions();
	};

	return (
		<AtrcControlSelect
			label={label}
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
