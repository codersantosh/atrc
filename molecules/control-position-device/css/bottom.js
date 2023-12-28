/*Local*/
const Bottom = (value, innerOutput, property) => {
	if (value.b) {
		innerOutput.xs += `${property} : ${value.b};`;
	}
	if (value.smB) {
		innerOutput.sm += `${property} : ${value.smB};`;
	}
	if (value.mdB) {
		innerOutput.md += `${property} : ${value.mdB};`;
	}
	if (value.lgB) {
		innerOutput.lg += `${property} : ${value.lgB};`;
	}
	if (value.xlB) {
		innerOutput.xl += `${property} : ${value.xlB};`;
	}
	if (value.xxlB) {
		innerOutput.xxl += `${property} : ${value.xxlB};`;
	}

	return innerOutput;
};

export default Bottom;
