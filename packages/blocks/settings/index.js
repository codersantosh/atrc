import React from 'react';

/* WordPress */

/* Library */
import { cloneDeep } from 'lodash';
import classnames from 'classnames';

/* Molecules */
import AtrcTabPanel from '../../molecules/tab-panel';

/* Controls */

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/* Internal */
import AtrcBlocksGetTabs from './tabs';
import General from './general';

/* Local */
/* Settings is based on the Websit elements like atoms and molecules.
Eg text and button have different or same properties.
Properties are defined from the variable name of atomic css

*/
const RenderSettingTab = (props) => {
	const { tab, value, onChange, blockName, settingProps = {} } = props;

	const { style = {}, link = {}, content = {}, conditional = {} } = value;

	const { general = { on: true } } = settingProps;

	const updateValue = (type, newVal) => {
		const valueCloned = cloneDeep(value);
		valueCloned[type] = newVal;
		onChange(valueCloned);
	};

	const updateStyle = (type, newVal) => {
		const styleCloned = cloneDeep(style);
		styleCloned[type] = newVal;
		updateValue('style', styleCloned);
	};

	if ('basic' === tab.name) {
		return (
			<>
				{general.on ? (
					<General
						blockName={blockName}
						value={value}
						onChange={onChange}
						settingProps={settingProps}
					/>
				) : null}
			</>
		);
	} else if ('style' === tab.name) {
		return 'Style';
	} else if ('advanced' === tab.name) {
		return 'advanced';
	}
	return null;
};

const AtrcBlocksSettings = (props) => {
	const {
		value,
		onChange,
		blockName,

		variant = '',
		className = '',

		tabProps,

		...defaultProps
	} = props;

	return (
		<>
			<AtrcTabPanel
				className={classnames(
					AtrcPrefix('blocks-settings'),
					className,
					variant ? AtrcPrefix('blocks-settings') + '-' + variant : ''
				)}
				tabs={AtrcBlocksGetTabs(tabProps)}
				{...defaultProps}>
				{(tab) => (
					<RenderSettingTab
						tab={tab}
						value={value}
						onChange={onChange}
						blockName={blockName}
					/>
				)}
			</AtrcTabPanel>
		</>
	);
};

export default AtrcBlocksSettings;
