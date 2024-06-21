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
var AtrcFormatCss = function AtrcFormatCss(style) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!style) {
    return '';
  }
  // Use cssbeautify to format the CSS
  return cssbeautify(style, options);
};
export default AtrcFormatCss;
//# sourceMappingURL=format-css.js.map