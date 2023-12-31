function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* WordPress*/
import { useMemo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcSelect from '../../atoms/select';
import AtrcNotice from '../notice';
import { AtrcUseTaxonomies } from '../control-select-taxonomies-wise-terms';
import AtrcPrefix from '../../prefix-vars';

/* Local*/
export function AtrcControlGetTaxonomyOptions(props = {}) {
  const {
    postType = '',
    showOptionNone = false,
    optionNoneValue = ''
  } = props;
  const taxonomies = AtrcUseTaxonomies({
    postType
  });
  const ExcludeTaxonomies = ['nav_menu'];
  const options = useMemo(() => {
    const baseOptions = [];
    (taxonomies || []).forEach(({
      name,
      slug
    }) => {
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
      }, ...baseOptions];
    }
    return baseOptions;
  }, [taxonomies]);
  return options;
}

/*AtrcControlSelectTaxonomy*/
function AtrcControlSelectTaxonomy(props) {
  const {
    label,
    value,
    onChange,
    showOptionNone = true,
    optionNoneValue = '',
    variant = '',
    className = '',
    postType = '',
    ...defaultProps
  } = props;
  const options = AtrcControlGetTaxonomyOptions({
    postType,
    showOptionNone,
    optionNoneValue
  });
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement(AtrcNotice, {
      autoDismiss: false,
      isDismissible: false
    }, __('No taxonomies found!', 'atrc-prefix-atrc'));
  }
  return /*#__PURE__*/React.createElement(AtrcSelect, _extends({
    label: label,
    className: classnames(AtrcPrefix('ctrl-select-taxonomy'), className, variant ? AtrcPrefix('ctrl-select-taxonomy') + '-' + variant : ''),
    value: value,
    onChange: onChange,
    options: options
  }, defaultProps));
}
export default AtrcControlSelectTaxonomy;
//# sourceMappingURL=index.js.map