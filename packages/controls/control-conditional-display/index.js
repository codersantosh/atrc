import React from 'react';

/*Value Structure
Type Object

[
    [
        {
            field:'',
            condition:'',
            value:''
        },
        {
            field:'',
            condition:'',
            value:''
        },
    ],
    [
        {
            field:'',
            condition:'',
            value:''
        },
        {
            field:'',
            condition:'',
            value:''
        },
    ]
]
* and so on*/

/*WordPress*/
import { __, sprintf } from '@wordpress/i18n';

import { useMemo, useState, Fragment } from '@wordpress/element';

/*Library*/
import classNames from 'classnames';

import { isEmpty, map } from 'lodash';

/*Controls*/
import AtrcControlSelect from '../control-select';
import { AtrcControlGetPostTypeOptions } from '../control-select-post-type';
import { AtrcControlGetTaxonomyOptions } from '../control-select-taxonomy';
import AtrcControlSelectPost from '../control-select-post';
import AtrcControlSelectPostType from '../control-select-post-type';
import AtrcControlSelectTaxonomy from '../control-select-taxonomy';
import AtrcControlSelectTerm from '../control-select-term';
import AtrcControlSelectUser from '../control-select-user';

/* Molecules */
import AtrcNotice from '../../molecules/notice';
import AtrcPanelRow from '../../molecules/panel-row';
import AtrcPanelTools from '../../molecules/panel-tools';
import AtrcRepeater from '../../molecules/repeater';
import AtrcRepeaterGroup from '../../molecules/repeater/repeater-group';
import AtrcRepeaterGroupAdd from '../../molecules/repeater/repeater-group-add';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const PostTypeGroup = ({ options }) => {
	if (!options) {
		return null;
	}
	return (
		<optgroup label={__('Post types', 'atrc-prefix-atrc')}>
			{map(options, ({ label, value }) => (
				<option
					key={value}
					value={`&pt&-${value}`}>
					{label}
				</option>
			))}
		</optgroup>
	);
};

const TaxonomyGroup = ({ options }) => {
	if (!options) {
		return null;
	}

	return (
		<optgroup label={__('Taxonomy terms', 'atrc-prefix-atrc')}>
			{map(options, ({ label, value }) => (
				<option
					key={value}
					value={`&tt&-${value}`}>
					{label}
				</option>
			))}
		</optgroup>
	);
};

const SelectSingleConditionValue = ({
	item,
	handleChange,
	groupIndex,
	itemIndex,
	field,
}) => {
	const type1 = ['specific-page'];
	const type2 = ['post-type-archive'];
	const type3 = ['tax-archive'];
	const type4 = ['author-archive'];

	if (!field) {
		return (
			<AtrcPanelRow className={classNames('at-m')}>
				<AtrcControlSelect
					label={__('Value', 'atrc-prefix-atrc')}
					wrapProps={{
						className: 'at-flx-grw-1',
					}}
					value=''
					onChange={() => {}}
					options={[
						{
							value: '',
							label: __('Select field', 'atrc-prefix-atrc'),
						},
					]}
				/>
			</AtrcPanelRow>
		);
	}

	if (type1.includes(field)) {
		return (
			<AtrcPanelRow className={classNames('at-m')}>
				<AtrcControlSelect
					label={__('Value', 'atrc-prefix-atrc')}
					wrapProps={{
						className: 'at-flx-grw-1',
					}}
					value={item.value}
					onChange={(newVal) =>
						handleChange(newVal, 'value', groupIndex, itemIndex)
					}
					options={[
						{
							value: '',
							label: __('Select specific page', 'atrc-prefix-atrc'),
						},
						{
							value: 'is_front_page',
							label: __('Front page', 'atrc-prefix-atrc'),
						},
						{
							value: 'is_home',
							label: __('Home page', 'atrc-prefix-atrc'),
						},
						{
							value: 'is_archive',
							label: __('Any archive page', 'atrc-prefix-atrc'),
						},
						{
							value: 'is_post_type_archive',
							label: __('Any post type archive page', 'atrc-prefix-atrc'),
						},
						{
							value: 'is_tax',
							label: __('Any taxonomy archive page', 'atrc-prefix-atrc'),
						},
						{
							value: 'is_author',
							label: __('Any author page', 'atrc-prefix-atrc'),
						},
						{
							value: 'is_date',
							label: __('Any date-based archive page', 'atrc-prefix-atrc'),
						},
						{
							value: 'is_singular',
							label: __('Any singular page', 'atrc-prefix-atrc'),
						},
						{
							value: 'is_search',
							label: __('Search result page', 'atrc-prefix-atrc'),
						},
						{
							value: 'is_404',
							label: __('404 page', 'atrc-prefix-atrc'),
						},
					]}
				/>
			</AtrcPanelRow>
		);
	}
	if (type2.includes(field)) {
		return (
			<AtrcPanelRow className={classNames('at-m')}>
				<AtrcControlSelectPostType
					label={__('Post type', 'atrc-prefix-atrc')}
					wrapProps={{
						className: 'at-flx-grw-1',
					}}
					value={item.value}
					onChange={(newVal) =>
						handleChange(newVal, 'value', groupIndex, itemIndex)
					}
				/>
			</AtrcPanelRow>
		);
	}

	if (type3.includes(field)) {
		return (
			<AtrcPanelRow className={classNames('at-m')}>
				<AtrcControlSelectTaxonomy
					label={__('Taxonomy', 'atrc-prefix-atrc')}
					wrapProps={{
						className: 'at-flx-grw-1',
					}}
					value={item.value}
					onChange={(newVal) =>
						handleChange(newVal, 'value', groupIndex, itemIndex)
					}
				/>
			</AtrcPanelRow>
		);
	}

	if (type4.includes(field)) {
		return (
			<AtrcPanelRow className={classNames('at-m')}>
				<AtrcControlSelectUser
					label={__('Users', 'atrc-prefix-atrc')}
					wrapProps={{
						className: 'at-flx-grw-1',
					}}
					value={item.value}
					onChange={(newVal) =>
						handleChange(newVal, 'value', groupIndex, itemIndex)
					}
				/>
			</AtrcPanelRow>
		);
	}

	if (field.includes('&pt&-')) {
		return (
			<AtrcPanelRow className={classNames('at-m')}>
				<AtrcControlSelectPost
					label={__('Posts', 'atrc-prefix-atrc')}
					wrapProps={{
						className: 'at-flx-grw-1',
					}}
					value={item.value}
					onChange={(newVal) =>
						handleChange(newVal, 'value', groupIndex, itemIndex)
					}
					postType={field.replace('&pt&-', '')}
				/>
			</AtrcPanelRow>
		);
	}

	if (field.includes('&tt&-')) {
		return (
			<AtrcPanelRow className={classNames('at-m')}>
				<AtrcControlSelectTerm
					wrapProps={{
						className: 'at-flx-grw-1',
					}}
					label={__('Terms', 'atrc-prefix-atrc')}
					value={item.value}
					onChange={(newVal) =>
						handleChange(newVal, 'value', groupIndex, itemIndex)
					}
					tax={field.replace('&tt&-', '')}
				/>
			</AtrcPanelRow>
		);
	}

	if ('user' === field) {
		return (
			<AtrcPanelRow className={classNames('at-m')}>
				<AtrcControlSelect
					label={__('Value', 'atrc-prefix-atrc')}
					wrapProps={{
						className: 'at-flx-grw-1',
					}}
					value={item.value}
					onChange={(newVal) =>
						handleChange(newVal, 'value', groupIndex, itemIndex)
					}
					options={[
						{
							value: '',
							label: __('Select value', 'atrc-prefix-atrc'),
						},
						{
							value: 'is_user_logged_in',
							label: __('Logged in', 'atrc-prefix-atrc'),
						},
					]}
				/>
			</AtrcPanelRow>
		);
	}
};

const SelectSingleCondition = ({
	item,
	handleChange,
	groupIndex,
	itemIndex,
}) => {
	const postOptions = AtrcControlGetPostTypeOptions();
	const taxOptions = AtrcControlGetTaxonomyOptions();

	if (isEmpty(postOptions) && isEmpty(taxOptions)) {
		return null;
	}

	return (
		<AtrcPanelRow className={classNames('at-m')}>
			<AtrcControlSelect
				label={__('Field', 'atrc-prefix-atrc')}
				wrapProps={{
					className: 'at-flx-grw-1',
				}}
				value={item.field}
				onChange={(newVal) =>
					handleChange(newVal, 'field', groupIndex, itemIndex)
				}>
				<option value=''>{__('Select field', 'atrc-prefix-atrc')}</option>
				<option value='specific-page'>
					{__('Site specific page', 'atrc-prefix-atrc')}
				</option>
				<optgroup label={__('Archive pages', 'atrc-prefix-atrc')}>
					<option value='post-type-archive'>
						{__('Post type archive', 'atrc-prefix-atrc')}
					</option>
					<option value='tax-archive'>
						{__('Taxonomy archive', 'atrc-prefix-atrc')}
					</option>
					<option value='author-archive'>
						{__('Author archive', 'atrc-prefix-atrc')}
					</option>
				</optgroup>
				<PostTypeGroup options={postOptions} />
				<TaxonomyGroup options={taxOptions} />
				<optgroup label={__('Users', 'atrc-prefix-atrc')}>
					<option value='user'>{__('User', 'atrc-prefix-atrc')}</option>
				</optgroup>
			</AtrcControlSelect>
		</AtrcPanelRow>
	);
};

const SingleCondition = ({ groupIndex, itemIndex, handleChange, item }) => {
	return (
		<>
			<SelectSingleCondition
				item={item}
				handleChange={handleChange}
				groupIndex={groupIndex}
				itemIndex={itemIndex}
			/>
			<AtrcPanelRow className={classNames('at-m')}>
				<AtrcControlSelect
					label={__('Condition', 'atrc-prefix-atrc')}
					wrapProps={{
						className: 'at-flx-grw-1',
					}}
					value={item.condition}
					onChange={(newVal) =>
						handleChange(newVal, 'condition', groupIndex, itemIndex)
					}
					options={[
						{
							value: '',
							label: __('Select condition', 'atrc-prefix-atrc'),
						},
						{
							value: '==',
							label: __('Equal', 'atrc-prefix-atrc'),
						},
						{
							value: '!=',
							label: __('Not equal', 'atrc-prefix-atrc'),
						},
					]}
				/>
			</AtrcPanelRow>
			<SelectSingleConditionValue
				item={item}
				handleChange={handleChange}
				groupIndex={groupIndex}
				itemIndex={itemIndex}
				field={item.field}
			/>
		</>
	);
};

const AtrcControlConditionalDisplay = (props) => {
	const {
		label = __('Conditional display', 'atrc-prefix-atrc'),
		value = [],
		variant = '',
		className = '',
		onChange = () => {},
	} = props;

	// Initialize the state with an empty array
	const [notice, setNotice] = useState();

	// Function to add a new group
	const addGroup = () => {
		let valueCloned;
		if (!value || !Array.isArray(value)) {
			valueCloned = [];
		} else {
			valueCloned = [...value];
		}
		// Append a new group with a single item to the value array;

		const newValue = [
			...valueCloned,
			[{ field: '', condition: '', value: '' }],
		];
		onChange(newValue);
	};

	// Function to add a new item to a group
	const addItem = (groupIndex) => {
		// Make a copy of the value array
		const updatedGroups = [...value];

		// Append a new item with empty values to the group at the specified idx
		updatedGroups[groupIndex] = [
			...updatedGroups[groupIndex],
			{ field: '', condition: '', value: '' },
		];

		// Set the updated value array as the new state
		onChange(updatedGroups);
	};

	// Function to handle changes to the select fields for an item
	const handleChange = (itemVal, itemName, groupIndex, itemIndex) => {
		// Make a copy of the value array
		const updatedGroups = [...value];

		// Update the value of the corresponding property in the item object
		updatedGroups[groupIndex][itemIndex][itemName] = itemVal;

		// Set the updated value array as the new state
		onChange(updatedGroups);
	};

	// Function to delete a group
	const deleteGroup = (groupIndex) => {
		// Make a copy of the value array
		const updatedGroups = [...value];

		// Remove the group at the specified idx
		updatedGroups.splice(groupIndex, 1);

		//Add notice to user
		setNotice(__('Condition group deleted.', 'atrc-prefix-atrc'));

		// Set the updated value array as the new state
		onChange(updatedGroups);
	};

	// Function to delete an item
	const deleteItem = (groupIndex, itemIndex) => {
		// Make a copy of the value array
		const updatedGroups = [...value];

		// Remove the item at the specified idx from the group
		updatedGroups[groupIndex].splice(itemIndex, 1);

		// Check if the group is now empty
		if (updatedGroups[groupIndex].length === 0) {
			// If the group is empty, delete the group
			updatedGroups.splice(groupIndex, 1);

			//Add notice to user
			setNotice(
				__(
					'With the last condition deleted, the conditional group was too deleted.',
					'atrc-prefix-atrc'
				)
			);
		}

		// Set the updated value array as the new state
		onChange(updatedGroups);
	};

	const ConditionTabs = useMemo(() => {
		return [
			{
				name: 'conditional-display',
				title: label,
				hasValue: !!(value && value.length),
				onDeselect: () => onChange([]),
			},
		];
	}, []);

	return (
		<AtrcPanelTools
			className={classNames(
				AtrcPrefix('ctrl-conditional-d'),
				className,
				variant ? AtrcPrefix('ctrl-conditional-d') + '-' + variant : ''
			)}
			label={label}
			resetAll={() => onChange([])}
			tools={ConditionTabs}>
			{(activeItems) =>
				map(activeItems, (tab, iDx) => (
					<Fragment key={iDx}>
						{notice && (
							<AtrcNotice
								key={tab}
								isDismissible={false}
								autoDismiss={5000}
								onRemove={() => setNotice('')}>
								{notice}
							</AtrcNotice>
						)}
						<AtrcRepeater
							key={tab}
							groups={() =>
								value.length
									? map(value, function (group, groupIndex) {
											return (
												<AtrcRepeaterGroup
													key={groupIndex}
													groupIndex={groupIndex}
													deleteGroup={deleteGroup}
													groupTitle={sprintf(
														// translators: %s: placeholder for idx
														__('Group %d', 'atrc-prefix-atrc'),
														groupIndex + 1
													)}
													deleteTitle={__(
														'Delete condition group',
														'atrc-prefix-atrc'
													)}>
													<AtrcRepeater
														groups={() =>
															map(group, (item, itemIndex) => (
																<AtrcRepeaterGroup
																	key={itemIndex}
																	groupIndex={itemIndex}
																	deleteGroup={(itmIndex) =>
																		deleteItem(groupIndex, itmIndex)
																	}
																	groupTitle={sprintf(
																		// translators: %s: placeholder for idx
																		__('Condition %d', 'atrc-prefix-atrc'),
																		itemIndex + 1
																	)}
																	deleteTitle={__(
																		'Remove condition',
																		'atrc-prefix-atrc'
																	)}>
																	<SingleCondition
																		groupIndex={groupIndex}
																		itemIndex={itemIndex}
																		handleChange={handleChange}
																		item={item}
																	/>
																</AtrcRepeaterGroup>
															))
														}
														addGroup={() => (
															<AtrcRepeaterGroupAdd
																addGroup={() => addItem(groupIndex)}
																tooltipText={__(
																	'Condition item has && (AND) condition',
																	'atrc-prefix-atrc'
																)}
																label={__(
																	'AND Add condition',
																	'atrc-prefix-atrc'
																)}
															/>
														)}
													/>
												</AtrcRepeaterGroup>
											);
									  })
									: null
							}
							addGroup={() => (
								<AtrcRepeaterGroupAdd
									addGroup={addGroup}
									tooltipText={__(
										'Group has || (OR) condition',
										'atrc-prefix-atrc'
									)}
									label={__('OR Add condition group', 'atrc-prefix-atrc')}
								/>
							)}
						/>
					</Fragment>
				))
			}
		</AtrcPanelTools>
	);
};

export default AtrcControlConditionalDisplay;
