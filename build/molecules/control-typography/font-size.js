/*Attributes Structure
Type Object
{
    "fntSz":"",
    "smFntSz":"",
    "smFntSz":"",
    "lgFntSz":"",
    "xlFntSz":"",
    "xxlFntSz":"",
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';

/* Library */
import classNames from 'classnames';

/*Inbuilt*/
import AtrcPanelRow from '../panel-row';
import AtrcDropdownDevice from '../dropdown-device';
import AtrcControlFontSizePicker from '../control-font-size-picker';
import { FontSizeList } from './options';
import AtrcAvailableDevices from '../../utils/available-devices';
import { AtrcMappingDeviceKey, AtrcMappingDeviceKeyValues } from './../../utils/object-values-with-devices';

/*Local Components*/
const RenderTab = ({
  device,
  value,
  onChange
}) => {
  return /*#__PURE__*/React.createElement(AtrcControlFontSizePicker, {
    fontSizes: FontSizeList,
    fallbackFontSize: 18,
    value: AtrcMappingDeviceKeyValues(value, device, 'fntSz'),
    onChange: newVal => onChange(newVal, AtrcMappingDeviceKey(device, 'fntSz'))
  });
};
const FontSize = ({
  value,
  onChange
}) => {
  return /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classNames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcDropdownDevice, {
    label: __('Font size', 'atrc-prefix-atrc'),
    tabs: AtrcAvailableDevices
  }, tab => /*#__PURE__*/React.createElement(RenderTab, {
    device: tab.name,
    value: value,
    onChange: onChange
  })));
};
export default FontSize;
//# sourceMappingURL=font-size.js.map