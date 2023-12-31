function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcItem = props => {
  const {
    className,
    tag = 'div',
    role = null,
    size = '',
    isBordered = false,
    isRounded = false,
    isSeparated = false,
    isSuccess = false,
    isFail = false,
    isNew = false,
    isBadge = false,
    visibility = '',
    priority = '',
    variant = '',
    children,
    onClick = () => {},
    ...defaultProps
  } = props;
  const ItemTag = tag;
  return /*#__PURE__*/React.createElement(ItemTag, _extends({
    role: role,
    className: classnames(className, AtrcPrefix('itm'), size ? AtrcPrefix('itm') + '-' + size : '', isBordered ? AtrcPrefix('bdr') : '', isRounded ? AtrcPrefix('rounded') : '', isSeparated ? AtrcPrefix('sep') : '', isSuccess ? AtrcPrefix('success') : '', isFail ? AtrcPrefix('fail') : '', isNew ? AtrcPrefix('new') : '', isBadge ? AtrcPrefix('badge') : '',
    // variant?'atrc-'+variant:'',
    variant ? AtrcPrefix('') + variant : ''),
    onClick: onClick
  }, defaultProps), children);
};
export default AtrcItem;
//# sourceMappingURL=index.js.map