function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/
import { __ } from '@wordpress/i18n';
import { Placeholder } from '@wordpress/components';

/* Library */
import classNames from 'classnames';

/*Inbuilt*/
import AtrcButton from '../../atoms/button';
import AtrcIcon from '../../atoms/icon';
import AtrcTooltip from '../tooltip';
import { FiveColumnsOptions, FourColumnsOptions, OneColumnOptions, SixColumnsOptions, ThreeColumnsOptions, TwoColumnsOptions } from './options';
import AtrcPrefix from '../../prefix-vars';

/* Local */
const AtrcControlColumnsAdvancedLayoutPlaceholder = props => {
  const {
    label = __('Select columns', 'atrc-prefix-atrc'),
    instanceId,
    value,
    columns,
    className = '',
    variant = '',
    onChange = () => {},
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement(Placeholder, _extends({
    icon: "screenoptions",
    className: classNames(AtrcPrefix('ctrl-adv-col-plhldr'), className, variant ? AtrcPrefix('ctrl-adv-col-plhldr') + '-' + variant : ''),
    label: label
  }, defaultProps), OneColumnOptions.map((item, key) => /*#__PURE__*/React.createElement(AtrcTooltip, {
    text: item.label,
    key: key
  }, /*#__PURE__*/React.createElement(AtrcButton, {
    onClick: () => onChange(1, item.value)
  }, /*#__PURE__*/React.createElement(AtrcIcon, {
    icon: item.icon,
    type: item.iconType || 'wp'
  })))), TwoColumnsOptions.map((item, key) => /*#__PURE__*/React.createElement(AtrcTooltip, {
    text: item.label,
    key: key
  }, /*#__PURE__*/React.createElement(AtrcButton, {
    onClick: () => onChange(2, item.value)
  }, /*#__PURE__*/React.createElement(AtrcIcon, {
    icon: item.icon,
    type: item.iconType || 'wp'
  })))), ThreeColumnsOptions.map((item, key) => /*#__PURE__*/React.createElement(AtrcTooltip, {
    text: item.label,
    key: key
  }, /*#__PURE__*/React.createElement(AtrcButton, {
    onClick: () => onChange(3, item.value)
  }, /*#__PURE__*/React.createElement(AtrcIcon, {
    icon: item.icon,
    type: item.iconType || 'wp'
  })))), FourColumnsOptions.map((item, key) => /*#__PURE__*/React.createElement(AtrcTooltip, {
    text: item.label,
    key: key
  }, /*#__PURE__*/React.createElement(AtrcButton, {
    onClick: () => onChange(4, item.value)
  }, /*#__PURE__*/React.createElement(AtrcIcon, {
    icon: item.icon,
    type: item.iconType || 'wp'
  })))), FiveColumnsOptions.map((item, key) => /*#__PURE__*/React.createElement(AtrcTooltip, {
    text: item.label,
    key: key
  }, /*#__PURE__*/React.createElement(AtrcButton, {
    onClick: () => onChange(5, item.value)
  }, /*#__PURE__*/React.createElement(AtrcIcon, {
    icon: item.icon,
    type: item.iconType || 'wp'
  })))), SixColumnsOptions.map((item, key) => /*#__PURE__*/React.createElement(AtrcTooltip, {
    text: item.label,
    key: key
  }, /*#__PURE__*/React.createElement(AtrcButton, {
    onClick: () => onChange(6, item.value)
  }, /*#__PURE__*/React.createElement(AtrcIcon, {
    icon: item.icon,
    type: item.iconType || 'wp'
  })))));
};
export default AtrcControlColumnsAdvancedLayoutPlaceholder;
//# sourceMappingURL=layout-placeholder.js.map