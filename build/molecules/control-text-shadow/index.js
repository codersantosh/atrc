function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*Attributes Structure
Type Object
{
    cl : '',
    x : '',
    y " '',
    blr : '',
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';
import AtrcControlUnit from '../../atoms/control-unit';
import AtrcPanelRow from '../panel-row';
import AtrcControlDropdownColor from '../control-dropdown-color';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
export const AtrcControlTextShadowAllowedKeys = ['cl', 'x', 'y', 'blr'];
const AtrcControlTextShadow = props => {
  const {
    value = {},
    variant = '',
    className = '',
    disableUnits = false,
    onChange = () => {},
    ...defaultProps
  } = props;
  const {
    cl = '',
    x = '',
    y = '',
    blr = ''
  } = value;
  const setAttr = (newVal, type) => {
    const valueCloned = Object.assign({}, value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    className: classnames(AtrcPrefix('ctrl-txt-sdw'), className, variant ? AtrcPrefix('ctrl-txt-sdw') + '-' + variant : '')
  }, defaultProps), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlDropdownColor, {
    value: cl,
    onChange: newVal => setAttr(newVal, 'cl')
  })), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlUnit, {
    label: __('H shadow', 'atrc-prefix-atrc'),
    value: x,
    onChange: newVal => setAttr(newVal, 'x'),
    disableUnits: disableUnits
  })), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlUnit, {
    label: __('V shadow', 'atrc-prefix-atrc'),
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
  })));
};
export default AtrcControlTextShadow;
//# sourceMappingURL=index.js.map