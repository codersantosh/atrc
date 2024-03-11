var _excluded = ["children"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/* Library */
/*STYLIS : https://www.npmjs.com/package/stylis*/
import { compile, serialize, stringify, middleware, prefixer } from 'stylis';

/* Local */
/*Process the Raw CSS*/
export var AtrcGetProcessedCss = function AtrcGetProcessedCss(rawCss) {
  if (!rawCss) {
    return null;
  }
  return serialize(compile(rawCss), middleware([prefixer, stringify]));
};

/*Render CSS inside style tag*/
var AtrcInternalCss = function AtrcInternalCss(props) {
  var children = props.children,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement("style", defaultProps, AtrcGetProcessedCss(children));
};
export default AtrcInternalCss;
//# sourceMappingURL=internal-css.js.map