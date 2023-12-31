"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _i18n = require("@wordpress/i18n");
var _coreData = require("@wordpress/core-data");
var _element = require("@wordpress/element");
var _blocks = require("@wordpress/blocks");
var _wordcount = require("@wordpress/wordcount");
var _wrap = _interopRequireDefault(require("../../atoms/wrap"));
var _excluded = ["postType", "postId", "htmlTag"];
/*WordPress*/
/* Inbuilt */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/* Local */
var AVERAGE_READING_RATE = 189;
var AtrcPostTimeToRead = function AtrcPostTimeToRead(props, ref) {
  var postType = props.postType,
    postId = props.postId,
    htmlTag = props.htmlTag,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var _useEntityProp = (0, _coreData.useEntityProp)('postType', postType, 'content', postId),
    _useEntityProp2 = _slicedToArray(_useEntityProp, 1),
    contentStructure = _useEntityProp2[0];
  var _useEntityBlockEditor = (0, _coreData.useEntityBlockEditor)('postType', postType, {
      id: postId
    }),
    _useEntityBlockEditor2 = _slicedToArray(_useEntityBlockEditor, 1),
    blocks = _useEntityBlockEditor2[0];
  var minutesToReadString = (0, _element.useMemo)(function () {
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
      content = (0, _blocks.__unstableSerializeAndClean)(blocks);
    } else {
      content = contentStructure;
    }

    /*
     * translators: If your word count is based on single characters (e.g. East Asian characters),
     * enter 'characters_excluding_spaces' or 'characters_including_spaces'. Otherwise, enter 'words'.
     * Do not translate into your own language.
     */
    var wordCountType = (0, _i18n._x)('words', 'Word count type. Do not translate!');
    var minutesToRead = Math.max(1, Math.round((0, _wordcount.count)(content, wordCountType) / AVERAGE_READING_RATE));
    return (0, _i18n.sprintf)( /* translators: %d is the number of minutes the post will take to read. */
    (0, _i18n._n)('%d minute', '%d minutes', minutesToRead), minutesToRead);
  }, [contentStructure, blocks]);
  return /*#__PURE__*/React.createElement(_wrap.default, _extends({}, defaultProps, {
    ref: ref,
    tag: htmlTag
  }), minutesToReadString);
};
var _default = exports.default = (0, _element.forwardRef)(AtrcPostTimeToRead);
//# sourceMappingURL=index.js.map