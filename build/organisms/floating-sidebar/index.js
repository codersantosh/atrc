function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/

/*Library*/
import { PortalWithState } from 'react-portal';
import classnames from 'classnames';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';
import AtrcSidebar from '../sidebar';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcFloatingSidebar = props => {
  const {
    onToggle = false,
    onClose = false,
    direction = 'right',
    className = '',
    variant = '' /*over and push*/,
    children = '',
    renderToggle = args => {},
    renderContent = args => {},
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    className: classnames(AtrcPrefix('sidebar-icon'), direction ? AtrcPrefix('side-nav') + direction : '')
  }, defaultProps), /*#__PURE__*/React.createElement(PortalWithState, {
    closeOnOutsideClick: true,
    closeOnEsc: true
  }, ({
    openPortal,
    closePortal,
    isOpen,
    portal
  }) => {
    const toggle = () => {
      if (isOpen) {
        closePortal();
      } else {
        openPortal();
      }
    };
    const args = {
      isOpen,
      openPortal,
      onToggle: toggle,
      onClose: closePortal
    };
    return /*#__PURE__*/React.createElement(React.Fragment, null, renderToggle(args), portal( /*#__PURE__*/React.createElement(AtrcSidebar, {
      variant: "floating",
      className: "at-pos at-z-idx at-w at-h at-bg-cl at-p at-box-sdw",
      direction: direction
    }, renderContent(args))));
  }));
};
export default AtrcFloatingSidebar;
//# sourceMappingURL=index.js.map