function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcControlSelectButtonDevice from '../control-select-button-device';
import AlignItemsOptions from './options';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcControlFlexAlignItemsDevice = props => {
  const {
    className = '',
    variant = '',
    value = {},
    onChange = () => {},
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement(AtrcControlSelectButtonDevice, _extends({
    className: classnames(AtrcPrefix('ctrl-flx-al-itms-device'), className, variant ? AtrcPrefix('ctrl-flx-al-itms-device') + '-' + variant : ''),
    options: AlignItemsOptions,
    value: value,
    onChange: onChange
  }, defaultProps));
};
export default AtrcControlFlexAlignItemsDevice;
//# sourceMappingURL=index.js.map