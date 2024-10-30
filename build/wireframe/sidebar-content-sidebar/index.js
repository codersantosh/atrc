var _excluded = ["contentCol"],
  _excluded2 = ["allowRow", "rowProps"],
  _excluded3 = ["className"],
  _excluded4 = ["wrapProps"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';

/*Organisms*/
import AtrcSidebar from '../../organisms/sidebar';

/*Local*/
var AtColumn = function AtColumn(props) {
  var _props$renderSidebarL = props.renderSidebarLeft,
    renderSidebarLeft = _props$renderSidebarL === void 0 ? null : _props$renderSidebarL,
    _props$renderSidebarR = props.renderSidebarRight,
    renderSidebarRight = _props$renderSidebarR === void 0 ? null : _props$renderSidebarR,
    _props$renderContent = props.renderContent,
    renderContent = _props$renderContent === void 0 ? null : _props$renderContent,
    _props$columns = props.columns,
    columns = _props$columns === void 0 ? {} : _props$columns,
    _props$sidebarLeftPro = props.sidebarLeftProps,
    sidebarLeftProps = _props$sidebarLeftPro === void 0 ? {} : _props$sidebarLeftPro,
    _props$sidebarRightPr = props.sidebarRightProps,
    sidebarRightProps = _props$sidebarRightPr === void 0 ? {} : _props$sidebarRightPr,
    _props$contentProps = props.contentProps,
    contentProps = _props$contentProps === void 0 ? {} : _props$contentProps;
  var _contentProps$content = contentProps.contentCol,
    contentCol = _contentProps$content === void 0 ? '' : _contentProps$content,
    contentDefaultProps = _objectWithoutProperties(contentProps, _excluded);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcSidebar, _extends({}, sidebarLeftProps, {
    className: classnames(columns.left || 'at-col-3', sidebarLeftProps.className || '')
  }), renderSidebarLeft), /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    tag: "section"
  }, contentDefaultProps, {
    className: classnames(columns.content || 'at-col-6', contentDefaultProps.className || '')
  }), renderContent), /*#__PURE__*/React.createElement(AtrcSidebar, _extends({}, sidebarRightProps, {
    className: classnames(columns.right || 'at-col-3', sidebarRightProps.className || '')
  }), renderSidebarRight));
};
var AtRow = function AtRow(props) {
  var _props$allowRow = props.allowRow,
    allowRow = _props$allowRow === void 0 ? true : _props$allowRow,
    _props$rowProps = props.rowProps,
    rowProps = _props$rowProps === void 0 ? {} : _props$rowProps,
    defaultProps = _objectWithoutProperties(props, _excluded2);
  if (allowRow) {
    var _rowProps$className = rowProps.className,
      className = _rowProps$className === void 0 ? '' : _rowProps$className,
      rowDefaultProps = _objectWithoutProperties(rowProps, _excluded3);
    return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
      className: classnames('at-row', className)
    }, rowDefaultProps), /*#__PURE__*/React.createElement(AtColumn, defaultProps));
  }
  return /*#__PURE__*/React.createElement(AtColumn, defaultProps);
};
var AtrcWireFrameSidebarContentSidebar = function AtrcWireFrameSidebarContentSidebar(props) {
  var _props$wrapProps = props.wrapProps,
    wrapProps = _props$wrapProps === void 0 ? null : _props$wrapProps,
    defaultProps = _objectWithoutProperties(props, _excluded4);
  if (wrapProps) {
    return /*#__PURE__*/React.createElement(AtrcWrap, wrapProps, /*#__PURE__*/React.createElement(AtRow, defaultProps));
  }
  return /*#__PURE__*/React.createElement(AtRow, defaultProps);
};
export default AtrcWireFrameSidebarContentSidebar;
//# sourceMappingURL=index.js.map