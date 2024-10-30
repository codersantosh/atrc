var _excluded = ["className", "variant", "isRounded", "isBordered", "children"],
  _excluded2 = ["tHeadLabels", "renderTbody", "renderTFoot", "tHeadProps", "tBodyProps", "tFootProps"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*Library*/
import classnames from 'classnames';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';
import AtrcThead from './thead';
import AtrcTbody from './tbody';
import AtrcTfoot from './tfoot';
import AtrcTr from './tr';
import AtrcTh from './th';

/*Local*/
export var AtrcTableTag = function AtrcTableTag(props) {
  var _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$isRounded = props.isRounded,
    isRounded = _props$isRounded === void 0 ? false : _props$isRounded,
    _props$isBordered = props.isBordered,
    isBordered = _props$isBordered === void 0 ? false : _props$isBordered,
    children = props.children,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement("table", _extends({
    className: classnames(AtrcPrefix('tbl'), 'at-w', className, isBordered ? AtrcPrefix('tbl-bordered') + ' at-bdr' : '', isRounded ? AtrcPrefix('tbl-rounded') + ' at-bdr-rad' : '', variant ? AtrcPrefix('tbl') + '-' + variant : '')
  }, defaultProps), children);
};
var AtrcTable = function AtrcTable(props) {
  var tHeadLabels = props.tHeadLabels,
    renderTbody = props.renderTbody,
    renderTFoot = props.renderTFoot,
    _props$tHeadProps = props.tHeadProps,
    tHeadProps = _props$tHeadProps === void 0 ? {} : _props$tHeadProps,
    _props$tBodyProps = props.tBodyProps,
    tBodyProps = _props$tBodyProps === void 0 ? {} : _props$tBodyProps,
    _props$tFootProps = props.tFootProps,
    tFootProps = _props$tFootProps === void 0 ? {} : _props$tFootProps,
    defaultProps = _objectWithoutProperties(props, _excluded2);
  return /*#__PURE__*/React.createElement(AtrcTableTag, defaultProps, tHeadLabels && /*#__PURE__*/React.createElement(AtrcThead, _extends({
    className: classnames('at-bg-cl')
  }, tHeadProps), /*#__PURE__*/React.createElement(AtrcTr, null, tHeadLabels && tHeadLabels.map(function (label, iDx) {
    if ('__blank' === label) {
      return /*#__PURE__*/React.createElement(AtrcTh, {
        key: iDx,
        className: classnames('at-p', 'at-txt-al')
      });
    }
    return /*#__PURE__*/React.createElement(AtrcTh, {
      key: iDx,
      className: classnames('at-p', 'at-txt-al')
    }, label);
  }))), /*#__PURE__*/React.createElement(AtrcTbody, tBodyProps, renderTbody), renderTFoot ? /*#__PURE__*/React.createElement(AtrcTfoot, tFootProps, renderTFoot) : null);
};
export default AtrcTable;
//# sourceMappingURL=index.js.map