var _excluded = ["hasRow", "rowProps", "className", "variant"];
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcWrap from '../../../atoms/wrap';

/* Organisms */

/*  Molecules */

/* Controls */

/* Organisms */
import AtrcSidebar from '../../../organisms/sidebar';
import AtrcRow from '../../../organisms/row';

/*Prefix*/
import AtrcPrefix from '../../../prefix-vars';

/* Inbuild */
import AtrcListFilterTemplate1 from '../../components/list-filter/template-1';

/*Local*/
var Parts = function Parts(props) {
  var _props$renderSidebar = props.renderSidebar,
    renderSidebar = _props$renderSidebar === void 0 ? null : _props$renderSidebar,
    _props$sidebarProps = props.sidebarProps,
    sidebarProps = _props$sidebarProps === void 0 ? {} : _props$sidebarProps,
    _props$renderHeader = props.renderHeader,
    renderHeader = _props$renderHeader === void 0 ? null : _props$renderHeader,
    _props$renderContent = props.renderContent,
    renderContent = _props$renderContent === void 0 ? null : _props$renderContent,
    _props$renderFooter = props.renderFooter,
    renderFooter = _props$renderFooter === void 0 ? null : _props$renderFooter,
    _props$contentProps = props.contentProps,
    contentProps = _props$contentProps === void 0 ? {} : _props$contentProps,
    _props$contentWrapPro = props.contentWrapProps,
    contentWrapProps = _props$contentWrapPro === void 0 ? {} : _props$contentWrapPro;
  var toggleFilter = true;
  return /*#__PURE__*/React.createElement(React.Fragment, null, renderSidebar ? /*#__PURE__*/React.createElement(AtrcSidebar, _extends({
    className: "at-col-1"
  }, sidebarProps), renderSidebar) : null, /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    tag: "div",
    className: "at-col-11"
  }, contentProps), /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    className: classnames(AtrcPrefix('bg-white'), 'at-bg-cl')
  }, contentWrapProps), renderHeader ? /*#__PURE__*/React.createElement(AtrcListFilterTemplate1, renderHeader) : null, renderContent ? renderContent : null, renderFooter ? /*#__PURE__*/React.createElement(AtrcListFilterTemplate1, renderFooter) : null)));
};
var AtrcPageListTemplate1 = function AtrcPageListTemplate1(props) {
  var _props$hasRow = props.hasRow,
    hasRow = _props$hasRow === void 0 ? true : _props$hasRow,
    _props$rowProps = props.rowProps,
    rowProps = _props$rowProps === void 0 ? {} : _props$rowProps,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    defaultProps = _objectWithoutProperties(props, _excluded);
  if (hasRow) {
    return /*#__PURE__*/React.createElement(AtrcRow, _extends({
      className: classnames(AtrcPrefix('page-ls-tpl-1'), className, variant ? AtrcPrefix('page-ls-tpl-1') + '-' + variant : '')
    }, rowProps), /*#__PURE__*/React.createElement(Parts, defaultProps));
  }
  return /*#__PURE__*/React.createElement(Parts, defaultProps);
};
export default AtrcPageListTemplate1;
//# sourceMappingURL=index.js.map