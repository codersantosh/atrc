function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*Library*/
import { mapKeys } from 'lodash';

/*Local*/
export default function AtrcReplaceObjectKey(obj) {
  var replaceText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  if (_typeof(obj) !== 'object') {
    console.error('The first argument must be an object');
    return obj;
  }
  if (typeof replaceText !== 'string') {
    console.error('The second argument must be a string');
    return obj;
  }
  if (!replaceText) {
    return obj;
  }
  return mapKeys(obj, function (value, key) {
    return key.replace(replaceText, '');
  });
}
//# sourceMappingURL=replace-object-key.js.map