/*Value Structure
Type object
{
cl:'',
grd:'',
}

**/

/*WordPress*/
import { __ } from '@wordpress/i18n';

import { ColorIndicator } from '@wordpress/components';

// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import { useRef } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';
import AtrcResetButtonIcon from '../../atoms/reset-button-icon';

import AtrcDropdown from '../dropdown';
import AtrcColorGradientControl from '../control-color-gradient';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
export const AtrcControlDropdownColorGradientAllowedKeys = ['cl', 'grd'];

const ColorIndicatorValue = (value) => {
	if (!value) {
		return null;
	}
	if (value.cl) {
		return value.cl;
	}
	if (value.grd) {
		return value.grd;
	}
	return null;
};

const RenderControl = (props) => {
	// Shouldn't be needed but right now the ColorGradientsPanel
	// can trigger both onChangeColor and onChangeBackground
	// synchronously causing our two callbacks to override changes
	// from each other.

	const {
		onChange = () => {},
		variant = '',
		className = '',
		...defaultProps
	} = props;

	const localValues = useRef(props.value);
	const value = localValues.current;

	const changeHandler = () => {
		onChange(localValues.current);
	};

	const setColorAttr = (newVal, type) => {
		localValues.current = {
			...localValues.current,
			...{
				[type]: newVal,
			},
		};
		changeHandler();
	};

	return (
		<AtrcDropdown
			className={classnames(
				AtrcPrefix('ctrl-dropdown-cl-grd'),
				className,
				variant ? AtrcPrefix('ctrl-dropdown-cl-grd') + '-' + variant : ''
			)}
			renderToggle={({ isOpen, onToggle }) => (
				<AtrcWrap
					className='at-flx at-al-itm-ctr at-gap'
					onClick={onToggle}>
					<ColorIndicator
						// eslint-disable-next-line no-nested-ternary
						colorValue={ColorIndicatorValue(props.value)}
					/>
					<AtrcLabel variant='color-picker'>
						{__('Color', 'atrc-prefix-atrc')}
					</AtrcLabel>
				</AtrcWrap>
			)}
			renderContent={() => (
				<AtrcColorGradientControl
					variant='dropdown'
					enableAlpha
					colorValue={value && value.cl}
					gradientValue={value && value.grd}
					label={__('Color')}
					onColorChange={(newValue) => setColorAttr(newValue, 'cl')}
					onGradientChange={(newValue) => setColorAttr(newValue, 'grd')}
				/>
			)}
			{...defaultProps}
		/>
	);
};

const AtrcControlDropdownColorGradient = (props) => {
	const { allowReset = true, value = {}, defaultValue = {}, onChange } = props;

	if (allowReset) {
		return (
			<AtrcWrap className='at-flx at-al-itm-ctr at-jfy-cont-btw'>
				<RenderControl {...props} />
				<AtrcResetButtonIcon
					defaultValue={defaultValue}
					value={value}
					onClick={() => onChange({})}
				/>
			</AtrcWrap>
		);
	}

	return <RenderControl {...props} />;
};
export default AtrcControlDropdownColorGradient;
