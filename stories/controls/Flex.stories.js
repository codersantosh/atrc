/* WordPress */
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/* Library */
import { isEmpty } from 'lodash';
import classnames from 'classnames';

/* Atrc */
import {
	AtrcControlFlexAlignContentDevice,
	AtrcControlFlexAlignContentDeviceClasses,
	AtrcControlFlexAlignItemsDevice,
	AtrcControlFlexAlignItemsDeviceClasses,
	AtrcControlFlexAlignSelfDevice,
	AtrcControlFlexAlignSelfDeviceClasses,
	AtrcControlFlexDirectionDevice,
	AtrcControlFlexDirectionDeviceClasses,
	AtrcControlFlexJustifyContentDevice,
	AtrcControlFlexJustifyContentDeviceClasses,
	AtrcWireFrameContentSidebar,
	AtrcPreTemplate1,
	AtrcText,
} from '../../packages';

export default {
	title: 'Controls/AtrcControlFlex',
};

export const AlignContentDevice = () => {
	const [value, setValue] = useState();

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	const getClasses = () => {
		const gotClasses = AtrcControlFlexAlignContentDeviceClasses(value);
		if (!isEmpty(gotClasses)) {
			return gotClasses;
		}
		return __('Empty classes', 'atrc-prefix-atrc');
	};

	return (
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcControlFlexAlignContentDevice
						value={value}
						onChange={handleChange}
					/>
					<AtrcText
						tag='h3'
						className={classnames('at-m')}>
						{__('Dynamic classes', 'atrc-prefix-atrc')}
					</AtrcText>
					<AtrcPreTemplate1 content={getClasses()} />
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

export const AlignItemsDevice = () => {
	const [value, setValue] = useState();

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	const getClasses = () => {
		const gotClasses = AtrcControlFlexAlignItemsDeviceClasses(value);
		if (!isEmpty(gotClasses)) {
			return gotClasses;
		}
		return __('Empty classes', 'atrc-prefix-atrc');
	};

	return (
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcControlFlexAlignItemsDevice
						value={value}
						onChange={handleChange}
					/>
					<AtrcText
						tag='h3'
						className={classnames('at-m')}>
						{__('Dynamic classes', 'atrc-prefix-atrc')}
					</AtrcText>
					<AtrcPreTemplate1 content={getClasses()} />
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

export const AlignSelfDevice = () => {
	const [value, setValue] = useState();

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	const getClasses = () => {
		const gotClasses = AtrcControlFlexAlignSelfDeviceClasses(value);
		if (!isEmpty(gotClasses)) {
			return gotClasses;
		}
		return __('Empty classes', 'atrc-prefix-atrc');
	};

	return (
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcControlFlexAlignSelfDevice
						value={value}
						onChange={handleChange}
					/>
					<AtrcText
						tag='h3'
						className={classnames('at-m')}>
						{__('Dynamic classes', 'atrc-prefix-atrc')}
					</AtrcText>
					<AtrcPreTemplate1 content={getClasses()} />
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

export const DirectionDevice = () => {
	const [value, setValue] = useState();

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	const getClasses = () => {
		const gotClasses = AtrcControlFlexDirectionDeviceClasses(value);
		if (!isEmpty(gotClasses)) {
			return gotClasses;
		}
		return __('Empty classes', 'atrc-prefix-atrc');
	};

	return (
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcControlFlexDirectionDevice
						value={value}
						onChange={handleChange}
					/>
					<AtrcText
						tag='h3'
						className={classnames('at-m')}>
						{__('Dynamic classes', 'atrc-prefix-atrc')}
					</AtrcText>
					<AtrcPreTemplate1 content={getClasses()} />
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

export const JustifyContent = () => {
	const [value, setValue] = useState();

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	const getClasses = () => {
		const gotClasses = AtrcControlFlexJustifyContentDeviceClasses(value);
		if (!isEmpty(gotClasses)) {
			return gotClasses;
		}
		return __('Empty classes', 'atrc-prefix-atrc');
	};

	return (
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcControlFlexJustifyContentDevice
						value={value}
						onChange={handleChange}
					/>
					<AtrcText
						tag='h3'
						className={classnames('at-m')}>
						{__('Dynamic classes', 'atrc-prefix-atrc')}
					</AtrcText>
					<AtrcPreTemplate1 content={getClasses()} />
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
