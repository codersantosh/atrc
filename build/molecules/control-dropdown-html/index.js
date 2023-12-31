function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*Attributes Structure
Type string||int

Single value

**/
/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useInstanceId } from '@wordpress/compose';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';
import AtrcIcon from '../../atoms/icon';
import AtrcResetButtonIcon from '../../atoms/reset-button-icon';
import AtrcImg from '../../atoms/img';
import AtrcRadio from '../../atoms/radio';
import AtrcDropdown from '../dropdown';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const LocalIconPreview = ({
  icon
}) => {
  if (typeof icon === 'function') {
    return icon({});
  }
  return /*#__PURE__*/React.createElement(AtrcIcon, {
    svg: icon,
    type: "svg"
  });
};
export const AtrcIconPreview = props => {
  if (props && props.icon) {
    return /*#__PURE__*/React.createElement(AtrcWrap, {
      className: classnames(AtrcPrefix('ctrl-dropdown-html-item-preview'), 'at-p', 'at-bdr')
    }, /*#__PURE__*/React.createElement(LocalIconPreview, props));
  }
  return null;
};
const RenderContent = ({
  options,
  value,
  onChange,
  instanceId
}) => /*#__PURE__*/React.createElement(AtrcWrap, {
  className: classnames(AtrcPrefix('ctrl-dropdown-html-wrp'), 'at-w')
}, options.length ? options.map(function (item, iDx) {
  const inputId = AtrcPrefix('ctrl-dropdown-html-item') + '-' + instanceId + '-' + iDx;
  return /*#__PURE__*/React.createElement(AtrcWrap, {
    key: iDx,
    className: classnames(AtrcPrefix('ctrl-dropdown-html-item'))
  }, /*#__PURE__*/React.createElement(AtrcLabel, {
    className: classnames(AtrcPrefix('ctrl-dropdown-html-item-lbl'), 'at-flx', 'at-al-itm-ctr'),
    htmlFor: inputId
  }, /*#__PURE__*/React.createElement(AtrcRadio, {
    id: inputId,
    name: AtrcPrefix('ctrl-dropdown-html-item') + '-' + instanceId,
    value: item.value,
    checked: item.value === value,
    onClick: () => onChange(item.value),
    readOnly: true
  }), item.imgSrc ? /*#__PURE__*/React.createElement(AtrcImg, {
    src: item.imgSrc,
    alt: item.label,
    style: {
      maxWidth: '50px'
    }
  }) : null, item.svg ? /*#__PURE__*/React.createElement(LocalIconPreview, {
    icon: item.svg,
    type: "svg"
  }) : null));
}) : null);
const RenderControl = props => {
  const {
    label = __('Choose from options', 'atrc-prefix-atrc'),
    value,
    onChange = () => {},
    options = [],
    variant = '',
    className = '',
    instanceId = '',
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement(AtrcDropdown, _extends({
    className: classnames(AtrcPrefix('ctrl-dropdown-html'), 'at-flx-grw-1', className, variant ? AtrcPrefix('ctrl-dropdown-html') + '-' + variant : ''),
    renderToggle: ({
      isOpen,
      onToggle
    }) => /*#__PURE__*/React.createElement(AtrcWrap, {
      onClick: onToggle
    }, label),
    renderContent: () => {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RenderContent, {
        onChange: onChange,
        options: options,
        instanceId: instanceId,
        value: value
      }));
    }
  }, defaultProps));
};
const AtrcControlDropdownHtml = props => {
  const {
    allowReset = true,
    value = '',
    onChange
  } = props;
  const instanceId = useInstanceId(AtrcControlDropdownHtml, 'atrc-ctrl-dropdown-html');
  if (allowReset) {
    return /*#__PURE__*/React.createElement(AtrcWrap, {
      className: classnames(AtrcPrefix('rst-wrp'), AtrcPrefix('lbl-rst'), 'at-flx', 'at-al-itm-st', 'at-gap', 'at-flx-grw-1')
    }, /*#__PURE__*/React.createElement(RenderControl, _extends({
      instanceId: instanceId
    }, props)), /*#__PURE__*/React.createElement(AtrcResetButtonIcon, {
      value: value,
      onClick: () => onChange('')
    }));
  }
  return /*#__PURE__*/React.createElement(RenderControl, props);
};
export default AtrcControlDropdownHtml;
//# sourceMappingURL=index.js.map