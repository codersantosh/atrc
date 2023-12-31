function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/
import { withInstanceId } from '@wordpress/compose';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

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
  const id = `control-advanced-columns-${instanceId}`;
  return /*#__PURE__*/React.createElement(ColumnLayout, _extends({
    id: id,
    className: classnames(AtrcPrefix('ctrl-select-device'), className, variant ? AtrcPrefix('ctrl-select-device') + '-' + variant : ''),
    label: label,
    value: value,
    onChange: onChange,
    columns: columns
  }, defaultProps));
};
export default withInstanceId(AtrcControlColumnsAdvanced);
//# sourceMappingURL=layout-control.js.map