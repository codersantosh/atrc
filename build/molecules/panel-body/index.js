var _excluded = ["children", "className", "variant", "bodyProps"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*WordPress*/
import { PanelBody } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var AtrcPanelBody = function AtrcPanelBody(props) {
  var children = props.children,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$bodyProps = props.bodyProps,
    bodyProps = _props$bodyProps === void 0 ? {} : _props$bodyProps,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(PanelBody, _extends({
    className: classnames(AtrcPrefix('pnl-body'), className, defaultProps.variant ? null : 'at-p at-bdr', variant ? AtrcPrefix('pnl-body') + '-' + variant : '', variant === 'st' ? 'at-m' : '')
  }, defaultProps), /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, bodyProps, {
    className: classnames(AtrcPrefix('pnl-body-cont'), bodyProps.variant ? null : 'at-p at-bg-cl at-bdr', bodyProps.className ? bodyProps.className : null)
  }), children));
};
export default AtrcPanelBody;
//# sourceMappingURL=index.js.map