function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*Library*/
import classnames from 'classnames';
import { BsArrowLeft, BsEmojiFrown } from 'react-icons/bs';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';
import AtrcButton from '../../atoms/button';
import AtrcIcon from '../../atoms/icon';
import AtrcWord from '../../atoms/word';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const Atrc404 = props => {
  const {
    className = '',
    variant = '',
    label,
    right = null,
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    className: classnames(AtrcPrefix('404'), className, variant ? AtrcPrefix('404') + '-' + variant : '')
  }, defaultProps), /*#__PURE__*/React.createElement(AtrcWrap, {
    className: "at-ctnr"
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames('at-flx', 'at-flx-col', 'at-jfy-cont-ctr', 'at-al-itm-ctr', AtrcPrefix('404-cont'))
  }, /*#__PURE__*/React.createElement(AtrcWord, {
    tag: "h3",
    className: classnames(AtrcPrefix('m-0'))
  }, "Oops!"), /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames('at-flx', 'at-al-itm-ctr')
  }, /*#__PURE__*/React.createElement(AtrcWord, {
    tag: "h1",
    className: classnames(AtrcPrefix('m-0'))
  }, "4"), /*#__PURE__*/React.createElement(AtrcIcon, {
    className: classnames(AtrcPrefix('mr-5'), AtrcPrefix('ml-5'), AtrcPrefix('404-icon')),
    type: "bootstrap",
    icon: BsEmojiFrown
  }), /*#__PURE__*/React.createElement(AtrcWord, {
    tag: "h1",
    className: classnames(AtrcPrefix('m-0'))
  }, "4")), /*#__PURE__*/React.createElement(AtrcWord, {
    tag: "h3",
    variant: "txt-error",
    className: classnames(AtrcPrefix('m-0'))
  }, "Error Page"), /*#__PURE__*/React.createElement(AtrcWord, {
    tag: "h2"
  }, "We can't seem to find the page you're looking for"), /*#__PURE__*/React.createElement(AtrcButton, {
    variant: "primary",
    className: classnames('at-flx', 'at-al-itm-ctr', AtrcPrefix('pt-15'), AtrcPrefix('pb-15'), AtrcPrefix('pl-40'), AtrcPrefix('pr-40'))
  }, /*#__PURE__*/React.createElement(AtrcIcon, {
    className: classnames(AtrcPrefix('mr-5')),
    type: "bootstrap",
    icon: BsArrowLeft
  }), "Back"))));
};
export default Atrc404;
//# sourceMappingURL=index.js.map