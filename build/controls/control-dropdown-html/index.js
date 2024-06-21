var _excluded = ["label", "value", "onChange", "options", "variant", "className", "instanceId"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/*Attributes Structure
Type string||int

Single value

**/
/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';
import AtrcIcon from '../../atoms/icon';
import AtrcResetButtonIcon from '../../atoms/reset-button-icon';
import AtrcImg from '../../atoms/img';

/* Controls */
import AtrcControlRadio from '../control-radio';

/* Molecules */
import AtrcDropdown from '../../molecules/dropdown';

/* Utils */
import AtrcUseInstanceId from '../../utils/use-instance-id';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var LocalIconPreview = function LocalIconPreview(_ref) {
  var icon = _ref.icon;
  if (typeof icon === 'function') {
    return icon({});
  }
  return /*#__PURE__*/React.createElement(AtrcIcon, {
    svg: icon,
    type: "svg"
  });
};
var RenderContent = function RenderContent(_ref2) {
  var options = _ref2.options,
    value = _ref2.value,
    onChange = _ref2.onChange,
    instanceId = _ref2.instanceId;
  return /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('ctrl-dropdown-html-wrp'), 'at-w')
  }, options.length ? options.map(function (item, iDx) {
    var inputId = AtrcPrefix('ctrl-dropdown-html-item') + '-' + instanceId + '-' + iDx;
    return /*#__PURE__*/React.createElement(AtrcWrap, {
      key: iDx,
      className: classnames(AtrcPrefix('ctrl-dropdown-html-item'))
    }, /*#__PURE__*/React.createElement(AtrcLabel, {
      className: classnames(AtrcPrefix('ctrl-dropdown-html-item-lbl'), 'at-flx', 'at-al-itm-ctr'),
      htmlFor: inputId
    }, /*#__PURE__*/React.createElement(AtrcControlRadio, {
      id: inputId,
      name: AtrcPrefix('ctrl-dropdown-html-item') + '-' + instanceId,
      value: item.value,
      checked: item.value === value,
      onClick: function onClick() {
        return onChange(item.value);
      },
      readOnly: true
    }), item.imgSrc ? /*#__PURE__*/React.createElement(AtrcImg, {
      src: item.imgSrc,
      alt: item.label,
      style: {
        maxWidth: '50px'
      }
    }) : null, item.svg ? /*#__PURE__*/React.createElement(LocalIconPreview, {
      icon: item.svg,
      type: "svg"
    }) : null));
  }) : null);
};
var RenderControl = function RenderControl(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? __('Choose from options', 'atrc-prefix-atrc') : _props$label,
    value = props.value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$options = props.options,
    options = _props$options === void 0 ? [] : _props$options,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$instanceId = props.instanceId,
    instanceId = _props$instanceId === void 0 ? '' : _props$instanceId,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(AtrcDropdown, _extends({
    className: classnames(AtrcPrefix('ctrl-dropdown-html'), 'at-flx-grw-1', className, variant ? AtrcPrefix('ctrl-dropdown-html') + '-' + variant : ''),
    renderToggle: function renderToggle(_ref3) {
      var isOpen = _ref3.isOpen,
        onToggle = _ref3.onToggle;
      return /*#__PURE__*/React.createElement(AtrcWrap, {
        className: classnames(AtrcPrefix('ctrl-dropdown-html-item-preview'), 'at-p', 'at-bdr', 'at-cur'),
        onClick: onToggle
      }, label);
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RenderContent, {
        onChange: onChange,
        options: options,
        instanceId: instanceId,
        value: value
      }));
    }
  }, defaultProps));
};
var AtrcControlDropdownHtml = function AtrcControlDropdownHtml(props) {
  var _props$allowReset = props.allowReset,
    allowReset = _props$allowReset === void 0 ? true : _props$allowReset,
    _props$value = props.value,
    value = _props$value === void 0 ? '' : _props$value,
    onChange = props.onChange;
  var instanceId = AtrcUseInstanceId(AtrcControlDropdownHtml, 'atrc-ctrl-dropdown-html');
  if (allowReset) {
    return /*#__PURE__*/React.createElement(AtrcWrap, {
      className: classnames(AtrcPrefix('rst-wrp'), AtrcPrefix('lbl-rst'), 'at-flx', 'at-al-itm-st', 'at-gap', 'at-flx-grw-1')
    }, /*#__PURE__*/React.createElement(RenderControl, _extends({
      instanceId: instanceId
    }, props)), /*#__PURE__*/React.createElement(AtrcResetButtonIcon, {
      value: value,
      onClick: function onClick() {
        return onChange('');
      }
    }));
  }
  return /*#__PURE__*/React.createElement(RenderControl, props);
};
export default AtrcControlDropdownHtml;
//# sourceMappingURL=index.js.map