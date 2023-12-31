function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*Library*/
import classnames from "classnames";

/*Inbuilt*/
import AtrcPrefix from "../../prefix-vars";

/*Local Components*/
const AtrcLi = props => {
  const {
    className = '',
    variant = '',
    hasIcon = false,
    children = '',
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement("li", _extends({
    className: classnames(AtrcPrefix('li'), className, variant ? AtrcPrefix('li') + '-' + variant : '', hasIcon ? AtrcPrefix('li-has-icon') : '')
  }, defaultProps), children);
};
export default AtrcLi;
//# sourceMappingURL=index.js.map