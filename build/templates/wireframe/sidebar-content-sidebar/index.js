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
    renderSidebarLeft = null,
    renderSidebarRight = null,
    renderContent = null,
    sidebarLeftProps = {},
    sidebarRightProps = {},
    contentProps = {}
  } = props;
  const {
    contentCol = '',
    ...contentDefaultProps
  } = contentProps;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcSidebar, _extends({}, sidebarLeftProps, {
    className: classnames(sidebarLeftProps.sidebarCol || 'at-col-1', sidebarLeftProps.className || '')
  }), renderSidebarLeft), /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    tag: "section"
  }, contentDefaultProps, {
    className: classnames(contentCol || 'at-col-10', contentDefaultProps.className || '')
  }), renderContent), /*#__PURE__*/React.createElement(AtrcSidebar, _extends({}, sidebarRightProps, {
    className: classnames(sidebarRightProps.sidebarCol || 'at-col-1', sidebarRightProps.className || '')
  }), renderSidebarRight));
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
const AtrcWireFrameSidebarContentSidebar = props => {
  const {
    wrapProps = null,
    ...defaultProps
  } = props;
  if (wrapProps) {
    return /*#__PURE__*/React.createElement(AtrcWrap, wrapProps, /*#__PURE__*/React.createElement(AtRow, defaultProps));
  }
  return /*#__PURE__*/React.createElement(AtRow, defaultProps);
};
export default AtrcWireFrameSidebarContentSidebar;
//# sourceMappingURL=index.js.map