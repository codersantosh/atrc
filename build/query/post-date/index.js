var _excluded = ["postType", "postId", "htmlTag", "displayType", "linkOptions", "format"];
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
import { __ } from '@wordpress/i18n';
import { useEntityProp } from '@wordpress/core-data';
import { dateI18n, getSettings as getDateSettings } from '@wordpress/date';

/* Inbuilt */
import AtrcWrap from '../../atoms/wrap';
import AtrcLink from '../../atoms/link';

/* Local */
var AtrcPostDate = function AtrcPostDate(props) {
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
    tag: htmlTag
  }), postDate);
};
export default AtrcPostDate;
//# sourceMappingURL=index.js.map