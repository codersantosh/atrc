import React from 'react';

/* Library */
import cssbeautify from 'cssbeautify';

/* Local */
/**
 * Format CSS
 *
 * @param {string} style CSS string.
 * @param {object} options options.
 *
 * @return {string} formatted css.
 */
const AtrcFormatCss = (style, options = {}) => {
	if (!style) {
		return '';
	}
	// Use cssbeautify to format the CSS
	return cssbeautify(style, options);
};

export default AtrcFormatCss;
