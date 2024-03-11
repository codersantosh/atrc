/* WordPress */
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/* Library */
import classnames from 'classnames';
import { cloneDeep } from 'lodash';

/* Atrc */
import {
	AtrcControlSelect,
	AtrcText,
	AtrcWireFrameContentSidebar,
	AtrcPreTemplate1,
	AtrcWireFrameSidebarContentSidebar,
} from '../../packages';

/* Blocks */
import AtrcBlocks from '../../packages/blocks';
import AtrcBlocksSettings from '../../packages/blocks/settings';

/* Local */
export default {
	title: 'Blocks/AllBlocks',
};

export const Default = () => {
	const [blockName, setBlockName] = useState();
	const [value, setValue] = useState({});

	const { style = {}, link = {}, content = {}, conditional = {} } = value;

	const updateValue = (type, newVal) => {
		const valueCloned = cloneDeep(value);
		valueCloned[type] = newVal;
		setValue(valueCloned);
	};

	const updateContent = (type, newValue) => {
		const clonedContent = cloneDeep(content);
		clonedContent[type] = newValue;
		updateValue('content', clonedContent);
	};

	return (
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcBlocks
						value={value}
						blockName={blockName}
						onChange={(newValue) => {
							updateValue('content', newValue);
						}}
					/>
					<AtrcWireFrameSidebarContentSidebar
						renderSidebarLeft={
							<>
								<AtrcText
									tag='h6'
									className={classnames('at-m')}>
									{__('Value', 'atrc-prefix-atrc')}
								</AtrcText>
								<AtrcPreTemplate1 content={JSON.stringify(value, null, 2)} />
							</>
						}
						renderContent={
							<>
								<AtrcText
									tag='h6'
									className={classnames('at-m')}>
									{__('Dynamic CSS', 'atrc-prefix-atrc')}
								</AtrcText>
								<AtrcPreTemplate1 content={JSON.stringify(value, null, 2)} />
							</>
						}
						renderSidebarRight={
							<>
								<AtrcText
									tag='h6'
									className={classnames('at-m')}>
									{__('Dynamic classes', 'atrc-prefix-atrc')}
								</AtrcText>
								<AtrcPreTemplate1 content={JSON.stringify(value, null, 2)} />
							</>
						}
						columns={{
							left: 'at-col-4',
							content: 'at-col-4',
							right: 'at-col-4',
						}}
					/>
				</>
			}
			renderSidebar={
				<>
					<AtrcControlSelect
						label={__('Select block', 'atrc-prefix-atrc')}
						value={blockName}
						onChange={(newVal) => {
							setBlockName(newVal);
							if ('text' === newVal) {
								updateContent('value', 'Hello! I am <b>Atomic Text Block</b>');
							}
						}}>
						<option key='default'>
							{__('Select block', 'atrc-prefix-atrc')}
						</option>
						<optgroup label={__('Atoms', 'atrc-prefix-atrc')}>
							<option
								key='audio'
								value='audio'>
								{__('Audio', 'atrc-prefix-atrc')}
							</option>
							<option
								key='button'
								value='button'>
								{__('Button', 'atrc-prefix-atrc')}
							</option>
							<option
								key='buttonIcon'
								value='buttonIcon'>
								{__('Button Icon', 'atrc-prefix-atrc')}
							</option>
							<option
								key='counter'
								value='counter'>
								{__('Counter', 'atrc-prefix-atrc')}
							</option>
							<option
								key='divider'
								value='divider'>
								{__('Divider', 'atrc-prefix-atrc')}
							</option>
							<option
								key='icon'
								value='icon'>
								{__('Icon', 'atrc-prefix-atrc')}
							</option>
							<option
								key='img'
								value='img'>
								{__('Image', 'atrc-prefix-atrc')}
							</option>
							<option
								key='mapGoogle'
								value='mapGoogle'>
								{__('Google map', 'atrc-prefix-atrc')}
							</option>
							<option
								key='progressBar'
								value='progressBar'>
								{__('Progress bar', 'atrc-prefix-atrc')}
							</option>
							<option
								key='progressCircle'
								value='progressCircle'>
								{__('Progress Circle', 'atrc-prefix-atrc')}
							</option>
							<option
								key='video'
								value='video'>
								{__('Video', 'atrc-prefix-atrc')}
							</option>
							<option
								key='text'
								value='text'>
								{__('Text', 'atrc-prefix-atrc')}
							</option>
							<option
								key='textMin'
								value='textMin'>
								{__('Text Min', 'atrc-prefix-atrc')}
							</option>
						</optgroup>
						<optgroup label={__('Molecules', 'atrc-prefix-atrc')}>
							<option
								key='container'
								value='container'>
								{__('Container', 'atrc-prefix-atrc')}
							</option>
						</optgroup>
					</AtrcControlSelect>
					<AtrcBlocksSettings
						value={value}
						blockName={blockName}
						onChange={setValue}
					/>
				</>
			}
			sidebarProps={{ sidebarCol: 'at-col-4' }}
			contentProps={{ contentCol: 'at-col-8' }}
		/>
	);
};
