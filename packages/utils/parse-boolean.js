/* Local */
export default function AtrcParseBoolean(value) {
	return value === 'false' ? false : Boolean(value);
}
