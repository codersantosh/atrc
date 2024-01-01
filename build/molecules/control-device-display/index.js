var _excluded = ["label", "className", "variant", "value", "onChange", "allowedDevices"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Attributes Structure
Type object{
    xs:'',
    sm:'',
    md:'',
    lg:'',
    xl:'',
    xxl:'',
}
**/

/*WordPress*/
import { __, sprintf } from '@wordpress/i18n';
import { useMemo } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';
import { isArray, isEmpty, map } from 'lodash';

/*Inbuilt*/
import AtrcToggle from '../../atoms/toggle';
import AtrcPanelTools from '../panel-tools';
import AtrcPanelRow from '../panel-row';

/*Inbuilt Utils*/
import AtrcAvailableDevices from '../../utils/available-devices';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
var getNewVal = function getNewVal(value, key) {
  if (!value) {
    return true;
  }
  return !value[key];
};
var RenderToggle = function RenderToggle(_ref) {
  var value = _ref.value,
    _onChange = _ref.onChange,
    allowedDevices = _ref.allowedDevices;
  var Devices = function Devices() {
    if (isArray(allowedDevices)) {
      return allowedDevices;
    }
    return AtrcAvailableDevices();
  };
  var dev = Devices();
  return dev.map(function (tab, iDx) {
    if (!tab.on) {
      return false;
    }
    return /*#__PURE__*/React.createElement(AtrcPanelRow, {
      className: classnames('at-m'),
      key: iDx
    }, /*#__PURE__*/React.createElement(AtrcToggle, {
      key: tab.name,
      label: sprintf(
      // translators: %s: placeholder for title
      __('Hide on %s.', 'atrc-prefix-atrc'), tab.title),
      checked: value && value[tab.name],
      onChange: function onChange() {
        return _onChange(getNewVal(value, tab.name), tab.name);
      }
    }));
  });
};
var AtrcControlDeviceDisplay = function AtrcControlDeviceDisplay(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$allowedDevices = props.allowedDevices,
    allowedDevices = _props$allowedDevices === void 0 ? true : _props$allowedDevices,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var setAttr = function setAttr(newVal, type) {
    var valueCloned = Object.assign({}, value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  var DisplayTabs = useMemo(function () {
    return [{
      name: 'display',
      title: label,
      hasValue: !isEmpty(value),
      onDeselect: function onDeselect() {
        return onChange({});
      }
    }];
  }, []);

  /* Return null since no device */
  if (!allowedDevices) {
    return null;
  }
  return /*#__PURE__*/React.createElement(AtrcPanelTools, _extends({
    className: classnames(AtrcPrefix('ctrl-device-d'), className, variant ? AtrcPrefix('ctrl-device-d') + '-' + variant : ''),
    label: label,
    resetAll: function resetAll() {
      return onChange({});
    },
    tools: DisplayTabs
  }, defaultProps), function (activeItems) {
    return map(activeItems, function (tab, iDx) {
      return /*#__PURE__*/React.createElement(RenderToggle, {
        key: iDx,
        value: value,
        onChange: setAttr,
        allowedDevices: allowedDevices
      });
    });
  });
};
export default AtrcControlDeviceDisplay;
//# sourceMappingURL=index.js.map