/* WordPress */
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcSelect from '../../atoms/select';

import AtrcPanelRow from '../panel-row';
import AtrcControlSvg from '../control-select-svg';

import SvgDividerOptions from './options';

/*Local*/
const SelectedShape = (value, options) => {
	const selectedShape = options.filter(function (item) {
		return item.value === value;
	});
	if (selectedShape.length) {
		return selectedShape[0];
	}
	return null;
};

export const AtrcControlDividerDefaultSvg = ({ svgDefd }) => {
	const selectedShape = SelectedShape(svgDefd, SvgDividerOptions());
	if (selectedShape) {
		return selectedShape.svg();
	}
	return null;
};

const AtrcControlDivider = (props) => {
	const { value = {}, onChange = () => {}, ...defaultProps } = props;
	const setAttr = (newVal, type) => {
		const valueCloned = Object.assign({}, value);
		valueCloned[type] = newVal;
		onChange(valueCloned);
	};

	const setChange = (newVal) => {
		const valueCloned = Object.assign({}, value);
		if (newVal) {
			if (newVal.svgDefd) {
				valueCloned.svgDefd = newVal.svgDefd;
				valueCloned.svg = '';
			} else if (newVal.svgCust) {
				valueCloned.svg = newVal.svgCust;
			}
			valueCloned.svgFrm = newVal.svgFrm;
		}
		onChange(valueCloned);
	};

	return (
		<>
			<AtrcPanelRow className={classnames('at-m')}>
				<AtrcSelect
					label={__('Divider type', 'atrc-prefix-atrc')}
					value={value.type}
					options={[
						{
							label: __('Default', 'atrc-prefix-atrc'),
							value: '',
						},
						{
							label: __('Svg', 'atrc-prefix-atrc'),
							value: 'svg',
						},
					]}
					onChange={(newVal) => setAttr(newVal, 'type')}
				/>
			</AtrcPanelRow>

			{value && value.type === 'svg' ? (
				<AtrcPanelRow className={classnames('at-m')}>
					<AtrcControlSvg
						value={{
							svgFrm: value.svgFrm,
							svgDefd: value.svgDefd,
							svgCust: 'cust' === value.svgFrm ? value.svg : '',
						}}
						onChange={setChange}
						definedOptions={SvgDividerOptions()}
						alloweColor={false}
						alloweSettings={false}
						{...defaultProps}
					/>
				</AtrcPanelRow>
			) : null}
		</>
	);
};

export default AtrcControlDivider;
