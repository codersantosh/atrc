var _excluded = ["className", "variant", "isRounded", "isBordered", "children"],
  _excluded2 = ["tHeadLabels", "renderTbody", "renderTFoot", "tHeadProps", "tBodyProps", "tFootProps"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/*Library*/
import classnames from 'classnames';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';
import AtrcThead from './thead';
import AtrcTbody from './tbody';
import AtrcTfoot from './tfoot';
import AtrcTr from './tr';
import AtrcTh from './th';

/*Local*/
export var AtrcTableTag = function AtrcTableTag(props) {
  var _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$isRounded = props.isRounded,
    isRounded = _props$isRounded === void 0 ? false : _props$isRounded,
    _props$isBordered = props.isBordered,
    isBordered = _props$isBordered === void 0 ? false : _props$isBordered,
    children = props.children,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement("table", _extends({
    className: classnames(AtrcPrefix('tbl'), 'at-w', className, isBordered ? AtrcPrefix('tbl-bordered') + ' at-bdr' : '', isRounded ? AtrcPrefix('tbl-rounded') + ' at-bdr-rad' : '', variant ? AtrcPrefix('tbl') + '-' + variant : '')
  }, defaultProps), children);
};
var AtrcTable = function AtrcTable(props) {
  var tHeadLabels = props.tHeadLabels,
    renderTbody = props.renderTbody,
    renderTFoot = props.renderTFoot,
    _props$tHeadProps = props.tHeadProps,
    tHeadProps = _props$tHeadProps === void 0 ? {} : _props$tHeadProps,
    _props$tBodyProps = props.tBodyProps,
    tBodyProps = _props$tBodyProps === void 0 ? {} : _props$tBodyProps,
    _props$tFootProps = props.tFootProps,
    tFootProps = _props$tFootProps === void 0 ? {} : _props$tFootProps,
    defaultProps = _objectWithoutProperties(props, _excluded2);
  return /*#__PURE__*/React.createElement(AtrcTableTag, defaultProps, tHeadLabels && /*#__PURE__*/React.createElement(AtrcThead, _extends({
    className: classnames('at-bg-cl')
  }, tHeadProps), /*#__PURE__*/React.createElement(AtrcTr, null, tHeadLabels && tHeadLabels.map(function (label, iDx) {
    if ('__blank' === label) {
      return /*#__PURE__*/React.createElement(AtrcTh, {
        key: iDx,
        className: classnames('at-p', 'at-txt-al')
      });
    }
    return /*#__PURE__*/React.createElement(AtrcTh, {
      key: iDx,
      className: classnames('at-p', 'at-txt-al')
    }, label);
  }))), /*#__PURE__*/React.createElement(AtrcTbody, tBodyProps, renderTbody), renderTFoot ? /*#__PURE__*/React.createElement(AtrcTfoot, tFootProps, renderTFoot) : null);
};
export default AtrcTable;
//# sourceMappingURL=index.js.map