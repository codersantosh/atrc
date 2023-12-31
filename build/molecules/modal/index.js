function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/
import { Modal } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Atrc*/
import AtrcWrap from '../../atoms/wrap';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Component*/
const AtrcModal = props => {
  const {
    children,
    className = '',
    variant = '',
    onRequestClose = () => {},
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement(Modal, _extends({
    className: classnames(AtrcPrefix('modal'), className, variant ? AtrcPrefix('modal') + '-' + variant : '')
  }, defaultProps, {
    onRequestClose: onRequestClose
  }), /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('modal-body'))
  }, children));
};
export default AtrcModal;
//# sourceMappingURL=index.js.map