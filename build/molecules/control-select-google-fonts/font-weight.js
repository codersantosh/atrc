function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/
import { useMemo } from '@wordpress/element';

/* Library */
import { reduce, uniqBy } from 'lodash';

/*Inbuilt*/
import AtrcSelect from '../../atoms/select';

/*Local*/
const AtrcControlSelectGoogleFontsWeight = props => {
  const {
    fonts = [],
    family = '',
    isMulti = true,
    ...defaultProps
  } = props;
  const options = useMemo(() => {
    if (family) {
      const selectedFamily = fonts.find(item => item.family === family);
      if (selectedFamily && selectedFamily.variants) {
        return reduce(selectedFamily.variants, (accumulator, currentValue, currentKey) => {
          let item = null;
          if (currentValue.includes('regular')) {
            item = 400;
          } else {
            item = parseInt(currentValue);
          }
          if (item) {
            accumulator.push({
              label: String(item),
              value: String(item)
            });
          }
          return uniqBy(accumulator, item => item.value);
        }, []);
      }
    }
    return [];
  }, [family]);
  return /*#__PURE__*/React.createElement(AtrcSelect, _extends({}, defaultProps, {
    options: options,
    isMulti: isMulti,
    multiValType: "array"
  }));
};
export default AtrcControlSelectGoogleFontsWeight;
//# sourceMappingURL=font-weight.js.map