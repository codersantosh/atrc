var _excluded = ["label", "className", "variant", "value", "onChange", "allowOn", "allowUrl", "allowTitle", "allowTarget", "allowRel", "onProps", "urlProps", "titleProps", "targetProps", "relProps"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/*Attributes Structure
Type Object
{
on
url
tgt
ttl
rel
 * */

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';
import { cloneDeep } from 'lodash';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';

/* Controls */
import AtrcControlText from '../control-text';
import AtrcControlToggle from '../control-toggle';

/* Molecules */
import AtrcPanelRow from '../../molecules/panel-row';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var AtrcControlLink = function AtrcControlLink(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$allowOn = props.allowOn,
    allowOn = _props$allowOn === void 0 ? false : _props$allowOn,
    _props$allowUrl = props.allowUrl,
    allowUrl = _props$allowUrl === void 0 ? true : _props$allowUrl,
    _props$allowTitle = props.allowTitle,
    allowTitle = _props$allowTitle === void 0 ? true : _props$allowTitle,
    _props$allowTarget = props.allowTarget,
    allowTarget = _props$allowTarget === void 0 ? true : _props$allowTarget,
    _props$allowRel = props.allowRel,
    allowRel = _props$allowRel === void 0 ? false : _props$allowRel,
    _props$onProps = props.onProps,
    onProps = _props$onProps === void 0 ? {} : _props$onProps,
    _props$urlProps = props.urlProps,
    urlProps = _props$urlProps === void 0 ? {} : _props$urlProps,
    _props$titleProps = props.titleProps,
    titleProps = _props$titleProps === void 0 ? {} : _props$titleProps,
    _props$targetProps = props.targetProps,
    targetProps = _props$targetProps === void 0 ? {} : _props$targetProps,
    _props$relProps = props.relProps,
    relProps = _props$relProps === void 0 ? {} : _props$relProps,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var setAttr = function setAttr(newVal, type) {
    var valueCloned = cloneDeep(value);
    if (newVal) {
      valueCloned[type] = newVal;
    } else {
      delete valueCloned[type];
    }
    onChange(valueCloned);
  };
  var isAllowField = function isAllowField(_ref) {
    var _ref$fieldType = _ref.fieldType,
      fieldType = _ref$fieldType === void 0 ? '' : _ref$fieldType;
    if (allowOn) {
      if (!value || !value.on) {
        return false;
      }
    }
    if (allowUrl && 'url' === fieldType) {
      return true;
    }
    if (allowTitle && 'ttl' === fieldType) {
      return true;
    }
    if (allowTarget && 'tgt' === fieldType) {
      return true;
    }
    if (allowRel && 'rel' === fieldType) {
      return true;
    }
    return false;
  };
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    className: classnames(AtrcPrefix('ctrl-link'), 'at-flx-col', 'at-flx-grw-1', 'at-flx', className, variant ? AtrcPrefix('ctrl-link') + '-' + variant : '')
  }, defaultProps), label && /*#__PURE__*/React.createElement(AtrcLabel, {
    className: classnames(AtrcPrefix('m-0'))
  }, label), allowOn && /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlToggle, _extends({
    label: __('Allow link', 'atrc-prefix-atrc'),
    checked: value && value.on,
    onChange: function onChange() {
      var newVal = true;
      if (value && value.on) {
        newVal = false;
      }
      setAttr(newVal, 'on');
    }
  }, onProps))), isAllowField({
    fieldType: 'url'
  }) && /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlText, _extends({
    label: __('URL', 'atrc-prefix-atrc'),
    wrapProps: {
      className: 'at-flx-grw-1'
    },
    value: value.url,
    type: "url",
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'url');
    }
  }, urlProps))), isAllowField({
    fieldType: 'ttl'
  }) && /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlText, _extends({
    label: __('Title', 'atrc-prefix-atrc'),
    value: value.ttl,
    type: "text",
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'ttl');
    }
  }, titleProps))), isAllowField({
    fieldType: 'tgt'
  }) && /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlToggle, _extends({
    label: __('Open in new tab', 'atrc-prefix-atrc'),
    checked: value && value.tgt === '_blank',
    onChange: function onChange() {
      var newVal = '';
      if (value && value.tgt === '' || !value || !value.tgt) {
        newVal = '_blank';
      }
      setAttr(newVal, 'tgt');
    }
  }, targetProps))), isAllowField({
    fieldType: 'rel'
  }) && /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlText, _extends({
    label: __('Relation', 'atrc-prefix-atrc'),
    value: value.rel,
    type: "text",
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'rel');
    }
  }, relProps))));
};
export default AtrcControlLink;
//# sourceMappingURL=index.js.map