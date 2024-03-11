/*Local*/
const AtrcControlColorGradientCss = (value, property = '--at-cl') => {
	const output = {};
	if (value) {
		output.xs = '';

		if (value.cl) {
			output.xs += `${property}      : ${value.cl};`;
		} else if (value.grd) {
			output.xs += `background      : ${value.grd};`;
			output.xs += `text-fill-color      : transparent;`;
			output.xs += `background-clip      : text;`;
		}
	}
	return output;
};
export default AtrcControlColorGradientCss;
