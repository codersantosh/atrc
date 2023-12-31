"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classnames = _interopRequireDefault(require("classnames"));
var _th = _interopRequireDefault(require("../../../atoms/th"));
var _tbody = _interopRequireDefault(require("./../../../atoms/tbody"));
var _thead = _interopRequireDefault(require("./../../../atoms/thead"));
var _tr = _interopRequireDefault(require("./../../../atoms/tr"));
var _table = _interopRequireDefault(require("./../../../molecules/table"));
var _prefixVars = _interopRequireDefault(require("../../../prefix-vars"));
var _excluded = ["tHeadLabels", "renderTbody"];
/* Library */
/* Inbuilt */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/* Local */
var ListTable = function ListTable(props) {
  var tHeadLabels = props.tHeadLabels,
    renderTbody = props.renderTbody,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(_table.default, defaultProps, tHeadLabels && /*#__PURE__*/React.createElement(_thead.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('bg-primary-light'), 'at-bg-cl')
  }, /*#__PURE__*/React.createElement(_tr.default, null, tHeadLabels && tHeadLabels.map(function (label, iDx) {
    if ('__blank' === label) {
      return /*#__PURE__*/React.createElement(_th.default, {
        key: iDx,
        className: (0, _classnames.default)('at-p', 'at-txt-al')
      });
    }
    return /*#__PURE__*/React.createElement(_th.default, {
      key: iDx,
      className: (0, _classnames.default)('at-p', 'at-txt-al')
    }, label);
  }))), /*#__PURE__*/React.createElement(_tbody.default, null, renderTbody));
};
var _default = exports.default = ListTable;
//# sourceMappingURL=index.js.map