/*Library*/
import { isArray, isEmpty, mapKeys, omit, pick } from 'lodash';

/*Utils*/
import AtrcAvailableTabs from './available-tabs';
import AtrcIsScalar from './is-scalar';
import { AtrcUcFirst } from './string';

/*Local*/
export const AtrcIsKeyWithValueNotEmpty = (obj, key) => {
	return (
		Object.prototype.hasOwnProperty.call(obj, key) &&
		obj[key] !== undefined &&
		obj[key] !== null &&
		obj[key] !== ''
	);
};

export const AtrcGetTabValues = (value, tab, allowedTabKeys = []) => {
	if (
		isEmpty(value) ||
		!AtrcAvailableTabs.includes(tab) ||
		!isArray(allowedTabKeys)
	) {
		return {};
	}

	/* For border radius */
	if (value[tab]) {
		return value[tab];
	}

	const tabKeys =
		tab === 'normal'
			? allowedTabKeys
			: allowedTabKeys.map((prop) => prop + AtrcUcFirst(tab));

	return mapKeys(pick(value, tabKeys), (val, key) => {
		if ('normal' === tab) {
			return key;
		}
		return key.replace(AtrcUcFirst(tab), '');
	});
};

export const AtrcUpdateTabValues = (
	newVal,
	tab,
	value,
	allowedTabKeys = []
) => {
	if (!AtrcAvailableTabs.includes(tab) || !isArray(allowedTabKeys)) {
		return {};
	}

	const clonedValue = { ...value };

	if (AtrcIsScalar(newVal)) {
		allowedTabKeys.forEach((key) => {
			const newKey = tab === 'normal' ? key : key + AtrcUcFirst(tab);
			delete clonedValue[newKey];
		});
		clonedValue[tab] = newVal;
	} else {
		delete clonedValue[tab];
		allowedTabKeys.forEach((key) => {
			let newKey = '';
			if ('normal' === tab) {
				newKey = key;
			} else {
				newKey = key + AtrcUcFirst(tab);
			}

			if (key in newVal) {
				clonedValue[newKey] = newVal[key];
			} else {
				delete clonedValue[newKey];
			}
		});
	}

	return clonedValue;
};

export const AtrcHasTabValues = (tab, value, allowedTabKeys = []) => {
	if (
		isEmpty(value) ||
		!AtrcAvailableTabs.includes(tab) ||
		!isArray(allowedTabKeys)
	) {
		return false;
	}
	/* For border radius */
	if (value[tab]) {
		return true;
	}

	if (tab === 'normal') {
		return allowedTabKeys.some((key) => AtrcIsKeyWithValueNotEmpty(value, key));
	}
	return allowedTabKeys.some((key) =>
		AtrcIsKeyWithValueNotEmpty(value, `${key}${AtrcUcFirst(tab)}`)
	);
};

export const AtrcResetTab = (tab, value, allowedTabKeys = []) => {
	if (!AtrcAvailableTabs.includes(tab) || !isArray(allowedTabKeys)) {
		return value;
	}

	const tabKeys =
		tab === 'normal'
			? allowedTabKeys
			: allowedTabKeys.map((prop) => prop + AtrcUcFirst(tab));

	tabKeys.push('tab'); //for scalar value.

	return omit(value, tabKeys);
};

export const AtrcResetTabs = (value, allowedTabKeys) => {
	if (!value) {
		return value;
	}
	if (!isArray(allowedTabKeys)) {
		throw new Error(
			`Invalid allowedTabKeys: ${allowedTabKeys}. Expected an array.`
		);
	}

	let newValue = { ...value };
	AtrcAvailableTabs.forEach((tab) => {
		newValue = AtrcResetTab(tab, newValue, allowedTabKeys);
	});

	return newValue;
};

export const AtrcTabCss = (value, key = '', cssProp) => {
	if (!value) {
		return '';
	}

	const innerOutput = {};
	AtrcAvailableTabs.forEach((tab) => {
		let newKey;
		if (key) {
			newKey = tab === 'normal' ? key : key + AtrcUcFirst(tab);
		} else {
			newKey = tab;
		}

		const newOutputKey = tab === 'normal' ? 'xs' : 'xs' + AtrcUcFirst(tab);
		if (value[newKey]) {
			if (!innerOutput[newOutputKey]) {
				innerOutput[newOutputKey] = '';
			}
			innerOutput[newOutputKey] += `${cssProp}      : ${value[newKey]};`;
		}
	});

	return innerOutput;
};
