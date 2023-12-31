function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/
import { forwardRef } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local components*/
const AtrcSpan = (props, ref) => {
  const {
    children = '',
    isNum = false,
    variant = '',
    className = '',
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: classnames(AtrcPrefix('span'), className, isNum ? AtrcPrefix('num') : '', variant ? AtrcPrefix('span') + '-' + variant : ''),
    ref: ref
  }, defaultProps), children);
};
export default forwardRef(AtrcSpan);
//# sourceMappingURL=index.js.map