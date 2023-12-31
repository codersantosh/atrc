function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*Attributes Structure
Type Object
{
    cl : '',
    x : '',
    y " '',
    blr : '',
    sprd : '',
    pos : '',
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';
import AtrcSelect from '../../atoms/select';
import AtrcControlUnit from '../../atoms/control-unit';
import AtrcControlDropdownColor from '../control-dropdown-color';
import AtrcPanelRow from '../panel-row';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
export const AtrcControlBoxShadowAllowedKeys = ['cl', 'x', 'y', 'blr', 'sprd', 'pos'];
const AtrcControlBoxShadow = props => {
  const {
    value = {},
    variant = '',
    className = '',
    onChange = () => {},
    disableUnits = false,
    ...defaultProps
  } = props;
  const {
    cl = '',
    x = '',
    y = '',
    blr = '',
    sprd = '',
    pos = ''
  } = value;
  const setAttr = (newVal, type) => {
    const valueCloned = Object.assign({}, value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    className: classnames(AtrcPrefix('ctrl-box-sdw'), className, variant ? AtrcPrefix('ctrl-box-sdw') + '-' + variant : '')
  }, defaultProps), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlDropdownColor, {
    value: cl,
    onChange: newVal => setAttr(newVal, 'cl')
  })), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcSelect, {
    label: __('Position', 'atrc-prefix-atrc'),
    wrapProps: {
      className: 'at-flx-grw-1'
    },
    value: pos,
    options: [{
      label: __('Default', 'atrc-prefix-atrc'),
      value: ''
    }, {
      label: __('Inset', 'atrc-prefix-atrc'),
      value: 'inset'
    }],
    onChange: newVal => setAttr(newVal, 'pos')
  })), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlUnit, {
    label: __('X', 'atrc-prefix-atrc'),
    value: x,
    onChange: newVal => setAttr(newVal, 'x'),
    disableUnits: disableUnits
  })), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlUnit, {
    label: __('Y', 'atrc-prefix-atrc'),
    value: y,
    onChange: newVal => setAttr(newVal, 'y'),
    disableUnits: disableUnits
  })), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlUnit, {
    label: __('Blur', 'atrc-prefix-atrc'),
    value: blr,
    onChange: newVal => setAttr(newVal, 'blr'),
    disableUnits: disableUnits
  })), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlUnit, {
    label: __('Spread', 'atrc-prefix-atrc'),
    value: sprd,
    onChange: newVal => setAttr(newVal, 'sprd'),
    disableUnits: disableUnits
  })));
};
export default AtrcControlBoxShadow;
//# sourceMappingURL=index.js.map