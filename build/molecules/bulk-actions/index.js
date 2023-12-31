function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*Library*/
import classnames from "classnames";

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';

/*Inbuilt*/
import AtrcPrefix from "../../prefix-vars";

/*Local Components*/
const AtrcBulkActions = props => {
  const {
    className = '',
    children = '',
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    className: classnames(AtrcPrefix('bulk-actions'), className)
  }, defaultProps), children);
};
export default AtrcBulkActions;
//# sourceMappingURL=index.js.map