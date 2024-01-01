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
var RenderTooltipChild = function RenderTooltipChild(_ref) {
  var option = _ref.option;
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
var RenderButtons = function RenderButtons(_ref2) {
  var options = _ref2.options,
    onChange = _ref2.onChange,
    value = _ref2.value;
  if (!options) {
    return null;
  }
  return options.map(function (option) {
    var _option$tooltip = option.tooltip,
      tooltip = _option$tooltip === void 0 ? {
        text: option.label
      } : _option$tooltip;
    return /*#__PURE__*/React.createElement(AtrcButton, {
      className: classnames(AtrcPrefix('btn-select'), 'at-flx', 'at-al-itm-ctr', 'at-jfy-cont-ctr'),
      onClick: function onClick() {
        return onChange(option.value);
      },
      isActive: option.value === value,
      key: option.value
    }, /*#__PURE__*/React.createElement(AtrcTooltip, tooltip, /*#__PURE__*/React.createElement(RenderTooltipChild, {
      option: option
    })));
  });
};
var RenderButtonGroup = function RenderButtonGroup(props) {
  var _props$options = props.options,
    options = _props$options === void 0 ? [] : _props$options,
    _props$value = props.value,
    value = _props$value === void 0 ? '' : _props$value,
    _props$defaultValue = props.defaultValue,
    defaultValue = _props$defaultValue === void 0 ? '' : _props$defaultValue,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$allowReset = props.allowReset,
    allowReset = _props$allowReset === void 0 ? true : _props$allowReset;
  return /*#__PURE__*/React.createElement(AtrcButtonGroup, null, /*#__PURE__*/React.createElement(RenderButtons, {
    options: options,
    onChange: onChange,
    value: value || defaultValue
  }), allowReset ? /*#__PURE__*/React.createElement(AtrcResetButtonIcon, {
    defaultValue: defaultValue,
    value: value || defaultValue,
    onClick: function onClick() {
      return onChange(defaultValue);
    }
  }) : null);
};
var AtrcControlSelectButton = function AtrcControlSelectButton(props) {
  var _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label;
  return /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('ctrl-select-btn'), className, variant ? AtrcPrefix('ctrl-select-btn') + '-' + variant : '')
  }, label ? /*#__PURE__*/React.createElement(AtrcLabel, null, label) : null, /*#__PURE__*/React.createElement(RenderButtonGroup, props));
};
export default AtrcControlSelectButton;
//# sourceMappingURL=index.js.map