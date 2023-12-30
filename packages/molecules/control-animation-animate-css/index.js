/*Attributes Structure
Type Object
{
    "ani":"",
    "dla":"",
    "dur":"",
    "iter":"",
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';
import AtrcSelect from '../../atoms/select';
import AtrcText from '../../atoms/text';

import { AnimationOptions } from './options';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcControlAnimationAnimateCss = (props) => {
	const {
		value = {},
		variant = '',
		className = '',
		onChange = () => {},
		...defaultProps
	} = props;

	const { ani = '', dla = '', dur = '', iter = '' } = value;

	const setAttr = (newVal, type) => {
		const valueCloned = Object.assign({}, value);
		valueCloned[type] = newVal;
		onChange(valueCloned);
	};

	return (
		<AtrcWrap
			className={classnames(
				AtrcPrefix('ctrl-ani-animate-css'),
				className,
				variant ? AtrcPrefix('ctrl-ani-animate-css') + '-' + variant : ''
			)}
			{...defaultProps}>
			<AtrcSelect
				label={__('Animation', 'atrc-prefix-atrc')}
				value={ani}
				options={AnimationOptions}
				onChange={(newVal) => setAttr(newVal, 'ani')}
			/>
			<AtrcText
				label={__('Delay (Seconds)', 'atrc-prefix-atrc')}
				value={dla}
				type='number'
				min={0}
				onChange={(newVal) => setAttr(newVal, 'dla')}
			/>

			<AtrcText
				label={__('Duration (Seconds)', 'atrc-prefix-atrc')}
				value={dur}
				type='number'
				min={0}
				onChange={(newVal) => setAttr(newVal, 'dur')}
			/>
			<AtrcText
				label={__('Iteration', 'atrc-prefix-atrc')}
				value={iter}
				type='number'
				min={1}
				onChange={(newVal) => setAttr(newVal, 'iter')}
			/>
		</AtrcWrap>
	);
};
export default AtrcControlAnimationAnimateCss;
