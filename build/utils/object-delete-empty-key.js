import React from 'react';

/* Local */
export default function AtrcObjDeleteEmptyKey(value) {
  var modifiedObject = {};
  for (var key in value) {
    if (value[key] != null && value[key]) {
      modifiedObject[key] = value[key];
    }
  }
  return modifiedObject;
}
//# sourceMappingURL=object-delete-empty-key.js.map