var _excluded = ["isSticky", "className", "variant", "children"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*WordPress*/
import { useEffect } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var AtrcHeader = function AtrcHeader(props) {
  var _props$isSticky = props.isSticky,
    isSticky = _props$isSticky === void 0 ? false : _props$isSticky,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$children = props.children,
    children = _props$children === void 0 ? '' : _props$children,
    defaultProps = _objectWithoutProperties(props, _excluded);
  useEffect(function () {
    if (isSticky) {
      document.body.classList.add(AtrcPrefix('has-sticky'));
      return function () {
        document.body.classList.remove(AtrcPrefix('has-sticky'));
      };
    }
  }, []);
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    tag: "header",
    className: classnames(AtrcPrefix('header'), 'at-bg-cl', className, isSticky ? AtrcPrefix('header-sticky') : '')
  }, defaultProps), children);
};
export default AtrcHeader;
//# sourceMappingURL=index.js.map