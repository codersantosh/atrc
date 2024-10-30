var _excluded = ["postType", "postId", "htmlTag", "displayType", "linkOptions", "format"];
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
import { dateI18n, getSettings as getDateSettings } from '@wordpress/date';

/* Atoms */
import AtrcWrap from '../../atoms/wrap';
import AtrcLink from '../../atoms/link';

/* Local */
var AtrcPostDate = function AtrcPostDate(props, ref) {
  var postType = props.postType,
    postId = props.postId,
    htmlTag = props.htmlTag,
    _props$displayType = props.displayType,
    displayType = _props$displayType === void 0 ? 'date' : _props$displayType,
    linkOptions = props.linkOptions,
    format = props.format,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var _useEntityProp = useEntityProp('postType', postType, displayType, postId),
    _useEntityProp2 = _slicedToArray(_useEntityProp, 1),
    date = _useEntityProp2[0];
  var dateSettings = getDateSettings();
  var _useEntityProp3 = useEntityProp('root', 'site', 'date_format'),
    _useEntityProp4 = _slicedToArray(_useEntityProp3, 1),
    _useEntityProp4$ = _useEntityProp4[0],
    siteFormat = _useEntityProp4$ === void 0 ? dateSettings.formats.date : _useEntityProp4$;
  var dateLabel = displayType === 'date' ? __('Post date', 'atrc-prefix-atrc') : __('Post modified date', 'atrc-prefix-atrc');
  var postDate = date ? /*#__PURE__*/React.createElement("time", {
    dateTime: dateI18n('c', date)
  }, dateI18n(format || siteFormat, date)) : dateLabel;
  if (linkOptions && linkOptions.on && date) {
    postDate = /*#__PURE__*/React.createElement(AtrcLink, {
      prefix: false,
      href: "#post-date-pseudo-link",
      onClick: function onClick(event) {
        return event.preventDefault();
      }
    }, postDate);
  }
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, defaultProps, {
    ref: ref,
    tag: htmlTag
  }), postDate);
};
export default /*#__PURE__*/forwardRef(AtrcPostDate);
//# sourceMappingURL=index.js.map