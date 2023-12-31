function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/
import { withInstanceId } from '@wordpress/compose';

/*Library*/
import classnames from 'classnames';
import { isArray } from 'lodash';

/*Inbuilt*/
import AtrcDropdownDevice from '../dropdown-device';
import AtrcPrefix from '../../prefix-vars';
import AtrcAvailableDevices from '../../utils/available-devices';

/* Local */
import ColumnLayout from './columns-layout';
const AtrcControlColumnsAdvanced = props => {
  const {
    label,
    instanceId,
    value,
    columns,
    className = '',
    variant = '',
    onChange = () => {},
    allowedDevices = true,
    ...defaultProps
  } = props;

  /* Return null since no device */
  if (!allowedDevices) {
    return null;
  }
  const Devices = () => {
    if (isArray(allowedDevices)) {
      return allowedDevices;
    }
    return AtrcAvailableDevices;
  };
  const setAttr = (newVal, type) => {
    const valueCloned = Object.assign({}, value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  const id = `control-advanced-columns-${instanceId}`;
  return /*#__PURE__*/React.createElement(AtrcDropdownDevice, _extends({
    id: id,
    className: classnames(AtrcPrefix('ctrl-col-adv-lyt'), className, variant ? AtrcPrefix('ctrl-col-adv-lyt') + '-' + variant : ''),
    label: label,
    tabs: Devices()
  }, defaultProps), tab => {
    return /*#__PURE__*/React.createElement(ColumnLayout, {
      value: value && value[tab.name],
      onChange: newVal => setAttr(newVal, tab.name),
      columns: columns
    });
  });
};
export default withInstanceId(AtrcControlColumnsAdvanced);
//# sourceMappingURL=layout-control.js.map