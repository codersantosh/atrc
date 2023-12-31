function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/
import { useState, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';
import AtrcButton from '../../atoms/button';
import AtrcIcon from '../../atoms/icon';
import AtrcWord from '../../atoms/word';
import AtrcModal from '../modal';
import AtrcButtonGroup from '../button-group';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';
import { BsExclamationCircle } from 'react-icons/bs';

/*Local Components*/
const AtrcModalConfirm = props => {
  const {
    className = '',
    variant = '',
    onCancel = '',
    isOpen = false,
    onConfirm = '',
    confirm = __('Delete', 'atrc-prefix-atrc'),
    title = __('Are you sure?', 'atrc-prefix-atrc'),
    help = __('This action cannot be undone!', 'atrc-prefix-atrc'),
    ...defaultProps
  } = props;
  const [isShow, setIsShow] = useState(isOpen);
  function close() {
    onCancel();
  }
  useEffect(() => {
    setIsShow(isOpen);
  }, [isOpen]);
  if (isShow) {
    return /*#__PURE__*/React.createElement(AtrcModal, _extends({}, defaultProps, {
      onRequestClose: close,
      className: classnames(AtrcPrefix('modal-confirm'), className || '', variant ? AtrcPrefix('modal-confirm') + '-' + variant : '')
    }), /*#__PURE__*/React.createElement(AtrcWrap, {
      className: classnames(AtrcPrefix('modal-confirm-body'), 'at-p')
    }, /*#__PURE__*/React.createElement(AtrcIcon, {
      className: classnames(AtrcPrefix('modal-confirm-icon'), 'at-m', 'at-cl'),
      type: "bootstrap",
      icon: BsExclamationCircle
    }), /*#__PURE__*/React.createElement(AtrcWord, {
      tag: "h4",
      className: classnames('at-m')
    }, title), /*#__PURE__*/React.createElement(AtrcWord, {
      tag: "p",
      className: classnames(AtrcPrefix('mt-0'))
    }, help)), /*#__PURE__*/React.createElement(AtrcWrap, {
      className: classnames(AtrcPrefix('modal-confirm-footer'), 'at-p')
    }, /*#__PURE__*/React.createElement(AtrcButtonGroup, null, /*#__PURE__*/React.createElement(AtrcButton, {
      onClick: () => close(),
      className: classnames('at-p', 'at-flx-grw-1')
    }, __('Cancel', 'atrc-prefix-atrc')), /*#__PURE__*/React.createElement(AtrcButton, {
      onClick: () => onConfirm(),
      variant: "delete",
      className: classnames('at-p', 'at-flx-grw-1')
    }, confirm))));
  }
  return null;
};
export default AtrcModalConfirm;
//# sourceMappingURL=index.js.map