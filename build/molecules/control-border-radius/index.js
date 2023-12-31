function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*Attributes Structure
Type Object or string
{
    ''(string)
    =======OR==========
    tL: '',
    tR: '',
    bL: '',
    bR: '',
}
* */

/*WordPress*/
// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import { __experimentalBorderRadiusControl as BorderRadiusControl } from '@wordpress/block-editor';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcResetButtonIcon from '../../atoms/reset-button-icon';
import { AtrcResetWrap } from '../../atoms/reset-button-icon';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
export const AtrcControlBorderRadiusAllowedKeys = ['tR', 'tL', 'bL', 'bR'];
const RenderBorderRadiusControl = props => {
  const {
    variant = '',
    className = '',
    values,
    onChange,
    ...defaultProps
  } = props;
  let newObj;
  if (typeof values === 'object') {
    newObj = {
      topRight: values.tR,
      topLeft: values.tL,
      bottomLeft: values.bL,
      bottomRight: values.bR
    };
  } else {
    newObj = values;
  }
  return /*#__PURE__*/React.createElement(BorderRadiusControl, _extends({
    className: classnames(AtrcPrefix('ctrl-bdr-rad'), className, variant ? AtrcPrefix('ctrl-bdr-rad') + '-' + variant : ''),
    values: newObj,
    onChange: newControl => {
      let newValues;
      if (typeof newControl === 'object') {
        newValues = {
          tR: newControl.topRight,
          tL: newControl.topLeft,
          bL: newControl.bottomLeft,
          bR: newControl.bottomRight
        };
      } else {
        newValues = newControl;
      }
      onChange(newValues);
    }
  }, defaultProps));
};
const AtrcControlBorderRadius = props => {
  const {
    allowReset = true,
    values = '',
    onChange
  } = props;
  if (allowReset) {
    return /*#__PURE__*/React.createElement(AtrcResetWrap, {
      className: classnames(AtrcPrefix('bdr-rad-rst'))
    }, /*#__PURE__*/React.createElement(RenderBorderRadiusControl, props), /*#__PURE__*/React.createElement(AtrcResetButtonIcon, {
      value: values,
      onClick: () => onChange({})
    }));
  }
  return /*#__PURE__*/React.createElement(RenderBorderRadiusControl, props);
};
export default AtrcControlBorderRadius;
//# sourceMappingURL=index.js.map