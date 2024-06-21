var _excluded = ["className", "contentProps", "variant", "label", "right", "title", "description", "heading", "subHeading", "headingGroup", "buttons", "hasIcon"],
  _excluded2 = ["icon", "text"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/*Library*/
import classnames from 'classnames';
import { isEmpty } from 'lodash-es';

/*Atoms*/
import AtrcWrap from '../../../atoms/wrap';
import AtrcButton from '../../../atoms/button';
import AtrcText from '../../../atoms/text';
import { AtrcIconSvg } from '../../../atoms/icon';

/*Molecules*/
import AtrcButtonGroup from '../../../molecules/button-group';

/*Prefix*/
import AtrcPrefix from '../../../prefix-vars';

/*Local*/
var Atrc404Template1 = function Atrc404Template1(props) {
  var _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$contentProps = props.contentProps,
    contentProps = _props$contentProps === void 0 ? {} : _props$contentProps,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    label = props.label,
    _props$right = props.right,
    right = _props$right === void 0 ? null : _props$right,
    _props$title = props.title,
    title = _props$title === void 0 ? {} : _props$title,
    description = props.description,
    heading = props.heading,
    subHeading = props.subHeading,
    _props$headingGroup = props.headingGroup,
    headingGroup = _props$headingGroup === void 0 ? {} : _props$headingGroup,
    _props$buttons = props.buttons,
    buttons = _props$buttons === void 0 ? [] : _props$buttons,
    hasIcon = props.hasIcon,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    className: classnames(AtrcPrefix('404'), AtrcPrefix('404-tpl-1'), className, variant ? AtrcPrefix('404-tpl-1') + '-' + variant : '')
  }, defaultProps), /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, contentProps, {
    className: classnames('at-flx', 'at-flx-col', 'at-jfy-cont-ctr', 'at-al-itm-ctr', AtrcPrefix('404-cont'), contentProps.className)
  }), !isEmpty(headingGroup) ? /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('404-cont-heading'), 'at-m')
  }, !isEmpty(headingGroup.subHeading) ? /*#__PURE__*/React.createElement(AtrcText, _extends({
    tag: "p",
    className: classnames(AtrcPrefix('404-cont-heading-sub-title'))
  }, headingGroup.subHeading)) : null, !isEmpty(headingGroup.heading) ? /*#__PURE__*/React.createElement(AtrcText, _extends({
    tag: "h3",
    className: classnames(AtrcPrefix('404-cont-heading-title'))
  }, headingGroup.heading)) : null) : null, !isEmpty(title) ? /*#__PURE__*/React.createElement(AtrcText, _extends({
    tag: "h2",
    className: classnames(AtrcPrefix('404-cont-title'))
  }, title)) : null, !isEmpty(description) ? /*#__PURE__*/React.createElement(AtrcText, _extends({
    tag: "p",
    className: classnames(AtrcPrefix('404-cont-desc'))
  }, description)) : null, !isEmpty(buttons) ? /*#__PURE__*/React.createElement(AtrcButtonGroup, {
    className: classnames('at-m')
  }, buttons.map(function (item, iDx) {
    var icon = item.icon,
      _item$text = item.text,
      text = _item$text === void 0 ? '' : _item$text,
      itemProps = _objectWithoutProperties(item, _excluded2);
    return /*#__PURE__*/React.createElement(AtrcButton, itemProps, item.hasIcon ? /*#__PURE__*/React.createElement(AtrcIconSvg, {
      svg: icon
    }) : '', text);
  })) : null));
};
export default Atrc404Template1;
//# sourceMappingURL=index.js.map