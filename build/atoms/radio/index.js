function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*Library*/
import classnames from "classnames";

/*Inbuilt*/
import AtrcPrefix from "../../prefix-vars";

/*Local Components*/
const AtrcRadio = props => {
  const {
    name = '',
    value = '',
    id = undefined,
    variant = '',
    className = '',
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    id: id,
    className: classnames(AtrcPrefix('radio'), variant ? AtrcPrefix('radio') + '-' + variant : '')
  }, defaultProps));
};
export default AtrcRadio;
//# sourceMappingURL=index.js.map