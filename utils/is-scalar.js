export default function AtrcIsScalar(value) {
	const type = typeof value;

	if (type === 'string' || type === 'number' || type === 'boolean') return true;
	return false;
}
