var _excluded = ["postType", "postId", "htmlTag", "linkOptions"];
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
import { __ } from '@wordpress/i18n';
import { useEntityProp } from '@wordpress/core-data';

/* Atoms */
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
  if (postType && postId) {
    if (linkOptions && linkOptions.on && postType && postId) {
      return /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, defaultProps, {
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
      return /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, defaultProps, {
        ref: ref,
        tag: htmlTag,
        dangerouslySetInnerHTML: {
          __html: fullTitle === null || fullTitle === void 0 ? void 0 : fullTitle.rendered
        }
      }));
    }
  }
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, defaultProps, {
    ref: ref,
    tag: htmlTag
  }), __('Title', 'atrc-prefix-atrc'));
};
export default /*#__PURE__*/forwardRef(AtrcPostTitle);
//# sourceMappingURL=index.js.map