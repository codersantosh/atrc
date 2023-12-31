function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcSelect from '../../atoms/select';
import SelectHtmlOptions from './options';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcControlHtmlTag = props => {
  const {
    className = '',
    variant = '',
    value = '',
    options,
    onChange,
    ...defaultProps
  } = props;
  const SelectOptions = () => {
    if (options && options.length) {
      return options;
    }
    return SelectHtmlOptions;
  };
  return /*#__PURE__*/React.createElement(AtrcSelect, _extends({
    className: classnames(AtrcPrefix('html-tag'), className, variant ? AtrcPrefix('html-tag') + '-' + variant : ''),
    options: SelectOptions(),
    value: value,
    onChange: onChange,
    allowReset: 'div' !== value
  }, defaultProps));
};
export default AtrcControlHtmlTag;
//# sourceMappingURL=index.js.map