var _excluded = ["wrapProps"],
  _excluded2 = ["allowContainer", "className", "variant"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';

/* Organisms */
import AtrcHeader from '../../organisms/header';
import AtrcContent from '../../organisms/content';
import AtrcContainer from '../../organisms/container';
import AtrcFooter from '../../organisms/footer';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var Parts = function Parts(props) {
  var _props$renderHeader = props.renderHeader,
    renderHeader = _props$renderHeader === void 0 ? null : _props$renderHeader,
    _props$headerProps = props.headerProps,
    headerProps = _props$headerProps === void 0 ? {} : _props$headerProps,
    _props$renderContent = props.renderContent,
    renderContent = _props$renderContent === void 0 ? null : _props$renderContent,
    _props$contentProps = props.contentProps,
    contentProps = _props$contentProps === void 0 ? {} : _props$contentProps,
    _props$renderFooter = props.renderFooter,
    renderFooter = _props$renderFooter === void 0 ? null : _props$renderFooter,
    _props$footerProps = props.footerProps,
    footerProps = _props$footerProps === void 0 ? {} : _props$footerProps;
  return /*#__PURE__*/React.createElement(React.Fragment, null, renderHeader ? /*#__PURE__*/React.createElement(AtrcHeader, headerProps, renderHeader) : null, renderContent ? /*#__PURE__*/React.createElement(AtrcContent, contentProps, renderContent) : null, renderFooter ? /*#__PURE__*/React.createElement(AtrcFooter, footerProps, renderFooter) : null);
};
var AtrcWireFrameHeaderContentFooter = function AtrcWireFrameHeaderContentFooter(props) {
  var _props$wrapProps = props.wrapProps,
    wrapProps = _props$wrapProps === void 0 ? null : _props$wrapProps,
    defaultProps = _objectWithoutProperties(props, _excluded);
  if (wrapProps) {
    var _wrapProps$allowConta = wrapProps.allowContainer,
      allowContainer = _wrapProps$allowConta === void 0 ? false : _wrapProps$allowConta,
      _wrapProps$className = wrapProps.className,
      className = _wrapProps$className === void 0 ? '' : _wrapProps$className,
      _wrapProps$variant = wrapProps.variant,
      variant = _wrapProps$variant === void 0 ? '' : _wrapProps$variant,
      wrapDefaultProps = _objectWithoutProperties(wrapProps, _excluded2);
    var WrapTag = allowContainer ? AtrcContainer : AtrcWrap;
    return /*#__PURE__*/React.createElement(WrapTag, _extends({
      className: classnames(AtrcPrefix('hdr-cont-ftr-wrp'), className, variant ? AtrcPrefix('hdr-cont-ftr-wrp') + '-' + variant : '')
    }, wrapDefaultProps), /*#__PURE__*/React.createElement(Parts, defaultProps));
  }
  return /*#__PURE__*/React.createElement(Parts, defaultProps);
};
export default AtrcWireFrameHeaderContentFooter;
//# sourceMappingURL=index.js.map