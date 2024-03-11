var _excluded = ["label", "value", "onChange", "showOptionNone", "optionNoneValue", "variant", "className", "postType"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
    optionNoneValue = _props$optionNoneValu === void 0 ? '' : _props$optionNoneValu;
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
        label: __('Select', 'atrc-prefix-atrc')
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
    optionNoneValue: optionNoneValue
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