"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _i18n = require("@wordpress/i18n");
var _htmlEntities = require("@wordpress/html-entities");
var _element = require("@wordpress/element");
var _wrap = _interopRequireDefault(require("../../atoms/wrap"));
var _link = _interopRequireDefault(require("../../atoms/link"));
var _spinner = _interopRequireDefault(require("../../atoms/spinner"));
var _usePostTerms = _interopRequireDefault(require("./use-post-terms"));
var _excluded = ["postType", "postId", "htmlTag", "taxonomy", "separator"];
/*WordPress*/
/* Inbuilt */
/* Local */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var AtrcPostTerms = function AtrcPostTerms(props, ref) {
  var _selectedTerm;
  var postType = props.postType,
    postId = props.postId,
    htmlTag = props.htmlTag,
    _props$taxonomy = props.taxonomy,
    taxonomy = _props$taxonomy === void 0 ? 'category' : _props$taxonomy,
    separator = props.separator,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var _AtrcUsePostTerms = (0, _usePostTerms.default)({
      postId: postId,
      taxonomy: taxonomy
    }),
    postTerms = _AtrcUsePostTerms.postTerms,
    hasPostTerms = _AtrcUsePostTerms.hasPostTerms,
    isLoading = _AtrcUsePostTerms.isLoading;
  var hasPost = postType;
  var TermTag = htmlTag;
  return /*#__PURE__*/React.createElement(_wrap.default, _extends({}, defaultProps, {
    ref: ref
  }), isLoading && hasPost && /*#__PURE__*/React.createElement(_spinner.default, null), hasPost && !isLoading && hasPostTerms && postTerms.map(function (postTerm) {
    return /*#__PURE__*/React.createElement(TermTag, {
      key: postTerm.id,
      className: "at-txt"
    }, /*#__PURE__*/React.createElement(_link.default, {
      prefix: false,
      href: postTerm.link,
      onClick: function onClick(event) {
        return event.preventDefault();
      }
    }, (0, _htmlEntities.decodeEntities)(postTerm.name)));
  }).reduce(function (prev, curr) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, prev, /*#__PURE__*/React.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: separator || ' '
      }
    }), curr);
  }), hasPost && !isLoading && !hasPostTerms && (((_selectedTerm = selectedTerm) === null || _selectedTerm === void 0 || (_selectedTerm = _selectedTerm.labels) === null || _selectedTerm === void 0 ? void 0 : _selectedTerm.no_terms) || (0, _i18n.__)('Term items not found.', 'atrc-prefix-atrc')));
};
var _default = exports.default = (0, _element.forwardRef)(AtrcPostTerms);
//# sourceMappingURL=index.js.map