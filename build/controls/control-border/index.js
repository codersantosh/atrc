var _excluded = ["label", "variant", "className", "value", "onChange"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/*Values Structure
Type Object
{
    cl: '#72aee6',
    sty: 'solid',
    w: '1px'
    =======OR==========
	tCl: '#72aee6',
    tSty: 'solid',
    tW: '1px'

	rCl: '#72aee6',
    rSty: 'solid',
    rW: '1px'

	bCl: '#72aee6',
    bSty: 'solid',
    bW: '1px'

	lCl: '#72aee6',
    lSty: 'solid',
    lW: '1px'
}
* */

/*WordPress*/
// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import { __experimentalBorderBoxControl as BorderBoxControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcResetButtonIcon from '../../atoms/reset-button-icon';
import { AtrcResetWrap } from '../../atoms/reset-button-icon';
import AtrcWrapLib from '../../atoms/wrap-lib';

/* Controls */
import { AtrcControlBoxFourShorthandCssOnly } from '../control-box-four/css';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
export var AtrcControlBorderAllowedKeys = ['cl', 'sty', 'w', 'tCl', 'tSty', 'tW', 'rCl', 'rSty', 'rW', 'bCl', 'bSty', 'bW', 'lCl', 'lSty', 'lW'];
export function AtrcControlBorderColorShorthand(t, r, b, l) {
  return AtrcControlBoxFourShorthandCssOnly({
    value: {
      t: t,
      r: r,
      b: b,
      l: l
    },
    emptyVal: 'transparent'
  });
}
export function AtrcControlBorderStyleShorthand(t, r, b, l) {
  return AtrcControlBoxFourShorthandCssOnly({
    value: {
      t: t,
      r: r,
      b: b,
      l: l
    },
    emptyVal: 'none'
  });
}
export function AtrcControlBorderWidthShorthand(t, r, b, l) {
  return AtrcControlBoxFourShorthandCssOnly({
    value: {
      t: t,
      r: r,
      b: b,
      l: l
    }
  });
}
var RenderBorderBoxControl = function RenderBorderBoxControl(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? __('Borders', 'atrc-prefix-atrc') : _props$label,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    value = props.value,
    _onChange = props.onChange,
    defaultProps = _objectWithoutProperties(props, _excluded);

  /*Color*/
  var newObj = {};
  if (value.cl || value.sty || value.w) {
    newObj.color = value.cl;
    newObj.style = value.sty;
    newObj.width = value.w;
  } else {
    newObj.top = {
      color: value.tCl,
      style: value.tSty,
      width: value.tW
    };
    newObj.right = {
      color: value.rCl,
      style: value.rSty,
      width: value.rW
    };
    newObj.bottom = {
      color: value.bCl,
      style: value.bSty,
      width: value.bW
    };
    newObj.left = {
      color: value.lCl,
      style: value.lSty,
      width: value.lW
    };
  }
  return /*#__PURE__*/React.createElement(BorderBoxControl, _extends({
    label: label,
    className: classnames(AtrcPrefix('ctrl-bdr'), 'at-flx-grw-1', className, variant ? AtrcPrefix('ctrl-bdr') + '-' + variant : ''),
    value: newObj,
    onChange: function onChange(newControl) {
      var newValues = {};
      if (newControl.color || newControl.style || newControl.width) {
        newValues.cl = newControl.color;
        newValues.sty = newControl.style;
        newValues.w = newControl.width;
      } else {
        if (newControl.top) {
          newValues.tCl = newControl.top.color;
          newValues.tSty = newControl.top.style;
          newValues.tW = newControl.top.width;
        }
        if (newControl.right) {
          newValues.rCl = newControl.right.color;
          newValues.rSty = newControl.right.style;
          newValues.rW = newControl.right.width;
        }
        if (newControl.bottom) {
          newValues.bCl = newControl.bottom.color;
          newValues.bSty = newControl.bottom.style;
          newValues.bW = newControl.bottom.width;
        }
        if (newControl.left) {
          newValues.lCl = newControl.left.color;
          newValues.lSty = newControl.left.style;
          newValues.lW = newControl.left.width;
        }
      }
      _onChange(newValues);
    }
  }, defaultProps));
};
var AtrcControlBorder = function AtrcControlBorder(props) {
  var _props$allowReset = props.allowReset,
    allowReset = _props$allowReset === void 0 ? true : _props$allowReset,
    _props$value = props.value,
    value = _props$value === void 0 ? '' : _props$value,
    _props$defaultValue = props.defaultValue,
    defaultValue = _props$defaultValue === void 0 ? undefined : _props$defaultValue,
    _props$wrapProps = props.wrapProps,
    wrapProps = _props$wrapProps === void 0 ? {} : _props$wrapProps,
    _props$resetWrapProps = props.resetWrapProps,
    resetWrapProps = _props$resetWrapProps === void 0 ? {} : _props$resetWrapProps,
    onChange = props.onChange;
  if (allowReset) {
    return /*#__PURE__*/React.createElement(AtrcWrapLib, _extends({
      className: classnames('at-flx-grw-1')
    }, wrapProps), /*#__PURE__*/React.createElement(AtrcResetWrap, _extends({}, resetWrapProps, {
      className: classnames(AtrcPrefix('bdr-rst'), resetWrapProps.className ? resetWrapProps.className : '')
    }), /*#__PURE__*/React.createElement(RenderBorderBoxControl, props), /*#__PURE__*/React.createElement(AtrcResetButtonIcon, {
      defaultValue: defaultValue,
      value: value,
      onClick: function onClick() {
        return onChange({});
      }
    })));
  }
  return /*#__PURE__*/React.createElement(RenderBorderBoxControl, props);
};
export default AtrcControlBorder;
//# sourceMappingURL=index.js.map