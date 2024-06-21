var _excluded = ["currentPage", "totalPages", "doPagination", "getPageUrl", "className", "variant", "isFooter", "ulProps", "liProps", "aProps"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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