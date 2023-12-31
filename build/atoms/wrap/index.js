function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/
import { forwardRef } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcWrap = (props, ref) => {
  const {
    tag = 'div',
    className = '',
    variant = '',
    children = '',
    dangerouslySetInnerHTML = '',
    ...defaultProps
  } = props;
  const WrapTag = tag;
  if (dangerouslySetInnerHTML) {
    return /*#__PURE__*/React.createElement(WrapTag, _extends({
      ref: ref,
      className: classnames(className, variant ? AtrcPrefix() + variant : ''),
      dangerouslySetInnerHTML: dangerouslySetInnerHTML
    }, defaultProps));
  }
  return /*#__PURE__*/React.createElement(WrapTag, _extends({
    ref: ref,
    className: classnames(className, variant ? AtrcPrefix('') + variant : '')
  }, defaultProps), children);
};
export default forwardRef(AtrcWrap);
//# sourceMappingURL=index.js.map