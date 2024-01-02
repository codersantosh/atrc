var _excluded = ["postType", "postId", "htmlTag", "excerptLength", "wordCountType"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*React*/
import { forwardRef } from 'react';
/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useEntityProp } from '@wordpress/core-data';

/* Inbuilt */

import AtrcWrap from '../../atoms/wrap';

/* Local */
var AtrcPostExcerpt = function AtrcPostExcerpt(props, ref) {
  var postType = props.postType,
    postId = props.postId,
    htmlTag = props.htmlTag,
    _props$excerptLength = props.excerptLength,
    excerptLength = _props$excerptLength === void 0 ? 55 : _props$excerptLength,
    _props$wordCountType = props.wordCountType,
    wordCountType = _props$wordCountType === void 0 ? 'w' : _props$wordCountType,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var _useEntityProp = useEntityProp('postType', postType, 'excerpt', postId),
    _useEntityProp2 = _slicedToArray(_useEntityProp, 2),
    rawExcerpt = _useEntityProp2[0],
    // eslint-disable-next-line no-unused-vars
    setExcerpt = _useEntityProp2[1];

  /**
   * The excerpt length setting needs to be applied to both
   * the raw and the rendered excerpt depending on which is being used.
   */
  var rawOrRenderedExcerpt = rawExcerpt.trim();
  var trimmedExcerpt = '';
  if (wordCountType === 'w') {
    trimmedExcerpt = rawOrRenderedExcerpt.split(' ', excerptLength).join(' ');
  } else if (wordCountType === 'ce') {
    /*
     * 1. Split the excerpt at the character limit,
     * then join the substrings back into one string.
     * 2. Count the number of spaces in the excerpt
     * by comparing the lengths of the string with and without spaces.
     * 3. Add the number to the length of the visible excerpt,
     * so that the spaces are excluded from the word count.
     */
    var excerptWithSpaces = rawOrRenderedExcerpt.split('', excerptLength).join('');
    var numberOfSpaces = excerptWithSpaces.length - excerptWithSpaces.replaceAll(' ', '').length;
    trimmedExcerpt = rawOrRenderedExcerpt.split('', excerptLength + numberOfSpaces).join('');
  } else if (wordCountType === 'ci') {
    trimmedExcerpt = rawOrRenderedExcerpt.split('', excerptLength).join('');
  }
  var isTrimmed = trimmedExcerpt !== rawOrRenderedExcerpt;
  var excerptContent = !isTrimmed ? rawOrRenderedExcerpt || __('No excerpt found', 'atrc-prefix-atrc') : trimmedExcerpt;
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, defaultProps, {
    ref: ref,
    tag: htmlTag
  }), excerptContent);
};
export default /*#__PURE__*/forwardRef(AtrcPostExcerpt);
//# sourceMappingURL=index.js.map