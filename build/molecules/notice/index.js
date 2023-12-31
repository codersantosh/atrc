function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/
import { Notice } from '@wordpress/components';
import { useEffect } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

//*Local Components*/
const AtrcNotice = props => {
  const {
    children,
    className = '',
    variant = '',
    place = '',
    isDismissible = true,
    autoDismiss = 5000,
    noticeNumber = 1,
    onRemove = () => {},
    onAutoRemove = () => {},
    ...defaultProps
  } = props;
  useEffect(() => {
    if (autoDismiss) {
      const timer = setTimeout(() => onAutoRemove(), autoDismiss);
      return () => clearTimeout(timer);
    }
  });
  return /*#__PURE__*/React.createElement(Notice, _extends({
    className: classnames(AtrcPrefix('notice'), 'at-m', 'at-p', 'at-box-sdw', className, variant ? AtrcPrefix('notice') + '-' + variant : '', place ? AtrcPrefix('place') + '-' + variant : '', noticeNumber ? AtrcPrefix('notice-num') + '-' + noticeNumber : ''),
    isDismissible: isDismissible,
    onRemove: onRemove
  }, defaultProps), children);
};
export default AtrcNotice;
//# sourceMappingURL=index.js.map