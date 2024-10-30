var _excluded = ["children", "className", "variant"];
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*WordPress*/
import { Tooltip } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcSpan from '../../atoms/span';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var AtrcTooltip = function AtrcTooltip(props) {
  var _props$children = props.children,
    children = _props$children === void 0 ? '' : _props$children,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(Tooltip, defaultProps, /*#__PURE__*/React.createElement(AtrcSpan, {
    className: classnames(AtrcPrefix('ttip'), className, variant ? AtrcPrefix('ttip') + '-' + variant : '')
  }, children));
};
export default AtrcTooltip;
//# sourceMappingURL=index.js.map