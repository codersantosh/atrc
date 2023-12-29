// Reference for multi select
//https://stackoverflow.com/questions/54218351/changing-height-of-react-select-component
/*WordPress*/
import { SelectControl } from '@wordpress/components';

import { useMemo } from '@wordpress/element';

import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';

import { isArray, isString, reduce } from 'lodash';

/*Inbuilt*/
import {
	AtrcWrap,
	AtrcResetButtonIcon,
	AtrcResetWrap,
	AtrcLabel,
} from '../index';

import AtrcPrefix from '../../prefix-vars';

/*Local*/
export function AtrcDynamicSelect(props) {
	let {
		label,
		value,
		onChange,
		showOptionNone = false,
		optionNoneValue = 0,
		options,
		className = '',
		wrapProps = {},
		isAsync = false,
		...defaultProps
	} = props;

	const setId = (val) => {
		if (isString(val)) {
			onChange(Number(val));
		} else {
			onChange(val);
		}
	};

	if (showOptionNone && !isAsync) {
		options = [
			{
				value: optionNoneValue,
				label: __('Select', 'atrc-prefix-atrc'),
			},
			...options,
		];
	}

	return (
		<AtrcSelect
			label={label}
			className={className}
			options={options}
			onChange={setId}
			value={value}
			wrapProps={wrapProps}
			isAsync={isAsync}
			{...defaultProps}
		/>
	);
}

const ReactSelect = (props) => {
	const {
		label = '',
		variant = '',
		className = '',
		isMulti = false,
		isAsync = false,
		multiValType = '',
		valType = '',
		value,
		options,
		loadOptions,
		onChange = () => {},
		wrapProps = {},
		...defaultProps
	} = props;

	const MapValue = useMemo(() => {
		if (!value) {
			return value;
		}
		if ('string' === multiValType || 'array' === multiValType) {
			let valArray = [];
			if ('string' === multiValType) {
				valArray = value.split(',');
			} else {
				valArray = value.slice(0);
			}
			return reduce(
				options,
				// eslint-disable-next-line no-unused-vars
				(accumulator, currentValue, currentKey) => {
					if (valArray.includes(currentValue.value)) {
						accumulator.push(currentValue);
					}
					return accumulator;
				},
				[]
			);
		}
	}, [value]);

	const customStyles = {
		control: (provided, state) => ({
			...provided,
			background: '',
			borderRadius: `var(--at-bdr-rad)`,
			borderColor: `var(--at-quaternary)`,
			minHeight: `var(--at-h)`,
			height: `var(--at-h)`,
			boxShadow: state.isFocused ? null : null,
		}),

		// eslint-disable-next-line no-unused-vars
		valueContainer: (provided, state) => ({
			...provided,
			height: `var(--at-h)`,
			padding: '0 6px',
		}),

		// eslint-disable-next-line no-unused-vars
		input: (provided, state) => ({
			...provided,
			margin: '0px',
			height: `var(--at-h)`,
		}),

		// eslint-disable-next-line no-unused-vars
		indicatorsContainer: (provided, state) => ({
			...provided,
			height: `var(--at-h)`,
		}),
	};

	const doChange = (newVal) => {
		if (isMulti) {
			if ('string' === multiValType || 'array' === multiValType) {
				const valArray = [];
				newVal.forEach(function (item) {
					valArray.push(item.value);
				});
				if ('array' === multiValType) {
					onChange(valArray);
				} else {
					onChange(valArray.toString());
				}
			} else {
				onChange(newVal);
			}
		} else if ('default' !== valType) {
			if (newVal && newVal.value) {
				onChange(newVal.value);
			} else {
				onChange('');
			}
		} else {
			onChange(newVal);
		}
	};
	return (
		<AtrcWrap
			{...wrapProps}
			className={classnames(
				AtrcPrefix('select-multi'),
				wrapProps.className ? wrapProps.className : ''
			)}>
			{label && <AtrcLabel>{label}</AtrcLabel>}

			{isAsync ? (
				<AsyncSelect
					className={classnames(
						AtrcPrefix('select'),
						AtrcPrefix('select-multi-select'),
						className,
						variant ? AtrcPrefix('select') + '-' + variant : ''
					)}
					cacheOptions
					defaultOptions
					styles={customStyles}
					isMulti={isMulti}
					loadOptions={loadOptions}
					onChange={doChange}
					{...defaultProps}
				/>
			) : (
				<Select
					className={classnames(
						AtrcPrefix('select'),
						AtrcPrefix('select-multi-select'),
						className,
						variant ? AtrcPrefix('select') + '-' + variant : ''
					)}
					styles={customStyles}
					isMulti={isMulti}
					options={options}
					value={MapValue}
					onChange={doChange}
					{...defaultProps}
				/>
			)}
		</AtrcWrap>
	);
};
const RenderComponent = (props) => {
	const {
		variant = '',
		className = '',
		isMulti = false,
		isAsync = false,
		value,
		options,
		onChange = () => {},
		wrapProps = {},
		defaultValue,
		...defaultProps
	} = props;

	if (isMulti || isAsync) {
		return <ReactSelect {...props} />;
	}
	return (
		<SelectControl
			className={classnames(
				AtrcPrefix('select'),
				className,
				variant ? AtrcPrefix('select') + '-' + variant : ''
			)}
			onChange={onChange}
			options={options}
			value={value}
			{...defaultProps}
		/>
	);
};
const AtrcSelect = (props) => {
	const {
		allowReset = true,
		isMulti = false,
		value = '',
		defaultValue = '',
		wrapProps = {},
		onChange,
		options,
		children,
	} = props;

	if (!(options && isArray(options) && options.length) && !children) {
		// return null;
	}
	if (allowReset && !isMulti) {
		return (
			<AtrcResetWrap
				{...wrapProps}
				className={classnames(
					AtrcPrefix('select-rst'),
					wrapProps.className ? wrapProps.className : ''
				)}>
				<RenderComponent {...props} />
				<AtrcResetButtonIcon
					value={value}
					defaultValue={defaultValue}
					onClick={() => onChange(defaultValue)}
				/>
			</AtrcResetWrap>
		);
	}
	return <RenderComponent {...props} />;
};
export default AtrcSelect;
