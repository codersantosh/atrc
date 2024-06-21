import React from 'react';

/*
* Values Structure
Type Object
{
    "t":"",
    "r":"",
    "b":"",
    "l":""
* }
* 
* Expected:
*  also if single value string
* */
/*WordPress*/
import { useMemo } from '@wordpress/element';

// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import { __experimentalBoxControl as BoxControl } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';
import { cloneDeep } from 'lodash';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';
import AtrcWrapLib from '../../atoms/wrap-lib';
import AtrcResetButtonIcon from '../../atoms/reset-button-icon';
import { AtrcResetWrap } from '../../atoms/reset-button-icon';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/*Local*/
export const AtrcControlBoxFourAllowedKeys = ['t', 'r', 'b', 'l'];

const RenderBoxControl = (props) => {
	const {
		variant = '',
		className = '',
		value,
		onChange,
		...defaultProps
	} = props;

	const newObj = {};

	if (value.t) {
		newObj.top = value.t;
	}
	if (value.r) {
		newObj.right = value.r;
	}
	if (value.b) {
		newObj.bottom = value.b;
	}
	if (value.l) {
		newObj.left = value.l;
	}

	return (
		<AtrcWrap
			className={classnames(
				AtrcPrefix('ctrl-box-four'),
				className,
				variant ? AtrcPrefix('ctrl-box-four') + '-' + variant : ''
			)}>
			<BoxControl
				allowReset={false}
				values={newObj}
				onChange={(newControl) => {
					const newValues = {};
					if (newControl.top) {
						newValues.t = newControl.top;
					}
					if (newControl.right) {
						newValues.r = newControl.right;
					}
					if (newControl.bottom) {
						newValues.b = newControl.bottom;
					}
					if (newControl.left) {
						newValues.l = newControl.left;
					}
					onChange(newValues);
				}}
				inputProps={{ min: -1000 }}
				{...defaultProps}
			/>
		</AtrcWrap>
	);
};

const AtrcControlBoxFour = (props) => {
	const {
		allowReset = true,
		value = '',
		valueType = '',
		splitOnAxis = false,
		defaultValue = undefined,
		wrapProps = {},
		resetWrapProps = {},
		onChange,
	} = props;

	const setChange = (newValues) => {
		if ('string' === valueType) {
			/* split is for inhouse fix */
			let stringValue = '';
			if (splitOnAxis) {
				const topVal = newValues.t || '';
				const splitedTopVal = topVal.split(' ');

				const rightVal = newValues.r || '';
				const splitedRightVal = rightVal.split(' ');

				stringValue = `${splitedTopVal[0]} ${splitedRightVal[0]}`;
			} else {
				const topVal = newValues.t || '';
				const splitedTopVal = topVal.split(' ');

				const rightVal = newValues.r || '';
				const splitedRightVal = rightVal.split(' ');

				const bottomVal = newValues.b || '';
				const splitedBottomVal = bottomVal.split(' ');

				const leftVal = newValues.l || '';
				const splitedLeftVal = leftVal.split(' ');

				stringValue = `${splitedTopVal[0]} ${splitedRightVal[0]} ${splitedBottomVal[0]} ${splitedLeftVal[0]}`;
			}
			onChange(stringValue);
		} else {
			onChange(newValues);
		}
	};

	const objValues = useMemo(() => {
		let objVal = {};

		if (typeof value === 'string') {
			const splitedValues = value.split(' ');

			const countValues = splitedValues.length;
			if (splitOnAxis) {
				objVal.t = splitedValues[0];
				objVal.r = splitedValues[1];
				objVal.b = splitedValues[0];
				objVal.l = splitedValues[1];
			} else {
				switch (countValues) {
					case 1:
						objVal.t = splitedValues[0];
						objVal.r = splitedValues[0];
						objVal.b = splitedValues[0];
						objVal.l = splitedValues[0];
						break;

					case 2:
						objVal.t = splitedValues[0];
						objVal.r = splitedValues[1];
						objVal.b = splitedValues[0];
						objVal.l = splitedValues[1];
						break;

					case 3 /* css shorthand */:
						objVal.t = splitedValues[0];
						objVal.r = splitedValues[1];
						objVal.b = splitedValues[3];
						objVal.l = splitedValues[1];
						break;

					case 4:
						objVal.t = splitedValues[0];
						objVal.r = splitedValues[1];
						objVal.b = splitedValues[2];
						objVal.l = splitedValues[3];
						break;

					default:
						break;
				}
			}
		} else if (value) {
			objVal = cloneDeep(value);
		}

		return objVal;
	}, [value, valueType, value]);

	if (allowReset) {
		return (
			<AtrcWrapLib
				className={classnames('at-flx-grw-1')}
				{...wrapProps}>
				<AtrcResetWrap
					{...resetWrapProps}
					className={classnames(
						AtrcPrefix('box-four-rst'),
						resetWrapProps.className ? resetWrapProps.className : ''
					)}>
					<RenderBoxControl
						{...props}
						value={objValues}
						splitOnAxis={splitOnAxis}
						onChange={setChange}
					/>
					<AtrcResetButtonIcon
						defaultValue={defaultValue}
						value={objValues}
						onClick={() => onChange(undefined)}
					/>
				</AtrcResetWrap>
			</AtrcWrapLib>
		);
	}

	return <RenderBoxControl {...props} />;
};
export default AtrcControlBoxFour;
