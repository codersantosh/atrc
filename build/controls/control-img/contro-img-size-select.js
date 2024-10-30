var _excluded = ["imageSizes"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

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