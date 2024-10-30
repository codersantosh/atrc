var _excluded = ["fonts", "family", "isMulti"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*WordPress*/
import { useMemo } from '@wordpress/element';

/* Library */
import { reduce, uniqBy } from 'lodash';

/*Controls*/
import AtrcControlSelect from '../control-select';

/*Local*/
var AtrcControlSelectGoogleFontsWeight = function AtrcControlSelectGoogleFontsWeight(props) {
  var _props$fonts = props.fonts,
    fonts = _props$fonts === void 0 ? [] : _props$fonts,
    _props$family = props.family,
    family = _props$family === void 0 ? '' : _props$family,
    _props$isMulti = props.isMulti,
    isMulti = _props$isMulti === void 0 ? true : _props$isMulti,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var options = useMemo(function () {
    if (family) {
      var selectedFamily = fonts.find(function (item) {
        return item.family === family;
      });
      if (selectedFamily && selectedFamily.variants) {
        return reduce(selectedFamily.variants, function (accumulator, currentValue, currentKey) {
          var item = null;
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
          return uniqBy(accumulator, function (item) {
            return item.value;
          });
        }, []);
      }
    }
    return [];
  }, [family]);
  return /*#__PURE__*/React.createElement(AtrcControlSelect, _extends({}, defaultProps, {
    options: options,
    isMulti: isMulti,
    multiValType: "array"
  }));
};
export default AtrcControlSelectGoogleFontsWeight;
//# sourceMappingURL=font-weight.js.map