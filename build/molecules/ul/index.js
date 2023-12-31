/*Library*/
import classnames from "classnames";

/*Inbuilt*/
import AtrcPrefix from "../../prefix-vars";
const AtrcUl = ({
  className,
  variant = '',
  column = '',
  children
}) => {
  return /*#__PURE__*/React.createElement("ul", {
    className: classnames(AtrcPrefix('ul'), className, column ? AtrcPrefix('ul-col') + '-' + column : '', variant ? AtrcPrefix('ul') + '-' + variant : '')
  }, children);
};
export default AtrcUl;
//# sourceMappingURL=index.js.map