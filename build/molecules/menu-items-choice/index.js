function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/
import { MenuItemsChoice } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcMenuItemsChoice = props => {
  const {
    className = '',
    variant = '',
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement(MenuItemsChoice, _extends({
    className: classnames(AtrcPrefix('menu-itms-choice'), className, variant ? AtrcPrefix('menu-itms-choice') + '-' + variant : '')
  }, defaultProps));
};
export default AtrcMenuItemsChoice;
//# sourceMappingURL=index.js.map