/* WordPress */
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/* Library */
import { map } from 'lodash';
import classnames from 'classnames';

/* Atrc */
import {
	AtrcRepeater,
	AtrcRepeaterGroup,
	AtrcPanelRow,
	AtrcRepeaterGroupAdd,
	AtrcControlText,
	AtrcControlSelect,
	AtrcWrap,
	AtrcWireFrameContentSidebar,
	AtrcPreTemplate1,
	AtrcText,
} from '../../packages';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
	title: 'Molecules/AtrcRepeater',
	component: AtrcWrap,
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
const items = [
	{
		text: 'Hello text',
		select: 'val1',
	},
	{
		text: 'Hello again',
		select: 'val1',
	},
	{
		text: 'Hello again 2',
		select: 'val1',
	},
];

export const Repeater = {
	args: {
		children: (
			<>
				<AtrcRepeater
					label={__('Add slugs', 'atrc-prefix-atrc')}
					groups={() =>
						map(items, (item, itemIndex) => (
							<AtrcRepeaterGroup
								key={`ip-${itemIndex}`}
								groupIndex={itemIndex}
								deleteGroup={(itmIndex) => {
									const updatedSettings = AtrcNestedObjDeleteByKey2({
										settings: exclude,
										key1: 'slugs',
										key2: itemIndex,
									});
									dbUpdateSetting('exclude', updatedSettings);
								}}
								groupTitle={sprintf(
									// translators: %s: placeholder for idx
									__('Slug %d', 'atrc-prefix-atrc'),
									itemIndex + 1
								)}
								deleteTitle={__('Remove item', 'atrc-prefix-atrc')}>
								<AtrcPanelRow>
									<AtrcControlText
										label={__('Text', 'atrc-prefix-atrc')}
										help={__('Any path of the url', 'atrc-prefix-atrc')}
										value={item.text}
										onChange={(newVal) => {
											const updatedSettings = AtrcNestedObjUpdateByKey2({
												settings: exclude,
												key1: 'slugs',
												key2: itemIndex,
												val2: newVal,
											});
											dbUpdateSetting('exclude', updatedSettings);
										}}
									/>
								</AtrcPanelRow>
								<AtrcPanelRow>
									<AtrcControlSelect
										label={__('Select', 'atrc-prefix-atrc')}
										help={__('Any path of the url', 'atrc-prefix-atrc')}
										value={item.select}
										options={[
											{
												label: 'Item 2',
												value: 1,
											},
											{
												label: 'Item 2',
												value: 1,
											},
										]}
										onChange={(newVal) => {
											const updatedSettings = AtrcNestedObjUpdateByKey2({
												settings: exclude,
												key1: 'slugs',
												key2: itemIndex,
												val2: newVal,
											});
											dbUpdateSetting('exclude', updatedSettings);
										}}
									/>
								</AtrcPanelRow>
							</AtrcRepeaterGroup>
						))
					}
					addGroup={() => (
						<AtrcRepeaterGroupAdd
							addGroup={() => {
								const addedSettings = AtrcNestedObjAddByKey1({
									settings: exclude,
									key1: 'slugs',
									val1: '',
								});
								dbUpdateSetting('exclude', addedSettings);
							}}
							tooltipText={__('Add item', 'atrc-prefix-atrc')}
							label={__('Add item', 'atrc-prefix-atrc')}
						/>
					)}
				/>
			</>
		),
	},
};

export const RepeaterWithSortable = () => {
	const [value, setValue] = useState([
		{
			text: 'Hello text',
			select: 'val1',
		},
		{
			text: 'Hello again',
			select: 'val1',
		},
		{
			text: 'Hello again 2',
			select: 'val1',
		},
	]);

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	return (
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcRepeater
						label={__('Add slugs', 'atrc-prefix-atrc')}
						isSortable={true}
						value={value}
						onChange={setValue}
						groups={() =>
							map(value, (item, itemIndex) => (
								<AtrcRepeaterGroup
									isSortable={true}
									useDragHandle={true}
									key={`ip-${itemIndex}`}
									groupIndex={itemIndex}
									deleteGroup={(itmIndex) => {
										const updatedSettings = AtrcNestedObjDeleteByKey2({
											settings: exclude,
											key1: 'slugs',
											key2: itemIndex,
										});
										dbUpdateSetting('exclude', updatedSettings);
									}}
									groupTitle={sprintf(
										// translators: %s: placeholder for idx
										__('Slug %d', 'atrc-prefix-atrc'),
										itemIndex + 1
									)}
									deleteTitle={__('Remove item', 'atrc-prefix-atrc')}>
									<AtrcPanelRow>
										<AtrcControlText
											label={__('Text', 'atrc-prefix-atrc')}
											help={__('Any path of the url', 'atrc-prefix-atrc')}
											value={item.text}
											onChange={(newVal) => {
												const updatedSettings = AtrcNestedObjUpdateByKey2({
													settings: exclude,
													key1: 'slugs',
													key2: itemIndex,
													val2: newVal,
												});
												dbUpdateSetting('exclude', updatedSettings);
											}}
										/>
									</AtrcPanelRow>
									<AtrcPanelRow>
										<AtrcControlSelect
											label={__('Select', 'atrc-prefix-atrc')}
											help={__('Any path of the url', 'atrc-prefix-atrc')}
											value={item.select}
											options={[
												{
													label: 'Item 2',
													value: 1,
												},
												{
													label: 'Item 2',
													value: 1,
												},
											]}
											onChange={(newVal) => {
												const updatedSettings = AtrcNestedObjUpdateByKey2({
													settings: exclude,
													key1: 'slugs',
													key2: itemIndex,
													val2: newVal,
												});
												dbUpdateSetting('exclude', updatedSettings);
											}}
										/>
									</AtrcPanelRow>
								</AtrcRepeaterGroup>
							))
						}
						addGroup={() => (
							<AtrcRepeaterGroupAdd
								addGroup={() => {
									const addedSettings = AtrcNestedObjAddByKey1({
										settings: exclude,
										key1: 'slugs',
										val1: '',
									});
									dbUpdateSetting('exclude', addedSettings);
								}}
								tooltipText={__('Add item', 'atrc-prefix-atrc')}
								label={__('Add item', 'atrc-prefix-atrc')}
							/>
						)}
					/>
				</>
			}
			renderSidebar={
				<>
					<AtrcText
						tag='h3'
						className={classnames('at-m')}>
						{__('Value', 'atrc-prefix-atrc')}
					</AtrcText>
					<AtrcPreTemplate1 content={JSON.stringify(value, null, 2)} />
				</>
			}
			sidebarProps={{ sidebarCol: 'at-col-6' }}
			contentProps={{ contentCol: 'at-col-6' }}
		/>
	);
};
