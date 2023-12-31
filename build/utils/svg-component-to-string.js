"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _element = require("@wordpress/element");
var AtrcSvgComponentToString = function AtrcSvgComponentToString(_ref) {
  var svgElement = _ref.svgElement,
    _ref$fill = _ref.fill,
    fill = _ref$fill === void 0 ? '#48b44f' : _ref$fill;
  // Convert the React element to an SVG string
  var svgString = (0, _element.renderToString)(svgElement);

  // Create a temporary DOM element to manipulate the SVG
  var tempDiv = document.createElement('div');
  tempDiv.innerHTML = svgString;

  // Manipulate the SVG using DOM methods (for example, changing the fill color to red)
  var svgElements = tempDiv.getElementsByTagName('svg');
  for (var i = 0; i < svgElements.length; i++) {
    svgElements[i].setAttribute('fill', fill); // Replace 'red' with the desired fill color
  }

  // Get the updated SVG string from the temporary DOM element
  var modifiedSVGString = tempDiv.innerHTML;
  return modifiedSVGString;
};
var _default = exports.default = AtrcSvgComponentToString;
//# sourceMappingURL=svg-component-to-string.js.map