"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classnames = _interopRequireDefault(require("classnames"));
var _wrap = _interopRequireDefault(require("../../../atoms/wrap"));
var _sidebar = _interopRequireDefault(require("../../../organisms/sidebar"));
var _excluded = ["contentCol"],
  _excluded2 = ["allowRow", "rowProps"],
  _excluded3 = ["className"],
  _excluded4 = ["wrapProps"];
/*Library*/
/*Inbuilt*/
/*Prefix*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Local*/
var AtColumn = function AtColumn(props) {
  var _props$renderSidebarL = props.renderSidebarLeft,
    renderSidebarLeft = _props$renderSidebarL === void 0 ? null : _props$renderSidebarL,
    _props$renderSidebarR = props.renderSidebarRight,
    renderSidebarRight = _props$renderSidebarR === void 0 ? null : _props$renderSidebarR,
    _props$renderContent = props.renderContent,
    renderContent = _props$renderContent === void 0 ? null : _props$renderContent,
    _props$sidebarLeftPro = props.sidebarLeftProps,
    sidebarLeftProps = _props$sidebarLeftPro === void 0 ? {} : _props$sidebarLeftPro,
    _props$sidebarRightPr = props.sidebarRightProps,
    sidebarRightProps = _props$sidebarRightPr === void 0 ? {} : _props$sidebarRightPr,
    _props$contentProps = props.contentProps,
    contentProps = _props$contentProps === void 0 ? {} : _props$contentProps;
  var _contentProps$content = contentProps.contentCol,
    contentCol = _contentProps$content === void 0 ? '' : _contentProps$content,
    contentDefaultProps = _objectWithoutProperties(contentProps, _excluded);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_sidebar.default, _extends({}, sidebarLeftProps, {
    className: (0, _classnames.default)(sidebarLeftProps.sidebarCol || 'at-col-1', sidebarLeftProps.className || '')
  }), renderSidebarLeft), /*#__PURE__*/React.createElement(_wrap.default, _extends({
    tag: "section"
  }, contentDefaultProps, {
    className: (0, _classnames.default)(contentCol || 'at-col-10', contentDefaultProps.className || '')
  }), renderContent), /*#__PURE__*/React.createElement(_sidebar.default, _extends({}, sidebarRightProps, {
    className: (0, _classnames.default)(sidebarRightProps.sidebarCol || 'at-col-1', sidebarRightProps.className || '')
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
    return /*#__PURE__*/React.createElement(_wrap.default, _extends({
      className: (0, _classnames.default)('at-row', className)
    }, rowDefaultProps), /*#__PURE__*/React.createElement(AtColumn, defaultProps));
  }
  return /*#__PURE__*/React.createElement(AtColumn, defaultProps);
};
var AtrcWireFrameSidebarContentSidebar = function AtrcWireFrameSidebarContentSidebar(props) {
  var _props$wrapProps = props.wrapProps,
    wrapProps = _props$wrapProps === void 0 ? null : _props$wrapProps,
    defaultProps = _objectWithoutProperties(props, _excluded4);
  if (wrapProps) {
    return /*#__PURE__*/React.createElement(_wrap.default, wrapProps, /*#__PURE__*/React.createElement(AtRow, defaultProps));
  }
  return /*#__PURE__*/React.createElement(AtRow, defaultProps);
};
var _default = exports.default = AtrcWireFrameSidebarContentSidebar;
//# sourceMappingURL=index.js.map