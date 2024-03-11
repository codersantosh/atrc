/*Attributes Structure
Type Object
{
    xsBgSz : '',
    smBgSz : '',
    mdBgSz : '',
    lgBgSz : '',
    xlBgSz : '',
    xxlBgSz : '',

    xsBgW:'',
    smBgW:'',
    mdBgW:'',
    lgBgW:'',
    xlBgW:'',
    xxlBgW:'',
    xsBgH:'',
    smBgH:'',
    mdBgH:'',
    lgBgH:'',
    xlBgH:'',
    xxlBgH:'',
}
 * */

/*WordPress*/
import { __ } from '@wordpress/i18n';

import { useState } from '@wordpress/element';

/*Library*/
import { cloneDeep } from 'lodash';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';

/* Controls */
import AtrcControlUnit from '../control-unit';
import AtrcControlSelectDevice from '../control-select-device';

/* Internal */
import { BgSzOptions } from './options';

/*Local*/
export const mappingBgSzNewValues = (newVal, value) => {
	if (newVal && newVal.xs) {
		value.xsBgSz = newVal.xs;
	} else {
		delete value.xsBgSz;
	}

	if (newVal && newVal.sm) {
		value.smBgSz = newVal.sm;
	} else {
		delete value.smBgSz;
	}

	if (newVal && newVal.md) {
		value.mdBgSz = newVal.md;
	} else {
		delete value.mdBgSz;
	}

	if (newVal && newVal.lg) {
		value.lgBgSz = newVal.lg;
	} else {
		delete value.lgBgSz;
	}

	if (newVal && newVal.xl) {
		value.xlBgSz = newVal.xl;
	} else {
		delete value.xlBgSz;
	}

	if (newVal && newVal.xxl) {
		value.xxlBgSz = newVal.xxl;
	} else {
		delete value.xxlBgSz;
	}

	return value;
};

const BackgroundSize = ({ value, onChange }) => {
	const {
		xsBgSz = '',
		smBgSz = '',
		mdBgSz = '',
		lgBgSz = '',
		xlBgSz = '',
		xxlBgSz = '',

		xsBgW = '',
		smBgW = '',
		mdBgW = '',
		lgBgW = '',
		xlBgW = '',
		xxlBgW = '',
		xsBgH = '',
		smBgH = '',
		mdBgH = '',
		lgBgH = '',
		xlBgH = '',
		xxlBgH = '',
	} = value;

	const [selectedTab, setSelectedTab] = useState();

	const setBgSz = (newVal) => {
		const newValues = mappingBgSzNewValues(newVal, value);
		onChange(newValues);
	};

	const setAttr = (newVal, type) => {
		const valueCloned = cloneDeep(value);
		valueCloned[type] = newVal;
		onChange(valueCloned);
	};

	return (
		<>
			<AtrcControlSelectDevice
				label={__('Background size', 'atrc-prefix-atrc')}
				value={{
					xs: xsBgSz,
					sm: smBgSz,
					md: mdBgSz,
					lg: lgBgSz,
					xl: xlBgSz,
					xxl: xxlBgSz,
				}}
				options={BgSzOptions()}
				onChange={setBgSz}
				onTabChange={(newVal) => setSelectedTab(newVal)}
			/>
			{'xs' === selectedTab && 'custom' === xsBgSz ? (
				<>
					<AtrcLabel>
						{__('Custom width and height', 'atrc-prefix-atrc')}
					</AtrcLabel>
					<AtrcWrap className='at-flex'>
						<AtrcControlUnit
							label={__('Width', 'atrc-prefix-atrc')}
							value={xsBgW}
							onChange={(newVal) => setAttr(newVal, 'xsBgW')}
						/>
						<AtrcControlUnit
							label={__('Height', 'atrc-prefix-atrc')}
							value={xsBgH}
							onChange={(newVal) => setAttr(newVal, 'xsBgH')}
						/>
					</AtrcWrap>
				</>
			) : null}
			{'sm' === selectedTab && 'custom' === smBgSz ? (
				<>
					<AtrcLabel>
						{__('Custom width and height', 'atrc-prefix-atrc')}
					</AtrcLabel>
					<AtrcWrap className='at-flex'>
						<AtrcControlUnit
							label={__('Width', 'atrc-prefix-atrc')}
							value={smBgW}
							onChange={(newVal) => setAttr(newVal, 'smBgW')}
						/>
						<AtrcControlUnit
							label={__('Height', 'atrc-prefix-atrc')}
							value={smBgH}
							onChange={(newVal) => setAttr(newVal, 'smBgH')}
						/>
					</AtrcWrap>
				</>
			) : null}
			{'md' === selectedTab && 'custom' === mdBgSz ? (
				<>
					<AtrcLabel>
						{__('Custom width and height', 'atrc-prefix-atrc')}
					</AtrcLabel>
					<AtrcWrap className='at-flex'>
						<AtrcControlUnit
							label={__('Width', 'atrc-prefix-atrc')}
							value={mdBgW}
							onChange={(newVal) => setAttr(newVal, 'mdBgW')}
						/>
						<AtrcControlUnit
							label={__('Height', 'atrc-prefix-atrc')}
							value={mdBgH}
							onChange={(newVal) => setAttr(newVal, 'mdBgH')}
						/>
					</AtrcWrap>
				</>
			) : null}
			{'lg' === selectedTab && 'custom' === lgBgSz ? (
				<>
					<AtrcLabel>
						{__('Custom width and height', 'atrc-prefix-atrc')}
					</AtrcLabel>
					<AtrcWrap className='at-flex'>
						<AtrcControlUnit
							label={__('Width', 'atrc-prefix-atrc')}
							value={lgBgW}
							onChange={(newVal) => setAttr(newVal, 'lgBgW')}
						/>
						<AtrcControlUnit
							label={__('Height', 'atrc-prefix-atrc')}
							value={lgBgH}
							onChange={(newVal) => setAttr(newVal, 'lgBgH')}
						/>
					</AtrcWrap>
				</>
			) : null}
			{'xl' === selectedTab && 'custom' === xlBgSz ? (
				<>
					<AtrcLabel>
						{__('Custom width and height', 'atrc-prefix-atrc')}
					</AtrcLabel>
					<AtrcWrap className='at-flex'>
						<AtrcControlUnit
							label={__('Width', 'atrc-prefix-atrc')}
							value={xlBgW}
							onChange={(newVal) => setAttr(newVal, 'xlBgW')}
						/>
						<AtrcControlUnit
							label={__('Height', 'atrc-prefix-atrc')}
							value={xlBgH}
							onChange={(newVal) => setAttr(newVal, 'xlBgH')}
						/>
					</AtrcWrap>
				</>
			) : null}
			{'xxl' === selectedTab && 'custom' === xxlBgSz ? (
				<>
					<AtrcLabel>
						{__('Custom width and height', 'atrc-prefix-atrc')}
					</AtrcLabel>
					<AtrcWrap className='at-flex'>
						<AtrcControlUnit
							label={__('Width', 'atrc-prefix-atrc')}
							value={xxlBgW}
							onChange={(newVal) => setAttr(newVal, 'xxlBgW')}
						/>
						<AtrcControlUnit
							label={__('Height', 'atrc-prefix-atrc')}
							value={xxlBgH}
							onChange={(newVal) => setAttr(newVal, 'xxlBgH')}
						/>
					</AtrcWrap>
				</>
			) : null}
		</>
	);
};

export default BackgroundSize;
