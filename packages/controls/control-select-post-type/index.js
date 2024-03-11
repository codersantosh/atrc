/* WordPress*/
import { useMemo } from '@wordpress/element';

import { __ } from '@wordpress/i18n';

import { store as coreStore } from '@wordpress/core-data';

import { useSelect } from '@wordpress/data';

/*Library*/
import classnames from 'classnames';

/*Controls*/
import AtrcControlSelect from '../control-select';

/* Molecules */
import AtrcNotice from '../../molecules/notice';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/* Local*/
/**
 * Hook that returns whether a specific post type is hierarchical.
 *
 * @param {string} postType The post type to check.
 * @return {boolean} Whether a specific post type is hierarchical.
 */
export function AtrcUseIsPostTypeHierarchical(postType) {
	return useSelect(
		(select) => {
			const type = select(coreStore).getPostType(postType);
			return type?.viewable && type?.hierarchical;
		},
		[postType]
	);
}
const excludedPostTypes = [
	'attachment',
	'gutentor-fonts',
	'wp_template',
	'gutentor-icons',
];

export function AtrcControlGetPostTypeOptions(props = {}) {
	const { tax = '', showOptionNone = false, optionNoneValue = '' } = props;

	const postTypes = useSelect((select) => {
		const { getPostTypes } = select(coreStore);

		const filteredPostTypes = getPostTypes({ per_page: -1 })?.filter(
			({ viewable, slug }) => viewable && !excludedPostTypes.includes(slug)
		);
		return filteredPostTypes;
	}, []);

	const options = useMemo(() => {
		const baseOptions = [];

		(postTypes || []).forEach(({ labels, slug, taxonomies }) => {
			if (!tax) {
				baseOptions.push({
					label: labels.singular_name,
					value: slug,
				});
			} else if (taxonomies.includes(tax)) {
				baseOptions.push({
					label: labels.singular_name,
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
	}, [tax, postTypes, showOptionNone]);

	return options;
}

/*AtrcControlSelectPostType*/
function AtrcControlSelectPostType(props) {
	const {
		label,
		value,
		onChange,
		showOptionNone = true,
		optionNoneValue = '',
		variant = '',
		className = '',
		...defaultProps
	} = props;

	const options = AtrcControlGetPostTypeOptions({
		showOptionNone,
		optionNoneValue,
	});

	if (!options || !options.length) {
		return (
			<AtrcNotice
				autoDismiss={false}
				isDismissible={false}>
				{__('No types found!', 'atrc-prefix-atrc')}
			</AtrcNotice>
		);
	}

	return (
		<AtrcControlSelect
			label={label}
			className={classnames(
				AtrcPrefix('ctrl-select-post-type'),
				className,
				variant ? AtrcPrefix('ctrl-select-post-type') + '-' + variant : ''
			)}
			value={value}
			onChange={onChange}
			options={options}
			{...defaultProps}
		/>
	);
}

export default AtrcControlSelectPostType;
