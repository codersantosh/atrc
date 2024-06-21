import React from 'react';

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
import { cloneDeep } from 'lodash';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';

/*Molecules*/
import AtrcPanelRow from '../../molecules/panel-row';

/* Controls */
import AtrcControlSelect from '../control-select';
import AtrcTextControl from '../control-text';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/* Internal */
import { AnimationOptions } from './options';

/*Local*/
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
		const valueCloned = cloneDeep(value);
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
			<AtrcPanelRow className={classnames('at-m')}>
				<AtrcControlSelect
					label={__('Animation', 'atrc-prefix-atrc')}
					value={ani}
					options={AnimationOptions()}
					onChange={(newVal) => setAttr(newVal, 'ani')}
				/>
			</AtrcPanelRow>
			<AtrcPanelRow className={classnames('at-m')}>
				<AtrcTextControl
					label={__('Delay (Seconds)', 'atrc-prefix-atrc')}
					value={dla}
					type='number'
					min={0}
					onChange={(newVal) => setAttr(newVal, 'dla')}
				/>
			</AtrcPanelRow>

			<AtrcPanelRow className={classnames('at-m')}>
				<AtrcTextControl
					label={__('Duration (Seconds)', 'atrc-prefix-atrc')}
					value={dur}
					type='number'
					min={0}
					onChange={(newVal) => setAttr(newVal, 'dur')}
				/>
			</AtrcPanelRow>
			<AtrcPanelRow className={classnames('at-m')}>
				<AtrcTextControl
					label={__('Iteration', 'atrc-prefix-atrc')}
					value={iter}
					type='number'
					min={1}
					onChange={(newVal) => setAttr(newVal, 'iter')}
				/>
			</AtrcPanelRow>
		</AtrcWrap>
	);
};
export default AtrcControlAnimationAnimateCss;
