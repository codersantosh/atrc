import { useMemo } from 'react';

const instanceMap = new WeakMap();

/* Using withInstanceId issues on treeshaking so needed to recrete this */
/**
 * Creates a new id for a given object.
 *
 * @param object Object reference to create an id for.
 * @return The instance id (index).
 */
function createId(object) {
	const instances = instanceMap.get(object) || 0;
	instanceMap.set(object, instances + 1);
	return instances;
}

/**
 * Provides a unique instance ID.
 *
 * @param object        Object reference to create an id for.
 * @param [prefix]      Prefix for the unique id.
 * @param [preferredId] Default ID to use.
 * @return The unique instance id.
 */
function AtrcUseInstanceId(object, prefix, preferredId) {
	return useMemo(() => {
		if (preferredId) return preferredId;
		const id = createId(object);

		return prefix ? `${prefix}-${id}` : id;
	}, [object, preferredId, prefix]);
}

export default AtrcUseInstanceId;
