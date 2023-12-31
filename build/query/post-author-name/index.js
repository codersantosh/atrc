function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import { forwardRef } from '@wordpress/element';

/* Inbuilt */
import AtrcWrap from '../../atoms/wrap';
import AtrcLink from '../../atoms/link';

/* Local */
const AtrcPostAuthorName = (props, ref) => {
  const {
    postType,
    postId,
    htmlTag,
    linkOptions,
    ...defaultProps
  } = props;
  const {
    authorName
  } = useSelect(select => {
    const {
      getEditedEntityRecord,
      getUser
    } = select(coreStore);
    const _authorId = getEditedEntityRecord('postType', postType, postId)?.author;
    return {
      authorName: _authorId ? getUser(_authorId) : null
    };
  }, [postType, postId]);
  const displayName = authorName?.name || __('Author Name', 'atrc=prefix-atrc');
  const displayAuthor = linkOptions && linkOptions.on ? /*#__PURE__*/React.createElement(AtrcLink, {
    prefix: false,
    href: "#author-pseudo-link",
    onClick: event => event.preventDefault()
  }, displayName) : displayName;
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, defaultProps, {
    ref: ref,
    tag: htmlTag
  }), displayAuthor);
};
export default forwardRef(AtrcPostAuthorName);
//# sourceMappingURL=index.js.map