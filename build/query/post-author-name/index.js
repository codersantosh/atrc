var _excluded = ["postType", "postId", "htmlTag", "linkOptions"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';

/* Inbuilt */
import AtrcWrap from '../../atoms/wrap';
import AtrcLink from '../../atoms/link';

/* Local */
var AtrcPostAuthorName = function AtrcPostAuthorName(props) {
  var postType = props.postType,
    postId = props.postId,
    htmlTag = props.htmlTag,
    linkOptions = props.linkOptions,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var _useSelect = useSelect(function (select) {
      var _getEditedEntityRecor;
      var _select = select(coreStore),
        getEditedEntityRecord = _select.getEditedEntityRecord,
        getUser = _select.getUser;
      var _authorId = (_getEditedEntityRecor = getEditedEntityRecord('postType', postType, postId)) === null || _getEditedEntityRecor === void 0 ? void 0 : _getEditedEntityRecor.author;
      return {
        authorName: _authorId ? getUser(_authorId) : null
      };
    }, [postType, postId]),
    authorName = _useSelect.authorName;
  var displayName = (authorName === null || authorName === void 0 ? void 0 : authorName.name) || __('Author Name', 'atrc=prefix-atrc');
  var displayAuthor = linkOptions && linkOptions.on ? /*#__PURE__*/React.createElement(AtrcLink, {
    prefix: false,
    href: "#author-pseudo-link",
    onClick: function onClick(event) {
      return event.preventDefault();
    }
  }, displayName) : displayName;
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, defaultProps, {
    tag: htmlTag
  }), displayAuthor);
};
export default AtrcPostAuthorName;
//# sourceMappingURL=index.js.map