function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcControlSelectButtonDevice from '../control-select-button-device';
import TextAlignOptions from './options';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcControlTextAlignDevice = props => {
  const {
    className = '',
    variant = '',
    value = {},
    onChange = () => {},
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement(AtrcControlSelectButtonDevice, _extends({
    className: classnames(AtrcPrefix('ctrl-txt-al-device'), className, variant ? AtrcPrefix('ctrl-txt-al-device') + '-' + variant : ''),
    options: TextAlignOptions,
    value: value,
    onChange: onChange
  }, defaultProps));
};
export default AtrcControlTextAlignDevice;
//# sourceMappingURL=index.js.map