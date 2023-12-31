function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/
import { Dropdown } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcDropdown = props => {
  const {
    className = '',
    variant = '',
    renderToggle = '',
    renderContent = '',
    renderContentStyle = {},
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement(Dropdown, _extends({
    className: classnames(AtrcPrefix('dropdown'), className, variant ? AtrcPrefix('dropdown') + '-' + variant : ''),
    renderToggle: args => /*#__PURE__*/React.createElement(AtrcWrap, {
      variant: "render-tog"
    }, renderToggle(args)),
    renderContent: args => /*#__PURE__*/React.createElement(AtrcWrap, {
      variant: "dropdown-cont",
      style: renderContentStyle
    }, renderContent(args))
  }, defaultProps));
};
export default AtrcDropdown;
//# sourceMappingURL=index.js.map