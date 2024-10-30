var _excluded = ["className", "variant", "srcset"],
  _excluded2 = ["wrapfigure", "figureProps"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
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