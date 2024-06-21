import React from 'react';

/* Local */
/**
 * Generate dynamic css
 *
 * @param {object} cssObj , each key contain real CSS
 * {
  "xs": "",
  "xsHover": "",
  "xsActive": "",
  "sm": "",
  "smHover": "",
  "smActive": "",
  "md": "",
  "mdHover": "",
  "mdActive": "",
  "lg": "",
  "lgHover": "",
  "lgActive": "",
  "xl": "",
  "xlHover": "",
  "xlActive": "",
  "xxl": "",
  "xxlHover": "",
  "xxlActive": ""
}
@param {selector} selector of css
@param {selector} hoverParentSelector of css
@param {selector} activeSelector of css
@param {selector} activeParentSelector of css

 * @return {Promise<boolean>} A Promise that resolves to true if the copy operation succeeded, and false otherwise.
 */
const AtrcGenerateDynamicCss = ({
	cssObj,
	selector,
	hoverParentSelector = '',
	activeSelector = '',
	activeParentSelector = '',
}) => {
	if (!cssObj) {
		return '';
	}
	let output = '';
	if (cssObj.xs) {
		output += `${selector}{${cssObj.xs}}`;
	}
	if (cssObj.xsHover) {
		if (hoverParentSelector) {
			output += `${hoverParentSelector}:hover ${selector}{${cssObj.xsHover}}`;
		} else {
			output += `${selector}:hover{${cssObj.xsHover}}`;
		}
	}

	if (cssObj.xsActive) {
		if (activeParentSelector) {
			output += `${activeParentSelector}:active ${selector}{${cssObj.xsActive}}`;
		} else if (activeSelector) {
			output += `${activeSelector}{${cssObj.xsActive}}`;
		} else {
			output += `${selector}:active{${cssObj.xsActive}}`;
		}
	}

	if (cssObj.sm || cssObj.smHover) {
		output += `@media (min-width:576px){`;
		if (cssObj.sm) {
			output += `${selector}{${cssObj.sm}}`;
		}
		if (cssObj.smHover) {
			if (hoverParentSelector) {
				output += `${hoverParentSelector}:hover ${selector}{${cssObj.smHover}}`;
			} else {
				output += `${selector}:hover{${cssObj.smHover}}`;
			}
		}
		output += `}`;
	}
	if (cssObj.md || cssObj.mdHover) {
		output += `@media (min-width:768px){`;
		if (cssObj.md) {
			output += `${selector}{${cssObj.md}}`;
		}
		if (cssObj.mdHover) {
			if (hoverParentSelector) {
				output += `${hoverParentSelector}:hover ${selector}{${cssObj.mdHover}}`;
			} else {
				output += `${selector}:hover{${cssObj.mdHover}}`;
			}
		}
		output += `}`;
	}
	if (cssObj.lg || cssObj.lgHover) {
		output += `@media (min-width:992px){`;
		if (cssObj.lg) {
			output += `${selector}{${cssObj.lg}}`;
		}
		if (cssObj.lgHover) {
			if (hoverParentSelector) {
				output += `${hoverParentSelector}:hover ${selector}{${cssObj.lgHover}}`;
			} else {
				output += `${selector}:hover{${cssObj.lgHover}}`;
			}
		}
		output += `}`;
	}
	if (cssObj.xl || cssObj.xlHover) {
		output += `@media (min-width:1200px){`;
		if (cssObj.xl) {
			output += `${selector}{${cssObj.xl}}`;
		}
		if (cssObj.xlHover) {
			if (hoverParentSelector) {
				output += `${hoverParentSelector}:hover ${selector}{${cssObj.xlHover}}`;
			} else {
				output += `${selector}:hover{${cssObj.xlHover}}`;
			}
		}
		output += `}`;
	}
	if (cssObj.xxl || cssObj.xxlHover) {
		output += `@media (min-width:1400px){`;
		if (cssObj.xxl) {
			output += `${selector}{${cssObj.xxl}}`;
		}
		if (cssObj.xxlHover) {
			if (hoverParentSelector) {
				output += `${hoverParentSelector}:hover ${selector}{${cssObj.xxlHover}}`;
			} else {
				output += `${selector}:hover{${cssObj.xxlHover}}`;
			}
		}
		output += `}`;
	}

	return output;
};

export default AtrcGenerateDynamicCss;
