var _excluded = ["variant", "className", "value", "onChange"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*
* Values Structure
Type Object
{
    "t":"",
    "r":"",
    "b":"",
    "l":""
* }
* 
* Expected:
*  also if single value string
* */
/*WordPress*/
import { useMemo } from '@wordpress/element';

// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import { __experimentalBoxControl as BoxControl } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';
import { cloneDeep } from 'lodash';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';
import AtrcWrapLib from '../../atoms/wrap-lib';
import AtrcResetButtonIcon from '../../atoms/reset-button-icon';
import { AtrcResetWrap } from '../../atoms/reset-button-icon';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/*Local*/
export var AtrcControlBoxFourAllowedKeys = ['t', 'r', 'b', 'l'];
var RenderBoxControl = function RenderBoxControl(props) {
  var _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    value = props.value,
    _onChange = props.onChange,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var newObj = {};
  if (value.t) {
    newObj.top = value.t;
  }
  if (value.r) {
    newObj.right = value.r;
  }
  if (value.b) {
    newObj.bottom = value.b;
  }
  if (value.l) {
    newObj.left = value.l;
  }
  return /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('ctrl-box-four'), className, variant ? AtrcPrefix('ctrl-box-four') + '-' + variant : '')
  }, /*#__PURE__*/React.createElement(BoxControl, _extends({
    allowReset: false,
    values: newObj,
    onChange: function onChange(newControl) {
      var newValues = {};
      if (newControl.top) {
        newValues.t = newControl.top;
      }
      if (newControl.right) {
        newValues.r = newControl.right;
      }
      if (newControl.bottom) {
        newValues.b = newControl.bottom;
      }
      if (newControl.left) {
        newValues.l = newControl.left;
      }
      _onChange(newValues);
    },
    inputProps: {
      min: -1000
    }
  }, defaultProps)));
};
var AtrcControlBoxFour = function AtrcControlBoxFour(props) {
  var _props$allowReset = props.allowReset,
    allowReset = _props$allowReset === void 0 ? true : _props$allowReset,
    _props$value = props.value,
    value = _props$value === void 0 ? '' : _props$value,
    _props$valueType = props.valueType,
    valueType = _props$valueType === void 0 ? '' : _props$valueType,
    _props$splitOnAxis = props.splitOnAxis,
    splitOnAxis = _props$splitOnAxis === void 0 ? false : _props$splitOnAxis,
    _props$defaultValue = props.defaultValue,
    defaultValue = _props$defaultValue === void 0 ? undefined : _props$defaultValue,
    _props$wrapProps = props.wrapProps,
    wrapProps = _props$wrapProps === void 0 ? {} : _props$wrapProps,
    _props$resetWrapProps = props.resetWrapProps,
    resetWrapProps = _props$resetWrapProps === void 0 ? {} : _props$resetWrapProps,
    onChange = props.onChange;
  var setChange = function setChange(newValues) {
    if ('string' === valueType) {
      /* split is for inhouse fix */
      var stringValue = '';
      if (splitOnAxis) {
        var topVal = newValues.t || '';
        var splitedTopVal = topVal.split(' ');
        var rightVal = newValues.r || '';
        var splitedRightVal = rightVal.split(' ');
        stringValue = "".concat(splitedTopVal[0], " ").concat(splitedRightVal[0]);
      } else {
        var _topVal = newValues.t || '';
        var _splitedTopVal = _topVal.split(' ');
        var _rightVal = newValues.r || '';
        var _splitedRightVal = _rightVal.split(' ');
        var bottomVal = newValues.b || '';
        var splitedBottomVal = bottomVal.split(' ');
        var leftVal = newValues.l || '';
        var splitedLeftVal = leftVal.split(' ');
        stringValue = "".concat(_splitedTopVal[0], " ").concat(_splitedRightVal[0], " ").concat(splitedBottomVal[0], " ").concat(splitedLeftVal[0]);
      }
      onChange(stringValue);
    } else {
      onChange(newValues);
    }
  };
  var objValues = useMemo(function () {
    var objVal = {};
    if (typeof value === 'string') {
      var splitedValues = value.split(' ');
      var countValues = splitedValues.length;
      if (splitOnAxis) {
        objVal.t = splitedValues[0];
        objVal.r = splitedValues[1];
        objVal.b = splitedValues[0];
        objVal.l = splitedValues[1];
      } else {
        switch (countValues) {
          case 1:
            objVal.t = splitedValues[0];
            objVal.r = splitedValues[0];
            objVal.b = splitedValues[0];
            objVal.l = splitedValues[0];
            break;
          case 2:
            objVal.t = splitedValues[0];
            objVal.r = splitedValues[1];
            objVal.b = splitedValues[0];
            objVal.l = splitedValues[1];
            break;
          case 3 /* css shorthand */:
            objVal.t = splitedValues[0];
            objVal.r = splitedValues[1];
            objVal.b = splitedValues[3];
            objVal.l = splitedValues[1];
            break;
          case 4:
            objVal.t = splitedValues[0];
            objVal.r = splitedValues[1];
            objVal.b = splitedValues[2];
            objVal.l = splitedValues[3];
            break;
          default:
            break;
        }
      }
    } else if (value) {
      objVal = cloneDeep(value);
    }
    return objVal;
  }, [value, valueType, value]);
  if (allowReset) {
    return /*#__PURE__*/React.createElement(AtrcWrapLib, _extends({
      className: classnames('at-flx-grw-1')
    }, wrapProps), /*#__PURE__*/React.createElement(AtrcResetWrap, _extends({}, resetWrapProps, {
      className: classnames(AtrcPrefix('box-four-rst'), resetWrapProps.className ? resetWrapProps.className : '')
    }), /*#__PURE__*/React.createElement(RenderBoxControl, _extends({}, props, {
      value: objValues,
      splitOnAxis: splitOnAxis,
      onChange: setChange
    })), /*#__PURE__*/React.createElement(AtrcResetButtonIcon, {
      defaultValue: defaultValue,
      value: objValues,
      onClick: function onClick() {
        return onChange(undefined);
      }
    })));
  }
  return /*#__PURE__*/React.createElement(RenderBoxControl, props);
};
export default AtrcControlBoxFour;
//# sourceMappingURL=index.js.map