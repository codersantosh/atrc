var _excluded = ["label", "value", "onChange", "showOptionNone", "optionNoneValue", "optionNoneLabel", "variant", "className"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/* WordPress*/
import { useMemo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { store as coreStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';

/*Library*/
import classnames from 'classnames';

/*Controls*/
import AtrcControlSelect from '../control-select';

/* Molecules */
import AtrcNotice from '../../molecules/notice';

/* Prefix */
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
    optionNoneValue = _props$optionNoneValu === void 0 ? '' : _props$optionNoneValu,
    _props$optionNoneLabe = props.optionNoneLabel,
    optionNoneLabel = _props$optionNoneLabe === void 0 ? '' : _props$optionNoneLabe;
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
        label: optionNoneLabel
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
    _props$optionNoneLabe2 = props.optionNoneLabel,
    optionNoneLabel = _props$optionNoneLabe2 === void 0 ? __('Select', 'atrc-prefix-atrc') : _props$optionNoneLabe2,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var options = AtrcControlGetPostTypeOptions({
    showOptionNone: showOptionNone,
    optionNoneValue: optionNoneValue,
    optionNoneLabel: optionNoneLabel
  });
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement(AtrcNotice, {
      autoDismiss: false,
      isDismissible: false
    }, __('No types found!', 'atrc-prefix-atrc'));
  }
  return /*#__PURE__*/React.createElement(AtrcControlSelect, _extends({
    label: label,
    className: classnames(AtrcPrefix('ctrl-select-post-type'), className, variant ? AtrcPrefix('ctrl-select-post-type') + '-' + variant : ''),
    value: value,
    onChange: onChange,
    options: options
  }, defaultProps));
}
export default AtrcControlSelectPostType;
//# sourceMappingURL=index.js.map