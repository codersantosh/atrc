import React from 'react';

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classNames from 'classnames';

/* Controls */
import AtrcControlUnitDevice from '../control-unit-device';

/* Molecules */

/* Utils */
import { AtrcGetDeviceValues } from '../../utils/object-values-with-devices';

/*Local*/
var LetterSpacing = function LetterSpacing(_ref) {
  var value = _ref.value,
    onChange = _ref.onChange,
    _ref$disableUnits = _ref.disableUnits,
    disableUnits = _ref$disableUnits === void 0 ? false : _ref$disableUnits;
  return /*#__PURE__*/React.createElement(AtrcControlUnitDevice, {
    className: classNames('at-flx-grw-1'),
    label: __('Letter spacing', 'atrc-prefix-atrc'),
    value: AtrcGetDeviceValues(value, 'ltrSp'),
    disableUnits: disableUnits,
    onChange: onChange
  });
};
export default LetterSpacing;
//# sourceMappingURL=letter-spacing.js.map