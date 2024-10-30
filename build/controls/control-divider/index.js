var _excluded = ["value", "onChange"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
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