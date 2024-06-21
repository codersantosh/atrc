import React from 'react';

/* WordPress */
import { __ } from '@wordpress/i18n';
import { useMemo } from '@wordpress/element';

/* Library */
import classnames from 'classnames';
import { cloneDeep } from 'lodash';

/* Controls */
import AtrcControlSelectButton from '../../control-select-button';
import AtrcControlCompoundSlider from '../../control-compound-slider';

/* Internal */
import {
	CustomColumnOption,
	FiveColumnsOptions,
	NewValWithCustom,
	CustomColumnsExistingValue,
} from '../options';

/* Local */
const FiveColumnsLayout = (props) => {
	const { value, onChange = () => {} } = props;

	const NewExistingValue = useMemo(() => {
		if (!value) {
			return {
				selectBtn: value,
				sliderVal: [20, 40, 60, 80],
				customWidth: '20-20-20-20-20',
			};
		}

		return CustomColumnsExistingValue({ value, colNum: 5 });
	}, [value]);

	const setColumn = (newVal) => {
		onChange(NewValWithCustom({ newVal, NewExistingValue }));
	};

	const FiveColumnsOptionsCloned = cloneDeep(FiveColumnsOptions());

	FiveColumnsOptionsCloned.push({
		label: __('All full width', 'atrc-prefix-atrc'),
		value: '12-12-12-12-12',
		icon: () => (
			<svg
				className={classnames('at-svg', 'at-w', 'at-h')}
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 68 68'>
				<path d='M64,12.4H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H64a2,2,0,0,1,2,2v6.4A2,2,0,0,1,64,12.4ZM4,4H4v6.4H64V4Z' />
				<path d='M64,25.8H4a2,2,0,0,1-2-2V17.4a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2v6.4A2,2,0,0,1,64,25.8ZM4,17.4H4v6.4H64V17.4Z' />
				<path d='M64,39.2H4a2,2,0,0,1-2-2V30.8a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2v6.4A2,2,0,0,1,64,39.2ZM4,30.8H4v6.4H64V30.8Z' />
				<path d='M64,52.6H4a2,2,0,0,1-2-2V44.2a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2v6.4A2,2,0,0,1,64,52.6ZM4,44.2H4v6.4H64V44.2Z' />
				<path d='M64,66H4a2,2,0,0,1-2-2V57.6a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2V64A2,2,0,0,1,64,66ZM4,57.6H4V64H64V57.6Z' />
			</svg>
		),
	});
	FiveColumnsOptionsCloned.push(CustomColumnOption());

	return (
		<>
			<AtrcControlSelectButton
				label={__('Five columns layout', 'atrc-prefix-atrc')}
				value={value}
				options={FiveColumnsOptionsCloned}
				onChange={setColumn}
				allowReset={false}
			/>
			{'cust' === NewExistingValue.selectBtn ? (
				<AtrcControlCompoundSlider
					value={NewExistingValue.sliderVal}
					onChange={setColumn}
				/>
			) : null}
		</>
	);
};

export default FiveColumnsLayout;
