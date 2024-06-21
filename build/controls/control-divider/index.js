var _excluded = ["value", "onChange"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/* WordPress */
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';
import { cloneDeep } from 'lodash';

/*Controls*/
import AtrcControlSelect from '../control-select';
import AtrcControlSvg from '../control-svg';

/* Molecules */
import AtrcPanelRow from '../../molecules/panel-row';

/* Internal */
import SvgDividerOptions from './options';

/*Local*/
var SelectedShape = function SelectedShape(value, options) {
  var selectedShape = options.filter(function (item) {
    return item.value === value;
  });
  if (selectedShape.length) {
    return selectedShape[0];
  }
  return null;
};
export var AtrcControlDividerDefaultSvg = function AtrcControlDividerDefaultSvg(_ref) {
  var svgDefd = _ref.svgDefd;
  var selectedShape = SelectedShape(svgDefd, SvgDividerOptions());
  if (selectedShape) {
    return selectedShape.svg({});
  }
  return null;
};
var AtrcControlDivider = function AtrcControlDivider(props) {
  var _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var setAttr = function setAttr(newVal, type) {
    var valueCloned = cloneDeep(value);
    if ('type' === type) {
      if ('' === newVal) {
        valueCloned = {};
      }
    }
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  var setChange = function setChange(newVal) {
    var valueCloned = cloneDeep(value);
    if (newVal) {
      if ('svgDefd' in newVal) {
        valueCloned.svgDefd = newVal.svgDefd;
        valueCloned.svg = '';
      } else {
        valueCloned.svg = newVal.svgCust;
        delete valueCloned.svgDefd;
      }
      valueCloned.svgFrm = newVal.svgFrm;
    }
    onChange(valueCloned);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlSelect, {
    label: __('Divider type', 'atrc-prefix-atrc'),
    value: value.type,
    options: [{
      label: __('None', 'atrc-prefix-atrc'),
      value: ''
    }, {
      label: __('Svg', 'atrc-prefix-atrc'),
      value: 'svg'
    }],
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'type');
    }
  })), value && value.type === 'svg' ? /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlSvg, _extends({
    value: {
      svgFrm: value.svgFrm,
      svgDefd: value.svgDefd,
      svgCust: 'cust' === value.svgFrm ? value.svg : ''
    },
    onChange: setChange,
    definedOptions: SvgDividerOptions(),
    alloweColor: false,
    alloweSettings: false
  }, defaultProps))) : null);
};
export default AtrcControlDivider;
//# sourceMappingURL=index.js.map