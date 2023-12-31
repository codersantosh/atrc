"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _coreData = require("@wordpress/core-data");
var _element = require("@wordpress/element");
var _data = require("@wordpress/data");
var _i18n = require("@wordpress/i18n");
var _url = require("@wordpress/url");
var _wrap = _interopRequireDefault(require("../../atoms/wrap"));
var _img = _interopRequireDefault(require("../../atoms/img"));
var _useUserAvatar = _interopRequireDefault(require("./use-user-avatar"));
var _excluded = ["postType", "postId", "htmlTag", "linkOptions", "size"];
/*WordPress*/
/* Inbuilt */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/* Local */
var AtrcPostAuthorImage = function AtrcPostAuthorImage(props, ref) {
  var postType = props.postType,
    postId = props.postId,
    htmlTag = props.htmlTag,
    linkOptions = props.linkOptions,
    _props$size = props.size,
    size = _props$size === void 0 ? 24 : _props$size,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var authorId = (0, _data.useSelect)(function (select) {
    var _getEditedEntityRecor;
    var _select = select(_coreData.store),
      getEditedEntityRecord = _select.getEditedEntityRecord;
    var _authorId = (_getEditedEntityRecor = getEditedEntityRecord('postType', postType, postId)) === null || _getEditedEntityRecor === void 0 ? void 0 : _getEditedEntityRecor.author;
    return _authorId;
  }, [postType, postId]);
  var avatar = (0, _useUserAvatar.default)({
    userId: authorId,
    postId: postId,
    postType: postType
  });
  var doubledSizedSrc = (0, _url.addQueryArgs)((0, _url.removeQueryArgs)(avatar === null || avatar === void 0 ? void 0 : avatar.src, ['s']), {
    s: size * 2
  });
  return /*#__PURE__*/React.createElement(_wrap.default, _extends({}, defaultProps, {
    ref: ref,
    tag: "figure"
  }), doubledSizedSrc ? /*#__PURE__*/React.createElement(_img.default, {
    src: doubledSizedSrc,
    alt: (0, _i18n.__)('Author image', 'atrc-prefix-atrc')
  }) : (0, _i18n.__)('Not author image found!', 'atrc-prefix-atrc'));
};
var _default = exports.default = (0, _element.forwardRef)(AtrcPostAuthorImage);
//# sourceMappingURL=index.js.map