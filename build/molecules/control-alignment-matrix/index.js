function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/
// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import { __experimentalAlignmentMatrixControl as AlignmentMatrixControl } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';
import AtrcLabel from '../../atoms/label';

/*Local Components*/
const AtrcControlAlignmentMatrix = props => {
  const {
    label = '',
    value = {},
    variant = '',
    className = '',
    onChange = () => {},
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement(React.Fragment, null, label ? /*#__PURE__*/React.createElement(AtrcLabel, null, label) : null, /*#__PURE__*/React.createElement(AlignmentMatrixControl, _extends({
    className: classnames(AtrcPrefix('ctrl-al-matrix'), className, variant ? AtrcPrefix('ctrl-al-matrix') + '-' + variant : ''),
    value: value,
    onChange: onChange,
    label: label
  }, defaultProps)));
};
export default AtrcControlAlignmentMatrix;
//# sourceMappingURL=index.js.map