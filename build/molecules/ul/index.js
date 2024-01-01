/*Library*/
import classnames from "classnames";

/*Inbuilt*/
import AtrcPrefix from "../../prefix-vars";
var AtrcUl = function AtrcUl(_ref) {
  var className = _ref.className,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? '' : _ref$variant,
    _ref$column = _ref.column,
    column = _ref$column === void 0 ? '' : _ref$column,
    children = _ref.children;
  return /*#__PURE__*/React.createElement("ul", {
    className: classnames(AtrcPrefix('ul'), className, column ? AtrcPrefix('ul-col') + '-' + column : '', variant ? AtrcPrefix('ul') + '-' + variant : '')
  }, children);
};
export default AtrcUl;
//# sourceMappingURL=index.js.map