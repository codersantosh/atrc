"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classnames = _interopRequireDefault(require("classnames"));
var _wrap = _interopRequireDefault(require("../../../atoms/wrap"));
var _header = _interopRequireDefault(require("../../../organisms/header"));
var _footer = _interopRequireDefault(require("../../../organisms/footer"));
var _excluded = ["wrapProps"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } /*Library*/ /*Inbuilt*/
/*Local*/
var ContentCol = function ContentCol(_ref) {
  var contentColProps = _ref.contentColProps,
    renderContent = _ref.renderContent,
    allowContentCol = _ref.allowContentCol;
  if (allowContentCol) {
    return /*#__PURE__*/React.createElement(_wrap.default, _extends({}, contentColProps, {
      className: (0, _classnames.default)('at-col-12', contentColProps.className || '')
    }), renderContent);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, renderContent);
};
var Parts = function Parts(props) {
  var _props$renderHeader = props.renderHeader,
    renderHeader = _props$renderHeader === void 0 ? null : _props$renderHeader,
    _props$renderContent = props.renderContent,
    renderContent = _props$renderContent === void 0 ? null : _props$renderContent,
    _props$renderFooter = props.renderFooter,
    renderFooter = _props$renderFooter === void 0 ? null : _props$renderFooter,
    _props$headerRowProps = props.headerRowProps,
    headerRowProps = _props$headerRowProps === void 0 ? {} : _props$headerRowProps,
    _props$headerColProps = props.headerColProps,
    headerColProps = _props$headerColProps === void 0 ? {} : _props$headerColProps,
    _props$contentRowProp = props.contentRowProps,
    contentRowProps = _props$contentRowProp === void 0 ? {} : _props$contentRowProp,
    _props$contentColProp = props.contentColProps,
    contentColProps = _props$contentColProp === void 0 ? {} : _props$contentColProp,
    _props$footerRowProps = props.footerRowProps,
    footerRowProps = _props$footerRowProps === void 0 ? {} : _props$footerRowProps,
    _props$footerColProps = props.footerColProps,
    footerColProps = _props$footerColProps === void 0 ? {} : _props$footerColProps,
    _props$allowHeaderRow = props.allowHeaderRow,
    allowHeaderRow = _props$allowHeaderRow === void 0 ? true : _props$allowHeaderRow,
    _props$allowHeaderCol = props.allowHeaderCol,
    allowHeaderCol = _props$allowHeaderCol === void 0 ? true : _props$allowHeaderCol,
    _props$allowContentRo = props.allowContentRow,
    allowContentRow = _props$allowContentRo === void 0 ? true : _props$allowContentRo,
    _props$allowContentCo = props.allowContentCol,
    allowContentCol = _props$allowContentCo === void 0 ? true : _props$allowContentCo,
    _props$allowFooterRow = props.allowFooterRow,
    allowFooterRow = _props$allowFooterRow === void 0 ? true : _props$allowFooterRow,
    _props$allowFooterCol = props.allowFooterCol,
    allowFooterCol = _props$allowFooterCol === void 0 ? true : _props$allowFooterCol;
  return /*#__PURE__*/React.createElement(React.Fragment, null, renderHeader ? /*#__PURE__*/React.createElement(_header.default, _extends({}, headerRowProps, {
    className: (0, _classnames.default)(allowHeaderRow ? 'at-row' : '', headerRowProps.className || '')
  }), allowHeaderCol ? /*#__PURE__*/React.createElement(_wrap.default, _extends({}, headerColProps, {
    className: (0, _classnames.default)('at-col-12', headerColProps.className || '')
  }), renderHeader) : /*#__PURE__*/React.createElement(React.Fragment, null, renderHeader)) : null, renderContent ? allowContentRow ? /*#__PURE__*/React.createElement(_wrap.default, _extends({
    tag: "section"
  }, contentRowProps, {
    className: (0, _classnames.default)('at-row', contentRowProps.className || '')
  }), /*#__PURE__*/React.createElement(ContentCol, {
    contentColProps: contentColProps,
    renderContent: renderContent,
    allowContentCol: allowContentCol
  })) : /*#__PURE__*/React.createElement(ContentCol, {
    contentColProps: contentColProps,
    renderContent: renderContent,
    allowContentCol: allowContentCol
  }) : null, renderFooter ? /*#__PURE__*/React.createElement(_footer.default, _extends({}, footerRowProps, {
    className: (0, _classnames.default)(allowFooterRow ? 'at-row' : '', footerRowProps.className || '')
  }), allowFooterCol ? /*#__PURE__*/React.createElement(_wrap.default, _extends({}, footerColProps, {
    className: (0, _classnames.default)('at-col-12', footerColProps.className || '')
  }), renderFooter) : /*#__PURE__*/React.createElement(React.Fragment, null, renderFooter)) : null);
};
var AtrcWireFrameHeaderContentFooter = function AtrcWireFrameHeaderContentFooter(props) {
  var _props$wrapProps = props.wrapProps,
    wrapProps = _props$wrapProps === void 0 ? null : _props$wrapProps,
    defaultProps = _objectWithoutProperties(props, _excluded);
  if (wrapProps) {
    return /*#__PURE__*/React.createElement(_wrap.default, wrapProps, /*#__PURE__*/React.createElement(Parts, defaultProps));
  }
  return /*#__PURE__*/React.createElement(Parts, defaultProps);
};
var _default = exports.default = AtrcWireFrameHeaderContentFooter;
//# sourceMappingURL=index.js.map