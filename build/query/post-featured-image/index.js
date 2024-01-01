var _excluded = ["postType", "postId", "htmlTag", "linkOptions", "size"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*WordPress*/
import { useEntityProp, store as coreStore } from '@wordpress/core-data';
import { __, sprintf } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';

/* Inbuilt */
import AtrcWrap from '../../atoms/wrap';
import AtrcImg from '../../atoms/img';

/* Local */
function getMediaSourceUrlBySizeSlug(media, slug) {
  var _media$media_details;
  return (media === null || media === void 0 || (_media$media_details = media.media_details) === null || _media$media_details === void 0 || (_media$media_details = _media$media_details.sizes) === null || _media$media_details === void 0 || (_media$media_details = _media$media_details[slug]) === null || _media$media_details === void 0 ? void 0 : _media$media_details.source_url) || (media === null || media === void 0 ? void 0 : media.source_url);
}
var AtrcPostFeaturedImage = function AtrcPostFeaturedImage(props) {
  var postType = props.postType,
    postId = props.postId,
    htmlTag = props.htmlTag,
    linkOptions = props.linkOptions,
    _props$size = props.size,
    size = _props$size === void 0 ? 'full' : _props$size,
    defaultProps = _objectWithoutProperties(props, _excluded);

  // eslint-disable-next-line no-unused-vars
  var _useEntityProp = useEntityProp('postType', postType, 'featured_media', postId),
    _useEntityProp2 = _slicedToArray(_useEntityProp, 2),
    featuredImage = _useEntityProp2[0],
    setFeaturedImage = _useEntityProp2[1];
  var media = useSelect(function (select) {
    var _select = select(coreStore),
      getMedia = _select.getMedia;
    if (featuredImage) {
      return getMedia(featuredImage, {
        context: 'view'
      });
    }
    return {};
  }, [featuredImage]);
  var mediaUrl = getMediaSourceUrlBySizeSlug(media, size);
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, defaultProps, {
    tag: "figure"
  }), mediaUrl ? /*#__PURE__*/React.createElement(AtrcImg, {
    src: mediaUrl,
    alt: media && media.alt_text ? sprintf(
    // translators: %s: The image's alt text.
    __('Featured image: %s', 'atrc-prefix-atrc'), media.alt_text) : __('Featured image', 'atrc-prefix-atrc')
  }) : __('Not featured image found!', 'atrc-prefix-atrc'));
};
export default AtrcPostFeaturedImage;
//# sourceMappingURL=index.js.map