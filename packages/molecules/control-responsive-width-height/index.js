/*Attributes Structure
Type Object
{
    "w":"",
    "smW":"",
    "mdW":"",
    "lgW":"",
    "xlW":"",
    "xxlW":"",
    "h":"",
    "smH":"",
    "mdH":"",
    "lgH":"",
    "xlH":"",
    "xxlH":""
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';

import AtrcPanelRow from '../panel-row';
import AtrcControlUnitDevice from '../control-unit-device';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcControlResponsiveWH = (props) => {
	const {
		value = {},
		onChange = () => {},
		label = '',
		variant = '',
		className = '',
		...defaultProps
	} = props;

	const setWidth = (newVal) => {
		const valueCloned = Object.assign({}, value);

		delete valueCloned.w;
		delete valueCloned.smW;
		delete valueCloned.mdW;
		delete valueCloned.lgW;
		delete valueCloned.xlW;
		delete valueCloned.xxlW;

		if (newVal.xs) {
			valueCloned.w = newVal.xs;
		}
		if (newVal.sm) {
			valueCloned.smW = newVal.sm;
		}
		if (newVal.md) {
			valueCloned.mdW = newVal.md;
		}
		if (newVal.lg) {
			valueCloned.lgW = newVal.lg;
		}
		if (newVal.xl) {
			valueCloned.xlW = newVal.xl;
		}
		if (newVal.xxl) {
			valueCloned.xxlW = newVal.xxl;
		}
		onChange(valueCloned);
	};

	const setHeight = (newVal) => {
		const valueCloned = Object.assign({}, value);

		delete valueCloned.h;
		delete valueCloned.smH;
		delete valueCloned.mdH;
		delete valueCloned.lgH;
		delete valueCloned.xlH;
		delete valueCloned.xxlH;

		if (newVal.xs) {
			valueCloned.h = newVal.xs;
		}
		if (newVal.sm) {
			valueCloned.smH = newVal.sm;
		}
		if (newVal.md) {
			valueCloned.mdH = newVal.md;
		}
		if (newVal.lg) {
			valueCloned.lgH = newVal.lg;
		}
		if (newVal.xl) {
			valueCloned.xlH = newVal.xl;
		}
		if (newVal.xxl) {
			valueCloned.xxlH = newVal.xxl;
		}
		onChange(valueCloned);
	};

	return (
		<AtrcWrap
			className={classnames(
				AtrcPrefix('ctrl-resp-w-h'),
				className,
				variant ? AtrcPrefix('ctrl-resp-w-h') + '-' + variant : ''
			)}
			{...defaultProps}>
			{label ? <AtrcLabel>{label}</AtrcLabel> : null}
			<>
				<AtrcPanelRow className={classnames('at-m')}>
					<AtrcControlUnitDevice
						label={__('Width', 'atrc-prefix-atrc')}
						className={classnames('at-flx-grw-1')}
						value={{
							xs: value && value.w,
							sm: value && value.smW,
							md: value && value.mdW,
							lg: value && value.lgW,
							xl: value && value.xlW,
							xxl: value && value.xxlW,
						}}
						onChange={setWidth}
					/>
				</AtrcPanelRow>
				<AtrcPanelRow className={classnames('at-m')}>
					<AtrcControlUnitDevice
						label={__('Height', 'atrc-prefix-atrc')}
						className={classnames('at-flx-grw-1')}
						value={{
							xs: value && value.h,
							sm: value && value.smH,
							md: value && value.mdH,
							lg: value && value.lgH,
							xl: value && value.xlH,
							xxl: value && value.xxlH,
						}}
						onChange={setHeight}
					/>
				</AtrcPanelRow>
			</>
		</AtrcWrap>
	);
};
export default AtrcControlResponsiveWH;
