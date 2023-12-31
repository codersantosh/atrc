function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcControlSelectButton from '../control-select-button';
import SelectHtmlOptions from './options';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcControlWordTag = props => {
  const {
    label = '',
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
  return /*#__PURE__*/React.createElement(AtrcControlSelectButton, _extends({
    className: classnames(AtrcPrefix('ctrl-txt-tag'), className, variant ? AtrcPrefix('ctrl-txt-tag') + '-' + variant : ''),
    label: label,
    options: SelectOptions(),
    value: value,
    onChange: onChange,
    defaultValue: 'p'
  }, defaultProps));
};
export default AtrcControlWordTag;
//# sourceMappingURL=index.js.map