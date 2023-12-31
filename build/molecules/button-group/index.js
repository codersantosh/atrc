function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/
import { ButtonGroup } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcButtonGroup = props => {
  const {
    className = '',
    variant = '',
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement(ButtonGroup, _extends({
    className: classnames(AtrcPrefix('btn-grp'), 'at-flx', 'at-al-itm-ctr', 'at-flx-wrp', 'at-gap', className, variant ? AtrcPrefix('btn-grp') + '-' + variant : '')
  }, defaultProps));
};
export default AtrcButtonGroup;
//# sourceMappingURL=index.js.map