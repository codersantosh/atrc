var _excluded = ["imageSizes"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/* WordPress */
import { withSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

/* Controls */
import AtrcControlSelect from '../control-select';

/* Local */
var ImageSizeSelect = function ImageSizeSelect(props) {
  var imageSizes = props.imageSizes,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var sizeOptions = imageSizes.map(function (size) {
    return {
      label: size.name,
      value: size.slug
    };
  });
  return /*#__PURE__*/React.createElement(AtrcControlSelect, _extends({
    label: __('Image size', 'atrc-prefix-atrc'),
    wrapProps: {
      className: 'at-flx-grw-1'
    },
    options: sizeOptions,
    defaultValue: "full"
  }, defaultProps));
};

// Fetch available image sizes using withSelect and getSettings
var AtrcControlImgSizeSelect = withSelect(function (select) {
  var _select = select('core/block-editor'),
    getSettings = _select.getSettings;

  // Get available image sizes using getSettings
  var settings = getSettings();
  var imageSizes = settings.imageSizes || {};
  return {
    imageSizes: imageSizes
  };
})(ImageSizeSelect);
export default AtrcControlImgSizeSelect;
//# sourceMappingURL=contro-img-size-select.js.map