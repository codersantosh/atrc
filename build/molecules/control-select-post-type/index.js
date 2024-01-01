var _excluded = ["label", "value", "onChange", "showOptionNone", "optionNoneValue", "variant", "className"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/* WordPress*/
import { useMemo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { store as coreStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcSelect from '../../atoms/select';
import AtrcNotice from '../notice';
import AtrcPrefix from '../../prefix-vars';

/* Local*/
/**
 * Hook that returns whether a specific post type is hierarchical.
 *
 * @param {string} postType The post type to check.
 * @return {boolean} Whether a specific post type is hierarchical.
 */
export function AtrcUseIsPostTypeHierarchical(postType) {
  return useSelect(function (select) {
    var type = select(coreStore).getPostType(postType);
    return (type === null || type === void 0 ? void 0 : type.viewable) && (type === null || type === void 0 ? void 0 : type.hierarchical);
  }, [postType]);
}
var excludedPostTypes = ['attachment', 'gutentor-fonts', 'wp_template', 'gutentor-icons'];
export function AtrcControlGetPostTypeOptions() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _props$tax = props.tax,
    tax = _props$tax === void 0 ? '' : _props$tax,
    _props$showOptionNone = props.showOptionNone,
    showOptionNone = _props$showOptionNone === void 0 ? false : _props$showOptionNone,
    _props$optionNoneValu = props.optionNoneValue,
    optionNoneValue = _props$optionNoneValu === void 0 ? '' : _props$optionNoneValu;
  var postTypes = useSelect(function (select) {
    var _getPostTypes;
    var _select = select(coreStore),
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
  var options = useMemo(function () {
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
        label: __('Select', 'atrc-prefix-atrc')
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
    return /*#__PURE__*/React.createElement(AtrcNotice, {
      autoDismiss: false,
      isDismissible: false
    }, __('No types found!', 'atrc-prefix-atrc'));
  }
  return /*#__PURE__*/React.createElement(AtrcSelect, _extends({
    label: label,
    className: classnames(AtrcPrefix('ctrl-select-post-type'), className, variant ? AtrcPrefix('ctrl-select-post-type') + '-' + variant : ''),
    value: value,
    onChange: onChange,
    options: options
  }, defaultProps));
}
export default AtrcControlSelectPostType;
//# sourceMappingURL=index.js.map