var _excluded = ["label", "value", "columns", "className", "variant", "onChange"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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