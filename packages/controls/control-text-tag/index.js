import React from 'react';

/*Library*/
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';

/* Controls */
import AtrcControlSelectButton from '../control-select-button';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/* Internal */
import SelectHtmlOptions from './options';

/*Local*/
const AtrcControlTextTag = (props) => {
	const {
		label = __('Text tag', 'atrc-prefix-atrc'),
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
export default AtrcControlTextTag;
