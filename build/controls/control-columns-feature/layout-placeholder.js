var _excluded = ["label", "value", "columns", "className", "variant", "onChange"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*WordPress*/
import { __ } from '@wordpress/i18n';
import { Placeholder } from '@wordpress/components';

/* Library */
import classNames from 'classnames';

/*Atoms*/
import AtrcButton from '../../atoms/button';
import AtrcIcon from '../../atoms/icon';

/* Molecules */
import AtrcTooltip from '../../molecules/tooltip';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/* Internal */
import { FiveColumnsOptions, FourColumnsOptions, OneColumnOptions, SixColumnsOptions, ThreeColumnsOptions, TwoColumnsOptions } from './options';

/* Local */
var AtrcControlColumnsFeatureLayoutPlaceholder = function AtrcControlColumnsFeatureLayoutPlaceholder(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? __('Select columns', 'atrc-prefix-atrc') : _props$label,
    value = props.value,
    columns = props.columns,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(Placeholder, _extends({
    icon: "screenoptions",
    className: classNames(AtrcPrefix('ctrl-adv-col-plhldr'), className, variant ? AtrcPrefix('ctrl-adv-col-plhldr') + '-' + variant : ''),
    label: label
  }, defaultProps), OneColumnOptions().map(function (item, key) {
    return /*#__PURE__*/React.createElement(AtrcTooltip, {
      text: item.label,
      key: key
    }, /*#__PURE__*/React.createElement(AtrcButton, {
      onClick: function onClick() {
        return onChange(1, item.value);
      }
    }, /*#__PURE__*/React.createElement(AtrcIcon, {
      icon: item.icon,
      type: item.iconType || 'wp'
    })));
  }), TwoColumnsOptions().map(function (item, key) {
    return /*#__PURE__*/React.createElement(AtrcTooltip, {
      text: item.label,
      key: key
    }, /*#__PURE__*/React.createElement(AtrcButton, {
      onClick: function onClick() {
        return onChange(2, item.value);
      }
    }, /*#__PURE__*/React.createElement(AtrcIcon, {
      icon: item.icon,
      type: item.iconType || 'wp'
    })));
  }), ThreeColumnsOptions().map(function (item, key) {
    return /*#__PURE__*/React.createElement(AtrcTooltip, {
      text: item.label,
      key: key
    }, /*#__PURE__*/React.createElement(AtrcButton, {
      onClick: function onClick() {
        return onChange(3, item.value);
      }
    }, /*#__PURE__*/React.createElement(AtrcIcon, {
      icon: item.icon,
      type: item.iconType || 'wp'
    })));
  }), FourColumnsOptions().map(function (item, key) {
    return /*#__PURE__*/React.createElement(AtrcTooltip, {
      text: item.label,
      key: key
    }, /*#__PURE__*/React.createElement(AtrcButton, {
      onClick: function onClick() {
        return onChange(4, item.value);
      }
    }, /*#__PURE__*/React.createElement(AtrcIcon, {
      icon: item.icon,
      type: item.iconType || 'wp'
    })));
  }), FiveColumnsOptions().map(function (item, key) {
    return /*#__PURE__*/React.createElement(AtrcTooltip, {
      text: item.label,
      key: key
    }, /*#__PURE__*/React.createElement(AtrcButton, {
      onClick: function onClick() {
        return onChange(5, item.value);
      }
    }, /*#__PURE__*/React.createElement(AtrcIcon, {
      icon: item.icon,
      type: item.iconType || 'wp'
    })));
  }), SixColumnsOptions().map(function (item, key) {
    return /*#__PURE__*/React.createElement(AtrcTooltip, {
      text: item.label,
      key: key
    }, /*#__PURE__*/React.createElement(AtrcButton, {
      onClick: function onClick() {
        return onChange(6, item.value);
      }
    }, /*#__PURE__*/React.createElement(AtrcIcon, {
      icon: item.icon,
      type: item.iconType || 'wp'
    })));
  }));
};
export default AtrcControlColumnsFeatureLayoutPlaceholder;
//# sourceMappingURL=layout-placeholder.js.map