var _excluded = ["fileName", "variant", "className"];
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

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