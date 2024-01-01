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
	CustomColumnsExistingValue,
	NewValWithCustom,
	TwoColumnsOptions,
} from '../options';

/* Local */
const TwoColumnsLayout = (props) => {
	const { value, onChange = () => {} } = props;

	const NewExistingValue = useMemo(() => {
		if (!value) {
			return { selectBtn: value, sliderVal: [50], customWidth: '50-50' };
		}

		return CustomColumnsExistingValue({ value, colNum: 2 });
	}, [value]);

	const setColumn = (newVal) => {
		onChange(NewValWithCustom({ newVal, NewExistingValue }));
	};

	const TwoColumnsOptionsCloned = cloneDeep(TwoColumnsOptions());
	TwoColumnsOptionsCloned.push({
		label: __('All full width', 'atrc-prefix-atrc'),
		value: '12-12',
		icon: () => (
			<svg
				className={classnames('at-svg', 'at-w', 'at-h')}
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 68 68'>
				<path d='M4,35.5H64a2,2,0,0,1,2,2V64a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V37.5A2,2,0,0,1,4,35.5Zm60,2H4V64H64Z' />
				<path d='M4,2H64a2,2,0,0,1,2,2V30.5a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2ZM64,4H4V30.5H64Z' />
			</svg>
		),
	});

	TwoColumnsOptionsCloned.push(CustomColumnOption());

	return (
		<>
			<AtrcControlSelectButton
				label={__('Two columns layout', 'atrc-prefix-atrc')}
				value={NewExistingValue.selectBtn}
				options={TwoColumnsOptionsCloned}
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

export default TwoColumnsLayout;
