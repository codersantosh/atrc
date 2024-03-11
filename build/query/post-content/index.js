var _excluded = ["postType", "postId", "htmlTag"];
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
import {
// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
__experimentalUseHasRecursion as useHasRecursion } from '@wordpress/block-editor';

/* Atoms */
import AtrcWrap from '../../atoms/wrap';

/* Molecules */
import AtrcNotice from './../../molecules/notice';

/* Local */
var AtrcPostContent = function AtrcPostContent(props, ref) {
  var postType = props.postType,
    postId = props.postId,
    htmlTag = props.htmlTag,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var hasAlreadyRendered = useHasRecursion(postId);
  var _useEntityProp = useEntityProp('postType', postType, 'content', postId),
    _useEntityProp2 = _slicedToArray(_useEntityProp, 3),
    content = _useEntityProp2[2];
  if (postId && postType && hasAlreadyRendered) {
    return /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, defaultProps, {
      ref: ref
    }), /*#__PURE__*/React.createElement(AtrcNotice, {
      isDismissible: false,
      autoDismiss: false
    }, __('Block cannot be rendered inside itself.', 'atrc-prefix-atrc')));
  }
  return content !== null && content !== void 0 && content.protected ? /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, defaultProps, {
    ref: ref
  }), /*#__PURE__*/React.createElement(AtrcNotice, {
    isDismissible: false,
    autoDismiss: false
  }, __('This content is password protected.', 'atrc-prefix-atrc'))) : /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, defaultProps, {
    ref: ref,
    tag: htmlTag,
    dangerouslySetInnerHTML: {
      __html: content === null || content === void 0 ? void 0 : content.rendered
    }
  }));
};
export default /*#__PURE__*/forwardRef(AtrcPostContent);
//# sourceMappingURL=index.js.map