import { useMemo } from 'react';
var instanceMap = new WeakMap();

/* Using withInstanceId issues on treeshaking so needed to recrated this */
/**
 * Creates a new id for a given object.
 *
 * @param object Object reference to create an id for.
 * @return The instance id (index).
 */
function createId(object) {
  var instances = instanceMap.get(object) || 0;
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
  return useMemo(function () {
    if (preferredId) return preferredId;
    var id = createId(object);
    return prefix ? "".concat(prefix, "-").concat(id) : id;
  }, [object, preferredId, prefix]);
}
export default AtrcUseInstanceId;
//# sourceMappingURL=use-instance-id.js.map