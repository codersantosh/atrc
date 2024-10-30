var _excluded = ["className", "type", "children"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var AtrcContainer = function AtrcContainer(props) {
  var _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$type = props.type,
    type = _props$type === void 0 ? '' : _props$type,
    _props$children = props.children,
    children = _props$children === void 0 ? '' : _props$children,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var containerClass;
  switch (type) {
    case 'fluid':
      containerClass = AtrcPrefix('ctnr-fld');
      break;
    case 'min':
      containerClass = AtrcPrefix('ctnr-min');
      break;
    default:
      containerClass = AtrcPrefix('ctnr');
      break;
  }
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    className: classnames(className, containerClass)
  }, defaultProps), children);
};
export default AtrcContainer;
//# sourceMappingURL=index.js.map