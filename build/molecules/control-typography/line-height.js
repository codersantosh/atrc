/*Attributes Structure
Type Object
{
    "lnH":"",
    "smLnH":"",
    "mdLnH":"",
    "lgLnH":"",
    "xlLnH":"",
    "xxlLnH":"",
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useEffect, useState } from '@wordpress/element';

/*Inbuilt*/
import AtrcSelect from '../../atoms/select';
import AtrcText from '../../atoms/text';
import AtrcControlUnit from '../../atoms/control-unit';
import AtrcPrefix from '../../prefix-vars';
import AtrcPanelRow from '../panel-row';
import AtrcDropdownDevice from '../dropdown-device';
import AtrcAvailableDevices from '../../utils/available-devices';
import { AtrcMappingDeviceKey, AtrcMappingDeviceKeyValues } from './../../utils/object-values-with-devices';

/*Library*/
import classnames from 'classnames';

/*Local Components*/
const RenderTab = ({
  device,
  disableUnits,
  value,
  onChange
}) => {
  const [type, setType] = useState(undefined);
  const deviceValue = AtrcMappingDeviceKeyValues(value, device, 'lnH');
  useEffect(() => {
    if (!deviceValue) {
      setType('');
    } else if ('normal' === deviceValue) {
      setType('normal');
    } else if (/^\d+$/.test(deviceValue)) {
      setType('number');
    } else {
      setType('length');
    }
  }, [deviceValue]);
  if (type === undefined) {
    return null;
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcSelect, {
    wrapProps: {
      className: 'at-flx-grw-1'
    },
    value: type,
    options: [{
      label: __('Default', 'atrc-prefix-atrc'),
      value: ''
    }, {
      label: __('Normal', 'atrc-prefix-atrc'),
      value: 'normal'
    }, {
      label: __('Number', 'atrc-prefix-atrc'),
      value: 'number'
    }, {
      label: __('Length unit', 'atrc-prefix-atrc'),
      value: 'length'
    }],
    onChange: newVal => {
      switch (newVal) {
        case '':
        case 'normal':
          onChange(newVal, AtrcMappingDeviceKey(device, 'lnH'));
          break;
        case 'number':
          onChange(1, AtrcMappingDeviceKey(device, 'lnH'));
          break;
        case 'length':
          onChange('1px', AtrcMappingDeviceKey(device, 'lnH'));
          break;
      }
    }
  })), 'number' === type ? /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcText, {
    label: "",
    value: deviceValue,
    onChange: newVal => onChange(newVal, AtrcMappingDeviceKey(device, 'lnH')),
    type: "number"
  })) : null, 'length' === type ? /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlUnit, {
    label: "",
    value: deviceValue,
    onChange: newVal => onChange(newVal, AtrcMappingDeviceKey(device, 'lnH')),
    disableUnits: disableUnits
  })) : null);
};
const LineHeight = ({
  value,
  onChange,
  disableUnits = false
}) => {
  return /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcDropdownDevice, {
    className: classnames(AtrcPrefix('typ-ln-h'), 'at-flx-grw-1'),
    label: __('Line height', 'atrc-prefix-atrc'),
    tabs: AtrcAvailableDevices
  }, tab => /*#__PURE__*/React.createElement(RenderTab, {
    device: tab.name,
    value: value,
    disableUnits: disableUnits,
    onChange: onChange
  })));
};
export default LineHeight;
//# sourceMappingURL=line-height.js.map