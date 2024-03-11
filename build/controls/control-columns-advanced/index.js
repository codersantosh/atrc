var _excluded = ["label", "value", "columns", "className", "variant", "onChange", "allowedDevices"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Library*/
import classnames from 'classnames';
import { isArray, cloneDeep } from 'lodash';

/*Molecules*/
import AtrcDropdownDevice from '../../molecules/dropdown-device';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/* Utils */
import AtrcAvailableDevices from '../../utils/available-devices';
import AtrcUseInstanceId from '../../utils/use-instance-id';

/* Internal */
import ColumnLayout from './columns-layout';

/* Local */
var AtrcControlColumnsAdvanced = function AtrcControlColumnsAdvanced(props) {
  var label = props.label,
    value = props.value,
    columns = props.columns,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$allowedDevices = props.allowedDevices,
    allowedDevices = _props$allowedDevices === void 0 ? true : _props$allowedDevices,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var instanceId = AtrcUseInstanceId(AtrcControlColumnsAdvanced, 'atrc-dropdown-device');

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
  var setAttr = function setAttr(newVal, type) {
    var valueCloned = cloneDeep(value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  return /*#__PURE__*/React.createElement(AtrcDropdownDevice, _extends({
    id: instanceId,
    className: classnames(AtrcPrefix('ctrl-col-adv-lyt'), className, variant ? AtrcPrefix('ctrl-col-adv-lyt') + '-' + variant : ''),
    label: label,
    tabs: Devices()
  }, defaultProps), function (tab) {
    return /*#__PURE__*/React.createElement(ColumnLayout, {
      value: value && value[tab.name],
      onChange: function onChange(newVal) {
        return setAttr(newVal, tab.name);
      },
      columns: columns
    });
  });
};
export default AtrcControlColumnsAdvanced;
//# sourceMappingURL=index.js.map