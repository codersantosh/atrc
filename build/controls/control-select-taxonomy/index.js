var _excluded = ["label", "value", "onChange", "showOptionNone", "optionNoneValue", "optionNoneLabel", "variant", "className", "postType"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/* WordPress*/
import { useMemo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

/*Controls*/
import AtrcControlSelect from '../control-select';
import { AtrcUseTaxonomies } from '../control-select-taxonomies-wise-terms';

/* Molecules */
import AtrcNotice from '../../molecules/notice';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/* Local*/
export function AtrcControlGetTaxonomyOptions() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _props$postType = props.postType,
    postType = _props$postType === void 0 ? '' : _props$postType,
    _props$showOptionNone = props.showOptionNone,
    showOptionNone = _props$showOptionNone === void 0 ? false : _props$showOptionNone,
    _props$optionNoneValu = props.optionNoneValue,
    optionNoneValue = _props$optionNoneValu === void 0 ? '' : _props$optionNoneValu,
    _props$optionNoneLabe = props.optionNoneLabel,
    optionNoneLabel = _props$optionNoneLabe === void 0 ? '' : _props$optionNoneLabe;
  var taxonomies = AtrcUseTaxonomies({
    postType: postType
  });
  var ExcludeTaxonomies = ['nav_menu'];
  var options = useMemo(function () {
    var baseOptions = [];
    (taxonomies || []).forEach(function (_ref) {
      var name = _ref.name,
        slug = _ref.slug;
      if (!ExcludeTaxonomies.includes(slug)) {
        baseOptions.push({
          label: name,
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
  }, [taxonomies]);
  return options;
}

/*AtrcControlSelectTaxonomy*/
function AtrcControlSelectTaxonomy(props) {
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
    _props$postType2 = props.postType,
    postType = _props$postType2 === void 0 ? '' : _props$postType2,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var options = AtrcControlGetTaxonomyOptions({
    postType: postType,
    showOptionNone: showOptionNone,
    optionNoneValue: optionNoneValue,
    optionNoneLabel: optionNoneLabel
  });
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement(AtrcNotice, {
      autoDismiss: false,
      isDismissible: false
    }, __('No taxonomies found!', 'atrc-prefix-atrc'));
  }
  return /*#__PURE__*/React.createElement(AtrcControlSelect, _extends({
    label: label,
    className: classnames(AtrcPrefix('ctrl-select-taxonomy'), className, variant ? AtrcPrefix('ctrl-select-taxonomy') + '-' + variant : ''),
    value: value,
    onChange: onChange,
    options: options
  }, defaultProps));
}
export default AtrcControlSelectTaxonomy;
//# sourceMappingURL=index.js.map