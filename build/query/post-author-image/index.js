function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/
import { store as coreStore } from '@wordpress/core-data';
import { forwardRef } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { addQueryArgs, removeQueryArgs } from '@wordpress/url';

/* Inbuilt */
import AtrcWrap from '../../atoms/wrap';
import AtrcImg from '../../atoms/img';
import AtrcUseUserAvatar from './use-user-avatar';

/* Local */
const AtrcPostAuthorImage = (props, ref) => {
  const {
    postType,
    postId,
    htmlTag,
    linkOptions,
    size = 24,
    ...defaultProps
  } = props;
  const authorId = useSelect(select => {
    const {
      getEditedEntityRecord
    } = select(coreStore);
    const _authorId = getEditedEntityRecord('postType', postType, postId)?.author;
    return _authorId;
  }, [postType, postId]);
  const avatar = AtrcUseUserAvatar({
    userId: authorId,
    postId,
    postType
  });
  const doubledSizedSrc = addQueryArgs(removeQueryArgs(avatar?.src, ['s']), {
    s: size * 2
  });
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, defaultProps, {
    ref: ref,
    tag: "figure"
  }), doubledSizedSrc ? /*#__PURE__*/React.createElement(AtrcImg, {
    src: doubledSizedSrc,
    alt: __('Author image', 'atrc-prefix-atrc')
  }) : __('Not author image found!', 'atrc-prefix-atrc'));
};
export default forwardRef(AtrcPostAuthorImage);
//# sourceMappingURL=index.js.map