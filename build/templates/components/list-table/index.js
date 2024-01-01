var _excluded = ["tHeadLabels", "renderTbody"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/* Library */
import classnames from 'classnames';

/* Inbuilt */
import AtrcTh from '../../../atoms/th';
import AtrcTbody from './../../../atoms/tbody';
import AtrcThead from './../../../atoms/thead';
import AtrcTr from './../../../atoms/tr';
import AtrcTable from './../../../molecules/table';
import AtrcPrefix from '../../../prefix-vars';

/* Local */
var ListTable = function ListTable(props) {
  var tHeadLabels = props.tHeadLabels,
    renderTbody = props.renderTbody,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(AtrcTable, defaultProps, tHeadLabels && /*#__PURE__*/React.createElement(AtrcThead, {
    className: classnames(AtrcPrefix('bg-primary-light'), 'at-bg-cl')
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
export default ListTable;
//# sourceMappingURL=index.js.map