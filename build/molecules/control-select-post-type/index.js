"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AtrcControlGetPostTypeOptions = AtrcControlGetPostTypeOptions;
exports.AtrcUseIsPostTypeHierarchical = AtrcUseIsPostTypeHierarchical;
exports.default = void 0;
var _element = require("@wordpress/element");
var _i18n = require("@wordpress/i18n");
var _coreData = require("@wordpress/core-data");
var _data = require("@wordpress/data");
var _classnames = _interopRequireDefault(require("classnames"));
var _select2 = _interopRequireDefault(require("../../atoms/select"));
var _notice = _interopRequireDefault(require("../notice"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
var _excluded = ["label", "value", "onChange", "showOptionNone", "optionNoneValue", "variant", "className"];
/* WordPress*/
/*Library*/
/*Inbuilt*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/* Local*/
/**
 * Hook that returns whether a specific post type is hierarchical.
 *
 * @param {string} postType The post type to check.
 * @return {boolean} Whether a specific post type is hierarchical.
 */
function AtrcUseIsPostTypeHierarchical(postType) {
  return (0, _data.useSelect)(function (select) {
    var type = select(_coreData.store).getPostType(postType);
    return (type === null || type === void 0 ? void 0 : type.viewable) && (type === null || type === void 0 ? void 0 : type.hierarchical);
  }, [postType]);
}
var excludedPostTypes = ['attachment', 'gutentor-fonts', 'wp_template', 'gutentor-icons'];
function AtrcControlGetPostTypeOptions() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _props$tax = props.tax,
    tax = _props$tax === void 0 ? '' : _props$tax,
    _props$showOptionNone = props.showOptionNone,
    showOptionNone = _props$showOptionNone === void 0 ? false : _props$showOptionNone,
    _props$optionNoneValu = props.optionNoneValue,
    optionNoneValue = _props$optionNoneValu === void 0 ? '' : _props$optionNoneValu;
  var postTypes = (0, _data.useSelect)(function (select) {
    var _getPostTypes;
    var _select = select(_coreData.store),
      getPostTypes = _select.getPostTypes;
    var filteredPostTypes = (_getPostTypes = getPostTypes({
      per_page: -1
    })) === null || _getPostTypes === void 0 ? void 0 : _getPostTypes.filter(function (_ref) {
      var viewable = _ref.viewable,
        slug = _ref.slug;
      return viewable && !excludedPostTypes.includes(slug);
    });
    return filteredPostTypes;
  }, []);
  var options = (0, _element.useMemo)(function () {
    var baseOptions = [];
    (postTypes || []).forEach(function (_ref2) {
      var labels = _ref2.labels,
        slug = _ref2.slug,
        taxonomies = _ref2.taxonomies;
      if (!tax) {
        baseOptions.push({
          label: labels.singular_name,
          value: slug
        });
      } else if (taxonomies.includes(tax)) {
        baseOptions.push({
          label: labels.singular_name,
          value: slug
        });
      }
    });
    if (showOptionNone) {
      return [{
        value: optionNoneValue,
        label: (0, _i18n.__)('Select', 'atrc-prefix-atrc')
      }].concat(baseOptions);
    }
    return baseOptions;
  }, [tax, postTypes, showOptionNone]);
  return options;
}

/*AtrcControlSelectPostType*/
function AtrcControlSelectPostType(props) {
  var label = props.label,
    value = props.value,
    onChange = props.onChange,
    _props$showOptionNone2 = props.showOptionNone,
    showOptionNone = _props$showOptionNone2 === void 0 ? true : _props$showOptionNone2,
    _props$optionNoneValu2 = props.optionNoneValue,
    optionNoneValue = _props$optionNoneValu2 === void 0 ? '' : _props$optionNoneValu2,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var options = AtrcControlGetPostTypeOptions({
    showOptionNone: showOptionNone,
    optionNoneValue: optionNoneValue
  });
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement(_notice.default, {
      autoDismiss: false,
      isDismissible: false
    }, (0, _i18n.__)('No types found!', 'atrc-prefix-atrc'));
  }
  return /*#__PURE__*/React.createElement(_select2.default, _extends({
    label: label,
    className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-select-post-type'), className, variant ? (0, _prefixVars.default)('ctrl-select-post-type') + '-' + variant : ''),
    value: value,
    onChange: onChange,
    options: options
  }, defaultProps));
}
var _default = exports.default = AtrcControlSelectPostType;
//# sourceMappingURL=index.js.map