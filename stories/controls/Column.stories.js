/* WordPress */
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/* Library */
import { action } from '@storybook/addon-actions';
import { cloneDeep } from 'lodash';
import classnames from 'classnames';

/* Atrc */
import {
	AtrcText,
	AtrcControlColumnDevice,
	AtrcControlColumnsAdvancedLayoutPlaceholder,
	AtrcControlColumnsAdvanced,
	AtrcControlColumnsFeatureLayoutPlaceholder,
	AtrcControlColumnsFeature,
	AtrcWireFrameContentSidebar,
	AtrcPreTemplate1,
} from '../../packages';

export default {
	title: 'Controls/AtrcControlColumns',
	component: AtrcControlColumnDevice,
	tags: ['autodocs'],
	argTypes: {
		onChange: { action: 'onChange' },
	},
	args: {
		value: {},
	},
};

const Template = (args) => {
	const [value, setValue] = useState(args.value);

	const handleChange = (newValue) => {
		setValue(newValue);
		args.onChange(newValue);
		action('onChange')(newValue);
	};

	return (
		<AtrcControlColumnDevice
			label={__('Column', 'atrc-prefix-atrc')}
			value={value}
			onChange={handleChange}
		/>
	);
};

export const Default = Template.bind({});

export const ColumnDevice = () => {
	const [value, setValue] = useState();

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	return (
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcControlColumnDevice
						label={__('Column', 'atrc-prefix-atrc')}
						value={value}
						onChange={handleChange}
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

export const ColumnsAdvanced = () => {
	const [value, setValue] = useState({
		columns: 1,
		advColumn: {},
	});

	const handleChange = (type, newVal) => {
		const valueCloned = cloneDeep(value);
		valueCloned[type] = newVal;
		setValue(valueCloned);
	};

	console.log(value);

	return (
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcText
						tag='h3'
						className={classnames('at-m')}>
						{__('On Editor', 'atrc-prefix-atrc')}
					</AtrcText>
					<AtrcControlColumnsFeatureLayoutPlaceholder
						label={__('Select columns', 'atrc-prefix-atrc')}
						onChange={(newCol, newLyt) => {
							const valueCloned = {
								columns: newCol,
								advColumn: { xs: newLyt },
							};
							setValue(valueCloned);
						}}
					/>
					<AtrcText
						tag='h3'
						className={classnames('at-m')}>
						{__('On Setting', 'atrc-prefix-atrc')}
					</AtrcText>

					<AtrcControlColumnsAdvanced
						label={__('Advanced columns', 'atrc-prefix-atrc')}
						value={value.advColumn}
						onChange={(newVal) => handleChange('advColumn', newVal)}
						columns={value.columns}
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

export const ColumnsFeature = () => {
	const [value, setValue] = useState({
		columns: 1,
		fetColumn: {},
	});

	const handleChange = (type, newVal) => {
		const valueCloned = cloneDeep(value);
		valueCloned[type] = newVal;
		setValue(valueCloned);
	};

	console.log(value);

	return (
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcText
						tag='h3'
						className={classnames('at-m')}>
						{__('On Editor', 'atrc-prefix-atrc')}
					</AtrcText>
					<AtrcControlColumnsAdvancedLayoutPlaceholder
						label={__('Select columns', 'atrc-prefix-atrc')}
						onChange={(newCol, newLyt) => {
							const valueCloned = {
								columns: newCol,
								fetColumn: { xs: newLyt },
							};
							setValue(valueCloned);
						}}
					/>
					<AtrcText
						tag='h3'
						className={classnames('at-m')}>
						{__('On Setting', 'atrc-prefix-atrc')}
					</AtrcText>
					<AtrcControlColumnsFeature
						label={__('Featured columns', 'atrc-prefix-atrc')}
						value={value.fetColumn}
						onChange={(newVal) => handleChange('fetColumn', newVal)}
						columns={value.columns}
					/>
				</>
			}
			renderSidebar={
				<>
					<AtrcText tag='h3'>{__('Value', 'atrc-prefix-atrc')}</AtrcText>
					<AtrcPreTemplate1 content={JSON.stringify(value, null, 2)} />
				</>
			}
			sidebarProps={{ sidebarCol: 'at-col-6' }}
			contentProps={{ contentCol: 'at-col-6' }}
		/>
	);
};
