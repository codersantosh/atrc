var _excluded = ["className", "variant", "srcset"],
  _excluded2 = ["wrapfigure", "figureProps"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/*Library*/
import classnames from 'classnames';

/*Molecules*/
import AtrcFigure from '../../molecules/figure';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/*Local*/
export var AtrcImgTag = function AtrcImgTag(props) {
  var _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$srcset = props.srcset,
    srcset = _props$srcset === void 0 ? '' : _props$srcset,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/alt-text
    React.createElement("img", _extends({
      className: classnames(AtrcPrefix('img'), className, variant ? AtrcPrefix('img') + '-' + variant : ''),
      srcSet: srcset
    }, defaultProps))
  );
};
var AtrcImg = function AtrcImg(props) {
  var _props$wrapfigure = props.wrapfigure,
    wrapfigure = _props$wrapfigure === void 0 ? true : _props$wrapfigure,
    _props$figureProps = props.figureProps,
    figureProps = _props$figureProps === void 0 ? {} : _props$figureProps,
    imgProps = _objectWithoutProperties(props, _excluded2);
  if (!imgProps.src) {
    return null;
  }
  if (wrapfigure) {
    return /*#__PURE__*/React.createElement(AtrcFigure, _extends({}, figureProps, {
      variant: "img"
    }), /*#__PURE__*/React.createElement(AtrcImgTag, imgProps));
  }
  return /*#__PURE__*/React.createElement(AtrcImgTag, imgProps);
};
export default AtrcImg;
//# sourceMappingURL=index.js.map