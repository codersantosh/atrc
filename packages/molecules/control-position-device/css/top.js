/*Local*/
const Top = (value, innerOutput, property) => {
	if (value.t) {
		innerOutput.xs += `${property} : ${value.t};`;
	}
	if (value.smT) {
		innerOutput.sm += `${property} : ${value.smT};`;
	}
	if (value.mdT) {
		innerOutput.md += `${property} : ${value.mdT};`;
	}
	if (value.lgT) {
		innerOutput.lg += `${property} : ${value.lgT};`;
	}
	if (value.xlT) {
		innerOutput.xl += `${property} : ${value.xlT};`;
	}
	if (value.xxlT) {
		innerOutput.xxl += `${property} : ${value.xxlT};`;
	}

	return innerOutput;
};

export default Top;
