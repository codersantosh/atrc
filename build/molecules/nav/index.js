function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcLink from '../../atoms/link';
import AtrcLi from '../../atoms/li';
import AtrcUl from '../ul';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';
/*Local Components*/
const NavLinkLoop = props => {
  const {
    navs,
    linkProps = {},
    ...defaultProps
  } = props;
  if (!navs) {
    return null;
  }
  return navs.map(function (nav, key) {
    const newLinkProps = {
      ...nav,
      ...linkProps
    };
    return /*#__PURE__*/React.createElement(AtrcLi, _extends({
      key: key,
      className: classnames(AtrcPrefix('nav-li'))
    }, defaultProps), /*#__PURE__*/React.createElement(AtrcLink, _extends({
      type: "nav-lnk"
    }, newLinkProps)));
  });
};
const AtrcNav = props => {
  const {
    className = '',
    variant = '',
    navs,
    ulProps = {},
    liProps = {},
    linkProps = {},
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: classnames(AtrcPrefix('nav'), className, variant ? AtrcPrefix('nav') + '-' + variant : '')
  }, defaultProps), /*#__PURE__*/React.createElement(AtrcUl, _extends({}, ulProps, {
    className: classnames(AtrcPrefix('nav-ul'), ulProps.className || null, variant !== 'vertical' ? 'at-flx at-gap at-p' : '')
  }), /*#__PURE__*/React.createElement(NavLinkLoop, _extends({}, liProps, {
    className: classnames(liProps.className || null, variant !== 'vertical' ? 'at-m at-p' : ''),
    navs: navs,
    linkProps: linkProps
  }))));
};
export default AtrcNav;
//# sourceMappingURL=index.js.map