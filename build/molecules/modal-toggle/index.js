function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/
import { useState } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';
import AtrcModal from '../modal';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcModalToggle = props => {
  const {
    className = '',
    variant = '',
    renderToggle = '',
    renderContent = '',
    modalProps = {},
    ...defaultProps
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  function toggle(tgl = null) {
    if (tgl !== null) {
      setIsOpen(tgl);
    } else {
      setIsOpen(!isOpen);
    }
  }
  function close() {
    setIsOpen(false);
  }
  const args = {
    isOpen,
    onToggle: toggle,
    onClose: close
  };
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    className: classnames(AtrcPrefix('ctrl-modal-icon-picker'), className, variant ? AtrcPrefix('ctrl-modal-icon-picker') + '-' + variant : '')
  }, defaultProps), /*#__PURE__*/React.createElement(AtrcWrap, {
    variant: "render-tog"
  }, renderToggle(args)), isOpen ? /*#__PURE__*/React.createElement(AtrcModal, _extends({
    variant: "icon-picker"
  }, modalProps, {
    onRequestClose: close
  }), renderContent(args)) : null);
};
export default AtrcModalToggle;
//# sourceMappingURL=index.js.map