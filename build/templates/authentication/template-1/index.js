var _excluded = ["wrapProps", "className", "variant", "type", "position", "logo", "logoWrapProps", "formProps", "fields", "submit", "checkbox", "bottomLinks"],
  _excluded2 = ["fieldType"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcButton from '../../../atoms/button';
import AtrcImg from '../../../atoms/img';
import AtrcLink from '../../../atoms/link';
import AtrcWrap from '../../../atoms/wrap';

/*Molecules*/
import AtrcForm from '../../../molecules/form';

/*Controls*/
import AtrcControlText from '../../../controls/control-text';
import AtrcControlCheckbox from '../../../controls/control-checkbox';
import AtrcControlSelect from '../../../controls/control-select';

/*Prefix*/
import AtrcPrefix from '../../../prefix-vars';

/*Local*/
var getFlxPosClasses = function getFlxPosClasses(pos) {
  var flxClasses = 'at-form-pos at-flx at-h ';
  if ('top left' === pos) {
    flxClasses += 'at-al-itm-st at-jfy-cont-st';
  }
  if ('top center' === pos) {
    flxClasses += 'at-al-itm-st at-jfy-cont-ctr';
  }
  if ('top right' === pos) {
    flxClasses += 'at-al-itm-st at-jfy-cont-end';
  }
  if ('center left' === pos) {
    flxClasses += 'at-al-itm-ctr at-jfy-cont-st';
  }
  if ('center center' === pos) {
    flxClasses += 'at-al-itm-ctr at-jfy-cont-ctr';
  }
  if ('center right' === pos) {
    flxClasses += 'at-al-itm-ctr at-jfy-cont-end';
  }
  if ('bottom left' === pos) {
    flxClasses += 'at-al-itm-end at-jfy-cont-st';
  }
  if ('bottom center' === pos) {
    flxClasses += 'at-al-itm-end at-jfy-cont-ctr';
  }
  if ('bottom right' === pos) {
    flxClasses += 'at-al-itm-end at-jfy-cont-end';
  }
  return flxClasses;
};
var AtrcAuthenticationTemplate1 = function AtrcAuthenticationTemplate1(props) {
  var _props$wrapProps = props.wrapProps,
    wrapProps = _props$wrapProps === void 0 ? {} : _props$wrapProps,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$type = props.type,
    type = _props$type === void 0 ? 'login' : _props$type,
    _props$position = props.position,
    position = _props$position === void 0 ? 'center center' : _props$position,
    _props$logo = props.logo,
    logo = _props$logo === void 0 ? {} : _props$logo,
    _props$logoWrapProps = props.logoWrapProps,
    logoWrapProps = _props$logoWrapProps === void 0 ? {} : _props$logoWrapProps,
    _props$formProps = props.formProps,
    formProps = _props$formProps === void 0 ? {} : _props$formProps,
    _props$fields = props.fields,
    fields = _props$fields === void 0 ? [] : _props$fields,
    _props$submit = props.submit,
    submit = _props$submit === void 0 ? {} : _props$submit,
    checkbox = props.checkbox,
    _props$bottomLinks = props.bottomLinks,
    bottomLinks = _props$bottomLinks === void 0 ? [] : _props$bottomLinks,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, wrapProps, {
    className: classnames(wrapProps.className || '', getFlxPosClasses(position))
  }), /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    className: classnames(AtrcPrefix('form-wrp'), AtrcPrefix('authentication-tpl-1'), 'at-w', className, AtrcPrefix(type), variant ? AtrcPrefix('authentication-tpl-1') + '-' + variant : '')
  }, defaultProps), logo && logo.src ? /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    className: classnames('at-flx', 'at-jfy-cont-ctr')
  }, logoWrapProps), /*#__PURE__*/React.createElement(AtrcImg, logo)) : null, /*#__PURE__*/React.createElement(AtrcForm, _extends({
    className: classnames('at-bg-cl', 'at-bdr', 'at-p', 'at-m', 'at-flx', 'at-gap', 'at-flx-col')
  }, formProps), fields && fields.length ? /*#__PURE__*/React.createElement(React.Fragment, null, fields.map(function (item, iDx) {
    var _item$fieldType = item.fieldType,
      fieldType = _item$fieldType === void 0 ? '' : _item$fieldType,
      itemProps = _objectWithoutProperties(item, _excluded2);
    if (itemProps.render) {
      return itemProps.render;
    }
    switch (fieldType) {
      case 'select':
        return /*#__PURE__*/React.createElement(AtrcControlSelect, _extends({
          key: "authentication-tpl-1-field-".concat(iDx),
          allowReset: false
        }, itemProps));
        break;
      default:
        return /*#__PURE__*/React.createElement(AtrcControlText, _extends({
          key: "authentication-tpl-1-field-".concat(iDx),
          allowReset: false
        }, itemProps));
    }
  })) : null, checkbox && submit ? /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames('at-flx', 'at-al-itm-ctr', 'at-jfy-cont-btw')
  }, /*#__PURE__*/React.createElement(AtrcControlCheckbox, checkbox), /*#__PURE__*/React.createElement(AtrcButton, submit)) : /*#__PURE__*/React.createElement(AtrcButton, submit)), bottomLinks && bottomLinks.length ? /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames('at-flx', 'at-al-itm-ctr', 'at-jfy-cont-ctr', 'at-gap')
  }, /*#__PURE__*/React.createElement(React.Fragment, null, bottomLinks.map(function (item, iDx) {
    return /*#__PURE__*/React.createElement(AtrcLink, _extends({
      key: "authentication-tpl-1-link-".concat(iDx)
    }, item));
  }))) : null));
};
export default AtrcAuthenticationTemplate1;
//# sourceMappingURL=index.js.map