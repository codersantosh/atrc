import React from 'react';

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';
import { isArray, isEmpty, map } from 'lodash';

/* Controls */
import AtrcControlTextDevice from '../control-text-device';

/* Molecules */
import AtrcPanelTools from '../../molecules/panel-tools';

/* Utils */
import AtrcAvailableDevices from '../../utils/available-devices';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var AtrcControlZindexDevice = function AtrcControlZindexDevice(props) {
  var _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$label = props.label,
    label = _props$label === void 0 ? __('Z-Index', 'atrc-prefix-atrc') : _props$label,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$allowedDevices = props.allowedDevices,
    allowedDevices = _props$allowedDevices === void 0 ? true : _props$allowedDevices;
  var ZindexTabs = [{
    name: 'zindex',
    title: label,
    hasValue: !isEmpty(value),
    onDeselect: function onDeselect() {
      return onChange({});
    }
  }];

  /* Return null since no device */
  if (!allowedDevices) {
    return null;
  }
  var Devices = function Devices() {
    if (isArray(allowedDevices)) {
      return allowedDevices;
    }
    return AtrcAvailableDevices();
  };
  return /*#__PURE__*/React.createElement(AtrcPanelTools, {
    className: classnames(AtrcPrefix('ctrl-zidx-device'), className, variant ? AtrcPrefix('ctrl-zidx-device') + '-' + variant : ''),
    label: label,
    resetAll: function resetAll() {
      return onChange({});
    },
    tools: ZindexTabs
  }, function (activeItems) {
    return map(activeItems, function (tab, iDx) {
      return /*#__PURE__*/React.createElement(AtrcControlTextDevice, {
        label: __('Z-Index', 'atrc-prefix-atrc'),
        value: value,
        onChange: onChange,
        inputProps: {
          type: 'number'
        },
        allowedDevices: Devices(),
        key: iDx
      });
    });
  });
};
export default AtrcControlZindexDevice;
//# sourceMappingURL=index.js.map