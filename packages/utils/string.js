export function AtrcToCamelCase(property) {
	const parts = property.split('-');
	let camelCase = parts[0];
	for (let i = 1; i < parts.length; i++) {
		camelCase += parts[i].charAt(0).toUpperCase() + parts[i].slice(1);
	}
	return camelCase;
}

export function AtrcToKebabCase(property) {
	let kebabCase = '';
	for (let i = 0; i < property.length; i++) {
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
