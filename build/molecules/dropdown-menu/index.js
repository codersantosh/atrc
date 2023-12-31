function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/
import { DropdownMenu } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Component*/
const AtrcControlDropdownMenu = props => {
  const {
    variant = '',
    className = '',
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement(DropdownMenu, _extends({
    className: classnames(AtrcPrefix('ctrl-dropdown-menu'), className, variant ? AtrcPrefix('ctrl-dropdown-menu') + '-' + variant : '')
  }, defaultProps));
};
export default AtrcControlDropdownMenu;
//# sourceMappingURL=index.js.map