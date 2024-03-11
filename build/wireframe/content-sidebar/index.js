function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*Internal*/
import AtrcWireFrameSidebarContent from '../sidebar-content';

/*Local*/
var AtrcWireFrameContentSidebar = function AtrcWireFrameContentSidebar(props) {
  return /*#__PURE__*/React.createElement(AtrcWireFrameSidebarContent, _extends({}, props, {
    contentSidebar: true
  }));
};
export default AtrcWireFrameContentSidebar;
//# sourceMappingURL=index.js.map