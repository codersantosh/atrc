/*Local*/
const Right = (value, innerOutput, property) => {
	if (value.r) {
		innerOutput.xs += `${property} : ${value.r};`;
	}
	if (value.smR) {
		innerOutput.sm += `${property} : ${value.smR};`;
	}
	if (value.mdR) {
		innerOutput.md += `${property} : ${value.mdR};`;
	}
	if (value.lgR) {
		innerOutput.lg += `${property} : ${value.lgR};`;
	}
	if (value.xlR) {
		innerOutput.xl += `${property} : ${value.xlR};`;
	}
	if (value.xxlR) {
		innerOutput.xxl += `${property} : ${value.xxlR};`;
	}

	return innerOutput;
};

export default Right;
