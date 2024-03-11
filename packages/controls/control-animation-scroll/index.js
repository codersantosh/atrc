/*Attributes Structure
Type Object
{
    "ani":"",
    "dla":"",
    "dur":"",
    "iter":"",

    "type":"",
    "on3D":"",
    "ppv":"",

    "translX":"",
    "translY":"",
    "rotA":"",
    "rotX":"",
    "rotY":"",
    "sclX":"",
    "sclY":"",
    "skewX":"",
    "skewY":"",
    "orgX":"",
    "orgY":"",
    "opa":"",
    "blr":"",
}
 * */

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

import {
	isEmpty,
	map,
	reduce,
	filter,
	keys,
	merge,
	pick,
	isArray,
	cloneDeep,
} from 'lodash';

/*Controls*/
import AtrcControlSelect from '../control-select';
import AtrcControlToggle from '../control-toggle';
import AtrcControlUnit from '../control-unit';
import AtrcControlAnimationAnimateCss from '../control-animation-animate-css';
import AtrcControlTransform from '../control-transform';

/* Molecules */
import AtrcNotice from '../../molecules/notice';
import AtrcPanelTools from '../../molecules/panel-tools';
import AtrcPanelRow from '../../molecules/panel-row';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/

/*same for initial and new*/
const mappingPredefinedValues = (value) => {
	const allowedProperties = keys({
		ani: 0,
		dla: 0,
		dur: 0,
		iter: 0,
	});
	return value
		? reduce(
				filter(keys(value), (prop) => allowedProperties.includes(prop)),
				(obj, prop) => ({ ...obj, [prop]: value[prop] }),
				{}
		  )
		: {};
};

/*same for initial and new*/
const allowedProperties = keys({
	ani: 0,
	dla: 0,
	dur: 0,
	iter: 0,
	type: 0,
	on3D: 0,
	ppv: 0,
	translX: 0,
	translY: 0,
	translZ: 0,
	rotA: 0,
	rotX: 0,
	rotY: 0,
	rotZ: 0,
	sclX: 0,
	sclY: 0,
	sclZ: 0,
	skewX: 0,
	skewY: 0,
	opa: 0,
	blr: 0,
});

const mappingNewStyleInitialValues = (value) => {
	return value
		? reduce(
				filter(keys(value), (prop) => allowedProperties.includes(prop)),
				(obj, prop) => ({ ...obj, [prop]: value[prop] }),
				{}
		  )
		: {};
};

const updateValueProps = (newVal, value) => {
	if (!newVal || isEmpty(newVal)) {
		return {};
	}

	const updatedValue = merge({}, value, newVal);

	return pick(updatedValue, allowedProperties);
};

const CustomAnimation = ({ label = '', value, onChange, resetCustom }) => {
	const setNewStyleValuesAttr = (newVal) => {
		const newValues = updateValueProps(newVal, value);
		onChange(newValues);
	};

	const setAttr = (newVal, type) => {
		const valueCloned = cloneDeep(value);
		valueCloned[type] = newVal;
		onChange(valueCloned);
	};

	return (
		<>
			<AtrcPanelRow className={classnames('at-m')}>
				<AtrcControlToggle
					label={__('Use 3D Transforms', 'atrc-prefix-atrc')}
					checked={value && value.on3D}
					onChange={() => setAttr(!(value && value.on3D), 'on3D')}
				/>
			</AtrcPanelRow>
			{value && value.on3D ? (
				<AtrcPanelRow className={classnames('at-m')}>
					<AtrcControlUnit
						label={__('Perspective', 'atrc-prefix-atrc')}
						value={value && value.ppv}
						onChange={(newVal) => setAttr(newVal, 'ppv')}
					/>
				</AtrcPanelRow>
			) : null}
			<AtrcPanelRow className={classnames('at-m')}>
				<AtrcControlSelect
					label={__('Type', 'atrc-prefix-atrc')}
					value={value && value.type}
					options={[
						{
							label: __('Visible on scroll', 'atrc-prefix-atrc'),
							value: 'visible',
						},
						{
							label: __('Progressive on scroll', 'atrc-prefix-atrc'),
							value: 'progressive',
						},
					]}
					onChange={(newVal) => setAttr(newVal, 'type')}
				/>
			</AtrcPanelRow>
			<AtrcControlTransform
				label={
					'progressive' === value.type
						? __('Final transform', 'atrc-prefix-atrc')
						: __('New transform', 'atrc-prefix-atrc')
				}
				value={mappingNewStyleInitialValues(value)}
				onChange={setNewStyleValuesAttr}
				allow3D={value && value.on3D}
				allowExtra={true}
			/>
			<AtrcNotice
				isDismissible={false}
				autoDismiss={false}>
				{__('Optional:', 'atrc-prefix-atrc')}
				{'progressive' === value.type
					? __(
							'For initial transformation, use the transform options.',
							'atrc-prefix-atrc'
					  )
					: __(
							'For a smooth transformation, use the transition options.',
							'atrc-prefix-atrc'
					  )}
			</AtrcNotice>
		</>
	);
};

const RenderTabPanel = ({
	label = '',
	value,
	onChange,
	tab = 'predefined',
	resetCustom,
}) => {
	if ('predefined' === tab) {
		return (
			<AtrcControlAnimationAnimateCss
				label={label}
				value={mappingPredefinedValues(value)}
				onChange={onChange}
			/>
		);
	}
	return (
		<CustomAnimation
			label={label}
			value={value}
			onChange={onChange}
			resetCustom={resetCustom}
		/>
	);
};

const AtrcControlAnimationScroll = (props) => {
	const {
		label = __('Animation scroll', 'atrc-prefix-atrc'),
		value = {},
		variant = '',
		className = '',
		onChange = () => {},
		allowedOptions = true,
	} = props;

	const doResetPredefined = (valueCloned) => {
		delete valueCloned.ani;
		delete valueCloned.dla;
		delete valueCloned.dur;
		delete valueCloned.iter;

		return valueCloned;
	};

	const doResetCustom = (valueCloned) => {
		delete valueCloned.type;
		delete valueCloned.on3D;
		delete valueCloned.ppv;

		delete valueCloned.translX;
		delete valueCloned.translY;
		delete valueCloned.translZ;
		delete valueCloned.rotA;
		delete valueCloned.rotX;
		delete valueCloned.rotY;
		delete valueCloned.rotZ;
		delete valueCloned.sclX;
		delete valueCloned.sclY;
		delete valueCloned.sclZ;
		delete valueCloned.skewX;
		delete valueCloned.skewY;
		delete valueCloned.opa;
		delete valueCloned.blr;

		return valueCloned;
	};

	const setPredefinedAttr = (newVal) => {
		const changedValues = mappingPredefinedValues(newVal);
		onChange(doResetCustom(changedValues));
	};

	const setCustomAttr = (newVal) => {
		onChange(doResetPredefined(newVal));
	};

	const resetPredefined = () => {
		const valueCloned = cloneDeep(value);
		onChange(doResetPredefined(valueCloned));
	};

	const resetCustom = () => {
		const valueCloned = cloneDeep(value);
		onChange(doResetCustom(valueCloned));
	};

	const resetAll = () => {
		onChange({});
	};

	const hasTabValue = (tab) => {
		if (!value || isEmpty(value)) {
			return false;
		}

		if (tab === 'predefined') {
			return !!(value.ani || value.dla || value.dur || value.iter);
		}

		return !!(
			value.type ||
			value.on3D ||
			value.ppv ||
			value.translX ||
			value.translY ||
			value.translZ ||
			value.rotA ||
			value.rotX ||
			value.rotY ||
			value.rotZ ||
			value.sclX ||
			value.sclY ||
			value.sclZ ||
			value.skewX ||
			value.skewY ||
			value.opa ||
			value.blr
		);
	};

	const AllTabs = [];

	if (
		true === allowedOptions ||
		(isArray(allowedOptions) && allowedOptions.includes('predefined'))
	) {
		AllTabs.push({
			name: 'predefined',
			title: __('Predefined', 'atrc-prefix-atrc'),
			hasValue: hasTabValue('predefined'),
			onDeselect: () => resetPredefined(),
		});
	}
	if (
		true === allowedOptions ||
		(isArray(allowedOptions) && allowedOptions.includes('custom'))
	) {
		AllTabs.push({
			name: 'custom',
			title: __('Custom', 'atrc-prefix-atrc'),
			hasValue: hasTabValue('custom'),
			onDeselect: () => resetCustom(),
		});
	}

	return (
		<AtrcPanelTools
			className={classnames(
				AtrcPrefix('ctrl-ani-scr'),
				className,
				variant ? AtrcPrefix('ctrl-ani-scr') + '-' + variant : ''
			)}
			label={label}
			resetAll={resetAll}
			isRadio={true}
			tools={AllTabs}>
			{(activeItems) =>
				map(activeItems, (tab, iDx) => (
					<RenderTabPanel
						value={value}
						onChange={(newVal) => {
							if ('predefined' === tab) {
								setPredefinedAttr(newVal);
							} else {
								setCustomAttr(newVal);
							}
						}}
						tab={tab}
						resetCustom={resetCustom}
						key={iDx}
					/>
				))
			}
		</AtrcPanelTools>
	);
};
export default AtrcControlAnimationScroll;
