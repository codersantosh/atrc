const AtrcCssPrefix = 'at-';
export const AtrcVarPrefix = '--at';

export default function AtrcPrefix(suffix = '') {
	return AtrcCssPrefix + suffix;
}
