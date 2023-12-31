function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*Library*/
import classnames from 'classnames';
import { Link, NavLink } from 'react-router-dom';

/*Inbuilt*/
import AtrcButton from '../button';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';
/*
Local Components
Combination of all links which contain a tag and
* button components
* */
const AtrcLink = props => {
  const {
    className = '',
    variant = '',
    type = 'a',
    to = '#',
    children = '',
    prefix = true,
    dangerouslySetInnerHTML = '',
    ...defaultProps
  } = props;
  if (type === 'btn' || 'button' === type) {
    return /*#__PURE__*/React.createElement(AtrcButton, _extends({
      className: classnames(prefix ? AtrcPrefix('lnk-btn') : null, className, variant ? AtrcPrefix('lnk') + '-' + variant : '')
    }, defaultProps), children);
  }
  if (type === 'nav-lnk') {
    return /*#__PURE__*/React.createElement(NavLink, _extends({
      to: to,
      className: ({
        isActive
      }) => classnames(prefix ? AtrcPrefix('lnk') : null, AtrcPrefix('lnk-nav'), className, variant ? AtrcPrefix('lnk') + '-' + variant : '', isActive ? AtrcPrefix('lnk-active') : undefined)
    }, defaultProps), children);
  }
  if (type === 'router-link') {
    return /*#__PURE__*/React.createElement(Link, _extends({
      className: classnames(prefix ? AtrcPrefix('lnk') : null, className, variant ? AtrcPrefix('lnk') + '-' + variant : ''),
      to: to
    }, defaultProps), children);
  }
  if (dangerouslySetInnerHTML) {
    return /*#__PURE__*/React.createElement("a", _extends({
      className: classnames(prefix ? AtrcPrefix('lnk') : null, className, variant ? AtrcPrefix('lnk') + '-' + variant : ''),
      dangerouslySetInnerHTML: dangerouslySetInnerHTML
    }, defaultProps));
  }
  return /*#__PURE__*/React.createElement("a", _extends({
    className: classnames(prefix ? AtrcPrefix('lnk') : null, className, variant ? AtrcPrefix('lnk') + '-' + variant : '')
  }, defaultProps), children);
};
export default AtrcLink;
//# sourceMappingURL=index.js.map