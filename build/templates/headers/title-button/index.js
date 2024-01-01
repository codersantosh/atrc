var _excluded = ["title", "btnProps", "resetBtnProps", "className", "allowHeader"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/* Library */
import classnames from 'classnames';
import { isEmpty } from 'lodash';

/* Inbuilt */
import AtrcWrap from '../../../atoms/wrap';
import AtrcButton from '../../../atoms/button';
import AtrcResetButtonIcon from '../../../atoms/reset-button-icon';
import AtrcWord from '../../../atoms/word';
import AtrcHr from '../../../atoms/hr';

/* Local */
var TitleButton = function TitleButton(props) {
  var title = props.title,
    _props$btnProps = props.btnProps,
    btnProps = _props$btnProps === void 0 ? {} : _props$btnProps,
    _props$resetBtnProps = props.resetBtnProps,
    resetBtnProps = _props$resetBtnProps === void 0 ? {} : _props$resetBtnProps,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$allowHeader = props.allowHeader,
    allowHeader = _props$allowHeader === void 0 ? '' : _props$allowHeader,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    className: classnames('at-flx', 'at-al-itm-ctr', 'at-jfy-cont-btw', 'at-p', className ? className : '')
  }, defaultProps), /*#__PURE__*/React.createElement(AtrcWord, {
    tag: "h5",
    className: classnames('at-m')
  }, title), /*#__PURE__*/React.createElement(AtrcWrap, null, /*#__PURE__*/React.createElement(AtrcButton, _extends({
    variant: "primary"
  }, btnProps)), !isEmpty(resetBtnProps) && /*#__PURE__*/React.createElement(AtrcResetButtonIcon, _extends({}, resetBtnProps, {
    value: true
  })))), /*#__PURE__*/React.createElement(AtrcHr, {
    className: classnames('at-m')
  }));
};
export default TitleButton;
//# sourceMappingURL=index.js.map