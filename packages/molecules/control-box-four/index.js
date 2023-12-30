/*
* Values Structure
Type Object
{
    "r":"",
    "b":"",
    "r":"",
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

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';
import AtrcResetButtonIcon from '../../atoms/reset-button-icon';
import { AtrcResetWrap } from '../../atoms/reset-button-icon';
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const RenderBoxControl = (props) => {
	const {
		variant = '',
		className = '',
		values,
		onChange,
		...defaultProps
	} = props;

	const newObj = {};

	if (values.t) {
		newObj.top = values.t;
	}
	if (values.r) {
		newObj.right = values.r;
	}
	if (values.b) {
		newObj.bottom = values.b;
	}
	if (values.l) {
		newObj.left = values.l;
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
		values = '',
		valueType = '',
		splitOnAxis = false,
		defaultValue = undefined,
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

		if (typeof values === 'string') {
			const splitedValues = values.split(' ');

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
		} else if (values) {
			objVal = cloneDeep(values);
		}

		return objVal;
	}, [values, valueType, values]);

	if (allowReset) {
		return (
			<AtrcResetWrap className={classnames(AtrcPrefix('box-four-rst'))}>
				<RenderBoxControl
					{...props}
					values={objValues}
					splitOnAxis={splitOnAxis}
					onChange={setChange}
				/>
				<AtrcResetButtonIcon
					defaultValue={defaultValue}
					value={objValues}
					onClick={() => onChange(undefined)}
				/>
			</AtrcResetWrap>
		);
	}

	return <RenderBoxControl {...props} />;
};
export default AtrcControlBoxFour;
