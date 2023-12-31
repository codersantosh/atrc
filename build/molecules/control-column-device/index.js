function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*Value Structure
Type Object
{
    "xs":"",
    "sm":"",
    "md":"",
    "lg":"",
    "xl":"",
    "xxl":"",
}
* */
/*Library*/
import classnames from 'classnames';
import { map } from 'lodash';

/*Inbuilt*/
import AtrcControlSelectDevice from '../control-select-device';
import ColumnOptions from './options';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcControlColumnDevice = props => {
  const {
    value = {},
    onChange = () => {},
    variant = '',
    className = '',
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement(AtrcControlSelectDevice, _extends({
    className: classnames(AtrcPrefix('ctrl-col-device'), className, variant ? AtrcPrefix('ctrl-col-device') + '-' + variant : ''),
    options: ColumnOptions,
    onChange: newValue => {
      if (!newValue) {
        onChange(newValue);
      } else {
        const intValues = {};
        map(newValue, function (item, iDx) {
          intValues[iDx] = parseInt(item);
        });
        onChange(intValues);
      }
    },
    value: value || {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 3,
      xl: 4,
      xxl: 4
    },
    toolsPanelItemNormalProps: {
      isShownByDefault: true
    }
  }, defaultProps));
};
export default AtrcControlColumnDevice;
//# sourceMappingURL=index.js.map