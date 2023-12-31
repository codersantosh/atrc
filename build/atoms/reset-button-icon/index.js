function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*Library*/
import classnames from 'classnames';
import { BsArrowCounterclockwise } from 'react-icons/bs';

/*Inbuilt*/
import AtrcWrap from '../wrap';
import AtrcButton from '../button';
import AtrcIcon from '../icon';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
export const AtrcResetWrap = props => {
  const {
    className = '',
    variant = '',
    children,
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, defaultProps, {
    className: classnames(AtrcPrefix('rst-wrp'), 'at-flx', 'at-al-itm-st', 'at-jfy-cont-btw', 'at-gap', className, variant ? AtrcPrefix('rst-wrp') + '-' + variant : '')
  }), children);
};
const AtrcResetButtonIcon = props => {
  if ('disabled' in props && props.disabled) {
    return null;
  }
  const {
    className = '',
    variant = '',
    value = '',
    defaultValue = '',
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement(AtrcButton, _extends({
    className: classnames(AtrcPrefix('btn-rst-i'), className, variant ? AtrcPrefix('btn-rst-i') + '-' + variant : ''),
    disabled: value === defaultValue
  }, defaultProps), /*#__PURE__*/React.createElement(AtrcIcon, {
    type: "bootstrap",
    icon: BsArrowCounterclockwise
  }));
};
export default AtrcResetButtonIcon;
//# sourceMappingURL=index.js.map