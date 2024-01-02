const AtrcCssPrefix = 'atrc-';
export const AtrcVarPrefix = '--at';

export default function AtrcPrefix(suffix = '') {
	return AtrcCssPrefix + suffix;
}
