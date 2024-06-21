import React from 'react';

/* Library */
import { cloneDeep } from 'lodash';

/* Local */
/* Add values */
export const AtrcNestedObjAddByKey1 = ({ settings, key1, val1 }) => {
	const setting1Cloned = cloneDeep(settings);

	let setting2Cloned = [];
	if (setting1Cloned[key1]) {
		setting2Cloned = cloneDeep(setting1Cloned[key1]);
	}

	setting2Cloned.push(val1);

	setting1Cloned[key1] = setting2Cloned;
	return setting1Cloned;
};

export const AtrcNestedObjAddByKey2 = ({ settings, key1, key2, val2 }) => {
	const setting1Cloned = cloneDeep(settings);

	let setting2Cloned = [];
	if (setting1Cloned[key1]) {
		setting2Cloned = cloneDeep(setting1Cloned[key1]);
	}

	let setting3Cloned = [];
	if (setting2Cloned[key2]) {
		setting3Cloned = cloneDeep(setting2Cloned[key2]);
	}

	setting3Cloned.push(val2);

	setting2Cloned[key2] = setting3Cloned;
	setting1Cloned[key1] = setting2Cloned;
	return setting1Cloned;
};

export const AtrcNestedObjAddByKey3 = ({
	settings,
	key1,
	key2,
	key3,
	val3,
}) => {
	const setting1Cloned = cloneDeep(settings);
	const setting2Cloned = cloneDeep(setting1Cloned[key1]);
	const setting3Cloned = cloneDeep(setting2Cloned[key2]);
	const setting4Cloned = cloneDeep(setting3Cloned[key3]);

	setting4Cloned.push(val3);

	setting3Cloned[key3] = setting4Cloned;
	setting2Cloned[key2] = setting3Cloned;
	setting1Cloned[key1] = setting2Cloned;
	return setting1Cloned;
};

export const AtrcNestedObjAddByKey4 = ({
	settings,
	key1,
	key2,
	key3,
	key4,
	val4,
}) => {
	const setting1Cloned = cloneDeep(settings);
	const setting2Cloned = cloneDeep(setting1Cloned[key1]);
	const setting3Cloned = cloneDeep(setting2Cloned[key2]);
	const setting4Cloned = cloneDeep(setting3Cloned[key3]);
	const setting5Cloned = cloneDeep(setting4Cloned[key4]);

	setting5Cloned.push(val4);

	setting4Cloned[key4] = setting5Cloned;
	setting3Cloned[key3] = setting4Cloned;
	setting2Cloned[key2] = setting3Cloned;
	setting1Cloned[key1] = setting2Cloned;
	return setting1Cloned;
};

/* Updated */
export const AtrcNestedObjUpdateByKey1 = ({ settings, key1, val1 }) => {
	const setting1Cloned = cloneDeep(settings);
	setting1Cloned[key1] = val1;
	return setting1Cloned;
};

export const AtrcNestedObjUpdateByKey2 = ({ settings, key1, key2, val2 }) => {
	const setting1Cloned = cloneDeep(settings);

	let setting2Cloned = {};
	if (setting1Cloned[key1]) {
		setting2Cloned = cloneDeep(setting1Cloned[key1]);
	}

	setting2Cloned[key2] = val2;
	setting1Cloned[key1] = setting2Cloned;
	return setting1Cloned;
};
export const AtrcNestedObjUpdateByKey3 = ({
	settings,
	key1,
	key2,
	key3,
	val3,
}) => {
	const setting1Cloned = cloneDeep(settings);
	const setting2Cloned = cloneDeep(setting1Cloned[key1]);
	const setting3Cloned = cloneDeep(setting2Cloned[key2]);

	setting3Cloned[key3] = val3;
	setting2Cloned[key2] = setting3Cloned;
	setting1Cloned[key1] = setting2Cloned;
	return setting1Cloned;
};

export const AtrcNestedObjUpdateByKey4 = ({
	settings,
	key1,
	key2,
	key3,
	key4,
	val4,
}) => {
	const setting1Cloned = cloneDeep(settings);
	const setting2Cloned = cloneDeep(setting1Cloned[key1]);
	const setting3Cloned = cloneDeep(setting2Cloned[key2]);
	const setting4Cloned = cloneDeep(setting3Cloned[key3]);

	setting4Cloned[key4] = val4;
	setting3Cloned[key3] = setting4Cloned;
	setting2Cloned[key2] = setting3Cloned;
	setting1Cloned[key1] = setting2Cloned;
	return setting1Cloned;
};

export const AtrcNestedObjUpdateByKey5 = ({
	settings,
	key1,
	key2,
	key3,
	key4,
	key5,
	val5,
}) => {
	const setting1Cloned = cloneDeep(settings);
	const setting2Cloned = cloneDeep(setting1Cloned[key1]);
	const setting3Cloned = cloneDeep(setting2Cloned[key2]);
	const setting4Cloned = cloneDeep(setting3Cloned[key3]);
	const setting5Cloned = cloneDeep(setting4Cloned[key4]);

	setting5Cloned[key5] = val5;
	setting4Cloned[key4] = setting5Cloned;
	setting3Cloned[key3] = setting4Cloned;
	setting2Cloned[key2] = setting3Cloned;
	setting1Cloned[key1] = setting2Cloned;
	return setting1Cloned;
};

/* Delete */
export const AtrcNestedObjDeleteByKey1 = ({ settings, key1 }) => {
	const setting1Cloned = cloneDeep(settings);

	if (setting1Cloned) {
		setting1Cloned.splice(key1, 1);
	}

	return setting1Cloned;
};
export const AtrcNestedObjDeleteByKey2 = ({ settings, key1, key2 }) => {
	const setting1Cloned = cloneDeep(settings);

	if (setting1Cloned && setting1Cloned[key1] && setting1Cloned[key1].length) {
		const setting2Cloned = cloneDeep(setting1Cloned[key1]);
		setting2Cloned.splice(key2, 1);
		setting1Cloned[key1] = setting2Cloned;
	}

	return setting1Cloned;
};
export const AtrcNestedObjDeleteByKey3 = ({ settings, key1, key2, key3 }) => {
	const setting1Cloned = cloneDeep(settings);

	if (setting1Cloned && setting1Cloned[key1]) {
		const setting2Cloned = cloneDeep(setting1Cloned[key1]);
		if (setting2Cloned && setting2Cloned[key2]) {
			const setting3Cloned = cloneDeep(setting2Cloned[key2]);
			setting3Cloned.splice(key3, 1);
			setting2Cloned[key2] = setting3Cloned;
		}
		setting1Cloned[key1] = setting2Cloned;
	}

	return setting1Cloned;
};

export const AtrcNestedObjDeleteByKey4 = ({
	settings,
	key1,
	key2,
	key3,
	key4,
}) => {
	const setting1Cloned = cloneDeep(settings);

	if (setting1Cloned && setting1Cloned[key1]) {
		const setting2Cloned = cloneDeep(setting1Cloned[key1]);
		if (setting2Cloned && setting2Cloned[key2]) {
			const setting3Cloned = cloneDeep(setting2Cloned[key2]);
			if (setting3Cloned && setting3Cloned[key3]) {
				const setting4Cloned = cloneDeep(setting3Cloned[key3]);
				setting4Cloned.splice(key4, 1);
				setting3Cloned[key3] = setting4Cloned;
			}
			setting2Cloned[key2] = setting3Cloned;
		}
		setting1Cloned[key1] = setting2Cloned;
	}

	return setting1Cloned;
};

export const AtrcNestedObjDeleteByKey5 = ({
	settings,
	key1,
	key2,
	key3,
	key4,
	key5,
}) => {
	const setting1Cloned = cloneDeep(settings);

	if (setting1Cloned && setting1Cloned[key1]) {
		const setting2Cloned = cloneDeep(setting1Cloned[key1]);
		if (setting2Cloned && setting2Cloned[key2]) {
			const setting3Cloned = cloneDeep(setting2Cloned[key2]);
			if (setting3Cloned && setting3Cloned[key3]) {
				const setting4Cloned = cloneDeep(setting3Cloned[key3]);

				if (setting4Cloned && setting4Cloned[key4]) {
					const setting5Cloned = cloneDeep(setting4Cloned[key4]);

					if (setting5Cloned && setting5Cloned[key5]) {
						setting5Cloned.splice(key5, 1);
					}
					setting4Cloned[key4] = setting5Cloned;
				}
				setting3Cloned[key3] = setting4Cloned;
			}
			setting2Cloned[key2] = setting3Cloned;
		}
		setting1Cloned[key1] = setting2Cloned;
	}

	return setting1Cloned;
};
