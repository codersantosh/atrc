/*Value Structure
Type Object
{
dur : 0,
tmgFn : '',
dla : 0,
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';

import { useMemo } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';

import { isArray, isEmpty, map } from 'lodash';

/*Inbuilt*/
import { AtrcPanelRow, AtrcPanelTools } from '../index';

import { AtrcRange, AtrcSelect } from '../../atoms';

import TimingFunctionsOptions from './options';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcControlTransition = (props) => {
	const {
		label = '',
		className = '',
		variant = '',
		value = {},
		onChange = () => {},
		allowedOptions = true,
	} = props;

	const { dur, tmgFn = '', dla } = value;

	const setAttr = (newVal, type) => {
		const valueCloned = Object.assign({}, value);
		valueCloned[type] = newVal;
		onChange(valueCloned);
	};

	const resetAttr = (type) => {
		const valueCloned = Object.assign({}, value);

		delete valueCloned[type];
		onChange(valueCloned);
	};

	const resetAll = () => {
		onChange({});
	};

	const hasTabValue = (tab) => {
		if (!value || isEmpty(value)) {
			return false;
		}

		return !!value[tab];
	};

	const AllTabs = useMemo(() => {
		const tabsOptions = [];

		if (
			true === allowedOptions ||
			(isArray(allowedOptions) && allowedOptions.includes('duration'))
		) {
			tabsOptions.push({
				name: 'dur',
				title: __('Duration', 'atrc-prefix-atrc'),
				hasValue: hasTabValue('dur'),
				onDeselect: () => resetAttr('dur'),
			});
		}
		if (
			true === allowedOptions ||
			(isArray(allowedOptions) && allowedOptions.includes('timingFunction'))
		) {
			tabsOptions.push({
				name: 'tmgFn',
				title: __('Timing function', 'atrc-prefix-atrc'),
				hasValue: hasTabValue('tmgFn'),
				onDeselect: () => resetAttr('tmgFn'),
			});
		}

		if (
			true === allowedOptions ||
			(isArray(allowedOptions) && allowedOptions.includes('delay'))
		) {
			tabsOptions.push({
				name: 'dla',
				title: __('Delay', 'atrc-prefix-atrc'),
				hasValue: hasTabValue('dla'),
				onDeselect: () => resetAttr('dla'),
			});
		}
		return tabsOptions;
	}, [value]);

	return (
		<AtrcPanelTools
			className={classnames(
				AtrcPrefix('ctrl-trs'),
				className,
				variant ? AtrcPrefix('ctrl-trs') + '-' + variant : ''
			)}
			label={label}
			resetAll={resetAll}
			tools={AllTabs}>
			{(activeItems) =>
				map(activeItems, (tab, iDx) => {
					if ('dur' === tab) {
						return (
							<AtrcPanelRow
								className={classnames('at-m')}
								key={iDx}>
								<AtrcRange
									label={__('Duration', 'atrc-prefix-atrc')}
									help={__('In seconds', 'atrc-prefix-atrc')}
									value={dur}
									onChange={(newVal) => setAttr(newVal, tab)}
									min={0}
									max={10}
									step={0.1}
								/>
							</AtrcPanelRow>
						);
					}
					if ('tmgFn' === tab) {
						return (
							<AtrcPanelRow
								className={classnames('at-m')}
								key={iDx}>
								<AtrcSelect
									label={__('Timing function', 'atrc-prefix-atrc')}
									wrapProps={{
										className: 'at-flx-grw-1',
									}}
									value={tmgFn}
									options={TimingFunctionsOptions}
									onChange={(newVal) => setAttr(newVal, tab)}
								/>
							</AtrcPanelRow>
						);
					}
					if ('dla' === tab) {
						return (
							<AtrcPanelRow
								className={classnames('at-m')}
								key={iDx}>
								<AtrcRange
									label={__('Delay', 'atrc-prefix-atrc')}
									help={__('In seconds', 'atrc-prefix-atrc')}
									value={dla}
									onChange={(newVal) => setAttr(newVal, tab)}
									min={0}
									max={10}
									step={0.1}
								/>
							</AtrcPanelRow>
						);
					}
					return null;
				})
			}
		</AtrcPanelTools>
	);
};
export default AtrcControlTransition;
