import React from 'react';

/* WordPress */
import { renderToString } from '@wordpress/element';

/* Local */
const AtrcSvgComponentToString = ({ svgElement, fill = '' }) => {
	// Convert the React element to an SVG string
	const svgString = renderToString(svgElement);

	// Create a temporary DOM element to manipulate the SVG
	const tempDiv = document.createElement('div');
	tempDiv.innerHTML = svgString;

	// Manipulate the SVG using DOM methods (for example, changing the fill color to red)
	const svgElements = tempDiv.getElementsByTagName('svg');
	if (fill) {
		for (let i = 0; i < svgElements.length; i++) {
			svgElements[i].setAttribute('fill', fill); // Replace 'red' with the desired fill color
		}
	}

	// Get the updated SVG string from the temporary DOM element
	const modifiedSVGString = tempDiv.innerHTML;

	return modifiedSVGString;
};
export default AtrcSvgComponentToString;
