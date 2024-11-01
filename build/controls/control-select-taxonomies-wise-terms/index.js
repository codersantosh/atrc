function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["label", "value", "onChange", "postType"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/* WordPress*/
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import { __ } from '@wordpress/i18n';

/*Atoms*/
import AtrcLabel from '../../atoms/label';

/* Molecules */
import AtrcNotice from '../../molecules/notice';

/* Controls */
import AtrcControlSelectTerm from '../control-select-term';

/* Local*/
/**
 * Hook that returns the taxonomies associated with a specific post type.
 *
 * @param {Object} props
 * @return {Object[]} An array of the associated taxonomies.
 */
export var AtrcUseTaxonomies = function AtrcUseTaxonomies() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _props$postType = props.postType,
    postType = _props$postType === void 0 ? '' : _props$postType;
  var taxonomies = useSelect(function (select) {
    var _select = select(coreStore),
      getTaxonomies = _select.getTaxonomies;
    var queryArgs = {};
    if (postType) {
      queryArgs.type = postType;
    }
    var filteredTaxonomies = getTaxonomies(queryArgs);
    return filteredTaxonomies;
  }, [postType]);
  return taxonomies;
};

/*AtrcControlSelectTaxonomyWiseTerms*/
function AtrcControlSelectTaxonomyWiseTerms(props) {
  var label = props.label,
    value = props.value,
    onChange = props.onChange,
    _props$postType2 = props.postType,
    postType = _props$postType2 === void 0 ? '' : _props$postType2,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var taxonomies = AtrcUseTaxonomies({
    postType: postType
  });
  if (!taxonomies || taxonomies.length === 0) {
    return /*#__PURE__*/React.createElement(AtrcNotice, {
      autoDismiss: false,
      isDismissible: false
    }, __('No taxonomies found!', 'atrc-prefix-atrc'));
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, label ? /*#__PURE__*/React.createElement(AtrcLabel, null, label) : null, taxonomies.map(function (taxonomy) {
    var termIds = (value === null || value === void 0 ? void 0 : value[taxonomy.slug]) || [];
    var handleChange = function handleChange(newTermIds) {
      onChange(_objectSpread(_objectSpread({}, value), {}, _defineProperty({}, taxonomy.slug, newTermIds)));
    };
    return /*#__PURE__*/React.createElement(AtrcControlSelectTerm, _extends({
      key: taxonomy.slug,
      wrapProps: {
        className: 'at-flx-grw-1'
      },
      label: taxonomy.name,
      value: termIds,
      onChange: handleChange,
      tax: taxonomy.slug
    }, defaultProps));
  }));
}
export default AtrcControlSelectTaxonomyWiseTerms;
//# sourceMappingURL=index.js.map