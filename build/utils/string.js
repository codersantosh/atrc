import React from 'react';
export function AtrcToCamelCase(property) {
  var parts = property.split('-');
  var camelCase = parts[0];
  for (var i = 1; i < parts.length; i++) {
    camelCase += parts[i].charAt(0).toUpperCase() + parts[i].slice(1);
  }
  return camelCase;
}
export function AtrcToKebabCase(property) {
  var kebabCase = '';
  for (var i = 0; i < property.length; i++) {
    if (property[i] === property[i].toUpperCase()) {
      kebabCase += '-' + property[i].toLowerCase();
    } else {
      kebabCase += property[i];
    }
  }
  return kebabCase;
}
export function AtrcUcFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
//# sourceMappingURL=string.js.map