function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* WordPress */
import { withSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

/* Local */
import AtrcSelect from '../../atoms/select';
const ImageSizeSelect = props => {
  const {
    imageSizes,
    ...defaultProps
  } = props;
  const sizeOptions = imageSizes.map(size => ({
    label: size.name,
    value: size.slug
  }));
  return /*#__PURE__*/React.createElement(AtrcSelect, _extends({
    label: __('Image size', 'atrc-prefix-atrc'),
    wrapProps: {
      className: 'at-flx-grw-1'
    },
    options: sizeOptions,
    defaultValue: "full"
  }, defaultProps));
};

// Fetch available image sizes using withSelect and getSettings
const AtrcControlImgSizeSelect = withSelect(select => {
  const {
    getSettings
  } = select('core/block-editor');

  // Get available image sizes using getSettings
  const settings = getSettings();
  const imageSizes = settings.imageSizes || {};
  return {
    imageSizes
  };
})(ImageSizeSelect);
export default AtrcControlImgSizeSelect;
//# sourceMappingURL=contro-img-size-select.js.map