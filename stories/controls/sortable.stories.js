/* WordPress */
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/* Library */
import classnames from 'classnames';

/* Atrc */
import {
	AtrcControlSortable,
	AtrcText,
	AtrcWireFrameContentSidebar,
	AtrcPreTemplate1,
	AtrcControlCheckbox,
	AtrcPanelRow,
	AtrcControlText,
	AtrcControlSelect,
} from '../../packages';

/* Local */
export default {
	title: 'Controls/AtrcControlSortable',
};

/* Boundary */
export const Sortable = () => {
	const [settings, setSettings] = useState(['hello1', 'hello2']);

	return (
		<>
			<AtrcWireFrameContentSidebar
				renderContent={
					<>
						<AtrcControlSortable
							label={__('Sortable', 'atrc-prefix-atrc')}
							onChange={setSettings}
							value={settings}
							items={[
								{
									value: 'hello1',
									children: 'hello1',
								},
								{
									value: 'hello2',
									children: 'hello2',
								},
							]}
						/>
					</>
				}
				renderSidebar={
					<>
						<AtrcText
							tag='h3'
							className={classnames('at-m')}>
							{__('Values', 'atrc-prefix-atrc')}
						</AtrcText>
						<AtrcPreTemplate1 content={JSON.stringify(settings, null, 2)} />
					</>
				}
				sidebarProps={{ sidebarCol: 'at-col-6' }}
				contentProps={{ contentCol: 'at-col-6' }}
			/>
		</>
	);
};

export const SortableWithCheckbox = () => {
	const [settings, setSettings] = useState(['hello1', 'hello2']);
	const [hello1, setHello1] = useState(false);
	const [hello2, setHello2] = useState(false);
	const [item, setItem] = useState({});

	return (
		<>
			<AtrcWireFrameContentSidebar
				renderContent={
					<>
						<AtrcControlSortable
							label={__('Sortable with checkbox', 'atrc-prefix-atrc')}
							onChange={setSettings}
							value={settings}
							items={[
								{
									value: 'hello1',
									children: (
										<AtrcControlCheckbox
											label={__('Site title', 'atrc-prefix-atrc')}
											checked={hello1}
											onChange={setHello1}
										/>
									),
								},
								{
									value: 'hello2',
									children: (
										<>
											<AtrcPanelRow>
												<AtrcControlText
													label={__('Text', 'atrc-prefix-atrc')}
													help={__('Any path of the url', 'atrc-prefix-atrc')}
													value={item.text}
													onChange={(newVal) => {}}
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
													onChange={(newVal) => {}}
												/>
											</AtrcPanelRow>
										</>
									),
								},
							]}
						/>
					</>
				}
				renderSidebar={
					<>
						<AtrcText
							tag='h3'
							className={classnames('at-m')}>
							{__('Values', 'atrc-prefix-atrc')}
						</AtrcText>
						<AtrcPreTemplate1 content={JSON.stringify(settings, null, 2)} />
					</>
				}
				sidebarProps={{ sidebarCol: 'at-col-6' }}
				contentProps={{ contentCol: 'at-col-6' }}
			/>
		</>
	);
};
export const SortableWithoutDragHandle = () => {
	const [settings, setSettings] = useState(['hello1', 'hello2']);
	const [hello1, setHello1] = useState(false);
	const [hello2, setHello2] = useState(false);
	const [item, setItem] = useState({});

	return (
		<>
			<AtrcWireFrameContentSidebar
				renderContent={
					<>
						<AtrcControlSortable
							label={__('Sortable without DragHandle', 'atrc-prefix-atrc')}
							onChange={setSettings}
							value={settings}
							useDragHandle={false}
							items={[
								{
									value: 'hello1',
									children: (
										<AtrcControlCheckbox
											label={__('Site title', 'atrc-prefix-atrc')}
											checked={hello1}
											onChange={setHello1}
										/>
									),
								},
								{
									value: 'hello2',
									children: (
										<>
											<AtrcPanelRow>
												<AtrcControlText
													label={__('Text', 'atrc-prefix-atrc')}
													help={__('Any path of the url', 'atrc-prefix-atrc')}
													value={item.text}
													onChange={(newVal) => {}}
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
													onChange={(newVal) => {}}
												/>
											</AtrcPanelRow>
										</>
									),
								},
							]}
						/>
					</>
				}
				renderSidebar={
					<>
						<AtrcText
							tag='h3'
							className={classnames('at-m')}>
							{__('Values', 'atrc-prefix-atrc')}
						</AtrcText>
						<AtrcPreTemplate1 content={JSON.stringify(settings, null, 2)} />
					</>
				}
				sidebarProps={{ sidebarCol: 'at-col-6' }}
				contentProps={{ contentCol: 'at-col-6' }}
			/>
		</>
	);
};
