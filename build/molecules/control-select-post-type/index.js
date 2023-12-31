function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
  return useSelect(select => {
    const type = select(coreStore).getPostType(postType);
    return type?.viewable && type?.hierarchical;
  }, [postType]);
}
const excludedPostTypes = ['attachment', 'gutentor-fonts', 'wp_template', 'gutentor-icons'];
export function AtrcControlGetPostTypeOptions(props = {}) {
  const {
    tax = '',
    showOptionNone = false,
    optionNoneValue = ''
  } = props;
  const postTypes = useSelect(select => {
    const {
      getPostTypes
    } = select(coreStore);
    const filteredPostTypes = getPostTypes({
      per_page: -1
    })?.filter(({
      viewable,
      slug
    }) => viewable && !excludedPostTypes.includes(slug));
    return filteredPostTypes;
  }, []);
  const options = useMemo(() => {
    const baseOptions = [];
    (postTypes || []).forEach(({
      labels,
      slug,
      taxonomies
    }) => {
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
      }, ...baseOptions];
    }
    return baseOptions;
  }, [tax, postTypes, showOptionNone]);
  return options;
}

/*AtrcControlSelectPostType*/
function AtrcControlSelectPostType(props) {
  const {
    label,
    value,
    onChange,
    showOptionNone = true,
    optionNoneValue = '',
    variant = '',
    className = '',
    ...defaultProps
  } = props;
  const options = AtrcControlGetPostTypeOptions({
    showOptionNone,
    optionNoneValue
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