var _excluded = ["postType", "postId", "htmlTag", "linkOptions", "size"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*React*/
import { forwardRef } from 'react';

/*WordPress*/
import { useEntityProp, store as coreStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import { __, sprintf } from '@wordpress/i18n';

/* Atoms */
import AtrcWrap from '../../atoms/wrap';
import AtrcImg from '../../atoms/img';

/* Local */
function getMediaSourceUrlBySizeSlug(media, slug) {
  var _media$media_details;
  return (media === null || media === void 0 || (_media$media_details = media.media_details) === null || _media$media_details === void 0 || (_media$media_details = _media$media_details.sizes) === null || _media$media_details === void 0 || (_media$media_details = _media$media_details[slug]) === null || _media$media_details === void 0 ? void 0 : _media$media_details.source_url) || (media === null || media === void 0 ? void 0 : media.source_url);
}
var AtrcPostFeaturedImage = function AtrcPostFeaturedImage(props, ref) {
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
    ref: ref,
    tag: "figure"
  }), mediaUrl ? /*#__PURE__*/React.createElement(AtrcImg, {
    src: mediaUrl,
    alt: media && media.alt_text ? sprintf(
    // translators: %s: The image's alt text.
    __('Featured image: %s', 'atrc-prefix-atrc'), media.alt_text) : __('Featured image', 'atrc-prefix-atrc')
  }) : __('Not featured image found!', 'atrc-prefix-atrc'));
};
export default /*#__PURE__*/forwardRef(AtrcPostFeaturedImage);
//# sourceMappingURL=index.js.map