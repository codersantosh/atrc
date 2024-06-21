var _excluded = ["variant", "className", "src", "imgProps"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/* Library */
import classnames from 'classnames';

/*Atoms*/
import AtrcWrap from '../wrap';
import AtrcImg from '../img';
import AtrcLink from '../link';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var AtrcLogo = function AtrcLogo(props) {
  var _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$src = props.src,
    src = _props$src === void 0 ? '' : _props$src,
    _props$imgProps = props.imgProps,
    imgProps = _props$imgProps === void 0 ? {} : _props$imgProps,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    className: classnames(AtrcPrefix('logo'), className, variant ? AtrcPrefix('logo') + '-' + variant : '')
  }, defaultProps), /*#__PURE__*/React.createElement(AtrcLink, {
    type: "nav-lnk",
    to: '/',
    end: true
  }, /*#__PURE__*/React.createElement(AtrcImg, _extends({
    variant: "logo",
    src: src
  }, imgProps))));
};
export default AtrcLogo;
//# sourceMappingURL=index.js.map