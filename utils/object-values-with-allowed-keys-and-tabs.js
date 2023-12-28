/*Library*/
import { isArray, isEmpty, mapKeys, omit, pick } from 'lodash';

/*Inbuilt*/
import { AtrcAvailableTabs, AtrcIsScalar } from './index';

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

	if (value[tab]) {
		return value[tab];
	}

	const tabKeys =
		tab === 'normal'
			? allowedTabKeys
			: allowedTabKeys.map((prop) => prop + tab);

	return mapKeys(pick(value, tabKeys), (val, key) =>
		tab === 'normal' ? key : key.replace(tab, '')
	);
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
			const newKey = tab === 'normal' ? key : key + tab;
			delete clonedValue[newKey];
		});
		clonedValue[tab] = newVal;
	} else {
		delete clonedValue[tab];
		allowedTabKeys.forEach((key) => {
			const newKey = tab === 'normal' ? key : key + tab;
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
	if (value[tab]) {
		return true;
	}
	if (tab === 'normal') {
		return allowedTabKeys.some((key) => AtrcIsKeyWithValueNotEmpty(value, key));
	}
	return allowedTabKeys.some((key) =>
		AtrcIsKeyWithValueNotEmpty(value, `${key}${tab}`)
	);
};

export const AtrcResetTab = (tab, value, allowedTabKeys = []) => {
	if (!AtrcAvailableTabs.includes(tab) || !isArray(allowedTabKeys)) {
		return value;
	}

	const tabKeys =
		tab === 'normal'
			? allowedTabKeys
			: allowedTabKeys.map((prop) => prop + tab);

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

export const AtrcTabCss = (value, key, cssProp) => {
	if (!value) {
		return value;
	}

	const innerOutput = {};
	AtrcAvailableTabs.forEach((tab) => {
		const newKey = tab === 'normal' ? key : key + tab;
		const newOutputKey = tab === 'normal' ? 'xs' : 'xs' + tab;
		if (value[newKey]) {
			if (!innerOutput[newOutputKey]) {
				innerOutput[newOutputKey] = '';
			}
			innerOutput[newOutputKey] += `${cssProp}      : ${value[newKey]};`;
		}
	});

	return innerOutput;
};
