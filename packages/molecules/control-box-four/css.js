export function AtrcControlBoxFourShorthandCssOnly(
	values,
	property = '',
	emptyVal = 0
) {
	let shorthandStr = '';
	if (values.all) {
		const splitedValues = values.all.split(' ');
		const countValues = splitedValues.length;
		switch (countValues) {
			case 1:
				values.t = splitedValues[0];
				values.r = splitedValues[0];
				values.b = splitedValues[0];
				values.l = splitedValues[0];
				break;

			case 2:
				values.t = splitedValues[0];
				values.r = splitedValues[1];
				values.b = splitedValues[0];
				values.l = splitedValues[1];
				break;

			case 3 /* css shorthand */:
				values.t = splitedValues[0];
				values.r = splitedValues[1];
				values.b = splitedValues[3];
				values.l = splitedValues[1];
				break;

			case 4:
				values.t = splitedValues[0];
				values.r = splitedValues[1];
				values.b = splitedValues[2];
				values.l = splitedValues[3];
				break;

			default:
				break;
		}
	}

	// Check if all four values are equal
	if (values.t === values.r && values.r === values.b && values.b === values.l) {
		shorthandStr = values.t || emptyVal;
	}
	// Check if top and bottom values are equal and right and left values are equal
	else if (values.t === values.b && values.r === values.l) {
		shorthandStr = `${values.t || emptyVal} ${values.r || emptyVal}`;
	}

	// Check if right and left values are equal
	else if (values.r === values.l) {
		shorthandStr = `${values.t ? values.t : emptyVal} ${values.r || emptyVal} ${
			values.b || emptyVal
		}`;
	}
	// Use all four values
	else {
		shorthandStr = `${values.t || emptyVal} ${values.r || emptyVal} ${
			values.b || emptyVal
		} ${values.l || emptyVal}`;
	}

	if (!property) {
		return shorthandStr;
	}

	return `${property}      : ${shorthandStr};`;
}
