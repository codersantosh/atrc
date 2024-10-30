var _excluded = ["currentPage", "totalPages", "doPagination", "getPageUrl", "className", "variant", "isFooter", "ulProps", "liProps", "aProps"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
import React from 'react';

/* WordPress */
import { __, _x, sprintf } from '@wordpress/i18n';

/* Library */
import classnames from 'classnames';

/* Prefix */
import AtrcPrefix from '../../../prefix-vars';

/* Atoms */
import AtrcWrap from '../../../atoms/wrap';
import AtrcLink from '../../../atoms/link';

/* Molecules */
import AtrcLi from '../../list/li';
import AtrcList from '../../list';

/* Local */
/**
 * Get the collapsed list of page numbers for a given range of pages, used to paginate queries.
 *
 * This will return an array of page numbers (1, 2, 3, etc) for a given length (number of pages). If there are
 * less than 5 pages (inclusive), it will return 1 through 5. If there are more, it will collapse between the
 * start and end with an ellipsis. If the current page is in the middle, it will add pages to the middle.
 * *
 * @param {number}  length  The total number of pages.
 * @param {?number} current The current page, used to output extra pages if necessary. Default 1.
 * @return {Array.<number|string>} Array of numbers and … used to display pagination links.
 */
export function AtrcGetPaginationList(length) {
  var current = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var range = Array.from({
    length: length
  }, function (val, i) {
    return i + 1;
  });
  var list = [];
  if (length <= 5) {
    return range;
  }
  list.push.apply(list, _toConsumableArray(range.slice(0, 2)));
  if (current >= 2 && current <= length - 1) {
    list.push.apply(list, _toConsumableArray(range.slice(current - 2, current + 1)));
  }
  list.push.apply(list, _toConsumableArray(range.slice(-2)));
  return list
  // Remove duplicates.
  .filter(function (value, i, a) {
    return a.indexOf(value) === i;
  })
  // Add in … where there's a jump larger than 1.
  .reduce(function (acc, value, i, a) {
    if (i === 0) {
      acc.push(value);
      return acc;
    }
    var diff = Math.abs(a[i] - a[i - 1]);
    if (diff === 0) {
      return acc;
    }
    if (diff > 1) {
      acc.push('…');
    }
    acc.push(value);
    return acc;
  }, []);
}
var AtrcPaginationType1 = function AtrcPaginationType1(props) {
  var currentPage = props.currentPage,
    totalPages = props.totalPages,
    _props$doPagination = props.doPagination,
    doPagination = _props$doPagination === void 0 ? function () {} : _props$doPagination,
    _props$getPageUrl = props.getPageUrl,
    getPageUrl = _props$getPageUrl === void 0 ? function () {} : _props$getPageUrl,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$isFooter = props.isFooter,
    isFooter = _props$isFooter === void 0 ? false : _props$isFooter,
    _props$ulProps = props.ulProps,
    ulProps = _props$ulProps === void 0 ? {} : _props$ulProps,
    _props$liProps = props.liProps,
    liProps = _props$liProps === void 0 ? {} : _props$liProps,
    _props$aProps = props.aProps,
    aProps = _props$aProps === void 0 ? {} : _props$aProps,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var hasNext = currentPage < totalPages,
    hasPrevious = currentPage > 1;

  // Create an array of page numbers or '...' for ellipsis
  var pages = AtrcGetPaginationList(totalPages, currentPage);
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    tag: "nav",
    className: classnames(AtrcPrefix('pagination'), 'at-flx', 'at-al-itm-ctr', className, variant ? AtrcPrefix('pagination') + '-' + variant : ''),
    "aria-label": __('Pagination', 'atrc-prefix-atrc')
  }, defaultProps), /*#__PURE__*/React.createElement(AtrcList, _extends({
    className: classnames(AtrcPrefix('pagination-ls'), 'at-flx', 'at-al-itm-ctr', 'at-gap', ulProps && ulProps.className || '')
  }, ulProps), hasPrevious && /*#__PURE__*/React.createElement(AtrcLi, _extends({
    className: classnames(AtrcPrefix('pagination-itm'), AtrcPrefix('pagination-itm-prev'), liProps && liProps.className || '')
  }, liProps), /*#__PURE__*/React.createElement(AtrcLink, _extends({
    className: classnames(AtrcPrefix('pagination-lnk'), aProps && aProps.className || ''),
    href: getPageUrl(currentPage - 1),
    onClick: function onClick() {
      return doPagination(event, currentPage - 1);
    }
  }, aProps), /*#__PURE__*/React.createElement("span", {
    className: classnames('screen-reader-text')
  }, __('Previous page', 'atrc-prefix-atrc')), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true
  }, _x('Previous', 'previous page link label', 'atrc-prefix-atrc')))), pages.map(function (page, index) {
    return /*#__PURE__*/React.createElement(AtrcLi, _extends({
      className: classnames(AtrcPrefix('pagination-itm'), AtrcPrefix('pagination-itm-dash'), liProps && liProps.className || ''),
      key: "".concat(index, "-").concat(page)
    }, liProps), page === '...' ? page : /*#__PURE__*/React.createElement(AtrcLink, _extends({
      className: classnames(AtrcPrefix('pagination-lnk'), aProps && aProps.className || ''),
      href: getPageUrl(page),
      onClick: function onClick(event) {
        return doPagination(event, page);
      },
      "aria-current": page === currentPage ? 'page' : undefined
    }, aProps), /*#__PURE__*/React.createElement("span", {
      className: classnames('screen-reader-text')
    }, sprintf(
    // translators: %s is the page number.
    __('Page %s', 'atrc-prefix-atrc'), page)), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": true
    }, page)));
  }), hasNext && /*#__PURE__*/React.createElement(AtrcLi, _extends({
    className: classnames(AtrcPrefix('pagination-itm'), AtrcPrefix('pagination-itm-next'), liProps && liProps.className || '')
  }, liProps), /*#__PURE__*/React.createElement(AtrcLink, _extends({
    className: classnames(AtrcPrefix('pagination-lnk'), aProps && aProps.className || ''),
    href: getPageUrl(currentPage + 1),
    onClick: function onClick() {
      return doPagination(event, currentPage + 1);
    }
  }, aProps), /*#__PURE__*/React.createElement("span", {
    className: classnames('screen-reader-text')
  }, __('Next page', 'atrc-prefix-atrc')), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true
  }, _x('Next', 'previous page link label', 'atrc-prefix-atrc'))))));
};
export default AtrcPaginationType1;
//# sourceMappingURL=index.js.map