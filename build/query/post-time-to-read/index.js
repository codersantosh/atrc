var _excluded = ["postType", "postId", "htmlTag"];
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
import { _n, _x, sprintf } from '@wordpress/i18n';
import { useEntityBlockEditor, useEntityProp } from '@wordpress/core-data';
import { useMemo } from '@wordpress/element';
import {
// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
__unstableSerializeAndClean as unstableSerializeAndClean } from '@wordpress/blocks';
import { count as wordCount } from '@wordpress/wordcount';

/* Atoms */
import AtrcWrap from '../../atoms/wrap';

/* Local */
var AVERAGE_READING_RATE = 189;
var AtrcPostTimeToRead = function AtrcPostTimeToRead(props, ref) {
  var postType = props.postType,
    postId = props.postId,
    htmlTag = props.htmlTag,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var _useEntityProp = useEntityProp('postType', postType, 'content', postId),
    _useEntityProp2 = _slicedToArray(_useEntityProp, 1),
    contentStructure = _useEntityProp2[0];
  var _useEntityBlockEditor = useEntityBlockEditor('postType', postType, {
      id: postId
    }),
    _useEntityBlockEditor2 = _slicedToArray(_useEntityBlockEditor, 1),
    blocks = _useEntityBlockEditor2[0];
  var minutesToReadString = useMemo(function () {
    // Replicates the logic found in getEditedPostContent().
    var content;
    if (contentStructure instanceof Function) {
      content = contentStructure({
        blocks: blocks
      });
    } else if (blocks) {
      // If we have parsed blocks already, they should be our source of truth.
      // Parsing applies block deprecations and legacy block conversions that
      // unparsed content will not have.
      content = unstableSerializeAndClean(blocks);
    } else {
      content = contentStructure;
    }

    /*
     * translators: If your word count is based on single characters (e.g. East Asian characters),
     * enter 'characters_excluding_spaces' or 'characters_including_spaces'. Otherwise, enter 'words'.
     * Do not translate into your own language.
     */
    var wordCountType = _x('words', 'Word count type. Do not translate!');
    var minutesToRead = Math.max(1, Math.round(wordCount(content, wordCountType) / AVERAGE_READING_RATE));
    return sprintf(/* translators: %d is the number of minutes the post will take to read. */
    _n('%d minute', '%d minutes', minutesToRead), minutesToRead);
  }, [contentStructure, blocks]);
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, defaultProps, {
    ref: ref,
    tag: htmlTag
  }), minutesToReadString);
};
export default /*#__PURE__*/forwardRef(AtrcPostTimeToRead);
//# sourceMappingURL=index.js.map