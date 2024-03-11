var _excluded = ["className", "variant", "label", "right", "container", "title", "description", "heading", "subHeading", "headingGroup", "button", "hasIcon"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Library*/
import classnames from 'classnames';

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
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    label = props.label,
    _props$right = props.right,
    right = _props$right === void 0 ? null : _props$right,
    container = props.container,
    title = props.title,
    description = props.description,
    heading = props.heading,
    subHeading = props.subHeading,
    headingGroup = props.headingGroup,
    button = props.button,
    hasIcon = props.hasIcon,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    className: classnames(AtrcPrefix('404'), AtrcPrefix('404-tpl-1'), className, variant ? AtrcPrefix('404-tpl-1') + '-' + variant : '')
  }, defaultProps), container ? /*#__PURE__*/React.createElement(AtrcWrap, {
    className: "at-ctnr"
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames('at-flx', 'at-flx-col', 'at-jfy-cont-ctr', 'at-al-itm-ctr', 'at-h', AtrcPrefix('404-cont'))
  }, container.headingGroup ? /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('404-cont-heading'), 'at-m')
  }, container.headingGroup.subHeading ? /*#__PURE__*/React.createElement(AtrcText, {
    tag: "p",
    className: classnames(AtrcPrefix('404-cont-heading-sub-title'))
  }, container.headingGroup.subHeading) : null, container.headingGroup.heading ? /*#__PURE__*/React.createElement(AtrcText, {
    tag: "h3",
    className: classnames(AtrcPrefix('404-cont-heading-title'))
  }, container.headingGroup.heading) : null) : null, container.title ? /*#__PURE__*/React.createElement(AtrcText, {
    tag: "h2",
    className: classnames(AtrcPrefix('404-cont-title'))
  }, container.title) : null, container.description ? /*#__PURE__*/React.createElement(AtrcText, {
    tag: "p",
    className: classnames(AtrcPrefix('404-cont-desc'))
  }, container.description) : null, container.button ? /*#__PURE__*/React.createElement(AtrcButtonGroup, {
    className: classnames('at-m')
  }, container.button.map(function (item, iDx) {
    return /*#__PURE__*/React.createElement(AtrcButton, {
      isLink: true,
      hasIcon: true,
      variant: item.variant ? item.variant : null,
      href: item.url,
      target: item.target ? item.target : '__blank'
    }, item.hasIcon ? /*#__PURE__*/React.createElement(AtrcIconSvg, {
      svg: item.icon
    }) : '', item.text);
  })) : null)) : null);
};
export default Atrc404Template1;
//# sourceMappingURL=index.js.map