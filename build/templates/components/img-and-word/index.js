function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* Library */
import classnames from 'classnames';

/* Inbuilt */
import AtrcSpan from '../../../atoms/span';
import AtrcWord from '../../../atoms/word';
import AtrcImg from '../../../atoms/img';
import AtrcPrefix from '../../../prefix-vars';
var AtrcTemplateImgAndWord = function AtrcTemplateImgAndWord(props) {
  var imgProps = props.imgProps,
    wordProps = props.wordProps;
  return /*#__PURE__*/React.createElement(AtrcSpan, {
    className: classnames(AtrcPrefix('img-txt'), 'at-flx', 'at-al-itm-ctr', 'at-gap')
  }, /*#__PURE__*/React.createElement(AtrcImg, imgProps), /*#__PURE__*/React.createElement(AtrcWord, _extends({
    tag: "span"
  }, wordProps)));
};
export default AtrcTemplateImgAndWord;
//# sourceMappingURL=index.js.map