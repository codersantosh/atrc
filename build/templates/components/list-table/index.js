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
const ListTable = props => {
  const {
    tHeadLabels,
    renderTbody,
    ...defaultProps
  } = props;
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