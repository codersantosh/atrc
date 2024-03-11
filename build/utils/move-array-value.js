/* Library */
import { cloneDeep } from 'lodash';

/* Local */
export default function AtrcMoveArrayValue(jsArray, fromIndex, toIndex) {
  // Ensure indices are within bounds
  if (fromIndex < 0 || fromIndex >= jsArray.length || toIndex < 0 || toIndex >= jsArray.length) {
    return jsArray;
  }
  var clonedValue = cloneDeep(jsArray);

  // Remove the element from its current index
  var removedElement = clonedValue.splice(fromIndex, 1)[0];

  // Insert the removed element at the target index
  clonedValue.splice(toIndex, 0, removedElement);

  // Return the updated array
  return clonedValue;
}
//# sourceMappingURL=move-array-value.js.map