var _excluded = ["children", "className", "variant", "place", "isDismissible", "autoDismiss", "noticeNumber", "onRemove", "onAutoRemove"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*WordPress*/
import { Notice } from '@wordpress/components';
import { useEffect } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

//*Local*/
var AtrcNotice = function AtrcNotice(props) {
  var children = props.children,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$place = props.place,
    place = _props$place === void 0 ? '' : _props$place,
    _props$isDismissible = props.isDismissible,
    isDismissible = _props$isDismissible === void 0 ? true : _props$isDismissible,
    _props$autoDismiss = props.autoDismiss,
    autoDismiss = _props$autoDismiss === void 0 ? 5000 : _props$autoDismiss,
    _props$noticeNumber = props.noticeNumber,
    noticeNumber = _props$noticeNumber === void 0 ? 1 : _props$noticeNumber,
    _props$onRemove = props.onRemove,
    onRemove = _props$onRemove === void 0 ? function () {} : _props$onRemove,
    _props$onAutoRemove = props.onAutoRemove,
    onAutoRemove = _props$onAutoRemove === void 0 ? function () {} : _props$onAutoRemove,
    defaultProps = _objectWithoutProperties(props, _excluded);
  useEffect(function () {
    if (autoDismiss) {
      var timer = setTimeout(function () {
        return onAutoRemove();
      }, autoDismiss);
      return function () {
        return clearTimeout(timer);
      };
    }
  }, [autoDismiss]);
  return /*#__PURE__*/React.createElement(Notice, _extends({
    className: classnames(AtrcPrefix('notice'), 'at-m', 'at-p', 'at-box-sdw', className, variant ? AtrcPrefix('notice') + '-' + variant : '', place ? AtrcPrefix('place') + '-' + variant : '', noticeNumber ? AtrcPrefix('notice-num') + '-' + noticeNumber : ''),
    isDismissible: isDismissible,
    onRemove: onRemove
  }, defaultProps), children);
};
export default AtrcNotice;
//# sourceMappingURL=index.js.map