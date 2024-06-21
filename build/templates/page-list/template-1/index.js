var _excluded = ["hasRow", "rowProps", "className", "variant"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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