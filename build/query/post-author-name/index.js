"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _i18n = require("@wordpress/i18n");
var _data = require("@wordpress/data");
var _coreData = require("@wordpress/core-data");
var _element = require("@wordpress/element");
var _wrap = _interopRequireDefault(require("../../atoms/wrap"));
var _link = _interopRequireDefault(require("../../atoms/link"));
var _excluded = ["postType", "postId", "htmlTag", "linkOptions"];
/*WordPress*/
/* Inbuilt */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/* Local */
var AtrcPostAuthorName = function AtrcPostAuthorName(props, ref) {
  var postType = props.postType,
    postId = props.postId,
    htmlTag = props.htmlTag,
    linkOptions = props.linkOptions,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var _useSelect = (0, _data.useSelect)(function (select) {
      var _getEditedEntityRecor;
      var _select = select(_coreData.store),
        getEditedEntityRecord = _select.getEditedEntityRecord,
        getUser = _select.getUser;
      var _authorId = (_getEditedEntityRecor = getEditedEntityRecord('postType', postType, postId)) === null || _getEditedEntityRecor === void 0 ? void 0 : _getEditedEntityRecor.author;
      return {
        authorName: _authorId ? getUser(_authorId) : null
      };
    }, [postType, postId]),
    authorName = _useSelect.authorName;
  var displayName = (authorName === null || authorName === void 0 ? void 0 : authorName.name) || (0, _i18n.__)('Author Name', 'atrc=prefix-atrc');
  var displayAuthor = linkOptions && linkOptions.on ? /*#__PURE__*/React.createElement(_link.default, {
    prefix: false,
    href: "#author-pseudo-link",
    onClick: function onClick(event) {
      return event.preventDefault();
    }
  }, displayName) : displayName;
  return /*#__PURE__*/React.createElement(_wrap.default, _extends({}, defaultProps, {
    ref: ref,
    tag: htmlTag
  }), displayAuthor);
};
var _default = exports.default = (0, _element.forwardRef)(AtrcPostAuthorName);
//# sourceMappingURL=index.js.map