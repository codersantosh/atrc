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
	FourColumnsOptions,
	NewValWithCustom,
	CustomColumnsExistingValue,
} from '../options';

/* Local */
const FourColumnsLayout = (props) => {
	const { value, onChange = () => {} } = props;

	const NewExistingValue = useMemo(() => {
		if (!value) {
			return {
				selectBtn: value,
				sliderVal: [25, 50, 75],
				customWidth: '25-25-25-25',
			};
		}

		return CustomColumnsExistingValue({ value, colNum: 4 });
	}, [value]);

	const setColumn = (newVal) => {
		onChange(NewValWithCustom({ newVal, NewExistingValue }));
	};

	const FourColumnsOptionsCloned = cloneDeep(FourColumnsOptions());

	FourColumnsOptionsCloned.push({
		label: __('6-6-6-6', 'atrc-prefix-atrc'),
		value: '6-6-6-6',
		icon: () => (
			<svg
				className={classnames('at-svg', 'at-w', 'at-h')}
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 68 68'>
				<path d='M30.5,32.5H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H30.5a2,2,0,0,1,2,2V30.5A2,2,0,0,1,30.5,32.5ZM4,4H4V30.5H30.5V4Z' />
				<path d='M64,32.5H37.5a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2V30.5A2,2,0,0,1,64,32.5ZM37.5,4h0V30.5H64V4Z' />
				<path d='M30.5,66H4a2,2,0,0,1-2-2V37.5a2,2,0,0,1,2-2H30.5a2,2,0,0,1,2,2V64A2,2,0,0,1,30.5,66ZM4,37.5H4V64H30.5V37.5Z' />
				<path d='M64,66H37.5a2,2,0,0,1-2-2V37.5a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2V64A2,2,0,0,1,64,66ZM37.5,37.5h0V64H64V37.5Z' />
			</svg>
		),
	});

	FourColumnsOptionsCloned.push({
		label: __('All full width', 'atrc-prefix-atrc'),
		value: '12-12-12-12',
		icon: () => (
			<svg
				className={classnames('at-svg', 'at-w', 'at-h')}
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 68 68'>
				<path d='M65,15.8H3a1,1,0,0,1-1-1V3A1,1,0,0,1,3,2H65a1,1,0,0,1,1,1V14.8A1,1,0,0,1,65,15.8Zm-60-2H63a1,1,0,0,0,1-1V5a1,1,0,0,0-1-1H5A1,1,0,0,0,4,5v7.8A1,1,0,0,0,5,13.8Z' />
				<path d='M65,32.5H3a1,1,0,0,1-1-1V19.8a1,1,0,0,1,1-1H65a1,1,0,0,1,1,1V31.5A1,1,0,0,1,65,32.5Zm-60-2H63a1,1,0,0,0,1-1V21.8a1,1,0,0,0-1-1H5a1,1,0,0,0-1,1v7.8A1,1,0,0,0,5,30.5Z' />
				<path d='M65,49.3H3a1,1,0,0,1-1-1V36.5a1,1,0,0,1,1-1H65a1,1,0,0,1,1,1V48.3A1,1,0,0,1,65,49.3Zm-60-2H63a1,1,0,0,0,1-1V38.5a1,1,0,0,0-1-1H5a1,1,0,0,0-1,1v7.8A1,1,0,0,0,5,47.3Z' />
				<path d='M65,66H3a1,1,0,0,1-1-1V53.3a1,1,0,0,1,1-1H65a1,1,0,0,1,1,1V65A1,1,0,0,1,65,66ZM5,64H63a1,1,0,0,0,1-1V55.3a1,1,0,0,0-1-1H5a1,1,0,0,0-1,1V63A1,1,0,0,0,5,64Z' />
			</svg>
		),
	});

	FourColumnsOptionsCloned.push(CustomColumnOption());

	return (
		<>
			<AtrcControlSelectButton
				label={__('Four columns layout', 'atrc-prefix-atrc')}
				value={value}
				options={FourColumnsOptionsCloned}
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

export default FourColumnsLayout;
