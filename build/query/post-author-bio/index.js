function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import { forwardRef } from '@wordpress/element';

/* Inbuilt */
import AtrcWrap from '../../atoms/wrap';

/* Local */
const AtrcPostAuthorBio = (props, ref) => {
  const {
    postType,
    postId,
    htmlTag,
    ...defaultProps
  } = props;
  const {
    authorDetails
  } = useSelect(select => {
    const {
      getEditedEntityRecord,
      getUser
    } = select(coreStore);
    const _authorId = getEditedEntityRecord('postType', postType, postId)?.author;
    return {
      authorDetails: _authorId ? getUser(_authorId) : null
    };
  }, [postType, postId]);
  const displayAuthorBiography = authorDetails?.description || __('Author Biography', 'atrc-prefix-atrc');
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, defaultProps, {
    ref: ref,
    tag: htmlTag,
    dangerouslySetInnerHTML: {
      __html: displayAuthorBiography
    }
  }));
};
export default forwardRef(AtrcPostAuthorBio);
//# sourceMappingURL=index.js.map