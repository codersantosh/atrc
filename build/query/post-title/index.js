function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useEntityProp } from '@wordpress/core-data';
import { forwardRef } from '@wordpress/element';

/* Inbuilt */
import AtrcWrap from '../../atoms/wrap';
import AtrcLink from '../../atoms/link';

/* Local */
const AtrcPostTitle = (props, ref) => {
  const {
    postType,
    postId,
    htmlTag,
    linkOptions,
    ...defaultProps
  } = props;

  // eslint-disable-next-line no-unused-vars
  const [rawTitle = '', setTitle, fullTitle] = useEntityProp('postType', postType, 'title', postId);
  const [link] = useEntityProp('postType', postType, 'link', postId);
  let titleElement = /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, defaultProps, {
    ref: ref,
    tag: htmlTag
  }), __('Title', 'atrc-prefix-atrc'));
  if (postType && postId) {
    if (linkOptions && linkOptions.on && postType && postId) {
      titleElement = /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, defaultProps, {
        ref: ref,
        tag: htmlTag
      }), /*#__PURE__*/React.createElement(AtrcLink, {
        prefix: false,
        href: link,
        target: linkOptions.tgt || null,
        rel: linkOptions.rel || null,
        onClick: event => event.preventDefault(),
        dangerouslySetInnerHTML: {
          __html: fullTitle?.rendered
        }
      }));
    } else {
      titleElement = /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, defaultProps, {
        ref: ref,
        tag: htmlTag,
        dangerouslySetInnerHTML: {
          __html: fullTitle?.rendered
        }
      }));
    }
  }
  return titleElement;
};
export default forwardRef(AtrcPostTitle);
//# sourceMappingURL=index.js.map