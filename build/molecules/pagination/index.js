var _excluded = ["className", "variant", "totalItems", "doPagination", "currentPage", "totalPages", "isFooter"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';
import AtrcText from '../../atoms/text';
import AtrcButton from '../../atoms/button';
import AtrcSpan from '../../atoms/span';

/*Local Component*/
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
    className: classnames(AtrcPrefix('pagination'), 'at-flx', 'at-al-itm-ctr', className, variant ? AtrcPrefix('pagination') + '-' + variant : '')
  }, defaultProps), /*#__PURE__*/React.createElement(AtrcSpan, {
    isNum: true
  }, totalItems, "\xA0", __('items', 'atrc-prefix-atrc')), /*#__PURE__*/React.createElement(AtrcWrap, {
    className: "at-flx at-al-itm-ctr"
  }, /*#__PURE__*/React.createElement(AtrcButton, {
    variant: "pagination",
    onClick: function onClick() {
      return doPagination(1);
    },
    disabled: prevDisabled
  }, /*#__PURE__*/React.createElement(AtrcSpan, {
    className: "screen-reader-text"
  }, __('First page', 'atrc-prefix-atrc')), /*#__PURE__*/React.createElement(AtrcSpan, {
    "aria-hidden": "true"
  }, "\xAB")), /*#__PURE__*/React.createElement(AtrcButton, {
    variant: "pagination",
    onClick: function onClick() {
      return doPagination(prevPage);
    },
    disabled: prevDisabled
  }, /*#__PURE__*/React.createElement(AtrcSpan, {
    className: "screen-reader-text"
  }, __('Previous page', 'atrc-prefix-atrc')), /*#__PURE__*/React.createElement(AtrcSpan, {
    "aria-hidden": "true"
  }, "\u2039")), /*#__PURE__*/React.createElement(AtrcSpan, {
    className: "at-flx at-al-itm-ctr"
  }, isFooter ? currentPage : /*#__PURE__*/React.createElement(AtrcText, {
    variant: "small",
    value: currentPage,
    type: "number",
    min: 1,
    max: totalPages,
    onChange: function onChange(newVal) {
      doPagination(newVal);
    },
    allowReset: false
  }), /*#__PURE__*/React.createElement(AtrcSpan, {
    className: classnames(AtrcPrefix('mr-5'), AtrcPrefix('ml-5'))
  }, "\xA0", __('of', 'atrc-helpdesk'), "\xA0", /*#__PURE__*/React.createElement(AtrcSpan, null, totalPages))), /*#__PURE__*/React.createElement(AtrcButton, {
    variant: "pagination",
    onClick: function onClick() {
      return doPagination(nextPage);
    },
    disabled: nextDisabled
  }, /*#__PURE__*/React.createElement(AtrcSpan, {
    className: "screen-reader-text"
  }, __('Next page', 'atrc-prefix-atrc')), /*#__PURE__*/React.createElement(AtrcSpan, {
    "aria-hidden": "true"
  }, "\u203A")), /*#__PURE__*/React.createElement(AtrcButton, {
    variant: "pagination",
    onClick: function onClick() {
      return doPagination(totalPages);
    },
    disabled: nextDisabled
  }, /*#__PURE__*/React.createElement(AtrcSpan, {
    className: "screen-reader-text"
  }, __('Last page', 'atrc-prefix-atrc')), /*#__PURE__*/React.createElement(AtrcSpan, {
    "aria-hidden": "true"
  }, "\xBB"))));
};
export default AtrcPagination;
//# sourceMappingURL=index.js.map