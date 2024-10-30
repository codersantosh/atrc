var _excluded = ["label", "variant", "className", "value", "onChange", "useCSSVariables"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
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

/* Utils */
import { AtrcUseColorSolids } from '../../utils/use-colors';

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
    _props$useCSSVariable = props.useCSSVariables,
    useCSSVariables = _props$useCSSVariable === void 0 ? true : _props$useCSSVariable,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var allSolids = AtrcUseColorSolids({
    useCSSVariables: useCSSVariables
  });

  /*Color*/
  var newObj = {};
  if (value) {
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
  }
  return /*#__PURE__*/React.createElement(BorderBoxControl, _extends({
    colors: allSolids,
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