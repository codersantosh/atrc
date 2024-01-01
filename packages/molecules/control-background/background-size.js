/*Attributes Structure
Type Object
{
    bgSz : '',
    smBgSz : '',
    mdBgSz : '',
    lgBgSz : '',
    xlBgSz : '',
    xxlBgSz : '',

    bgW:'',
    smBgW:'',
    mdBgW:'',
    lgBgW:'',
    xlBgW:'',
    xxlBgW:'',
    bgH:'',
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

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';
import AtrcControlUnit from '../../atoms/control-unit';

import AtrcControlSelectDevice from './../control-select-device';

import { BgSzOptions } from './options';

/*Local Components*/
export const mappingBgSzNewValues = (newVal, value) => {
	if (newVal && newVal.xs) {
		value.bgSz = newVal.xs;
	} else {
		delete value.bgSz;
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
		bgSz = '',
		smBgSz = '',
		mdBgSz = '',
		lgBgSz = '',
		xlBgSz = '',
		xxlBgSz = '',

		bgW = '',
		smBgW = '',
		mdBgW = '',
		lgBgW = '',
		xlBgW = '',
		xxlBgW = '',
		bgH = '',
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
		const valueCloned = Object.assign({}, value);
		valueCloned[type] = newVal;
		onChange(valueCloned);
	};

	return (
		<>
			<AtrcControlSelectDevice
				label={__('Background size', 'atrc-prefix-atrc')}
				value={{
					xs: bgSz,
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
			{'xs' === selectedTab && 'custom' === bgSz ? (
				<>
					<AtrcLabel>
						{__('Custom width and height', 'atrc-prefix-atrc')}
					</AtrcLabel>
					<AtrcWrap className='at-flex'>
						<AtrcControlUnit
							label={__('Width', 'atrc-prefix-atrc')}
							value={bgW}
							onChange={(newVal) => setAttr(newVal, 'bgW')}
						/>
						<AtrcControlUnit
							label={__('Height', 'atrc-prefix-atrc')}
							value={bgH}
							onChange={(newVal) => setAttr(newVal, 'bgH')}
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
