var _excluded = ["src", "variant", "className"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcWrap from '../wrap';

/*Local Components*/
var AtrcFile = function AtrcFile(props) {
  var _props$src = props.src,
    src = _props$src === void 0 ? '' : _props$src,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    defaultProps = _objectWithoutProperties(props, _excluded);
  if (!src) {
    return null;
  }
  return /*#__PURE__*/React.createElement(AtrcWrap, null, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames('thumbnail', className)
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: "centered"
  }, /*#__PURE__*/React.createElement("img", {
    src: "http://localhost/gutentor/wp-includes/images/media/archive.png",
    className: "icon",
    draggable: "false",
    alt: ""
  })), /*#__PURE__*/React.createElement(AtrcWrap, {
    className: "filename"
  }, /*#__PURE__*/React.createElement(AtrcWord, null, "abc.zip"))));
};
export default AtrcFile;
//# sourceMappingURL=index.js.map