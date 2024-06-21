import React from 'react';

/* Local */
const AtrcGetInlineCss = (cssObject) => {
	if (!cssObject) {
		return null;
	}
	return {
		...cssObject,
	};
};

export default AtrcGetInlineCss;
