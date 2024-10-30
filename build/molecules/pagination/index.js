var _excluded = ["className", "variant", "totalItems", "doPagination", "currentPage", "totalPages", "isFooter"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';
import AtrcButton from '../../atoms/button';
import AtrcSpan from '../../atoms/span';
import AtrcControlText from '../../controls/control-text';

/*Local*/
var AtrcPagination = function AtrcPagination(props) {
  var _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    totalItems = props.totalItems,
    doPagination = props.doPagination,
    currentPage = props.currentPage,
    totalPages = props.totalPages,
    _props$isFooter = props.isFooter,
    isFooter = _props$isFooter === void 0 ? false : _props$isFooter,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var nextDisabled = totalPages <= currentPage,
    prevDisabled = parseInt(currentPage) === 1,
    prevPage = currentPage > 1 ? currentPage - 1 : 1,
    nextPage = totalPages > currentPage ? currentPage + 1 : totalPages;
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    className: classnames(AtrcPrefix('pagination'), 'at-flx', 'at-al-itm-ctr', 'at-gap', className, variant ? AtrcPrefix('pagination') + '-' + variant : '')
  }, defaultProps), totalItems && /*#__PURE__*/React.createElement(AtrcSpan, {
    isNum: true
  }, totalItems, "\xA0", __('items', 'atrc-prefix-atrc')), /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames('at-flx', 'at-al-itm-ctr', 'at-gap')
  }, /*#__PURE__*/React.createElement(AtrcButton, {
    variant: "light",
    onClick: function onClick() {
      return doPagination(1);
    },
    disabled: prevDisabled
  }, /*#__PURE__*/React.createElement(AtrcSpan, {
    className: classnames('screen-reader-text')
  }, __('First page', 'atrc-prefix-atrc')), /*#__PURE__*/React.createElement(AtrcSpan, {
    "aria-hidden": "true"
  }, "\xAB")), /*#__PURE__*/React.createElement(AtrcButton, {
    variant: "light",
    onClick: function onClick() {
      return doPagination(prevPage);
    },
    disabled: prevDisabled
  }, /*#__PURE__*/React.createElement(AtrcSpan, {
    className: classnames('screen-reader-text')
  }, __('Previous page', 'atrc-prefix-atrc')), /*#__PURE__*/React.createElement(AtrcSpan, {
    "aria-hidden": "true"
  }, "\u2039")), /*#__PURE__*/React.createElement(AtrcSpan, {
    className: classnames('at-flx', 'at-al-itm-ctr')
  }, isFooter ? currentPage : /*#__PURE__*/React.createElement(AtrcControlText, {
    variant: "small",
    value: currentPage,
    type: "number",
    min: 1,
    max: totalPages,
    onChange: function onChange(newVal) {
      doPagination(newVal);
    },
    allowReset: false
  }), /*#__PURE__*/React.createElement(AtrcSpan, null, "\xA0", __('of', 'atrc-helpdesk'), "\xA0", /*#__PURE__*/React.createElement(AtrcSpan, null, totalPages))), /*#__PURE__*/React.createElement(AtrcButton, {
    variant: "light",
    onClick: function onClick() {
      return doPagination(nextPage);
    },
    disabled: nextDisabled
  }, /*#__PURE__*/React.createElement(AtrcSpan, {
    className: classnames('screen-reader-text')
  }, __('Next page', 'atrc-prefix-atrc')), /*#__PURE__*/React.createElement(AtrcSpan, {
    "aria-hidden": "true"
  }, "\u203A")), /*#__PURE__*/React.createElement(AtrcButton, {
    variant: "light",
    onClick: function onClick() {
      return doPagination(totalPages);
    },
    disabled: nextDisabled
  }, /*#__PURE__*/React.createElement(AtrcSpan, {
    className: classnames('screen-reader-text')
  }, __('Last page', 'atrc-prefix-atrc')), /*#__PURE__*/React.createElement(AtrcSpan, {
    "aria-hidden": "true"
  }, "\xBB"))));
};
export default AtrcPagination;
//# sourceMappingURL=index.js.map