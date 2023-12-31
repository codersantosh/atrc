/* WordPress*/
import { useMemo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';

/*Library*/
import { map } from 'lodash';
import classnames from 'classnames';

/*Inbuilt*/
import AtrcSelect from '../../atoms/select';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/* Local Components and Functions*/
function AtrcControlSelectImgSize(props) {
  const {
    label = __('Image size', 'atrc-prefix-atrc'),
    value,
    onChange,
    showOptionNone = true,
    optionNoneValue = 0,
    variant = '',
    className = '',
    wrapProps = {}
  } = props;
  const {
    imageSizes
  } = useSelect(select => {
    const settings = select(blockEditorStore).getSettings();
    return {
      imageSizes: settings.imageSizes
    };
  }, []);
  let imageSizesOptions = useMemo(() => {
    if (imageSizes) {
      return map(imageSizes, ({
        name,
        slug
      }) => ({
        value: slug,
        label: name
      }));
    }
    return [];
  }, [imageSizes]);
  if (showOptionNone) {
    imageSizesOptions = [{
      value: optionNoneValue,
      label: __('Select', 'atrc-prefix-atrc')
    }, ...imageSizesOptions];
  }
  return /*#__PURE__*/React.createElement(AtrcSelect, {
    label: label,
    className: classnames(AtrcPrefix('ctrl-select-img-sz'), className, variant ? AtrcPrefix('ctrl-select-img-sz') + '-' + variant : ''),
    value: value,
    options: imageSizesOptions,
    onChange: onChange,
    wrapProps: wrapProps
  });
}
export default AtrcControlSelectImgSize;
//# sourceMappingURL=index.js.map