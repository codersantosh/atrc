var _excluded = ["className", "variant", "value"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Library*/
import classnames from 'classnames';

/* Atoms */
import AtrcIcon, { AtrcIconSvg } from '../icon';

/* Controls */
import { AtrcControlDividerDefaultSvg } from '../../controls/control-divider';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var AtrcDivider = function AtrcDivider(props) {
  var _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    value = props.value,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var thisClassnames = classnames(AtrcPrefix('divider'), className, variant ? AtrcPrefix('divider') + '-' + variant : '');
  if (value) {
    if ('cust' === value.svgFrm && value.svg) {
      return /*#__PURE__*/React.createElement(AtrcIconSvg, {
        svg: value.svg,
        className: thisClassnames
      });
    }
    if (value.svgDefd) {
      return /*#__PURE__*/React.createElement(AtrcIcon, {
        className: thisClassnames,
        icon: AtrcControlDividerDefaultSvg({
          svgDefd: value.svgDefd
        })
      });
    }
  }
  return null;
};
export default AtrcDivider;
//# sourceMappingURL=index.js.map