var _excluded = ["className", "variant", "renderToggle", "renderContent", "renderContentStyle"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*WordPress*/
import { Dropdown } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var AtrcDropdown = function AtrcDropdown(props) {
  var _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$renderToggle = props.renderToggle,
    _renderToggle = _props$renderToggle === void 0 ? '' : _props$renderToggle,
    _props$renderContent = props.renderContent,
    _renderContent = _props$renderContent === void 0 ? '' : _props$renderContent,
    _props$renderContentS = props.renderContentStyle,
    renderContentStyle = _props$renderContentS === void 0 ? {} : _props$renderContentS,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(Dropdown, _extends({
    className: classnames(AtrcPrefix('dropdown'), className, variant ? AtrcPrefix('dropdown') + '-' + variant : ''),
    renderToggle: function renderToggle(args) {
      return /*#__PURE__*/React.createElement(AtrcWrap, {
        variant: "render-tog"
      }, _renderToggle(args));
    },
    renderContent: function renderContent(args) {
      return /*#__PURE__*/React.createElement(AtrcWrap, {
        variant: "dropdown-cont",
        style: renderContentStyle
      }, _renderContent(args));
    }
  }, defaultProps));
};
export default AtrcDropdown;
//# sourceMappingURL=index.js.map