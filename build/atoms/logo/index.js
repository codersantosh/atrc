function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* Library */
import classnames from 'classnames';

/*Inbuilt*/
import AtrcWrap from '../wrap';
import AtrcImg from '../img';
import AtrcLink from '../link';
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcLogo = props => {
  const {
    variant = '',
    className = '',
    src = '',
    imgProps = {},
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    className: classnames(AtrcPrefix('logo'), className, variant ? AtrcPrefix('logo') + '-' + variant : '')
  }, defaultProps), /*#__PURE__*/React.createElement(AtrcLink, {
    type: "nav-lnk",
    to: '/',
    end: true
  }, /*#__PURE__*/React.createElement(AtrcImg, _extends({
    variant: "logo",
    src: src
  }, imgProps))));
};
export default AtrcLogo;
//# sourceMappingURL=index.js.map