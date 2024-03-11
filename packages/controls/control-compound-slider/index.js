/* WordPress */
import { __ } from '@wordpress/i18n';
import { useMemo } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';

/* Atoms */
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';

/* Molecules */
import AtrcPanelRow from '../../molecules/panel-row';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/* Internal */
import ColSlider from './col-slider';
import ColInputs from './col-inputs';

/* Local */
export function AtrcControlCompoundSliderGetWidth(arr, total = 100) {
	const result = [];
	for (let i = 0; i < arr.length; i++) {
		if (i === 0) {
			result.push(parseFloat(arr[i].toFixed(1))); // Parse and format the first element
		} else {
			const diff = parseFloat((arr[i] - arr[i - 1]).toFixed(1)); // Calculate and format the difference
			result.push(diff);
		}
	}
	// Add the last value (total - last element of the original array)
	result.push(parseFloat((total - arr[arr.length - 1]).toFixed(1)));
	return result;
}

const AtrcControlCompoundSlider = (props) => {
	const {
		value,
		onChange,
		label = __('Custom widths', 'atrc-prefix-atrc'),
		className,
		variant,
		total = 100,
	} = props;

	const InputsWidth = useMemo(() => {
		if (value && value.length) {
			return AtrcControlCompoundSliderGetWidth(value, total);
		}
		return [];
	}, [value, total]);

	return (
		<AtrcPanelRow className={classnames('at-m')}>
			<AtrcWrap
				className={classnames(
					AtrcPrefix('ctrl-compound-slider'),
					className,
					variant ? AtrcPrefix('ctrl-compound-slider') + '-' + variant : ''
				)}>
				{label ? <AtrcLabel>{label}</AtrcLabel> : null}
				<ColSlider
					value={value}
					onChange={onChange}
				/>
				<ColInputs value={InputsWidth} />
			</AtrcWrap>
		</AtrcPanelRow>
	);
};

export default AtrcControlCompoundSlider;
