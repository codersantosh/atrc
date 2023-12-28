/*Library*/
import { mapKeys } from 'lodash';

/*Local*/
export default function AtrcReplaceObjectKey(obj, replaceText = '') {
	if (typeof obj !== 'object') {
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
	return mapKeys(obj, (value, key) => key.replace(replaceText, ''));
}
