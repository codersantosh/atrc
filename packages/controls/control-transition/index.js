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

/*Library*/
import classnames from 'classnames';

import { isArray, isEmpty, map, cloneDeep } from 'lodash';

/*Controls*/
import AtrcControlSelect from '../control-select';
import AtrcControlRange from '../control-range';

/* Molecules */
import AtrcPanelTools from '../../molecules/panel-tools';
import AtrcPanelRow from '../../molecules/panel-row';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Internal*/
import TimingFunctionsOptions from './options';

/* Local */
const AtrcControlTransition = (props) => {
	const {
		label = __('Transition', 'atrc-prefix-atrc'),
		className = '',
		variant = '',
		value = {},
		onChange = () => {},
		allowedOptions = true,
	} = props;

	const { dur, tmgFn = '', dla } = value;

	const setAttr = (newVal, type) => {
		const valueCloned = cloneDeep(value);

		valueCloned[type] = newVal;
		onChange(valueCloned);
	};

	const resetAttr = (type) => {
		const valueCloned = cloneDeep(value);

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

	const AllTabs = [];

	if (
		true === allowedOptions ||
		(isArray(allowedOptions) && allowedOptions.includes('duration'))
	) {
		AllTabs.push({
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
		AllTabs.push({
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
		AllTabs.push({
			name: 'dla',
			title: __('Delay', 'atrc-prefix-atrc'),
			hasValue: hasTabValue('dla'),
			onDeselect: () => resetAttr('dla'),
		});
	}

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
								<AtrcControlRange
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
								<AtrcControlSelect
									label={__('Timing function', 'atrc-prefix-atrc')}
									wrapProps={{
										className: 'at-flx-grw-1',
									}}
									value={tmgFn}
									options={TimingFunctionsOptions()}
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
								<AtrcControlRange
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
