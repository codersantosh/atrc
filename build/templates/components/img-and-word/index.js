"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classnames = _interopRequireDefault(require("classnames"));
var _span = _interopRequireDefault(require("../../../atoms/span"));
var _word = _interopRequireDefault(require("../../../atoms/word"));
var _img = _interopRequireDefault(require("../../../atoms/img"));
var _prefixVars = _interopRequireDefault(require("../../../prefix-vars"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } /* Library */ /* Inbuilt */
var AtrcTemplateImgAndWord = function AtrcTemplateImgAndWord(props) {
  var imgProps = props.imgProps,
    wordProps = props.wordProps;
  return /*#__PURE__*/React.createElement(_span.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('img-txt'), 'at-flx', 'at-al-itm-ctr', 'at-gap')
  }, /*#__PURE__*/React.createElement(_img.default, imgProps), /*#__PURE__*/React.createElement(_word.default, _extends({
    tag: "span"
  }, wordProps)));
};
var _default = exports.default = AtrcTemplateImgAndWord;
//# sourceMappingURL=index.js.map