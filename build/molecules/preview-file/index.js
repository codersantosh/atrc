var _excluded = ["fileName", "variant", "className"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Library*/
import classnames from 'classnames';
import { BsFileEarmark } from 'react-icons/bs';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';
import AtrcText from '../../atoms/text';
import AtrcIcon from '../../atoms/icon';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var AtrcPreviewFile = function AtrcPreviewFile(props) {
  var _props$fileName = props.fileName,
    fileName = _props$fileName === void 0 ? '' : _props$fileName,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    defaultProps = _objectWithoutProperties(props, _excluded);
  if (!fileName) {
    return null;
  }
  return /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('preview-file'), 'at-p', 'at-bdr', 'at-flx', 'at-al-itm-ctr', 'at-gap', 'at-m', className, variant ? AtrcPrefix('preview-file') + '-' + variant : '')
  }, /*#__PURE__*/React.createElement(AtrcIcon, {
    className: classnames('at-m', 'at-cl'),
    type: "bootstrap",
    icon: BsFileEarmark
  }), fileName ? /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('preview-file-name'))
  }, /*#__PURE__*/React.createElement(AtrcText, null, fileName)) : null);
};
export default AtrcPreviewFile;
//# sourceMappingURL=index.js.map