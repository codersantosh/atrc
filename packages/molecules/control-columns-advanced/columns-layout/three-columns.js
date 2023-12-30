/* WordPress */
import { __ } from '@wordpress/i18n';
import { useMemo } from '@wordpress/element';

/* Library */
import classnames from 'classnames';
import { cloneDeep } from 'lodash';

/* Inbuilt */
import AtrcControlSelectButton from '../../control-select-button';

import AtrcControlCompoundSlider from '../../control-compound-slider';

import {
	CustomColumnOption,
	ThreeColumnsOptions,
	NewValWithCustom,
	CustomColumnsExistingValue,
} from '../options';

const ThreeColumnsOptionsCloned = cloneDeep(ThreeColumnsOptions);

ThreeColumnsOptionsCloned.push({
	label: __('All full width', 'atrc-prefix-atrc'),
	value: '12-12-12',
	icon: () => (
		<svg
			className={classnames('at-svg', 'at-w', 'at-h')}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 68 68'>
			<path d='M64,21.3H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H64a2,2,0,0,1,2,2V19.3A2,2,0,0,1,64,21.3ZM4,4H4V19.3H64V4Z' />
			<path d='M64,43.7H4a2,2,0,0,1-2-2V26.3a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2V41.7A2,2,0,0,1,64,43.7ZM4,26.3H4V41.7H64V26.3Z' />
			<path d='M64,66H4a2,2,0,0,1-2-2V48.7a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2V64A2,2,0,0,1,64,66ZM4,48.7H4V64H64V48.7Z' />
		</svg>
	),
});

ThreeColumnsOptionsCloned.push(CustomColumnOption);

/* Local */
const ThreeColumnsLayout = (props) => {
	const { value, onChange = () => {} } = props;

	const NewExistingValue = useMemo(() => {
		if (!value) {
			return {
				selectBtn: value,
				sliderVal: [33.33, 66.66],
				customWidth: '33.33-33.33-33.33',
			};
		}

		return CustomColumnsExistingValue({ value, colNum: 3 });
	}, [value]);

	const setColumn = (newVal) => {
		onChange(NewValWithCustom({ newVal, NewExistingValue }));
	};

	return (
		<>
			<AtrcControlSelectButton
				label={__('Three columns layout', 'atrc-prefix-atrc')}
				value={value}
				options={ThreeColumnsOptionsCloned}
				onChange={setColumn}
				allowReset={false}
			/>
			{'cust' === NewExistingValue.selectBtn ? (
				<AtrcControlCompoundSlider
					values={NewExistingValue.sliderVal}
					onChange={setColumn}
				/>
			) : null}
		</>
	);
};

export default ThreeColumnsLayout;
