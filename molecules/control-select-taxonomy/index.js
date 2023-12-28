/* WordPress*/
import { useMemo } from '@wordpress/element';

import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import { AtrcSelect } from '../../../atrc/atoms';

import { AtrcNotice, AtrcUseTaxonomies } from '../index';

import AtrcPrefix from '../../prefix-vars';

/* Local*/
export function AtrcControlGetTaxonomyOptions(props = {}) {
	const { postType = '', showOptionNone = false, optionNoneValue = '' } = props;

	const taxonomies = AtrcUseTaxonomies({ postType });
	const ExcludeTaxonomies = ['nav_menu'];

	const options = useMemo(() => {
		const baseOptions = [];

		(taxonomies || []).forEach(({ name, slug }) => {
			if (!ExcludeTaxonomies.includes(slug)) {
				baseOptions.push({
					label: name,
					value: slug,
				});
			}
		});

		if (showOptionNone) {
			return [
				{
					value: optionNoneValue,
					label: __('Select', 'atrc-prefix-atrc'),
				},
				...baseOptions,
			];
		}

		return baseOptions;
	}, [taxonomies]);

	return options;
}

/*AtrcControlSelectTaxonomy*/
function AtrcControlSelectTaxonomy(props) {
	const {
		label,
		value,
		onChange,
		showOptionNone = true,
		optionNoneValue = '',
		variant = '',
		className = '',
		postType = '',
		...defaultProps
	} = props;

	const options = AtrcControlGetTaxonomyOptions({
		postType,
		showOptionNone,
		optionNoneValue,
	});

	if (!options || !options.length) {
		return (
			<AtrcNotice
				autoDismiss={false}
				isDismissible={false}>
				{__('No taxonomies found!', 'atrc-prefix-atrc')}
			</AtrcNotice>
		);
	}
	return (
		<AtrcSelect
			label={label}
			className={classnames(
				AtrcPrefix('ctrl-select-taxonomy'),
				className,
				variant ? AtrcPrefix('ctrl-select-taxonomy') + '-' + variant : ''
			)}
			value={value}
			onChange={onChange}
			options={options}
			{...defaultProps}
		/>
	);
}

export default AtrcControlSelectTaxonomy;
