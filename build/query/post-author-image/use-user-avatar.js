/* WordPress */
import { store as blockEditorStore } from '@wordpress/block-editor';
import { store as coreStore } from '@wordpress/core-data';
import { __, sprintf } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';

/* Local */
function getAvatarSizes(sizes) {
  var minSize = sizes ? sizes[0] : 24;
  var maxSize = sizes ? sizes[sizes.length - 1] : 96;
  var maxSizeBuffer = Math.floor(maxSize * 2.5);
  return {
    minSize: minSize,
    maxSize: maxSizeBuffer
  };
}
function useDefaultAvatar() {
  var _useSelect = useSelect(function (select) {
      var _select = select(blockEditorStore),
        getSettings = _select.getSettings;
      var _getSettings = getSettings(),
        __experimentalDiscussionSettings = _getSettings.__experimentalDiscussionSettings;
      return __experimentalDiscussionSettings;
    }),
    defaultAvatarUrl = _useSelect.avatarURL;
  return defaultAvatarUrl;
}
export default function AtrcUseUserAvatar(_ref) {
  var userId = _ref.userId,
    postId = _ref.postId,
    postType = _ref.postType;
  var _useSelect2 = useSelect(function (select) {
      var _getEditedEntityRecor;
      var _select2 = select(coreStore),
        getEditedEntityRecord = _select2.getEditedEntityRecord,
        getUser = _select2.getUser;
      if (userId) {
        return {
          authorDetails: getUser(userId)
        };
      }
      var _authorId = (_getEditedEntityRecor = getEditedEntityRecord('postType', postType, postId)) === null || _getEditedEntityRecor === void 0 ? void 0 : _getEditedEntityRecor.author;
      return {
        authorDetails: _authorId ? getUser(_authorId) : null
      };
    }, [postType, postId, userId]),
    authorDetails = _useSelect2.authorDetails;
  var avatarUrls = authorDetails !== null && authorDetails !== void 0 && authorDetails.avatar_urls ? Object.values(authorDetails.avatar_urls) : null;
  var sizes = authorDetails !== null && authorDetails !== void 0 && authorDetails.avatar_urls ? Object.keys(authorDetails.avatar_urls) : null;
  var _getAvatarSizes = getAvatarSizes(sizes),
    minSize = _getAvatarSizes.minSize,
    maxSize = _getAvatarSizes.maxSize;
  var defaultAvatar = useDefaultAvatar();
  return {
    src: avatarUrls ? avatarUrls[avatarUrls.length - 1] : defaultAvatar,
    minSize: minSize,
    maxSize: maxSize,
    alt: authorDetails ?
    // translators: %s is the Author name.
    sprintf(__('%s Avatar'), authorDetails === null || authorDetails === void 0 ? void 0 : authorDetails.name) : __('Default Avatar')
  };
}
//# sourceMappingURL=use-user-avatar.js.map