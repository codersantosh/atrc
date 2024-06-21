import React from 'react';

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

import { isString, reduce } from 'lodash';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';
import AtrcWrapLib from '../../atoms/wrap-lib';
import AtrcResetButtonIcon from '../../atoms/reset-button-icon';
import { AtrcResetWrap } from '../../atoms/reset-button-icon';
import AtrcLabel from '../../atoms/label';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';
import AtrcText from './../../atoms/text/index';

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
		<AtrcControlSelect
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
		help = '',
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
	}, [value, options]);

	const customStyles = {
		control: (provided, state) => ({
			...provided,
			background: 'var(--at-multi-select-ctrl)',
			borderRadius: `var(--at-bdr-rad)`,
			borderColor: `var(--at-border-color)`,
			minHeight: `var(--at-h)`,
			height: `var(--at-h)`,
			boxShadow: state.isFocused ? null : null,
		}),

		// input's container
		valueContainer: (provided, state) => ({
			...provided,
			height: `var(--at-h)`,
			padding: '0 6px',
			borderColor: `var(--at-border-color)`,
			background: 'var(--at-multi-select-cont)',
		}),

		// dropdown menu
		menu: (provided, state) => ({
			...provided,
			background: 'var(--at-multi-select-menu)',
			color: 'var(--at-base-color)',
		}),
		// dropdown menu option
		option: (base) => {
			return {
				...base,
				backgroundColor: 'var(--at-multi-select-option--bg)',
				color: 'var(--at-base-color)',

				'&:hover': {
					backgroundColor: 'var(--at-multi-select-option-bg--hover)',
					color: 'var(--at-base-color)',
				},
			};
		},
		// input
		input: (provided, state) => ({
			...provided,
			margin: '0px',
			height: `var(--at-h)`,
			background: 'var(--at-multi-select-input)',
		}),

		// dropdown indicator
		indicatorsContainer: (provided, state) => ({
			...provided,
			height: `var(--at-h)`,
			background: 'var(--at-multi-select-indicator)',
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
				AtrcPrefix('ctrl-select-multi'),
				wrapProps.className ? wrapProps.className : ''
			)}>
			{label && <AtrcLabel>{label}</AtrcLabel>}

			{isAsync ? (
				<AsyncSelect
					className={classnames(
						AtrcPrefix('ctrl-select'),
						AtrcPrefix('ctrl-select-multi-select'),
						className,
						variant ? AtrcPrefix('ctrl-select') + '-' + variant : ''
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
						AtrcPrefix('ctrl-select'),
						AtrcPrefix('ctrl-select-multi-select'),
						className,
						variant ? AtrcPrefix('ctrl-select') + '-' + variant : ''
					)}
					styles={customStyles}
					isMulti={isMulti}
					options={options}
					value={MapValue}
					onChange={doChange}
					{...defaultProps}
				/>
			)}
			{help ? (
				<AtrcText
					variant='help'
					className={classnames('at-m')}>
					{help}
				</AtrcText>
			) : null}
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
		allowReset,
		defaultValue,
		...defaultProps
	} = props;

	if (isMulti || isAsync) {
		return <ReactSelect {...props} />;
	}
	return (
		<SelectControl
			className={classnames(
				AtrcPrefix('ctrl-select'),
				className,
				variant ? AtrcPrefix('ctrl-select') + '-' + variant : ''
			)}
			onChange={onChange}
			options={options}
			value={value}
			{...defaultProps}
		/>
	);
};

const AtrcControlSelect = (props) => {
	const {
		allowReset = true,
		isMulti = false,
		value = '',
		defaultValue = '',
		wrapProps = {},
		resetWrapProps = {},
		onChange,
		options,
		children,
	} = props;

	return (
		<AtrcWrapLib
			className={classnames('at-flx-grw-1')}
			{...wrapProps}>
			{allowReset && !isMulti ? (
				<AtrcResetWrap
					{...resetWrapProps}
					className={classnames(
						AtrcPrefix('ctrl-select-rst'),
						resetWrapProps.className ? resetWrapProps.className : ''
					)}>
					<RenderComponent {...props} />
					<AtrcResetButtonIcon
						value={value}
						defaultValue={defaultValue}
						onClick={() => onChange(defaultValue)}
					/>
				</AtrcResetWrap>
			) : (
				<RenderComponent {...props} />
			)}
		</AtrcWrapLib>
	);
};
export default AtrcControlSelect;
