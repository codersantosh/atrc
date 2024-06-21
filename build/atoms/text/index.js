var _excluded = ["tag", "className", "variant", "children", "dangerouslySetInnerHTML"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/*Library*/
import classnames from 'classnames';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var AtrcText = function AtrcText(props) {
  var _props$tag = props.tag,
    tag = _props$tag === void 0 ? 'p' : _props$tag,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$children = props.children,
    children = _props$children === void 0 ? '' : _props$children,
    dangerouslySetInnerHTML = props.dangerouslySetInnerHTML,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var TextTag = tag;
  var thisClassNames = classnames(AtrcPrefix('txt'), className, AtrcPrefix('txt') + '-' + tag, variant ? AtrcPrefix('txt') + '-' + variant : '');
  if (dangerouslySetInnerHTML) {
    return /*#__PURE__*/React.createElement(TextTag, _extends({
      className: thisClassNames,
      dangerouslySetInnerHTML: dangerouslySetInnerHTML
    }, defaultProps));
  }
  return /*#__PURE__*/React.createElement(TextTag, _extends({
    className: thisClassNames
  }, defaultProps), children);
};
export default AtrcText;
//# sourceMappingURL=index.js.map