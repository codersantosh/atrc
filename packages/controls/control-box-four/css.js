import React from 'react';

/* Local */
export function AtrcControlBoxFourShorthandCssOnly({
	value,
	property = '',
	emptyVal = 0,
}) {
	let shorthandStr = '';
	if (value.all) {
		const splitedValues = value.all.split(' ');
		const countValues = splitedValues.length;
		switch (countValues) {
			case 1:
				value.t = splitedValues[0];
				value.r = splitedValues[0];
				value.b = splitedValues[0];
				value.l = splitedValues[0];
				break;

			case 2:
				value.t = splitedValues[0];
				value.r = splitedValues[1];
				value.b = splitedValues[0];
				value.l = splitedValues[1];
				break;

			case 3 /* css shorthand */:
				value.t = splitedValues[0];
				value.r = splitedValues[1];
				value.b = splitedValues[3];
				value.l = splitedValues[1];
				break;

			case 4:
				value.t = splitedValues[0];
				value.r = splitedValues[1];
				value.b = splitedValues[2];
				value.l = splitedValues[3];
				break;

			default:
				break;
		}
	}

	// Check if all four value are equal
	if (value.t === value.r && value.r === value.b && value.b === value.l) {
		shorthandStr = value.t || emptyVal;
	}
	// Check if top and bottom value are equal and right and left value are equal
	else if (value.t === value.b && value.r === value.l) {
		shorthandStr = `${value.t || emptyVal} ${value.r || emptyVal}`;
	}

	// Check if right and left value are equal
	else if (value.r === value.l) {
		shorthandStr = `${value.t ? value.t : emptyVal} ${value.r || emptyVal} ${
			value.b || emptyVal
		}`;
	}
	// Use all four value
	else {
		shorthandStr = `${value.t || emptyVal} ${value.r || emptyVal} ${
			value.b || emptyVal
		} ${value.l || emptyVal}`;
	}

	if (!property) {
		return shorthandStr;
	}

	return `${property}      : ${shorthandStr};`;
}
