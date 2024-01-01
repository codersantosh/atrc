/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPanelRow from '../panel-row';
import AtrcControlUnitDevice from '../control-unit-device';
import { AtrcGetDeviceValues } from '../../utils/object-values-with-devices';

/*Local Components*/
var LetterSpacing = function LetterSpacing(_ref) {
  var value = _ref.value,
    onChange = _ref.onChange,
    _ref$disableUnits = _ref.disableUnits,
    disableUnits = _ref$disableUnits === void 0 ? false : _ref$disableUnits;
  return /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlUnitDevice, {
    label: __('Letter spacing', 'atrc-prefix-atrc'),
    value: AtrcGetDeviceValues(value, 'ltrSp'),
    disableUnits: disableUnits,
    onChange: onChange
  }));
};
export default LetterSpacing;
//# sourceMappingURL=letter-spacing.js.map