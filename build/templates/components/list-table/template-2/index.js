var _excluded = ["tHeadLabels", "renderTbody"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/* Library */
import classnames from 'classnames';

/* Molecules */
import AtrcTable from '../../../../molecules/table';
import AtrcTh from '../../../../molecules/table/th';
import AtrcTbody from '../../../../molecules/table/tbody';
import AtrcThead from '../../../../molecules/table/thead';
import AtrcTr from '../../../../molecules/table/tr';

/* Prefix */

/* Local */
var AtrcListTableTemplate2 = function AtrcListTableTemplate2(props) {
  var tHeadLabels = props.tHeadLabels,
    renderTbody = props.renderTbody,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(AtrcTable, _extends({
    isBordered: true
  }, defaultProps), tHeadLabels && /*#__PURE__*/React.createElement(AtrcThead, {
    className: classnames('at-bg-cl')
  }, /*#__PURE__*/React.createElement(AtrcTr, null, tHeadLabels && tHeadLabels.map(function (label, iDx) {
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
  }))), /*#__PURE__*/React.createElement(AtrcTbody, null, renderTbody));
};
export default AtrcListTableTemplate2;
//# sourceMappingURL=index.js.map