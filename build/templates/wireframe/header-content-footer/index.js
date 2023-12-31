function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcWrap from '../../../atoms/wrap';
import AtrcHeader from '../../../organisms/header';
import AtrcFooter from '../../../organisms/footer';

/*Local*/
const ContentCol = ({
  contentColProps,
  renderContent,
  allowContentCol
}) => {
  if (allowContentCol) {
    return /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, contentColProps, {
      className: classnames('at-col-12', contentColProps.className || '')
    }), renderContent);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, renderContent);
};
const Parts = props => {
  const {
    renderHeader = null,
    renderContent = null,
    renderFooter = null,
    headerRowProps = {},
    headerColProps = {},
    contentRowProps = {},
    contentColProps = {},
    footerRowProps = {},
    footerColProps = {},
    allowHeaderRow = true,
    allowHeaderCol = true,
    allowContentRow = true,
    allowContentCol = true,
    allowFooterRow = true,
    allowFooterCol = true
  } = props;
  return /*#__PURE__*/React.createElement(React.Fragment, null, renderHeader ? /*#__PURE__*/React.createElement(AtrcHeader, _extends({}, headerRowProps, {
    className: classnames(allowHeaderRow ? 'at-row' : '', headerRowProps.className || '')
  }), allowHeaderCol ? /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, headerColProps, {
    className: classnames('at-col-12', headerColProps.className || '')
  }), renderHeader) : /*#__PURE__*/React.createElement(React.Fragment, null, renderHeader)) : null, renderContent ? allowContentRow ? /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    tag: "section"
  }, contentRowProps, {
    className: classnames('at-row', contentRowProps.className || '')
  }), /*#__PURE__*/React.createElement(ContentCol, {
    contentColProps: contentColProps,
    renderContent: renderContent,
    allowContentCol: allowContentCol
  })) : /*#__PURE__*/React.createElement(ContentCol, {
    contentColProps: contentColProps,
    renderContent: renderContent,
    allowContentCol: allowContentCol
  }) : null, renderFooter ? /*#__PURE__*/React.createElement(AtrcFooter, _extends({}, footerRowProps, {
    className: classnames(allowFooterRow ? 'at-row' : '', footerRowProps.className || '')
  }), allowFooterCol ? /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, footerColProps, {
    className: classnames('at-col-12', footerColProps.className || '')
  }), renderFooter) : /*#__PURE__*/React.createElement(React.Fragment, null, renderFooter)) : null);
};
const AtrcWireFrameHeaderContentFooter = props => {
  const {
    wrapProps = null,
    ...defaultProps
  } = props;
  if (wrapProps) {
    return /*#__PURE__*/React.createElement(AtrcWrap, wrapProps, /*#__PURE__*/React.createElement(Parts, defaultProps));
  }
  return /*#__PURE__*/React.createElement(Parts, defaultProps);
};
export default AtrcWireFrameHeaderContentFooter;
//# sourceMappingURL=index.js.map