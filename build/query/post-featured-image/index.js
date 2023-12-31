function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/
import { useEntityProp, store as coreStore } from '@wordpress/core-data';
import { forwardRef } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';

/* Inbuilt */
import AtrcWrap from '../../atoms/wrap';
import AtrcImg from '../../atoms/img';

/* Local */
function getMediaSourceUrlBySizeSlug(media, slug) {
  return media?.media_details?.sizes?.[slug]?.source_url || media?.source_url;
}
const AtrcPostFeaturedImage = (props, ref) => {
  const {
    postType,
    postId,
    htmlTag,
    linkOptions,
    size = 'full',
    ...defaultProps
  } = props;

  // eslint-disable-next-line no-unused-vars
  const [featuredImage, setFeaturedImage] = useEntityProp('postType', postType, 'featured_media', postId);
  const media = useSelect(select => {
    const {
      getMedia
    } = select(coreStore);
    if (featuredImage) {
      return getMedia(featuredImage, {
        context: 'view'
      });
    }
    return {};
  }, [featuredImage]);
  const mediaUrl = getMediaSourceUrlBySizeSlug(media, size);
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, defaultProps, {
    ref: ref,
    tag: "figure"
  }), mediaUrl ? /*#__PURE__*/React.createElement(AtrcImg, {
    src: mediaUrl,
    alt: media && media.alt_text ? sprintf(
    // translators: %s: The image's alt text.
    __('Featured image: %s', 'atrc-prefix-atrc'), media.alt_text) : __('Featured image', 'atrc-prefix-atrc')
  }) : __('Not featured image found!', 'atrc-prefix-atrc'));
};
export default forwardRef(AtrcPostFeaturedImage);
//# sourceMappingURL=index.js.map