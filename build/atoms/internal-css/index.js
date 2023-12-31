"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AtrcGetProcessedCss = void 0;
var _stylis = require("stylis");
var _excluded = ["children"];
/*STYLIS : https://www.npmjs.com/package/stylis*/
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Process the Raw CSS*/
var AtrcGetProcessedCss = exports.AtrcGetProcessedCss = function AtrcGetProcessedCss(rawCss) {
  if (!rawCss) {
    return null;
  }
  return (0, _stylis.serialize)((0, _stylis.compile)(rawCss), (0, _stylis.middleware)([_stylis.prefixer, _stylis.stringify]));
};

/*Render CSS inside style tag*/
var AtrcInternalCss = function AtrcInternalCss(props) {
  var children = props.children,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement("style", defaultProps, AtrcGetProcessedCss(children));
};
var _default = exports.default = AtrcInternalCss;
//# sourceMappingURL=index.js.map