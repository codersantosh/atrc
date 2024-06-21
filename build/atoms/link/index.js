var _excluded = ["className", "variant", "type", "to", "children", "isButton", "isActive", "dangerouslySetInnerHTML"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/* WordPress */

/*Library*/
import classnames from 'classnames';
import { Link, NavLink } from 'react-router-dom';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*
Local
Combination of all links which contain a tag and
* button components
* */
var AtrcLink = function AtrcLink(props) {
  var _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$type = props.type,
    type = _props$type === void 0 ? 'a' : _props$type,
    _props$to = props.to,
    to = _props$to === void 0 ? '#' : _props$to,
    _props$children = props.children,
    children = _props$children === void 0 ? '' : _props$children,
    _props$isButton = props.isButton,
    isButton = _props$isButton === void 0 ? false : _props$isButton,
    _props$isActive = props.isActive,
    isActive = _props$isActive === void 0 ? false : _props$isActive,
    _props$dangerouslySet = props.dangerouslySetInnerHTML,
    dangerouslySetInnerHTML = _props$dangerouslySet === void 0 ? '' : _props$dangerouslySet,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var thisClassName = classnames(!isButton ? AtrcPrefix('lnk') : null, !isButton ? 'at-txt' : null, className, variant ? AtrcPrefix('lnk') + '-' + variant : '', isActive ? AtrcPrefix('lnk-active') : null);
  if (type === 'nav-lnk') {
    return /*#__PURE__*/React.createElement(NavLink, _extends({
      to: to,
      className: function className(_ref) {
        var isActive = _ref.isActive;
        return classnames(AtrcPrefix('lnk-nav'), thisClassName);
      }
    }, defaultProps), children);
  }
  if (type === 'router-link') {
    return /*#__PURE__*/React.createElement(Link, _extends({
      className: thisClassName,
      to: to
    }, defaultProps), children);
  }
  if (dangerouslySetInnerHTML) {
    return /*#__PURE__*/React.createElement("a", _extends({
      className: thisClassName,
      dangerouslySetInnerHTML: dangerouslySetInnerHTML
    }, defaultProps));
  }
  return /*#__PURE__*/React.createElement("a", _extends({
    className: thisClassName
  }, defaultProps), children);
};
export default AtrcLink;
//# sourceMappingURL=index.js.map