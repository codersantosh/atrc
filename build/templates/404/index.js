var _excluded = ["className", "variant", "label", "right"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
var Atrc404 = function Atrc404(props) {
  var _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    label = props.label,
    _props$right = props.right,
    right = _props$right === void 0 ? null : _props$right,
    defaultProps = _objectWithoutProperties(props, _excluded);
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