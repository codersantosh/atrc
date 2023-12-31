function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*Library*/
import classnames from "classnames";

/*Inbuilt*/
import AtrcPrefix from "../../prefix-vars";

/*Local Component*/
const AtrcFieldset = props => {
  const {
    className = '',
    variant = '',
    children = '',
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement("fieldset", _extends({
    className: classnames(AtrcPrefix('fieldset'), className, variant ? AtrcPrefix('fieldset') + '-' + variant : '')
  }, defaultProps), children);
};
export default AtrcFieldset;
//# sourceMappingURL=index.js.map