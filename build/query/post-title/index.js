var _excluded = ["postType", "postId", "htmlTag", "linkOptions"];
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
import AtrcLink from '../../atoms/link';

/* Local */
var AtrcPostTitle = function AtrcPostTitle(props, ref) {
  var postType = props.postType,
    postId = props.postId,
    htmlTag = props.htmlTag,
    linkOptions = props.linkOptions,
    defaultProps = _objectWithoutProperties(props, _excluded);

  // eslint-disable-next-line no-unused-vars
  var _useEntityProp = useEntityProp('postType', postType, 'title', postId),
    _useEntityProp2 = _slicedToArray(_useEntityProp, 3),
    _useEntityProp2$ = _useEntityProp2[0],
    rawTitle = _useEntityProp2$ === void 0 ? '' : _useEntityProp2$,
    setTitle = _useEntityProp2[1],
    fullTitle = _useEntityProp2[2];
  var _useEntityProp3 = useEntityProp('postType', postType, 'link', postId),
    _useEntityProp4 = _slicedToArray(_useEntityProp3, 1),
    link = _useEntityProp4[0];
  var titleElement = /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, defaultProps, {
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
        onClick: function onClick(event) {
          return event.preventDefault();
        },
        dangerouslySetInnerHTML: {
          __html: fullTitle === null || fullTitle === void 0 ? void 0 : fullTitle.rendered
        }
      }));
    } else {
      titleElement = /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, defaultProps, {
        ref: ref,
        tag: htmlTag,
        dangerouslySetInnerHTML: {
          __html: fullTitle === null || fullTitle === void 0 ? void 0 : fullTitle.rendered
        }
      }));
    }
  }
  return titleElement;
};
export default /*#__PURE__*/forwardRef(AtrcPostTitle);
//# sourceMappingURL=index.js.map