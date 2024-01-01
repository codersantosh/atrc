var _excluded = ["children", "className", "variant", "place", "isDismissible", "autoDismiss", "noticeNumber", "onRemove", "onAutoRemove"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*WordPress*/
import { Notice } from '@wordpress/components';
import { useEffect } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

//*Local Components*/
var AtrcNotice = function AtrcNotice(props) {
  var children = props.children,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$place = props.place,
    place = _props$place === void 0 ? '' : _props$place,
    _props$isDismissible = props.isDismissible,
    isDismissible = _props$isDismissible === void 0 ? true : _props$isDismissible,
    _props$autoDismiss = props.autoDismiss,
    autoDismiss = _props$autoDismiss === void 0 ? 5000 : _props$autoDismiss,
    _props$noticeNumber = props.noticeNumber,
    noticeNumber = _props$noticeNumber === void 0 ? 1 : _props$noticeNumber,
    _props$onRemove = props.onRemove,
    onRemove = _props$onRemove === void 0 ? function () {} : _props$onRemove,
    _props$onAutoRemove = props.onAutoRemove,
    onAutoRemove = _props$onAutoRemove === void 0 ? function () {} : _props$onAutoRemove,
    defaultProps = _objectWithoutProperties(props, _excluded);
  useEffect(function () {
    if (autoDismiss) {
      var timer = setTimeout(function () {
        return onAutoRemove();
      }, autoDismiss);
      return function () {
        return clearTimeout(timer);
      };
    }
  });
  return /*#__PURE__*/React.createElement(Notice, _extends({
    className: classnames(AtrcPrefix('notice'), 'at-m', 'at-p', 'at-box-sdw', className, variant ? AtrcPrefix('notice') + '-' + variant : '', place ? AtrcPrefix('place') + '-' + variant : '', noticeNumber ? AtrcPrefix('notice-num') + '-' + noticeNumber : ''),
    isDismissible: isDismissible,
    onRemove: onRemove
  }, defaultProps), children);
};
export default AtrcNotice;
//# sourceMappingURL=index.js.map