import React from 'react';

/*Attributes Structure
Type Object
{
    xsBgPosX : '',
    smBgPosX : '',
    mdBgPosX : '',
    lgBgPosX : '',
    xlBgPosX : '',
    xxlBgPosX : '',
    xsBgPosY : '',
    smBgPosY : '',
    mdBgPosY : '',
    lgBgPosY : '',
    xlBgPosY : '',
    xxlBgPosY : '',
}
 * */

/*WordPress*/
import { __ } from '@wordpress/i18n';

import { useEffect, useState } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';
import { cloneDeep } from 'lodash';

/*Atoms*/
import AtrcLabel from '../../atoms/label';

/* Controls */
import AtrcControlUnit from '../control-unit';
import AtrcControlSelectDevice from '../control-select-device';

/* Molecules */
import AtrcPanelRow from '../../molecules/panel-row';

/*Utils*/
import AtrcIsNumeric from '../../utils/is-numeric';

/* Internal */
import { PositionOptions } from './options';

/*Local*/
const BackgroundPosition = ({ value, onChange }) => {
	const {
		xsBgPosX = '',
		smBgPosX = '',
		mdBgPosX = '',
		lgBgPosX = '',
		xlBgPosX = '',
		xxlBgPosX = '',
		xsBgPosY = '',
		smBgPosY = '',
		mdBgPosY = '',
		lgBgPosY = '',
		xlBgPosY = '',
		xxlBgPosY = '',
	} = value;

	const getInitialState = () => {
		let concatXY = xsBgPosX.trim() + ' ' + xsBgPosY.trim();
		let smConcatXY = smBgPosX.trim() + ' ' + smBgPosY.trim();
		let mdConcatXY = mdBgPosX.trim() + ' ' + mdBgPosY.trim();
		let lgConcatXY = lgBgPosX.trim() + ' ' + lgBgPosY.trim();
		let xlConcatXY = xlBgPosX.trim() + ' ' + xlBgPosY.trim();
		let xxlConcatXY = xxlBgPosX.trim() + ' ' + xxlBgPosY.trim();

		if ('' !== concatXY && AtrcIsNumeric(Array.from(concatXY)[0])) {
			concatXY = 'custom';
		}
		if ('' !== smConcatXY && AtrcIsNumeric(Array.from(smConcatXY)[0])) {
			smConcatXY = 'custom';
		}
		if ('' !== mdConcatXY && AtrcIsNumeric(Array.from(mdConcatXY)[0])) {
			mdConcatXY = 'custom';
		}
		if ('' !== lgConcatXY && AtrcIsNumeric(Array.from(lgConcatXY)[0])) {
			lgConcatXY = 'custom';
		}
		if ('' !== xlConcatXY && AtrcIsNumeric(Array.from(xlConcatXY)[0])) {
			xlConcatXY = 'custom';
		}
		if ('' !== xxlConcatXY && AtrcIsNumeric(Array.from(xxlConcatXY)[0])) {
			xxlConcatXY = 'custom';
		}
		return {
			xsBgPosXY: concatXY,
			smBgPosXY: smConcatXY,
			mdBgPosXY: mdConcatXY,
			lgBgPosXY: lgConcatXY,
			xlBgPosXY: xlConcatXY,
			xxlBgPosXY: xxlConcatXY,
		};
	};
	const [selectedBgPos, setSelectedBgPos] = useState(null);

	const [selectedTab, setSelectedTab] = useState(null);

	/*Run only once on mount*/
	useEffect(() => {
		setSelectedTab('xs');
		setSelectedBgPos(getInitialState());
	}, []);

	/*Run on change selectedBgPos*/
	useEffect(() => {
		if (!(selectedBgPos && selectedBgPos.doUseEffect)) {
			return;
		}

		const valueCloned = cloneDeep(value);

		let newBgPosX = '',
			newBgPosY = '';
		if ('custom' !== selectedBgPos.xsBgPosXY) {
			if (selectedBgPos.xsBgPosXY) {
				const result = selectedBgPos.xsBgPosXY.trim().split(/\s+/);
				if (result.length === 2) {
					newBgPosX = result[0].trim();
					newBgPosY = result[1].trim();
				} else {
					newBgPosX = '';
					newBgPosY = '';
				}
			}
			valueCloned.xsBgPosX = newBgPosX;
			valueCloned.xsBgPosY = newBgPosY;
		}

		let newSmBgPosX = '',
			newSmBgPosY = '';
		if ('custom' !== selectedBgPos.smBgPosXY) {
			if (selectedBgPos.smBgPosXY) {
				const result = selectedBgPos.smBgPosXY.trim().split(/\s+/);
				if (result.length === 2) {
					newSmBgPosX = result[0].trim();
					newSmBgPosY = result[1].trim();
				} else {
					newSmBgPosX = '';
					newSmBgPosY = '';
				}
			}
			valueCloned.smBgPosX = newSmBgPosX;
			valueCloned.smBgPosY = newSmBgPosY;
		}

		let newMdBgPosX = '',
			newMdBgPosY = '';
		if ('custom' !== selectedBgPos.mdBgPosXY) {
			if (selectedBgPos.mdBgPosXY) {
				const result = selectedBgPos.mdBgPosXY.trim().split(/\s+/);
				if (result.length === 2) {
					newMdBgPosX = result[0].trim();
					newMdBgPosY = result[1].trim();
				} else {
					newMdBgPosX = '';
					newMdBgPosY = '';
				}
			}
			valueCloned.mdBgPosX = newMdBgPosX;
			valueCloned.mdBgPosY = newMdBgPosY;
		}

		let newLgBgPosX = '',
			newLgBgPosY = '';
		if ('custom' !== selectedBgPos.lgBgPosXY) {
			if (selectedBgPos.lgBgPosXY) {
				const result = selectedBgPos.lgBgPosXY.trim().split(/\s+/);
				if (result.length === 2) {
					newLgBgPosX = result[0].trim();
					newLgBgPosY = result[1].trim();
				} else {
					newLgBgPosX = '';
					newLgBgPosY = '';
				}
			}
			valueCloned.lgBgPosX = newLgBgPosX;
			valueCloned.lgBgPosY = newLgBgPosY;
		}

		let newXlBgPosX = '',
			newXlBgPosY = '';
		if ('custom' !== selectedBgPos.xlBgPosXY) {
			if (selectedBgPos.xlBgPosXY) {
				const result = selectedBgPos.xlBgPosXY.trim().split(/\s+/);
				if (result.length === 2) {
					newXlBgPosX = result[0].trim();
					newXlBgPosY = result[1].trim();
				} else {
					newXlBgPosX = '';
					newXlBgPosY = '';
				}
			}
			valueCloned.xlBgPosX = newXlBgPosX;
			valueCloned.xlBgPosY = newXlBgPosY;
		}

		let newXxlBgPosX = '',
			newXxlBgPosY = '';
		if ('custom' !== selectedBgPos.xxlBgPosXY) {
			if (selectedBgPos.xxlBgPosXY) {
				const result = selectedBgPos.xxlBgPosXY.trim().split(/\s+/);
				if (result.length === 2) {
					newXxlBgPosX = result[0].trim();
					newXxlBgPosY = result[1].trim();
				} else {
					newXxlBgPosX = '';
					newXxlBgPosY = '';
				}
			}
			valueCloned.xxlBgPosX = newXxlBgPosX;
			valueCloned.xxlBgPosY = newXxlBgPosY;
		}

		onChange(valueCloned);
	}, [selectedBgPos]);

	const setAttr = (newVal, type) => {
		const valueCloned = cloneDeep(value);

		valueCloned[type] = newVal;
		onChange(valueCloned);
	};

	if (null === selectedTab || null === selectedBgPos) {
		return '';
	}

	return (
		<>
			<AtrcControlSelectDevice
				label={__('Background position', 'atrc-prefix-atrc')}
				wrapProps={{
					className: 'at-flx-grw-1',
				}}
				value={{
					xs: selectedBgPos.xsBgPosXY,
					sm: selectedBgPos.smBgPosXY,
					md: selectedBgPos.mdBgPosXY,
					lg: selectedBgPos.lgBgPosXY,
					xl: selectedBgPos.xlBgPosXY,
					xxl: selectedBgPos.xxlBgPosXY,
				}}
				options={PositionOptions()}
				onChange={(newVal) =>
					setSelectedBgPos({
						xsBgPosXY: newVal && newVal.xs,
						smBgPosXY: newVal && newVal.sm,
						mdBgPosXY: newVal && newVal.md,
						lgBgPosXY: newVal && newVal.lg,
						xlBgPosXY: newVal && newVal.xl,
						xxlBgPosXY: newVal && newVal.xxl,
						doUseEffect: true,
					})
				}
				onTabChange={(newVal) => setSelectedTab(newVal)}
			/>
			{'xs' === selectedTab && 'custom' === selectedBgPos.xsBgPosXY ? (
				<>
					<AtrcPanelRow className={classnames('at-m', 'at-al-itm-st')}>
						<AtrcLabel>{__('Custom', 'atrc-prefix-atrc')}</AtrcLabel>
						<AtrcControlUnit
							label={__('X', 'atrc-prefix-atrc')}
							value={xsBgPosX}
							onChange={(newVal) => setAttr(newVal, 'xsBgPosX')}
						/>
					</AtrcPanelRow>
					<AtrcPanelRow className={classnames('at-m')}>
						<AtrcControlUnit
							label={__('Y', 'atrc-prefix-atrc')}
							value={xsBgPosY}
							onChange={(newVal) => setAttr(newVal, 'xsBgPosY')}
						/>
					</AtrcPanelRow>
				</>
			) : null}
			{'sm' === selectedTab && 'custom' === selectedBgPos.smBgPosXY ? (
				<>
					<AtrcPanelRow className={classnames('at-m', 'at-al-itm-st')}>
						<AtrcLabel>{__('Custom', 'atrc-prefix-atrc')}</AtrcLabel>
						<AtrcControlUnit
							label={__('X', 'atrc-prefix-atrc')}
							value={smBgPosX}
							onChange={(newVal) => setAttr(newVal, 'smBgPosX')}
						/>
					</AtrcPanelRow>
					<AtrcPanelRow className={classnames('at-m')}>
						<AtrcControlUnit
							label={__('Y', 'atrc-prefix-atrc')}
							value={smBgPosY}
							onChange={(newVal) => setAttr(newVal, 'smBgPosY')}
						/>
					</AtrcPanelRow>
				</>
			) : null}
			{'md' === selectedTab && 'custom' === selectedBgPos.mdBgPosXY ? (
				<>
					<AtrcPanelRow className={classnames('at-m', 'at-al-itm-st')}>
						<AtrcLabel>{__('Custom', 'atrc-prefix-atrc')}</AtrcLabel>
						<AtrcControlUnit
							label={__('X', 'atrc-prefix-atrc')}
							value={mdBgPosX}
							onChange={(newVal) => setAttr(newVal, 'mdBgPosX')}
						/>
					</AtrcPanelRow>
					<AtrcPanelRow className={classnames('at-m')}>
						<AtrcControlUnit
							label={__('Y', 'atrc-prefix-atrc')}
							value={mdBgPosY}
							onChange={(newVal) => setAttr(newVal, 'mdBgPosY')}
						/>
					</AtrcPanelRow>
				</>
			) : null}
			{'lg' === selectedTab && 'custom' === selectedBgPos.lgBgPosXY ? (
				<>
					<AtrcPanelRow className={classnames('at-m', 'at-al-itm-st')}>
						<AtrcLabel>{__('Custom', 'atrc-prefix-atrc')}</AtrcLabel>
						<AtrcControlUnit
							label={__('X', 'atrc-prefix-atrc')}
							value={lgBgPosX}
							onChange={(newVal) => setAttr(newVal, 'lgBgPosX')}
						/>
					</AtrcPanelRow>
					<AtrcPanelRow className={classnames('at-m')}>
						<AtrcControlUnit
							label={__('Y', 'atrc-prefix-atrc')}
							value={lgBgPosY}
							onChange={(newVal) => setAttr(newVal, 'lgBgPosY')}
						/>
					</AtrcPanelRow>
				</>
			) : null}
			{'xl' === selectedTab && 'custom' === selectedBgPos.xlBgPosXY ? (
				<>
					<AtrcPanelRow className={classnames('at-m', 'at-al-itm-st')}>
						<AtrcLabel>{__('Custom', 'atrc-prefix-atrc')}</AtrcLabel>
						<AtrcControlUnit
							label={__('X', 'atrc-prefix-atrc')}
							value={xlBgPosX}
							onChange={(newVal) => setAttr(newVal, 'xlBgPosX')}
						/>
					</AtrcPanelRow>
					<AtrcPanelRow className={classnames('at-m')}>
						<AtrcControlUnit
							label={__('Y', 'atrc-prefix-atrc')}
							value={xlBgPosY}
							onChange={(newVal) => setAttr(newVal, 'xlBgPosY')}
						/>
					</AtrcPanelRow>
				</>
			) : null}
			{'xxl' === selectedTab && 'custom' === selectedBgPos.xxlBgPosXY ? (
				<>
					<AtrcPanelRow className={classnames('at-m', 'at-al-itm-st')}>
						<AtrcLabel>{__('Custom', 'atrc-prefix-atrc')}</AtrcLabel>
						<AtrcControlUnit
							label={__('X', 'atrc-prefix-atrc')}
							value={xxlBgPosX}
							onChange={(newVal) => setAttr(newVal, 'xxlBgPosX')}
						/>
					</AtrcPanelRow>
					<AtrcPanelRow className={classnames('at-m')}>
						<AtrcControlUnit
							label={__('Y', 'atrc-prefix-atrc')}
							value={xxlBgPosY}
							onChange={(newVal) => setAttr(newVal, 'xxlBgPosY')}
						/>
					</AtrcPanelRow>
				</>
			) : null}
		</>
	);
};

export default BackgroundPosition;
