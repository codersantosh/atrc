"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AtrcUseTaxonomies = void 0;
var _data = require("@wordpress/data");
var _coreData = require("@wordpress/core-data");
var _controlSelectTerm = _interopRequireDefault(require("./../control-select-term"));
var _label = _interopRequireDefault(require("../../atoms/label"));
var _excluded = ["label", "value", "onChange", "postType"];
/* WordPress*/
/*Inbuilt*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/* Local*/
/**
 * Hook that returns the taxonomies associated with a specific post type.
 *
 * @param {Object} props
 * @return {Object[]} An array of the associated taxonomies.
 */
var AtrcUseTaxonomies = exports.AtrcUseTaxonomies = function AtrcUseTaxonomies() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _props$postType = props.postType,
    postType = _props$postType === void 0 ? '' : _props$postType;
  var taxonomies = (0, _data.useSelect)(function (select) {
    var _select = select(_coreData.store),
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
    return null;
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, label ? /*#__PURE__*/React.createElement(_label.default, null, label) : null, taxonomies.map(function (taxonomy) {
    var termIds = (value === null || value === void 0 ? void 0 : value[taxonomy.slug]) || [];
    var handleChange = function handleChange(newTermIds) {
      onChange(_objectSpread(_objectSpread({}, value), {}, _defineProperty({}, taxonomy.slug, newTermIds)));
    };
    return /*#__PURE__*/React.createElement(_controlSelectTerm.default, _extends({
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
var _default = exports.default = AtrcControlSelectTaxonomyWiseTerms;
//# sourceMappingURL=index.js.map