/*Library*/
import { forEach, isEmpty } from 'lodash';

/*Inbuilt*/
import AtrcAvailableTabs from './available-tabs';
import AtrcAvailableDevices from './available-devices';
import { AtrcGetTabValues, AtrcHasTabValues } from './object-values-with-allowed-keys-and-tabs';
import { AtrcUcFirst } from './string';

/*Local*/
export function AtrcHasValueKey(value, key) {
  if (!value || isEmpty(value)) {
    return false;
  }
  return !!value[key];
}
export function AtrcResetValueKey(value, key) {
  const valueCloned = Object.assign({}, value);
  delete valueCloned[key];
  return valueCloned;
}
export const AtrcGetDeviceValues = (value, key) => {
  if (isEmpty(value)) {
    return null;
  }
  const newValue = {};
  AtrcAvailableDevices.forEach(deviceProps => {
    const device = deviceProps.name;
    let deviceKey;
    if (device === 'xs') {
      deviceKey = key;
    } else {
      deviceKey = device + AtrcUcFirst(key);
    }
    if (value[deviceKey]) {
      newValue[device] = value[deviceKey];
    }
  });
  return newValue;
};
export const AtrcHasDeviceValues = (value, key) => {
  if (isEmpty(value)) {
    return false;
  }
  for (let i = 0; i < AtrcAvailableDevices.length; i++) {
    const device = AtrcAvailableDevices[i].name;
    let deviceKey;
    if (device === 'xs') {
      deviceKey = key;
    } else {
      deviceKey = device + AtrcUcFirst(key);
    }
    if (value[deviceKey]) {
      return true;
    }
  }
  return false;
};
export const AtrcResetDevices = (value, key) => {
  if (!value) {
    return value;
  }
  const newValue = {
    ...value
  };
  AtrcAvailableDevices.forEach(deviceProps => {
    const device = deviceProps.name;
    let deviceKey;
    if (device === 'xs') {
      deviceKey = key;
    } else {
      deviceKey = device + AtrcUcFirst(key);
    }
    if (newValue[deviceKey]) {
      delete newValue[deviceKey];
    }
  });
  return newValue;
};
export const AtrcDeviceCss = (value, key, cssProp) => {
  if (!value) {
    return value;
  }
  const innerOutput = {};
  AtrcAvailableDevices.forEach(deviceProps => {
    if (deviceProps.on) {
      const device = deviceProps.name;
      let deviceKey;
      if (device === 'xs') {
        deviceKey = key || device;
      } else {
        deviceKey = key ? device + AtrcUcFirst(key) : device;
      }
      if (value[deviceKey]) {
        if (!innerOutput[device]) {
          innerOutput[device] = '';
        }
        innerOutput[device] += `${cssProp}      : ${value[deviceKey]};`;
      }
    }
  });
  return innerOutput;
};
export const AtrcDeviceAllowedKeys = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxl'];
export const AtrcDeviceTabCss = (value, key, cssProp) => {
  if (!value) {
    return value;
  }
  const innerOutput = {};
  AtrcAvailableTabs.forEach(tab => {
    if (AtrcAvailableTabs.includes(tab)) {
      if (AtrcHasTabValues(tab, value, AtrcDeviceAllowedKeys)) {
        const typVal = AtrcGetTabValues(value, tab, AtrcDeviceAllowedKeys);
        const typCss = AtrcDeviceCss(typVal, key, cssProp);
        let tabKey;
        if (!isEmpty(typCss)) {
          forEach(typCss, (item, itemKey) => {
            if (tab === 'normal') {
              tabKey = itemKey;
            } else {
              tabKey = itemKey + tab;
            }
            if (!innerOutput[tabKey]) {
              innerOutput[tabKey] = '';
            }
            innerOutput[tabKey] += item;
          });
        }
      }
    }
  });
  return innerOutput;
};
export function AtrcMappingDeviceValues(value, device) {
  return value && value[device] ? value[device] : '';
}
export function AtrcMappingDeviceKeyValues(value, device, key) {
  if (!value || isEmpty(value)) {
    return null;
  }
  if ('xs' === device) {
    return value[key];
  }
  return value[device + AtrcUcFirst(key)];
}
export function AtrcMappingDeviceKey(device, key) {
  if ('xs' === device) {
    return key;
  }
  return device + AtrcUcFirst(key);
}
//# sourceMappingURL=object-values-with-devices.js.map