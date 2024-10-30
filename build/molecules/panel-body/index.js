var _excluded = ["children", "className", "variant", "bodyProps"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*WordPress*/
import { PanelBody } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var AtrcPanelBody = function AtrcPanelBody(props) {
  var children = props.children,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$bodyProps = props.bodyProps,
    bodyProps = _props$bodyProps === void 0 ? {} : _props$bodyProps,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(PanelBody, _extends({
    className: classnames(AtrcPrefix('pnl-body'), className, defaultProps.variant ? null : 'at-p at-bdr', variant ? AtrcPrefix('pnl-body') + '-' + variant : '', variant === 'st' ? 'at-m' : '')
  }, defaultProps), /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, bodyProps, {
    className: classnames(AtrcPrefix('pnl-body-cont'), bodyProps.variant ? null : 'at-p at-bg-cl at-bdr', bodyProps.className ? bodyProps.className : null)
  }), children));
};
export default AtrcPanelBody;
//# sourceMappingURL=index.js.map