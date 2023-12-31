function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/
import { __experimentalUnitControl as UnitControl } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcResetButtonIcon from '../reset-button-icon';
import { AtrcResetWrap } from '../reset-button-icon';
import AtrcWrap from '../wrap';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const RenderComponent = props => {
  const {
    className = '',
    variant = '',
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('ctrl-unit-wrp'), className, variant ? AtrcPrefix('ctrl-unit-wrp') + '-' + variant : '')
  }, /*#__PURE__*/React.createElement(UnitControl, _extends({
    className: classnames(AtrcPrefix('ctrl-unit'))
  }, defaultProps)));
};
const AtrcControlUnit = props => {
  const {
    allowReset = true,
    value = '',
    onChange
  } = props;
  if (allowReset) {
    return /*#__PURE__*/React.createElement(AtrcResetWrap, {
      className: classnames(AtrcPrefix('ctrl-unit-rst'), 'at-flx-grw-1')
    }, /*#__PURE__*/React.createElement(RenderComponent, props), /*#__PURE__*/React.createElement(AtrcResetButtonIcon, {
      value: value,
      onClick: () => onChange(undefined)
    }));
  }
  return /*#__PURE__*/React.createElement(RenderComponent, props);
};
export default AtrcControlUnit;
//# sourceMappingURL=index.js.map