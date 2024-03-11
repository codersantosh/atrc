/*Attributes Structure
Type Object
{
========*Global values*========
    "on3D":"",
    "ppv":"",
    "orgX":"",
    "orgY":"",
    "orgZ":"",

========*Normal values*========
    "translX":"",
    "translY":"",
    "translZ":"",
    "rotA":"",
    "rotX":"",
    "rotY":"",
    "rotZ":"",
    "sclX":"",
    "sclY":"",
    "sclZ":"",
    "skewX":"",
    "skewY":"",

========*Hover values*========
    "translXHover":"",
    "translYHover":"",
    "translZHover":"",
    "rotAHover":"",
    "rotXHover":"",
    "rotYHover":"",
    "rotZHover":"",
    "sclXHover":"",
    "sclYHover":"",
    "sclZHover":"",
    "skewXHover":"",
    "skewYHover":"",
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';

import { useState, useEffect, Fragment } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';

import { isEmpty, map, cloneDeep } from 'lodash';

/*Atoms*/
import AtrcLabel from '../../atoms/label';

/* Controls */
import AtrcControlSelect from '../control-select';
import AtrcControlToggle from '../control-toggle';
import AtrcControlUnit from '../control-unit';
import AtrcControlTransform from '../control-transform';
import { AtrcControlTransformAllowedKeys } from '../control-transform';

/* Molecules */
import AtrcPanelTools from '../../molecules/panel-tools';
import AtrcNotice from '../../molecules/notice';
import AtrcPanelRow from '../../molecules/panel-row';

/*Utils*/
import {
	AtrcGetTabValues,
	AtrcHasTabValues,
	AtrcUpdateTabValues,
	AtrcResetTab,
	AtrcResetTabs,
} from '../../utils/object-values-with-allowed-keys-and-tabs';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcOrigin = ({ value, onChange, allow3D = false }) => {
	const { orgX = '', orgY = '', orgZ = '' } = value;

	const [selectedX, setSelectedX] = useState('');
	const [selectedY, setSelectedY] = useState('');

	/*Run only once on mount*/
	useEffect(() => {
		if (!['', 'left', 'center', 'right'].includes(orgX)) {
			setSelectedX('custom');
		} else {
			setSelectedX(orgX);
		}
		if (!['', 'top', 'center', 'bottom'].includes(orgX)) {
			setSelectedY('custom');
		} else {
			setSelectedY(orgY);
		}
	}, []);

	const setAttr = (newVal, type) => {
		const valueCloned = cloneDeep(value);

		valueCloned[type] = newVal;
		onChange(valueCloned);
	};

	/*Run on change selectedTransform*/
	useEffect(() => {
		const valueCloned = cloneDeep(value);

		if ('custom' !== selectedX) {
			valueCloned.orgX = selectedX;
		} else {
			valueCloned.orgX = 0;
		}

		if ('custom' !== selectedY) {
			valueCloned.orgY = selectedY;
		} else {
			valueCloned.orgY = 0;
		}

		onChange(valueCloned);
	}, [selectedX, selectedY]);

	return (
		<>
			<AtrcLabel>
				{allow3D
					? __('3D transformations origin', 'atrc-prefix-atrc')
					: __('2D transformations origin', 'atrc-prefix-atrc')}
			</AtrcLabel>
			<AtrcPanelRow className={classnames('at-m')}>
				<AtrcControlSelect
					label={__('OriginX', 'atrc-prefix-atrc')}
					wrapProps={{
						className: 'at-flx-grw-1',
					}}
					value={selectedX}
					options={[
						{
							label: __('Default', 'atrc-prefix-atrc'),
							value: '',
						},
						{
							label: __('Left', 'atrc-prefix-atrc'),
							value: 'left',
						},
						{
							label: __('Center', 'atrc-prefix-atrc'),
							value: 'center',
						},
						{
							label: __('Right', 'atrc-prefix-atrc'),
							value: 'right',
						},
						{
							label: __('Custom', 'atrc-prefix-atrc'),
							value: 'custom',
						},
					]}
					onChange={(newVal) => setSelectedX(newVal)}
				/>
			</AtrcPanelRow>

			{'custom' === selectedX ? (
				<AtrcPanelRow className={classnames('at-m')}>
					<AtrcControlUnit
						label={__('Custom value', 'atrc-prefix-atrc')}
						value={orgX}
						onChange={(newVal) => setAttr(newVal, 'orgX')}
					/>
				</AtrcPanelRow>
			) : null}

			<AtrcPanelRow className={classnames('at-m')}>
				<AtrcControlSelect
					label={__('OriginY', 'atrc-prefix-atrc')}
					wrapProps={{
						className: 'at-flx-grw-1',
					}}
					value={selectedY}
					options={[
						{
							label: __('Default', 'atrc-prefix-atrc'),
							value: '',
						},
						{
							label: __('Top', 'atrc-prefix-atrc'),
							value: 'top',
						},
						{
							label: __('Center', 'atrc-prefix-atrc'),
							value: 'center',
						},
						{
							label: __('Bottom', 'atrc-prefix-atrc'),
							value: 'bottom',
						},
						{
							label: __('Custom', 'atrc-prefix-atrc'),
							value: 'custom',
						},
					]}
					onChange={(newVal) => setSelectedY(newVal)}
				/>
			</AtrcPanelRow>

			{'custom' === selectedY ? (
				<AtrcPanelRow className={classnames('at-m')}>
					<AtrcControlUnit
						label={__('OriginY', 'atrc-prefix-atrc')}
						value={orgY}
						onChange={(newVal) => setAttr(newVal, 'orgY')}
					/>
				</AtrcPanelRow>
			) : null}

			{allow3D ? (
				<AtrcPanelRow className={classnames('at-m')}>
					<AtrcControlUnit
						label={__('OriginZ', 'atrc-prefix-atrc')}
						value={orgZ}
						onChange={(newVal) => setAttr(newVal, 'orgZ')}
					/>
				</AtrcPanelRow>
			) : null}
		</>
	);
};

const RenderTabPanel = ({
	value,
	onChange,
	setAttr,
	AllTabs,
	setTabAttr,
	resetOrigin,
	OriginTabs,
	setOrigin,
}) => {
	return (
		<>
			<AtrcPanelRow className={classnames('at-m')}>
				<AtrcControlToggle
					label={__('Use 3D Transforms', 'atrc-prefix-atrc')}
					checked={value && value.on3D}
					onChange={() => setAttr(!(value && value.on3D), 'on3D')}
				/>
			</AtrcPanelRow>

			{value && value.on3D && (
				<AtrcPanelRow className={classnames('at-m')}>
					<AtrcControlUnit
						label={__('Perspective', 'atrc-prefix-atrc')}
						value={value && value.ppv}
						onChange={(newVal) => setAttr(newVal, 'ppv')}
					/>
				</AtrcPanelRow>
			)}

			<AtrcPanelTools
				label={__('Transform options', 'atrc-prefix-atrc')}
				resetAll={() =>
					onChange(AtrcResetTabs(value, AtrcControlTransformAllowedKeys))
				}
				allowTabs={true}
				tools={AllTabs}>
				{(activeInnerItems) =>
					map(activeInnerItems, (innerTab, iDx1) => (
						<Fragment key={iDx1 + innerTab}>
							<AtrcControlTransform
								label={__('Add transform options', 'atrc-prefix-atrc')}
								value={AtrcGetTabValues(
									value,
									innerTab,
									AtrcControlTransformAllowedKeys
								)}
								onChange={(newVal) => setTabAttr(newVal, innerTab)}
								allow3D={value && value.on3D}
							/>
							{'normal' !== innerTab ? (
								<AtrcNotice
									isDismissible={false}
									autoDismiss={false}>
									{__(
										'For a smooth transformation on hover, use the transition options properly.',
										'atrc-prefix-atrc'
									)}
								</AtrcNotice>
							) : null}
						</Fragment>
					))
				}
			</AtrcPanelTools>

			<AtrcPanelTools
				label={__('Origin', 'atrc-prefix-atrc')}
				resetAll={resetOrigin}
				tools={OriginTabs}>
				{(activeInnerItems) =>
					map(activeInnerItems, (tab2, iDx2) => (
						<AtrcOrigin
							value={{
								orgX: value && value.orgX,
								orgY: value && value.orgY,
								orgZ: value && value.orgZ,
							}}
							onChange={setOrigin}
							allow3D={value && value.on3D}
							key={'org' + iDx2}
						/>
					))
				}
			</AtrcPanelTools>
		</>
	);
};

const AtrcControlTransformTab = (props) => {
	const {
		label = __('Transform', 'atrc-prefix-atrc'),
		className = '',
		variant = '',
		value = {},
		onChange = () => {},
		allowedTabs = ['normal', 'hover'],
	} = props;

	const setTabAttr = (newVal, tab) => {
		onChange(
			AtrcUpdateTabValues(newVal, tab, value, AtrcControlTransformAllowedKeys)
		);
	};

	const setAttr = (newVal, type) => {
		const valueCloned = cloneDeep(value);

		valueCloned[type] = newVal;
		onChange(valueCloned);
	};

	const setOrigin = (newVal) => {
		const valueCloned = cloneDeep(value);

		if (newVal.orgX) {
			valueCloned.orgX = newVal.orgX;
		} else {
			delete valueCloned.orgX;
		}

		if (newVal.orgY) {
			valueCloned.orgY = newVal.orgY;
		} else {
			delete valueCloned.orgY;
		}

		if (newVal.orgZ) {
			valueCloned.orgZ = newVal.orgZ;
		} else {
			delete valueCloned.orgZ;
		}

		onChange(valueCloned);
	};

	const resetOrigin = () => {
		const valueCloned = cloneDeep(value);

		delete valueCloned.orgX;
		delete valueCloned.orgY;
		delete valueCloned.orgZ;

		onChange(valueCloned);
	};

	const AllTabs = [];
	if (allowedTabs.includes('normal')) {
		AllTabs.push({
			name: 'normal',
			title: __('Normal', 'atrc-prefix-atrc'),
			hasValue: AtrcHasTabValues(
				'normal',
				value,
				AtrcControlTransformAllowedKeys
			),
			onDeselect: () =>
				onChange(
					AtrcResetTab('normal', value, AtrcControlTransformAllowedKeys)
				),
		});
	}

	if (allowedTabs.includes('hover')) {
		AllTabs.push({
			name: 'hover',
			title: __('Hover', 'atrc-prefix-atrc'),
			hasValue: AtrcHasTabValues(
				'hover',
				value,
				AtrcControlTransformAllowedKeys
			),
			onDeselect: () =>
				onChange(AtrcResetTab('hover', value, AtrcControlTransformAllowedKeys)),
		});
	}

	const OriginTabs = [
		{
			name: 'origin',
			title: __('Origin', 'atrc-prefix-atrc'),
			hasValue: !!(value && (value.orgX || value.orgY || value.orgZ)),
			onDeselect: () => resetOrigin(),
		},
	];

	const TransformMainTabs = [
		{
			name: 'transform',
			title: label,
			hasValue: !isEmpty(value),
			onDeselect: () => onChange({}),
		},
	];

	return (
		<AtrcPanelTools
			className={classnames(
				AtrcPrefix('ctrl-tf-tab'),
				className,
				variant ? AtrcPrefix('ctrl-tf-tab') + '-' + variant : ''
			)}
			label={label}
			resetAll={() => onChange({})}
			tools={TransformMainTabs}>
			{(activeItems) =>
				map(activeItems, (tab, iDx) => (
					<RenderTabPanel
						value={value}
						onChange={onChange}
						tab={tab}
						setAttr={setAttr}
						AllTabs={AllTabs}
						setTabAttr={setTabAttr}
						resetOrigin={resetOrigin}
						OriginTabs={OriginTabs}
						setOrigin={setOrigin}
						key={iDx}
					/>
				))
			}
		</AtrcPanelTools>
	);
};
export default AtrcControlTransformTab;
