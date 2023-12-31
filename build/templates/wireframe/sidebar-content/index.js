function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcWrap from '../../../atoms/wrap';

/*Prefix*/
import AtrcSidebar from '../../../organisms/sidebar';

/*Local*/
const AtColumn = props => {
  const {
    contentSidebar = false /*right sidebar, default is left sidebar*/,
    renderSidebar = null,
    renderContent = null,
    sidebarProps = {},
    contentProps = {}
  } = props;
  const {
    sidebarCol = '',
    ...sidebarDefaultProps
  } = sidebarProps;
  const {
    contentCol = '',
    ...contentDefaultProps
  } = contentProps;
  if (!contentSidebar) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcSidebar, _extends({}, sidebarDefaultProps, {
      className: classnames(sidebarCol || 'at-col-1', sidebarDefaultProps.className || '')
    }), renderSidebar), /*#__PURE__*/React.createElement(AtrcWrap, _extends({
      tag: "section"
    }, contentDefaultProps, {
      className: classnames(contentCol || 'at-col-11', contentDefaultProps.className || '')
    }), renderContent));
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    tag: "section"
  }, contentDefaultProps, {
    className: classnames(contentCol || 'at-col-11', contentDefaultProps.className || '')
  }), renderContent), /*#__PURE__*/React.createElement(AtrcSidebar, _extends({}, sidebarDefaultProps, {
    className: classnames(sidebarCol || 'at-col-1', sidebarDefaultProps.className || '')
  }), renderSidebar));
};
const AtRow = props => {
  const {
    allowRow = true,
    rowProps = {},
    ...defaultProps
  } = props;
  if (allowRow) {
    const {
      className = '',
      ...rowDefaultProps
    } = rowProps;
    return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
      className: classnames('at-row', className)
    }, rowDefaultProps), /*#__PURE__*/React.createElement(AtColumn, defaultProps));
  }
  return /*#__PURE__*/React.createElement(AtColumn, defaultProps);
};
const AtrcWireFrameSidebarContent = props => {
  const {
    wrapProps = null,
    ...defaultProps
  } = props;
  if (wrapProps) {
    return /*#__PURE__*/React.createElement(AtrcWrap, wrapProps, /*#__PURE__*/React.createElement(AtRow, defaultProps));
  }
  return /*#__PURE__*/React.createElement(AtRow, defaultProps);
};
export default AtrcWireFrameSidebarContent;
//# sourceMappingURL=index.js.map