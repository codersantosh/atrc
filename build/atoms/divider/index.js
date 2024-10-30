var _excluded = ["className", "variant", "value"];
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*Library*/
import classnames from 'classnames';

/* Atoms */
import AtrcIcon, { AtrcIconSvg } from '../icon';

/* Controls */
import { AtrcControlDividerDefaultSvg } from '../../controls/control-divider';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var AtrcDivider = function AtrcDivider(props) {
  var _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    value = props.value,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var thisClassnames = classnames(AtrcPrefix('divider'), className, variant ? AtrcPrefix('divider') + '-' + variant : '');
  if (value) {
    if ('cust' === value.svgFrm && value.svg) {
      return /*#__PURE__*/React.createElement(AtrcIconSvg, {
        svg: value.svg,
        className: thisClassnames
      });
    }
    if (value.svgDefd) {
      return /*#__PURE__*/React.createElement(AtrcIcon, {
        className: thisClassnames,
        icon: AtrcControlDividerDefaultSvg({
          svgDefd: value.svgDefd
        })
      });
    }
  }
  return null;
};
export default AtrcDivider;
//# sourceMappingURL=index.js.map