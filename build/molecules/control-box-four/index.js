var _excluded = ["variant", "className", "values", "onChange"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*
* Values Structure
Type Object
{
    "r":"",
    "b":"",
    "r":"",
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

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';
import AtrcResetButtonIcon from '../../atoms/reset-button-icon';
import { AtrcResetWrap } from '../../atoms/reset-button-icon';
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var RenderBoxControl = function RenderBoxControl(props) {
  var _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    values = props.values,
    _onChange = props.onChange,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var newObj = {};
  if (values.t) {
    newObj.top = values.t;
  }
  if (values.r) {
    newObj.right = values.r;
  }
  if (values.b) {
    newObj.bottom = values.b;
  }
  if (values.l) {
    newObj.left = values.l;
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
    _props$values = props.values,
    values = _props$values === void 0 ? '' : _props$values,
    _props$valueType = props.valueType,
    valueType = _props$valueType === void 0 ? '' : _props$valueType,
    _props$splitOnAxis = props.splitOnAxis,
    splitOnAxis = _props$splitOnAxis === void 0 ? false : _props$splitOnAxis,
    _props$defaultValue = props.defaultValue,
    defaultValue = _props$defaultValue === void 0 ? undefined : _props$defaultValue,
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
    if (typeof values === 'string') {
      var splitedValues = values.split(' ');
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
    } else if (values) {
      objVal = cloneDeep(values);
    }
    return objVal;
  }, [values, valueType, values]);
  if (allowReset) {
    return /*#__PURE__*/React.createElement(AtrcResetWrap, {
      className: classnames(AtrcPrefix('box-four-rst'))
    }, /*#__PURE__*/React.createElement(RenderBoxControl, _extends({}, props, {
      values: objValues,
      splitOnAxis: splitOnAxis,
      onChange: setChange
    })), /*#__PURE__*/React.createElement(AtrcResetButtonIcon, {
      defaultValue: defaultValue,
      value: objValues,
      onClick: function onClick() {
        return onChange(undefined);
      }
    }));
  }
  return /*#__PURE__*/React.createElement(RenderBoxControl, props);
};
export default AtrcControlBoxFour;
//# sourceMappingURL=index.js.map