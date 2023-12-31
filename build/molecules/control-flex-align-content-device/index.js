function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcControlSelectButtonDevice from '../control-select-button-device';
import JustifyContentOptions from './options';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcControlFlexAlignContentDevice = props => {
  const {
    className = '',
    variant = '',
    value = {},
    onChange = () => {},
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement(AtrcControlSelectButtonDevice, _extends({
    className: classnames(AtrcPrefix('ctrl-flx-al-cont-device'), className, variant ? AtrcPrefix('ctrl-flx-al-cont-device') + '-' + variant : ''),
    options: JustifyContentOptions,
    value: value,
    onChange: onChange
  }, defaultProps));
};
export default AtrcControlFlexAlignContentDevice;
//# sourceMappingURL=index.js.map