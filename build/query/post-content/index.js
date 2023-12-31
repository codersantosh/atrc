function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useEntityProp } from '@wordpress/core-data';
import { forwardRef } from '@wordpress/element';
import {
// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
__experimentalUseHasRecursion as useHasRecursion } from '@wordpress/block-editor';

/* Inbuilt */
import AtrcWrap from '../../atoms/wrap';
import AtrcNotice from './../../molecules/notice';

/* Local */
const AtrcPostContent = (props, ref) => {
  const {
    postType,
    postId,
    htmlTag,
    ...defaultProps
  } = props;
  const hasAlreadyRendered = useHasRecursion(postId);
  const [,, content] = useEntityProp('postType', postType, 'content', postId);
  if (postId && postType && hasAlreadyRendered) {
    return /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, defaultProps, {
      ref: ref
    }), /*#__PURE__*/React.createElement(AtrcNotice, {
      isDismissible: false,
      autoDismiss: false
    }, __('Block cannot be rendered inside itself.', 'atrc-prefix-atrc')));
  }
  return content?.protected ? /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, defaultProps, {
    ref: ref
  }), /*#__PURE__*/React.createElement(AtrcNotice, {
    isDismissible: false,
    autoDismiss: false
  }, __('This content is password protected.', 'atrc-prefix-atrc'))) : /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, defaultProps, {
    ref: ref,
    tag: htmlTag,
    dangerouslySetInnerHTML: {
      __html: content?.rendered
    }
  }));
};
export default forwardRef(AtrcPostContent);
//# sourceMappingURL=index.js.map