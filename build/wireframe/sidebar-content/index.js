var _excluded = ["sidebarCol"],
  _excluded2 = ["contentCol"],
  _excluded3 = ["rowProps"],
  _excluded4 = ["wrapProps"],
  _excluded5 = ["allowContainer", "className", "variant"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*Library*/
import classnames from 'classnames';

/* Atoms */
import AtrcWrap from '../../atoms/wrap';

/* Organisms */
import AtrcSidebar from '../../organisms/sidebar';
import AtrcContainer from '../../organisms/container';
import AtrcRow from '../../organisms/row';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var AtColumn = function AtColumn(props) {
  var _props$contentSidebar = props.contentSidebar,
    contentSidebar = _props$contentSidebar === void 0 ? false : _props$contentSidebar,
    _props$renderSidebar = props.renderSidebar,
    renderSidebar = _props$renderSidebar === void 0 ? null : _props$renderSidebar,
    _props$renderContent = props.renderContent,
    renderContent = _props$renderContent === void 0 ? null : _props$renderContent,
    _props$sidebarProps = props.sidebarProps,
    sidebarProps = _props$sidebarProps === void 0 ? {} : _props$sidebarProps,
    _props$contentProps = props.contentProps,
    contentProps = _props$contentProps === void 0 ? {} : _props$contentProps;
  var _sidebarProps$sidebar = sidebarProps.sidebarCol,
    sidebarCol = _sidebarProps$sidebar === void 0 ? '' : _sidebarProps$sidebar,
    sidebarDefaultProps = _objectWithoutProperties(sidebarProps, _excluded);
  var _contentProps$content = contentProps.contentCol,
    contentCol = _contentProps$content === void 0 ? '' : _contentProps$content,
    contentDefaultProps = _objectWithoutProperties(contentProps, _excluded2);
  if (!contentSidebar) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcSidebar, _extends({}, sidebarDefaultProps, {
      className: classnames(sidebarCol || 'at-col-3', sidebarDefaultProps.className || '')
    }), renderSidebar), /*#__PURE__*/React.createElement(AtrcWrap, _extends({
      tag: "section"
    }, contentDefaultProps, {
      className: classnames(contentCol || 'at-col-9', contentDefaultProps.className || '')
    }), renderContent));
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    tag: "section"
  }, contentDefaultProps, {
    className: classnames(contentCol || 'at-col-9', contentDefaultProps.className || '')
  }), renderContent), /*#__PURE__*/React.createElement(AtrcSidebar, _extends({}, sidebarDefaultProps, {
    className: classnames(sidebarCol || 'at-col-3', sidebarDefaultProps.className || '')
  }), renderSidebar));
};
var AtRow = function AtRow(props) {
  var _props$rowProps = props.rowProps,
    rowProps = _props$rowProps === void 0 ? {} : _props$rowProps,
    defaultProps = _objectWithoutProperties(props, _excluded3);
  return /*#__PURE__*/React.createElement(AtrcRow, rowProps, /*#__PURE__*/React.createElement(AtColumn, defaultProps));
};
var AtrcWireFrameSidebarContent = function AtrcWireFrameSidebarContent(props) {
  var _props$wrapProps = props.wrapProps,
    wrapProps = _props$wrapProps === void 0 ? null : _props$wrapProps,
    defaultProps = _objectWithoutProperties(props, _excluded4);
  if (wrapProps) {
    var _wrapProps$allowConta = wrapProps.allowContainer,
      allowContainer = _wrapProps$allowConta === void 0 ? false : _wrapProps$allowConta,
      _wrapProps$className = wrapProps.className,
      className = _wrapProps$className === void 0 ? '' : _wrapProps$className,
      _wrapProps$variant = wrapProps.variant,
      variant = _wrapProps$variant === void 0 ? '' : _wrapProps$variant,
      wrapDefaultProps = _objectWithoutProperties(wrapProps, _excluded5);
    var WrapTag = allowContainer ? AtrcContainer : AtrcWrap;
    return /*#__PURE__*/React.createElement(WrapTag, _extends({
      className: classnames(AtrcPrefix('cont-sdbar-wrp'), className, variant ? AtrcPrefix('cont-sdbar-wrp') + '-' + variant : '')
    }, wrapDefaultProps), /*#__PURE__*/React.createElement(AtRow, defaultProps));
  }
  return /*#__PURE__*/React.createElement(AtRow, defaultProps);
};
export default AtrcWireFrameSidebarContent;
//# sourceMappingURL=index.js.map