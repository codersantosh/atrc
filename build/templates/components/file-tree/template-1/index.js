var _excluded = ["className", "value", "rootName"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
import React from 'react';

/* WordPress */
import { __ } from '@wordpress/i18n';

/* Library */
import classnames from 'classnames';

/* Atoms */
import AtrcWrap from '../../../../atoms/wrap';
import AtrcText from '../../../../atoms/text';
import { AtrcIconSvg } from '../../../../atoms/icon';
import AtrcLink from '../../../../atoms/link';

/* Molecules */
import AtrcList from '../../../../molecules/list';
import AtrcLi from '../../../../molecules/list/li';

/* Prefix */
import AtrcPrefix from '../../../../prefix-vars';

/* Local */
var FileTree = function FileTree(_ref) {
  var data = _ref.data,
    _ref$name = _ref.name,
    name = _ref$name === void 0 ? '' : _ref$name;
  if (_typeof(data) === 'object' && data.name && data.url) {
    return /*#__PURE__*/React.createElement(AtrcLi, {
      className: "at-tree-folder-file at-flx at-al-itm-ctr at-gap at-m"
    }, /*#__PURE__*/React.createElement(AtrcIconSvg, {
      className: classnames('at-tree-folder-file-icon'),
      svg: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"at-svg\" viewBox=\"0 0 16 16\">\r <path d=\"M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z\"/></svg>"
    }), /*#__PURE__*/React.createElement(AtrcLink, {
      className: classnames('at-tree-folder-file-lnk'),
      href: data.url,
      target: "_blank",
      rel: "noopener noreferrer"
    }, data.name));
  }
  if (name) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcLi, {
      className: classnames('at-tree-folder', 'at-m')
    }, /*#__PURE__*/React.createElement(AtrcWrap, {
      className: classnames('at-tree-folder-ttl', 'at-flx', 'at-al-itm-ctr', 'at-gap')
    }, /*#__PURE__*/React.createElement(AtrcIconSvg, {
      className: classnames('at-tree-folder-ttl-icon'),
      svg: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"at-svg\" viewBox=\"0 0 16 16\">\r <path d=\"M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139q.323-.119.684-.12h5.396z\" /></svg>"
    }), /*#__PURE__*/React.createElement(AtrcText, {
      tag: "h6",
      className: classnames('at-tree-folder-ttl-txt', 'at-m')
    }, name)), /*#__PURE__*/React.createElement(FileTree, {
      name: "",
      data: data
    })));
  }
  if (Object.keys(data)) {
    return /*#__PURE__*/React.createElement(AtrcList, {
      className: classnames('at-tree', 'at-flx', 'at-flx-col', 'at-gap', 'at-m')
    }, Object.keys(data).map(function (key) {
      return /*#__PURE__*/React.createElement(FileTree, {
        key: key,
        name: key,
        data: data[key]
      });
    }));
  }
  return null;
};
var AtrcFileTreeTemplate1 = function AtrcFileTreeTemplate1(props) {
  var _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    value = props.value,
    _props$rootName = props.rootName,
    rootName = _props$rootName === void 0 ? __('Folder', 'atrc-prefix-atrc') : _props$rootName,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    className: classnames(className, AtrcPrefix('file-tre'), 'at-m')
  }, defaultProps), rootName ? /*#__PURE__*/React.createElement(AtrcText, {
    tag: "h6",
    className: classnames('at-m', 'at-tree-ttl')
  }, __('Folder', 'atrc-prefix-atrc')) : null, /*#__PURE__*/React.createElement(FileTree, {
    data: value
  }));
};
export default AtrcFileTreeTemplate1;
//# sourceMappingURL=index.js.map