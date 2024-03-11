var _excluded = ["variant", "className", "url", "frameBorder", "title"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/* WordPress */
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var AtrcIframe = function AtrcIframe(props) {
  var _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$url = props.url,
    url = _props$url === void 0 ? '' : _props$url,
    _props$frameBorder = props.frameBorder,
    frameBorder = _props$frameBorder === void 0 ? 0 : _props$frameBorder,
    _props$title = props.title,
    title = _props$title === void 0 ? __('Atrc Iframe', 'atrc-prefix-atrc') : _props$title,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement("iframe", _extends({
    className: classnames(AtrcPrefix('frame'), className, variant ? AtrcPrefix('frame') + '-' + variant : ''),
    src: url,
    frameBorder: frameBorder,
    title: title
  }, defaultProps));
};
export default AtrcIframe;
//# sourceMappingURL=index.js.map