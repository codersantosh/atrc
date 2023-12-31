/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';
import AtrcButton from '../../atoms/button';
import AtrcIcon from '../../atoms/icon';
import AtrcResetButtonIcon from '../../atoms/reset-button-icon';
import AtrcTooltip from '../tooltip';
import AtrcButtonGroup from '../button-group';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const RenderTooltipChild = ({
  option
}) => {
  if (option.iconType && 'svg' === option.iconType) {
    return /*#__PURE__*/React.createElement(AtrcIcon, {
      svg: option.icon,
      type: "svg"
    });
  }
  if (option.icon) {
    return /*#__PURE__*/React.createElement(AtrcIcon, {
      icon: option.icon,
      type: option.iconType || 'wp'
    });
  }
  return option.label;
};
const RenderButtons = ({
  options,
  onChange,
  value
}) => {
  if (!options) {
    return null;
  }
  return options.map(function (option) {
    const {
      tooltip = {
        text: option.label
      }
    } = option;
    return /*#__PURE__*/React.createElement(AtrcButton, {
      className: classnames(AtrcPrefix('btn-select'), 'at-flx', 'at-al-itm-ctr', 'at-jfy-cont-ctr'),
      onClick: () => onChange(option.value),
      isActive: option.value === value,
      key: option.value
    }, /*#__PURE__*/React.createElement(AtrcTooltip, tooltip, /*#__PURE__*/React.createElement(RenderTooltipChild, {
      option: option
    })));
  });
};
const RenderButtonGroup = props => {
  const {
    options = [],
    value = '',
    defaultValue = '',
    onChange = () => {},
    allowReset = true
  } = props;
  return /*#__PURE__*/React.createElement(AtrcButtonGroup, null, /*#__PURE__*/React.createElement(RenderButtons, {
    options: options,
    onChange: onChange,
    value: value || defaultValue
  }), allowReset ? /*#__PURE__*/React.createElement(AtrcResetButtonIcon, {
    defaultValue: defaultValue,
    value: value || defaultValue,
    onClick: () => onChange(defaultValue)
  }) : null);
};
const AtrcControlSelectButton = props => {
  const {
    className = '',
    variant = '',
    label = ''
  } = props;
  return /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('ctrl-select-btn'), className, variant ? AtrcPrefix('ctrl-select-btn') + '-' + variant : '')
  }, label ? /*#__PURE__*/React.createElement(AtrcLabel, null, label) : null, /*#__PURE__*/React.createElement(RenderButtonGroup, props));
};
export default AtrcControlSelectButton;
//# sourceMappingURL=index.js.map