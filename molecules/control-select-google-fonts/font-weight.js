/*WordPress*/
import { useMemo } from '@wordpress/element';

/*Inbuilt*/
import { AtrcSelect } from '../../atoms';

import { reduce, uniqBy } from 'lodash';

/*Local*/
const AtrcControlSelectGoogleFontsWeight = (props) => {
	const { fonts = [], family = '', isMulti = true, ...defaultProps } = props;

	const options = useMemo(() => {
		if (family) {
			const selectedFamily = fonts.find((item) => item.family === family);
			if (selectedFamily && selectedFamily.variants) {
				return reduce(
					selectedFamily.variants,
					(accumulator, currentValue, currentKey) => {
						let item = null;
						if (currentValue.includes('regular')) {
							item = 400;
						} else {
							item = parseInt(currentValue);
						}

						if (item) {
							accumulator.push({ label: String(item), value: String(item) });
						}
						return uniqBy(accumulator, (item) => item.value);
					},
					[]
				);
			}
		}
		return [];
	}, [family]);

	return (
		<AtrcSelect
			{...defaultProps}
			options={options}
			isMulti={isMulti}
			multiValType='array'
		/>
	);
};
export default AtrcControlSelectGoogleFontsWeight;
