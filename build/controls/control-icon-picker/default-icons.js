import React from 'react';

/* WordPress */
import { __ } from '@wordpress/i18n';
import { renderToString } from '@wordpress/element';
import * as WpIconsAllF from '@wordpress/icons';

/* Library */
import { map } from 'lodash';
import * as ReactIconsAllFA from 'react-icons/fa';

/* Atoms */
import { AtrcIconWp } from '../../atoms/icon';

/* Local */
var AtrcControlIconPickerDefaultIcons = function AtrcControlIconPickerDefaultIcons() {
  var iconOptions = [];
  var wpOpt = map(WpIconsAllF, function (icon, key) {
    if ('Icon' !== key) {
      return {
        id: key,
        svg: renderToString( /*#__PURE__*/React.createElement(AtrcIconWp, {
          icon: WpIconsAllF[key]
        }))
      };
    }
  }).filter(Boolean);
  iconOptions.push({
    label: __('WordPress icons', 'atrc-prefix-atrc'),
    id: 'wp',
    icons: wpOpt
  });
  var faOpt = map(ReactIconsAllFA, function (icon, key) {
    return {
      id: key,
      svg: renderToString(icon({
        className: 'at-svg'
      }))
    };
  });
  iconOptions.push({
    label: __('Font Awesome icons', 'atrc-prefix-atrc'),
    id: 'fa',
    icons: faOpt
  });
  return iconOptions;
};
export default AtrcControlIconPickerDefaultIcons;
//# sourceMappingURL=default-icons.js.map