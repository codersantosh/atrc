var _excluded = ["postType", "postId", "htmlTag", "linkOptions", "size"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*WordPress*/
import { store as coreStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { addQueryArgs, removeQueryArgs } from '@wordpress/url';

/* Inbuilt */
import AtrcWrap from '../../atoms/wrap';
import AtrcImg from '../../atoms/img';
import AtrcUseUserAvatar from './use-user-avatar';

/* Local */
var AtrcPostAuthorImage = function AtrcPostAuthorImage(props) {
  var postType = props.postType,
    postId = props.postId,
    htmlTag = props.htmlTag,
    linkOptions = props.linkOptions,
    _props$size = props.size,
    size = _props$size === void 0 ? 24 : _props$size,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var authorId = useSelect(function (select) {
    var _getEditedEntityRecor;
    var _select = select(coreStore),
      getEditedEntityRecord = _select.getEditedEntityRecord;
    var _authorId = (_getEditedEntityRecor = getEditedEntityRecord('postType', postType, postId)) === null || _getEditedEntityRecor === void 0 ? void 0 : _getEditedEntityRecor.author;
    return _authorId;
  }, [postType, postId]);
  var avatar = AtrcUseUserAvatar({
    userId: authorId,
    postId: postId,
    postType: postType
  });
  var doubledSizedSrc = addQueryArgs(removeQueryArgs(avatar === null || avatar === void 0 ? void 0 : avatar.src, ['s']), {
    s: size * 2
  });
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, defaultProps, {
    tag: "figure"
  }), doubledSizedSrc ? /*#__PURE__*/React.createElement(AtrcImg, {
    src: doubledSizedSrc,
    alt: __('Author image', 'atrc-prefix-atrc')
  }) : __('Not author image found!', 'atrc-prefix-atrc'));
};
export default AtrcPostAuthorImage;
//# sourceMappingURL=index.js.map